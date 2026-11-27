import { Maximize2, X } from 'lucide-react'
import { useEffect, useId, useRef } from 'react'
import './ProjectVideo.css'

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

function playPreview(videoElement) {
  videoElement.play().catch((error) => {
    // Leaving the screen while the video still loads makes pause() interrupt
    // play() with an AbortError: expected, so there is nothing to report.
    if (error.name !== 'AbortError') {
      console.warn('Could not start the demo preview.', error)
    }
  })
}

// With `autoplay`, the browser downloads every preview as soon as the page
// opens, even off screen. Here the preview loads and plays only while it is on
// screen, and pauses when it leaves: less data and less battery.
function usePlayWhileOnScreen(videoRef, enabled) {
  useEffect(() => {
    if (!enabled || !('IntersectionObserver' in window)) {
      return
    }

    const videoElement = videoRef.current
    const observer = new IntersectionObserver((entries) => {
      // Several changes can arrive together: the last one is the current state.
      if (entries.at(-1).isIntersecting) {
        playPreview(videoElement)
      } else {
        videoElement.pause()
      }
    })

    observer.observe(videoElement)
    return () => observer.disconnect()
  }, [videoRef, enabled])
}

// The card shows a small looping preview. A click opens the same video in a
// native <dialog>: large, with the browser controls (fullscreen included).
function ProjectVideo({ video, title, className }) {
  const dialogRef = useRef(null)
  const previewRef = useRef(null)
  const playerRef = useRef(null)
  const headingId = useId()
  const reducedMotion = prefersReducedMotion()

  usePlayWhileOnScreen(previewRef, !reducedMotion)

  function openPlayer() {
    dialogRef.current.showModal()

    if (!reducedMotion) {
      playerRef.current.play().catch((error) => {
        // The controls are still there, so the visitor can press play.
        console.warn('Could not start the demo video automatically.', error)
      })
    }
  }

  function closePlayer() {
    dialogRef.current.close()
  }

  // A click on the backdrop lands on the <dialog> itself, outside its content.
  function handleDialogClick(event) {
    if (event.target === event.currentTarget) {
      closePlayer()
    }
  }

  return (
    <figure className={`${className} project-video`}>
      <button
        type="button"
        className="project-video-preview"
        onClick={openPlayer}
        aria-label={`Ampliar o vídeo de demonstração do ${title}`}
      >
        <video
          ref={previewRef}
          src={video.src}
          poster={video.poster}
          muted
          loop
          playsInline
          preload="none"
          aria-hidden="true"
        />
        <span className="project-video-expand" aria-hidden="true">
          <Maximize2 size={14} />
          Ampliar
        </span>
      </button>
      <figcaption>{video.caption}</figcaption>

      <dialog
        ref={dialogRef}
        className="video-dialog"
        aria-labelledby={headingId}
        onClick={handleDialogClick}
        onClose={() => playerRef.current.pause()}
      >
        <div className="video-dialog-content">
          <div className="video-dialog-header">
            <h3 id={headingId}>Demonstração do {title}</h3>
            <button
              type="button"
              className="video-dialog-close"
              onClick={closePlayer}
              aria-label="Fechar vídeo"
            >
              <X size={20} aria-hidden="true" />
            </button>
          </div>

          <video
            ref={playerRef}
            src={video.src}
            poster={video.poster}
            controls
            loop
            playsInline
            preload="none"
          />
          <p>{video.caption}</p>
        </div>
      </dialog>
    </figure>
  )
}

export default ProjectVideo
