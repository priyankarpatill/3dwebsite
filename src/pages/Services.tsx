import React from 'react'
import { motion } from 'framer-motion'
import { Plane, Shield, Users, Star, Heart, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useParallax } from '../contexts/ParallaxContext'

const Services: React.FC = () => {
  const { scrollY } = useParallax()

  const services = [
    {
      icon: Plane,
      title: 'Private Jet Charter',
      description: 'Luxury private jet charter services with global reach and personalized attention.',
      features: [
        'Global destinations access',
        'Flexible scheduling',
        'Luxury amenities',
        'Professional crew',
        'Custom catering',
        'Ground transportation'
      ],
      color: 'from-blue-500 to-cyan-500',
      price: 'From $5,000/hour'
    },
    {
      icon: Shield,
      title: 'Air Ambulance',
      description: 'Medical transportation with fully equipped aircraft and trained medical teams.',
      features: [
        'Medical equipment onboard',
        'Trained medical staff',
        '24/7 availability',
        'Global medical network',
        'Patient monitoring',
        'Emergency response'
      ],
      color: 'from-red-500 to-pink-500',
      price: 'Contact for quote'
    },
    {
      icon: Users,
      title: 'Aircraft Management',
      description: 'Comprehensive aircraft management services for owners and operators.',
      features: [
        'Maintenance scheduling',
        'Crew management',
        'Operations support',
        'Regulatory compliance',
        'Cost optimization',
        'Performance monitoring'
      ],
      color: 'from-green-500 to-emerald-500',
      price: 'Custom pricing'
    }
  ]

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
              <span className="text-white">Services</span>
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
              Experience unmatched luxury, flexibility, and personalized service with our 
              comprehensive aviation solutions.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={service.title}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ 
                  scale: 1.05,
                  rotateY: 5,
                  rotateX: 5
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
                    <ul className="space-y-3 mb-6">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li
                          key={feature}
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: index * 0.2 + featureIndex * 0.1 }}
                          viewport={{ once: true }}
                          className="flex items-center space-x-3 text-gray-700"
                        >
                          <div className="w-2 h-2 bg-primary-500 rounded-full"></div>
                          <span>{feature}</span>
                        </motion.li>
                      ))}
                    </ul>

                    {/* Price */}
                    <div className="text-2xl font-bold text-primary-600 mb-6">
                      {service.price}
                    </div>

                                         <Link to="/booking" className="w-full btn-primary inline-block text-center">
                       Learn More
                     </Link>
                  </div>

                  {/* Hover Effect */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
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
              Why Choose{' '}
              <span className="text-gradient">Crystal Wings</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { icon: Star, title: 'Premium Quality', description: 'Unmatched luxury and attention to detail' },
              { icon: Zap, title: 'Speed & Efficiency', description: 'Skip commercial airport hassles' },
              { icon: Heart, title: 'Personalized Care', description: 'Bespoke service tailored to your needs' },
              { icon: Shield, title: 'Safety First', description: 'Highest safety standards and protocols' },
            ].map((item, index) => (
              <motion.div
                key={item.title}
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
                  <item.icon className="h-8 w-8 text-primary-600" />
                </motion.div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Services 