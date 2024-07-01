import { hostname } from 'os';

/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                hostname: 'i.pinimg.com'
            },
            {
                hostname: 'images.pexels.com'
            },
            {
                hostname: 'image.tmdb.org'
            }
        ]
    }
};

export default nextConfig;
