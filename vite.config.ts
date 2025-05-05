import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [angular()],
  server: {
    proxy: {
      '/api': {
        target: 'http://128.24.65.53:3000',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ''),
          },
    },
  },
});

function angular(): import("vite").PluginOption {
    throw new Error('Function not implemented.');
}
