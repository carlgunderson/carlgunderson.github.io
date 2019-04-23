import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Typography from '@material-ui/core/Typography'

class CustomLink extends Component {

	render() {
		let { children, external, link } = this.props

		return (
			external
			?	<a href={ link } target='_blank' style={{ textDecoration: 'none' }}>
					{ children }
				</a>
			:	<Link to={ link }>{ children }</Link>
		)
	}
}

export default CustomLink