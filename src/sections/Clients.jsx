import { useEffect, useRef } from 'react'
import gsap from 'gsap'

const typeColors = {
  Hotel: 'bg-amber-100 text-amber-800',
  Restaurant: 'bg-orange-100 text-orange-800',
  Bakery: 'bg-rose-100 text-rose-800',
}

const clients = [
  { name: 'Mangala Vilas Hotel', type: 'Hotel', area: 'Kamarajanar Road, Attur', img: '/images/hotel-dining.jpg' },
  { name: 'A2B Veg Restaurant', type: 'Restaurant', area: 'Attur Bypass', img: '/images/restaurant-indian.jpg' },
  { name: 'Hotel Junior Kuppanna', type: 'Hotel', area: 'Ammampalayam', img: '/images/hotel-lobby.jpg' },
  { name: 'Mythili Mess', type: 'Restaurant', area: 'Chennai-Salem Bypass, Attur', img: '/images/restaurant-busy.jpg' },
  { name: 'Paradise Multicuisine', type: 'Restaurant', area: 'Attur Main Road', img: '/images/restaurant-table.jpg' },
  { name: 'Iyarkai Family Restaurant', type: 'Restaurant', area: 'Pudupet', img: '/images/restaurant-cafe.jpg' },
  { name: 'Sri Arya Bhavan Sweets & Bakery', type: 'Bakery', area: 'Ranipet Main Road, Attur', img: '/images/bakery-sweets.jpg' },
  { name: 'New Vijay Bakery', type: 'Bakery', area: 'Near Bus Stand, Attur', img: '/images/bakery-bread.jpg' },
  { name: 'New Vishnu Bakery', type: 'Bakery', area: 'Narasingapuram, Attur', img: '/images/bakery-cakes.jpg' },
  { name: 'New Krishna Sweets & Bakery', type: 'Bakery', area: 'Attur', img: '/images/bakery-pastry.jpg' },
  { name: 'Sri Saravana Sweets & Bakery', type: 'Bakery', area: 'Udayarpalayam', img: '/images/bakery-cake2.jpg' },
  { name: 'Uma Sweets & Bakery', type: 'Bakery', area: 'Attur Bazaar', img: '/images/bakery-generic.jpg' },
]

export default function Clients() {
  const ref = useRef(null)

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from('.client-card', {
        y: 20,
        duration: 0.4,
        stagger: 0.05,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.clients-grid', start: 'top 95%', once: true },
      })

      gsap.from('.map-embed', {
        y: 40,
        duration: 0.8,
        ease: 'power3.out',
        scrollTrigger: { trigger: '.map-embed', start: 'top 95%' },
      })
    }, ref)
    return () => ctx.revert()
  }, [])

  return (
    <section ref={ref} className="py-28 md:py-40 bg-gradient-to-b from-[#1a0d00] to-amber-950 grain relative">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="text-center mb-16">
          <span className="text-saffron-400/70 text-xs font-semibold uppercase tracking-[0.4em]">Our Clients</span>
          <h2 className="font-[family-name:var(--font-display)] text-4xl md:text-6xl lg:text-7xl font-700 text-white mt-4">
            Trusted by Attur's Best
          </h2>
          <p className="mt-5 text-white/40 text-lg max-w-lg mx-auto">
            We supply fresh eggs daily to the leading hotels, restaurants, bakeries, and grocery shops across Attur, Salem.
          </p>
        </div>

        {/* Client cards with photos */}
        <div className="clients-grid grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {clients.map((c) => (
            <div
              key={c.name}
              className="client-card group bg-white/[0.05] backdrop-blur-sm border border-white/[0.08] rounded-xl overflow-hidden hover:bg-white/[0.1] hover:border-saffron-500/20 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Photo */}
              <div className="h-28 overflow-hidden">
                <img
                  src={c.img}
                  alt={c.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              {/* Info */}
              <div className="p-4">
                <span className={`inline-block text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full ${typeColors[c.type]}`}>
                  {c.type}
                </span>
                <h4 className="text-white font-semibold text-sm mt-2 leading-snug">{c.name}</h4>
                <p className="text-white/40 text-xs mt-1">{c.area}</p>
              </div>
            </div>
          ))}
        </div>

        {/* And more */}
        <p className="text-center text-white/30 text-sm mt-8 mb-16">
          …and 100+ grocery shops, tea stalls, and eateries across the Attur region.
        </p>

        {/* Google Maps embed */}
        <div className="map-embed rounded-2xl overflow-hidden border border-white/10 shadow-2xl">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.5!2d78.6!3d11.6!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bab3cb1c1c1c1c1%3A0x1234567890abcdef!2sGanesh+Egg+Centre!5e0!3m2!1sen!2sin!4v1"
            width="100%"
            height="350"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Ganesh Egg Centre Location"
          />
          <div className="bg-white/[0.05] px-6 py-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
            <div>
              <h4 className="text-white font-semibold text-sm">Ganesh Egg Centre</h4>
              <p className="text-white/40 text-xs mt-0.5">Attur, Salem District, Tamil Nadu</p>
            </div>
            <a
              href="https://maps.app.goo.gl/cQacnir7sx8JYp6a9"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-saffron-400 text-sm font-semibold hover:text-saffron-300 transition-colors"
            >
              <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
                <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
              </svg>
              Get Directions
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
