/** @type {import('next').NextConfig} */
const nextConfig = {
  // Enable image optimization for Cloudinary
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
    ],
  },
};

module.exports = nextConfig;
