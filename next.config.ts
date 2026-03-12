import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "www.euroworkmatch.com" }],
        destination: "https://euroworkmatch.com/:path*",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
