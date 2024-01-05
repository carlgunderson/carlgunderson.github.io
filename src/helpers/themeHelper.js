import { createTheme } from '@mui/material/styles'

const theme = createTheme({
	palette: {
		primary: {
			main: '#2AACA3',
		},
		secondary: {
			main: '#484873',
		},
		luna: {
			main: '#009899',
		},
		smashtech: {
			main: '#000',
		},
		govx: {
			main: '#2a2d36',
		},
		piksel: {
			main: '#007dba',
		},
		healthpartners: {
			main: '#60489d',
		},
		digi: {
			main: '#91d46c',
		},
	},
	typography: {
		fontFamily: 'Roboto Slab',
	},
	components: {
		MuiButton: {
			defaultProps: {
				// disableRipple: true, // No more ripple, on the whole application 💣!
			},
			styleOverrides: {
				root: {
					fontWeight: 600,
					borderWidth: '2px',
					'&:hover': {
						borderWidth: '2px',
					},
				},
			},
		},
		MuiFab: {
			defaultProps: {
				// disableRipple: true, // No more ripple, on the whole application 💣!
			},
			styleOverrides: {
				root: {
					backgroundColor: 'transparent',
					border: '2px solid transparent',
					boxShadow: 'none',
					fontWeight: 600,
					borderWidth: '2px',
					'&:hover': {
						borderWidth: '2px',
					},
				},
			},
		},
	},
})

export default theme