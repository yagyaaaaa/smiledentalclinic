import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'
import { DENTIST_IMAGE_URL } from '../constants'

const PHONE_DISPLAY = '098193 00553'
const PHONE = '09819300553'

const stats = [
  { value: '4.9★', label: '202+ Google Reviews' },
  { value: '10+', label: 'Years Experience' },
  { value: '5000+', label: 'Happy Patients' },
  { value: '15+', label: 'Dental Services' },
]

const whyChooseUs = [
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    title: 'Expert Care',
    desc: 'Dr. Hetal Chheda brings years of advanced training in implantology, cosmetic dentistry, and orthodontics.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-2 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"/>
      </svg>
    ),
    title: 'Modern Facility',
    desc: 'State-of-the-art equipment in a clean, comfortable environment designed to put you at ease.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
      </svg>
    ),
    title: 'Patient-Centred',
    desc: 'We listen, educate, and tailor every treatment plan to your unique needs and comfort level.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
      </svg>
    ),
    title: 'Safe & Inclusive',
    desc: 'LGBTQ+ friendly and women-owned — a welcoming space for everyone, no exceptions.',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/>
      </svg>
    ),
    title: 'Convenient Hours',
    desc: 'Open until 9 PM on weekdays and Saturdays so you can visit after work — no excuses!',
  },
  {
    icon: (
      <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    title: 'Prime Location',
    desc: 'Located opposite PNG/Om Jewellers on L.T. Road, Borivali West — easy to find and reach.',
  },
]

const services = [
  {
    title: 'Dental Implants',
    desc: 'Permanent tooth replacement solutions that look, feel, and function like natural teeth.',
    img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=600&q=80',
    alt: 'Dental implant procedure',
  },
  {
    title: 'Cosmetic Dentistry',
    desc: 'Transform your smile with veneers, bonding, whitening, and smile makeovers.',
    img: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=600&q=80',
    alt: 'Cosmetic dentistry results',
  },
  {
    title: 'Orthodontics',
    desc: 'Metal braces, clear aligners, and retainers for all ages. Straight teeth, confident you.',
    img: 'https://images.unsplash.com/photo-1598256989620-4f1d4a4bfa15?w=600&q=80',
    alt: 'Orthodontic treatment',
  },
  {
    title: 'General Checkups',
    desc: 'Comprehensive exams, cleaning, X-rays, and preventive care to keep your smile healthy.',
    img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&q=80',
    alt: 'Dental checkup examination',
  },
]

export default function Home() {
  const { ref: statsRef,    inView: statsInView    } = useInView()
  const { ref: servicesRef, inView: servicesInView } = useInView()
  const { ref: whyRef,      inView: whyInView      } = useInView()
  const { ref: doctorRef,   inView: doctorInView   } = useInView()
  const { ref: ctaRef,      inView: ctaInView      } = useInView()

  return (
    <>
      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-teal-50 pt-16 lg:pt-20"
        aria-labelledby="hero-heading"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24 grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left content */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-[#007bff] text-sm font-medium px-3 py-1.5 rounded-full mb-6 animate-fade-in-up">
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
                <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
              </svg>
              4.9 Stars · 202+ Google Reviews
            </div>

            <h1 id="hero-heading" className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight mb-6 animate-fade-in-up anim-delay-150">
              Your Perfect{' '}
              <span className="text-[#007bff]">Smile</span>{' '}
              Starts Here
            </h1>

            <p className="text-lg text-gray-600 leading-relaxed mb-8 max-w-xl animate-fade-in-up anim-delay-225">
              Expert dental care by <strong className="text-gray-800">Dr. Hetal Chheda</strong> at Smile Gallery Dental Clinic &amp; Implant Center, Borivali West. From implants to cosmetic dentistry — we deliver smiles you'll love.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-10 animate-fade-in-up anim-delay-300">
              <Link
                to="/contact"
                className="inline-flex items-center justify-center gap-2 bg-[#007bff] hover:bg-[#0056b3] text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"/>
                </svg>
                Book Appointment
              </Link>
              <a
                href={`tel:+919819300553`}
                className="inline-flex items-center justify-center gap-2 border-2 border-[#17a2b8] text-[#17a2b8] hover:bg-[#17a2b8] hover:text-white font-semibold px-8 py-4 rounded-full text-base transition-all duration-200"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
                </svg>
                {PHONE_DISPLAY}
              </a>
            </div>

            <div className="flex flex-wrap gap-3 text-sm text-gray-500 animate-fade-in-up anim-delay-375">
              <span className="flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-green-500" aria-hidden="true"></span>
                Open until 9 PM
              </span>
              <span className="flex items-center gap-1.5">
                <span aria-hidden="true">🏳️‍🌈</span> LGBTQ+ Friendly
              </span>
              <span className="flex items-center gap-1.5">
                <span aria-hidden="true">👩‍⚕️</span> Women-Owned
              </span>
            </div>
          </div>

          {/* Right image */}
          <div className="relative animate-fade-in-right anim-delay-150">
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=800&q=80"
                alt="Modern dental clinic interior at Smile Gallery Dental Clinic"
                className="w-full h-[420px] lg:h-[520px] object-cover"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#007bff]/20 to-transparent"></div>
            </div>
            {/* Floating badge */}
            <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl p-4 border border-blue-100 animate-float">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#007bff] flex items-center justify-center">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/>
                  </svg>
                </div>
                <div>
                  <div className="font-bold text-gray-900 text-sm">ISO Certified</div>
                  <div className="text-xs text-gray-500">Safe &amp; Sterile</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-[#007bff] py-10 lg:py-14" aria-label="Clinic statistics">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <dl ref={statsRef} className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {stats.map(({ value, label }, i) => (
              <div
                key={label}
                className={`text-center ${statsInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={statsInView ? { animationDelay: `${i * 100}ms` } : undefined}
              >
                <dt className="text-3xl lg:text-4xl font-bold text-white mb-1">{value}</dt>
                <dd className="text-blue-100 text-sm">{label}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-16 lg:py-24 bg-white" aria-labelledby="services-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-teal-100 text-[#17a2b8] text-sm font-medium px-3 py-1 rounded-full mb-4">
              What We Offer
            </div>
            <h2 id="services-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Comprehensive Dental Services
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              From routine checkups to full smile transformations — all under one roof in Borivali West.
            </p>
          </div>

          <div ref={servicesRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {services.map(({ title, desc, img, alt }, i) => (
              <article
                key={title}
                className={`group bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${servicesInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={servicesInView ? { animationDelay: `${i * 100}ms` } : undefined}
              >
                <div className="overflow-hidden h-48">
                  <img
                    src={img}
                    alt={alt}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    loading="lazy"
                  />
                </div>
                <div className="p-5">
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                  <Link
                    to="/services"
                    className="text-[#007bff] text-sm font-medium hover:underline inline-flex items-center gap-1"
                    aria-label={`Learn more about ${title}`}
                  >
                    Learn More
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </article>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              to="/services"
              className="inline-flex items-center gap-2 border-2 border-[#007bff] text-[#007bff] hover:bg-[#007bff] hover:text-white font-semibold px-8 py-3 rounded-full transition-all duration-200"
            >
              View All Services
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16 lg:py-24 bg-gray-50" aria-labelledby="why-us-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-[#007bff] text-sm font-medium px-3 py-1 rounded-full mb-4">
              Why Smile Gallery?
            </div>
            <h2 id="why-us-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              The Smile Gallery Difference
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              We're committed to delivering the highest standard of care in a welcoming, inclusive environment.
            </p>
          </div>

          <div ref={whyRef} className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {whyChooseUs.map(({ icon, title, desc }, i) => (
              <div
                key={title}
                className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300 ${whyInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={whyInView ? { animationDelay: `${i * 100}ms` } : undefined}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#007bff] flex items-center justify-center mb-4">
                  {icon}
                </div>
                <h3 className="font-bold text-gray-900 text-lg mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Doctor Overview */}
      <section className="py-16 lg:py-24 bg-white" aria-labelledby="doctor-heading">
        <div ref={doctorRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className={`order-2 lg:order-1 ${doctorInView ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="inline-block bg-teal-100 text-[#17a2b8] text-sm font-medium px-3 py-1 rounded-full mb-4">
              Meet Your Dentist
            </div>
            <h2 id="doctor-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
              Dr. Hetal Chheda
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              Dr. Hetal Chheda is a highly experienced dental surgeon specialising in implantology, cosmetic procedures, and comprehensive family dentistry. Her patient-first philosophy ensures that every visit is comfortable, informative, and effective.
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              As the founder of Smile Gallery Dental Clinic, Dr. Chheda has built a reputation for exceptional results and genuine care — earning a 4.9-star rating from over 202 patients on Google.
            </p>
            <ul className="space-y-2 mb-8" aria-label="Qualifications and specialisations">
              {[
                'BDS — Bachelor of Dental Surgery',
                'Advanced Implantology Training',
                'Cosmetic Dentistry Specialist',
                'Member, Indian Dental Association',
              ].map((item) => (
                <li key={item} className="flex items-start gap-2 text-sm text-gray-700">
                  <svg className="w-5 h-5 text-[#17a2b8] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                  </svg>
                  {item}
                </li>
              ))}
            </ul>
            <Link
              to="/about"
              className="inline-flex items-center gap-2 bg-[#007bff] hover:bg-[#0056b3] text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200"
            >
              Read Full Profile
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
          <div className={`order-1 lg:order-2 ${doctorInView ? 'animate-fade-in-right anim-delay-150' : 'opacity-0'}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src={DENTIST_IMAGE_URL}
                alt="Dr. Hetal Chheda, dental surgeon at Smile Gallery Dental Clinic"
                className="w-full h-[420px] lg:h-[500px] object-cover"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-14 lg:py-20 animate-gradient-bg" aria-labelledby="cta-heading">
        <div
          ref={ctaRef}
          className={`max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center ${ctaInView ? 'animate-fade-in-up' : 'opacity-0'}`}
        >
          <h2 id="cta-heading" className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Smile?
          </h2>
          <p className="text-blue-100 text-lg mb-8">
            Book your free consultation today and take the first step toward the smile you deserve.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 bg-white text-[#007bff] hover:bg-blue-50 font-semibold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-lg"
            >
              Book Appointment
            </Link>
            <a
              href={`tel:+919819300553`}
              className="inline-flex items-center justify-center gap-2 border-2 border-white text-white hover:bg-white/10 font-semibold px-8 py-4 rounded-full text-base transition-all duration-200"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/>
              </svg>
              {PHONE_DISPLAY}
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
