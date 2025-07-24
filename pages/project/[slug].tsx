import React from 'react'
import { ExternalLinkIcon } from '@radix-ui/react-icons'
import { Button, Flex, Heading, Text, Badge } from '@radix-ui/themes'
import { motion } from 'motion/react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import posthog from 'posthog-js'
import { GetStaticPaths, GetStaticProps } from 'next'

import { useTheme } from '../../src/contexts/ThemeContext'
import jobs from '../../src/data/jobs'

const ProjectDetail = () => {
  const router = useRouter()
  const { slug } = router.query as { slug: string }
  const job = jobs.find(j => j.slug === slug)
  const currentIndex = jobs.findIndex(j => j.slug === slug)

  const { theme } = useTheme()

  const handleNavigate = (direction: 'prev' | 'next') => {
    posthog.capture('job_detail_navigate', { direction })
    const index = direction === 'prev' ? currentIndex - 1 : currentIndex + 1
    router.push(`/project/${jobs[index].slug}/`)
  }

  if (router.isFallback || !job) {
    return null
  }

  return (
    <>
      <Head>
        <title>{`${job.displayName} - ${job.role} | Carl Gunderson`}</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
        <meta name="description" content={job.description} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={`${job.displayName} - ${job.role}`} />
        <meta property="og:description" content={job.description} />
        <meta property="og:url" content={`https://carlgunderson.com/project/${slug}/`} />
        <meta property="og:image" content="https://carlgunderson.com/images/og-image.png" />
        <meta property="og:image:alt" content={`${job.displayName} - ${job.role} | Carl Gunderson`} />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={`${job.displayName} - ${job.role}`} />
        <meta name="twitter:description" content={job.description} />
        <meta name="twitter:image" content="https://carlgunderson.com/images/og-image.png" />
        <link rel="canonical" href={`https://carlgunderson.com/project/${slug}/`} />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <Flex direction='column' gap='8' style={{ position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          <Flex align='center' gap='6'>
            <Flex
              align='center'
              justify='center'
              style={{
                width: 80,
                height: 80,
                padding: 10,
                backgroundColor: theme === 'dark' ? '#fff' : undefined,
                borderRadius: 10,
              }}
            >
              <img
                src={job.logoUrl}
                alt={`${job.displayName} logo`}
                width={64}
                height={64}
                style={{ mixBlendMode: theme === 'dark' ? 'normal' : 'multiply' }}
              />
            </Flex>
            <Flex direction='column' gap='1'>
              <Heading as='h1' size='5'>
                {job.role}&nbsp;
                <small style={{ fontSize: 14, fontWeight: 300 }}>
                  ({job.timeline})
                </small>
              </Heading>
              <Text>
                <a
                  href={job.link}
                  target='_blank'
                  style={{
                    color: 'inherit',
                    display: 'inline-flex',
                    alignItems: 'center',
                    gap: '8px',
                    textDecoration: 'none',
                  }}
                >
                  <span style={{ fontWeight: 700 }}>{job.displayName}</span>
                  <ExternalLinkIcon style={{ width: 14, height: 14, strokeWidth: 0.5 }} />
                </a>
              </Text>
            </Flex>
          </Flex>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div style={{ marginBottom: 10 }}>
            <Badge variant='outline' color='gray'>SUMMARY</Badge>
          </div>
          <Text dangerouslySetInnerHTML={{ __html: job.roleSummary }} />
          <div style={{ marginTop: 40, marginBottom: 10 }}>
            <Badge variant='outline' color='gray'>PROJECTS</Badge>
          </div>
          {job.projects.map((project, i) => (
            <Flex key={i} direction='column' gap='4' style={{ marginTop: i === 0 ? 0 : 40 }}>
              <Heading as='h2' size='6'>
                {project.link ? (
                  <a
                    href={project.link}
                    target='_blank'
                    style={{
                      color: 'inherit',
                      display: 'inline-flex',
                      alignItems: 'center',
                      gap: '8px',
                      textDecoration: 'none',
                    }}
                  >
                    {project.displayName}
                    <ExternalLinkIcon style={{ width: 20, height: 20, marginTop: 2 }} />
                  </a>
                ) : (
                  project.displayName
                )}
              </Heading>
              <Text>{project.description}</Text>
              {project.features && project.features.length > 0 && (
                <Flex direction='column' gap='1'>
                  <Heading as='h3' size='4'>🚀 Features</Heading>
                  {project.features.map((a) => (
                    <Text key={a}>{a}</Text>
                  ))}
                </Flex>
              )}
              {project.achievements && project.achievements.length > 0 && (
                <Flex direction='column' gap='1'>
                  <Heading as='h3' size='4'>📈 Achievements</Heading>
                  {project.achievements.map((a) => (
                    <Text key={a}>{a}</Text>
                  ))}
                </Flex>
              )}
              {(project.imageUrl || i === 0) && (
                <img
                  src={project.imageUrl || job.bgUrl}
                  alt={project.displayName + ' background'}
                  style={{ width: '100%', height: 'auto', borderRadius: 12 }}
                />
              )}
              <Flex wrap='wrap' gap='2'>
                {project.technologies.map((t) => (
                  <Badge key={t} variant='soft' color={project.color as any}>{t}</Badge>
                ))}
              </Flex>
            </Flex>
          ))}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Flex justify='between'>
            <Button
              variant='outline'
              size='3'
              style={{ cursor: 'pointer', fontFamily: 'Outfit, sans-serif', fontWeight: 700 }}
              onClick={() => router.push('/')}
            >
              ← Home
            </Button>
            <Flex gap='2'>
              <Button
                disabled={currentIndex === 0}
                size='3'
                variant='solid'
                onClick={() => handleNavigate('prev')}
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, cursor: 'pointer' }}
                children='Newer'
              />
              <Button
                disabled={currentIndex === jobs.length - 1}
                size='3'
                variant='solid'
                onClick={() => handleNavigate('next')}
                style={{ fontFamily: 'Outfit, sans-serif', fontWeight: 700, cursor: 'pointer' }}
                children='Older'
              />
            </Flex>
          </Flex>
        </motion.div>
      </Flex>
    </>
  )
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = jobs.map((job) => ({
    params: { slug: job.slug },
  }))

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const slug = params?.slug as string
  const job = jobs.find(j => j.slug === slug)

  if (!job) {
    return {
      notFound: true,
    }
  }

  return {
    props: {
      job,
    },
  }
}

export default ProjectDetail
