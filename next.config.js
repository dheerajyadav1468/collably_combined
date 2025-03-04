/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["localhost", "127.0.0.1", "cdn.pixabay.com"], // Add "cdn.pixabay.com"
    remotePatterns: [
      {
        protocol: "http",
        hostname: "localhost",
        port: "5000",
        pathname: "/uploads/images/",
      },
      {
        protocol: "http",
        hostname: "127.0.0.1",
        port: "5000",
        pathname: "/uploads/images/",
      },
      {
        protocol: "https",
        hostname: "cdn.pixabay.com",
        pathname: "/photo/", // Allow Pixabay images
      },
    ],
  },
  // Enable TypeScript support in the merged project
  typescript: {
    ignoreBuildErrors: false, // Set to false to ensure TypeScript type checking
  },
  // Configure page extensions if needed
  pageExtensions: ["js", "jsx", "ts", "tsx"], 
};

module.exports = nextConfig;