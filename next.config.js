/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,

  images: {
    domains: [
      "files.stripe.com",
    ]
  }

  // this.experimental: {
  //   images: {
  //     allowFutureImage: true,
  //   }
  // }
}

module.exports = nextConfig
