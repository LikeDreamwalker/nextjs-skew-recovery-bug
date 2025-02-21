import type { NextConfig } from "next";

import deploymentId from "./staticId";

const nextConfig: NextConfig = {
  /* config options here */
  reactStrictMode: true,
  deploymentId: deploymentId,
  // deploymentId: "123456",
};

export default nextConfig;
