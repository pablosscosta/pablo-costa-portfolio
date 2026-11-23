
import { useState } from 'react'
import { Menu, X } from 'lucide-react'
import './Header.css'

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

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
          <a href="#about" onClick={closeMenu}>Sobre</a>
          <a href="#technologies" onClick={closeMenu}>Tecnologias</a>
          <a href="#projects" onClick={closeMenu}>Projetos</a>

          <a
            className="mobile-contact"
            href="#contact"
            onClick={closeMenu}
          >
            Contato
          </a>
        </nav>

        <a className="header-contact" href="#contact">
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
