import { motion } from 'framer-motion'
import { HiArrowDown } from 'react-icons/hi'

const Hero = () => {
  const scrollToAbout = () => {
    document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex items-center justify-center relative pt-16">
      <div className="container-custom text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-primary-600 font-medium mb-4">Hello, I'm</p>

          <h1 className="heading-1 mb-6">
            <span className="text-dark-900">Chamara</span>{' '}
            <span className="text-gradient">Dilshan</span>
          </h1>

          <h3 className="heading-3 mb-6">
            <span className="text-dark-900">Software Engineer & Freelance Full-Stack Web Developer</span>
          </h3>

          <p className="text-dark-600 mb-6 leading-relaxed">
            I design and develop modern, scalable web applications focused on performance, usability, and reliability. I also provide IT project guidance and academic support for undergraduate students.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#projects" className="btn-primary">
              View My Work
            </a>
            <a href="#contact" className="btn-outline">
              Get In Touch
            </a>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={scrollToAbout}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 text-dark-400 hover:text-primary-600 transition-colors"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, y: [0, 8, 0] }}
          transition={{
            opacity: { delay: 1 },
            y: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' },
          }}
          aria-label="Scroll down"
        >
          <HiArrowDown size={24} />
        </motion.button>
      </div>

      {/* Background Gradient */}
      <div className="absolute inset-0 -z-10 overflow-hidden">
        <div className="absolute top-1/4 -left-1/4 w-1/2 h-1/2 bg-primary-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-1/4 -right-1/4 w-1/2 h-1/2 bg-primary-50 rounded-full blur-3xl opacity-50" />
      </div>
    </section>
  )
}

export default Hero
