/** @type {import('next').NextConfig} */
const nextConfig = {
  // output: 'export',
  images: {
    unoptimized: true, // ✅ Image optimization বন্ধ, static export এর জন্য ঠিক
  },
};

module.exports = nextConfig;
