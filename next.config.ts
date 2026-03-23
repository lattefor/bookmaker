import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    turbopack: {},
    serverExternalPackages: ['pdfjs-dist'],
    experimental: {
        serverActions: {
            bodySizeLimit: '100mb',
        }
    },
    typescript: {
        ignoreBuildErrors: true,
    },
    images: { remotePatterns: [
            { protocol: 'https', hostname: 'covers.openlibrary.org' },
            { protocol: 'https', hostname: 'jztft2edqs8va60e.public.blob.vercel-storage.com' },
        ]}
};

export default nextConfig;
