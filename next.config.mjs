// @ts-check

/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
!process.env.SKIP_ENV_VALIDATION && (await import("./src/env.mjs"));

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  // Disable ESLint warnings as errors during build
  eslint: {
    // Warning: This allows the build to succeed even if there are ESLint warnings
    ignoreDuringBuilds: false,
  },

  // 添加图像优化
  images: {
    domains: ['1000ai.ai', 'cdn.1000ai.ai'],
    formats: ['image/avif', 'image/webp'],
  },
  
  // 添加压缩
  compress: true,
  
  // 添加缓存控制
  headers: async () => {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, s-maxage=86400',
          },
        ],
      },
    ];
  },

  /**
   * If you have the "experimental: { appDir: true }" setting enabled, then you
   * must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },

  webpack(config) {
    config.experiments = {
      asyncWebAssembly: true,
      layers: true,
    };

    return config;
  },
};
export default config;
