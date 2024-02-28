/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'i.imgur.com',
                port: '',
            },
            {
                protocol: 'https',
                hostname: 'assets.airstack.xyz',
                port: '',
            }
        ]
    }
};

export default nextConfig;
