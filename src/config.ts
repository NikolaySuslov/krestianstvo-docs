export const SITE = {
	title: 'Krestianstvo SDK 4 Documentation',
	description: 'Krestianstvo SDK 4',
	defaultLanguage: 'en_US',
};

export const OPEN_GRAPH = {
	image: {
		src: 'https://github.com/withastro/astro/blob/main/assets/social/banner.jpg?raw=true',
		alt:
			'astro logo on a starry expanse of space,' +
			' with a purple saturn-like planet floating in the right foreground',
	},
	twitter: 'astrodotbuild',
};

// This is the type of the frontmatter you put in the docs markdown files.
export type Frontmatter = {
	title: string;
	description: string;
	layout: string;
	image?: { src: string; alt: string };
	dir?: 'ltr' | 'rtl';
	ogLocale?: string;
	lang?: string;
};

export const KNOWN_LANGUAGES = {
	English: 'en',
} as const;
export const KNOWN_LANGUAGE_CODES = Object.values(KNOWN_LANGUAGES);

export const GITHUB_EDIT_URL = `https://github.com/NikolaySuslov/krestianstvo-docs/tree/main`;

export const COMMUNITY_INVITE_URL = `https://discord.gg/awnppF5h`;
// https://discord.gg/awnppF5h
//https://gitter.im/krestianstvo-sdk/community

// See "Algolia" section of the README for more information.
export const ALGOLIA = {
	indexName: 'XXXXXXXXXX',
	appId: 'XXXXXXXXXX',
	apiKey: 'XXXXXXXXXX',
};

export type Sidebar = Record<
	typeof KNOWN_LANGUAGE_CODES[number],
	Record<string, { text: string; link: string }[]>
>;
export const SIDEBAR: Sidebar = {
	en: {
		'About': [
			{ text: 'About', link: 'en/introduction' },
			{ text: 'Try it!', link: 'en/tryit' },
			{ text: 'Architecture', link: 'en/architecture' },
			{ text: 'Development', link: 'en/development' },
			{ text: 'Deployment', link: 'en/deployment' },
			{ text: 'FAQ', link: 'en/faq' },
		],

		'Core': [
			{ text: 'Selo', link: 'en/selo' },
			{ text: 'Object', link: 'en/object' },
			{ text: 'Message', link: 'en/message' },
			{ text: 'Portal', link: 'en/portal' }
		],
		'Libraries': [
			{ text: 'Playground', link: 'en/playground' },
			{ text: 'Three JS', link: 'en/threejs' },
			{ text: 'Fiber / Three JS', link: 'en/fiber' },
			{ text: 'Rapier JS', link: 'en/rapier' }
		],
		'Integrations': [
			// { text: 'Solid JS', link: 'en/page-4' },
			// { text: 'Astro', link: 'en/page-4' },
			// { text: 'Native Script', link: 'en/test' },
			// { text: 'Node JS', link: 'en/test' },
			// { text: 'Max / MSP', link: 'en/page-4' }
		],
		'Tutorials': [
			// { text: 'Hello World', link: 'en/test' },
			// { text: '2D HTML', link: 'en/test' },
			// { text: 'Avatar', link: 'en/test' }
		],
		// 'API': [{ text: 'Page 4', link: 'en/page-4' }],
	}
};

export const REFLECTOR_HOST = "https://time.luminary.su"
//"https://time.krestianstvo.org"
//"https://localhost:3001"
