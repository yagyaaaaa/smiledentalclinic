import { useEffect, useRef, useState } from 'react'

/**
 * Returns a ref and a boolean indicating whether the element is in the viewport.
 * Once the element enters the viewport the state is set to true and the observer
 * is disconnected so the animation only fires once.
 *
 * Options are captured at mount time — pass a stable reference (e.g. a module-level
 * constant or a value memoised with useMemo) to avoid surprises.
 */
export function useInView(options = {}) {
  const ref = useRef(null)
  const [inView, setInView] = useState(false)
  // Capture options at mount so the effect has a stable dependency.
  const optionsRef = useRef(options)

  useEffect(() => {
    const el = ref.current
    if (!el) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setInView(true)
          observer.unobserve(el)
        }
      },
      { threshold: 0.1, ...optionsRef.current },
    )

    observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return { ref, inView }
}
