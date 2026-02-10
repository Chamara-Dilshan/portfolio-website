import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import ServiceCard from '../ui/ServiceCard'
import { services } from '../../data/services'

const Services = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  }

  return (
    <section id="services" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          {/* Heading */}
          <h2 className="heading-2 text-center mb-4 text-secondary-500">
            Professional <span className="text-gradient">Services</span>
          </h2>

          {/* Subheading */}
          <p className="text-neutral-600 text-center mb-6 max-w-2xl mx-auto text-lg">
            I provide practical and reliable IT services focused on delivering
            real value to businesses and individuals.
          </p>

          {/* <p className="text-neutral-500 text-center mb-12 max-w-xl mx-auto">
            Each service is delivered with a focus on performance, scalability,
            and long-term maintainability.
          </p> */}

          {/* Service cards grid */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? 'visible' : 'hidden'}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {services.map((service) => (
              <motion.div key={service.id} variants={itemVariants}>
                <ServiceCard service={service} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
