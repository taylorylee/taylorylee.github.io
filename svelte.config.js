import adapter from '@sveltejs/adapter-auto';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter()
	}
};

export default config;

/*preprocess: sveltePreprocess({
    scss: {
      prependData: `@import '$global';`,
      importer(url, prev, done) {
        if (url === '$global') {
          return done({ file: './src/styles/global.scss' });
        }
        return done({ file: prev });
      },
    },
  });*/

