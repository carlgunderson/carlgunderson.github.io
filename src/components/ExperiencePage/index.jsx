import React from 'react'
import { useParams } from 'react-router-dom'
import { Box, Button, Typography } from '@mui/material'
import { HomeRounded } from '@mui/icons-material'

import jobs from '../../data/jobs'

const ExperiencePage = () => {
	const match = useParams()

	const job = jobs.find(job => job.slug === match.job)

	return (
		<Box sx={{ maxWidth: '700px', p: '24px', m: '0 auto' }}>
			<Typography variant='h3' gutterBottom>{ match.job }</Typography>
			<Typography>{ job.projects?.length || 0 } projects</Typography>
			<Button
				href='/'
				variant='text'
				color='secondary'
				startIcon={ <HomeRounded /> }
				children='Overview'
			/>
			{
				job.projects?.map(p => (
					<Box key={ p.slug }>
						<Typography variant='h5'>{ p.displayName }</Typography>
						<Typography>{ p.description }</Typography>
						<Box sx={{ bgcolor: 'rgba(0, 0, 0, .1)' }}>
							Image
						</Box>
					</Box>
				))
			}
			
		</Box>
	)
}

export default ExperiencePage