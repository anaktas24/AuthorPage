"use client"

import { useState, useEffect } from "react"

interface BlinkingTextProps {
  text: string
  className?: string
}

export function BlinkingText({ text, className = "" }: BlinkingTextProps) {
  const [visible, setVisible] = useState(true)

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible((prev) => !prev)
    }, 500)

    return () => clearInterval(interval)
  }, [])

  return (
    <span className={className} style={{ visibility: visible ? "visible" : "hidden" }}>
      {text}
    </span>
  )
}
