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
          <h2 className="heading-2 text-center mb-4">
            Get In <span className="text-gradient">Touch</span>
          </h2>

          <p className="text-dark-500 text-center mb-12 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Feel free to reach out.
            I'm always open to discussing new opportunities.
          </p>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h3 className="heading-3 mb-6">Let's talk</h3>

              <div className="space-y-4 mb-8">
                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary-100 rounded-lg text-primary-600">
                    <FaEnvelope size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-dark-500">Email</p>
                    <a
                      href="mailto:chamaradilshan.dev@gmail.com"
                      className="text-dark-800 hover:text-primary-600 transition-colors"
                    >
                      chamaradilshan.dev@gmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="p-3 bg-primary-100 rounded-lg text-primary-600">
                    <FaMapMarkerAlt size={20} />
                  </div>
                  <div>
                    <p className="text-sm text-dark-500">Location</p>
                    <p className="text-dark-800">Sri Lanka</p>
                  </div>
                </div>
              </div>

              <p className="text-dark-600">
                I'm currently available for freelance work and full-time
                opportunities. If you have a project that needs some creative
                touch, I'd love to hear about it!
              </p>
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
                  className="btn-primary w-full disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    'Sending...'
                  ) : (
                    <>
                      Send Message <FaPaperPlane className="ml-2" />
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <p className="text-green-600 text-center">
                    Message sent successfully!
                  </p>
                )}

                {submitStatus === 'error' && (
                  <p className="text-red-600 text-center">
                    Something went wrong. Please try again.
                  </p>
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
