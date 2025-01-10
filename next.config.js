/** @type {import('next').NextConfig} */
const nextConfig = {
    experimental: {
        serverActions: {
            allowedOrigins: ["ideal-bassoon-4jjw65xpjjr735q46-3000.app.github.dev", "localhost:3000"],
        },
    },
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "utfs.io",
            },
            {
                protocol: "https",
                hostname: "9paple0lx4.ufs.sh",
            },
        ]
    }
}

module.exports = nextConfig
