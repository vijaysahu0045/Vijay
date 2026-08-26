import React from 'react'
import './ProjectDetail.css'
import bgImage from './assets/projects-bg.png'

export default function ProjectDetail({ project, categoryLabel, onBack, onNavigateProject }) {
  if (!project) return null

  return (
    <div className="detail-container">
      {/* Background Image Layer */}
      <div className="detail-bg-image">
        <img src={bgImage} alt="" />
      </div>

      {/* Smooth Moving Purple Ball Layer */}
      <div className="page-ambient-glow-layer">
        <div className="page-moving-purple-orb" />
      </div>



      {/* Top Header Bar */}
      <header className="detail-topbar">
        <div className="detail-nav-actions">
          <button className="detail-btn-back" onClick={onBack}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            <span>Projects</span>
          </button>

          <div className="detail-breadcrumb">
            <span>Portfolio</span>
            <span>/</span>
            <span>{categoryLabel || 'UX / UI Design'}</span>
            <span>/</span>
            <span className="active-crumb">{project.title}</span>
          </div>
        </div>

        <div className="detail-top-links">
          <button
            className="detail-action-btn"
            onClick={() => alert(`Launching live prototype for ${project.title}...`)}
          >
            <span>Live Prototype</span>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </div>
      </header>

      {/* Main Content Body */}
      <main className="detail-content">
        {/* Hero Area */}
        <section className="detail-hero">
          <span className="detail-category-tag">{categoryLabel || 'UI / UX Design Case Study'}</span>
          <h1 className="detail-title">{project.title}</h1>
          <p className="detail-subtitle">
            {project.description || 'A comprehensive product design case study focusing on end-to-end user research, wireframing, interactive prototyping, and frontend implementation.'}
          </p>
        </section>

        {/* Project Meta Bar (AI pill style) */}
        <div className="detail-meta-bar">
          <div className="detail-meta-item">
            <span className="detail-meta-label">Role</span>
            <span className="detail-meta-val">Lead Product Designer</span>
          </div>
          <div className="detail-meta-item">
            <span className="detail-meta-label">Timeline</span>
            <span className="detail-meta-val">8 Weeks (Q1 2026)</span>
          </div>
          <div className="detail-meta-item">
            <span className="detail-meta-label">Tools</span>
            <span className="detail-meta-val">Figma, React, Motion</span>
          </div>
          <div className="detail-meta-item">
            <span className="detail-meta-label">Platform</span>
            <span className="detail-meta-val">iOS, Android, Web</span>
          </div>
        </div>

        {/* Hero Showcase Preview */}
        <div className="detail-hero-showcase">
          {project.image ? (
            <img src={project.image} alt={project.title} />
          ) : (
            <div className="detail-showcase-fallback">
              <h3>{project.title} Showcase</h3>
              <p>High-fidelity UI mockups & interactive prototype screen</p>
            </div>
          )}
        </div>

        {/* Problem & Solution Cards */}
        <div className="detail-split-section">
          <div className="detail-info-card">
            <div className="detail-card-header">
              <span>🎯</span>
              <span>The Challenge & Problem</span>
            </div>
            <p>
              Users frequently struggle with rigid long-term fitness memberships, fragmented booking experiences, and lack of personalized diet insights that fit into busy everyday schedules.
            </p>
          </div>

          <div className="detail-info-card">
            <div className="detail-card-header">
              <span>💡</span>
              <span>The Solution & Strategy</span>
            </div>
            <p>
              Designed a frictionless, on-demand platform enabling users to discover nearby fitness centers, book flexible day passes in seconds, and access customized AI-driven diet recommendations.
            </p>
          </div>
        </div>

        {/* Key Features Section */}
        <div>
          <h3 className="detail-section-title">
            <span>✨</span>
            <span>Key Features & User Flow</span>
          </h3>

          <div className="detail-features-grid">
            <div className="detail-feature-card">
              <div className="detail-feature-icon">📍</div>
              <h4>Nearby Gym Discovery</h4>
              <p>Real-time geolocation map search with verified trainer reviews and amenities filters.</p>
            </div>

            <div className="detail-feature-card">
              <div className="detail-feature-icon">⚡</div>
              <h4>1-Click Daily Passes</h4>
              <p>Instant QR code check-in with zero subscription lock-in and seamless digital payments.</p>
            </div>

            <div className="detail-feature-card">
              <div className="detail-feature-icon">🥗</div>
              <h4>AI Diet Planner</h4>
              <p>Personalized macro calculation and daily meal plans tailored to individual fitness goals.</p>
            </div>
          </div>
        </div>

        {/* Design System & Color Palette */}
        <div>
          <h3 className="detail-section-title">
            <span>🎨</span>
            <span>Design System & Color Tokens</span>
          </h3>

          <div className="detail-palette-row">
            <div className="detail-color-swatch">
              <div className="swatch-box" style={{ background: '#252525' }} />
              <span className="swatch-code">#252525 Primary Dark</span>
            </div>
            <div className="detail-color-swatch">
              <div className="swatch-box" style={{ background: '#584CFF' }} />
              <span className="swatch-code">#584CFF Accent Blue</span>
            </div>
            <div className="detail-color-swatch">
              <div className="swatch-box" style={{ background: '#AFAEF0' }} />
              <span className="swatch-code">#AFAEF0 Lavender Glow</span>
            </div>
            <div className="detail-color-swatch">
              <div className="swatch-box" style={{ background: '#2B2B2B' }} />
              <span className="swatch-code">#2B2B2B Card Surface</span>
            </div>
          </div>
        </div>

        {/* Footer Navigation */}
        <footer className="detail-footer-nav">
          <button className="detail-nav-project-btn" onClick={onBack}>
            <span>← Back to All Projects</span>
          </button>

          <button
            className="detail-nav-project-btn"
            style={{ background: '#584CFF', borderColor: '#584CFF', color: '#fff' }}
            onClick={() => {
              if (onNavigateProject) onNavigateProject('next')
              else onBack()
            }}
          >
            <span>Next Project →</span>
          </button>
        </footer>
      </main>
    </div>
  )
}
