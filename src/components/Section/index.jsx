import React, { useEffect, useRef, useState } from 'react'

import { Box } from '@mui/material'

import jobs from '../../data/jobs'
import JobItem from '../JobItem'
import SelectedItem from '../SelectedItem'

const Section = () => {
	const activeIdxRef = useRef(0)
	const positionRef = useRef()
	const scrollElRef = useRef()

	const [activeIdx, setActiveIdx] = useState(0)
	const [selectedItem, setSelectedItem] = useState()
	const [touchStart, setTouchStart] = useState(0)
	const [touchEnd, setTouchEnd] = useState(0)

	useEffect(() => {
		let isScrolling
		const onWheel = event => {
			const delta = event.deltaY
			window.clearTimeout(isScrolling)

			isScrolling = setTimeout(() => {
				handleScroll(delta)
			}, 20)
		}
		scrollElRef.current.addEventListener('wheel', onWheel, false)

		return () => {
			scrollElRef.current.removeEventListener('wheel', onWheel)
		}
	}, [])

	const handleScroll = delta => {
		if (delta > 8) {
			// Down
			if (activeIdxRef.current < jobs.length - 1) {
				activeIdxRef.current = activeIdxRef.current + 1
				setActiveIdx(prevIdx => prevIdx + 1)
			}
		}
		if (delta < -8) {
			// Up
			if (activeIdxRef.current > 0) {
				activeIdxRef.current = activeIdxRef.current - 1
				setActiveIdx(prevIdx => prevIdx - 1)
			}
		}
	}

	const handleTouchStart = e => {
		setTouchStart(e.targetTouches[0].clientY)
	}

	const handleTouchMove = e => {
		setTouchEnd(e.targetTouches[0].clientY)
	}

	const handleTouchEnd = () => {
		if (touchStart - touchEnd > 100) {
			// Down
			if (activeIdx < jobs.length - 1) {
				activeIdxRef.current = activeIdxRef.current + 1
				setActiveIdx(prevIdx => prevIdx + 1)
			}
		}

		if (touchStart - touchEnd < -100) {
			// Up
			if (activeIdx > 0) {
				activeIdxRef.current = activeIdxRef.current - 1
				setActiveIdx(prevIdx => prevIdx - 1)
			}
		}
	}

	const handleNavigate = direction => {
		activeIdxRef.current = direction === 'next'
			? activeIdxRef.current + 1
			: activeIdxRef.current - 1
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
							activeIdx={ activeIdxRef.current || activeIdx }
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
