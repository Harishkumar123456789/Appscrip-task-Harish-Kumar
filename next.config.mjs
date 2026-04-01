const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**', // allow all domains (DEV ONLY)
      },
    ],
  },
};

export default nextConfig;