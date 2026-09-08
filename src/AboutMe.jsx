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

      {/* Main Spacious Content */}
      <main className="about-main-wrapper">
        <div className="about-content-layout">
          {/* Top Hero Showcase Card */}
          <div className="about-hero-card">
            <div className="about-hero-left">
              <div className="about-tag-wrap">
                <span className="about-tag-text">ABOUT VIJAY</span>
                <div className="about-tag-line" />
              </div>

              <h1 className="about-headline">
                Designing products at the intersection of{' '}
                <span className="highlight-purple">AI, craft &amp; intuition.</span>
              </h1>

              <p className="about-body-text">
                Product Designer with 2 years of experience leading end-to-end design at <strong>Fymble</strong>. I specialize in turning complex product journeys into clean, human-centered digital experiences that scale.
              </p>

              {/* Spacious Metrics Row */}
              <div className="about-metrics-row">
                <div className="about-metric-box">
                  <strong>250+</strong>
                  <span>Screens Shipped</span>
                </div>
                <div className="about-metric-box">
                  <strong>20K+</strong>
                  <span>Active Users</span>
                </div>
                <div className="about-metric-box">
                  <strong>600+</strong>
                  <span>Gym Partners</span>
                </div>
              </div>
            </div>

            <div className="about-hero-right">
              <div className="about-portrait-frame">
                <img src={profileImg} alt="Vijay Sahu - Product Designer" />
              </div>
            </div>
          </div>

          {/* Bottom 3 Clean Pillar Cards */}
          <div className="about-pillars-grid">
            <div className="about-pillar-card">
              <div className="pillar-icon">🧠</div>
              <h3>AI &amp; Multimodal UX</h3>
              <p>Designing intelligent copilots like Kyra AI, contextual prompt flows, and adaptive interfaces.</p>
            </div>

            <div className="about-pillar-card">
              <div className="pillar-icon">📦</div>
              <h3>0→1 Product Strategy</h3>
              <p>Owning the complete design lifecycle across B2B &amp; B2C ecosystems with rapid user testing.</p>
            </div>

            <div className="about-pillar-card">
              <div className="pillar-icon">📐</div>
              <h3>Systems &amp; Motion</h3>
              <p>Building scalable Figma component architectures, design tokens, and fluid 60fps micro-interactions.</p>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
