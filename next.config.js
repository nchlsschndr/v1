/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    compiler: {
        // Enables the styled-components SWC transform
        styledComponents: true,
    },
    // for static export
    // images: {
    //     unoptimized: true,
    // },
};

module.exports = nextConfig;
