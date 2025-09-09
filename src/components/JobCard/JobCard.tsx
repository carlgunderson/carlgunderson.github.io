import { type FC, useState, useRef } from 'react'
import Link from 'next/link'
import { motion } from 'motion/react'
import { Card, Heading, Flex, Text, Badge } from '@radix-ui/themes'
import { useIsMobile } from '~/hooks/use-mobile'

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
  const ref = useRef<HTMLDivElement>(null)
  const isMobile = useIsMobile()

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 60, scale: 0.98 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 40, scale: 0.98 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30, mass: 1.2 }}
      style={{
        transformStyle: 'preserve-3d',
        transition: 'transform 0.1s ease-out',
      }}
      onMouseMove={(e) => {
        if (!ref.current) return
        
        const rect = ref.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const y = e.clientY - rect.top
        
        const centerX = rect.width / 2
        const centerY = rect.height / 2
        
        const rotateX = (y - centerY) / 10
        const rotateY = (centerX - x) / 10
        
        ref.current.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.05, 1.05, 1.05)`
      }}
      onMouseLeave={() => {
        if (ref.current) {
          ref.current.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)'
        }
        setHovered(false)
      }}
      onMouseEnter={() => setHovered(true)}
    >
      <Card style={{ padding: 0, overflow: 'visible' }} tabIndex={0} asChild>
        <Link href={`/project/${job.slug}/`} style={{ color: 'inherit', textDecoration: 'none' }}>
          <div
            style={{
              position: 'relative',
              padding: isMobile ? 20 : 40,
              border: 'none',
              borderRadius: 20,
              cursor: 'pointer',
            }}
          >
            <Flex align='start' gap={isMobile ? '4' : '6'}>
              <Flex
                align='center'
                justify='center'
                style={{
                  width: 80,
                  height: 80,
                  padding: 10,
                  backgroundColor: '#fff',
                  borderRadius: 10,
                }}
              >
                <img
                  src={job.logoUrl}
                  alt={job.displayName + ' logo'}
                  style={{ width: 64, height: 64, objectFit: 'contain', flexShrink: 0, mixBlendMode: 'multiply' }}
                />
              </Flex>
              <div style={{ flex: 1, padding: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <Flex direction='column' style={{ position: 'relative', display: 'inline-block', width: 'fit-content' }}>
                  <Heading as='h2' size='5' style={{ fontWeight: 800, fontSize: 28, marginBottom: 14 }}>
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
              </div>
            </Flex>
          </div>
        </Link>
      </Card>
    </motion.div>
  )
}

export default JobCard 