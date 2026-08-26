import React from 'react'
import './AboutMe.css'
import profileImg from './assets/about-profile.jpg'

export default function AboutMe({ onBack }) {
  return (
    <div className="about-page-container">
      {/* Smooth Moving Purple Ball Layer */}
      <div className="page-ambient-glow-layer">
        <div className="page-moving-purple-orb" />
      </div>

      {/* Top Header Bar */}
      <header className="about-topbar">
        <button className="about-home-btn" onClick={onBack}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <span>Home</span>
        </button>
        <span className="about-topbar-title">PORTFOLIO / ABOUT</span>
      </header>

      {/* Main Wrapper */}
      <main className="about-main-wrapper">
        <div className="about-master-card">
          {/* Top Right Dot Matrix Pattern */}
          <div className="about-card-dot-grid">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i} />
            ))}
          </div>

          {/* Left Column: Text & Content */}
          <div className="about-left-col">
            {/* Tag / Category */}
            <div className="about-tag-wrap">
              <span className="about-tag-text">ABOUT ME</span>
              <div className="about-tag-line" />
            </div>

            {/* Headline */}
            <h1 className="about-headline">
              I design digital experiences that are{' '}
              <span className="highlight-purple">
                simple, thoughtful &amp; impactful.
              </span>
            </h1>

            {/* Body Description */}
            <p className="about-body-text">
              I'm a UI/UX Designer who enjoys turning complex ideas into clean, intuitive, and visually engaging experiences. I care about the details—from how something looks to how it feels to use.
            </p>

            {/* Pill Tags Row */}
            <div className="about-pills-row">
              {/* Pill 1: UI/UX Design */}
              <div className="about-pill-item">
                <span className="about-pill-icon">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 20h9"/>
                    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/>
                  </svg>
                </span>
                <span>UI/UX Design</span>
              </div>

              {/* Pill 2: Product Design */}
              <div className="about-pill-item">
                <span className="about-pill-icon">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
                    <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
                    <line x1="12" y1="22.08" x2="12" y2="12"/>
                  </svg>
                </span>
                <span>Product Design</span>
              </div>

              {/* Pill 3: Visual Design */}
              <div className="about-pill-item">
                <span className="about-pill-icon">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 19l7-7 3 3-7 7-3-3z"/>
                    <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                    <path d="M2 2l7.586 7.586"/>
                    <circle cx="11" cy="11" r="2"/>
                  </svg>
                </span>
                <span>Visual Design</span>
              </div>

              {/* Pill 4: Motion Design */}
              <div className="about-pill-item">
                <span className="about-pill-icon">
                  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <polygon points="5 3 19 12 5 21 5 3"/>
                  </svg>
                </span>
                <span>Motion Design</span>
              </div>
            </div>

            {/* Bottom Exploring Line */}
            <div className="about-exploring-line">
              <span className="about-sparkle-icon">
                <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                </svg>
              </span>
              <span>
                Currently exploring →{' '}
                <span className="about-exploring-highlight">
                  AI × Design × Motion
                </span>
              </span>
            </div>
          </div>

          {/* Right Column: Portrait Card */}
          <div className="about-right-col">
            <div className="about-portrait-card">
              <img src={profileImg} alt="Vijay - UI/UX Designer" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
