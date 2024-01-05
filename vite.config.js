import path from 'path'
import fs from 'fs'
import os from 'os'
import dotenv from 'dotenv'
import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'

const homeDirectory = os.homedir()
const documentsPath = path.join(homeDirectory, 'Documents', 'certs')

const keyPath = path.join(documentsPath, 'localhost-key.pem')
const certPath = path.join(documentsPath, 'localhost.pem')

export default defineConfig(({ command, mode }) => {
	const env = loadEnv(mode, process.cwd(), '')

	const key = env.NODE_ENV === 'development'
		? fs.readFileSync(keyPath)
		: fs.readFileSync('/private-key.pem')

	const cert = env.NODE_ENV === 'development'
		? fs.readFileSync(certPath)
		: fs.readFileSync('/private-cert.pem')

	let server = {
		// origin: process.env.API_URL,
		// host: process.env.API_URL,
		host: 'localhost',
		port: 8080,
		open: true,
		strictPort: true,
		https: {
			key,
			cert,
		},
	}

	return {
		mode,
		server,
		preview: {
			port: 8080,
		},
		plugins: [
			react(),
		],
		publicDir: path.join(__dirname, 'public'),
		build: {
			// generate .vite/manifest.json in outDir
			// manifest: true,
			// rollupOptions: {
			// 	// overwrite default .html entry
			// 	input: '/src/index.jsx',
			// },
			outDir: '.',
			// outDir: path.join(__dirname, 'dist'),
			modulePreload: {
				polyfill: false,
			},
			sourcemap: env.NODE_ENV === 'development' ? 'inline' : false,
		},
	}
})