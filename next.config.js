/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack: (config) => {
    config.module.rules.push({
      test: /\.(glb|gltf|fbx)$/,
      type: "asset/resource",
      generator: {
        filename: "static/chunks/[path][name].[hash][ext]",
      },
    });
    return config;
  },
  compress: true,
  experimental: {
    optimizeCss: true,
    optimizeImages: true,
  },
};

const withTM = require("next-transpile-modules")(["three"]);
module.exports = withTM();

module.exports = nextConfig;
