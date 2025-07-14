import { useState, useRef } from 'react'

interface BoopConfig {
  rotation?: number
  scale?: number
  timing?: number
  x?: number
  y?: number
}

export function useBoop({ rotation = 0, scale = 1, timing = 150, x = 0, y = 0 }: BoopConfig) {
  const [isBooped, setIsBooped] = useState(false)
  const timeoutId = useRef<number>()

  const trigger = () => {
    setIsBooped(true)
    clearTimeout(timeoutId.current)
    timeoutId.current = window.setTimeout(() => setIsBooped(false), timing)
  }

  const style = {
    display: 'inline-block',
    backfaceVisibility: 'hidden' as const,
    transform: isBooped
      ? `rotate(${rotation}deg) scale(${scale}) translate(${x}px, ${y}px)`
      : 'none',
    transition: `transform ${timing}ms cubic-bezier(.36,2,.6,1)`
  }

  return [style, trigger] as const
} 