import type { NextConfig } from "next";

import deploymentId from "./staticId";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  deploymentId: deploymentId,
};

export default nextConfig;
