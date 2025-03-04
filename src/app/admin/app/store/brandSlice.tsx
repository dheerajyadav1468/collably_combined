import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { API_ROUTES } from '../../app/apiroutes';

export interface Brand {
  _id: string
  brandName: string
  media?: string 
  brandDescription: string
  brandCategory: string
  contactEmail: string
  brandWebsite: string
  brandPhoneNumber: string
 
  gstNumber: string
  password?: string
}


interface BrandsState {
  brands: Brand[];
  currentBrand: Brand | null;
  status: 'idle' | 'loading' | 'succeeded' | 'failed';
  error: string | null;
}

const initialState: BrandsState = {
  brands: [],
  currentBrand: null,
  status: 'idle',
  error: null,
};

export const createBrand = createAsyncThunk(
  "brands/createBrand",
  async (brandData: FormData) => {
    // Log the FormData structure properly
    console.log("Submitting Brand Data:");
    Array.from(brandData.entries()).forEach(([key, value]) => {
      if (value instanceof File) {
        console.log(`${key}: File Name - ${value.name}, Type - ${value.type}, Size - ${value.size} bytes`);
      } else {
        console.log(`${key}:`, value);
      }
    });

    try {
      const response = await fetch(API_ROUTES.CREATE_BRAND, {
        method: "POST",
        body: brandData,
      });

      if (!response.ok) {
        console.error("Error Response Status:", response.status);
        console.error("Error Response Text:", await response.text());
        throw new Error("Failed to create brand");
      }

      return await response.json();
    } catch (error) {
      console.error("Request Failed:", error);
      throw error;
    }
  }
);


export const fetchAllBrands = createAsyncThunk(
  'brands/fetchAllBrands',
  async () => {
    const response = await fetch(API_ROUTES.GET_ALL_BRANDS);
    if (!response.ok) {
      throw new Error('Failed to fetch brands');
    }
    return await response.json();
  }
);

export const fetchBrand = createAsyncThunk(
  'brands/fetchBrand',
  async (id: string) => {
    const response = await fetch(API_ROUTES.GET_BRAND(id));
    if (!response.ok) {
      throw new Error('Failed to fetch brand');
    }
    return await response.json();
  }
);

export const deleteBrand = createAsyncThunk(
  'brands/deleteBrand',
  async (id: string) => {
    const response = await fetch(API_ROUTES.DELETE_BRAND(id), {
      method: 'DELETE',
    });
    if (!response.ok) {
      throw new Error('Failed to delete brand');
    }
    return id;
  }
);

export const updateBrand = createAsyncThunk(
  "brands/updateBrand",
  async ({ id, brandData }: { id: string; brandData: FormData }) => {
    const response = await fetch(API_ROUTES.UPDATE_BRAND(id), {
      method: "PUT",
      body: brandData,
    })
    if (!response.ok) {
      throw new Error("Failed to update brand")
    }
    return await response.json()
  },
)

const brandsSlice = createSlice({
  name: 'brands',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(createBrand.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(createBrand.fulfilled, (state, action: PayloadAction<Brand>) => {
        state.status = 'succeeded';
        state.brands.push(action.payload);
      })
      .addCase(createBrand.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to create brand';
      })
      .addCase(fetchAllBrands.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchAllBrands.fulfilled, (state, action: PayloadAction<Brand[]>) => {
        state.status = 'succeeded';
        state.brands = action.payload;
      })
      .addCase(fetchAllBrands.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch brands';
      })
      .addCase(fetchBrand.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBrand.fulfilled, (state, action: PayloadAction<Brand>) => {
        state.status = 'succeeded';
        state.currentBrand = action.payload;
      })
      .addCase(fetchBrand.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to fetch brand';
      })
      .addCase(deleteBrand.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(deleteBrand.fulfilled, (state, action: PayloadAction<string>) => {
        state.status = 'succeeded';
        state.brands = state.brands.filter(brand => brand._id !== action.payload);
      })
      .addCase(deleteBrand.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to delete brand';
      })
      .addCase(updateBrand.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(updateBrand.fulfilled, (state, action: PayloadAction<Brand>) => {
        state.status = 'succeeded';
        const index = state.brands.findIndex(brand => brand._id === action.payload._id);
        if (index !== -1) {
          state.brands[index] = action.payload;
        }
        state.currentBrand = action.payload;
      })
      .addCase(updateBrand.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || 'Failed to update brand';
      });
  },
});

export default brandsSlice.reducer;
