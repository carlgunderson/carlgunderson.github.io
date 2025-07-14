import { createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtools } from '@tanstack/react-router-devtools'

import App from '~/components/App'

export const Route = createRootRoute({
	component: () => (
		<App>
			<Outlet />
			<TanStackRouterDevtools />
		</App>
	),
})
