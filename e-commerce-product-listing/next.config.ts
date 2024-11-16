import type { NextConfig } from "next";

const nextConfig: NextConfig = {
};

module.exports = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'via.placeholder.com',
            },
        ],
    },
};


export default nextConfig;
