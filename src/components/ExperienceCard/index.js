import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'

import CustomLink from '../Link'

const styles = {
	card: {
		position: 'relative',

		'&:hover': {

			'& $image': {
				'&:after': {
					backgroundColor: 'rgba(0, 0, 0, .5)',
				},
			},
			'& $iconContainer': {
				opacity: 1,
			},
			'& $content': {
				borderColor: '#f25c05',
			},
			'& $arrow': {
				transform: 'translateX(0px)',
			},
		},
	},
	content: {
		border: '1px solid transparent',
		borderBottomRightRadius: '4px',
		borderBottomLeftRadius: '4px',
		transition: 'border-color .17s ease-in-out',
	},
	image: {
		position: 'relative',
		height: '270px',
		backgroundPosition: 'top',

		'&:after': {
			content: '""',
			position: 'absolute',
			top: '0px',
			right: '0px',
			bottom: '0px',
			left: '0px',
			zIndex: 1,
			backgroundColor: 'rgba(0, 0, 0, 0)',
			transition: 'background-color .17s ease-in-out',
		},
	},
	arrow: {
		position: 'absolute',
		right: '0px',
		bottom: '0px',
		width: '0px',
		height: '0px',
		borderTop: '46.5px solid transparent',
		borderBottom: '46.5px solid transparent',
		borderRight: '46.5px solid #f25c05',
		transform: 'translateX(46.5px)',
		transition: 'transform .17s ease-in-out',
	},
	iconContainer: {
		width: '100%',
		height: '270px',
		position: 'absolute',
		top: '0px',
		zIndex: 2,
		display: 'flex',
		justifyContent: 'center',
		alignItems: 'center',
		opacity: 0,
		color: '#fff',
		transition: 'opacity .17s ease-in-out',
	},
}

class ExperienceCard extends Component {

	render() {
		let { classes, title, description, image, link } = this.props

		return (
			<Card className={ classes.card }>
				<CustomLink link={ link } external>
					<CardMedia className={ classes.image } image={ image } />
					<div className={ classes.iconContainer }>
						<OpenInNewIcon color='inherit' fontSize='large' />
					</div>
					<CardContent className={ classes.content }>
						<Typography variant='h5' component='h3' style={{ fontWeight: 300 }}>{ title }</Typography>
						<Typography style={{ fontFamily: 'Roboto' }}><strong>{ description }</strong></Typography>
						<div className={ classes.arrow }></div>
					</CardContent>
				</CustomLink>
			</Card>
		)
	}
}

export default withStyles(styles)(ExperienceCard)