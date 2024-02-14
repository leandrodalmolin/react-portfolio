import React, { useState } from 'react'
import { FadeIn } from '../utils/FadeIn'

export function Popup() {
  const [isOpen, setIsOpen] = useState(true)

  const togglePopup = () => {
    setIsOpen(!isOpen)
  }

  if (!isOpen) return null

  return (
    <FadeIn delay={2000}>
      <div
        className="fixed bottom-5 right-5 left-5 z-50"
        role="dialog"
        aria-modal="true"
      >
        <div className="bg-zinc-100 px-10 py-12 rounded-md shadow-lg w-full max-w-sm ml-auto">
          <button
            className="absolute top-0 right-0 mr-4 mt-4 bg-zinc-300 hover:bg-zinc-800 hover:text-zinc-100 text-zinc-800 text-sm font-bold py-1 px-2 rounded transition-colors"
            onClick={togglePopup}
          >
            Close
          </button>
          <div className="text-zinc-700">
            <h2 className="font-bold mb-3">Outdated Website!</h2>
            <p className="mb-2">
              This website is displaying an older version of my portfolio, which
              is kept here for demonstration purposes.
            </p>
            <p>
              <a
                href="https://leandrodm.vercel.app"
                target="_blank"
                className="underline underline-offset-2 decoration-zinc-300 font-medium hover:text-zinc-900 transition-colors"
              >
                Please visit the newest version of my portfolio by clicking
                here.
              </a>
            </p>
          </div>
        </div>
      </div>
    </FadeIn>
  )
}
