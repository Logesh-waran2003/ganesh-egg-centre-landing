import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const services = [
  {
    title: 'Wholesale Supply',
    desc: 'Bulk orders for hotels, bakeries, restaurants, and grocery shops. Competitive pricing with daily delivery guaranteed.',
    highlight: 'Daily Bulk Delivery',
    icon: '📦',
  },
  {
    title: 'Retail Shop',
    desc: 'Walk in and pick up fresh eggs any day. Small quantities, fair prices, always in stock.',
    highlight: 'Open Every Day',
    icon: '🏪',
  },
]

export default function Services() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Cards slide up with stagger
      gsap.from('.service-card', {
        y: 80,
        opacity: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ref.current,
          start: 'top 75%',
        },
      })

      // Hover tilt effect
      document.querySelectorAll('.service-card').forEach((card) => {
        card.addEventListener('mousemove', (e) => {
          const rect = card.getBoundingClientRect()
          const x = (e.clientX - rect.left) / rect.width - 0.5
          const y = (e.clientY - rect.top) / rect.height - 0.5
          gsap.to(card, {
            rotateY: x * 8,
            rotateX: -y * 8,
            duration: 0.3,
            ease: 'power2.out',
          })
        })
        card.addEventListener('mouseleave', () => {
          gsap.to(card, { rotateY: 0, rotateX: 0, duration: 0.5, ease: 'power3.out' })
        })
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-28 md:py-40 bg-gradient-to-b from-amber-950 to-[#1a0d00] grain relative">
      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <div className="text-center mb-20">
          <span className="text-saffron-400/70 text-xs font-semibold uppercase tracking-[0.4em]">What We Do</span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl lg:text-7xl font-700 text-white mt-4">
            Wholesale & Retail
          </h2>
          <p className="mt-5 text-white/40 text-lg max-w-md mx-auto">
            Two ways to get the freshest eggs in town.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8" style={{ perspective: '1000px' }}>
          {services.map((s) => (
            <div
              key={s.title}
              className="service-card group relative bg-white/[0.03] backdrop-blur-sm border border-white/[0.08] rounded-3xl p-10 md:p-12 hover:bg-white/[0.07] transition-colors duration-500 hover:border-saffron-500/20"
              style={{ transformStyle: 'preserve-3d' }}
            >
              <span className="text-5xl mb-6 block">{s.icon}</span>
              <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-700 text-white">
                {s.title}
              </h3>
              <p className="mt-4 text-white/50 leading-relaxed">
                {s.desc}
              </p>
              <div className="mt-8 inline-flex items-center gap-2 text-saffron-400 text-sm font-semibold">
                <span className="w-8 h-px bg-saffron-400" />
                {s.highlight}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
