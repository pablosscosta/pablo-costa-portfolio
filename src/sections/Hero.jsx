import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="hero-eyebrow">DESENVOLVEDOR DE SISTEMAS</span>

        <h1>
          Olá, eu sou Pablo Costa.
          <br />
          Desenvolvo <span>soluções em software.</span>
        </h1>

        <p className="hero-description">
          Atuo no desenvolvimento de sistemas, trabalhando na implementação de funcionalidades, manutenção de aplicações, integrações e melhoria de soluções existentes.
        </p>

        <div className="hero-actions">
          <a className="hero-button-primary" href="#projects">
            Conheça meus projetos
          </a>

          <a className="hero-button-secondary" href="#contact">
            Entre em contato
          </a>
        </div>
      </div>
    </section>
  )
}

export default Hero