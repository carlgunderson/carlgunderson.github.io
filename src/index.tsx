/// <reference types="vite/client" />
import '@fontsource-variable/outfit'
import '@fontsource-variable/playfair-display'
import '@radix-ui/themes/styles.css'
import { createRouter, RouterProvider } from '@tanstack/react-router'
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import { routeTree } from './routeTree.gen'
import AnalyticsProvider from './providers/AnalyticsProvider'

const container = document.getElementById('root')

const root = createRoot(container!)

const router = createRouter({
	routeTree,
	scrollRestoration: true,
	scrollRestorationBehavior: 'smooth',
})

root.render(
	<StrictMode>
		<AnalyticsProvider>
			<RouterProvider router={router} />
		</AnalyticsProvider>
	</StrictMode>
)