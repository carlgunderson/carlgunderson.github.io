import React, { useEffect, useRef, useState } from 'react'

import { Box } from '@mui/material'

import jobs from '../../data/jobs'
import JobItem from '../JobItem'
import SelectedItem from '../SelectedItem'

const Section = () => {
	const positionRef = useRef()
	const scrollElRef = useRef()

	const [activeIdx, setActiveIdx] = useState(0)
	const [selectedItem, setSelectedItem] = useState()
	const [scrollTop, setScrollTop] = useState(0)
	const [touchStart, setTouchStart] = useState(0)
	const [touchEnd, setTouchEnd] = useState(0)

	useEffect(() => {
		let isScrolling, start, end, distance
		const onWheel = event => {
			console.log('SCROLLING', event)
			// Set starting position
			if (!start) {
				start = scrollElRef.current.scrollY
			}
	
			// Clear our timeout throughout the scroll
			window.clearTimeout(isScrolling)
	
			// Set a timeout to run after scrolling ends
			isScrolling = setTimeout(() => {
	
				// Calculate distance
				end = scrollElRef.current.scrollY
				distance = end - start
	
				// Run the callback
				handleScroll(distance, start, end)
	
				// Reset calculations
				start = null
				end = null
				distance = null
			}, 66)
		}
	
		window.addEventListener('wheel', onWheel, false)

		return () => {
			window.removeEventListener('wheel', onWheel)
		}
	}, [])

	const handleScroll = (distance, start, end) => {
		
		distance = parseInt(Math.abs(distance), 10)
		console.log(distance, start, end)
		if (distance > 150) {
			// Down
			if (activeIdx < jobs.length - 1)
				setActiveIdx(prevIdx => prevIdx + 1)
		}
		if (distance < -150) {
			// Up
			if (activeIdx > 0)
				setActiveIdx(prevIdx => prevIdx - 1)
		}
	}

	// const handleScroll = event => {

  //   setScrollTop(event.currentTarget.scrollTop)
  // }

	const handleTouchStart = e => {
		setTouchStart(e.targetTouches[0].clientY)
	}

	const handleTouchMove = e => {
		setTouchEnd(e.targetTouches[0].clientY)
	}

	const handleTouchEnd = () => {
		if (touchStart - touchEnd > 150) {
			// Down
			if (activeIdx < jobs.length - 1)
				setActiveIdx(prevIdx => prevIdx + 1)
		}

		if (touchStart - touchEnd < -150) {
			// Up
			if (activeIdx > 0)
				setActiveIdx(prevIdx => prevIdx - 1)
		}
	}

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
				el.style.height = '64%'
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
			id='desktop-scroll-target'
			ref={ scrollElRef }
			// onScroll={ handleScroll }
			onTouchStart={ handleTouchStart }
			onTouchMove={ handleTouchMove }
			onTouchEnd={ handleTouchEnd }
			sx={{
				display: 'flex',
				flexDirection: 'column',
				justifyContent: 'space-around',
				position: 'relative',
				width: '100vw',
				minHeight: ['calc(100vh - 276px)', 'calc(100vh - 164px)'],
				overflow: selectedItem ? 'hidden' : 'auto',
			}}
		>
			{/* <Box
				ref={ scrollElRef }
				// onScroll={ handleScroll }
				
				sx={{
					position: 'relative',
					height: '100%',
					width: '100%',
					top: 0,
					right: 0,
					bottom: '52px',
					left: 0,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-around',
				}}
			> */}
				{
					!selectedItem && jobs.map((item, idx) => (
						<JobItem
							key={ item.slug }
							item={ item }
							activeIdx={ activeIdx }
							idx={ idx }
							onClick={ handleSelectBox }
							onNav={ handleNavigate }
						/>
					))
				}
			{/* </Box> */}
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

export default Section
