
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const sections = document.querySelectorAll(
      '#projects, #about, #technologies, #contact'
    )

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleSections = entries
          .filter((entry) => entry.isIntersecting)
          .sort(
            (a, b) =>
              a.boundingClientRect.top - b.boundingClientRect.top
          )

        if (visibleSections.length > 0) {
          setActiveSection(visibleSections[0].target.id)
        }
      },
      {
        rootMargin: '-100px 0px -70% 0px',
        threshold: 0,
      }
    )

    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  function closeMenu() {
    setIsMenuOpen(false)
  }

  return (
    <header className="site-header">
      <div className="header-container">
        <a
          className="brand"
          href="#home"
          aria-label="Pablo Costa - Início"
          onClick={closeMenu}
        >
          <span className="brand-symbol" aria-hidden="true">
            &lt;/&gt;
          </span>
          Pablo Costa<span className="brand-dot">.</span>
        </a>

        <nav
          id="main-navigation"
          className={`header-nav ${isMenuOpen ? 'is-open' : ''}`}
          aria-label="Navegação principal"
        >
          <a
            href="#projects"
            className={activeSection === 'projects' ? 'active' : ''}
            onClick={closeMenu}
          >
            Projetos
          </a>

          <a
            href="#about"
            className={activeSection === 'about' ? 'active' : ''}
            onClick={closeMenu}
          >
            Sobre
          </a>

          <a
            href="#technologies"
            className={activeSection === 'technologies' ? 'active' : ''}
            onClick={closeMenu}
          >
            Tecnologias
          </a>

          <a
            className={`mobile-contact ${activeSection === 'contact' ? 'active' : ''}`}
            href="#contact"
            onClick={closeMenu}
          >
            Contato
          </a>
        </nav>

        <a
          className={`header-contact ${activeSection === 'contact' ? 'active' : ''}`}
          href="#contact"
        >
          Contato
        </a>

        <button
          className="mobile-menu-toggle"
          type="button"
          aria-label={isMenuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={isMenuOpen}
          aria-controls="main-navigation"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
    </header>
  )
}

export default Header
