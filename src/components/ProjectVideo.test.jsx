import { render, screen, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it, vi } from 'vitest'
import { enterScreen, leaveScreen } from '../test/intersectionObserver'
import ProjectVideo from './ProjectVideo'

const video = {
  src: '/projects/demo.mp4',
  poster: '/projects/demo.jpg',
  caption: 'Demonstração com dados fictícios.',
}

function renderVideo() {
  render(
    <ProjectVideo video={video} title="Projeto X" className="project-image" />,
  )
  return userEvent.setup()
}

function getPreview() {
  return screen.getByRole('button', {
    name: 'Ampliar o vídeo de demonstração do Projeto X',
  })
}

function getPreviewVideo() {
  return getPreview().querySelector('video')
}

function preferReducedMotion() {
  vi.spyOn(window, 'matchMedia').mockImplementation((query) => ({
    matches: query === '(prefers-reduced-motion: reduce)',
    media: query,
    addEventListener: () => undefined,
    removeEventListener: () => undefined,
  }))
}

// Lets a rejected play() reach the component's .catch() before the assertions.
function settlePromises() {
  return new Promise((resolve) => setTimeout(resolve, 0))
}

describe('ProjectVideo', () => {
  it('shows a muted, looping preview that waits to be on screen', () => {
    const play = vi.spyOn(HTMLMediaElement.prototype, 'play')
    renderVideo()

    const preview = getPreviewVideo()
    expect(preview).not.toHaveAttribute('autoplay')
    expect(preview).toHaveAttribute('preload', 'none')
    expect(preview).toHaveAttribute('loop')
    expect(preview.muted).toBe(true)
    expect(play).not.toHaveBeenCalled()
    expect(
      screen.getByText(video.caption, { selector: 'figcaption' }),
    ).toBeVisible()
    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('plays the preview when it shows up on screen', () => {
    const play = vi.spyOn(HTMLMediaElement.prototype, 'play')
    renderVideo()
    const preview = getPreviewVideo()

    enterScreen(preview)

    expect(play).toHaveBeenCalledOnce()
    expect(play.mock.contexts[0]).toBe(preview)
  })

  it('pauses the preview when it leaves the screen', () => {
    const pause = vi.spyOn(HTMLMediaElement.prototype, 'pause')
    renderVideo()
    const preview = getPreviewVideo()
    enterScreen(preview)

    leaveScreen(preview)

    expect(pause).toHaveBeenCalledOnce()
    expect(pause.mock.contexts[0]).toBe(preview)
  })

  it('warns when the browser does not let the preview play', async () => {
    const error = new DOMException('Blocked.', 'NotAllowedError')
    vi.spyOn(HTMLMediaElement.prototype, 'play').mockRejectedValue(error)
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined)
    renderVideo()

    enterScreen(getPreviewVideo())
    await settlePromises()

    expect(warn).toHaveBeenCalledWith(
      'Could not start the demo preview.',
      error,
    )
  })

  it('does not warn when leaving the screen interrupts the preview', async () => {
    const error = new DOMException('Interrupted.', 'AbortError')
    vi.spyOn(HTMLMediaElement.prototype, 'play').mockRejectedValue(error)
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined)
    renderVideo()
    const preview = getPreviewVideo()

    enterScreen(preview)
    leaveScreen(preview)
    await settlePromises()

    expect(warn).not.toHaveBeenCalled()
  })

  it('opens a large player with controls when the preview is clicked', async () => {
    const play = vi.spyOn(HTMLMediaElement.prototype, 'play')
    const user = renderVideo()

    await user.click(getPreview())

    const dialog = screen.getByRole('dialog', {
      name: 'Demonstração do Projeto X',
    })
    expect(dialog.querySelector('video')).toHaveAttribute('controls')
    expect(within(dialog).getByText(video.caption)).toBeVisible()
    expect(play).toHaveBeenCalledOnce()
  })

  it('closes the player with the close button and pauses the video', async () => {
    const pause = vi.spyOn(HTMLMediaElement.prototype, 'pause')
    const user = renderVideo()
    await user.click(getPreview())

    await user.click(screen.getByRole('button', { name: 'Fechar vídeo' }))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
    expect(pause).toHaveBeenCalledOnce()
  })

  it('closes the player when the backdrop is clicked', async () => {
    const user = renderVideo()
    await user.click(getPreview())

    await user.click(screen.getByRole('dialog'))

    expect(screen.queryByRole('dialog')).not.toBeInTheDocument()
  })

  it('keeps the player open when the video itself is clicked', async () => {
    const user = renderVideo()
    await user.click(getPreview())
    const dialog = screen.getByRole('dialog')

    await user.click(dialog.querySelector('video'))

    expect(screen.getByRole('dialog')).toBeInTheDocument()
  })

  it('warns and keeps the controls when the video cannot start by itself', async () => {
    const error = new Error('NotAllowedError')
    vi.spyOn(HTMLMediaElement.prototype, 'play').mockRejectedValue(error)
    const warn = vi.spyOn(console, 'warn').mockImplementation(() => undefined)
    const user = renderVideo()

    await user.click(getPreview())

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(warn).toHaveBeenCalledWith(
      'Could not start the demo video automatically.',
      error,
    )
  })

  it('does not play by itself for visitors who prefer reduced motion', async () => {
    preferReducedMotion()
    const play = vi.spyOn(HTMLMediaElement.prototype, 'play')
    const user = renderVideo()

    enterScreen(getPreviewVideo())
    await user.click(getPreview())

    expect(screen.getByRole('dialog')).toBeInTheDocument()
    expect(play).not.toHaveBeenCalled()
  })
})
