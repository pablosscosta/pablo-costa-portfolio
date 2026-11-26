import { FaGithub, FaLinkedinIn } from 'react-icons/fa'
import profile from '../data/profile'
import ContactForm from './ContactForm.jsx'
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

        <ContactForm />

        <div className="contact-socials">
          <a
            href={profile.githubUrl}
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub"
          >
            <FaGithub size={20} />
            GitHub
          </a>

          <a
            href={profile.linkedinUrl}
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
