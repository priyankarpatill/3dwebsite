import React, { useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowDown, Play, Volume2, VolumeX } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useParallax } from '../contexts/ParallaxContext'

const Hero: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const { scrollY } = useParallax()
  const [isMuted, setIsMuted] = React.useState(true)
  const [isPlaying, setIsPlaying] = React.useState(false)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play().catch(() => {
        // Autoplay failed, user will need to interact
      })
    }
  }, [])

  const handlePlayPause = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  const handleMuteToggle = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted
      setIsMuted(!isMuted)
    }
  }

  return (
    <section className="relative h-screen overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0">
        <video
          ref={videoRef}
          className="w-full h-full object-cover"
          muted={isMuted}
          loop
          playsInline
        >
          <source src="/images/Airplane View.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 flex items-center justify-center h-full">
        <div className="text-center text-white px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="max-w-4xl mx-auto"
          >
            <motion.h1
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-shadow-lg"
              style={{
                transform: `translateY(${scrollY * 0.5}px)`,
              }}
            >
              <span className="text-white">Crystal Wings</span>
            </motion.h1>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              className="text-xl sm:text-2xl md:text-3xl mb-8 text-shadow"
              style={{
                transform: `translateY(${scrollY * 0.3}px)`,
              }}
            >
              Elevating Your Travel Experience
            </motion.p>
            
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.8 }}
              className="text-lg sm:text-xl mb-12 max-w-2xl mx-auto text-gray-200"
              style={{
                transform: `translateY(${scrollY * 0.2}px)`,
              }}
            >
              Experience unparalleled luxury with our premium private jet charter services. 
              Global destinations, personalized attention, and unmatched efficiency.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1 }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <Link to="/booking" className="btn-primary text-lg px-8 py-4">
                Book Your Flight
              </Link>
              <Link to="/fleet" className="btn-secondary text-lg px-8 py-4 border-white text-white hover:bg-white hover:text-gray-900">
                Explore Fleet
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Video Controls */}
      <div className="absolute bottom-8 right-8 flex gap-2">
        <button
          onClick={handlePlayPause}
          className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors duration-200"
        >
          {isPlaying ? (
            <Play className="h-5 w-5 text-white" />
          ) : (
            <Play className="h-5 w-5 text-white" />
          )}
        </button>
        <button
          onClick={handleMuteToggle}
          className="p-3 bg-white/20 backdrop-blur-md rounded-full hover:bg-white/30 transition-colors duration-200"
        >
          {isMuted ? (
            <VolumeX className="h-5 w-5 text-white" />
          ) : (
            <Volume2 className="h-5 w-5 text-white" />
          )}
        </button>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="h-6 w-6 text-white" />
        </motion.div>
      </motion.div>

      {/* Floating Elements */}
      <motion.div
        animate={{ 
          y: [0, -20, 0],
          rotate: [0, 5, 0]
        }}
        transition={{ 
          duration: 6,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-20 left-10 w-20 h-20 bg-white/10 backdrop-blur-md rounded-full"
        style={{
          transform: `translateX(${scrollY * 0.1}px)`,
        }}
      ></motion.div>
      
      <motion.div
        animate={{ 
          y: [0, 20, 0],
          rotate: [0, -5, 0]
        }}
        transition={{ 
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute top-40 right-20 w-16 h-16 bg-primary-500/20 backdrop-blur-md rounded-full"
        style={{
          transform: `translateX(${-scrollY * 0.1}px)`,
        }}
      ></motion.div>
    </section>
  )
}

export default Hero 