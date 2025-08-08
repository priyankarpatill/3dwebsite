import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import About from '../components/About'
import Services from '../components/Services'
import { Star, Users, Globe, Award } from 'lucide-react'
import { useParallax } from '../contexts/ParallaxContext'
import { useNavigate } from 'react-router-dom'

const Home: React.FC = () => {
  const { scrollY } = useParallax()
  const navigate = useNavigate()
  const [animatedValues, setAnimatedValues] = useState({
    destinations: 0,
    clients: 0,
    support: 0,
    experience: 0
  })

  const stats = [
    { icon: Globe, value: 5000, label: 'Global Destinations', key: 'destinations' },
    { icon: Users, value: 1000, label: 'Happy Clients', key: 'clients' },
    { icon: Star, value: 24, label: 'Support Available', key: 'support' },
    { icon: Award, value: 15, label: 'Years Experience', key: 'experience' },
  ]

  const testimonials = [
    {
      name: 'Sarah Johnson',
      role: 'CEO, TechCorp',
      content: 'Crystal Wings transformed our business travel. The level of service and attention to detail is unmatched.',
      rating: 5,
    },
    {
      name: 'Michael Chen',
      role: 'Entrepreneur',
      content: 'The most reliable and luxurious private jet service I\'ve ever experienced. Highly recommended.',
      rating: 5,
    },
    {
      name: 'Emma Rodriguez',
      role: 'Film Producer',
      content: 'Perfect for our international film shoots. Professional, punctual, and absolutely luxurious.',
      rating: 5,
    },
  ]

  // Animation function
  const animateValue = (start: number, end: number, duration: number, callback: (value: number) => void) => {
    const startTime = performance.now()
    
    const updateValue = (currentTime: number) => {
      const elapsed = currentTime - startTime
      const progress = Math.min(elapsed / duration, 1)
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4)
      const currentValue = Math.floor(start + (end - start) * easeOutQuart)
      
      callback(currentValue)
      
      if (progress < 1) {
        requestAnimationFrame(updateValue)
      }
    }
    
    requestAnimationFrame(updateValue)
  }

  // Trigger animation when stats section comes into view
  const [statsInView, setStatsInView] = useState(false)

  useEffect(() => {
    if (statsInView) {
      // Animate each stat
      stats.forEach((stat) => {
        animateValue(0, stat.value, 3000, (value) => {
          setAnimatedValues(prev => ({
            ...prev,
            [stat.key]: value
          }))
        })
      })
    }
  }, [statsInView])

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* About Section */}
      <About />

      {/* Stats Section */}
      <section 
        className="py-20 bg-gradient-to-r from-primary-600 to-primary-700 relative overflow-hidden"
        onMouseEnter={() => setStatsInView(true)}
      >
        <div className="absolute inset-0 bg-black/10"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                onViewportEnter={() => setStatsInView(true)}
                className="text-center text-white"
                style={{
                  transform: `translateY(${scrollY * 0.05}px)`,
                }}
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="inline-flex p-4 bg-white/20 backdrop-blur-md rounded-full mb-4"
                >
                  <stat.icon className="h-8 w-8" />
                </motion.div>
                <div className="text-3xl md:text-4xl font-bold mb-2">
                  {stat.key === 'support' 
                    ? `${animatedValues[stat.key as keyof typeof animatedValues]}/7`
                    : `${animatedValues[stat.key as keyof typeof animatedValues]}+`
                  }
                </div>
                <div className="text-primary-100">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <Services />

      {/* Testimonials Section */}
      <section className="py-20 bg-gradient-to-br from-gray-50 to-blue-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-40 h-40 bg-secondary-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-gray-900 mb-6"
            >
              What Our{' '}
              <span className="text-gradient">Clients Say</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Don't just take our word for it. Here's what our valued clients have to say about their experience.
            </motion.p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5
                }}
                className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform-gpu"
                style={{
                  transform: `translateY(${scrollY * (0.1 + index * 0.02)}px)`,
                }}
              >
                <div className="flex items-center mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 mb-6 italic">"{testimonial.content}"</p>
                <div>
                  <div className="font-semibold text-gray-900">{testimonial.name}</div>
                  <div className="text-gray-500">{testimonial.role}</div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-600 to-secondary-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-600/90 to-secondary-600/90"></div>
          <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center text-white"
          >
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold mb-6"
            >
              Ready to Experience{' '}
              <span className="text-white">Luxury Travel?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl mb-8 max-w-2xl mx-auto"
            >
              Book your next journey with Crystal Wings and experience the ultimate in private aviation.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex justify-center items-center"
            >
              <button
                className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105"
                onClick={() => navigate('/contact')}
              >
                Contact Us
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Home 