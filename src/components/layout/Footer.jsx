import { FaGithub, FaLinkedin, FaFacebook, FaEnvelope } from 'react-icons/fa'

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/Chamara-Dilshan', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/chamara-dilshan', label: 'LinkedIn' },
  { icon: FaFacebook, href: 'https://www.facebook.com/share/1C1gKPEYxx/?mibextid=wwXIfr', label: 'Facebook' },
  { icon: FaEnvelope, href: 'mailto:chamaradilshan.dev@gmail.com', label: 'Email' },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gradient-to-b from-white to-neutral-100 border-t border-neutral-200">
      <div className="container-custom py-10 md:py-14">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-center md:text-left">
            <p className="text-neutral-600 font-medium">
              &copy; {currentYear} Chamara Dilshan. All rights reserved.
            </p>
            <p className="text-sm text-neutral-500 mt-1">
              Built with React, Tailwind CSS, and Framer Motion
            </p>
          </div>

          <div className="flex items-center space-x-3">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-xl bg-white border border-neutral-200 text-secondary-500 hover:text-accent-500 hover:border-accent-400 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
                aria-label={link.label}
              >
                <link.icon size={20} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
