import { useState } from 'react'
import { Button } from '@radix-ui/themes'
import { motion, AnimatePresence } from 'motion/react'
import { isValidElement, Children, ReactNode } from 'react'

interface ButtonWithShimmerProps extends React.ComponentProps<typeof Button> {
  children: React.ReactNode
}

export function ButtonWithShimmer({ children, asChild, ...props }: ButtonWithShimmerProps & { asChild?: boolean }) {
  const [hovered, setHovered] = useState(false);

  // If asChild, enforce a single React element child
  if (asChild && (!isValidElement(children) || Children.count(children) !== 1)) {
    throw new Error('ButtonWithShimmer: When using asChild, children must be a single React element.');
  }

  return (
    <Button
      {...props}
      asChild={asChild}
      onMouseEnter={e => {
        setHovered(true)
        props.onMouseEnter?.(e)
      }}
      onMouseLeave={e => {
        setHovered(false)
        props.onMouseLeave?.(e)
      }}
      onFocus={e => {
        setHovered(true)
        props.onFocus?.(e)
      }}
      onBlur={e => {
        setHovered(false)
        props.onBlur?.(e)
      }}
      style={{
        ...props.style,
        alignSelf: 'flex-start',
        cursor: props.disabled ? 'default' : 'pointer',
        fontWeight: 700,
        fontSize: 16,
        // borderRadius: 12,
        padding: '10px 24px',
        background: props.disabled ? '#aaa' : 'linear-gradient(90deg, #3b82f6 0%, #6366f1 100%)',
        color: '#fff',
        letterSpacing: 0.2,
        transition: 'background 0.2s',
        boxShadow: 'none',
        border: 'none',
        overflow: 'hidden',
        position: 'relative',
      }}
    >
      {children}
      <AnimatePresence>
        {hovered && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: '100%' }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.45, ease: 'easeInOut' }}
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '120%',
              height: '100%',
              pointerEvents: 'none',
              background: 'linear-gradient(120deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.18) 50%, rgba(255,255,255,0) 100%)',
              zIndex: 1,
              mixBlendMode: 'lighten',
            }}
          />
        )}
      </AnimatePresence>
    </Button>
  );
} 