// import { defineConfig } from 'astro/config';

// export default defineConfig({
//   base: '/hookanddrop/',
//   site: 'https://hookanddrop.com',
//   output: 'static',
//   integrations: [github()]
// });
// import github from '@astrojs/github';
// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
    base: '/hookanddrop/', // 👈 required for GitHub Pages
    vite: {
        resolve: {
            alias: {
                '@': new URL('./src', import.meta.url).pathname,
            },
        },
    },
});