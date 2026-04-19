import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const stats = [
  { value: '25+', label: 'Years in Business' },
  { value: '700+', label: 'Trays Delivered Daily' },
  { value: '20K+', label: 'Eggs Every Day' },
  { value: '100+', label: 'Happy Customers' },
]

const reasons = [
  { emoji: '🌅', text: 'Same-day farm-to-shop freshness' },
  { emoji: '🚛', text: 'Reliable daily delivery, rain or shine' },
  { emoji: '💰', text: 'Fair wholesale & retail pricing' },
  { emoji: '🤝', text: 'Trusted by hotels, bakeries & shops for decades' },
]

export default function Trust() {
  const ref = useRef(null)
  const statsRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Counter animation for stats
      gsap.utils.toArray('.stat-item').forEach((item) => {
        gsap.from(item, {
          y: 40,
          opacity: 0,
          duration: 0.6,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: item,
            start: 'top 90%',
          },
        })
      })

      // Stagger reasons
      gsap.from('.reason-item', {
        x: -40,
        opacity: 0,
        duration: 0.6,
        stagger: 0.15,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: '.reasons-list',
          start: 'top 80%',
        },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-24 md:py-32 bg-cream relative overflow-hidden">
      {/* Decorative bg */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-saffron-200/30 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-saffron-300/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="fade-section text-center mb-16">
          <span className="text-saffron-600 text-sm font-semibold uppercase tracking-[0.3em]">Why Us</span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-700 text-earth mt-3">
            Built on Trust
          </h2>
        </div>

        {/* Stats */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          {stats.map((s) => (
            <div key={s.label} className="stat-item text-center p-6 rounded-2xl bg-white shadow-lg shadow-saffron-500/5 border border-saffron-100">
              <div className="font-[family-name:var(--font-display)] text-4xl md:text-5xl font-900 text-saffron-600">
                {s.value}
              </div>
              <div className="mt-2 text-earth-light text-sm font-medium">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Reasons */}
        <div className="max-w-2xl mx-auto">
          <div className="reasons-list space-y-5">
            {reasons.map((r) => (
              <div
                key={r.text}
                className="reason-item flex items-center gap-5 bg-white rounded-xl px-6 py-5 shadow-md shadow-saffron-500/5 border border-saffron-100/50 hover:border-saffron-300 transition-colors"
              >
                <span className="text-3xl">{r.emoji}</span>
                <span className="text-earth text-lg font-medium">{r.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
