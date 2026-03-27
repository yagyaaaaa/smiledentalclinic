import { Link } from 'react-router-dom'
import { useInView } from '../hooks/useInView'

const milestones = [
  { year: '2012', event: 'Graduated BDS from a premier Mumbai dental college' },
  { year: '2014', event: 'Completed advanced implantology training' },
  { year: '2016', event: 'Founded Smile Gallery Dental Clinic in Borivali West' },
  { year: '2019', event: 'Certified in Invisalign® clear aligner therapy' },
  { year: '2022', event: 'Achieved 1000+ successful dental implants' },
  { year: '2024', event: 'Rated 4.9★ on Google with 200+ reviews' },
]

const values = [
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"/>
      </svg>
    ),
    title: 'Compassionate Care',
    desc: 'Every patient is treated with empathy, respect, and personalised attention.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/>
      </svg>
    ),
    title: 'Clinical Excellence',
    desc: 'Staying current with the latest dental technologies and evidence-based techniques.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z"/>
      </svg>
    ),
    title: 'Inclusivity',
    desc: 'An open, non-judgmental space for patients of all backgrounds, identities, and ages.',
  },
  {
    icon: (
      <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"/>
      </svg>
    ),
    title: 'Transparency',
    desc: 'Honest pricing, clear treatment plans, and no hidden surprises — ever.',
  },
]

export default function About() {
  const { ref: profileRef,  inView: profileInView  } = useInView()
  const { ref: valuesRef,   inView: valuesInView   } = useInView()
  const { ref: timelineRef, inView: timelineInView } = useInView()
  const { ref: clinicRef,   inView: clinicInView   } = useInView()

  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 pt-28 pb-16" aria-labelledby="about-hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-blue-100 text-[#007bff] text-sm font-medium px-3 py-1 rounded-full mb-4 animate-fade-in-up">
            About Us
          </div>
          <h1 id="about-hero-heading" className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up anim-delay-150">
            Meet Dr. Hetal Chheda
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto animate-fade-in-up anim-delay-225">
            Dedicated dental surgeon, founder of Smile Gallery Dental Clinic, and champion of inclusive, high-quality oral healthcare in Mumbai.
          </p>
        </div>
      </section>

      {/* Doctor Profile */}
      <section className="py-16 lg:py-24 bg-white" aria-labelledby="profile-heading">
        <div ref={profileRef} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Photo */}
          <div className={`sticky top-24 ${profileInView ? 'animate-fade-in-left' : 'opacity-0'}`}>
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              {/* File: public/hetalchheda.jpg — served from the root by Vite */}
              <img
                src="/hetalchheda.jpg"
                alt="Dr. Hetal Chheda — Founder, Smile Gallery Dental Clinic &amp; Implant Center"
                className="w-full h-[480px] object-cover object-top"
                loading="lazy"
              />
            </div>
            {/* Badges */}
            <div className="mt-6 flex flex-wrap gap-3 justify-center">
              <span className="inline-flex items-center gap-1.5 bg-pink-50 text-pink-600 border border-pink-200 text-sm font-medium px-4 py-2 rounded-full">
                <span aria-hidden="true">🏳️‍🌈</span> LGBTQ+ Friendly
              </span>
              <span className="inline-flex items-center gap-1.5 bg-purple-50 text-purple-600 border border-purple-200 text-sm font-medium px-4 py-2 rounded-full">
                <span aria-hidden="true">👩‍⚕️</span> Women-Owned Business
              </span>
              <span className="inline-flex items-center gap-1.5 bg-yellow-50 text-yellow-700 border border-yellow-200 text-sm font-medium px-4 py-2 rounded-full">
                <span aria-hidden="true">⭐</span> 4.9 Stars · 202+ Reviews
              </span>
            </div>
          </div>

          {/* Bio Content */}
          <div className={profileInView ? 'animate-fade-in-right anim-delay-150' : 'opacity-0'}>
            <h2 id="profile-heading" className="text-3xl font-bold text-gray-900 mb-2">Dr. Hetal Chheda</h2>
            <p className="text-[#17a2b8] font-medium mb-6">BDS · Founder &amp; Principal Dentist</p>

            <div className="prose prose-gray max-w-none space-y-4 text-gray-600 leading-relaxed mb-8">
              <p>
                Dr. Hetal Chheda is one of Mumbai's most trusted dental professionals, known for her meticulous technique, warm chairside manner, and unwavering dedication to patient satisfaction. With over a decade of clinical experience, she has transformed thousands of smiles across Borivali and beyond.
              </p>
              <p>
                After completing her Bachelor of Dental Surgery with distinction, Dr. Chheda pursued advanced training in dental implantology and cosmetic procedures. In 2016, she founded Smile Gallery Dental Clinic &amp; Implant Center with a simple vision: to make world-class dental care accessible, comfortable, and inclusive for everyone.
              </p>
              <p>
                As a woman leading her own practice in healthcare, Dr. Chheda takes immense pride in creating a safe and welcoming space — particularly for patients who may feel anxious or have felt marginalised in clinical settings. The clinic proudly identifies as LGBTQ+ friendly and women-owned.
              </p>
            </div>

            {/* Qualifications */}
            <div className="bg-blue-50 rounded-2xl p-6 mb-8">
              <h3 className="font-bold text-gray-900 mb-4">Qualifications &amp; Specialisations</h3>
              <ul className="space-y-2" aria-label="Dr. Chheda's qualifications">
                {[
                  'BDS — Bachelor of Dental Surgery',
                  'Advanced Implantology (ITI Protocol)',
                  'Cosmetic Dentistry &amp; Smile Makeovers',
                  'Invisalign® Certified Provider',
                  'Paediatric Dentistry',
                  'Member, Indian Dental Association (IDA)',
                ].map((q) => (
                  <li key={q} className="flex items-start gap-2.5 text-sm text-gray-700">
                    <svg className="w-5 h-5 text-[#007bff] flex-shrink-0 mt-0.5" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                    </svg>
                    <span dangerouslySetInnerHTML={{ __html: q }} />
                  </li>
                ))}
              </ul>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center gap-2 bg-[#007bff] hover:bg-[#0056b3] text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200"
            >
              Book a Consultation
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* Clinic Philosophy */}
      <section className="py-16 lg:py-24 bg-gray-50" aria-labelledby="philosophy-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-teal-100 text-[#17a2b8] text-sm font-medium px-3 py-1 rounded-full mb-4">
              Our Philosophy
            </div>
            <h2 id="philosophy-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Values That Guide Us
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto text-lg">
              Every decision we make is grounded in these core principles.
            </p>
          </div>
          <div ref={valuesRef} className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ icon, title, desc }, i) => (
              <div
                key={title}
                className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 text-center ${valuesInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={valuesInView ? { animationDelay: `${i * 100}ms` } : undefined}
              >
                <div className="w-12 h-12 rounded-xl bg-blue-50 text-[#007bff] flex items-center justify-center mx-auto mb-4">
                  {icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones */}
      <section className="py-16 lg:py-24 bg-white" aria-labelledby="milestones-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-block bg-blue-100 text-[#007bff] text-sm font-medium px-3 py-1 rounded-full mb-4">
              Our Journey
            </div>
            <h2 id="milestones-heading" className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Milestones &amp; Achievements
            </h2>
          </div>
          <ol ref={timelineRef} className="relative border-l-2 border-[#007bff]/20 space-y-8">
            {milestones.map(({ year, event }, i) => (
              <li
                key={year}
                className={`ml-8 ${timelineInView ? 'animate-fade-in-left' : 'opacity-0'}`}
                style={timelineInView ? { animationDelay: `${i * 100}ms` } : undefined}
              >
                <div className="absolute -left-3 w-6 h-6 rounded-full bg-[#007bff] border-4 border-white shadow flex items-center justify-center" aria-hidden="true"></div>
                <time className="text-[#007bff] font-bold text-sm mb-1 block">{year}</time>
                <p className="text-gray-700 text-sm leading-relaxed">{event}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Clinic Images */}
      <section className="py-16 lg:py-20 bg-gray-50" aria-labelledby="clinic-images-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 id="clinic-images-heading" className="text-3xl font-bold text-gray-900 mb-3">Our Clinic</h2>
            <p className="text-gray-600">A modern, welcoming space designed around your comfort.</p>
          </div>
          <div ref={clinicRef} className="grid sm:grid-cols-3 gap-4 lg:gap-6">
            {[
              { src: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=700&q=80', alt: 'Smile Gallery dental clinic reception area' },
              { src: 'https://images.unsplash.com/photo-1629909615226-2aaecfb46a95?w=700&q=80', alt: 'Dental treatment room with modern equipment' },
              { src: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=700&q=80', alt: 'Clean and sterile dental operatory' },
            ].map(({ src, alt }, i) => (
              <div
                key={src}
                className={`rounded-2xl overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300 ${clinicInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={clinicInView ? { animationDelay: `${i * 150}ms` } : undefined}
              >
                <img src={src} alt={alt} className="w-full h-56 object-cover" loading="lazy" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
