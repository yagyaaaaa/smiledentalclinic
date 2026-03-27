import { useState } from 'react'
import { useInView } from '../hooks/useInView'

const galleryItems = [
  // Before & After
  {
    category: 'Before & After',
    img: 'https://images.unsplash.com/photo-1606811971618-4486d14f3f99?w=700&q=80',
    alt: 'Before and after dental implant transformation',
    label: 'Dental Implants',
  },
  {
    category: 'Before & After',
    img: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=700&q=80',
    alt: 'Before and after smile makeover',
    label: 'Smile Makeover',
  },
  {
    category: 'Before & After',
    img: 'https://images.unsplash.com/photo-1624727828489-a1e03b79bba8?w=700&q=80',
    alt: 'Before and after teeth whitening result',
    label: 'Teeth Whitening',
  },
  {
    category: 'Before & After',
    img: 'https://images.unsplash.com/photo-1598256989620-4f1d4a4bfa15?w=700&q=80',
    alt: 'Before and after orthodontic treatment',
    label: 'Orthodontics',
  },
  // Clinic
  {
    category: 'Clinic',
    img: 'https://images.unsplash.com/photo-1629909615184-74f495363b67?w=700&q=80',
    alt: 'Smile Gallery Dental Clinic reception area',
    label: 'Reception',
  },
  {
    category: 'Clinic',
    img: 'https://images.unsplash.com/photo-1629909615226-2aaecfb46a95?w=700&q=80',
    alt: 'Dental treatment room at Smile Gallery',
    label: 'Treatment Room',
  },
  {
    category: 'Clinic',
    img: 'https://images.unsplash.com/photo-1584515933487-779824d29309?w=700&q=80',
    alt: 'Sterilisation and hygiene area',
    label: 'Sterilisation Unit',
  },
  {
    category: 'Clinic',
    img: 'https://images.unsplash.com/photo-1588776814546-daab30f310ce?w=700&q=80',
    alt: 'Modern dental chair and equipment',
    label: 'Modern Equipment',
  },
  // Team
  {
    category: 'Team',
    img: 'https://github.com/user-attachments/assets/6e5df7ac-e9bb-4c68-b578-8ce5191bba59',
    alt: 'Dr. Hetal Chheda, founder and principal dentist',
    label: 'Dr. Hetal Chheda',
  },
  {
    category: 'Team',
    img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=700&q=80',
    alt: 'Dental team at Smile Gallery Clinic',
    label: 'Dental Team',
  },
  {
    category: 'Team',
    img: 'https://images.unsplash.com/photo-1579684453423-f84349ef60b0?w=700&q=80',
    alt: 'Dentist consulting with patient',
    label: 'Patient Consultation',
  },
  {
    category: 'Team',
    img: 'https://images.unsplash.com/photo-1666214280250-e6a5d0ed2718?w=700&q=80',
    alt: 'Dental treatment in progress',
    label: 'Treatment in Progress',
  },
]

const categories = ['All', 'Before & After', 'Clinic', 'Team']

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [lightboxImg, setLightboxImg] = useState(null)
  const { ref: gridRef, inView: gridInView } = useInView()

  const filtered = activeCategory === 'All'
    ? galleryItems
    : galleryItems.filter((item) => item.category === activeCategory)

  return (
    <>
      {/* Page Hero */}
      <section className="bg-gradient-to-br from-blue-50 to-teal-50 pt-28 pb-16" aria-labelledby="gallery-hero-heading">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-block bg-blue-100 text-[#007bff] text-sm font-medium px-3 py-1 rounded-full mb-4 animate-fade-in-up">
            Gallery
          </div>
          <h1 id="gallery-hero-heading" className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6 animate-fade-in-up anim-delay-150">
            See the Results
          </h1>
          <p className="text-gray-600 text-lg max-w-3xl mx-auto animate-fade-in-up anim-delay-225">
            Explore our clinic, before &amp; after transformations, and meet the team behind your smile.
          </p>
          <p className="text-gray-500 text-sm mt-4 italic animate-fade-in-up anim-delay-300">
            * Placeholder images shown. Real clinic photos will be added shortly.
          </p>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="sticky top-16 lg:top-20 z-30 bg-white border-b border-gray-100 shadow-sm" aria-label="Filter gallery by category">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto py-3" role="tablist" aria-label="Gallery categories">
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

      {/* Grid */}
      <section className="py-12 lg:py-16 bg-white" aria-live="polite" aria-label="Gallery images">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div ref={gridRef} className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
            {filtered.map(({ img, alt, label, category }, i) => (
              <button
                key={img}
                className={`group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#007bff] focus:ring-offset-2 ${gridInView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={gridInView ? { animationDelay: `${i * 60}ms` } : undefined}
                onClick={() => setLightboxImg({ img, alt, label, category })}
                aria-label={`View larger: ${label}`}
              >
                <img
                  src={img}
                  alt={alt}
                  className="w-full h-48 sm:h-56 object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3">
                  <span className="text-white text-sm font-medium">{label}</span>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <p className="text-center text-gray-500 py-16">No images in this category yet.</p>
          )}
        </div>
      </section>

      {/* Lightbox */}
      {lightboxImg && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`Image: ${lightboxImg.label}`}
          className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
          onClick={() => setLightboxImg(null)}
        >
          <div
            className="relative max-w-3xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setLightboxImg(null)}
              className="absolute -top-10 right-0 text-white hover:text-gray-300 transition-colors focus:outline-none"
              aria-label="Close image viewer"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12"/>
              </svg>
            </button>
            <img
              src={lightboxImg.img}
              alt={lightboxImg.alt}
              className="w-full max-h-[80vh] object-contain rounded-2xl"
            />
            <div className="mt-3 text-center">
              <span className="text-white font-medium text-sm">{lightboxImg.label}</span>
              <span className="text-gray-400 text-xs ml-2">· {lightboxImg.category}</span>
            </div>
          </div>
        </div>
      )}

      {/* Upload Placeholder Notice */}
      <section className="py-10 bg-blue-50" aria-labelledby="gallery-upload-heading">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 id="gallery-upload-heading" className="text-xl font-bold text-gray-800 mb-2">
            Real Photos Coming Soon
          </h2>
          <p className="text-gray-600 text-sm">
            These are placeholder images. Actual clinic photos and before &amp; after cases will be uploaded from our Google Business profile. 
            Want to see the real results? <strong>Visit us in Borivali West</strong> or check our{' '}
            <a
              href="https://maps.app.goo.gl/ZnnJDoA2TisH9xJu8"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#007bff] underline hover:text-[#0056b3]"
            >
              Google Business profile
            </a>.
          </p>
        </div>
      </section>
    </>
  )
}
