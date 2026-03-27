import { Link } from 'react-router-dom'

const PHONE = '9819300553'
const PHONE_DISPLAY = '098193 00553'

export default function Footer() {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-gray-300" role="contentinfo">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

          {/* Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4" aria-label="Smile Gallery Dental Clinic">
              <div className="w-10 h-10 rounded-full bg-[#007bff] flex items-center justify-center flex-shrink-0">
                <svg viewBox="0 0 24 24" fill="white" className="w-6 h-6" aria-hidden="true">
                  <path d="M12 2C8.5 2 6 4.5 6 7c0 1.5.5 3 1 4.5C7.5 13.5 8 16 8 18c0 1.1.9 2 2 2h4c1.1 0 2-.9 2-2 0-2 .5-4.5 1-6.5.5-1.5 1-3 1-4.5C18 4.5 15.5 2 12 2z"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-white text-base">Smile Gallery</div>
                <div className="text-xs text-gray-400">Dental Clinic &amp; Implant Center</div>
              </div>
            </Link>
            <p className="text-sm text-gray-400 leading-relaxed mb-3">
              Expert dental care by Dr. Hetal Chheda — a women-owned, LGBTQ+ friendly practice dedicated to your smile.
            </p>
            <div className="flex gap-2 mt-2">
              <span className="inline-flex items-center gap-1 bg-pink-900/40 text-pink-300 text-xs font-medium px-2.5 py-1 rounded-full">
                <span aria-hidden="true">🏳️‍🌈</span> LGBTQ+ Friendly
              </span>
            </div>
            <div className="mt-2">
              <span className="inline-flex items-center gap-1 bg-purple-900/40 text-purple-300 text-xs font-medium px-2.5 py-1 rounded-full">
                <span aria-hidden="true">👩‍⚕️</span> Women-Owned
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <nav aria-label="Footer navigation">
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h3>
            <ul className="space-y-2" role="list">
              {[
                { to: '/', label: 'Home' },
                { to: '/about', label: 'About Dr. Chheda' },
                { to: '/services', label: 'Our Services' },
                { to: '/gallery', label: 'Gallery' },
                { to: '/contact', label: 'Book Appointment' },
              ].map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    className="text-sm text-gray-400 hover:text-[#17a2b8] transition-colors duration-200"
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Services */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Services</h3>
            <ul className="space-y-2" role="list">
              {[
                'Dental Implants',
                'Cosmetic Dentistry',
                'General Checkups',
                'Orthodontics',
                'Teeth Whitening',
                'Root Canal Treatment',
              ].map((s) => (
                <li key={s}>
                  <Link
                    to="/services"
                    className="text-sm text-gray-400 hover:text-[#17a2b8] transition-colors duration-200"
                  >
                    {s}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold mb-4 text-sm uppercase tracking-wider">Contact Us</h3>
            <address className="not-italic space-y-3">
              <div className="flex gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4 text-[#17a2b8] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                </svg>
                <span>Ground Floor, Clinic No 1, Arvind Apartment, L.T. Road, Borivali West, Mumbai 400092</span>
              </div>
              <div className="flex gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4 text-[#17a2b8] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                <a href={`tel:+91${PHONE}`} className="hover:text-[#17a2b8] transition-colors">
                  {PHONE_DISPLAY}
                </a>
              </div>
              <div className="flex gap-2 text-sm text-gray-400">
                <svg className="w-4 h-4 text-[#17a2b8] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
                </svg>
                <div>
                  <div>Mon – Sat: 10:00 AM – 9:00 PM</div>
                  <div>Sun: 10:00 AM – 2:00 PM</div>
                </div>
              </div>
            </address>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 text-xs text-gray-500">
          <p>&copy; {year} Smile Gallery Dental Clinic &amp; Implant Center. All rights reserved.</p>
          <p>Dr. Hetal Chheda — Borivali West, Mumbai</p>
        </div>
      </div>
    </footer>
  )
}
