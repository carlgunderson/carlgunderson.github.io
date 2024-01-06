import React, { useRef } from 'react'

import { Box, Fab, Fade, Typography } from '@mui/material'
import {
	KeyboardArrowDownOutlined as DownIcon,
	KeyboardArrowUpOutlined as UpIcon,
} from '@mui/icons-material'

import companies from '../../data/companies'

const CompanyItem = ({ activeIdx, idx, item, onClick, onNav }) => {
	const tileRef = useRef()

	const isFilled = !!['luna', 'smashtech'].includes(item.slug)

	return (
		<Box
			key={ item.slug }
			sx={{
				width: ['100%', 'auto'],
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'center',
				alignItems: 'center',
				mb: '60px',
			}}
		>
			<Fade in={ activeIdx === idx }>
				<Box
					onClick={ e => onClick(item, tileRef.current) }
					sx={{
						width: '100%',
						height: ['calc(100vh - 280px)', 'calc(100vh - 164px)'],
						position: 'absolute',
						top: 0,
						right: 0,
						bottom: 0,
						left: 0,
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						bgcolor: isFilled ? item.bgColor : '#fff',
						color: isFilled ? '#fff' : item.bgColor,
						cursor: 'pointer',
						overflow: 'hidden',
					}}
				>
					{
						idx !== 0 &&
						<Arrow direction='prev' item={ item } onClick={ onNav } isFilled={ isFilled } />
					}
					<div style={{ width: '100px' }}>
						<Box
							ref={ tileRef }
							className='tile'
							sx={{
								width: ['48px', '100px'],
								height: ['48px', '100px'],
								m: '0 auto',
								backgroundImage: `url(${item.logoUrl})`,
								'&:after': {
									content: '""',
									display: 'block',
									marginTop: '100%',
								}
							}}
						/>
					</div>
					<Typography
						className='tile-display-name'
						variant='h2'
						align='center'
						fontWeight={ 600 }
						paragraph
						sx={{ color: isFilled ? '#fff' : item.bgColor }}
						children={ item.displayName }
					/>
					<Typography
						className='tile-role'
						variant='h5'
						align='center'
						fontWeight={ 600 }
						gutterBottom
						sx={{ color: isFilled ? '#fff' : item.bgColor }}
						children={ item.role }
					/>
					<Typography
						align='center'
						sx={{ color: isFilled ? '#fff' : item.bgColor }}
						children={ item.timeline }
					/>
					{
						idx !== companies.length - 1 &&
						<Arrow direction='next' isFilled={ isFilled } item={ item } onClick={ onNav } />
					}
				</Box>
			</Fade>
		</Box>
	)
}

const Arrow = ({ direction, isFilled, item, onClick }) => (
	<Fade in>
		<Box
			sx={{
				position: 'absolute',
				top: direction === 'prev' ? '40px' : 'auto',
				bottom: direction === 'next' ? '40px' : 'auto',
			}}
		>
			<Fab
				size='large'
				onClick={ e => { e.stopPropagation(); onClick(direction) } }
				sx={{
					borderColor: isFilled ? '#fff' : item.bgColor,
					'&:hover svg': { fill: theme => theme.palette[item.slug].main },
				}}
				children={
					direction === 'next'
					? <DownIcon
							size='large'
							sx={{
								borderColor: isFilled ? '#fff' : item.bgColor,
								fill: isFilled ? '#fff' :`${item.bgColor} !important`,
							}}
						/>
					: <UpIcon
							size='large'
							sx={{
								borderColor: isFilled ? '#fff' : item.bgColor,
								fill: isFilled ? '#fff' :`${item.bgColor} !important`,
							}}
						/>
				}
			/>
		</Box>
	</Fade>
)

export default CompanyItem
