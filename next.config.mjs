/** @type {import('next').NextConfig} */
const nextConfig = {
  env: {
    NEXT_PUBLIC_API_URL: process.env.CLOUD_NAME,
  },
};

export default nextConfig;
