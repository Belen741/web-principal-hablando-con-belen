/** @type {import('next').NextConfig} */
const nextConfig = {
  async rewrites() {
    return [
      {
        source: '/practica/:path*',
        destination: 'https://mi-app-externa.com/:path*',
      },
    ];
  },
};

export default nextConfig;
