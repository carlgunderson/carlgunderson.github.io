import React from 'react'
import { GlobalStyles } from '@mui/material'
import { useTheme } from '@mui/material/styles'

export default () => {
	const theme = useTheme()

	const smallHeadingColor = theme.palette.mode === 'dark'
		? theme.palette.text.secondary
		: theme.palette.grey.main

	return (
		<GlobalStyles
			styles={{
				'*': {
					// fontFamily: 'Roboto, Helvetica, sans-serif',
					color: '#242728',
				},
				'::selection': {
					backgroundColor: '#f25c05',
					color: '#fff',
				},
				'h1, h2': {
					fontFamily: '"Roboto Slab", Georgia, serif',
				},
				'.text-center': {
					textAlign: 'center !important',
				},
				'.text-right': {
					textAlign: 'right !important',
				},
				'.text-left': {
					textAlign: 'left !important',
				},
				'.pull-left': {
					float: 'left !important',
				},
				'.pull-right': {
					float: 'right !important',
				},
			}}
		/>
	)
}