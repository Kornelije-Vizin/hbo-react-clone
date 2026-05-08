/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    unoptimized: true,

    domains: [
      'cdn.shopify.com',
      'uifaces.co',
      'api.unrealperson.com',
      'mighty.tools',
      'cdn11.bigcommerce.com',
    ],
  },
}

module.exports = nextConfig;
