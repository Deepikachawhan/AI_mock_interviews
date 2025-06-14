import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    eslint: {
        ignoreDuringBuilds: true,
    },
      typrscript: {
        ignoreBuildErrors: true,
      }

};

export default nextConfig;
