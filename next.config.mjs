import { optimizeImage } from 'next/dist/server/image-optimizer';

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  // basePath:'',
  // srcDir: 'src',
    images: {
    unoptimized: true, // Required for static export
  },
};

export default nextConfig;
