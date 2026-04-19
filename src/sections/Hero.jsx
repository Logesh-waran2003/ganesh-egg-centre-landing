import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function Hero() {
  const heroRef = useRef(null)
  const titleRef = useRef(null)
  const subtitleRef = useRef(null)
  const taglineRef = useRef(null)
  const scrollRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.3 })

      tl.from(titleRef.current, {
        y: 80,
        opacity: 0,
        duration: 1.2,
        ease: 'power4.out',
      })
        .from(subtitleRef.current, {
          y: 40,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.5')
        .from(taglineRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.4')
        .from(scrollRef.current, {
          opacity: 0,
          duration: 0.6,
        }, '-=0.2')

      // Parallax on hero image
      gsap.to('.hero-bg', {
        yPercent: 30,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      // Floating scroll indicator
      gsap.to(scrollRef.current, {
        y: 12,
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: 'sine.inOut',
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden flex items-center justify-center">
      {/* Background */}
      <div className="hero-bg absolute inset-0 -top-[10%] -bottom-[10%]">
        <img
          src="/images/hero-eggs.jpg"
          alt="Fresh eggs"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-amber-950/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl">
        <div ref={titleRef}>
          <h1 className="font-[family-name:var(--font-display)] text-5xl md:text-7xl lg:text-8xl font-900 text-white leading-tight tracking-tight">
            Ganesh
            <span className="block text-saffron-400">Egg Centre</span>
          </h1>
        </div>

        <p ref={subtitleRef} className="mt-6 text-xl md:text-2xl text-saffron-100/90 font-light tracking-wide">
          Supplying Freshness for 25 Years
        </p>

        <p ref={taglineRef} className="mt-4 text-base md:text-lg text-white/60 max-w-xl mx-auto">
          From poultry farms to your doorstep — wholesale & retail egg distribution you can trust.
        </p>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollRef} className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-white/50 text-xs uppercase tracking-[0.3em]">Scroll</span>
        <svg width="20" height="28" viewBox="0 0 20 28" fill="none" className="text-saffron-400">
          <rect x="1" y="1" width="18" height="26" rx="9" stroke="currentColor" strokeWidth="2" />
          <circle cx="10" cy="9" r="2" fill="currentColor" />
        </svg>
      </div>
    </section>
  )
}
