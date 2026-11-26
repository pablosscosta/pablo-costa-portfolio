import './Hero.css'

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <span className="hero-eyebrow">DESENVOLVEDOR BACKEND</span>

        <h1>
          Olá, eu sou Pablo Costa.
          <br />
          Desenvolvo <span>APIs e sistemas web.</span>
        </h1>

        <p className="hero-description">
          Hoje trabalho principalmente com Ruby on Rails e Python, e também
          com React e TypeScript. Estou aberto a oportunidades com outras
          linguagens e stacks.
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