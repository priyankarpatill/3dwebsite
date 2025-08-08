import React from 'react'
import { motion } from 'framer-motion'
import { Plane, Shield, Users, Globe, Clock, Star } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useParallax } from '../contexts/ParallaxContext'

const Services: React.FC = () => {
  const { scrollY } = useParallax()

  const services = [
    {
      icon: Plane,
      title: 'Private Jet Charter',
      description: 'Luxury private jet charter services with global reach and personalized attention.',
      features: ['Global destinations', 'Flexible scheduling', 'Luxury amenities'],
      color: 'from-blue-500 to-cyan-500',
      delay: 0.1
    },
    {
      icon: Shield,
      title: 'Air Ambulance',
      description: 'Medical transportation with fully equipped aircraft and trained medical teams.',
      features: ['Medical equipment', 'Trained staff', '24/7 availability'],
      color: 'from-red-500 to-pink-500',
      delay: 0.2
    },
    {
      icon: Users,
      title: 'Aircraft Management',
      description: 'Comprehensive aircraft management services for owners and operators.',
      features: ['Maintenance', 'Crew management', 'Operations support'],
      color: 'from-green-500 to-emerald-500',
      delay: 0.3
    },
    {
      icon: Globe,
      title: 'Global Network',
      description: 'Access to over 5,000 airports worldwide with seamless coordination.',
      features: ['Worldwide coverage', 'Local expertise', 'Seamless coordination'],
      color: 'from-purple-500 to-indigo-500',
      delay: 0.4
    },
    {
      icon: Clock,
      title: 'Time Efficiency',
      description: 'Skip commercial airport hassles with direct access to private terminals.',
      features: ['Direct access', 'Flexible timing', 'No queues'],
      color: 'from-orange-500 to-yellow-500',
      delay: 0.5
    },
    {
      icon: Star,
      title: 'Premium Service',
      description: 'Bespoke travel experience with customized catering and amenities.',
      features: ['Custom catering', 'Luxury amenities', 'Personal concierge'],
      color: 'from-pink-500 to-rose-500',
      delay: 0.6
    }
  ]

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-blue-50/50 to-purple-50/50"></div>
        <div className="absolute top-20 right-20 w-32 h-32 bg-primary-500/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-20 left-20 w-40 h-40 bg-secondary-500/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
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
            style={{
              transform: `translateY(${scrollY * 0.1}px)`,
            }}
          >
            Our{' '}
            <span className="text-gradient">Services</span>
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
            className="text-xl text-gray-600 max-w-3xl mx-auto"
            style={{
              transform: `translateY(${scrollY * 0.05}px)`,
            }}
          >
            Experience unmatched luxury, flexibility, and personalized service with our 
            comprehensive aviation solutions.
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: service.delay }}
              viewport={{ once: true }}
              whileHover={{ 
                scale: 1.05,
                rotateY: 5,
                rotateX: 5,
                z: 50
              }}
              className="group relative"
              style={{
                transform: `translateY(${scrollY * (0.1 + index * 0.02)}px)`,
              }}
            >
              <div className="relative bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 transform-gpu border border-gray-100">
                {/* Gradient Border */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
                
                {/* Icon */}
                <motion.div
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} mb-6`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <ul className="space-y-2">
                    {service.features.map((feature, featureIndex) => (
                      <motion.li
                        key={feature}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: service.delay + featureIndex * 0.1 }}
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

                {/* Glow Effect */}
                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${service.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 blur-2xl`}></div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          viewport={{ once: true }}
          className="text-center mt-16"
        >
          <Link to="/services" className="btn-primary text-lg px-8 py-4 inline-block">
            Explore All Services
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

export default Services 