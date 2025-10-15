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
  // To update the proxy domain:
  // 1) Replace 'https://mi-app-externa.com' with the new domain.
  // 2) Restart the Next.js server so the change takes effect.
};

export default nextConfig;
