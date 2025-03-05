"use client"; 

import Breadcrumb from "../../components/Breadcrumbs/Breadcrumb";
import BrandOnboardingForm from "../../components/ProfileBox/brandform";
import DefaultLayout from "../../components/Layouts/DefaultLaout";
import React from "react"
const TablesPage = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName="Tables" />
      <div className="flex flex-col gap-10">
        <BrandOnboardingForm />
      </div>
    </DefaultLayout>
  );
};

export default TablesPage;
