import adapter from '@sveltejs/adapter-auto';
import path from 'path';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		// adapter-auto only supports some environments, see https://kit.svelte.dev/docs/adapter-auto for a list.
		// If your environment is not supported or you settled on a specific environment, switch out the adapter.
		// See https://kit.svelte.dev/docs/adapters for more information about adapters.
		adapter: adapter()
	},
	vite: {
		server: {
			fs: {
				allow: [path.resolve(process.cwd(), 'node_modules'),
					path.resolve(process.cwd(), '.'),
					path.resolve(process.cwd(), 'src')]
			}
		}
	}
};

export default config;
