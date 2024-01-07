import React from 'react'
import {
	Box,
	Card,
	CardContent,
	CardMedia,
	Link,
	Typography,
} from '@mui/material'
import { OpenInNewRounded as OpenInNewIcon } from '@mui/icons-material'

const ExperienceCard = ({ job }) => (
	<Card
		sx={{
			width: '400px',
			maxWidth: '100%',
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
		}}
	>
		<Link href={ job.slug }>
			<CardMedia
				image={ job.logoUrl }
				sx={{
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
				}}
			/>
			<Box
				sx={{
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
				}}
				children={ <OpenInNewIcon color='inherit' fontSize='large' /> }
			/>
			<CardContent
				sx={{
					border: '1px solid transparent',
					borderBottomRightRadius: '4px',
					borderBottomLeftRadius: '4px',
					transition: 'border-color .17s ease-in-out',
				}}
			>
				<Typography
					variant='h5'
					component='h3'
					sx={{ color: '#333', fontWeight: 300 }}
					children={ job.displayName }
				/>
				<Typography sx={{ color: '#333', fontFamily: 'Roboto' }}>
					<strong>{ job.description }</strong>
				</Typography>
				<Box
					sx={{
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
					}}
				/>
			</CardContent>
		</Link>
	</Card>
)

export default ExperienceCard