// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	site: 'https://cpcready.github.io',
	base: process.env.NODE_ENV === 'production' ? '/docs' : '/',
	integrations: [
		starlight({
			title: 'Documentation Site',
			tagline: 'v1.0.0',
			favicon: '/favicon.png',
			logo: {
				src: './src/assets/icon_512x512@2x.png',
			},
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/CPCReady/cpc' }],
			sidebar: [
				{
					label: 'Guias',
					items: [
						{ label: 'Instalacion', slug: 'guides/install' },
						{ label: 'Actualizacion', slug: 'guides/update' },
						{ label: 'Comandos', slug: 'guides/commands' },
						{ label: 'Changelog', slug: 'guides/changelog' },
						{ label: 'Roadmap', slug: 'guides/roadmap' },
					],
				},
				{
					label: 'Referencia',
					autogenerate: { directory: 'referencia' },
				},
				{
					label: 'API Reference',
					autogenerate: { directory: 'api' },
				},
				],
		}),
	],
});
