/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "frcsfiles.s3.ap-southeast-2.amazonaws.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "frcsfiles.s3.amazonaws.com",
        pathname: "**",
      },
    ],
  },
};

export default nextConfig;
