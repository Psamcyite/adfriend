import { defineConfig } from 'vite'
import { crx } from '@crxjs/vite-plugin'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

import manifest from './src/manifest'

export default defineConfig(({ mode }) => {
  return {
    build: {
      emptyOutDir: true,
      outDir: 'build',
      rollupOptions: {
        onwarn(warning, warn) {
          if (warning.code === 'UNRESOLVED_IMPORT') {
            console.warn('⚠️ Rollup could not resolve:', warning.source);
          }
          warn(warning);
        },
      },
    },
    plugins: [
      crx({ manifest }), react(),
      tailwindcss(),
    ],
  }
})
