
import './About.css'

function About() {
  return (
    <section className="about section-container" id="about">
      <div className="about-content">
        <div className="about-heading">
          <span className="section-eyebrow">SOBRE MIM</span>

          <h2>Minha trajetória profissional</h2>
        </div>

        <div className="about-text">
          <p>
            Sou bacharel em Ciência da Computação pela Universidade Federal
            do Oeste do Pará (UFOPA). Minha trajetória na tecnologia começou
            com suporte técnico e infraestrutura de TI, atuando no atendimento
            a usuários, manutenção de sistemas e suporte a ambientes corporativos.
          </p>

          <p>
            Também tive contato com sistemas ERP, integrações e desenvolvimento
            de aplicações para apoiar processos internos. Atualmente, trabalho
            como desenvolvedor de sistemas, com foco em backend e Ruby on Rails,
            participando da implementação de funcionalidades, manutenção e
            evolução de aplicações.
          </p>
        </div>
      </div>
    </section>
  )
}

export default About
