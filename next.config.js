/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            allowedOrigins: ["ideal-bassoon-4jjw65xpjjr735q46-3000.app.github.dev", "localhost:3000"],
        },
    },
    images: {
        domains: [
            "utfs.io",
        ]
    }
}

module.exports = nextConfig
