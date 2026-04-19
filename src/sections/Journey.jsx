import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

const steps = [
  {
    num: '01',
    title: 'Sourced from Farms',
    desc: 'Every morning, fresh eggs are collected directly from trusted poultry farms across the region.',
    img: '/images/poultry-farm.jpg',
  },
  {
    num: '02',
    title: 'Sorted & Packed',
    desc: 'Each egg is carefully inspected, sorted by grade, and packed into trays — ready for delivery.',
    img: '/images/egg-carton.jpg',
  },
  {
    num: '03',
    title: 'Delivered Daily',
    desc: 'Our fleet hits the road before sunrise. Hotels, bakeries, shops — everyone gets their supply on time.',
    img: '/images/delivery.jpg',
  },
  {
    num: '04',
    title: 'At Your Shop & Table',
    desc: 'From our retail counter or your neighbourhood kirana — Ganesh eggs reach you the same day they leave the farm.',
    img: '/images/shop-retail.jpg',
  },
]

export default function Journey() {
  const sectionRef = useRef(null)
  const headingRef = useRef(null)
  const lineRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Heading reveal
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 50,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: headingRef.current,
          start: 'top 85%',
        },
      })

      // Progress line grows as you scroll
      gsap.to(lineRef.current, {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 60%',
          end: 'bottom 80%',
          scrub: true,
        },
      })

      // Each step animates in
      gsap.utils.toArray('.journey-step').forEach((step, i) => {
        const img = step.querySelector('.journey-img')
        const text = step.querySelector('.journey-text')
        const dot = step.querySelector('.journey-dot')

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: step,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        })

        tl.from(dot, { scale: 0, duration: 0.4, ease: 'back.out(2)' })
          .from(img, {
            x: i % 2 === 0 ? -80 : 80,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
          }, '-=0.2')
          .from(text, {
            x: i % 2 === 0 ? 80 : -80,
            opacity: 0,
            duration: 0.8,
            ease: 'power3.out',
          }, '-=0.6')
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-24 md:py-32 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headingRef} className="text-center mb-20">
          <span className="text-saffron-600 text-sm font-semibold uppercase tracking-[0.3em]">Our Process</span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-5xl lg:text-6xl font-700 text-earth mt-3">
            Farm to Doorstep
          </h2>
          <p className="mt-4 text-earth-light text-lg max-w-xl mx-auto">
            The journey every egg takes — from the farm at dawn to your hands by morning.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-saffron-200 -translate-x-1/2">
            <div ref={lineRef} className="w-full bg-saffron-500 h-0" />
          </div>

          <div className="space-y-20 md:space-y-28">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`journey-step relative flex flex-col md:flex-row items-center gap-8 md:gap-16 ${
                  i % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Dot */}
                <div className="journey-dot absolute left-6 md:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-saffron-500 border-4 border-cream z-10 shadow-lg shadow-saffron-500/30" />

                {/* Image */}
                <div className="journey-img w-full md:w-5/12 ml-14 md:ml-0">
                  <div className="relative overflow-hidden rounded-2xl shadow-2xl shadow-black/10 aspect-[4/3]">
                    <img
                      src={step.img}
                      alt={step.title}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute top-4 left-4 bg-saffron-500 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      {step.num}
                    </div>
                  </div>
                </div>

                {/* Text */}
                <div className={`journey-text w-full md:w-5/12 ml-14 md:ml-0 ${i % 2 === 1 ? 'md:text-right' : ''}`}>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-700 text-earth">
                    {step.title}
                  </h3>
                  <p className="mt-3 text-earth-light leading-relaxed text-lg">
                    {step.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
