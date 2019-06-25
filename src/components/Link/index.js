import React, { Component } from 'react'
import { Link } from 'react-router-dom'

import Typography from '@material-ui/core/Typography'

const CustomLink = ({ children, external, link, ...props }) => (
	external
	?	<a href={ link } target='_blank' style={{ textDecoration: 'none' }} { ...props }>
			{ children }
		</a>
	:	<Link to={ link } { ...props }>{ children }</Link>
)

export default CustomLink