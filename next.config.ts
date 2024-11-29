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
};

export default nextConfig;
