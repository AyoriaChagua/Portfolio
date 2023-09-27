'use client'

import Typewriter from 'react-ts-typewriter';

interface Props {
    text: string | string[]
    loop?: boolean
    speed?: number
    delay: number
    className?: string
}

export default function TextWriter( { text, loop = true, speed, delay, className }: Props) {
  return (
    <div className={className}>
      <Typewriter text={text} loop={ loop } speed={ speed } delay={delay}   />
    </div>
  )
}
