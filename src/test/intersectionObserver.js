// jsdom has no IntersectionObserver. This fake keeps the observed elements, so
// a test can say when one of them enters or leaves the screen.
const observers = new Set()

export class FakeIntersectionObserver {
  constructor(callback) {
    this.callback = callback
    this.elements = new Set()
    observers.add(this)
  }

  observe(element) {
    this.elements.add(element)
  }

  disconnect() {
    this.elements.clear()
    observers.delete(this)
  }
}

function notify(element, isIntersecting) {
  observers.forEach((observer) => {
    if (observer.elements.has(element)) {
      observer.callback([{ target: element, isIntersecting }], observer)
    }
  })
}

export function enterScreen(element) {
  notify(element, true)
}

export function leaveScreen(element) {
  notify(element, false)
}
