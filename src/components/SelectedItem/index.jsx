import React, { Fragment, useEffect, useRef, useState } from 'react'

import { Box, Button, Fab, Fade, Link, Typography, useMediaQuery } from '@mui/material'
import {
	KeyboardArrowLeft as LeftIcon,
	OpenInNewTwoTone as OpenIcon,
} from '@mui/icons-material'

const SelectedItem = ({ item, onClear, onMount }) => {
	const isXs = useMediaQuery(theme => theme.breakpoints.down('sm'))

	const boxRef = useRef()
	const bgRef = useRef()
	const imgRef = useRef()

	const [doShowLogo, setDoShowLogo] = useState(false)

	useEffect(() => {
		setTimeout(() => bgRef.current.classList.add('show'), 0)
		onMount(item, boxRef.current)
		setTimeout(() => imgRef.current.style.transform = 'translateY(-100%)', 200)
		setTimeout(() => imgRef.current.style.display = 'none', 500)
		setTimeout(() => setDoShowLogo(true), 700)
	}, [])

	return (
		<Fragment>
			<Box
				ref={ bgRef }
				className='fullscreen-background'
				sx={{
					top: '100%',
					bgcolor: item.bgColor,
					'&.show': {
						top: ['218px', '112px'],
					},
				}}
			/>
			<Box
				onClick={ onClear }
				sx={{
					position: 'fixed',
					width: '100vw',
					height: ['calc(100vh - 270px)', 'calc(100vh - 164px)'],
					display: 'flex',
					flexDirection: 'column',
					alignItems: 'center',
					justifyContent: ['flex-start', 'center'],
					gap: '24px',
					cursor: 'pointer',
				}}
			>
				<Fade in={ doShowLogo }>
					<Box
						component='img'
						src={ item.logoUrl }
						alt=''
						sx={{
							width: ['48px', '100px'],
							height: ['48px', '100px'],
							mt: ['24px', '0px'],
							transition: 'all 0.6s ease',
							transitionProperty: 'transform',
						}}
					/>
				</Fade>
				<Box
					onClick={ e => e.stopPropagation() }
					ref={ boxRef }
					className='box'
					sx={{
						boxShadow: '0px 2px 1px -1px rgba(0,0,0,0.2), 0px 1px 1px 0px rgba(0,0,0,0.14), 0px 1px 3px 0px rgba(0,0,0,0.12)',
						borderRadius: '6px',
						overflow: 'scroll',
						maxWidth: '700px',
						backgroundColor: '#fff',
						backgroundSize: 'cover',
						backgroundRepeat: 'no-repeat',
						backgroundPosition: 'center top',
						transition: 'all 0.4s ease',
						cursor: 'auto',
					}}
				>
					<img
						ref={ imgRef }
						src={ item.logoUrl }
						alt=''
						style={{
							marginBottom: '20px',
							width: '100px',
							transition: 'transform 0.6s ease',
						}}
					/>
					<Box
						className='content'
						sx={{
							maxWidth: '100%',
							p: ['24px', '48px'],
						}}
					>
						<Box sx={{ mb: ['16px'] }}>
							<Button
								variant='outlined'
								size={ isXs ? 'small' : 'medium' }
								onClick={ onClear }
								startIcon={
									<LeftIcon
										sx={{ fill: theme => theme.palette[item.slug].main }}
									/>
								}
								sx={{
									color: theme => theme.palette[item.slug].main,
									borderColor: theme => theme.palette[item.slug].main,
									'&:hover': {
										borderColor: theme => theme.palette[item.slug].main,
									},
								}}
								children='Back to overview'
							/>
						</Box>
						<Typography
							variant='h2'
							fontWeight={ 600 }
							sx={{
								mb: ['16px', '32px'],
								color: theme => theme.palette[item.slug].main,
								animation: 'up-in 1s ease',
							}}
							children={ item.displayName }
						/>
						<Link href={ item.link } target='_blank' rel='noopener'>
							<div style={{ position: 'relative' }}>
								<Box
									component='img'
									src={ item.bgUrl }
									sx={{
										width: '100%',
										maxHeight: '300px',
										maxWidth: '100%',
										objectFit: 'contain',
										border: `5px solid ${item.bgColor}`,
										borderRadius: '10px',
									}}
								/>
								<Box
									sx={{
										display: 'flex',
										flexDirection: 'column',
										alignItems: 'center',
										justifyContent: 'center',
										position: 'absolute',
										top: '5px',
										right: '5px',
										bottom: '10px',
										left: '5px',
										borderRadius: '5px',
										bgcolor: 'rgba(0, 0, 0, 0)',
										transition: 'background-color 0.2s ease',
										'&:hover': {
											bgcolor: 'rgba(0, 0, 0, 0.5)',
											'& button': {
												borderColor: '#fff',
												'& svg': {
													fill: '#fff',
												},
											},
										},
									}}
								>
									<Fab
										size='large'
										sx={{
											borderColor: item.bgColor,
											'& svg': {
												fill: item.bgColor,
											},
											'&:hover': {
												borderColor: '#fff',
												'& svg': {
													fill: theme => `${theme.palette[item.slug].main} !important`,
												},
											},
										}}
										children={
											<OpenIcon fontSize='large' />
										}
									/>
								</Box>
							</div>
						</Link>
						<Typography
							variant='h4'
							component='h4'
							paragraph
							sx={{ mt: '24px' }}
							children={ item.description }
						/>
						<Typography
							fontWeight={ 600 }
							gutterBottom
							children={ item.role }
						/>
						<Typography
							variant='caption'
							fontWeight={ 600 }
							paragraph
							children={ item.timeline }
						/>
						<Typography
							variant='body2'
							children={ item.roleSummary }
						/>
						<hr
							style={{
								marginTop: '40px',
								border: '0',
								height: '1px',
								backgroundImage: `linear-gradient(to right, rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.1))`,
							}}
						/>
					</Box>
				</Box>
			</Box>
		</Fragment>
	)
}

export default SelectedItem
