import { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config, options) {
    config.module?.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"], // Enables importing SVGs as React components
    });
    return config;
  },
  output: "export", // Enables static export for GitHub Pages
  images: {
    unoptimized: true, // Disables server-side image optimization
  },
  basePath: "", // Adjust this to match your GitHub repo name if deploying to a subdirectory
};

export default nextConfig;
