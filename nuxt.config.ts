// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	vite: {
		plugins: [
			{
				name: 'configure-response-headers',
				configureServer: (server) => {
					server.middlewares.use((_req, res, next) => {
						res.setHeader('Cross-Origin-Embedder-Policy', 'require-corp');
						res.setHeader('Cross-Origin-Opener-Policy', 'same-origin');
						next();
					});
				},
			},
		],
		optimizeDeps: {
			exclude: ['@sqlite.org/sqlite-wasm'],
		},
	},
	typescript: {
		strict: true,
		typeCheck: true,
		shim: false,
	},
});
