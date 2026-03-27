import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'

const navLinks = [
  { path: '/', label: 'Home' },
  { path: '/about', label: 'About Us' },
  { path: '/services', label: 'Services' },
  { path: '/gallery', label: 'Gallery' },
  { path: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white shadow-md' : 'bg-white/95 backdrop-blur-sm'
      }`}
      role="banner"
    >
      <nav
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 group"
            aria-label="Smile Gallery Dental Clinic - Home"
          >
            <div className="w-10 h-10 rounded-full bg-[#007bff] flex items-center justify-center flex-shrink-0">
              <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6" aria-hidden="true">
                <path d="M12 2C8.5 2 6 4.5 6 7c0 1.5.5 3 1 4.5C7.5 13.5 8 16 8 18c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2 0-2 .5-4.5 1-6.5.5-1.5 1-3 1-4.5C18 4.5 15.5 2 12 2z"/>
              </svg>
            </div>
            <div className="leading-tight">
              <div className="font-bold text-[#007bff] text-sm sm:text-base">Smile Gallery</div>
              <div className="text-xs text-gray-500 hidden sm:block">Dental Clinic &amp; Implant Center</div>
            </div>
          </Link>

          {/* Desktop nav links */}
          <ul className="hidden lg:flex items-center gap-1" role="list">
            {navLinks.map(({ path, label }) => (
              <li key={path}>
                <Link
                  to={path}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                    location.pathname === path
                      ? 'bg-[#007bff] text-white'
                      : 'text-gray-700 hover:bg-blue-50 hover:text-[#007bff]'
                  }`}
                  aria-current={location.pathname === path ? 'page' : undefined}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>

          {/* CTA + Hamburger */}
          <div className="flex items-center gap-3">
            <Link
              to="/contact"
              className="hidden sm:inline-flex items-center gap-1 bg-[#007bff] hover:bg-[#0056b3] text-white text-sm font-semibold px-4 py-2 rounded-full transition-colors duration-200"
            >
              Book Appointment
            </Link>
            <button
              className="lg:hidden p-2 rounded-md text-gray-600 hover:text-[#007bff] hover:bg-blue-50 transition-colors"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-expanded={menuOpen}
              aria-controls="mobile-menu"
              aria-label="Toggle navigation menu"
            >
              {menuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div
            id="mobile-menu"
            className="lg:hidden border-t border-gray-100 py-3 pb-4"
          >
            <ul className="flex flex-col gap-1" role="list">
              {navLinks.map(({ path, label }) => (
                <li key={path}>
                  <Link
                    to={path}
                    onClick={() => setMenuOpen(false)}
                    className={`block px-4 py-2.5 rounded-lg text-sm font-medium transition-colors duration-200 ${
                      location.pathname === path
                        ? 'bg-[#007bff] text-white'
                        : 'text-gray-700 hover:bg-blue-50 hover:text-[#007bff]'
                    }`}
                    aria-current={location.pathname === path ? 'page' : undefined}
                  >
                    {label}
                  </Link>
                </li>
              ))}
              <li className="pt-2">
                <Link
                  to="/contact"
                  onClick={() => setMenuOpen(false)}
                  className="block text-center bg-[#007bff] hover:bg-[#0056b3] text-white text-sm font-semibold px-4 py-2.5 rounded-full transition-colors duration-200"
                >
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>
        )}
      </nav>
    </header>
  )
}
