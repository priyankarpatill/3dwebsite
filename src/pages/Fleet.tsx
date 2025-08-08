import React from 'react'
import { motion } from 'framer-motion'
import { Plane, Users, Zap, Shield } from 'lucide-react'
// import { Link } from 'react-router-dom'
import { useParallax } from '../contexts/ParallaxContext'

const Fleet: React.FC = () => {
  const { scrollY } = useParallax()

  const aircraft = [
    {
      name: 'Gulfstream G650',
      type: 'Ultra-Long Range',
      capacity: '19 passengers',
      range: '7,000 nm',
      speed: 'Mach 0.925',
      image: '/images/fleet1.jpg',
      features: ['Ultra-luxury interior', 'Global range capability', 'Advanced avionics'],
      category: 'Ultra-Long Range'
    },
    {
      name: 'Bombardier Global 7500',
      type: 'Ultra-Long Range',
      capacity: '19 passengers',
      range: '7,700 nm',
      speed: 'Mach 0.925',
      image: '/images/fleet2.jpg',
      features: ['Spacious cabin', 'Advanced technology', 'Global connectivity'],
      category: 'Ultra-Long Range'
    },
    {
      name: 'Cessna Citation X',
      type: 'Super Mid-Size',
      capacity: '12 passengers',
      range: '3,460 nm',
      speed: 'Mach 0.935',
      image: '/images/fleet3.jpg',
      features: ['High-speed performance', 'Efficient operations', 'Comfortable cabin'],
      category: 'Super Mid-Size'
    },
    {
      name: 'Embraer Phenom 300',
      type: 'Light Jet',
      capacity: '9 passengers',
      range: '2,010 nm',
      speed: 'Mach 0.78',
      image: '/images/fleet4.jpg',
      features: ['Cost-effective', 'Short runway capability', 'Modern design'],
      category: 'Light Jet'
    }
  ]

  // const categories = ['All', 'Ultra-Long Range', 'Super Mid-Size', 'Light Jet']

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-600 to-secondary-600 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-primary-600/90 to-secondary-600/90"></div>
          <div className="absolute top-20 right-20 w-32 h-32 bg-white/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-40 h-40 bg-white/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-5xl md:text-6xl font-bold mb-6"
              style={{
                transform: `translateY(${scrollY * 0.1}px)`,
              }}
            >
              Our{' '}
              <span className="text-white">Fleet</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-xl max-w-3xl mx-auto"
              style={{
                transform: `translateY(${scrollY * 0.05}px)`,
              }}
            >
              Experience luxury and performance with our meticulously maintained fleet of 
              premium aircraft, each designed for your comfort and safety.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Fleet Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-8">
            {aircraft.map((plane, index) => (
              <motion.div
                key={plane.name}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.02,
                  rotateY: 2,
                  rotateX: 2
                }}
                className="group relative"
                style={{
                  transform: `translateY(${scrollY * (0.1 + index * 0.02)}px)`,
                }}
              >
                <div className="relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 transform-gpu border border-gray-100 overflow-hidden">
                  {/* Image */}
                  <div className="h-64 bg-gradient-to-br from-primary-500 to-secondary-500 relative overflow-hidden">
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <Plane className="h-24 w-24 text-white/80" />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8">
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="text-2xl font-bold text-gray-900">{plane.name}</h3>
                      <span className="px-3 py-1 bg-primary-100 text-primary-600 rounded-full text-sm font-medium">
                        {plane.type}
                      </span>
                    </div>

                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center space-x-2">
                        <Users className="h-5 w-5 text-gray-500" />
                        <span className="text-gray-700">{plane.capacity}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Zap className="h-5 w-5 text-gray-500" />
                        <span className="text-gray-700">{plane.range}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Plane className="h-5 w-5 text-gray-500" />
                        <span className="text-gray-700">{plane.speed}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Shield className="h-5 w-5 text-gray-500" />
                        <span className="text-gray-700">Certified</span>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-2 mb-0">
                      {plane.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 + featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-2 text-gray-700"
                        >
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Fleet Stats */}
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
              Fleet{' '}
              <span className="text-gradient">Statistics</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { value: '25+', label: 'Aircraft in Fleet' },
              { value: '5000+', label: 'Flight Hours' },
              { value: '100%', label: 'Safety Record' },
              { value: '24/7', label: 'Availability' },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  className="inline-flex p-4 bg-primary-500/10 rounded-full mb-4"
                >
                  <Plane className="h-8 w-8 text-primary-600" />
                </motion.div>
                <div className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Fleet 