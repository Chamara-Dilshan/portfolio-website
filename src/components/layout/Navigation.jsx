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
    ? 'block py-2 text-dark-700 hover:text-primary-600 transition-colors'
    : 'text-dark-600 hover:text-primary-600 transition-colors font-medium'

  return (
    <ul className={mobile ? 'space-y-1' : 'flex items-center space-x-8'}>
      {navItems.map((item) => (
        <li key={item.label}>
          {item.href.startsWith('/#') ? (
            <a
              href={item.href}
              onClick={(e) => handleClick(e, item.href)}
              className={baseClasses}
            >
              {item.label}
            </a>
          ) : (
            <Link
              to={item.href}
              onClick={onItemClick}
              className={`${baseClasses} ${
                location.pathname === item.href ? 'text-primary-600' : ''
              }`}
            >
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  )
}

export default Navigation
