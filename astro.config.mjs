import { defineConfig } from 'astro/config';
import preact from '@astrojs/preact';
import react from '@astrojs/react';
import solidJs from "@astrojs/solid-js";
import mdx from '@astrojs/mdx';
import UnoCSS from '@unocss/astro'
import presetAttributify from '@unocss/preset-attributify'
import presetUno from '@unocss/preset-uno'

// https://astro.build/config
export default defineConfig({

	integrations: [// Enable Preact to support Preact JSX components.
		mdx(),
		solidJs(),
		preact(), // Enable React for the Algolia search component.
		react(),
		UnoCSS(
			{
				presets: [
				presetUno(),
				  presetAttributify({ /* options */ })
				  // ...other presets
				]
			}
		)
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