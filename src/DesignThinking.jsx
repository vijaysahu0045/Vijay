import React from 'react'
import './DesignThinking.css'
import bgImage from './assets/projects-bg.png'

export default function DesignThinking({ onBack }) {
  return (
    <div className="dt-page-container">
      {/* Background Image Layer */}
      <div className="dt-bg-image">
        <img src={bgImage} alt="" />
      </div>

      {/* Smooth Moving Purple Ball Layer */}
      <div className="page-ambient-glow-layer">
        <div className="page-moving-purple-orb" />
      </div>

      {/* Fixed Back Button (Always available, no bar across the screen) */}
      <button className="dt-home-btn" onClick={onBack} title="Back to Home" aria-label="Back to Home">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Main Content Area (Cleared) */}
      <main className="dt-main-wrapper">
      </main>
    </div>
  )
}
