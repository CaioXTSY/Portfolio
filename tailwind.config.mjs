/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#e63946',
					light: 'rgba(230, 57, 70, 0.1)',
					medium: 'rgba(230, 57, 70, 0.3)',
					dark: 'rgba(230, 57, 70, 0.5)',
				},
				dark: {
					DEFAULT: '#0a0a0a',
					alt: '#111111',
				},
				light: '#fafafa',
			},
			fontFamily: {
				inter: ['Archivo', 'system-ui', '-apple-system', 'sans-serif'],
				display: ['Space Grotesk', 'Archivo', 'system-ui', 'sans-serif'],
			},
			transitionDuration: {
				400: '400ms',
			},
		},
	},
	plugins: [],
}
