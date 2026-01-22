import { useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { FaGithub, FaExternalLinkAlt, FaTimes, FaCode } from 'react-icons/fa'
import { HiCheckCircle } from 'react-icons/hi'

const ProjectModal = ({ project, isOpen, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleEscape = (e) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEscape)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = 'unset'
    }
  }, [isOpen, onClose])

  if (!project) return null

  const { title, description, image, tech, liveUrl, githubUrl, features } = project

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.9, y: 20 }}
              transition={{ type: 'spring', duration: 0.5 }}
              className="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl overflow-hidden max-h-[85vh] flex flex-col"
            >
              {/* Header with gradient */}
              <div className="relative bg-gradient-to-br from-primary-500 to-primary-700 p-6 text-white">
                {/* Close Button */}
                <button
                  onClick={onClose}
                  className="absolute top-4 right-4 p-2 text-white/80 hover:text-white hover:bg-white/20 rounded-full transition-colors"
                  aria-label="Close modal"
                >
                  <FaTimes size={18} />
                </button>

                {/* Project Icon */}
                <div className="w-14 h-14 bg-white/20 rounded-xl flex items-center justify-center mb-4">
                  <FaCode size={24} />
                </div>

                <h2 className="text-2xl font-bold mb-2">{title}</h2>
                <p className="text-white/90 text-sm leading-relaxed">{description}</p>
              </div>

              {/* Content */}
              <div className="flex-1 overflow-y-auto p-6">
                {/* Project Image */}
                {image && (
                  <div className="mb-6 rounded-xl overflow-hidden border border-dark-100">
                    <img
                      src={image}
                      alt={title}
                      className="w-full h-auto"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                    />
                  </div>
                )}

                {/* Features */}
                {features && features.length > 0 && (
                  <div className="mb-6">
                    <h3 className="text-sm font-semibold text-dark-500 uppercase tracking-wider mb-3">
                      Key Features
                    </h3>
                    <ul className="space-y-2">
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-3 text-dark-700">
                          <HiCheckCircle className="text-primary-500 mt-0.5 flex-shrink-0" size={18} />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {/* Tech Stack */}
                <div className="mb-6">
                  <h3 className="text-sm font-semibold text-dark-500 uppercase tracking-wider mb-3">
                    Tech Stack
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {tech.map((item) => (
                      <span
                        key={item}
                        className="px-3 py-1.5 bg-dark-50 text-dark-700 text-sm rounded-full font-medium"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Footer with buttons */}
              <div className="border-t border-dark-100 p-4 bg-dark-50 flex gap-3">
                {githubUrl && (
                  <a
                    href={githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-dark-800 text-white rounded-xl hover:bg-dark-900 transition-colors font-medium"
                  >
                    <FaGithub size={18} />
                    View Code
                  </a>
                )}
                {liveUrl && (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-3 bg-primary-600 text-white rounded-xl hover:bg-primary-700 transition-colors font-medium"
                  >
                    <FaExternalLinkAlt size={16} />
                    Live Demo
                  </a>
                )}
                {!githubUrl && !liveUrl && (
                  <button
                    onClick={onClose}
                    className="flex-1 px-4 py-3 bg-dark-100 text-dark-700 rounded-xl hover:bg-dark-200 transition-colors font-medium"
                  >
                    Close
                  </button>
                )}
              </div>
            </motion.div>
          </div>
        </>
      )}
    </AnimatePresence>
  )
}

export default ProjectModal
