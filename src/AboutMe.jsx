import React from 'react'
import './AboutMe.css'
import profileImg from './assets/about-profile.jpg'
import bgImage from './assets/projects-bg.png'

export default function AboutMe({ onBack }) {
  return (
    <div className="about-page-container">
      {/* Background Image Layer */}
      <div className="about-bg-image">
        <img src={bgImage} alt="" />
      </div>

      {/* Smooth Moving Purple Ball Layer */}
      <div className="page-ambient-glow-layer">
        <div className="page-moving-purple-orb" />
      </div>

      {/* Top Header Bar */}
      <header className="about-topbar">
        <button className="about-home-btn" onClick={onBack} title="Back">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
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
              Product Designer crafting{' '}
              <span className="highlight-purple">
                thoughtful AI &amp; UX experiences.
              </span>
            </h1>

            {/* Body Description */}
            <p className="about-body-text">
              I'm <strong>Vijay Sahu</strong>, a Product Designer with 2 years of experience in end-to-end UX/UI and AI UX across B2B and B2C web and mobile platforms. Sole designer at <strong>Fymble</strong>, owning the full product lifecycle from UX strategy to 250+ production screens supporting 20K+ users and 600+ partners.
            </p>

            {/* Metrics Highlight Strip */}
            <div className="about-stats-strip">
              <div className="astat-item">
                <strong>250+</strong>
                <span>Screens Shipped</span>
              </div>
              <div className="astat-item">
                <strong>20K+</strong>
                <span>Active Users</span>
              </div>
              <div className="astat-item">
                <strong>600+</strong>
                <span>Gym Partners</span>
              </div>
            </div>

            {/* Pill Tags Row */}
            <div className="about-pills-row">
              <div className="about-pill-item">
                <span className="about-pill-icon">✨</span>
                <span>UI/UX &amp; AI UX</span>
              </div>

              <div className="about-pill-item">
                <span className="about-pill-icon">📦</span>
                <span>B2B / B2C Products</span>
              </div>

              <div className="about-pill-item">
                <span className="about-pill-icon">📐</span>
                <span>Design Systems</span>
              </div>

              <div className="about-pill-item">
                <span className="about-pill-icon">⚡</span>
                <span>UI Motion Design</span>
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
                  AI Agents × Design Systems × Micro-Motion
                </span>
              </span>
            </div>
          </div>

          {/* Right Column: Portrait Card */}
          <div className="about-right-col">
            <div className="about-portrait-card">
              <img src={profileImg} alt="Vijay Sahu - Product Designer" />
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
