
import {
  SiRuby,
  SiRubyonrails,
  SiPython,
  SiDjango,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiHtml5,
  SiCss,
  SiPostgresql,
  SiMysql,
  SiGit,
  SiDocker,
} from 'react-icons/si'

import './Technologies.css'

const technologyGroups = [
  {
    name: 'Backend',
    technologies: [
      { name: 'Ruby', icon: SiRuby },
      { name: 'Ruby on Rails', icon: SiRubyonrails },
      { name: 'Python', icon: SiPython },
      { name: 'Django', icon: SiDjango },
    ],
  },
  {
    name: 'Frontend',
    technologies: [
      { name: 'JavaScript', icon: SiJavascript },
      { name: 'TypeScript', icon: SiTypescript },
      { name: 'React', icon: SiReact },
      { name: 'HTML5', icon: SiHtml5 },
      { name: 'CSS3', icon: SiCss },
    ],
  },
  {
    name: 'Banco de dados',
    technologies: [
      { name: 'PostgreSQL', icon: SiPostgresql },
      { name: 'MySQL', icon: SiMysql },
    ],
  },
  {
    name: 'Ferramentas',
    technologies: [
      { name: 'Git', icon: SiGit },
      { name: 'Docker', icon: SiDocker },
    ],
  },
]

function Technologies() {
  return (
    <section className="technologies section-container" id="technologies">
      <div className="technologies-content">
        <div className="technologies-heading">
          <span className="section-eyebrow">TECNOLOGIAS</span>
          <h2>Ferramentas que utilizo</h2>
        </div>

        <div className="technologies-groups">
          {technologyGroups.map((group) => (
            <div className="technology-group" key={group.name}>
              <h3>{group.name}</h3>

              <div className="technology-items">
                {group.technologies.map((technology) => {
                  const Icon = technology.icon

                  return (
                    <div className="technology-item" key={technology.name}>
                      <Icon aria-hidden="true" />
                      <span>{technology.name}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Technologies
