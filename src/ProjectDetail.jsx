import React, { useState, useEffect } from 'react'
import './ProjectDetail.css'
import bgImage from './assets/projects-bg.png'
import screen1 from './assets/fymble-screen-1.png'
import screen2 from './assets/fymble-screen-2.png'
import screen3 from './assets/fymble-screen-3.png'
import screen4 from './assets/fymble-screen-4.png'
import screen5 from './assets/fymble-screen-5.png'

export default function ProjectDetail({ project, categoryLabel, onBack, onNavigateProject }) {
  if (!project) return null

  const [activeStep, setActiveStep] = useState(0)
  const [currentScreenIdx, setCurrentScreenIdx] = useState(0)
  const [isBlackout, setIsBlackout] = useState(false)
  const [blackoutMsg, setBlackoutMsg] = useState('')
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false)
  const [isFigmaLoading, setIsFigmaLoading] = useState(true)

  // 1. Full Image Artwork Project (renders exact high-res image showcase)
  const isImageArtworkProject = Boolean(project.image && project.id !== 1)

  // 2. Fymble Multi-Platform Flagship UX/UI Case Study (renders interactive 3D phone ecosystem)
  const isFymbleFlagshipCaseStudy = project.id === 1

  // Dynamic list of UI Screens displayed inside the photorealistic iPhone 16 Pro
  const fymbleScreens = [
    { id: 1, title: 'Gym Discovery & Passes', image: screen1, tag: 'DISCOVERY' },
    { id: 2, title: 'Smart Food Scanner', image: screen2, tag: 'AI VISION' },
    { id: 3, title: 'Fitness Class Booking', image: screen3, tag: 'CLASSES' },
    { id: 4, title: 'Diet & Nutrition Recipes', image: screen4, tag: 'NUTRITION' },
    { id: 5, title: 'Refer & Daily Rewards', image: screen5, tag: 'REWARDS' },
  ]

  // Auto-scroll slideshow timer for iPhone showcase (every 3.5s)
  useEffect(() => {
    if (!isFymbleFlagshipCaseStudy || isAutoplayPaused) return

    const timer = setInterval(() => {
      setCurrentScreenIdx((prev) => (prev + 1) % fymbleScreens.length)
    }, 3500)

    return () => clearInterval(timer)
  }, [isFymbleFlagshipCaseStudy, isAutoplayPaused, fymbleScreens.length])

  // =========================================================================
  // ANTI-DOWNLOAD, ANTI-RIGHT-CLICK & ANTI-SCREENSHOT BLACKOUT PROTECTION
  // =========================================================================
  useEffect(() => {
    let blackoutTimer = null

    const triggerBlackout = (reason) => {
      setIsBlackout(true)
      setBlackoutMsg(reason)
      if (blackoutTimer) clearTimeout(blackoutTimer)
      blackoutTimer = setTimeout(() => {
        setIsBlackout(false)
      }, 2200)
    }

    // 1. Block right click / context menu
    const handleContextMenu = (e) => {
      e.preventDefault()
      return false
    }

    // 2. Keyboard shortcut prevention (PrintScreen, Snipping tool, DevTools, Save, Print)
    const handleKeyDown = (e) => {
      // PrintScreen key pressed
      if (e.key === 'PrintScreen' || e.code === 'PrintScreen') {
        e.preventDefault()
        triggerBlackout('Screenshot Key Intercepted')
        try {
          navigator.clipboard?.writeText('🔒 Protected Design Asset — © Vijay Sahu')
        } catch (_) {}
      }

      // Block Ctrl+S (Save), Ctrl+P (Print), Ctrl+U (Source)
      if ((e.ctrlKey || e.metaKey) && ['s', 'p', 'u', 'S', 'P', 'U'].includes(e.key)) {
        e.preventDefault()
        triggerBlackout('Page Save / Print Restricted')
      }

      // Block Ctrl+Shift+I / Ctrl+Shift+C / Ctrl+Shift+J (DevTools) / Win+Shift+S (Snipping)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && ['I', 'i', 'C', 'c', 'J', 'j', 'S', 's'].includes(e.key)) {
        e.preventDefault()
        triggerBlackout('Developer Tools / Screen Snip Restricted')
      }

      // Block F12
      if (e.key === 'F12') {
        e.preventDefault()
        triggerBlackout('Developer Inspection Restricted')
      }
    }

    const handleKeyUp = (e) => {
      if (e.key === 'PrintScreen' || e.code === 'PrintScreen') {
        triggerBlackout('Screenshot Attempt Blocked')
      }
    }

    window.addEventListener('contextmenu', handleContextMenu)
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
      if (blackoutTimer) clearTimeout(blackoutTimer)
    }
  }, [])

  return (
    <div
      className="detail-container"
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* =====================================================================
          SECURITY BLACKOUT SCREEN (Anti-Screenshot / Snipping Protection)
          ===================================================================== */}
      {isBlackout && (
        <div className="security-blackout-shield">
          <div className="security-shield-card">
            <div className="security-shield-icon">🔒</div>
            <h3 className="security-shield-title">Protected Creative Work</h3>
            <p className="security-shield-desc">
              {blackoutMsg || 'Screenshots, screen recordings, and asset downloads are restricted to protect intellectual property.'}
            </p>
            <span className="security-shield-badge">© 2026 Vijay Sahu • Design Protected</span>
          </div>
        </div>
      )}

      {/* Background Image Layer */}
      <div className="detail-bg-image">
        <img src={bgImage} alt="" draggable="false" />
      </div>

      {/* Smooth Moving Purple Ambient Orb */}
      <div className="page-ambient-glow-layer">
        <div className="page-moving-purple-orb" />
      </div>

      {/* Top Header Navigation */}
      <header className="detail-topbar">
        <button className="detail-btn-back" onClick={onBack} title="Back to Projects">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
          <span>Back</span>
        </button>

        <button
          className="detail-action-btn"
          onClick={() => {
            if (isImageArtworkProject) {
              setIsLightboxOpen(true)
            } else {
              const el = document.getElementById('figma-workbench-section')
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' })
              }
            }
          }}
        >
          <span>{isImageArtworkProject ? 'Inspect Artwork' : 'View Prototype'}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </header>

      {/* =====================================================================
          RENDER BRANCH 1: PURE FULL-SCREEN IMAGE VIEW ONLY (NO TEXT/CONTENT)
          ===================================================================== */}
      {isImageArtworkProject ? (
        <main className="detail-content pure-image-viewport">
          <div className="pure-image-stage">
            <div className="pure-image-glow" />

            <div className="pure-image-container">
              <img
                src={project.image}
                alt={project.title || 'Artwork'}
                className="pure-main-img"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
              />

              {/* Invisible Anti-Drag & Anti-Download Protection Shield */}
              <div
                className="pure-protection-shield"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              >
                <div className="pure-shield-watermark">
                  <span>🔒 Designed by Vijay Sahu • Protected Work</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      ) : isFymbleFlagshipCaseStudy ? (
        /* =====================================================================
            RENDER BRANCH 2: FYMBLE FLAGSHIP 3D PHONE ECOSYSTEM CASE STUDY
            ===================================================================== */
        <main className="detail-content">
        {/* =========================================================================
            SECTION 1: HERO & 3D PHONE MOCKUPS
            ========================================================================= */}
        <section className="case-hero-section">
          <div className="case-hero-left">
            <div className="case-category-label">
              <span>{project.title || 'Fymble'}</span>
              <span className="dot-sep">•</span>
              <span>{categoryLabel || 'Product Design'}</span>
            </div>

            <h1 className="case-hero-title">
              Making fitness easier to start — <br className="hide-mobile" />
              <span className="case-hero-title-gradient">and easier to stick with.</span>
            </h1>

            <p className="case-hero-subtitle">
              {project.description || 'A flexible fitness marketplace with an AI health coach that keeps you consistent.'}
            </p>

            <div className="case-meta-row">
              <div className="case-meta-pill">
                <span className="meta-icon">👤</span>
                <div className="meta-text">
                  <span className="meta-lbl">Role</span>
                  <span className="meta-val">UI/UX Designer</span>
                </div>
              </div>

              <div className="case-meta-pill">
                <span className="meta-icon">📅</span>
                <div className="meta-text">
                  <span className="meta-lbl">Timeline</span>
                  <span className="meta-val">May – Jul 2024</span>
                </div>
              </div>

              <div className="case-meta-pill">
                <span className="meta-icon">📱</span>
                <div className="meta-text">
                  <span className="meta-lbl">Platform</span>
                  <span className="meta-val">iOS &amp; Android</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Multi-Device Showcase using Realistic iPhone 16 Pro Hardware */}
          <div className="case-hero-right">
            <div className="phones-hero-showcase">
              {/* Left Phone (Fitness Class Selection) */}
              <div className="mock-phone phone-left">
                <div className="hero-iphone-chassis">
                  <div className="hero-iphone-viewport">
                    <div className="hero-dynamic-island" />
                    <img
                      src={screen3}
                      alt="Fitness Class Selection"
                      className="hero-phone-screen-img"
                      draggable="false"
                      onContextMenu={(e) => e.preventDefault()}
                    />
                    <div className="hero-phone-glare" />
                    <div className="hero-home-indicator" />
                  </div>
                </div>
              </div>

              {/* Center Phone (Gym Discovery & Passes) */}
              <div className="mock-phone phone-center">
                <div className="hero-iphone-chassis">
                  <div className="hero-iphone-viewport">
                    <div className="hero-dynamic-island" />
                    <img
                      src={screen1}
                      alt="Gym Discovery & Passes"
                      className="hero-phone-screen-img"
                      draggable="false"
                      onContextMenu={(e) => e.preventDefault()}
                    />
                    <div className="hero-phone-glare" />
                    <div className="hero-home-indicator" />
                  </div>
                </div>
              </div>

              {/* Right Phone (Food Scanner & AI Nutrition) */}
              <div className="mock-phone phone-right">
                <div className="hero-iphone-chassis">
                  <div className="hero-iphone-viewport">
                    <div className="hero-dynamic-island" />
                    <img
                      src={screen2}
                      alt="Food Scanner & AI Nutrition"
                      className="hero-phone-screen-img"
                      draggable="false"
                      onContextMenu={(e) => e.preventDefault()}
                    />
                    <div className="hero-phone-glare" />
                    <div className="hero-home-indicator" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: INTERACTIVE IPHONE MOBILE SCREENS SHOWCASE SLIDER
            ========================================================================= */}
        <section
          className="case-section-container iphone-showcase-container"
          onMouseEnter={() => setIsAutoplayPaused(true)}
          onMouseLeave={() => setIsAutoplayPaused(false)}
        >
          <div className="case-section-head">
            <div className="showcase-header-badge-row">
              <span className="section-eyebrow eyebrow-purple">MOBILE APP SCREENS</span>
              <span className="autoplay-status-badge">
                <span className="live-dot" /> Auto-playing
              </span>
            </div>
            <h2 className="case-section-h2">Experience Fymble on iPhone 16 Pro.</h2>
            <p className="case-section-sub">
              Interactive high-fidelity screens designed for 250+ flows and 20K+ active users.
            </p>
          </div>

          <div className="iphone-slider-stage">
            <div className="iphone-ambient-glow" />

            {/* Left Prev Arrow Button */}
            <button
              className="iphone-slider-nav-btn prev"
              onClick={() => setCurrentScreenIdx((prev) => (prev > 0 ? prev - 1 : fymbleScreens.length - 1))}
              title="Previous Screen"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>

            {/* Photorealistic iPhone 16 Pro 3D Device Model */}
            <div className="iphone-device-wrap">
              {/* Hardware Side Buttons */}
              <div className="iphone-btn-action" />
              <div className="iphone-btn-volume-up" />
              <div className="iphone-btn-volume-down" />
              <div className="iphone-btn-power" />

              {/* Outer Titanium Chassis & Inner Screen Viewport */}
              <div className="iphone-chassis">
                {/* Screen Viewport */}
                <div className="iphone-screen-viewport">
                  {/* Dynamic Island Pill & Front Camera Lens */}
                  <div className="iphone-dynamic-island">
                    <div className="island-camera-lens" />
                    <div className="island-mic-indicator" />
                  </div>

                  {/* Status Bar */}
                  <div className="iphone-status-bar">
                    <span className="status-time">9:41</span>
                    <div className="status-icons">
                      <svg width="15" height="11" viewBox="0 0 18 12" fill="currentColor">
                        <path d="M1 9.5h2.5V12H1v-2.5zm4-3.5h2.5V12H5V6zm4-3.5h2.5V12H9V2.5zm4-2.5h2.5V12H13V0z"/>
                      </svg>
                      <svg width="14" height="11" viewBox="0 0 16 12" fill="currentColor">
                        <path d="M8 3.6c2.4 0 4.6 1 6.1 2.6l1.4-1.4C13.6 2.9 10.9 1.7 8 1.7 5.1 1.7 2.4 2.9.5 4.8l1.4 1.4C3.4 4.6 5.6 3.6 8 3.6zm0 3.7c1.4 0 2.7.6 3.6 1.6l1.4-1.4C11.8 6.3 10 5.4 8 5.4s-3.8.9-5 2.1l1.4 1.4c.9-1 2.2-1.6 3.6-1.6zm0 3.8c.8 0 1.5.3 2 1l1.4-1.4C10.5 9.8 9.3 9.2 8 9.2s-2.5.6-3.4 1.5L6 12.1c.5-.7 1.2-1 2-1z"/>
                      </svg>
                      <div className="status-battery">
                        <div className="battery-level" />
                      </div>
                    </div>
                  </div>

                  {/* Screen Content Artwork */}
                  {fymbleScreens[currentScreenIdx]?.image ? (
                    <img
                      src={fymbleScreens[currentScreenIdx].image}
                      alt={fymbleScreens[currentScreenIdx].title}
                      className="iphone-screen-artwork"
                      draggable="false"
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  ) : (
                    <div className="iphone-screen-ready-state">
                      <div className="ph-badge">{fymbleScreens[currentScreenIdx]?.tag || 'UI SCREEN'}</div>
                      <span className="ph-icon">✨</span>
                      <h4 className="ph-title">{fymbleScreens[currentScreenIdx]?.title || 'Screen Showcase'}</h4>
                      <p className="ph-desc">Upload your high-fidelity Figma UI screen to render inside this iPhone 16 Pro.</p>
                      <div className="ph-screen-guide-hint">
                        <span>📐 Optimal ratio: 9:19.5 (1179 × 2556 px)</span>
                      </div>
                    </div>
                  )}

                  {/* Glass Reflection Highlight & Glare */}
                  <div className="iphone-glass-glare" />

                  {/* Bottom Home Indicator Bar */}
                  <div className="iphone-home-indicator" />

                  {/* Anti-Drag & Anti-Save Shield */}
                  <div
                    className="iphone-screen-protection"
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                  />
                </div>
              </div>
            </div>

            {/* Right Next Arrow Button */}
            <button
              className="iphone-slider-nav-btn next"
              onClick={() => setCurrentScreenIdx((prev) => (prev < fymbleScreens.length - 1 ? prev + 1 : 0))}
              title="Next Screen"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>

          {/* Screen Navigation Selector Pills */}
          <div className="iphone-screen-selector-bar">
            {fymbleScreens.map((screen, idx) => (
              <button
                key={screen.id}
                className={`iphone-nav-tab-pill ${idx === currentScreenIdx ? 'active' : ''}`}
                onClick={() => setCurrentScreenIdx(idx)}
              >
                <span className="tab-idx">0{idx + 1}</span>
                <span className="tab-name">{screen.title}</span>
              </button>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: LIVE INTERACTIVE FIGMA CANVAS WORKBENCH
            ========================================================================= */}
        <section id="figma-workbench-section" className="case-section-container figma-workbench-section">
          <div className="case-section-head">
            <div className="showcase-header-badge-row">
              <span className="section-eyebrow eyebrow-purple">FIGMA WORKBENCH</span>
              <span className="figma-live-badge">
                <svg width="12" height="12" viewBox="0 0 38 57" fill="none">
                  <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
                  <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
                  <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
                  <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
                  <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
                </svg>
                <span>Live Canvas</span>
              </span>
            </div>
            <h2 className="case-section-h2">Explore Complete Design in Figma.</h2>
            <p className="case-section-sub">
              Directly pan, zoom in/out, and inspect user flows, components, and wireframes inside the canvas below.
            </p>
          </div>

          {/* Figma Browser Frame */}
          <div className="figma-embed-frame">
            <div className="figma-frame-topbar">
              <div className="figma-window-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>

              <div className="figma-file-title-pill">
                <span className="figma-file-icon">🎨</span>
                <span className="figma-file-name">Fymble Design System • Figma Canvas</span>
              </div>

              <div className="figma-hint-pill">
                <span>🔍 Pinch / Scroll to Zoom • Drag to Pan</span>
              </div>
            </div>

            {/* Embedded Live Figma Viewer */}
            <div className="figma-iframe-container">
              {/* Dark Theme Figma Loading State Overlay */}
              {isFigmaLoading && (
                <div className="figma-loading-overlay">
                  <div className="figma-loader-spinner-wrap">
                    <div className="figma-loader-spinner" />
                    <div className="figma-loader-icon-center">
                      <svg width="28" height="28" viewBox="0 0 38 57" fill="none">
                        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
                        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
                        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
                        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
                        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
                      </svg>
                    </div>
                  </div>
                  <div className="figma-loading-text-group">
                    <h4 className="figma-loading-title">Loading Figma Canvas</h4>
                    <p className="figma-loading-subtitle">
                      Explore full design system and components live.
                    </p>
                    <button
                      className="figma-force-enter-btn"
                      onClick={() => setIsFigmaLoading(false)}
                    >
                      <span>Launch Interactive Canvas ↗</span>
                    </button>
                  </div>
                </div>
              )}

              <iframe
                title="Figma Live Canvas Embed"
                src="https://www.figma.com/embed?embed_host=share&theme=dark&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2F5CszbCF6Lf5VfMKI1iyMEh%2FPORTFOLIO%3Fnode-id%3D0-1%26t%3DVfQJiW2c87ssCIl9-1"
                allowFullScreen
                className={`figma-iframe ${isFigmaLoading ? 'loading' : 'ready'}`}
                onLoad={() => {
                  setTimeout(() => setIsFigmaLoading(false), 7000)
                }}
              />
            </div>
          </div>
        </section>

          {/* Footer Navigation */}
          <footer className="case-footer-nav">
            <button className="case-nav-btn" onClick={onBack}>
              <span>← Back to All Projects</span>
            </button>

            <button
              className="case-nav-btn primary"
              onClick={() => {
                if (onNavigateProject) onNavigateProject()
                else onBack()
              }}
            >
              <span>Next Project →</span>
            </button>
          </footer>
        </main>
      ) : (
        /* =====================================================================
            RENDER BRANCH 3: GENERAL PROJECT OVERVIEW & ARCHITECTURE SPECS
            ===================================================================== */
        <main className="detail-content graphic-showcase-main">
          <section className="graphic-hero-layout">
            <div className="graphic-info-col">
              <div className="case-category-label">
                <span>{project.title}</span>
                <span className="dot-sep">•</span>
                <span>{categoryLabel || project.category || 'Product Design'}</span>
              </div>

              <h1 className="graphic-hero-title">
                {project.title}
              </h1>

              <p className="case-hero-subtitle">
                {project.description || 'Comprehensive design system, responsive UI architecture, and high-fidelity prototypes.'}
              </p>

              <div className="case-meta-row graphic-meta-grid">
                <div className="case-meta-pill">
                  <span className="meta-icon">👤</span>
                  <div className="meta-text">
                    <span className="meta-lbl">Role</span>
                    <span className="meta-val">Lead Product Designer</span>
                  </div>
                </div>

                <div className="case-meta-pill">
                  <span className="meta-icon">🏷️</span>
                  <div className="meta-text">
                    <span className="meta-lbl">Tag</span>
                    <span className="meta-val">{project.tag || project.category}</span>
                  </div>
                </div>

                <div className="case-meta-pill">
                  <span className="meta-icon">🚀</span>
                  <div className="meta-text">
                    <span className="meta-lbl">Status</span>
                    <span className="meta-val">Designed &amp; Prototyped</span>
                  </div>
                </div>

                <div className="case-meta-pill">
                  <span className="meta-icon">⚡</span>
                  <div className="meta-text">
                    <span className="meta-lbl">Tools</span>
                    <span className="meta-val">Figma, Next.js, React</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="graphic-artwork-col">
              <div className="artwork-glass-frame general-mock-frame">
                <div className={`general-banner-mock ${project.theme || 'theme-purple'}`}>
                  <span className="general-mock-icon">{project.icon || '✨'}</span>
                  <span className="general-mock-tag">{project.tag || project.category}</span>
                  <h3 className="general-mock-title">{project.title}</h3>
                </div>
                <div className="artwork-frame-bar">
                  <span className="artwork-frame-title">{project.title}</span>
                  <span className="lb-shield-tag">Case Study In Production</span>
                </div>
              </div>
            </div>
          </section>

          {/* Core Highlights */}
          <section className="case-section-container">
            <div className="case-section-head">
              <span className="section-eyebrow eyebrow-purple">KEY ARCHITECTURE</span>
              <h2 className="case-section-h2">Design precision engineered for performance.</h2>
            </div>

            <div className="problem-cards-grid">
              <div className="problem-card">
                <div className="card-top-icon">📐</div>
                <h3>1. Cohesive Design System</h3>
                <p>Built with accessible color contrast tokens, fluid typography scaling, and standard 8pt spatial grid.</p>
              </div>

              <div className="problem-card">
                <div className="card-top-icon">⚡</div>
                <h3>2. Seamless User Flows</h3>
                <p>Minimal click paths with predictive micro-interactions and instant feedback states.</p>
              </div>

              <div className="problem-card">
                <div className="card-top-icon">📱</div>
                <h3>3. Multi-Device Adaptability</h3>
                <p>Optimized layouts crafted for flawless responsive rendering across mobile, tablet, and desktop viewports.</p>
              </div>
            </div>
          </section>

          {/* Footer Navigation */}
          <footer className="case-footer-nav">
            <button className="case-nav-btn" onClick={onBack}>
              <span>← Back to All Projects</span>
            </button>

            <button
              className="case-nav-btn primary"
              onClick={() => {
                if (onNavigateProject) onNavigateProject()
                else onBack()
              }}
            >
              <span>Next Project →</span>
            </button>
          </footer>
        </main>
      )}

      {/* =====================================================================
          LIGHTBOX MODAL FOR FULLSCREEN ARTWORK INSPECT
          ===================================================================== */}
      {isLightboxOpen && isImageArtworkProject && (
        <div className="artwork-lightbox-modal" onClick={() => setIsLightboxOpen(false)}>
          <div className="lightbox-content-box" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close-btn"
              onClick={() => setIsLightboxOpen(false)}
              title="Close"
            >
              ✕
            </button>

            <div className="lightbox-img-shield-wrap">
              <img
                src={project.image}
                alt={project.title}
                className="lightbox-full-img"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
              />
              <div
                className="artwork-protection-shield"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>

            <div className="lightbox-caption-bar">
              <div className="lb-title-group">
                <span className="lb-title">{project.title}</span>
                <span className="lb-sub">Visual &amp; Graphic Design • Vijay Sahu</span>
              </div>
              <span className="lb-shield-tag">🔒 Right-Click &amp; Downloads Disabled</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
