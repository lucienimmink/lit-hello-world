import { defineConfig } from 'vite';
import { chunkSplitPlugin } from 'vite-plugin-chunk-split';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    entry: 'index.html',
  },
  plugins: [
    chunkSplitPlugin({
      strategy: 'default',
      customSplitting: {
        vendor: [/node_modules/],
      },
    }),
  ],
});
