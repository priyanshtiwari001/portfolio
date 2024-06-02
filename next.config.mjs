/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
      remotePatterns: [
        {
          protocol: "https",
          hostname: "images.unsplash.com",
        },
        {
          protocol: "https",
          hostname: "th.bing.com",
        },
        { protocol: "https", hostname: "images.g2crowd.com" },
      ],
    },
  };
  
  export default nextConfig;
  