import React, { Component } from 'react'
import { MuiThemeProvider, withStyles } from 'material-ui/styles'
import Reboot from 'material-ui/Reboot'
import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import theme from '../../utils/theme'

const styles = theme => ({
	flex: {
		display: 'flex',
		justifyContent: 'space-between',
	},
})

class App extends Component {

	render() {
		let { classes } = this.props
		return (
			<MuiThemeProvider theme={ theme }>
				<Reboot />
				<AppBar>
					<Toolbar className={ classes.flex }>
						<Typography variant='title'>carl gunderson</Typography>
						<Typography variant='title'>web development portfolio</Typography>
					</Toolbar>
				</AppBar>
			</MuiThemeProvider>
		)
	}
}

export default withStyles(styles)(App)