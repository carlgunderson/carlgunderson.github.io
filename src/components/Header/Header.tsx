import React from 'react'
import { GitHubLogoIcon, LinkedInLogoIcon, MoonIcon, SunIcon } from '@radix-ui/react-icons'
import { Text, Flex, Heading, IconButton } from '@radix-ui/themes'
import Link from 'next/link'
import { motion } from 'motion/react'
import posthog from 'posthog-js'

import { useTheme } from '~/contexts/ThemeContext'

const socialLinks = [
  {
    href: 'https://github.com/carlgunderson',
    label: 'GitHub',
    icon: <GitHubLogoIcon style={{ width: 24, height: 24 }} />,
  },
  {
    href: 'https://linkedin.com/in/carlgunderson',
    label: 'LinkedIn',
    icon: <LinkedInLogoIcon style={{ width: 24, height: 24 }} />,
  },
]

const Header = () => {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <motion.header
      initial={{ opacity: 0, y: -24 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, ease: 'easeOut' }}
      style={{
        position: 'relative',
      }}
    >
      <Flex align='center' justify='between' style={{ maxWidth: 700, margin: '0 auto', padding: '16px 24px' }}>
        <Flex direction='column'>
          <Heading as='h1' size='7' style={{ fontWeight: 800 }}>
            <Link href='/' style={{ color: 'inherit', textDecoration: 'none', borderRadius: 8 }}>Carl Gunderson</Link>
          </Heading>
          <Text color='gray' style={{fontWeight: 600, letterSpacing: 4.5, fontSize: 14 }}>WEB DEVELOPMENT</Text>
        </Flex>
        <Flex gap='4' align='center'>
          {mounted && (
            <IconButton
              asChild
              aria-label="Toggle dark mode"
              radius='full'
              variant='ghost'
              color='gray'
              onClick={toggleTheme}
            >
              {theme === 'dark' ? (
                <MoonIcon style={{ width: 24, height: 24 }} />
              ) : (
                <SunIcon style={{ width: 24, height: 24 }} />
              )}
            </IconButton>
          )}
          {socialLinks.map(link => (
            <IconButton
              key={link.label}
              asChild
              radius='full'
              variant='ghost'
              color='gray'
            >
              <a
                href={link.href}
                target='_blank'
                onClick={() => posthog.capture('social_link_click', { link: link.label })}
                aria-label={link.label}
              >
                {link.icon}
              </a>
            </IconButton>
          ))}
        </Flex>
      </Flex>
    </motion.header>
  )
}

export default Header 