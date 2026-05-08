/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      'cdn.shopify.com',
      'uifaces.co',
      'api.unrealperson.com',
      'mighty.tools',
    ],
  },
}

module.exports = nextConfig;
