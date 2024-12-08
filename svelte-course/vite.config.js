import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

// https://vite.dev/config/
export default defineConfig({
 
 /* build: {
    rollupOptions:{
     input: "src/m.js" 
    }
  },
  */ 
  plugins: [svelte()],
  build: {
    rollupOptions: {
      external: [], // Explicitly mark `fsevents` as external
    },
  },
})
