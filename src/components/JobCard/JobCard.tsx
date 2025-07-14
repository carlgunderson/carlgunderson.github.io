import { type FC, useState } from 'react'
import { Link } from '@tanstack/react-router'
import { motion, AnimatePresence } from 'motion/react'
import { ButtonWithShimmer } from '../ButtonWithShimmer'
import { Heading, Flex, Text, Badge } from '@radix-ui/themes'

interface JobCardProps {
  job: {
    slug: string;
    displayName: string;
    industries: string[];
    platforms: string[];
    link: string;
    description: string;
    logoUrl: string;
    bgUrl: string;
    bgColor: string;
    role: string;
    roleSummary: string;
    timeline: string;
  }
}

const JobCard: FC<JobCardProps> = ({ job }) => {
  const [hovered, setHovered] = useState(false)

  return (
    <Link to={`/project/${job.slug}`} style={{ color: '#333', textDecoration: 'none', borderRadius: 20 }}>
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.98 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 40, scale: 0.98 }}
        transition={{ type: 'spring', stiffness: 500, damping: 30, mass: 1.2 }}
        style={{
          position: 'relative',
          backgroundColor: 'rgba(255,255,255,0.7)',
          padding: 40,
          borderRadius: 20,
          cursor: 'pointer',
        }}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <Flex align='start' gap='4'>
          <img
            src={job.logoUrl}
            alt={job.displayName + ' logo'}
            style={{ width: 64, height: 64, objectFit: 'contain', flexShrink: 0, mixBlendMode: 'multiply' }}
          />
          <div style={{ flex: 1, padding: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <Flex direction='column' style={{ position: 'relative', display: 'inline-block', width: 'fit-content' }}>
              <Heading as="h2" size="5" style={{ fontWeight: 800, fontSize: 28, marginBottom: 14 }}>
                {job.displayName}
              </Heading>
              <Flex direction='row' wrap='wrap' gap='2' style={{ marginBottom: 10 }}>
                {job.industries.map((industry) => (
                  <Badge key={industry}>{industry}</Badge>
                ))}
                {job.platforms.map((platform) => (
                  <Badge key={platform} variant='soft' color='purple'>{platform}</Badge>
                ))}
              </Flex>
              <div style={{ marginBottom: 24 }}><Text>{job.description}</Text></div>
              <div style={{ position: 'relative', display: 'inline-block' }}>
                <Text children={job.role} style={{ fontWeight: 700 }} />
                <motion.div
                  style={{
                    position: 'absolute',
                    left: 0,
                    right: 0,
                    bottom: -6,
                    height: 4,
                    borderRadius: 2,
                    background: 'linear-gradient(90deg, #3b82f6 0%, #6366f1 100%)',
                    opacity: 0.7,
                    pointerEvents: 'none',
                  }}
                  initial={{ scaleX: 0 }}
                  animate={hovered ? { scaleX: 1 } : { scaleX: 0 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 24 }}
                />
              </div>
            </Flex>
            {/* <ButtonWithShimmer
              size="3"
              variant="ghost"
              // color="blue"
              onClick={() => {
                navigate({ to: `/project/${job.slug}` })
              }}
            >
              View Details
            </ButtonWithShimmer> */}
          </div>
        </Flex>
      </motion.div>
    </Link>
  )
}

export default JobCard 