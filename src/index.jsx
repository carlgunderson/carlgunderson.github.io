import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'
import { PostHogProvider } from 'posthog-js/react'

import App from './components/App'

const container = document.getElementById('app-root')

const root = createRoot(container)

root.render(
	<StrictMode>
		<PostHogProvider
			apiKey={import.meta.env.VITE_PUBLIC_POSTHOG_KEY}
			options={{
				api_host: import.meta.env.VITE_PUBLIC_POSTHOG_HOST,
				capture_exceptions: true,
				debug: import.meta.env.MODE === 'development',
			}}
		>
			<Router>
				<App />
			</Router>
		</PostHogProvider>
	</StrictMode>
)