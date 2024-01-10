import React from 'react'
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles'
import {
	Box,
	CssBaseline,
	Typography,
} from '@mui/material'

import theme from '../../helpers/themeHelper'
import GlobalStyles from '../GlobalStyles'
import Header from '../Header'
import Section from '../Section'

const App = () => (
	<MuiThemeProvider theme={ theme }>
		<CssBaseline />
		<GlobalStyles />
		<Header />
		<Section />
		<Box
			sx={{
				position: 'relative',
				zIndex: 1,
				width: '100vw',
				height: '52px',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				bgcolor: 'rgba(255, 255, 255, .88)',
			}}
		>
			<Typography variant='body2' color='textSecondary' fontWeight={ 600 }>
				with &#x2764; from San Diego
			</Typography>
			<Typography color='textSecondary' variant='caption'>
				&copy; { (new Date()).getFullYear() } Carl Gunderson
			</Typography>
		</Box>
	</MuiThemeProvider>
)

export default App