import path from 'path'
import fs from 'fs'
import mkcert from 'vite-plugin-mkcert'
import { defineConfig, loadEnv } from 'vite'
import { tanstackRouter } from '@tanstack/router-plugin/vite'
import react from '@vitejs/plugin-react'

export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, process.cwd(), '')

	let server = {
		// origin: process.env.API_URL,
		// host: process.env.API_URL,
		host: 'localhost',
		port: 8080,
		// open: true,
		strictPort: true,
		// Vite expects https to be an object or undefined, not a boolean
		...(command === 'serve' ? { https: {} } : {}),
	}

	return {
		mode,
		server,
		preview: {
			port: 8080,
		},
		// base: './',
		// paths: {
		// 	'~/*': ['src/*'],
		// },
		resolve: {
			alias: {
				'~/': `${path.resolve(__dirname, 'src')}/`,
			},
		},
		plugins: [
			mkcert(),
			tanstackRouter({
				target: 'react',
				autoCodeSplitting: true,
			}),
			react(),
			{
				name: 'copy-index-to-404',
				writeBundle() {
					// Copy the built index.html to 404.html for GitHub Pages SPA support
					const indexPath = path.join(__dirname, 'dist', 'index.html');
					const notFoundPath = path.join(__dirname, 'dist', '404.html');
					
					if (fs.existsSync(indexPath)) {
						fs.copyFileSync(indexPath, notFoundPath);
					}
				},
			},
		],
		ssr: {
			noExternal: ['posthog-js', 'posthog-js/react'],
		},
		publicDir: path.join(__dirname, 'public'),
		build: {
			// generate .vite/manifest.json in outDir
			// manifest: true,
			// rollupOptions: {
			// 	// overwrite default .html entry
			// 	input: '/src/index.jsx',
			// },
			outDir: path.join(__dirname, 'dist'),
			modulePreload: {
				polyfill: false,
			},
			sourcemap: env.NODE_ENV === 'development' ? 'inline' : false,
		},
	}
})