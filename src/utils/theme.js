import { createMuiTheme } from 'material-ui/styles'

const theme = createMuiTheme({
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
	},
})

export default theme