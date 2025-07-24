/*! Copyright [Operator Data](http://operator.ai/), Inc. or its affiliates. All Rights Reserved.
PDX-License-Identifier: UNLICENSED */
import posthog, { type PostHogConfig } from 'posthog-js'
import { PostHogProvider } from 'posthog-js/react'
import { type FC, type PropsWithChildren, useEffect, useRef } from 'react'

const phConfig: Partial<PostHogConfig> = {
  api_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
  person_profiles: 'identified_only',
  defaults: '2025-05-24',
}

const AnalyticsProvider: FC<PropsWithChildren> = ({ children }) => {
  const initialized = useRef(false)

  useEffect(() => {
    if (initialized.current) {
      return
    }

    const toolbarJSON = new URLSearchParams(window.location.hash.substring(1)).get(
      '__posthog',
    )

    if (toolbarJSON) {
      posthog.loadToolbar({
        ...JSON.parse(toolbarJSON),
        ui_host: process.env.NEXT_PUBLIC_POSTHOG_HOST,
      })
    }

    posthog.init(process.env.NEXT_PUBLIC_POSTHOG_KEY!, {
      ...phConfig,
      // loaded: function (posthog) {
      //   posthog.identify()
      // },
    })

    initialized.current = true
  }, [])

  return <PostHogProvider client={posthog}>{children}</PostHogProvider>
}

export default AnalyticsProvider
