import * as path from 'path';
import react from '@vitejs/plugin-react';
import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [{ find: '~', replacement: path.resolve(__dirname, 'src') }],
  },
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  test: {
    environment: 'jsdom',
    setupFiles: ['./tests/setup.ts'],
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-ignore
    testMatch: ['./tests/**/*.test.tsx'],
    globals: true,
  },
});
