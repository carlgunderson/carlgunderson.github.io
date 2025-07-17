import React from 'react'
import type { AppProps } from 'next/app'
import '@fontsource-variable/outfit'
import '@fontsource-variable/playfair-display'
import '@radix-ui/themes/styles.css'
import '../src/styles.css'

import App from '../src/components/App'
import AnalyticsProvider from '../src/providers/AnalyticsProvider'

export default function NextApp({ Component, pageProps }: AppProps) {
  return (
    <AnalyticsProvider>
      <App>
        <Component {...pageProps} />
      </App>
    </AnalyticsProvider>
  )
}
