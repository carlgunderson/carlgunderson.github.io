import { GitHubLogoIcon, LinkedInLogoIcon } from '@radix-ui/react-icons'
import { Text, Flex, Heading } from '@radix-ui/themes'
import { Link } from '@tanstack/react-router'
import { motion } from 'motion/react'

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

const Header = () => (
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
        <Heading as='h1' size='7' style={{ color: '#181c2a', fontWeight: 800 }}>
          <Link to='/' style={{ color: '#333', textDecoration: 'none', borderRadius: 8 }}>Carl Gunderson</Link>
        </Heading>
        <Text style={{fontWeight: 600, letterSpacing: 4.5, fontSize: 14, color: '#747474' }}>WEB DEVELOPMENT</Text>
      </Flex>
      <Flex gap='2'>
        {socialLinks.map(link => (
          <a
            key={link.label}
            href={link.href}
            target='_blank'
            aria-label={link.label}
            style={{ color: '#333' }}
          >
            {link.icon}
          </a>
        ))}
      </Flex>
    </Flex>
  </motion.header>
)

export default Header 