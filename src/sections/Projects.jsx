import { ExternalLink } from 'lucide-react'
import { FaGithub } from 'react-icons/fa'
import projects from '../data/projects'
import './Projects.css'

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function ProjectVideo({ video, className }) {
  const autoPlay = !prefersReducedMotion()

  return (
    <figure className={`${className} project-video`}>
      <video
        src={video.src}
        poster={video.poster}
        autoPlay={autoPlay}
        controls={!autoPlay}
        muted
        loop
        playsInline
        preload="metadata"
        aria-label={video.caption}
      />
      <figcaption>{video.caption}</figcaption>
    </figure>
  )
}

function ProjectMedia({ project, className }) {
  if (project.video) {
    return <ProjectVideo video={project.video} className={className} />
  }

  return (
    <div className={className}>
      {project.image ? (
        <img src={project.image.src} alt={project.image.alt} loading="lazy" />
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
      <ProjectMedia project={project} className="project-image" />

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
      <ProjectMedia project={project} className="project-card-image" />

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
  const featuredProjects = projects.filter((project) => project.featured)
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

      {featuredProjects.map((project) => (
        <FeaturedProject project={project} key={project.id} />
      ))}

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
