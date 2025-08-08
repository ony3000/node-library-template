import { resolve } from 'node:path';
import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'DemoLib',
      fileName: 'demo-lib',
    },
  },
  plugins: [
    dts({
      include: ['src/**'],
    }),
    tsconfigPaths(),
  ],
});
