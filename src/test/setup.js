import '@testing-library/jest-dom/vitest'
import { cleanup } from '@testing-library/react'
import { afterEach, vi } from 'vitest'

// jsdom has no matchMedia: by default the tests run as a visitor without a
// reduced-motion preference. A test can spy on it to change that.
window.matchMedia = (query) => ({
  matches: false,
  media: query,
  addEventListener: () => undefined,
  removeEventListener: () => undefined,
})

// jsdom does not implement the <dialog> behavior yet: just enough of it to open
// and close. Focus trapping and Esc are left to real browsers.
HTMLDialogElement.prototype.showModal = function showModal() {
  this.setAttribute('open', '')
}
HTMLDialogElement.prototype.close = function close() {
  if (!this.open) return
  this.removeAttribute('open')
  this.dispatchEvent(new Event('close'))
}

// jsdom does not play media either. Tests spy on these to check what happened.
HTMLMediaElement.prototype.play = () => Promise.resolve()
HTMLMediaElement.prototype.pause = () => undefined

afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
})
