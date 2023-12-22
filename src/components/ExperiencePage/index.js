import React from 'react'
import { ThemeProvider as MuiThemeProvider, withStyles } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Hidden from '@material-ui/core/Hidden'
import ImageList from '@material-ui/core/ImageList'
import ImageListItem from '@material-ui/core/ImageListItem'

import CustomLink from '../Link'
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
	},
	imageListWrapper: {
		display: 'flex',
		flexWrap: 'wrap',
		justifyContent: 'space-around',
	},
	imageList: {
		width: '100%',
		flexWrap: 'nowrap',
		transform: 'translateZ(0)',
		overflowY: 'auto',
		paddingLeft: window.innerWidth < 600 ? '16px' : '24px',
	},
	imageListItem: {
		overflow: 'visible',
	},
	imageListItemRoot: {
		height: '100% !important',

		'&:last-child': {
			paddingRight: window.innerWidth < 600 ? '16px !important' : '24px !important',
		},
	},
	titleBar: {
		background: 'linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.3) 70%, rgba(0,0,0,0) 100%)',
	},
	icons: {
		display: 'flex',
	},
	icon: {
		height: '32px',

		'&:hover': {
			
		}
	},
	footer: {
		position: 'fixed',
		right: '0px',
		bottom: '15px',
		left: '0px',
		textAlign: 'center',
	},
}

const ExperiencePage = ({ classes }) => (
	<div className={ classes.content }>
		<div className={ classes.imageListWrapper }>
			<ImageList className={ classes.imageList } cols={ window.innerWidth < 600 ? 1.2 : 2.5 }>
				<ImageListItem classes={{ root: classes.imageListItemRoot, item: classes.imageListItem }}>
					<ExperienceCard
						link='https://member.lunadna.com'
						image='../images/luna-my-data.png'
						title='Luna (DNA)'
						description='Lead Front-end Engineer' />
				</ImageListItem>
				<ImageListItem classes={{ root: classes.imageListItemRoot, item: classes.imageListItem }}>
					<ExperienceCard
						link='https://www.skinnyfit.com'
						image='../images/card-skinnyfit-full.jpg'
						title='SkinnyFit'
						description='Senior Web Developer' />
				</ImageListItem>
				{ /* <ImageListItem classes={{ root: classes.imageListItemRoot, item: classes.imageListItem }}>
					<ExperienceCard
						link='https://www.footgod.com'
						image='../images/card-footgod-full.jpg'
						title='FootGod'
						description='Senior Web Developer' />
				</ImageListItem> */ }
				<ImageListItem classes={{ root: classes.imageListItemRoot, item: classes.imageListItem }}>
					<ExperienceCard
						link='https://www.govx.com'
						image='../images/card-govx-full.jpg'
						title='GovX'
						description='Senior Web Developer' />
				</ImageListItem>
				<ImageListItem classes={{ root: classes.imageListItemRoot, item: classes.imageListItem }}>
					<ExperienceCard
						link='https://start.att.net/exclusive/uverse/uverse-tv'
						image='../images/card-uverse-full.jpg'
						title='U-verse'
						description='Senior Web Developer' />
				</ImageListItem>
				<ImageListItem classes={{ root: classes.imageListItemRoot, item: classes.imageListItem }}>
					<ExperienceCard
						link='https://www.healthpartners.com/hp/index.html'
						image='../images/card-hp-full.jpg'
						title='HealthPartners'
						description='Front-end Web Developer' />
				</ImageListItem>
				<ImageListItem classes={{ root: classes.imageListItemRoot, item: classes.imageListItem }}>
					<ExperienceCard
						link='https://www.digi.com'
						image='../images/card-digi-full.jpg'
						title='Digi'
						description='Applications Developer / Web Designer' />
				</ImageListItem>
			</ImageList>
		</div>
	</div>
)

export default withStyles(styles)(ExperiencePage)