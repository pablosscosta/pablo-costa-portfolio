import { ArrowUp } from 'lucide-react'
import './Footer.css'

function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <div className="footer-container">
        <span className="footer-copyright">
          © {currentYear} Pablo Costa. Todos os direitos reservados.
        </span>

        <a className="footer-back-to-top" href="#home">
          Voltar ao topo
          <ArrowUp size={16} />
        </a>
      </div>
    </footer>
  )
}

export default Footer