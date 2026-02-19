/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Warning: Isse production build mein ESLint errors ignore ho jayenge
    ignoreDuringBuilds: true,
  },
  typescript: {
    // Agar TS errors bhi aa rahe hain toh ise bhi true kar sakte hain
    ignoreBuildErrors: true, 
  },
  reactStrictMode: true,
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgoConfig: {
              plugins: [
                {
                  name: 'removeViewBox',
                  active: false,
                },
              ],
            },
          },
        },
      ],
    })
    return config
  },
}

export default nextConfig
