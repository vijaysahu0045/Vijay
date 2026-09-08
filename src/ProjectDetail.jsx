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

      {/* Top Sticky Header Bar */}
      <header className="detail-topbar">
        <div className="detail-nav-actions">
          <button className="detail-btn-back" onClick={onBack} title="Back to Projects">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
          </button>
        </div>

        <div className="detail-top-links">
          <button
            className="detail-action-btn"
            onClick={() => alert(`Launching live interactive prototype for ${project.title}...`)}
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
        {/* Hero Header Area */}
        <section className="detail-hero">
          <span className="detail-category-tag">{categoryLabel || 'UI / UX Design Case Study'}</span>
          <h1 className="detail-title">{project.title}</h1>
          <p className="detail-subtitle">
            {project.description || 'An end-to-end digital product design case study focusing on user research, intuitive user flows, custom design systems, and frontend implementation.'}
          </p>
        </section>

        {/* Project Meta Metrics Bar */}
        <div className="detail-meta-bar">
          <div className="detail-meta-item">
            <span className="detail-meta-label">Role</span>
            <span className="detail-meta-val">Lead UI/UX &amp; Product Designer</span>
          </div>
          <div className="detail-meta-item">
            <span className="detail-meta-label">Timeline</span>
            <span className="detail-meta-val">6 Weeks (Design to Handoff)</span>
          </div>
          <div className="detail-meta-item">
            <span className="detail-meta-label">Tools</span>
            <span className="detail-meta-val">Figma, React, Framer, Tokens</span>
          </div>
          <div className="detail-meta-item">
            <span className="detail-meta-label">Platform</span>
            <span className="detail-meta-val">iOS, Android, Web App</span>
          </div>
        </div>

        {/* Hero Showcase Preview Image */}
        <div className="detail-hero-showcase">
          {project.image ? (
            <img src={project.image} alt={project.title} />
          ) : (
            <div className="detail-showcase-fallback">
              <div className="mock-badge">High Fidelity Preview</div>
              <h3>{project.title} UI Experience</h3>
              <p>Clean modern interface with fluid micro-interactions and dark mode support</p>
            </div>
          )}
        </div>

        {/* Project Overview & Goals */}
        <div className="detail-section-block">
          <h3 className="detail-section-title">
            <span>📌</span>
            <span>Project Overview</span>
          </h3>
          <p className="detail-paragraph">
            The objective of <strong>{project.title}</strong> was to eliminate friction in modern digital workflows by crafting an intuitive, visually striking interface that delivers measurable real-world impact. We worked iteratively through user interviews, wireframing, high-fidelity prototypes, and component design tokens.
          </p>
        </div>

        {/* Problem & Solution Cards (2 Columns) */}
        <div className="detail-split-section">
          <div className="detail-info-card">
            <div className="detail-card-header">
              <span>🎯</span>
              <span>The Problem &amp; Friction</span>
            </div>
            <p>
              Users frequently encounter cluttered dashboards, confusing navigation architecture, and rigid lock-in subscription models that result in steep drop-off rates and user fatigue.
            </p>
          </div>

          <div className="detail-info-card">
            <div className="detail-card-header">
              <span>💡</span>
              <span>The Strategy &amp; Solution</span>
            </div>
            <p>
              Engineered a streamlined, component-driven UI with single-tap actions, transparent daily pass bookings, and AI-accelerated recommendations that adapt in real time to user habits.
            </p>
          </div>
        </div>

        {/* User Research & Key Insights */}
        <div className="detail-section-block">
          <h3 className="detail-section-title">
            <span>🔍</span>
            <span>User Research &amp; Insights</span>
          </h3>

          <div className="detail-insights-grid">
            <div className="detail-insight-card">
              <span className="insight-num">01</span>
              <h4>Speed &amp; Accessibility</h4>
              <p>78% of tested users wanted to complete key actions in under 3 clicks without mandatory account setup upfront.</p>
            </div>

            <div className="detail-insight-card">
              <span className="insight-num">02</span>
              <h4>Visual Clarity &amp; Hierarchy</h4>
              <p>Reduced cognitive overload by implementing clean cards, subtle elevation shadows, and high contrast typography.</p>
            </div>

            <div className="detail-insight-card">
              <span className="insight-num">03</span>
              <h4>Real-time Feedback</h4>
              <p>Micro-interactions and toast notifications increased user confidence and task completion rates by 42%.</p>
            </div>
          </div>
        </div>

        {/* Key Features & Experience */}
        <div className="detail-section-block">
          <h3 className="detail-section-title">
            <span>✨</span>
            <span>Key Features &amp; User Flow</span>
          </h3>

          <div className="detail-features-grid">
            <div className="detail-feature-card">
              <div className="detail-feature-icon">📍</div>
              <h4>Smart Discovery &amp; Filters</h4>
              <p>Interactive location search with instant filters for amenities, verified ratings, and pricing.</p>
            </div>

            <div className="detail-feature-card">
              <div className="detail-feature-icon">⚡</div>
              <h4>1-Tap Instant Booking</h4>
              <p>Frictionless digital check-in with dynamic QR passes and zero hidden platform fees.</p>
            </div>

            <div className="detail-feature-card">
              <div className="detail-feature-icon">🥗</div>
              <h4>AI-Powered Analytics</h4>
              <p>Personalized insights and daily tailored recommendations that adjust as user activity evolves.</p>
            </div>

            <div className="detail-feature-card">
              <div className="detail-feature-icon">🌗</div>
              <h4>Adaptive Dark Theme</h4>
              <p>Precision-crafted dark mode with accessible contrast ratios and eye-friendly color tokens.</p>
            </div>

            <div className="detail-feature-card">
              <div className="detail-feature-icon">📱</div>
              <h4>Responsive Micro-interactions</h4>
              <p>Smooth spring physics animations for button clicks, card expansions, and screen transitions.</p>
            </div>

            <div className="detail-feature-card">
              <div className="detail-feature-icon">🔒</div>
              <h4>Secure Authentication</h4>
              <p>Passwordless biometric sign-in and encrypted payment integrations for frictionless checkout.</p>
            </div>
          </div>
        </div>

        {/* Design System & Color Tokens */}
        <div className="detail-section-block">
          <h3 className="detail-section-title">
            <span>🎨</span>
            <span>Design Tokens &amp; Palette</span>
          </h3>

          <div className="detail-palette-row">
            <div className="detail-color-swatch">
              <div className="swatch-box" style={{ background: '#18181D' }} />
              <span className="swatch-code">#18181D Background</span>
            </div>
            <div className="detail-color-swatch">
              <div className="swatch-box" style={{ background: '#6366F1' }} />
              <span className="swatch-code">#6366F1 Brand Purple</span>
            </div>
            <div className="detail-color-swatch">
              <div className="swatch-box" style={{ background: '#A78BFA' }} />
              <span className="swatch-code">#A78BFA Lavender Glow</span>
            </div>
            <div className="detail-color-swatch">
              <div className="swatch-box" style={{ background: '#25252E' }} />
              <span className="swatch-code">#25252E Card Surface</span>
            </div>
            <div className="detail-color-swatch">
              <div className="swatch-box" style={{ background: '#10B981' }} />
              <span className="swatch-code">#10B981 Success Teal</span>
            </div>
          </div>
        </div>

        {/* Results & Key Impact */}
        <div className="detail-section-block">
          <h3 className="detail-section-title">
            <span>🚀</span>
            <span>Results &amp; Impact</span>
          </h3>

          <div className="detail-stats-row">
            <div className="stat-box">
              <span className="stat-val">+45%</span>
              <span className="stat-lbl">Conversion Rate</span>
            </div>
            <div className="stat-box">
              <span className="stat-val">4.9★</span>
              <span className="stat-lbl">User Satisfaction</span>
            </div>
            <div className="stat-box">
              <span className="stat-val">&lt; 1.2s</span>
              <span className="stat-lbl">Avg. Interaction Speed</span>
            </div>
            <div className="stat-box">
              <span className="stat-val">25k+</span>
              <span className="stat-lbl">Active Users Reached</span>
            </div>
          </div>
        </div>

        {/* Bottom Pagination & Footer Navigation */}
        <footer className="detail-footer-nav">
          <button className="detail-nav-project-btn" onClick={onBack}>
            <span>← Back to All Projects</span>
          </button>

          <button
            className="detail-nav-project-btn"
            style={{ background: '#6366F1', borderColor: '#6366F1', color: '#fff' }}
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
