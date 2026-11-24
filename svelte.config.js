// svelte.config.js
import adapter from '@sveltejs/adapter-static';


  // export default {
	/* or */

  /** @type {import('@sveltejs/kit').Config} */
  const config = {
	trailingSlash: 'always',
	kit: {
		paths: {
			// Leave empty for a root deployment, or set BASE_PATH=/agweather for a subdirectory.
			base: process.env.BASE_PATH ?? ''
		},
		adapter: adapter({
			pages: 'build',
			assets: 'build',
			strict: true
		})
	}
};

export default config;


// import adapter from '@sveltejs/adapter-vercel';

// /** @type {import('@sveltejs/kit').Config} */
// const config = {
// 	compilerOptions: {
// 		// Force runes mode for the project, except for libraries. Can be removed in svelte 6.
// 		runes: ({ filename }) => filename.split(/[/\\]/).includes('node_modules') ? undefined : true
// 	},
// 	kit: { adapter: adapter() }
// };

// export default config;
