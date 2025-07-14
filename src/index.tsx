/// <reference types="vite/client" />
import '@fontsource-variable/outfit'
import '@fontsource-variable/playfair-display'
import '@radix-ui/themes/styles.css'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { PostHogProvider } from 'posthog-js/react'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { routeTree } from './routeTree.gen'

const container = document.getElementById('root')

const root = createRoot(container!)

const router = createRouter({
	routeTree,
	scrollRestoration: true,
	scrollRestorationBehavior: 'smooth',
})

root.render(
	<StrictMode>
		<PostHogProvider
			apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY}
			options={{
				api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
				capture_exceptions: import.meta.env.MODE === 'production',
				// debug: import.meta.env.MODE === 'development',
			}}
		>
			<RouterProvider router={router} />
		</PostHogProvider>
	</StrictMode>
)