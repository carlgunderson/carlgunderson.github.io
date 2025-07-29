import React from 'react'
import { motion } from 'motion/react'
import { Flex, Text } from '@radix-ui/themes'
import Head from 'next/head'

import JobCard from '../src/components/JobCard'
import jobs from '../src/data/jobs'

export default function Home() {
  return (
    <>
      <Head>
        <title>Carl Gunderson | Product Engineer & Web Developer Portfolio</title>
        <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no" />
        <meta name="description" content="Carl Gunderson is a product engineer and web developer with experience at Operator.ai, LunaDNA, Smashtech, GovX, and more. View portfolio of React, TypeScript, and full-stack development projects." />
        <meta name="keywords" content="Carl Gunderson, product engineer, web developer, React, TypeScript, full-stack, portfolio, Operator.ai, LunaDNA, Smashtech, GovX" />
        <meta name="author" content="Carl Gunderson" />
        <meta name="robots" content="index, follow" />

        <meta property="og:type" content="website" />
        <meta property="og:title" content="Carl Gunderson | Product Engineer & Web Developer Portfolio" />
        <meta property="og:description" content="Product engineer and web developer with experience at Operator.ai, LunaDNA, Smashtech, GovX, and more. View portfolio of React, TypeScript, and full-stack development projects." />
        <meta property="og:url" content="https://carlgunderson.com/" />
        <meta property="og:image" content="https://carlgunderson.com/images/og-image.png" />
        <meta property="og:image:alt" content="Carl Gunderson web development portfolio" />
        <meta property="og:site_name" content="Carl Gunderson Portfolio" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Carl Gunderson | Product Engineer & Web Developer Portfolio" />
        <meta name="twitter:description" content="Product engineer and web developer with experience at Operator.ai, LunaDNA, Smashtech, GovX, and more." />
        <meta name="twitter:image" content="https://carlgunderson.com/images/og-image.png" />

        <link rel="canonical" href="https://carlgunderson.com/" />

        <link rel="icon" type="image/x-icon" href="/favicon.ico" />
        <link rel="shortcut icon" type="image/x-icon" href="/favicon.ico" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Carl Gunderson",
              "jobTitle": "Product Engineer",
              "description": "Product engineer and web developer with experience in React, TypeScript, and full-stack development",
              "url": "https://carlgunderson.com/",
              "sameAs": [
                "https://github.com/carlgunderson",
                "https://linkedin.com/in/carlgunderson"
              ],
              "knowsAbout": [
                "React",
                "TypeScript",
                "Web Development",
                "Product Engineering",
                "Full-stack Development"
              ]
            })
          }}
        />
      </Head>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 30, delay: 0.1 }}
      >
        <Text as='p' style={{ position: 'relative', fontSize: 20, marginBottom: 48, fontWeight: 300 }}>
          👋 <strong style={{ fontWeight: 700 }}>Hey there!</strong> I'm Carl — a product engineer who loves solving problems and building things. Preferably at the same time.
        </Text>
      </motion.div>
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ type: 'spring', stiffness: 100, damping: 30, delay: 0.6 }}
      >
        <Flex direction='column' align='stretch' gap='7'>
          {jobs.map((job, index) => (
            <JobCard  key={job.slug} job={job} />
          ))}
        </Flex>
      </motion.div>
    </>
  )
}