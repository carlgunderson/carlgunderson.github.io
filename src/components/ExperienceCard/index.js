import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Card, { CardActions, CardContent, CardMedia } from 'material-ui/Card'
import Typography from 'material-ui/Typography'

class ExperienceCard extends Component {

	render() {
		let { title, description, image, link } = this.props

		return (
			<Card>
				<Link to={ link } target='_blank'>
					<CardMedia style={{ height: '270px', backgroundPosition: 'top' }} image={ image } />
				</Link>
				<CardContent>
					<Typography variant='headline' component='h2'>{ title }</Typography>
					<Typography component='p'>{ description }</Typography>
				</CardContent>
			</Card>
		)
	}
}

export default ExperienceCard