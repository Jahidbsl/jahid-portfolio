/** @type {import('next').NextConfig} */
const nextConfig = {
  // Tell Turbopack exactly where your project root is
  turbopack: {
    root: ".",
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
        port: "",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
