import { Link, useLocation } from 'react-router-dom'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/#about' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Blog', href: '/blog' },
  { label: 'Contact', href: '/#contact' },
]

const Navigation = ({ mobile = false, onItemClick }) => {
  const location = useLocation()

  const handleClick = (e, href) => {
    if (href.startsWith('/#')) {
      e.preventDefault()
      const targetId = href.replace('/#', '')

      if (location.pathname !== '/') {
        window.location.href = href
        return
      }

      const element = document.getElementById(targetId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    }
    onItemClick?.()
  }

  const baseClasses = mobile
    ? 'block py-3 px-4 rounded-lg text-secondary-500 hover:text-accent-500 hover:bg-accent-50 transition-all font-medium'
    : 'text-neutral-600 hover:text-accent-500 transition-all font-semibold relative group'

  return (
    <ul className={mobile ? 'space-y-2' : 'flex items-center space-x-8'}>
      {navItems.map((item) => (
        <li key={item.label}>
          {item.href.startsWith('/#') ? (
            <a
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={baseClasses}
            >
              {item.label}
              {!mobile && (
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-accent-400 to-primary-500 group-hover:w-full transition-all duration-300" />
              )}
            </a>
          ) : (
            <Link
              to={item.href}
              onClick={onItemClick}
              className={`${baseClasses} ${
                location.pathname === item.href ? 'text-accent-500' : ''
              }`}
            >
              {item.label}
              {!mobile && (
                <span className={`absolute bottom-0 left-0 h-0.5 bg-gradient-to-r from-accent-400 to-primary-500 transition-all duration-300 ${
                  location.pathname === item.href ? 'w-full' : 'w-0 group-hover:w-full'
                }`} />
              )}
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}

export default Navigation
