// @ts-check
import { SITE_URL } from '@/config/site-info';
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
	site: `${SITE_URL}`,
	vite: {
		plugins: [tailwindcss()],
	},
});
