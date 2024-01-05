import React from 'react'
import {
	Box,
	ImageList,
	ImageListItem,
	Link,
	Typography,
} from '@mui/material'

import companies from '../../data/companies'
import ExperienceCard from '../ExperienceCard'

const HomePage = () => (
	<div>
		{
			companies.map(c => (
				<div key={ c.slug } style={{ marginTop: '60px' }}>
					<ExperienceCard company={ c } />
				</div>
			))
		}
	</div>
)

export default HomePage