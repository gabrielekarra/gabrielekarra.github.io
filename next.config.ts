import { NextConfig } from "next";

const nextConfig: NextConfig = {
  webpack(config, options) {
    config.module?.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
  output: "export", // Ensure static export for GitHub Pages
  images: {
    unoptimized: true, // Required for GitHub Pages
  },
};

export default nextConfig;
