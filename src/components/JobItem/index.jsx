import React, { useRef } from 'react'
import posthog from 'posthog-js'

import { Box, Fab, Fade, Typography } from '@mui/material'
import {
	KeyboardArrowDownOutlined as DownIcon,
	KeyboardArrowUpOutlined as UpIcon,
} from '@mui/icons-material'

import jobs from '../../data/jobs'

const JobItem = ({ idx, isActive, item, onClick, onNav }) => {
	const tileRef = useRef()

	const isFilled = !!['luna', 'smashtech'].includes(item.slug)

	const handleNav = (e, direction) => {
		e.stopPropagation()
		// Prevent double clicks
		if (!e.detail || e.detail === 1) {
			onNav(direction)
			posthog.capture('navigate', { direction })
		}
	}

	const handleClick = e => {
		onClick(item, tileRef.current)
		posthog.capture('select-job', { name: item.slug })
	}

	return (
		<Fade in={ isActive }>
			<Box
				sx={{
					width: '100%',
					height: ['calc(100svh - 276px)', 'calc(100svh - 164px)'],
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
					overflow: 'hidden',
				}}
			>
				<Arrow
					direction='prev'
					item={ item }
					onClick={ handleNav }
					isDisabled={ idx === 0 }
					isFilled={ isFilled }
				/>
				<Box
					tabIndex={ 0 }
					onClick={ e => handleClick(e) }
					onKeyDown={ e => e.key === 'Enter' && handleClick(e) }
					sx={{
						display: 'flex',
						flexDirection: 'column',
						alignItems: 'center',
						justifyContent: 'center',
						p: ['60px', '100px'],
						cursor: 'pointer',
					}}
				>
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
				</Box>
				<Arrow
					direction='next'
					isDisabled={ idx === jobs.length - 1 }
					isFilled={ isFilled }
					item={ item }
					onClick={ handleNav }
				/>
			</Box>
		</Fade>
	)
}

const Arrow = ({ direction, isDisabled, isFilled, item, onClick }) => {
	const isIos = () => /iPhone|iPod|iPad/i.test(window.navigator.userAgent)
	const isSafari = navigator.userAgent.includes('Safari')
		&& !navigator.userAgent.includes('Chrome')

	const isIosSafari = isIos && isSafari

	return (
		<Fade in>
			<Box
				sx={{
					position: 'absolute',
					top: direction === 'prev'
						? ['20px', '40px']
						: 'auto',
					bottom: direction === 'next'
						? ['20px', '40px']
						: 'auto',
				}}
			>
				<Fab
					className='fab-btn'
					size='large'
					disabled={ isDisabled }
					onClick={ e => {
						if (isDisabled)
							return
						onClick(e, direction)
					} }
					sx={{
						borderColor: isFilled ? '#fff' : item.bgColor,
						'&:hover svg': {
							fill: theme => isDisabled
								? isFilled
								? '#fff'
								: item.bgColor
								: theme.palette[item.slug].main,
						},
						'&.Mui-disabled': {
							pointerEvents: 'all',
						},
					}}
					children={
						direction === 'next'
						? <DownIcon
								size='large'
								sx={{
									fill: isFilled ? '#fff' :item.bgColor,
								}}
							/>
						: <UpIcon
								size='large'
								sx={{
									fill: isFilled ? '#fff' :item.bgColor,
								}}
							/>
					}
				/>
			</Box>
		</Fade>
	)
}

export default JobItem
