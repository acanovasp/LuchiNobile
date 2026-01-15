'use client'

interface AboutOverlayProps {
  isVisible: boolean
  aboutText: string
  contactEmail?: string
  onClose: () => void
}

export default function AboutOverlay({
  isVisible,
  aboutText,
  contactEmail,
  onClose,
}: AboutOverlayProps) {
  // Split text into paragraphs
  const paragraphs = aboutText.split('\n\n').filter(Boolean)

  return (
    <div
      className={`about-overlay ${isVisible ? 'about-overlay--visible' : ''}`}
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label="About"
    >
      <div
        className="about-overlay__content"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="about-overlay__text">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>
        {contactEmail && (
          <a
            href={`mailto:${contactEmail}`}
            className="about-overlay__email"
          >
            {contactEmail}
          </a>
        )}
      </div>
    </div>
  )
}

