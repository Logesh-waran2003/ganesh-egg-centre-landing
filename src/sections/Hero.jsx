import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

export default function Hero() {
  const heroRef = useRef(null)
  const line1Ref = useRef(null)
  const line2Ref = useRef(null)
  const subtitleRef = useRef(null)
  const taglineRef = useRef(null)
  const scrollRef = useRef(null)
  const overlayRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ delay: 0.5 })

      // Cinematic reveal — overlay lifts
      tl.to(overlayRef.current, {
        yPercent: -100,
        duration: 1.4,
        ease: 'power4.inOut',
      })
        // Title lines slide up from below
        .from(line1Ref.current, {
          y: 120,
          opacity: 0,
          duration: 1,
          ease: 'power4.out',
        }, '-=0.6')
        .from(line2Ref.current, {
          y: 120,
          opacity: 0,
          duration: 1,
          ease: 'power4.out',
        }, '-=0.7')
        .from(subtitleRef.current, {
          y: 30,
          opacity: 0,
          duration: 0.8,
          ease: 'power3.out',
        }, '-=0.4')
        .from(taglineRef.current, {
          y: 20,
          opacity: 0,
          duration: 0.6,
        }, '-=0.3')
        .from(scrollRef.current, {
          opacity: 0,
          duration: 0.5,
        }, '-=0.2')

      // Parallax + zoom on scroll
      gsap.to('.hero-bg img', {
        yPercent: 20,
        scale: 1.1,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      })

      // Title fades out on scroll
      gsap.to('.hero-content', {
        y: -80,
        opacity: 0,
        ease: 'none',
        scrollTrigger: {
          trigger: heroRef.current,
          start: '30% top',
          end: 'bottom top',
          scrub: true,
        },
      })

      // Scroll indicator bounce
      gsap.to(scrollRef.current, {
        y: 10,
        repeat: -1,
        yoyo: true,
        duration: 1.2,
        ease: 'sine.inOut',
      })
    }, heroRef)

    return () => ctx.revert()
  }, [])

  return (
    <section ref={heroRef} className="relative h-screen overflow-hidden flex items-center justify-center grain">
      {/* Cinematic reveal overlay */}
      <div ref={overlayRef} className="absolute inset-0 bg-amber-950 z-50" />

      {/* Background — swap this img with a <video> for Seedance output */}
      <div className="hero-bg absolute inset-0 -top-[15%] -bottom-[15%]">
        <img
          src="/images/hero-eggs.jpg"
          alt="Fresh eggs"
          className="w-full h-full object-cover scale-100"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-amber-950/90" />
      </div>

      {/* Content */}
      <div className="hero-content relative z-10 text-center px-6 max-w-5xl">
        <div className="overflow-hidden">
          <h1 className="font-[family-name:var(--font-display)] text-6xl md:text-8xl lg:text-9xl font-900 text-white leading-[0.9] tracking-tight">
            <span ref={line1Ref} className="block">Ganesh</span>
            <span ref={line2Ref} className="block text-saffron-400 mt-2">Egg Centre</span>
          </h1>
        </div>

        <div className="overflow-hidden mt-8">
          <p ref={subtitleRef} className="text-xl md:text-2xl text-saffron-100/80 font-light tracking-[0.15em] uppercase">
            Fresh Eggs · Every Day · Since 25 Years
          </p>
        </div>

        <p ref={taglineRef} className="mt-5 text-base md:text-lg text-white/50 max-w-lg mx-auto leading-relaxed">
          From poultry farms to your doorstep — wholesale & retail egg distribution you can trust.
        </p>
      </div>

      {/* Scroll indicator */}
      <div ref={scrollRef} className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2">
        <span className="text-white/40 text-[10px] uppercase tracking-[0.4em] font-medium">Discover</span>
        <div className="w-px h-12 bg-gradient-to-b from-saffron-400 to-transparent" />
      </div>
    </section>
  )
}
