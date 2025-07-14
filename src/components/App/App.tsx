import Header from '../Header'
import { motion } from 'motion/react'
import { Flex, Theme } from '@radix-ui/themes'

const App = ({ children }: { children: React.ReactNode }) => {
  return (
    <Theme style={{ backgroundColor: '#f7f7f7', position: 'relative', fontFamily: 'Outfit, sans-serif' }}>
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          pointerEvents: 'none',
          overflow: 'hidden',
        }}
        aria-hidden="true"
      >
        <div
          style={{
            position: 'absolute',
            top: '-10%',
            left: '-20%',
            width: 600,
            height: 600,
            background: 'radial-gradient(circle at 30% 30%, #a5b4fc 0%, #f0f4ff 100%)',
            opacity: 0.55,
            filter: 'blur(120px)',
            borderRadius: '50%',
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: 'absolute',
            bottom: '-15%',
            right: '-10%',
            width: 700,
            height: 700,
            background: 'radial-gradient(circle at 70% 70%, #fbc2eb 0%, #f7d9e3 100%)',
            opacity: 0.45,
            filter: 'blur(140px)',
            borderRadius: '50%',
            zIndex: 0,
          }}
        />
        <div
          style={{
            position: 'absolute',
            top: '40%',
            left: '50%',
            width: 500,
            height: 500,
            background: 'radial-gradient(circle at 50% 50%, #fef9c3 0%, #f0f4ff 100%)',
            opacity: 0.35,
            filter: 'blur(100px)',
            borderRadius: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 0,
          }}
        />
      </div>
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut', delay: 1.2 }}
      >
        <Header />
      </motion.div>
      <Flex
        minHeight='calc(100svh - 90px)'
        direction='column'
        align='start'
        justify='between'
        style={{ maxWidth: 700, margin: '0 auto', padding: '40px 24px 0' }}
      >
        {children}
        <footer style={{ margin: '64px auto 24px', textAlign: 'center', color: '#747474' }}>
          <Flex direction='column' align='center' justify='center' gap='2'>
            <span style={{ display: 'block', marginBottom: 4, color: '#333', fontWeight: 700 }}>
              made with &#x1f49a; around the &#x1f30e;
            </span>
            <span style={{ fontSize: 14, fontWeight: 700 }}>
              &copy; { (new Date()).getFullYear() } Carl Gunderson
            </span>
          </Flex>
        </footer>
      </Flex>
    </Theme>
  )
}

export default App