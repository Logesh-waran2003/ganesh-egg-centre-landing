import { useEffect, useRef } from 'react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import Hero from './sections/Hero'
import Journey from './sections/Journey'
import Services from './sections/Services'
import Trust from './sections/Trust'
import Clients from './sections/Clients'
import Contact from './sections/Contact'

gsap.registerPlugin(ScrollTrigger)

export default function App() {
  const mainRef = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Fade-in all sections on scroll
      gsap.utils.toArray('.fade-section').forEach((section) => {
        gsap.from(section, {
          opacity: 0,
          y: 60,
          duration: 1,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: section,
            start: 'top 85%',
            toggleActions: 'play none none none',
          },
        })
      })
    }, mainRef)

    return () => ctx.revert()
  }, [])

  return (
    <main ref={mainRef}>
      <Hero />
      <Journey />
      <Services />
      <Trust />
      <Clients />
      <Contact />
    </main>
  )
}
