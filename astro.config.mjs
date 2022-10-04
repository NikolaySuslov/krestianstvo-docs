import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import solidJs from "@astrojs/solid-js";
import mdx from '@astrojs/mdx';
import uno from 'astro-uno'
import { presetUno, presetAttributify } from 'unocss'

// https://astro.build/config
export default defineConfig({

	integrations: [// Enable Preact to support Preact JSX components.
		mdx(),
		solidJs(),
		preact(), // Enable React for the Algolia search component.
		react(),
		uno({
			presets: [presetUno(), presetAttributify({ /* preset options */ })]
		})
	],
	site: `http://docs.krestianstvo.org`,
	markdown: {
		shikiConfig: {
			// Choose from Shiki's built-in themes (or add your own)
			// https://github.com/shikijs/shiki/blob/main/docs/themes.md
			theme: 'github-dark-dimmed',
			// Add custom languages
			// Note: Shiki has countless langs built-in, including .astro!
			// https://github.com/shikijs/shiki/blob/main/docs/languages.md
			langs: [],
			// Enable word wrap to prevent horizontal scrolling
			wrap: true,
		},
	},
});