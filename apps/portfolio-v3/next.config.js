/** @type {import('next').NextConfig} */


const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: [
      'i.scdn.co',
      'images.unsplash.com',
      'api.unsplash.com',
      'unsplash.com',
      's3.us-west-2.amazonaws.com',
      's3-us-west-2.amazonaws.com',
      'res.cloudinary.com'
    ]
  }
}

module.exports = nextConfig