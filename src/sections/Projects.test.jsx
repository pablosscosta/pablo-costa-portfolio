import { render, screen, within } from '@testing-library/react'
import { describe, expect, it } from 'vitest'
import projects from '../data/projects'
import Projects from './Projects'

function getProjectCard(title) {
  return screen.getByRole('heading', { name: title }).closest('article')
}

describe('Projects', () => {
  it.each(projects)('shows $title with links to GitHub and the demo', (project) => {
    render(<Projects />)

    const card = within(getProjectCard(project.title))
    expect(card.getByText(project.description)).toBeInTheDocument()
    expect(card.getByRole('link', { name: /GitHub/ })).toHaveAttribute(
      'href',
      project.github,
    )
    expect(card.getByRole('link', { name: /Ver demo/ })).toHaveAttribute(
      'href',
      project.demo,
    )
  })

  it.each(projects.filter((project) => project.video))(
    'explains that the $title video is a demonstration',
    (project) => {
      render(<Projects />)

      const card = within(getProjectCard(project.title))
      expect(
        card.getByText(project.video.caption, { selector: 'figcaption' }),
      ).toBeVisible()
    },
  )
})
