import { useState } from 'react'

const PHONE_DISPLAY = '098193 00553'
const PHONE = '9819300553'
const EMAIL = 'smiledentalborivali@gmail.com'

const businessHours = [
  { day: 'Monday', hours: '10:00 AM – 9:00 PM' },
  { day: 'Tuesday', hours: '10:00 AM – 9:00 PM' },
  { day: 'Wednesday', hours: '10:00 AM – 9:00 PM' },
  { day: 'Thursday', hours: '10:00 AM – 9:00 PM' },
  { day: 'Friday', hours: '10:00 AM – 9:00 PM' },
  { day: 'Saturday', hours: '10:00 AM – 9:00 PM' },
  { day: 'Sunday', hours: '10:00 AM – 2:00 PM' },
]

const services = [
  'Dental Implants',
  'Cosmetic Dentistry',
  'Teeth Whitening',
  'Orthodontics / Braces',
  'General Checkup',
  'Root Canal Treatment',
  'Paediatric Dentistry',
  'Other',
]

function getCurrentDay() {
  return new Date().toLocaleDateString('en-US', { weekday: 'long' })
}

export default function Contact() {
  const today = getCurrentDay()

  const [form, setForm] = useState({
    name: '',
    phone: '',
    email: '',
    service: '',
    message: '',
    preferredTime: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [errors, setErrors] = useState({})

  function validate() {
    const errs = {}
    if (!form.name.trim()) errs.name = 'Name is required'
    if (!form.phone.trim()) {
      errs.phone = 'Phone number is required'
    } else if (!/^[0-9+\s()-]{7,15}$/.test(form.phone.trim())) {
      errs.phone = 'Please enter a valid phone number'
    }
    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = 'Please enter a valid email address'
    }
    return errs
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
    if (errors[name]) setErrors((e) => ({ ...e, [name]: undefined }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) {
      setErrors(errs)
      return
    }
    setSubmitted(true)
  }

  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 pt-28 pb-16" aria-labelledby="contact-hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-blue-100 text-[#007bff] text-sm font-medium px-3 py-1 rounded-full mb-4">
            Contact &amp; Appointments
          </div>
          <h1 id="contact-hero-heading" className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Book Your Appointment
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            Ready to visit Smile Gallery Dental Clinic? Fill out the form below or call us directly — we're open until 9 PM!
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 lg:py-24 bg-white" aria-labelledby="contact-form-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-5 gap-12 lg:gap-16">

          {/* Left: Contact Info */}
          <aside className="lg:col-span-2 space-y-8">
            <div>
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>

              <div className="space-y-5">
                {/* Address */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#007bff] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">Address</div>
                    <address className="not-italic text-gray-600 text-sm leading-relaxed">
                      Ground Floor, Clinic No 1,<br />
                      Arvind Apartment, L.T. Road,<br />
                      Borivali West, Mumbai 400092<br />
                      <span className="text-xs text-gray-500">(Opposite PNG/Om Jewellers)</span>
                    </address>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#007bff] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">Phone</div>
                    <a
                      href={`tel:+91${PHONE}`}
                      className="text-[#007bff] hover:underline text-sm font-medium"
                    >
                      {PHONE_DISPLAY}
                    </a>
                  </div>
                </div>

                {/* Email */}
                <div className="flex gap-4">
                  <div className="w-10 h-10 rounded-xl bg-blue-50 text-[#007bff] flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
                    </svg>
                  </div>
                  <div>
                    <div className="font-semibold text-gray-900 text-sm mb-1">Email</div>
                    <a
                      href={`mailto:${EMAIL}`}
                      className="text-[#007bff] hover:underline text-sm font-medium"
                    >
                      {EMAIL}
                    </a>
                  </div>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Business Hours</h3>
              <div className="bg-gray-50 rounded-2xl p-4 border border-gray-100">
                <table className="w-full" aria-label="Business hours">
                  <tbody>
                    {businessHours.map(({ day, hours }) => {
                      const isToday = day === today
                      return (
                        <tr
                          key={day}
                          className={`${isToday ? 'bg-blue-50' : ''}`}
                          aria-current={isToday ? 'true' : undefined}
                        >
                          <td className={`py-2 pr-3 text-sm font-medium ${isToday ? 'text-[#007bff]' : 'text-gray-700'}`}>
                            {day}
                            {isToday && <span className="ml-2 text-xs bg-[#007bff] text-white px-1.5 py-0.5 rounded-full">Today</span>}
                          </td>
                          <td className={`py-2 text-sm text-right ${isToday ? 'text-[#007bff] font-semibold' : 'text-gray-600'}`}>
                            {hours}
                          </td>
                        </tr>
                      )
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Badges */}
            <div className="flex flex-wrap gap-2">
              <span className="inline-flex items-center gap-1.5 bg-pink-50 text-pink-600 border border-pink-200 text-xs font-medium px-3 py-1.5 rounded-full">
                <span aria-hidden="true">🏳️‍🌈</span> LGBTQ+ Friendly
              </span>
              <span className="inline-flex items-center gap-1.5 bg-purple-50 text-purple-600 border border-purple-200 text-xs font-medium px-3 py-1.5 rounded-full">
                <span aria-hidden="true">👩‍⚕️</span> Women-Owned
              </span>
              <span className="inline-flex items-center gap-1.5 bg-yellow-50 text-yellow-700 border border-yellow-200 text-xs font-medium px-3 py-1.5 rounded-full">
                <span aria-hidden="true">⭐</span> 4.9 Stars
              </span>
            </div>
          </aside>

          {/* Right: Appointment Form */}
          <div className="lg:col-span-3">
            <h2 id="contact-form-heading" className="text-2xl font-bold text-gray-900 mb-6">
              Request an Appointment
            </h2>

            {submitted ? (
              <div
                role="alert"
                className="bg-green-50 border border-green-200 rounded-2xl p-8 text-center"
              >
                <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-2">Request Received!</h3>
                <p className="text-gray-600 mb-4">
                  Thank you, <strong>{form.name}</strong>! We've received your appointment request and will call you at <strong>{form.phone}</strong> to confirm shortly.
                </p>
                <p className="text-gray-500 text-sm">
                  For urgent queries, call us directly at{' '}
                  <a href={`tel:+91${PHONE}`} className="text-[#007bff] font-medium hover:underline">
                    {PHONE_DISPLAY}
                  </a>
                </p>
                <button
                  onClick={() => { setSubmitted(false); setForm({ name: '', phone: '', email: '', service: '', message: '', preferredTime: '' }) }}
                  className="mt-4 text-[#007bff] text-sm hover:underline"
                >
                  Submit another request
                </button>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                aria-label="Appointment request form"
                className="space-y-5"
              >
                {/* Name */}
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Full Name <span aria-hidden="true" className="text-red-500">*</span>
                    <span className="sr-only">(required)</span>
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                    placeholder="e.g. Priya Sharma"
                    required
                    autoComplete="name"
                    aria-required="true"
                    aria-describedby={errors.name ? 'name-error' : undefined}
                    className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#007bff] transition-colors ${
                      errors.name ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'
                    }`}
                  />
                  {errors.name && (
                    <p id="name-error" role="alert" className="mt-1 text-xs text-red-500">{errors.name}</p>
                  )}
                </div>

                {/* Phone + Email row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Phone Number <span aria-hidden="true" className="text-red-500">*</span>
                      <span className="sr-only">(required)</span>
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="e.g. 98765 43210"
                      required
                      autoComplete="tel"
                      aria-required="true"
                      aria-describedby={errors.phone ? 'phone-error' : undefined}
                      className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#007bff] transition-colors ${
                        errors.phone ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'
                      }`}
                    />
                    {errors.phone && (
                      <p id="phone-error" role="alert" className="mt-1 text-xs text-red-500">{errors.phone}</p>
                    )}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Email Address <span className="text-gray-400 text-xs font-normal">(optional)</span>
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@example.com"
                      autoComplete="email"
                      aria-describedby={errors.email ? 'email-error' : undefined}
                      className={`w-full px-4 py-3 border rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#007bff] transition-colors ${
                        errors.email ? 'border-red-400 bg-red-50' : 'border-gray-300 bg-white'
                      }`}
                    />
                    {errors.email && (
                      <p id="email-error" role="alert" className="mt-1 text-xs text-red-500">{errors.email}</p>
                    )}
                  </div>
                </div>

                {/* Service + Preferred Time row */}
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Service Interested In
                    </label>
                    <select
                      id="service"
                      name="service"
                      value={form.service}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#007bff] transition-colors bg-white text-gray-700"
                    >
                      <option value="">Select a service</option>
                      {services.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </div>
                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-1.5">
                      Preferred Appointment Time
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      value={form.preferredTime}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#007bff] transition-colors bg-white text-gray-700"
                    >
                      <option value="">Any time</option>
                      <option value="morning">Morning (10 AM – 1 PM)</option>
                      <option value="afternoon">Afternoon (1 PM – 5 PM)</option>
                      <option value="evening">Evening (5 PM – 9 PM)</option>
                    </select>
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1.5">
                    Additional Message <span className="text-gray-400 text-xs font-normal">(optional)</span>
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Describe your concern or question..."
                    className="w-full px-4 py-3 border border-gray-300 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-[#007bff] transition-colors resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-[#007bff] hover:bg-[#0056b3] text-white font-semibold py-4 rounded-xl text-base transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-[#007bff] focus:ring-offset-2"
                >
                  Request Appointment
                </button>

                <p className="text-xs text-gray-500 text-center">
                  We'll contact you within 1 business hour to confirm your slot. For immediate appointments, call{' '}
                  <a href={`tel:+91${PHONE}`} className="text-[#007bff] hover:underline">{PHONE_DISPLAY}</a>.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-12 bg-gray-50" aria-labelledby="map-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 id="map-heading" className="text-2xl font-bold text-gray-900 mb-2">Find Us</h2>
            <p className="text-gray-600 text-sm">
              Ground Floor, Clinic No 1, Arvind Apartment, L.T. Road, Borivali West, Mumbai 400092
            </p>
            <p className="text-gray-500 text-xs mt-1">(Opposite PNG/Om Jewellers · Next to Swiss Paradise Showroom)</p>
          </div>

          {/* Google Maps Embed Placeholder */}
          <div className="rounded-3xl overflow-hidden shadow-xl border border-gray-200 bg-gray-100" style={{ height: '400px' }}>
            <iframe
              title="Smile Gallery Dental Clinic Location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3767.1504934064247!2d72.85426287520745!3d19.226673881996547!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b1c001e04af3%3A0xb19c19b5a7c70b42!2sSmile%20Gallery%20Dental%20Clinic%20%26%20Implant%20center%20-%20Dr%20Hetal%20Chheda!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              aria-label="Google Maps showing location of Smile Gallery Dental Clinic in Borivali West, Mumbai"
            />
          </div>

          <div className="mt-6 text-center">
            <a
              href="https://maps.app.goo.gl/ZnnJDoA2TisH9xJu8"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-[#007bff] hover:bg-[#0056b3] text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              Get Directions on Google Maps
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
