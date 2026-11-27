import { Maximize2, X } from 'lucide-react'
import { useId, useRef } from 'react'
import './ProjectVideo.css'

function prefersReducedMotion() {
  return window.matchMedia('(prefers-reduced-motion: reduce)').matches
}

// The card shows a small looping preview. A click opens the same video in a
// native <dialog>: large, with the browser controls (fullscreen included).
function ProjectVideo({ video, title, className }) {
  const dialogRef = useRef(null)
  const playerRef = useRef(null)
  const headingId = useId()
  const reducedMotion = prefersReducedMotion()

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
          src={video.src}
          poster={video.poster}
          autoPlay={!reducedMotion}
          muted
          loop
          playsInline
          preload="metadata"
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
