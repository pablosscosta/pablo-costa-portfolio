import { useEffect } from 'react'
import Header from './components/Header.jsx'
import Hero from './sections/Hero.jsx'
import About from './sections/About.jsx'
import Technologies from './sections/Technologies.jsx'
import Projects from './sections/Projects.jsx'
import Contact from './sections/Contact.jsx'
import Footer from './components/Footer.jsx'

function App() {
  useEffect(() => {
    const sections = document.querySelectorAll('main > section:not(.hero)')

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return
    }

    if (!('IntersectionObserver' in window)) {
      return
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        })
      },
      {
        threshold: 0.15,
      }
    )

    sections.forEach((section) => {
      section.classList.add('reveal')
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  return (
    <>
      <Header />

      <main>
        <Hero />
        <About />
        <Technologies />
        <Projects />
        <Contact />
      </main>

      <Footer />
    </>
  )
}

export default App