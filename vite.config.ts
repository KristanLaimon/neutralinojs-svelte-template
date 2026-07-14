import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// https://vite.dev/config/
export default defineConfig({
  plugins: [svelte()],
  build: {
    outDir: 'resources',     // Change output to 'resources'
    emptyOutDir: true,       // Ensure it cleans the directory before building
  },
})
