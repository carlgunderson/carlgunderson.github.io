import React from 'react'
import {
	Box,
	ImageList,
	ImageListItem,
	Link,
	Typography,
} from '@mui/material'

import jobs from '../../data/jobs'
import ExperienceCard from '../ExperienceCard'

const HomePage = () => (
	<div>
		{
			jobs.map(j => (
				<div key={ j.slug } style={{ marginTop: '60px' }}>
					<ExperienceCard job={ j } />
				</div>
			))
		}
	</div>
)

export default HomePage