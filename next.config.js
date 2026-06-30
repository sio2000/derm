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
      {
        source: '/el/ypiresies/prosopo/fractional-laser-co2',
        destination: '/el/ypiresies/prosopo/fractional-laser',
        permanent: true,
      },
      {
        source: '/el/ypiresies/prosopo/fractional-laser-co2/',
        destination: '/el/ypiresies/prosopo/fractional-laser/',
        permanent: true,
      },
    ];
  },
};

module.exports = nextConfig;
