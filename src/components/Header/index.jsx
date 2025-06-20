import React, { useEffect, useRef } from 'react'
import {
	AppBar,
	Box,
	Link,
	Toolbar,
	Typography,
} from '@mui/material'

const Header = () => {
	const appBarRef = useRef()

	useEffect(() => {
		appBarRef.current.ontouchmove = e => e.preventDefault()
	}, [])

	return (
		<AppBar
			ref={ appBarRef }
			position='static'
			sx={{
				background: ['none', 'linear-gradient(to right, #eee, #eee 50%, rgba(255, 255, 255, 0) 75%, rgba(255, 255, 255, 0) 75%)'],
				boxShadow: 'none',
			}}
		>
			<Toolbar
				sx={{
					display: 'flex',
					flexDirection: ['column', 'row'],
					justifyContent: 'space-between',
					py: '16px',
				}}
			>
				<Box
					sx={{
						display: 'flex',
						flexDirection: ['column', 'row'],
						alignItems: 'center',
						gap: '16px',
					}}
				>
					<img
						src='/images/carl.jpg'
						height='80'
						width='80'
						style={{ borderRadius: '50%' }}
					/>
					<Box>
						<div className='container-header'>
							<Typography
								variant='h4'
								component='h1'
								sx={{ fontWeight: 400, textAlign: ['center', 'left'] }}
								children='Carl Gunderson'
							/>
						</div>
						<div className='container-subheader'>
							<Typography
								variant='caption'
								fontWeight={ 600 }
								sx={{
									display: 'block',
									fontFamily: 'monospace',
									textAlign: ['center', 'left'],
								}}
								children='web development portfolio'
							/>
						</div>
					</Box>
				</Box>
				<Box sx={{ display: 'flex', mt: ['16px', '0px'] }}>
					<Link
						href='https://github.com/carlgunderson'
						target='_blank'
						rel='noopener'
						sx={{ height: '32px', mr: '16px' }}
					>
						<img
							src='/images/github-mark.png'
							height='32'
							style={{ height: '32px' }}
						/>
					</Link>
					<Link
						href='https://linkedin.com/in/carlgunderson'
						target='_blank'
						rel='noopener'
						sx={{ height: '32px' }}
					>
						<img
							src='/images/icon-linkedin.png'
							height='32'
							style={{ height: '32px' }}
						/>
					</Link>
				</Box>
			</Toolbar>
		</AppBar>
	)
}

export default Header