const PHONE = '9819300553'
const PHONE_DISPLAY = '098193 00553'

export default function FloatingCallButton() {
  return (
    <div className="fixed bottom-6 right-6 z-50">
      <span
        className="absolute inset-0 rounded-full bg-[#17a2b8] animate-ping opacity-30"
        aria-hidden="true"
      />
      <a
        href={`tel:+91${PHONE}`}
        className="relative flex items-center gap-2 bg-[#17a2b8] hover:bg-[#138496] text-white font-semibold rounded-full shadow-lg px-4 py-3 sm:px-5 transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-[#17a2b8] focus:ring-offset-2"
        aria-label={`Call us now at ${PHONE_DISPLAY}`}
      >
        <svg
          className="w-5 h-5 flex-shrink-0"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          aria-hidden="true"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        <span className="text-sm hidden sm:inline">Call Now</span>
        <span className="text-sm sm:hidden">Call</span>
      </a>
    </div>
  )
}
