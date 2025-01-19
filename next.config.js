/** @type {import('next').NextConfig} */
const nextConfig = {
    webpack: (config) => {
      config.module.rules.push({
        test: /\.(glb|gltf|fbx)$/,
        type: 'asset/resource',
        generator: {
          filename: 'static/chunks/[path][name].[hash][ext]'
        }
      });
      return config;
    },
    compress: true,
    // Ajoutez des optimisations pour la production
    experimental: {
      optimizeCss: true,
      optimizeImages: true,
    },
  }
  
  module.exports = nextConfig;