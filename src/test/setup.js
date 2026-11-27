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

afterEach(() => {
  cleanup()
  vi.restoreAllMocks()
})
