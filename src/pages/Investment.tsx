import React from 'react'
import { motion } from 'framer-motion'
import { TrendingUp, DollarSign, Shield, Users, Globe, Zap } from 'lucide-react'
import { Link } from 'react-router-dom'
import { useParallax } from '../contexts/ParallaxContext'

const Investment: React.FC = () => {
  const { scrollY } = useParallax()

  const investmentOpportunities = [
    {
      title: 'Aircraft Ownership',
      description: 'Invest in private aircraft ownership with professional management services.',
      returns: '15-25% annually',
      minimum: '$500,000',
      features: ['Professional management', 'Tax benefits', 'Flexible usage', 'Appreciation potential'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      title: 'Fractional Ownership',
      description: 'Own a share of an aircraft with guaranteed availability and fixed costs.',
      returns: '12-20% annually',
      minimum: '$100,000',
      features: ['Shared ownership', 'Fixed costs', 'Guaranteed availability', 'Professional crew'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      title: 'Jet Card Programs',
      description: 'Prepaid flight hours with guaranteed availability and fixed hourly rates.',
      returns: '8-15% annually',
      minimum: '$50,000',
      features: ['Prepaid hours', 'Fixed rates', 'Global network', 'No maintenance costs'],
      color: 'from-purple-500 to-pink-500'
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
              Aviation{' '}
              <span className="text-white">Investment</span>
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
              Discover exclusive investment opportunities in private aviation with 
              professional management and proven returns.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Investment Opportunities */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {investmentOpportunities.map((opportunity, index) => (
              <motion.div
                key={opportunity.title}
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
                  <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${opportunity.color} opacity-0 group-hover:opacity-20 transition-opacity duration-500 blur-xl`}></div>
                  
                  {/* Icon */}
                  <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${opportunity.color} mb-6`}
                  >
                    <TrendingUp className="h-8 w-8 text-white" />
                  </motion.div>

                  {/* Content */}
                  <div className="relative z-10">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                      {opportunity.title}
                    </h3>
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {opportunity.description}
                    </p>

                    {/* Returns and Minimum */}
                    <div className="grid grid-cols-2 gap-4 mb-6">
                      <div className="bg-green-50 p-4 rounded-lg">
                        <div className="text-sm text-green-600 font-medium">Expected Returns</div>
                        <div className="text-xl font-bold text-green-700">{opportunity.returns}</div>
                      </div>
                      <div className="bg-blue-50 p-4 rounded-lg">
                        <div className="text-sm text-blue-600 font-medium">Minimum Investment</div>
                        <div className="text-xl font-bold text-blue-700">{opportunity.minimum}</div>
                      </div>
                    </div>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {opportunity.features.map((feature, featureIndex) => (
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

                    <Link to="/contact" className="w-full btn-primary inline-block text-center">
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

      {/* Why Invest */}
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
              Why Invest in{' '}
              <span className="text-gradient">Aviation</span>
            </motion.h2>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { icon: TrendingUp, title: 'Strong Returns', description: 'Consistent annual returns of 12-25%' },
              { icon: Shield, title: 'Asset Security', description: 'Tangible assets with intrinsic value' },
              { icon: Users, title: 'Growing Demand', description: 'Increasing demand for private aviation' },
              { icon: Globe, title: 'Global Market', description: 'Access to worldwide investment opportunities' },
              { icon: Zap, title: 'Tax Benefits', description: 'Favorable tax treatment for aviation investments' },
              { icon: DollarSign, title: 'Diversification', description: 'Portfolio diversification with unique assets' },
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
              Ready to{' '}
              <span className="text-white">Invest?</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-xl mb-8 max-w-2xl mx-auto"
            >
              Contact our investment team to discuss your aviation investment opportunities.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="flex flex-col sm:flex-row gap-4 justify-center items-center"
            >
              <button className="bg-white text-primary-600 hover:bg-gray-100 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
                Schedule Consultation
              </button>
              <button className="border-2 border-white text-white hover:bg-white hover:text-primary-600 font-semibold py-4 px-8 rounded-lg transition-all duration-300 transform hover:scale-105">
                Download Prospectus
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Investment 