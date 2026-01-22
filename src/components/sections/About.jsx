import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/Chamara-Dilshan', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/', label: 'LinkedIn' },
]

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding bg-dark-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-2 text-center mb-12">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-2xl bg-white p-[3px] shadow-lg">
                  <img
                    src="/profile.jpeg"
                    alt="Chamara Dilshan"
                    className="w-full h-full object-cover rounded-2xl"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-primary-100 rounded-full -z-10" />
              </div>
            </div>

            {/* Bio */}
            <div>
              <h3 className="heading-3 mb-4">
                Hi there! I'm Chamara Dilshan
              </h3>

              <p className="text-dark-600 mb-4 leading-relaxed">
                I'm a recently graduated Software Engineer from the University of Moratuwa,
                specializing in full-stack web development using the MERN stack and Spring Boot
                with SQL- based databases.
              </p>

              <p className="text-dark-600 mb-6 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open source projects, or sharing my knowledge
                through blog posts and tutorials.
              </p>

              <div className="flex items-center space-x-4">
                {socialLinks.map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-white rounded-lg shadow-sm hover:shadow-md hover:text-primary-600 transition-all"
                    aria-label={link.label}
                  >
                    <link.icon size={20} />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default About
