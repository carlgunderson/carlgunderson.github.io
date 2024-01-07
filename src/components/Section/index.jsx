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
		let isWheeling
		const onWheel = event => {
			const delta = event.deltaY
			window.clearTimeout(isWheeling)

			isWheeling = setTimeout(() => {
				if (delta > 7) {
					// Down
					if (activeIdxRef.current < jobs.length - 1) {
						activeIdxRef.current = activeIdxRef.current + 1
						setActiveIdx(activeIdxRef.current)
						// setActiveIdx(prevIdx => prevIdx + 1)
					}
				} else if (delta < -7) {
					// Up
					if (activeIdxRef.current > 0) {
						activeIdxRef.current = activeIdxRef.current - 1
						setActiveIdx(activeIdxRef.current)
						// setActiveIdx(prevIdx => prevIdx - 1)
					}
				}
			}, 20)
		}
		scrollElRef.current.addEventListener('wheel', onWheel, false)

		return () => {
			scrollElRef.current.removeEventListener('wheel', onWheel)
		}
	}, [])

	const handleTouchStart = e => {
		setTouchStart(e.targetTouches[0].clientY)
	}

	const handleTouchMove = e => {
		setTouchEnd(e.targetTouches[0].clientY)
	}

	const handleTouchEnd = () => {
		if (touchEnd < 10 || touchStart < 10 || !!selectedItem)
			return
		if (touchStart - touchEnd > 100) {
			// Down
			if (activeIdxRef.current < jobs.length - 1) {
				activeIdxRef.current = activeIdxRef.current + 1
				setActiveIdx(activeIdxRef.current)
			}
		} else if (touchStart - touchEnd < -100) {
			// Up
			if (activeIdxRef.current > 0) {
				activeIdxRef.current = activeIdxRef.current - 1
				setActiveIdx(activeIdxRef.current)
			}
		}
		setTouchStart(0)
		setTouchEnd(0)
	}

	const handleNavigate = direction => {
		console.log('nav')
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
			// ref={ scrollElRef }
			// onTouchStart={ handleTouchStart }
			// onTouchMove={ handleTouchMove }
			// onTouchEnd={ handleTouchEnd }
			sx={{
				// display: 'flex',
				// flexDirection: 'column',
				// justifyContent: 'space-around',
				position: 'relative',
				width: '100vw',
				minHeight: ['calc(100svh - 276px)', 'calc(100svh - 164px)'],
				// overflow: selectedItem ? 'hidden' : 'auto',
				overflow: 'hidden',
			}}
		>
			<Box
				onTouchStart={ handleTouchStart }
				onTouchMove={ handleTouchMove }
				onTouchEnd={ handleTouchEnd }
				ref={ scrollElRef }
				sx={{
					position: 'absolute',
					height: '100%',
					width: '100%',
					top: 0,
					right: 0,
					bottom: '52px',
					left: 0,
					display: 'flex',
					flexDirection: 'column',
					justifyContent: 'space-around',
					overflow: 'hidden',
				}}
			>
				{
					!selectedItem && jobs.map((item, idx) => (
						<JobItem
							key={ item.slug }
							item={ item }
							isActive={ activeIdxRef.current === idx }
							idx={ idx }
							onClick={ handleSelectBox }
							onNav={ handleNavigate }
						/>
					))
				}
			</Box>
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
