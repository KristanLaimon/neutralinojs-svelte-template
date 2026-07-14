import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

// Custom plugin to ensure production build uses the relative Neutralino globals path
function neutralinoBuildPlugin() {
  return {
    name: 'neutralino-build-plugin',
    transformIndexHtml(html: string) {
      return html.replace(
        /src=["']http:\/\/localhost:\d+\/__neutralino_globals\.js["']/,
        'src="/__neutralino_globals.js"'
      )
    }
  }
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    svelte(),
    neutralinoBuildPlugin()
  ],
  build: {
    outDir: 'resources',     // Change output to 'resources'
    emptyOutDir: true,       // Ensure it cleans the directory before building
  },
})
