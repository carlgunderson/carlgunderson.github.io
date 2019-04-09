import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

class ExperienceCard extends Component {

	render() {
		let { title, description, image, link } = this.props

		return (
			<Card>
				<Link to={ link } target='_blank'>
					<CardMedia style={{ height: '270px', backgroundPosition: 'top' }} image={ image } />
				</Link>
				<CardContent>
					<Typography variant='h3' component='h2'>{ title }</Typography>
					<Typography>{ description }</Typography>
				</CardContent>
			</Card>
		)
	}
}

export default ExperienceCard