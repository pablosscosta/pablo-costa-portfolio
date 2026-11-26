import { useState } from 'react'
import profile from '../data/profile'

const STATUS_MESSAGES = {
  success: 'Mensagem enviada! Respondo assim que possível.',
  error:
    'Não foi possível enviar agora. Tente de novo ou fale comigo pelo LinkedIn.',
}

// Formspree accepts the FormData as-is and forwards each submission by email.
// "Accept: application/json" makes it answer with JSON instead of redirecting.
async function submitToFormspree(formData) {
  const response = await fetch(profile.contactFormEndpoint, {
    method: 'POST',
    headers: { Accept: 'application/json' },
    body: formData,
  })

  if (!response.ok) {
    throw new Error(`Form submission failed with status ${response.status}`)
  }
}

function ContactForm() {
  const [status, setStatus] = useState('idle')

  async function handleSubmit(event) {
    event.preventDefault()
    const form = event.currentTarget

    setStatus('sending')

    try {
      await submitToFormspree(new FormData(form))
      form.reset()
      setStatus('success')
    } catch (error) {
      console.error(error)
      setStatus('error')
    }
  }

  return (
    <form
      className="contact-form"
      action={profile.contactFormEndpoint}
      method="POST"
      onSubmit={handleSubmit}
    >
      <p className="contact-form-honeypot" aria-hidden="true">
        <label>
          Não preencha este campo
          <input name="_gotcha" tabIndex={-1} autoComplete="off" />
        </label>
      </p>

      <label>
        Nome
        <input name="name" type="text" autoComplete="name" required />
      </label>

      <label>
        E-mail
        <input name="email" type="email" autoComplete="email" required />
      </label>

      <label className="contact-form-full">
        Mensagem
        <textarea name="message" rows={5} required />
      </label>

      <div className="contact-form-footer">
        <button type="submit" disabled={status === 'sending'}>
          {status === 'sending' ? 'Enviando...' : 'Enviar mensagem'}
        </button>

        {STATUS_MESSAGES[status] && (
          <p
            className={`contact-form-status contact-form-status--${status}`}
            role="status"
          >
            {STATUS_MESSAGES[status]}
          </p>
        )}
      </div>
    </form>
  )
}

export default ContactForm
