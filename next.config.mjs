// /** @type {import('next').NextConfig} */
// const nextConfig = {
//     output: 'export',
//     reactStrictMode: true,
// };

// export default nextConfig;


/** @type {import('next').NextConfig} */
const nextConfig = {
    output: 'export',
    reactStrictMode: true,
    trailingSlash: true, // Ensures all paths end with a trailing slash
    images: {
        unoptimized: true, // Disables image optimization for static exports
    },
    // Optional: If you use basePath, you need to configure it
    // basePath: '/your-base-path',
};

export default nextConfig;
