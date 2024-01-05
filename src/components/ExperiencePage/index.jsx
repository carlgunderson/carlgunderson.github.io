import React from 'react'
import { useParams } from 'react-router-dom'
import { Box, Button, Typography } from '@mui/material'
import { HomeRounded } from '@mui/icons-material'

import companies from '../../data/companies'

const ExperiencePage = () => {
	const match = useParams()

	const company = companies.find(company => company.slug === match.company)

	return (
		<Box sx={{ maxWidth: '700px', p: '24px', m: '0 auto' }}>
			<Typography variant='h3' gutterBottom>{ match.company }</Typography>
			<Typography>{ company.projects?.length || 0 } projects</Typography>
			<Button
				href='/'
				variant='text'
				color='secondary'
				startIcon={ <HomeRounded /> }
				children='Overview'
			/>
			{
				company.projects?.map(p => (
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