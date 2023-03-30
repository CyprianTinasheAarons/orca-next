/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: '',
  images: {
    domains: [
      'firebasestorage.googleapis.com',
      'gateway.ipfscdn.io',
      'ipfs.thirdwebcdn.com',
    ],
  },
}

module.exports = nextConfig
