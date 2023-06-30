import { defineConfig, splitVendorChunkPlugin } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/hello-world.ts',
      name: 'HelloWorld',
      fileName: 'hello-world',
    },
  },
  plugins: [splitVendorChunkPlugin()],
});
