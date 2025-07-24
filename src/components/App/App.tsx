import { useEffect } from 'react';
import { motion } from 'motion/react'
import { Flex, Theme as RadixTheme } from '@radix-ui/themes'

import Header from '~/components/Header'
import { ThemeProvider } from '~/contexts/ThemeContext'
import BlurryBackground from './BlurryBg';

const App = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    const stored = localStorage.getItem('theme');
    let theme: 'light' | 'dark';
    if (stored === 'light' || stored === 'dark') {
      theme = stored;
    } else {
      const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
      theme = darkQuery.matches ? 'dark' : 'light';
    }
    document.documentElement.classList.remove('light', 'dark');
    document.documentElement.classList.add(theme);

    // Listen for system changes only if no localStorage override
    if (!stored) {
      const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
      const updateTheme = () => {
        const sysTheme = darkQuery.matches ? 'dark' : 'light';
        document.documentElement.classList.remove('light', 'dark');
        document.documentElement.classList.add(sysTheme);
      };
      darkQuery.addEventListener('change', updateTheme);
      return () => darkQuery.removeEventListener('change', updateTheme);
    }
  }, []);

  return (
    <ThemeProvider>
      <RadixTheme style={{ position: 'relative', fontFamily: 'Outfit, sans-serif' }}>
        <BlurryBackground />
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
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: 'easeOut', delay: 1.2 }}
            style={{ margin: '64px auto 24px', textAlign: 'center' }}
          >
            <footer>
              <Flex direction='column' align='center' justify='center' gap='2'>
                <span style={{ display: 'block', marginBottom: 4, fontWeight: 700 }}>
                  made with &#x1f49a; around the &#x1f30e;
                </span>
                <span style={{ fontSize: 14, fontWeight: 700 }}>
                  &copy; { (new Date()).getFullYear() } Carl Gunderson
                </span>
              </Flex>
            </footer>
          </motion.div>
        </Flex>
      </RadixTheme>
    </ThemeProvider>
  )
}

export default App