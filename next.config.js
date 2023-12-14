/** @type {import('next').NextConfig} */
 const nextConfig = {
   reactStrictMode: true,
   productionBrowserSourceMaps: true
 }

// const nextConfig = {
// 	async rewrites() {
// 		return [
// 			{
// 				source: '/api/:path*',
// 				destination: `${"http://localhost:5001"}/:path*`,
// 			},
// 		]
// 	},
// }

module.exports = nextConfig