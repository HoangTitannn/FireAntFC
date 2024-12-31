'use client'

import React, { useState, useEffect } from 'react'

interface CounterUpProps {
  end: number
  duration?: number
  className?: string
}

export default function CounterUp({ end, duration = 1200, className = '' }: CounterUpProps) {
  const [count, setCount] = useState(0)

  useEffect(() => {
    let startTimestamp: number | null = null
    const step = (timestamp: number) => {
      if (!startTimestamp) startTimestamp = timestamp
      const progress = Math.min((timestamp - startTimestamp) / duration, 1)
      setCount(Math.floor(progress * end))
      if (progress < 1) {
        window.requestAnimationFrame(step)
      }
    }
    window.requestAnimationFrame(step)
  }, [end, duration])
       
  return <span className={className}>{count.toLocaleString()}</span>
}

