import { motion, AnimatePresence } from 'motion/react'
import { Flex, Text } from '@radix-ui/themes'

import JobCard from '~/components/JobCard'
import jobs from '~/data/jobs'

const Home = () => {
  return (
    <>
			<motion.div
				initial={{ opacity: 0, y: 24 }}
				animate={{ opacity: 1, y: 0 }}
				// exit={{ opacity: 0, y: -40 }}
				transition={{ type: 'spring', stiffness: 100, damping: 30, delay: 0.1 }}
			>
				<Text as='p' style={{ position: 'relative', fontSize: 20, marginBottom: 48, fontWeight: 500, maxWidth: '100%' }}>
					👋 <strong>Hey there!</strong> I'm Carl — a product engineer who loves solving problems and building things. Preferably at the same time.
				</Text>
			</motion.div>
			<motion.div
				initial={{ opacity: 0, y: 24 }}
				animate={{ opacity: 1, y: 0 }}
				// exit={{ opacity: 0, y: -40 }}
				transition={{ type: 'spring', stiffness: 100, damping: 30, delay: 0.6 }}
				style={{ maxWidth: '100%' }}
			>
				<AnimatePresence>
					<Flex direction='column' align='stretch' gap='7'>
						{jobs.map(job => (
							<JobCard key={job.slug} job={job} />
						))}
					</Flex>
				</AnimatePresence>
			</motion.div>
		</>
  )
}

export default Home