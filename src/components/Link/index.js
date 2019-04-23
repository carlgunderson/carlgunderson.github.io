import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Typography from '@material-ui/core/Typography'

class CustomLink extends Component {

	render() {
		let { children, external, link } = this.props

		return (
			external
			?	<a href={ link } target='_blank' style={{ textDecoration: 'none' }} { ...this.props }>
					{ children }
				</a>
			:	<Link to={ link } { ...this.props }>{ children }</Link>
		)
	}
}

export default CustomLink