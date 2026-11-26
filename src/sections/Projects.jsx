import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import projects from '../data/projects'
import './Projects.css'

const MIN_SECONDARY_SLOTS = 2
const GRID_COLUMNS = 2

function countComingSoonSlots(secondaryCount) {
  if (secondaryCount < MIN_SECONDARY_SLOTS) {
    return MIN_SECONDARY_SLOTS - secondaryCount
  }

  return (GRID_COLUMNS - (secondaryCount % GRID_COLUMNS)) % GRID_COLUMNS
}

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
        <ProjectTechnologies technologies={project.technologies} />
        <ProjectLinks github={project.github} demo={project.demo} />
        {project.demoNote && (
          <p className="project-demo-note">{project.demoNote}</p>
        )}
      </div>
    </article>
  )
}

function ComingSoonCard() {
  return (
    <article className="project-card project-card--coming-soon">
      <div className="project-card-image">
        <span>Em breve</span>
      </div>

      <div className="project-card-content">
        <span className="project-category">EM BREVE</span>
        <h3>Novo projeto em desenvolvimento</h3>
        <p>
          Um novo projeto está sendo construído e aparecerá aqui assim que
          estiver pronto.
        </p>
      </div>
    </article>
  )
}

function Projects() {
  const featuredProject = projects.find((project) => project.featured)
  const otherProjects = projects.filter((project) => !project.featured)
  const comingSoonCount = countComingSoonSlots(otherProjects.length)

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

      <div className="projects-grid">
        {otherProjects.map((project) => (
          <ProjectCard project={project} key={project.id} />
        ))}

        {Array.from({ length: comingSoonCount }, (_, index) => (
          <ComingSoonCard key={`coming-soon-${index}`} />
        ))}
      </div>
    </section>
  )
}

export default Projects
