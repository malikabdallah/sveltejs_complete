import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'
import { sveltePreprocess } from 'svelte-preprocess';
import { preprocess } from 'svelte/compiler'



/* 
export default {
  // Consult https://svelte.dev/docs#compile-time-svelte-preprocess
  // for more information about preprocessors
 // preprocess: vitePreprocess(),
    preprocess: sveltePreprocess({
      scss: {}
    })
} */


const config = {
  preprocess: sveltePreprocess({
    scss: {}

   })
}

export default config;