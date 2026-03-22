import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/charting",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
