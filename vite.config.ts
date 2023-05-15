import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';
import svgr from 'vite-plugin-svgr';
import tsconfigPaths from 'vite-tsconfig-paths';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [svgr(), react(), tsconfigPaths()],
  define: {
    'process.env': process.env,
  },
  base: './',
  resolve: {
    alias: {
      Components: path.resolve(__dirname, './src/components'),
      Assets: path.resolve(__dirname, './src/assets'),
    },
  },
});
