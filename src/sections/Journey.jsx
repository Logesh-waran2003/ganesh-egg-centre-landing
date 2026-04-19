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
      // Heading — staggered word reveal
      gsap.from(headingRef.current, {
        opacity: 0,
        y: 60,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: { trigger: headingRef.current, start: 'top 85%' },
      })

      // Progress line
      gsap.to(lineRef.current, {
        height: '100%',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top 50%',
          end: 'bottom 70%',
          scrub: 0.5,
        },
      })

      // Steps — horizontal image reveal + text slide
      gsap.utils.toArray('.journey-step').forEach((step, i) => {
        const img = step.querySelector('.journey-img')
        const imgInner = step.querySelector('.journey-img-inner')
        const text = step.querySelector('.journey-text')
        const dot = step.querySelector('.journey-dot')
        const num = step.querySelector('.journey-num')

        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: step,
            start: 'top 80%',
            toggleActions: 'play none none none',
          },
        })

        // Dot pops
        tl.from(dot, { scale: 0, duration: 0.5, ease: 'back.out(3)' })

        // Image clip reveal (wipe from left/right)
        tl.from(img, {
          clipPath: i % 2 === 0 ? 'inset(0 100% 0 0)' : 'inset(0 0 0 100%)',
          duration: 1,
          ease: 'power4.inOut',
        }, '-=0.3')

        // Image subtle zoom
        tl.from(imgInner, {
          scale: 1.3,
          duration: 1.2,
          ease: 'power3.out',
        }, '-=1')

        // Number counter
        tl.from(num, {
          y: 20,
          opacity: 0,
          duration: 0.4,
          ease: 'power3.out',
        }, '-=0.8')

        // Text slides in
        tl.from(text.children, {
          y: 40,
          opacity: 0,
          duration: 0.6,
          stagger: 0.1,
          ease: 'power3.out',
        }, '-=0.6')
      })
    }, sectionRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={sectionRef} className="relative py-28 md:py-40 bg-cream">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={headingRef} className="text-center mb-24">
          <span className="text-saffron-600 text-xs font-semibold uppercase tracking-[0.4em]">Our Process</span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl lg:text-7xl font-700 text-earth mt-4 leading-tight">
            Farm to Doorstep
          </h2>
          <p className="mt-5 text-earth-light text-lg max-w-md mx-auto leading-relaxed">
            The journey every egg takes — from the farm at dawn to your hands by morning.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-saffron-200/60 -translate-x-1/2">
            <div ref={lineRef} className="w-full bg-gradient-to-b from-saffron-500 to-saffron-300 h-0" />
          </div>

          <div className="space-y-24 md:space-y-32">
            {steps.map((step, i) => (
              <div
                key={step.num}
                className={`journey-step relative flex flex-col md:flex-row items-center gap-10 md:gap-20 ${
                  i % 2 === 1 ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Dot */}
                <div className="journey-dot absolute left-8 md:left-1/2 -translate-x-1/2 z-10">
                  <div className="w-5 h-5 rounded-full bg-saffron-500 border-[5px] border-cream shadow-lg shadow-saffron-500/40" />
                </div>

                {/* Image with clip reveal */}
                <div className="journey-img w-full md:w-5/12 ml-16 md:ml-0 overflow-hidden rounded-2xl" style={{ clipPath: 'inset(0 0 0 0)' }}>
                  <div className="journey-img-inner aspect-[4/3] overflow-hidden">
                    <img
                      src={step.img}
                      alt={step.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Text */}
                <div className={`journey-text w-full md:w-5/12 ml-16 md:ml-0 ${i % 2 === 1 ? 'md:text-right' : ''}`}>
                  <span className="journey-num font-[family-name:var(--font-display)] text-6xl font-900 text-saffron-200/50">
                    {step.num}
                  </span>
                  <h3 className="font-[family-name:var(--font-display)] text-2xl md:text-3xl font-700 text-earth -mt-3">
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
