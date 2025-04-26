import withPWA from "next-pwa";

const nextConfig = {
  // Next.js config 옵션
  images: {
    remotePatterns: [
      {
        protocol: "http" as const,
        hostname: "**",
      },
      {
        protocol: "https" as const,
        hostname: "**",
      },
    ],
  },
};

export default withPWA({
  dest: "public",
  disable: process.env.NODE_ENV === "development",
})(nextConfig);
