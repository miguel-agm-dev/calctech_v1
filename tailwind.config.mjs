/** @type {import('tailwindcss').Config} */
const daisyui=require('daisyui');

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [daisyui,],
}
