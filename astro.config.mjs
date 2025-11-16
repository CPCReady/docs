// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'CPCReady Documentation Site',
			tagline: 'v0.1.0',
			favicon: '/favicon.png',
			logo: {
				src: './src/assets/CPCReady_logo.png',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/CPCReady/cpc2' }],
			sidebar: [
				{
					label: 'Guides',
					items: [
						// Each item here is one entry in the navigation menu.
						{ label: 'Example Guide', slug: 'guides/utilidades'},
						{ label: 'Instalacion', slug: 'guides/install' },
						{ label: 'Change Log', slug: 'guides/changelog' },
					],
				},
				{
					label: 'Reference',
					autogenerate: { directory: 'reference' },
				},
				],
		}),
	],
});
