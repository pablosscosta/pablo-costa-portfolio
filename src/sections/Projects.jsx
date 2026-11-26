import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import projects from '../data/projects'
import './Projects.css'

function ProjectImage({ image, className }) {
  return (
    <div className={className}>
      {image ? (
        <img src={image.src} alt={image.alt} loading="lazy" />
      ) : (
        <span>Imagem do projeto</span>
      )}
    </div>
  )
}

function ProjectHighlights({ highlights }) {
  if (!highlights?.length) {
    return null
  }

  return (
    <ul className="project-highlights">
      {highlights.map((highlight) => (
        <li key={highlight}>{highlight}</li>
      ))}
    </ul>
  )
}

function ProjectTechnologies({ technologies }) {
  return (
    <div className="project-technologies">
      {technologies.map((technology) => (
        <span key={technology}>{technology}</span>
      ))}
    </div>
  )
}

function ProjectLinks({ github, demo }) {
  return (
    <div className="project-links">
      {github ? (
        <a href={github} target="_blank" rel="noreferrer">
          <FaGithub aria-hidden="true" />
          GitHub
        </a>
      ) : (
        <span>GitHub em breve</span>
      )}

      {demo ? (
        <a href={demo} target="_blank" rel="noreferrer">
          <ExternalLink size={14} aria-hidden="true" />
          Ver demo
        </a>
      ) : (
        <span>Demo em breve</span>
      )}
    </div>
  )
}

function FeaturedProject({ project }) {
  return (
    <article className="project-featured">
      <ProjectImage image={project.image} className="project-image" />

      <div className="project-info">
        <span className="project-category">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ProjectHighlights highlights={project.highlights} />
        <ProjectTechnologies technologies={project.technologies} />
        <ProjectLinks github={project.github} demo={project.demo} />
        {project.demoNote && (
          <p className="project-demo-note">{project.demoNote}</p>
        )}
      </div>
    </article>
  )
}

function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <ProjectImage image={project.image} className="project-card-image" />

      <div className="project-card-content">
        <span className="project-category">{project.category}</span>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ProjectHighlights highlights={project.highlights} />
        <ProjectTechnologies technologies={project.technologies} />
        <ProjectLinks github={project.github} demo={project.demo} />
        {project.demoNote && (
          <p className="project-demo-note">{project.demoNote}</p>
        )}
      </div>
    </article>
  )
}

function ComingSoonNotice() {
  return (
    <p className="projects-coming-soon">
      <span>EM BREVE</span>
      Mais projetos em desenvolvimento.
    </p>
  )
}

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

      {featuredProject && <FeaturedProject project={featuredProject} />}

      {otherProjects.length > 0 && (
        <div className="projects-grid">
          {otherProjects.map((project) => (
            <ProjectCard project={project} key={project.id} />
          ))}
        </div>
      )}

      <ComingSoonNotice />
    </section>
  )
}

export default Projects
