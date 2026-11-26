import { useState } from 'react'

const FORM_NAME = 'contact'

const STATUS_MESSAGES = {
  success: 'Mensagem enviada! Respondo assim que possível.',
  error:
    'Não foi possível enviar agora. Tente de novo ou fale comigo pelo LinkedIn.',
}

// Netlify Forms reads the submission from a urlencoded POST whose
// "form-name" matches the static form declared in index.html.
async function submitToNetlify(formData) {
  const body = new URLSearchParams(formData)
  body.set('form-name', FORM_NAME)

  const response = await fetch('/', {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: body.toString(),
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
      await submitToNetlify(new FormData(form))
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
      name={FORM_NAME}
      method="POST"
      onSubmit={handleSubmit}
    >
      <p className="contact-form-honeypot" aria-hidden="true">
        <label>
          Não preencha este campo
          <input name="bot-field" tabIndex={-1} autoComplete="off" />
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
