import React, { Fragment, useEffect, useRef, useState } from 'react'

import { Box, Button, Fab, Fade, Link, Typography, useMediaQuery } from '@mui/material'
import {
	KeyboardArrowLeft as LeftIcon,
	KeyboardArrowDownOutlined as DownIcon,
	KeyboardArrowUpOutlined as UpIcon,
	OpenInNewTwoTone as OpenIcon,
} from '@mui/icons-material'

import companies from '../../data/companies'

const Section = () => {
	const positionRef = useRef()

	const [activeIdx, setActiveIdx] = useState(0)
	const [selectedItem, setSelectedItem] = useState()

	const handleNavigate = direction => {
		setActiveIdx(prevIdx => direction === 'next' ? prevIdx + 1 : prevIdx - 1)
	}

	const handleSelectBox = (item, el) => {
		const position = el.getBoundingClientRect()
		positionRef.current = position
		setSelectedItem({ ...item })
	}

	const handleClear = () => setSelectedItem()

	const renderSelection = (item, el) => {
		for (var key in positionRef.current) {
			el.style[key] = positionRef.current[key] + 'px'
		}

		setTimeout(() => {
			if (window.innerWidth < 600) {
				el.style.width = '90%'
				el.style.height = '72%'
			} else {
				el.style.width = '80%'
				el.style.height = '75%'
			}
		}, 500)

		setTimeout(() => {
			el.classList.add('show')
		}, 800)
	}

	return (
		<Box
			sx={{
				position: 'relative',
				width: '100vw',
				minHeight: ['calc(100vh - 270px)', 'calc(100vh - 164px)'],
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-around',
				overflow: selectedItem ? 'hidden' : 'auto',
			}}
		>
			{
				!selectedItem && companies.map((item, idx) => (
					<CompanyItem
						key={ item.slug }
						item={ item }
						activeIdx={ activeIdx }
						idx={ idx }
						onClick={ handleSelectBox }
						onNav={ handleNavigate }
					/>
				))
			}
			{
				selectedItem &&
				<SelectedItem
					item={ selectedItem }
					onClear={ handleClear }
					onMount={ renderSelection }
				/>
			}
		</Box>
	)
}

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
								height: '0px',
								maxWidth: '100%',
								pt: '100%',
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
					justifyContent: 'center',
					gap: '24px',
					cursor: 'pointer',
				}}
			>
				<Fade in={ doShowLogo }>
					<img
						src={ item.logoUrl }
						alt=''
						style={{
							width: '100px',
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
											borderWidth: '3px',
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

export default Section
