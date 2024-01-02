/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'http',
                hostname: 'localhost',
                port: '4000',
                pathname: '/i/**',
            },
            {
                hostname: `${process.env.NEXT_PUBLIC_SERVER_URL}`,
                pathname: '/i/**',
            },
        ],
    }
}

module.exports = nextConfig
