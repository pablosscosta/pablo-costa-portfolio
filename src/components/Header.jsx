
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import './Header.css'

const ACTIVE_SECTION_OFFSET = 120

// The active section is the last one whose top has passed below the header.
// At the end of the page the last section wins, since a short final section
// may never reach the top of the viewport.
function findActiveSectionId(sections) {
  const { scrollY, innerHeight } = window
  const isAtPageEnd =
    scrollY + innerHeight >= document.documentElement.scrollHeight - 2

  if (isAtPageEnd) {
    return sections.at(-1)?.id ?? ''
  }

  const passedSections = sections.filter(
    (section) =>
      section.getBoundingClientRect().top <= ACTIVE_SECTION_OFFSET
  )

  return passedSections.at(-1)?.id ?? ''
}

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const sections = [
      ...document.querySelectorAll('#projects, #about, #technologies, #contact'),
    ]

    function updateActiveSection() {
      setActiveSection(findActiveSectionId(sections))
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })

    return () => window.removeEventListener('scroll', updateActiveSection)
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
