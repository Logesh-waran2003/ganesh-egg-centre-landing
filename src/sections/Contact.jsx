import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Contact() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.contact-content', {
        y: 50,
        opacity: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 80%',
        },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="relative py-24 md:py-32 overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <img src="/images/sunrise.jpg" alt="" className="w-full h-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-t from-amber-950/95 via-amber-950/80 to-amber-950/60" />
      </div>

      <div className="contact-content relative z-10 max-w-3xl mx-auto px-6 text-center">
        <span className="text-saffron-400 text-sm font-semibold uppercase tracking-[0.3em]">Get in Touch</span>
        <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-700 text-white mt-3">
          Order Fresh Eggs Today
        </h2>
        <p className="mt-4 text-saffron-100/60 text-lg max-w-lg mx-auto">
          Wholesale enquiries, retail orders, or just want to know today's rate — we're one call away.
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="tel:+919876543210"
            className="inline-flex items-center gap-3 bg-saffron-500 hover:bg-saffron-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-300 hover:shadow-lg hover:shadow-saffron-500/30 hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5">
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Call Now
          </a>
          <a
            href="https://wa.me/919876543210?text=Hi%2C%20I%20want%20to%20order%20eggs"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white font-semibold px-8 py-4 rounded-full text-lg border border-white/20 transition-all duration-300 hover:-translate-y-0.5"
          >
            <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
              <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.607-.798-6.384-2.147l-.108-.086-3.348 1.122 1.122-3.348-.086-.108A9.953 9.953 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z"/>
            </svg>
            WhatsApp
          </a>
        </div>

        {/* Address */}
        <div className="mt-12 text-white/40 text-sm">
          <p className="font-medium text-white/60">Ganesh Egg Centre</p>
          <p className="mt-1">Wholesale & Retail Egg Distribution</p>
          <p className="mt-1">Serving the region since 2001</p>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 mt-20 pt-8 border-t border-white/10 text-center">
        <p className="text-white/30 text-sm">
          © {new Date().getFullYear()} Ganesh Egg Centre. All rights reserved.
        </p>
      </div>
    </section>
  )
}
