import { useState } from 'react'
import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'
import { useForm } from 'react-hook-form'
import { FaEnvelope, FaMapMarkerAlt, FaPaperPlane } from 'react-icons/fa'

const Contact = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: '-100px' })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm()

  const onSubmit = async (data) => {
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      const formData = new FormData()
      formData.append('access_key', '7215dd3d-2333-44d3-a7c5-c69b9e3b92cc')
      formData.append('name', data.name)
      formData.append('email', data.email)
      formData.append('message', data.message)
      formData.append('subject', `Portfolio Contact from ${data.name}`)

      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData,
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus('success')
        reset()
      } else {
        setSubmitStatus('error')
      }
    } catch {
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <section id="contact" className="section-padding">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <h2 className="heading-2 text-center mb-4 text-secondary-500">
            Get In <span className="text-gradient">Touch</span>
          </h2>

          <p className="text-neutral-600 text-center mb-12 max-w-2xl mx-auto text-lg">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="heading-3 mb-6 text-secondary-500">Let's talk</h3>

              <div className="space-y-5 mb-8">
                <div className="flex items-center gap-4 group">
                  <div className="p-4 bg-gradient-to-br from-accent-400 to-accent-500 rounded-xl text-white shadow-lg group-hover:shadow-accent-500/30 group-hover:scale-110 transition-all duration-300">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 font-semibold mb-1">Email</p>
                    <a
                      href="mailto:chamaradilshan.dev@gmail.com"
                      className="text-secondary-500 hover:text-accent-500 transition-colors font-medium"
                    >
                      chamaradilshan.dev@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4 group">
                  <div className="p-4 bg-gradient-to-br from-primary-500 to-primary-600 rounded-xl text-white shadow-lg group-hover:shadow-primary-500/30 group-hover:scale-110 transition-all duration-300">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-neutral-500 font-semibold mb-1">Location</p>
                    <p className="text-secondary-500 font-medium">Sri Lanka</p>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-gradient-to-br from-accent-50 to-primary-50 rounded-2xl border border-accent-200/50">
                <p className="text-neutral-700 leading-relaxed">
                  I'm currently available for freelance work and full-time
                  opportunities. If you have a project that needs some creative
                  touch, I'd love to hear about it!
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="card p-6">
              <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                <div>
                  <label htmlFor="name" className="label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className={`input ${errors.name ? 'border-red-500' : ''}`}
                    placeholder="Your name"
                    {...register('name', { required: 'Name is required' })}
                  />
                  {errors.name && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="email" className="label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className={`input ${errors.email ? 'border-red-500' : ''}`}
                    placeholder="your@email.com"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="message" className="label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className={`input resize-none ${
                      errors.message ? 'border-red-500' : ''
                    }`}
                    placeholder="Your message..."
                    {...register('message', {
                      required: 'Message is required',
                      minLength: {
                        value: 10,
                        message: 'Message must be at least 10 characters',
                      },
                    })}
                  />
                  {errors.message && (
                    <p className="text-red-500 text-sm mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-accent w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <svg className="animate-spin h-5 w-5" fill="none" viewBox="0 0 24 24">
                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                      </svg>
                      Sending...
                    </span>
                  ) : (
                    <>
                      Send Message <FaPaperPlane className="ml-2" />
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="p-4 bg-green-50 border border-green-200 rounded-xl text-green-700 text-center font-medium">
                    ✓ Message sent successfully!
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="p-4 bg-red-50 border border-red-200 rounded-xl text-red-700 text-center font-medium">
                    ✗ Something went wrong. Please try again.
                  </div>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Contact
