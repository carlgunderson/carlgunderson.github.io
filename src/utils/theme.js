import { createTheme } from '@material-ui/core/styles'

const theme = createTheme({
	palette: {
		primary: {
			light: '#fff',
			main: '#fafafa',
			dark: '#c7c7c7',
			contrastText: '#222',
		},
		secondary: {
			light: '#ff8e3f',
			main: '#f25c05',
			dark: '#b82800',
			contrastText: '#fff',
		},
		text: {
			primary: 'rgba(0, 0, 0, 0.87)',
			secondary: 'rgba(0, 0, 0, 0.54)',
			disabled: 'rgba(0, 0, 0, 0.38)',
			hint: 'rgba(0, 0, 0, 0.38)',
		}
	},
	typography: {
		fontFamily: 'Roboto Slab',
	},
})

export default theme