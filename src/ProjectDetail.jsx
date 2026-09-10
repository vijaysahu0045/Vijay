import React, { useState, useEffect } from 'react'
import './ProjectDetail.css'
import bgImage from './assets/projects-bg.png'
import iphoneFrameImg from './assets/iphone-frame.png'

export default function ProjectDetail({ project, categoryLabel, onBack, onNavigateProject }) {
  if (!project) return null

  const [activeStep, setActiveStep] = useState(0)
  const [currentScreenIdx, setCurrentScreenIdx] = useState(0)
  const [isBlackout, setIsBlackout] = useState(false)
  const [blackoutMsg, setBlackoutMsg] = useState('')
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)

  // 1. Full Image Artwork Project (renders exact high-res image showcase)
  const isImageArtworkProject = Boolean(project.image && project.id !== 1)

  // 2. Fymble Multi-Platform Flagship UX/UI Case Study (renders interactive 3D phone ecosystem)
  const isFymbleFlagshipCaseStudy = project.id === 1

  // Dynamic list of UI Screens to be displayed inside the realistic iPhone
  const fymbleScreens = [
    { id: 1, title: 'Explore & Gym Discovery', image: null, tag: 'DISCOVERY' },
    { id: 2, title: 'Choose Flexible Pass', image: null, tag: 'PASSES' },
    { id: 3, title: 'One-Click Booking', image: null, tag: 'CHECKOUT' },
    { id: 4, title: 'Workout & Health Tracker', image: null, tag: 'ANALYTICS' },
    { id: 5, title: 'Kyra AI Health Coach', image: null, tag: 'AI ASSISTANT' },
  ]

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
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>

        <div className="detail-topbar-center-tag">
          <span className="shield-lock-icon">🔒</span>
          <span>Protected Portfolio Asset</span>
        </div>

        <button
          className="detail-action-btn"
          onClick={() => {
            if (isImageArtworkProject) {
              setIsLightboxOpen(true)
            } else {
              alert(`Launching live interactive prototype for ${project.title}...`)
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
              and easier to stick with.
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

          {/* Right Column: 3D Multi-Device Showcase */}
          <div className="case-hero-right">
            <div className="phones-hero-showcase">
              {/* Left Phone (Passes) */}
              <div className="mock-phone phone-left">
                <div className="phone-screen">
                  <div className="phone-notch" />
                  <div className="phone-inner-content">
                    <div className="mock-header">
                      <span className="mini-title">Choose your pass</span>
                      <span className="mini-sub">Pick what works for you</span>
                    </div>

                    <div className="mini-pass-card">
                      <div className="pass-top">
                        <span className="pass-name">Daily Pass</span>
                        <span className="pass-price">₹99 <small>/day</small></span>
                      </div>
                      <span className="pass-note">Valid for 24 hours</span>
                    </div>

                    <div className="mini-pass-card featured">
                      <span className="mini-badge-hot">Most Popular</span>
                      <div className="pass-top">
                        <span className="pass-name">Weekly Pass</span>
                        <span className="pass-price">₹499 <small>/week</small></span>
                      </div>
                      <span className="pass-note">7 days access</span>
                    </div>

                    <div className="mini-pass-card">
                      <div className="pass-top">
                        <span className="pass-name">14 Day Pass</span>
                        <span className="pass-price">₹899 <small>/14 days</small></span>
                      </div>
                      <span className="pass-note">Double validity</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Phone (Featured Home / Gym Discovery) */}
              <div className="mock-phone phone-center">
                <div className="phone-screen">
                  <div className="phone-notch">
                    <div className="dynamic-island" />
                  </div>
                  <div className="phone-inner-content">
                    <div className="phone-top-bar">
                      <span className="location-pin">📍 Mumbai, India ▾</span>
                      <span className="bell-icon">🔔</span>
                    </div>

                    <div className="phone-search-input">
                      <span>🔍 Search gyms, studios, classes...</span>
                    </div>

                    <div className="phone-category-pills">
                      <span className="cat-pill active">🏋️ Gym</span>
                      <span className="cat-pill">🥊 Studio</span>
                      <span className="cat-pill">🔥 CrossFit</span>
                      <span className="cat-pill">🧘 Yoga</span>
                    </div>

                    <div className="phone-featured-gym">
                      <div className="gym-img-mock">
                        <span className="gym-badge">Open Now</span>
                        <span className="gym-heart">❤️</span>
                      </div>
                      <div className="gym-info">
                        <h4>The Strength Co.</h4>
                        <div className="gym-sub">
                          <span className="rating">⭐ 4.8</span>
                          <span>• 1.2 km • Andheri West</span>
                        </div>
                        <span className="gym-price">₹99 / day onwards</span>
                      </div>
                    </div>

                    <div className="phone-bottom-nav">
                      <span className="nav-item active">🏠 Home</span>
                      <span className="nav-item">🔍 Explore</span>
                      <span className="nav-item">🎫 Passes</span>
                      <span className="nav-item">👤 Profile</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Phone (Kyra AI Coach) */}
              <div className="mock-phone phone-right">
                <div className="phone-screen">
                  <div className="phone-notch" />
                  <div className="phone-inner-content">
                    <div className="ai-chat-header">
                      <div className="ai-avatar">🤖</div>
                      <div>
                        <h4>Kyra AI</h4>
                        <span className="status-online">● Online Health Coach</span>
                      </div>
                    </div>

                    <div className="ai-chat-bubble bot">
                      <p>Hey Vijay! 👋 How are you feeling today?</p>
                      <span className="time">Just now</span>
                    </div>

                    <div className="ai-chat-bubble user">
                      <p>A bit tired, didn't sleep well.</p>
                      <span className="time">1m ago</span>
                    </div>

                    <div className="ai-chat-bubble bot">
                      <p>Okay, let's adapt your plan. How about a light upper body workout today?</p>
                    </div>

                    <div className="ai-activity-card">
                      <div className="act-icon">💪</div>
                      <div>
                        <h5>Upper Body Activation</h5>
                        <span>25 mins • Very low fatigue</span>
                      </div>
                    </div>

                    <div className="ai-chat-input-bar">
                      <span>Ask anything...</span>
                      <span className="mic-btn">🎙️</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: INTERACTIVE IPHONE MOBILE SCREENS SHOWCASE SLIDER
            ========================================================================= */}
        <section className="case-section-container iphone-showcase-container">
          <div className="case-section-head">
            <span className="section-eyebrow eyebrow-purple">MOBILE APP SCREENS</span>
            <h2 className="case-section-h2">Experience Fymble on iPhone.</h2>
            <p className="case-section-sub">
              Explore core product flows designed for 250+ screens and 20K+ active users.
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

            {/* Realistic iPhone Device Frame */}
            <div className="iphone-device-wrap">
              <img
                src={iphoneFrameImg}
                alt="iPhone Device Frame"
                className="iphone-frame-img"
                draggable="false"
              />

              {/* Inside Screen Content Area */}
              <div className="iphone-screen-viewport">
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
                    <span className="ph-icon">📱</span>
                    <h4 className="ph-title">{fymbleScreens[currentScreenIdx]?.title || 'Screen Showcase'}</h4>
                    <p className="ph-desc">Ready for high-fidelity UI screens.</p>
                  </div>
                )}

                {/* Anti-Drag & Anti-Save Shield */}
                <div
                  className="iphone-screen-protection"
                  onContextMenu={(e) => e.preventDefault()}
                  onDragStart={(e) => e.preventDefault()}
                />
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
