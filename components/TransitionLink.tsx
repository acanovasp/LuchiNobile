'use client'

import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { ReactNode, MouseEvent, HTMLAttributes } from 'react'

interface TransitionLinkProps extends Omit<HTMLAttributes<HTMLAnchorElement>, 'onClick'> {
  href: string
  children: ReactNode
  onClick?: () => void
  blurTarget?: string // CSS selector for element to blur during transition
  blurClass?: string // Class to add for blur effect (default: derives from target)
}

// Duration must match CSS --duration-slower (800ms)
const TRANSITION_DURATION = 400
const BLUR_DELAY = 150 // Delay before black overlay starts (lets blur be visible)

export default function TransitionLink({
  href,
  children,
  className,
  onClick,
  blurTarget,
  blurClass,
  ...props
}: TransitionLinkProps) {
  const router = useRouter()

  const handleClick = (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault()
    
    // Call any additional onClick handler
    onClick?.()

    // Add blur class to target element if specified
    if (blurTarget) {
      const target = (e.currentTarget as HTMLElement).closest(blurTarget)
      if (target) {
        // Use provided blurClass or derive from selector
        const transitionClass = blurClass || `${blurTarget.replace('.', '')}--transitioning`
        target.classList.add(transitionClass)
      }
    }

    // Add fade-out class to transition overlay
    const overlay = document.querySelector('.page-transition')
    if (overlay) {
      // If blur is happening, delay the black overlay to let blur be visible
      const fadeDelay = blurTarget ? BLUR_DELAY : 0
      
      setTimeout(() => {
        overlay.classList.add('page-transition--visible')
        
        // Navigate after fade-out completes
        setTimeout(() => {
          router.push(href)
        }, TRANSITION_DURATION)
      }, fadeDelay)
    } else {
      // Fallback if overlay doesn't exist
      router.push(href)
    }
  }

  return (
    <Link href={href} className={className} onClick={handleClick} {...props}>
      {children}
    </Link>
  )
}
