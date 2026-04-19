import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const stats = [
  { value: '25+', label: 'Years of Trust' },
  { value: '7', label: 'Days a Week' },
  { value: '100+', label: 'Happy Customers' },
  { value: '1', label: 'Promise: Freshness' },
]

const reasons = [
  { icon: '🌅', title: 'Same-Day Freshness', desc: 'Eggs leave the farm at dawn and reach you by morning.' },
  { icon: '🚛', title: 'Rain or Shine Delivery', desc: 'Reliable daily supply — your business never waits.' },
  { icon: '💰', title: 'Fair Pricing', desc: 'Competitive wholesale rates. Honest retail prices.' },
  { icon: '🤝', title: 'Decades of Trust', desc: 'Hotels, bakeries, and shops have relied on us for 25+ years.' },
]

export default function Trust() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Stats — counter-style pop
      gsap.from('.stat-item', {
        scale: 0.8,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: 'back.out(1.5)',
        scrollTrigger: { trigger: '.stats-grid', start: 'top 85%' },
      })

      // Reason cards — stagger from left with slight rotation
      gsap.from('.reason-card', {
        x: -60,
        opacity: 0,
        rotateZ: -2,
        duration: 0.7,
        stagger: 0.12,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.reasons-grid', start: 'top 80%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-28 md:py-40 bg-cream relative overflow-hidden">
      {/* Decorative blurs */}
      <div className="absolute top-20 right-0 w-[500px] h-[500px] bg-saffron-200/20 rounded-full blur-[120px]" />
      <div className="absolute bottom-20 left-0 w-[400px] h-[400px] bg-saffron-300/15 rounded-full blur-[100px]" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-saffron-600 text-xs font-semibold uppercase tracking-[0.4em]">Why Us</span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl lg:text-7xl font-700 text-earth mt-4">
            Built on Trust
          </h2>
        </div>

        {/* Stats */}
        <div className="stats-grid grid grid-cols-2 md:grid-cols-4 gap-5 mb-24">
          {stats.map((s) => (
            <div key={s.label} className="stat-item text-center p-8 rounded-2xl bg-white/80 backdrop-blur-sm shadow-xl shadow-saffron-500/5 border border-saffron-100/80">
              <div className="font-[family-name:var(--font-display)] text-5xl md:text-6xl font-900 text-saffron-600 leading-none">
                {s.value}
              </div>
              <div className="mt-3 text-earth-light text-sm font-medium tracking-wide">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Reasons */}
        <div className="reasons-grid grid md:grid-cols-2 gap-5 max-w-3xl mx-auto">
          {reasons.map((r) => (
            <div
              key={r.title}
              className="reason-card flex items-start gap-5 bg-white/70 backdrop-blur-sm rounded-2xl px-7 py-6 shadow-lg shadow-saffron-500/5 border border-saffron-100/50 hover:border-saffron-300 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
            >
              <span className="text-3xl mt-1 shrink-0">{r.icon}</span>
              <div>
                <h4 className="text-earth font-semibold text-base">{r.title}</h4>
                <p className="text-earth-light text-sm mt-1 leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
