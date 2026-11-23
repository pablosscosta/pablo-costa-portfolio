
import projects from '../data/projects'
import './Projects.css'

function Projects() {
  const featuredProject = projects.find((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)

  return (
    <section className="projects section-container" id="projects">
      <div className="projects-heading">
        <div>
          <span className="section-eyebrow">PORTFÓLIO</span>
          <h2>Projetos selecionados</h2>
        </div>

        <p>
          Alguns projetos e aplicações que representam minha experiência
          com desenvolvimento de software.
        </p>
      </div>

      {featuredProject && (
        <article className="project-featured">
          <div className="project-image">
            <span>Imagem do projeto</span>
          </div>

          <div className="project-info">
            <span className="project-category">
              {featuredProject.category}
            </span>

            <h3>{featuredProject.title}</h3>

            <p>{featuredProject.description}</p>

            <div className="project-technologies">
              {featuredProject.technologies.map((technology) => (
                <span key={technology}>{technology}</span>
              ))}
            </div>

            <div className="project-links">
              <span>GitHub em breve</span>
              <span>Demo em breve</span>
            </div>
          </div>
        </article>
      )}

      <div className="projects-grid">
        {otherProjects.map((project) => (
          <article className="project-card" key={project.id}>
            <div className="project-card-image">
              <span>Imagem do projeto</span>
            </div>

            <div className="project-card-content">
              <span className="project-category">
                {project.category}
              </span>

              <h3>{project.title}</h3>

              <p>{project.description}</p>

              <div className="project-technologies">
                {project.technologies.map((technology) => (
                  <span key={technology}>{technology}</span>
                ))}
              </div>

              <div className="project-links">
                <span>GitHub em breve</span>
                <span>Demo em breve</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Projects
