import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const services = [
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <rect x="4" y="8" width="40" height="32" rx="4" stroke="currentColor" strokeWidth="2.5" />
        <path d="M4 18h40" stroke="currentColor" strokeWidth="2.5" />
        <circle cx="16" cy="30" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="32" cy="30" r="4" stroke="currentColor" strokeWidth="2" />
        <circle cx="24" cy="26" r="4" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: 'Wholesale Supply',
    desc: 'Bulk orders for hotels, bakeries, restaurants, and kirana shops. Competitive pricing with daily delivery guaranteed.',
    highlight: '700+ trays/day',
  },
  {
    icon: (
      <svg viewBox="0 0 48 48" fill="none" className="w-12 h-12">
        <path d="M8 40V16l16-8 16 8v24" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
        <rect x="18" y="26" width="12" height="14" stroke="currentColor" strokeWidth="2.5" />
        <path d="M24 26v14" stroke="currentColor" strokeWidth="2" />
      </svg>
    ),
    title: 'Retail Shop',
    desc: 'Walk in and pick up fresh eggs any day. Small quantities, fair prices, always in stock.',
    highlight: 'Open 7 days',
  },
]

export default function Services() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.utils.toArray('.service-card').forEach((card, i) => {
        gsap.from(card, {
          y: 60,
          opacity: 0,
          duration: 0.8,
          delay: i * 0.2,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: card,
            start: 'top 85%',
          },
        })
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-24 md:py-32 bg-gradient-to-b from-amber-950 to-[#2a1400]">
      <div className="max-w-5xl mx-auto px-6">
        <div className="fade-section text-center mb-16">
          <span className="text-saffron-400 text-sm font-semibold uppercase tracking-[0.3em]">What We Do</span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-700 text-white mt-3">
            Wholesale & Retail
          </h2>
          <p className="mt-4 text-saffron-100/60 text-lg max-w-lg mx-auto">
            Two ways to get the freshest eggs in town.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((s) => (
            <div
              key={s.title}
              className="service-card group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-3xl p-8 md:p-10 hover:bg-white/10 transition-all duration-500 hover:border-saffron-500/30"
            >
              <div className="text-saffron-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                {s.icon}
              </div>
              <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-700 text-white">
                {s.title}
              </h3>
              <p className="mt-3 text-white/60 leading-relaxed text-base">
                {s.desc}
              </p>
              <div className="mt-6 inline-block bg-saffron-500/20 text-saffron-300 text-sm font-semibold px-4 py-2 rounded-full">
                {s.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
