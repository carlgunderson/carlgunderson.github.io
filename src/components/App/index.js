import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import GridList from '@material-ui/core/GridList'
import GridListTile from '@material-ui/core/GridListTile'

import ExperienceCard from '../ExperienceCard'
import theme from '../../utils/theme'
import '../../sass/index.scss'

const styles = {
	header: {
		display: 'flex',
		justifyContent: 'space-between',
	},
	content: {
		marginTop: 'calc(50vh - 224px)',
		paddingLeft: window.innerWidth < 600 ? '16px' : '24px',
	},
	gridListWrapper: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	},
	gridList: {
		width: '100%',
		flexWrap: 'nowrap',
		transform: 'translateZ(0)',
		overflowY: 'auto',
	},
	gridListTile: {
		overflow: 'visible',
	},
	gridListTileRoot: {
		height: '100% !important',
	},
	titleBar: {
		background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
	},
	footer: {
		position: 'fixed',
		right: '0px',
		bottom: '15px',
		left: '0px',
		textAlign: 'center',
	},
}

class App extends Component {

	render() {
		let { classes } = this.props
		return (
			<MuiThemeProvider theme={ theme }>
				<CssBaseline />
				<AppBar position='static'>
					<Toolbar className={ classes.header }>
						<Typography variant='h4'>carl gunderson</Typography>
						<Hidden only='xs'><Typography variant='h4'>web development portfolio</Typography></Hidden>
					</Toolbar>
				</AppBar>
				<div className={ classes.content }>
					<div className={ classes.gridListWrapper }>
						<GridList className={ classes.gridList } cols={ window.innerWidth < 600 ? 1.2 : 2.5 }>
							<GridListTile classes={{ root: classes.gridListTileRoot, tile: classes.gridListTile }}>
								<ExperienceCard
									link='https://www.govx.com'
									image='../images/card-govx-small.jpg'
									title='GovX'
									description='Senior Web Developer' />
							</GridListTile>
							<GridListTile classes={{ root: classes.gridListTileRoot, tile: classes.gridListTile }}>
								<ExperienceCard
									link='https://start.att.net/exclusive/uverse/uverse-tv'
									image='../images/card-uverse-small.jpg'
									title='U-verse'
									description='Senior Web Developer' />
							</GridListTile>
							<GridListTile classes={{ root: classes.gridListTileRoot, tile: classes.gridListTile }}>
								<ExperienceCard
									link='https://www.healthpartners.com/hp/index.html'
									image='../images/card-hp-small.jpg'
									title='HealthPartners'
									description='Front-end Web Developer' />
							</GridListTile>
							<GridListTile classes={{ root: classes.gridListTileRoot, tile: classes.gridListTile }}>
								<ExperienceCard
									link='https://www.digi.com'
									image='../images/card-digi-small.jpg'
									title='Digi'
									description='Applications Developer / Web Designer' />
							</GridListTile>
						</GridList>
					</div>
				</div>
				<div className={ classes.footer }>
					<Typography color='textSecondary'>&copy; { (new Date()).getFullYear() } Carl Gunderson</Typography>
				</div>
			</MuiThemeProvider>
		)
	}
}

export default withStyles(styles)(App)