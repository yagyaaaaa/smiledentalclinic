import { useState } from 'react'
import { Link } from 'react-router-dom'

const services = [
  {
    id: 'implants',
    category: 'Restorative',
    title: 'Dental Implants',
    tagline: 'Permanent tooth replacement',
    desc: 'Dental implants are titanium posts surgically placed into your jawbone to act as artificial tooth roots. They provide a strong, permanent foundation for fixed or removable replacement teeth designed to match your natural teeth. Dr. Chheda has performed over 1,000 successful implant procedures.',
    features: [
      'Single tooth, multiple tooth &amp; full arch solutions',
      'All-on-4 and All-on-6 implant systems',
      'Same-day implants (where eligible)',
      'Bone grafting procedures',
      'Implant-supported dentures',
    ],
    img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=700&q=80',
    alt: 'Dental implant titanium post',
    color: 'blue',
  },
  {
    id: 'cosmetic',
    category: 'Cosmetic',
    title: 'Cosmetic Dentistry',
    tagline: 'Your dream smile, crafted',
    desc: 'Our cosmetic dentistry services are designed to enhance the appearance of your teeth and smile. From simple whitening to complete smile makeovers, Dr. Chheda uses the latest aesthetic techniques to create beautiful, natural-looking results.',
    features: [
      'Porcelain veneers &amp; composite bonding',
      'Professional teeth whitening (in-office &amp; take-home)',
      'Smile makeovers &amp; smile design',
      'Tooth-coloured fillings',
      'Gum contouring',
    ],
    img: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=700&q=80',
    alt: 'Beautiful cosmetic dentistry smile result',
    color: 'teal',
  },
  {
    id: 'general',
    category: 'Preventive',
    title: 'General Checkups',
    tagline: 'Prevention is the best treatment',
    desc: 'Regular dental checkups and cleanings are the foundation of good oral health. Our comprehensive exams detect issues early, saving you time, money, and discomfort. We recommend a visit every 6 months for most patients.',
    features: [
      'Full dental examination &amp; X-rays',
      'Professional scaling &amp; cleaning',
      'Oral cancer screening',
      'Root canal treatment (RCT)',
      'Tooth extractions',
    ],
    img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=700&q=80',
    alt: 'Dentist performing a general dental checkup',
    color: 'blue',
  },
  {
    id: 'orthodontics',
    category: 'Orthodontics',
    title: 'Orthodontics',
    tagline: 'Straighter teeth, greater confidence',
    desc: 'We offer a range of orthodontic solutions for children, teenagers, and adults. Whether you prefer traditional metal braces or nearly invisible clear aligners, we\'ll create a personalised treatment plan to achieve your ideal smile.',
    features: [
      'Metal &amp; ceramic braces',
      'Invisalign® clear aligners',
      'Retainers &amp; space maintainers',
      'Interceptive orthodontics for children',
      'Adult orthodontics',
    ],
    img: 'https://images.unsplash.com/photo-1598256989620-4f1d4a4bfa15?w=700&q=80',
    alt: 'Orthodontic braces and teeth alignment',
    color: 'teal',
  },
  {
    id: 'whitening',
    category: 'Cosmetic',
    title: 'Teeth Whitening',
    tagline: 'Brighten your smile safely',
    desc: 'Our professional teeth whitening treatments deliver dramatically brighter smiles in just one visit. Unlike over-the-counter products, our clinical-grade whitening gels are safe, effective, and customised to your sensitivity levels.',
    features: [
      'In-office laser whitening (1 hour)',
      'Custom take-home whitening trays',
      'Sensitivity-friendly formulas',
      'Results last up to 2 years',
      'Safe for existing restorations',
    ],
    img: 'https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?w=700&q=80',
    alt: 'Teeth whitening treatment result',
    color: 'blue',
  },
  {
    id: 'paediatric',
    category: 'Preventive',
    title: 'Paediatric Dentistry',
    tagline: 'Gentle care for little smiles',
    desc: 'We create a fun, comfortable dental experience for children, helping them develop positive associations with dental visits from an early age. Dr. Chheda is experienced in treating anxious young patients with patience and warmth.',
    features: [
      'Child-friendly examinations',
      'Fluoride treatments &amp; sealants',
      'Habit-breaking appliances',
      'Space maintainers',
      'Dental anxiety management',
    ],
    img: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=700&q=80',
    alt: 'Child-friendly paediatric dental care',
    color: 'teal',
  },
]

const categories = ['All', 'Restorative', 'Cosmetic', 'Preventive', 'Orthodontics']

const colorMap = {
  blue: {
    badge: 'bg-blue-100 text-[#007bff]',
    bullet: 'text-[#007bff]',
    button: 'bg-[#007bff] hover:bg-[#0056b3]',
  },
  teal: {
    badge: 'bg-teal-100 text-[#17a2b8]',
    bullet: 'text-[#17a2b8]',
    button: 'bg-[#17a2b8] hover:bg-[#138496]',
  },
}

export default function Services() {
  const [activeCategory, setActiveCategory] = useState('All')

  const filtered = activeCategory === 'All'
    ? services
    : services.filter((s) => s.category === activeCategory)

  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 pt-28 pb-16" aria-labelledby="services-hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-blue-100 text-[#007bff] text-sm font-medium px-3 py-1 rounded-full mb-4">
            Our Services
          </div>
          <h1 id="services-hero-heading" className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Comprehensive Dental Care
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto">
            From routine cleanings to full smile transformations — Dr. Hetal Chheda and her team offer a complete range of dental services at Smile Gallery.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-16 lg:top-20 z-30 bg-white border-b border-gray-100 shadow-sm" aria-label="Filter services by category">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-1 overflow-x-auto py-3 scrollbar-hide" role="tablist" aria-label="Service categories">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                role="tab"
                aria-selected={activeCategory === cat}
                className={`flex-shrink-0 px-4 py-2 rounded-full text-sm font-medium transition-colors duration-200 ${
                  activeCategory === cat
                    ? 'bg-[#007bff] text-white'
                    : 'bg-gray-100 text-gray-600 hover:bg-blue-50 hover:text-[#007bff]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 lg:py-20 bg-white" aria-live="polite" aria-label="Services list">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
          {filtered.map(({ id, category, title, tagline, desc, features, img, alt, color }, index) => {
            const c = colorMap[color]
            const isEven = index % 2 === 0
            return (
              <article
                key={id}
                id={id}
                className={`grid lg:grid-cols-2 gap-10 lg:gap-16 items-center ${isEven ? '' : 'lg:grid-flow-dense'}`}
              >
                {/* Image */}
                <div className={`${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <div className="rounded-3xl overflow-hidden shadow-xl">
                    <img
                      src={img}
                      alt={alt}
                      className="w-full h-72 lg:h-96 object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>

                {/* Content */}
                <div className={`${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <span className={`inline-block text-xs font-semibold uppercase tracking-wider px-3 py-1 rounded-full mb-3 ${c.badge}`}>
                    {category}
                  </span>
                  <h2 className="text-3xl font-bold text-gray-900 mb-1">{title}</h2>
                  <p className={`font-medium mb-4 ${c.bullet}`}>{tagline}</p>
                  <p className="text-gray-600 leading-relaxed mb-6">{desc}</p>

                  <ul className="space-y-2 mb-8" aria-label={`${title} service features`}>
                    {features.map((f) => (
                      <li key={f} className="flex items-start gap-2.5 text-sm text-gray-700">
                        <svg className={`w-5 h-5 flex-shrink-0 mt-0.5 ${c.bullet}`} fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7"/>
                        </svg>
                        <span dangerouslySetInnerHTML={{ __html: f }} />
                      </li>
                    ))}
                  </ul>

                  <Link
                    to="/contact"
                    className={`inline-flex items-center gap-2 text-white font-semibold px-6 py-3 rounded-full transition-colors duration-200 ${c.button}`}
                  >
                    Book a Consultation
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7"/>
                    </svg>
                  </Link>
                </div>
              </article>
            )
          })}
        </div>
      </section>

      {/* CTA */}
      <section className="py-14 bg-gradient-to-r from-[#007bff] to-[#17a2b8]" aria-labelledby="services-cta-heading">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="services-cta-heading" className="text-3xl font-bold text-white mb-4">
            Not Sure Which Treatment You Need?
          </h2>
          <p className="text-blue-100 mb-8">
            Book a free consultation and Dr. Chheda will assess your needs and recommend the best option for you.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 bg-white text-[#007bff] hover:bg-blue-50 font-semibold px-8 py-4 rounded-full transition-all duration-200 shadow-lg"
          >
            Book Free Consultation
          </Link>
        </div>
      </section>
    </>
  )
}
