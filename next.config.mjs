/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "gdgccriibsrmjzltjugb.supabase.co",
        // port: "php",
        pathname: "/storage/v1/object/public/images/**",
      },
    ],
  },
}
//   https://php.ninjapizza.com.ua/images/cats/drinks2x.webp

export default nextConfig
