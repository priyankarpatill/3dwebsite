import React, { createContext, useContext, useEffect, useState } from 'react'

interface ParallaxContextType {
  scrollY: number
  windowHeight: number
  windowWidth: number
}

const ParallaxContext = createContext<ParallaxContextType>({
  scrollY: 0,
  windowHeight: 0,
  windowWidth: 0,
})

export const useParallax = () => {
  const context = useContext(ParallaxContext)
  if (!context) {
    throw new Error('useParallax must be used within a ParallaxProvider')
  }
  return context
}

interface ParallaxProviderProps {
  children: React.ReactNode
}

export const ParallaxProvider: React.FC<ParallaxProviderProps> = ({ children }) => {
  const [scrollY, setScrollY] = useState(0)
  const [windowHeight, setWindowHeight] = useState(0)
  const [windowWidth, setWindowWidth] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY)
    }

    const handleResize = () => {
      setWindowHeight(window.innerHeight)
      setWindowWidth(window.innerWidth)
    }

    // Set initial values
    handleResize()

    // Add event listeners
    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  const value = {
    scrollY,
    windowHeight,
    windowWidth,
  }

  return (
    <ParallaxContext.Provider value={value}>
      {children}
    </ParallaxContext.Provider>
  )
} 