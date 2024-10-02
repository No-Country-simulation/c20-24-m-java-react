/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: false,
  images: {
    domains: [
      'w.wallhaven.cc',
      'images.pexels.com',
      'example.com',
      'res.cloudinary.com',
    ],
  },
};

export default nextConfig;
