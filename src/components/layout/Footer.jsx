import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa'

const socialLinks = [
  { icon: FaGithub, href: 'https://github.com/Chamara-Dilshan', label: 'GitHub' },
  { icon: FaLinkedin, href: 'https://linkedin.com/in/chamara-dilshan', label: 'LinkedIn' },
  { icon: FaEnvelope, href: 'mailto:chamaradilshan.dev@gmail.com', label: 'Email' },
]

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-dark-50 border-t border-dark-100">
      <div className="container-custom py-8 md:py-12">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-center md:text-left">
            <p className="text-dark-600">
              &copy; {currentYear} Chamara Dilshan. All rights reserved.
            </p>
          </div>

          <div className="flex items-center space-x-4">
            {socialLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 text-dark-500 hover:text-primary-600 transition-colors"
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
