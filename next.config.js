/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'storage.googleapis.com',
        pathname: '/afffideaglobal/**',
      },
    ],
  },
  async redirects() {
    return [
      {
        source: '/el',
        destination: '/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
