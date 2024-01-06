import React, { useRef, useState } from 'react'

import { Box } from '@mui/material'

import companies from '../../data/companies'
import CompanyItem from '../CompanyItem'
import SelectedItem from '../SelectedItem'

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
			sx={{
				position: 'relative',
				width: '100vw',
				minHeight: ['calc(100vh - 276px)', 'calc(100vh - 164px)'],
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

export default Section
