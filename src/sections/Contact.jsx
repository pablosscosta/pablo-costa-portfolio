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

        <a
          className="contact-email"
          href="mailto:pablosousa013@gmail.com"
        >
          <Mail size={20} />
          pablosousa013@gmail.com
          <ArrowUpRight size={18} />
        </a>

        <div className="contact-socials">
          <a
            href="https://github.com/pablosscosta"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/pablosilva013/"
            target="_blank"
            rel="noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedinIn size={20} />
            LinkedIn
          </a>
        </div>
      </div>
    </section>
  )
}

export default Contact
