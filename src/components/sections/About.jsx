import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/Chamara-Dilshan', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/chamara-dilshan', label: 'LinkedIn' },
]

const About = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })

  return (
    <section id="about" className="section-padding bg-gradient-to-b from-white to-neutral-50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-accent-400/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-2 text-center mb-12 text-secondary-500">
            About <span className="text-gradient">Me</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Profile Image */}
            <div className="flex justify-center">
              <div className="relative group">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl bg-gradient-to-br from-accent-400 to-primary-500 p-1 shadow-2xl shadow-primary-500/20 group-hover:shadow-accent-500/30 transition-all duration-500">
                  <img
                    src="/profile.jpeg"
                    alt="Chamara Dilshan"
                    className="w-full h-full object-cover rounded-3xl"
                  />
                </div>
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-accent-400/30 to-primary-500/30 rounded-full blur-2xl -z-10 group-hover:scale-110 transition-transform duration-500" />
                <div className="absolute -top-6 -left-6 w-24 h-24 bg-gradient-to-br from-primary-500/20 to-accent-400/20 rounded-full blur-xl -z-10 group-hover:scale-110 transition-transform duration-500" />
              </div>
            </div>

            {/* Bio */}
            <div>
              <h3 className="heading-3 mb-4 text-secondary-500">
                Hi there! I'm Chamara Dilshan
              </h3>

              <p className="text-neutral-600 mb-4 leading-relaxed text-lg">
                I'm a recently graduated Software Engineer from the University of Moratuwa,
                specializing in full-stack web development using the MERN stack and Spring Boot
                with SQL-based databases.
              </p>

              <p className="text-neutral-600 mb-8 leading-relaxed text-lg">
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
                    className="p-4 bg-white rounded-xl shadow-md hover:shadow-xl text-secondary-500 hover:text-accent-500 hover:scale-110 hover:-translate-y-1 transition-all duration-300 border border-neutral-200"
                    aria-label={link.label}
                  >
                    <link.icon size={22} />
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
