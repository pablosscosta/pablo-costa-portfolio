import { Mail, ArrowUpRight } from 'lucide-react'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import './Contact.css'

function Contact() {
  return (
    <section className="contact section-container" id="contact">
      <div className="contact-content">
        <span className="section-eyebrow">CONTATO</span>

        <h2>Vamos conversar?</h2>

        <p>
          Estou aberto a oportunidades profissionais e conversas sobre
          desenvolvimento de software.
        </p>

        <a className="contact-email" href="mailto:seuemail@exemplo.com">
          <Mail size={20} />
          seuemail@exemplo.com
          <ArrowUpRight size={18} />
        </a>

        <div className="contact-socials">
          <a href="#" target="_blank" rel="noreferrer" aria-label="GitHub">
            <FaGithub size={20} />
            GitHub
          </a>

          <a href="#" target="_blank" rel="noreferrer" aria-label="LinkedIn">
            <FaLinkedinIn size={20} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
