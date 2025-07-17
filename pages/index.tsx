import React from 'react'
import { motion, AnimatePresence } from 'motion/react'
import { Flex, Text } from '@radix-ui/themes'
import Head from 'next/head'

import JobCard from '../src/components/JobCard'
import jobs from '../src/data/jobs'

export default function Home() {
  return (
    <>
      <Head>
        <title>Carl Gunderson | web development portfolio</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
        <meta name="description" content="Hey there! I'm Carl — a product engineer who loves solving problems and building things. I will occasionally work for pizza." />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="WebDev Portfolio" />
        <meta property="og:description" content="A collection of Carl Gunderson's web development work." />
        <meta property="og:url" content="https://carlgunderson.com/" />
        <meta property="og:image" content="https://carlgunderson.com/images/og-image.png" />
        <meta property="og:image:alt" content="Carl Gunderson web development portfolio" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Carl Gunderson | web development portfolio" />
        <meta name="twitter:description" content="Hey there! I'm Carl — a product engineer who loves solving problems and building things. Preferably at the same time." />
        <meta name="twitter:image" content="https://carlgunderson.com/images/og-image.png" />
        <link rel="canonical" href="https://carlgunderson.com/" />
        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />
      </Head>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 30, delay: 0.1 }}
      >
        <Text as='p' style={{ position: 'relative', fontSize: 20, marginBottom: 48, fontWeight: 300, maxWidth: '100%' }}>
          👋 <strong style={{ fontWeight: 700 }}>Hey there!</strong> I'm Carl — a product engineer who loves solving problems and building things. Preferably at the same time.
        </Text>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
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