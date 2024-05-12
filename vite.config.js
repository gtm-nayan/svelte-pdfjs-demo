import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';

export default defineConfig({
	plugins: [
		sveltekit(),
		{
			name: 'svelte-pdfjs',
			config(c) {
				((c.optimizeDeps ?? {}).exclude ??= []).push('pdfjs-dist');
				(c.build ??= {}).target = 'esnext';
			},
			resolveDynamicImport(specifier, importer) {
				if (
					typeof specifier === 'string' &&
					importer.includes('node_modules/pdfjs-dist')
				)
					return false;
			},
			transform(code, id, options) {
				if (id.includes('node_modules/pdfjs-dist') && !options?.ssr)
					return code.replaceAll(/\w+\.isNodeJS/g, 'false');
			},
		},
	],
});
