import React, { useState, useEffect } from 'react'
import './FymbleCaseStudy12.css'
import bgImage from './assets/projects-bg.png'

// Actual Fymble Product Screen Assets
import screen1 from './assets/fymble-screen-1.png'
import screen2 from './assets/fymble-screen-2.png'
import screen3 from './assets/fymble-screen-3.png'
import screen5 from './assets/fymble-screen-5.png'
import foodScanner1 from './assets/food-scanner-screen-1.png'
import nutritionScreen3 from './assets/nutrition-screen-3.png'
import scopeHandShowcase from './assets/fymble-scope-hand-showcase.png'
import UserFlowTreeDiagram from './UserFlowTreeDiagram'

const SECTIONS_INDEX = [
  { num: '01', id: 'sec-01', label: 'Scope of Work' },
  { num: '02', id: 'sec-02', label: 'Strategy & Planning' },
  { num: '03', id: 'sec-03', label: 'Typography & Colors' },
  { num: '04', id: 'sec-04', label: 'User Research' },
  { num: '05', id: 'sec-05', label: 'Problem & Solution' },
  { num: '06', id: 'sec-06', label: 'User Persona' },
  { num: '07', id: 'sec-07', label: 'User Journey Map' },
  { num: '08', id: 'sec-08', label: 'User Flow' },
  { num: '09', id: 'sec-09', label: 'Grid System' },
  { num: '10', id: 'sec-10', label: 'Core Experience' },
  { num: '11', id: 'sec-11', label: 'User Testing Result' },
  { num: '12', id: 'sec-12', label: 'Results' }
]

export default function FymbleCaseStudy12({ onBack, onNavigateProject }) {
  const [activeNav, setActiveNav] = useState('sec-01')
  const [activePersonaTab, setActivePersonaTab] = useState('user')
  const [ufZoom, setUfZoom] = useState(1)
  const [isUfFullscreen, setIsUfFullscreen] = useState(false)
  const [ufModalZoom, setUfModalZoom] = useState(1.1)

  // Esc key listener and body lock for fullscreen User Flow modal
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setIsUfFullscreen(false)
      }
    }
    if (isUfFullscreen) {
      window.addEventListener('keydown', handleKeyDown)
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = ''
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
      document.body.style.overflow = ''
    }
  }, [isUfFullscreen])

  // Scroll spy
  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY + 180
      for (let i = SECTIONS_INDEX.length - 1; i >= 0; i--) {
        const el = document.getElementById(SECTIONS_INDEX[i].id)
        if (el && el.offsetTop <= scrollY) {
          setActiveNav(SECTIONS_INDEX[i].id)
          break
        }
      }
    }
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) {
      const top = el.getBoundingClientRect().top + window.scrollY - 70
      window.scrollTo({ top, behavior: 'smooth' })
    }
  }

  return (
    <div className="fymble-cs12-container">
      {/* Background Ambience */}
      <div className="cs12-bg-fixed">
        <img src={bgImage} alt="" />
      </div>
      <div className="page-ambient-glow-layer">
        <div className="page-moving-purple-orb" />
      </div>

      {/* Sticky Top Header Navigation */}
      <header className="cs12-topbar">
        <div className="cs12-topbar-left">
          <button className="cs12-back-btn" onClick={onBack} title="Back to Portfolio">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M15 18l-6-6 6-6"/>
            </svg>
            <span>Back</span>
          </button>
        </div>
      </header>

      {/* Main Long-Form Case Study Wrapper */}
      <main className="cs12-main-content">

        {/* ===================================================================
            SECTION 01: PROJECT OVERVIEW & EXECUTIVE HERO
            =================================================================== */}
        <section id="sec-01" className="cs12-section cs12-hero-section">
          <div className="cs12-section-badge">
            <span className="cs12-num-tag">NO. 01</span>
            <span className="cs12-section-name">PROJECT OVERVIEW</span>
          </div>

          <div className="cs12-hero-header">
            <h1 className="cs12-main-title">
              Fymble — <span className="highlight-purple">Redefining Fitness &amp; Health</span>
            </h1>
          </div>

          {/* Project Snapshot Grid */}
          <div className="cs12-meta-grid">
            <div className="cs12-meta-item">
              <span className="cs12-meta-label">ROLE</span>
              <strong className="cs12-meta-val">Lead Product Designer</strong>
            </div>
            <div className="cs12-meta-item">
              <span className="cs12-meta-label">SCOPE</span>
              <strong className="cs12-meta-val">End-to-End UX/UI &amp; AI UX</strong>
            </div>
            <div className="cs12-meta-item">
              <span className="cs12-meta-label">PLATFORMS</span>
              <strong className="cs12-meta-val">iOS, Android, Web &amp; B2B SaaS</strong>
            </div>
            <div className="cs12-meta-item">
              <span className="cs12-meta-label">LIVE APP</span>
              <a href="https://fymble.app" target="_blank" rel="noreferrer" className="cs12-live-link">
                fymble.app ↗
              </a>
            </div>
          </div>

          {/* =================================================================
              SCOPE OF WORK (STAGGERED 4-SPRINT WATERFALL TIMELINE)
              ================================================================= */}
          <div className="cs12-scope-of-work-card">
            <div className="cs12-scope-header-row">
              <div className="cs12-scope-title-col">
                <span className="cs12-scope-index">01</span>
                <h2 className="cs12-scope-title">Scope of work</h2>
              </div>
            </div>

            {/* Staggered 4-Sprint Waterfall Stepper */}
            <div className="cs12-sprint-waterfall-wrapper">
              <div className="cs12-sprint-grid">
                {/* Sprint 1: Research */}
                <div className="cs12-sprint-column sprint-col-1">
                  <div className="cs12-sprint-badge-row">
                    <div className="cs12-dotted-leader-line" />
                    <div className="cs12-sprint-pill">
                      <span className="cs12-sprint-label">1 Sprint</span>
                      <div className="cs12-sprint-icon-circle">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M21.21 15.89A10 10 0 1 1 8 2.83"/>
                          <path d="M22 12A10 10 0 0 0 12 2v10z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="cs12-dotted-tail-line" />
                  </div>
                  <div className="cs12-sprint-content">
                    <h3 className="cs12-sprint-name">Research</h3>
                    <ul className="cs12-sprint-list">
                      <li>User Interviews</li>
                      <li>Competitor Analysis</li>
                      <li>Behavior Research</li>
                    </ul>
                  </div>
                </div>

                {/* Sprint 2: Strategy */}
                <div className="cs12-sprint-column sprint-col-2">
                  <div className="cs12-sprint-badge-row">
                    <div className="cs12-dotted-leader-line" />
                    <div className="cs12-sprint-pill">
                      <span className="cs12-sprint-label">2 Sprint</span>
                      <div className="cs12-sprint-icon-circle">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <circle cx="12" cy="12" r="10"/>
                          <circle cx="12" cy="12" r="6"/>
                          <circle cx="12" cy="12" r="2"/>
                        </svg>
                      </div>
                    </div>
                    <div className="cs12-dotted-tail-line" />
                  </div>
                  <div className="cs12-sprint-content">
                    <h3 className="cs12-sprint-name">Strategy</h3>
                    <ul className="cs12-sprint-list">
                      <li>User Personas</li>
                      <li>User Journey Mapping</li>
                      <li>Feature Prioritization</li>
                    </ul>
                  </div>
                </div>

                {/* Sprint 3: UI Design */}
                <div className="cs12-sprint-column sprint-col-3">
                  <div className="cs12-sprint-badge-row">
                    <div className="cs12-dotted-leader-line" />
                    <div className="cs12-sprint-pill">
                      <span className="cs12-sprint-label">3 Sprint</span>
                      <div className="cs12-sprint-icon-circle">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="m12 19 7-7 3 3-7 7-3-3z"/>
                          <path d="m18 13-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
                          <path d="m2 2 7.586 7.586"/>
                          <circle cx="11" cy="11" r="2"/>
                        </svg>
                      </div>
                    </div>
                    <div className="cs12-dotted-tail-line" />
                  </div>
                  <div className="cs12-sprint-content">
                    <h3 className="cs12-sprint-name">UI Design</h3>
                    <ul className="cs12-sprint-list">
                      <li>Wireframing</li>
                      <li>Visual Design System</li>
                      <li>Interactive Prototyping</li>
                    </ul>
                  </div>
                </div>

                {/* Sprint 4: Delivery */}
                <div className="cs12-sprint-column sprint-col-4">
                  <div className="cs12-sprint-badge-row">
                    <div className="cs12-dotted-leader-line" />
                    <div className="cs12-sprint-pill">
                      <span className="cs12-sprint-label">4 Sprint</span>
                      <div className="cs12-sprint-icon-circle">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 12 20 22 4 22 4 12"/>
                          <rect width="20" height="5" x="2" y="7"/>
                          <line x1="12" y1="22" x2="12" y2="7"/>
                          <path d="M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7z"/>
                          <path d="M12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="cs12-dotted-tail-line" />
                  </div>
                  <div className="cs12-sprint-content">
                    <h3 className="cs12-sprint-name">Delivery</h3>
                    <ul className="cs12-sprint-list">
                      <li>Usability Testing</li>
                      <li>Design Refinement</li>
                      <li>Developer Handoff</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Hand Mockup & Multi-Screen Showcase Box */}
          <div className="cs12-scope-of-work-card cs12-scope-hand-showcase-card">
            <div className="cs12-scope-showcase-img-wrap">
              <img
                src={scopeHandShowcase}
                alt="Fymble Hand Mockup & Product Ecosystem Showcase"
                className="cs12-scope-hand-showcase-img"
              />
            </div>

            {/* Bottom-Right Get The App Badges */}
            <div className="cs12-get-the-app-container">
              <span className="cs12-get-app-label">Get the APP</span>
              <div className="cs12-store-badges-row">
                <a href="#download" className="cs12-store-badge-btn" onClick={(e) => e.preventDefault()}>
                  <svg viewBox="0 0 24 24" width="18" height="18">
                    <path d="M3.609 1.814L13.793 12 3.61 22.186c-.237-.23-.385-.568-.385-.947V2.761c0-.379.148-.717.385-.947z" fill="#00D2FF"/>
                    <path d="M17.186 8.607L13.793 12l3.393 3.393 3.844-2.2c.745-.426.745-1.96 0-2.386l-3.844-2.2z" fill="#FFCE00"/>
                    <path d="M13.793 12L3.61 1.814c.24-.233.582-.381.964-.381.536 0 1.05.275 1.503.535l11.109 6.639L13.793 12z" fill="#00F076"/>
                    <path d="M13.793 12l3.393 3.393-11.109 6.639c-.453.26-.967.535-1.503.535-.382 0-.724-.148-.964-.381L13.793 12z" fill="#FF3A44"/>
                  </svg>
                  <div className="cs12-store-text">
                    <span className="cs12-store-sub">GET IT ON</span>
                    <span className="cs12-store-main">Google Play</span>
                  </div>
                </a>

                <a href="#download" className="cs12-store-badge-btn" onClick={(e) => e.preventDefault()}>
                  <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.63-.78 1.06-1.87.94-2.97-.92.04-2.02.62-2.67 1.39-.58.67-1.08 1.77-.95 2.84 1.02.08 2.05-.48 2.68-1.26z"/>
                  </svg>
                  <div className="cs12-store-text">
                    <span className="cs12-store-sub">Download on the</span>
                    <span className="cs12-store-main">App Store</span>
                  </div>
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 02: STRATEGY & PLANNING (COLLABORATIVE FLOW)
            =================================================================== */}
        <section id="sec-02" className="cs12-section">
          <div className="cs12-scope-of-work-card cs12-strategy-plan-card">
            <div className="cs12-scope-header-row">
              <div className="cs12-scope-title-col">
                <span className="cs12-scope-index">02</span>
                <h2 className="cs12-scope-title">Strategy &amp; Planning</h2>
              </div>
            </div>

            {/* Staggered 3-Pillar Waterfall Stepper */}
            <div className="cs12-sprint-waterfall-wrapper">
              <div className="cs12-sprint-grid cs12-strategy-grid-3">
                {/* Pillar 1: CEO Collaboration */}
                <div className="cs12-sprint-column sprint-col-1">
                  <div className="cs12-sprint-badge-row">
                    <div className="cs12-dotted-leader-line" />
                    <div className="cs12-sprint-pill">
                      <span className="cs12-sprint-label">1 Pillar</span>
                      <div className="cs12-sprint-icon-circle">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/>
                          <path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>
                        </svg>
                      </div>
                    </div>
                    <div className="cs12-dotted-tail-line" />
                  </div>
                  <div className="cs12-sprint-content">
                    <h3 className="cs12-sprint-name">CEO Collaboration</h3>
                    <div className="cs12-strategy-pillar-subtag">Product Vision &amp; Feature Planning</div>
                    <ul className="cs12-sprint-list">
                      <li>Product Vision &amp; Roadmaps</li>
                      <li>Business Goal Alignment</li>
                      <li>Feature Prioritization</li>
                    </ul>
                  </div>
                </div>

                {/* Pillar 2: Tech Team */}
                <div className="cs12-sprint-column sprint-col-2">
                  <div className="cs12-sprint-badge-row">
                    <div className="cs12-dotted-leader-line" />
                    <div className="cs12-sprint-pill">
                      <span className="cs12-sprint-label">2 Pillar</span>
                      <div className="cs12-sprint-icon-circle">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="16 18 22 12 16 6"/>
                          <polyline points="8 6 2 12 8 18"/>
                        </svg>
                      </div>
                    </div>
                    <div className="cs12-dotted-tail-line" />
                  </div>
                  <div className="cs12-sprint-content">
                    <h3 className="cs12-sprint-name">Tech Team</h3>
                    <div className="cs12-strategy-pillar-subtag">UX Feasibility &amp; Dev Handoff</div>
                    <ul className="cs12-sprint-list">
                      <li>UX Feasibility Reviews</li>
                      <li>Design System &amp; Tokens</li>
                      <li>Build QA &amp; Interaction Audits</li>
                    </ul>
                  </div>
                </div>

                {/* Pillar 3: Marketing Team */}
                <div className="cs12-sprint-column sprint-col-3">
                  <div className="cs12-sprint-badge-row">
                    <div className="cs12-dotted-leader-line" />
                    <div className="cs12-sprint-pill">
                      <span className="cs12-sprint-label">3 Pillar</span>
                      <div className="cs12-sprint-icon-circle">
                        <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
                        </svg>
                      </div>
                    </div>
                    <div className="cs12-dotted-tail-line" />
                  </div>
                  <div className="cs12-sprint-content">
                    <h3 className="cs12-sprint-name">Marketing Team</h3>
                    <div className="cs12-strategy-pillar-subtag">Campaigns &amp; Launch Rollout</div>
                    <ul className="cs12-sprint-list">
                      <li>App &amp; Play Store Visuals</li>
                      <li>Launch Banners &amp; Creatives</li>
                      <li>Viral Referral Mechanics</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 03: TYPOGRAPHY & COLORS (DESIGN SYSTEM FOUNDATION)
            =================================================================== */}
        <section id="sec-03" className="cs12-section">
          <div className="cs12-scope-of-work-card cs12-typography-colors-card">
            <div className="cs12-scope-header-row">
              <div className="cs12-scope-title-col">
                <span className="cs12-scope-index">03</span>
                <h2 className="cs12-scope-title">Typography &amp; Colors</h2>
              </div>
            </div>

            {/* Giant Roboto Showcase with Floating Weight Badge */}
            <div className="cs12-type-hero-display">
              <span className="cs12-type-huge-name">Roboto</span>
              <div className="cs12-type-weight-card">
                <span className="cs12-weight-title">Weight</span>
                <div className="cs12-weight-items">
                  <span className="cs12-weight-row weight-regular">Regular <span>400</span></span>
                  <span className="cs12-weight-row weight-medium">Medium <span>500</span></span>
                  <span className="cs12-weight-row weight-bold">Semibold <span>700</span></span>
                </div>
              </div>
            </div>

            {/* Specimen & Type Hierarchy Scale Grid */}
            <div className="cs12-type-specimen-grid">
              {/* Left: Glyphs & Alphabets */}
              <div className="cs12-type-specimen-left">
                <div className="cs12-specimen-block">
                  <span className="cs12-specimen-label">Headings</span>
                  <div className="cs12-specimen-glyphs">
                    <p className="cs12-glyph-alpha">ABCDEFGHIJKLMNOPQRSTUVWXYZ</p>
                    <p className="cs12-glyph-digits">0123456789</p>
                  </div>
                </div>

                <div className="cs12-specimen-block">
                  <span className="cs12-specimen-label">Text</span>
                  <div className="cs12-specimen-glyphs">
                    <p className="cs12-glyph-alpha">abcdefghijklmnopqrstuvwxyz</p>
                    <p className="cs12-glyph-digits">0123456789</p>
                  </div>
                </div>
              </div>

              {/* Right: Type Scale Spec Box */}
              <div className="cs12-type-scale-card">
                <div className="cs12-type-scale-row">
                  <span className="cs12-scale-name">Headline</span>
                  <span className="cs12-scale-val">48px</span>
                </div>
                <div className="cs12-type-scale-row">
                  <span className="cs12-scale-name">Subheadline</span>
                  <span className="cs12-scale-val">24px</span>
                </div>
                <div className="cs12-type-scale-row">
                  <span className="cs12-scale-name">Body Text</span>
                  <span className="cs12-scale-val">16px</span>
                </div>
              </div>
            </div>

            {/* 3 Brand Color Palette Cards (#000000, #FFFFFF, #FF5757) */}
            <div className="cs12-color-palette-grid cs12-colors-3-grid">
              {/* Color 1: Deep Black #000000 */}
              <div className="cs12-color-card color-palette-black">
                <div className="cs12-color-swatch-body">
                  <span className="cs12-hex-code">#000000</span>
                </div>
                <div className="cs12-color-bottom-bar bar-black" />
              </div>

              {/* Color 2: Pure White #FFFFFF */}
              <div className="cs12-color-card color-palette-white">
                <div className="cs12-color-swatch-body">
                  <span className="cs12-hex-code">#FFFFFF</span>
                </div>
                <div className="cs12-color-bottom-bar bar-white" />
              </div>

              {/* Color 3: Fymble Brand Coral #FF5757 */}
              <div className="cs12-color-card color-palette-coral">
                <div className="cs12-color-swatch-body">
                  <span className="cs12-hex-code">#FF5757</span>
                </div>
                <div className="cs12-color-bottom-bar bar-coral" />
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 04: USER RESEARCH & KEY INSIGHTS
            =================================================================== */}
        <section id="sec-04" className="cs12-section">
          <div className="cs12-scope-of-work-card cs12-user-research-card">
            <div className="cs12-scope-header-row">
              <div className="cs12-scope-title-col">
                <span className="cs12-scope-index">04</span>
                <h2 className="cs12-scope-title">User Research &amp; Key Insights</h2>
              </div>
            </div>

            {/* Top Quick Research KPI Badges */}
            <div className="cs12-research-stats-strip">
              <div className="cs12-stat-pill-item">
                <span className="cs12-stat-num">120+</span>
                <span className="cs12-stat-lbl">Gym-Goers Surveyed</span>
              </div>
              <div className="cs12-stat-divider" />
              <div className="cs12-stat-pill-item">
                <span className="cs12-stat-num">30+</span>
                <span className="cs12-stat-lbl">1-on-1 User Interviews</span>
              </div>
              <div className="cs12-stat-divider" />
              <div className="cs12-stat-pill-item">
                <span className="cs12-stat-num">85%</span>
                <span className="cs12-stat-lbl">Reported Habit Friction</span>
              </div>
              <div className="cs12-stat-divider" />
              <div className="cs12-stat-pill-item">
                <span className="cs12-stat-num">3.2x</span>
                <span className="cs12-stat-lbl">Higher Churn with Lock-ins</span>
              </div>
            </div>

            {/* 3-Column Pillar Cards Grid */}
            <div className="cs12-research-3pillar-grid">
              
              {/* PILLAR 1: Quantitative Survey */}
              <div className="cs12-pillar-card">
                <div className="cs12-pillar-badge-tag tag-purple">
                  <span>01 • Survey Results</span>
                </div>
                <h3 className="cs12-pillar-question">
                  Have you experienced difficulties while managing your fitness &amp; diet?
                </h3>
                
                {/* Visual Chart 1: Progress Bars */}
                <div className="cs12-pillar-chart-box">
                  <div className="cs12-pillar-bar-list">
                    <div className="cs12-pbar-row">
                      <div className="cs12-pbar-head">
                        <span className="cs12-pbar-name">Yes</span>
                        <span className="cs12-pbar-val purple-val">85%</span>
                      </div>
                      <div className="cs12-pbar-track">
                        <div className="cs12-pbar-fill fill-purple-primary" style={{ width: '85%' }} />
                      </div>
                    </div>

                    <div className="cs12-pbar-row">
                      <div className="cs12-pbar-head">
                        <span className="cs12-pbar-name">Occasionally</span>
                        <span className="cs12-pbar-val">54%</span>
                      </div>
                      <div className="cs12-pbar-track">
                        <div className="cs12-pbar-fill fill-purple-subtle" style={{ width: '54%' }} />
                      </div>
                    </div>

                    <div className="cs12-pbar-row">
                      <div className="cs12-pbar-head">
                        <span className="cs12-pbar-name">No</span>
                        <span className="cs12-pbar-val slate-val">13%</span>
                      </div>
                      <div className="cs12-pbar-track">
                        <div className="cs12-pbar-fill fill-slate" style={{ width: '13%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* PILLAR 2: Core Behavioral Challenges (Circular Donut/Arc) */}
              <div className="cs12-pillar-card highlight-card">
                <div className="cs12-pillar-badge-tag tag-purple">
                  <span>02 • Core Challenges</span>
                </div>
                <h3 className="cs12-pillar-question">
                  Which fitness challenges do you encounter most frequently?
                </h3>

                {/* Visual Chart 2: Circular Donut / Gauge */}
                <div className="cs12-pillar-chart-box cs12-donut-chart-box">
                  <div className="cs12-donut-svg-wrap">
                    <svg viewBox="0 0 160 160" className="cs12-donut-svg">
                      {/* Background Ring */}
                      <circle cx="80" cy="80" r="60" fill="none" stroke="rgba(255,255,255,0.06)" strokeWidth="11" />
                      {/* Segment 1: Green 85% */}
                      <circle cx="80" cy="80" r="60" fill="none" stroke="#a78bfa" strokeWidth="11"
                        strokeDasharray="210 380" strokeDashoffset="0" strokeLinecap="round" transform="rotate(-90 80 80)" />
                      {/* Segment 2: Slate 65% */}
                      <circle cx="80" cy="80" r="60" fill="none" stroke="#7c3aed" strokeWidth="11"
                        strokeDasharray="95 380" strokeDashoffset="-220" strokeLinecap="round" transform="rotate(-90 80 80)" />
                      {/* Segment 3: Coral 45% */}
                      <circle cx="80" cy="80" r="60" fill="none" stroke="#4c1d95" strokeWidth="11"
                        strokeDasharray="50 380" strokeDashoffset="-320" strokeLinecap="round" transform="rotate(-90 80 80)" />
                    </svg>
                    <div className="cs12-donut-center-badge">
                      <span className="cs12-donut-big-num">85%</span>
                      <span className="cs12-donut-sub-lbl">Top Hurdle</span>
                    </div>
                  </div>

                  <div className="cs12-donut-mini-legend">
                    <div className="cs12-dleg-item">
                      <span className="cs12-dleg-dot dot-light-purple" />
                      <span className="cs12-dleg-text">Lock-in Contracts <strong>85%</strong></span>
                    </div>
                    <div className="cs12-dleg-item">
                      <span className="cs12-dleg-dot dot-dark-purple" />
                      <span className="cs12-dleg-text">Manual Logging <strong>65%</strong></span>
                    </div>
                    <div className="cs12-dleg-item">
                      <span className="cs12-dleg-dot dot-subtle-purple" />
                      <span className="cs12-dleg-text">Habit Churn <strong>45%</strong></span>
                    </div>
                  </div>
                </div>
              </div>

              {/* PILLAR 3: Market Usability & Frustration */}
              <div className="cs12-pillar-card">
                <div className="cs12-pillar-badge-tag tag-purple">
                  <span>03 • Market Gap</span>
                </div>
                <h3 className="cs12-pillar-question">
                  How easy is it to manage workouts &amp; diet using current apps?
                </h3>

                {/* Visual Chart 3: Staircase Stepper Bars */}
                <div className="cs12-pillar-chart-box cs12-stair-pillar-box">
                  <div className="cs12-mini-staircase">
                    <div className="cs12-mstair-item">
                      <span className="cs12-mstair-val purple-val">56%</span>
                      <div className="cs12-mstair-bar" style={{ height: '32px', background: '#7c3aed' }} />
                      <span className="cs12-mstair-lbl">V. Hard</span>
                    </div>
                    <div className="cs12-mstair-item">
                      <span className="cs12-mstair-val purple-val">45%</span>
                      <div className="cs12-mstair-bar" style={{ height: '48px', background: 'rgba(124, 58, 237, 0.75)' }} />
                      <span className="cs12-mstair-lbl">Hard</span>
                    </div>
                    <div className="cs12-mstair-item">
                      <span className="cs12-mstair-val">32%</span>
                      <div className="cs12-mstair-bar" style={{ height: '62px', background: 'rgba(255, 255, 255, 0.2)' }} />
                      <span className="cs12-mstair-lbl">Neutral</span>
                    </div>
                    <div className="cs12-mstair-item">
                      <span className="cs12-mstair-val light-purple-val">25%</span>
                      <div className="cs12-mstair-bar" style={{ height: '76px', background: 'rgba(167, 139, 250, 0.7)' }} />
                      <span className="cs12-mstair-lbl">Easy</span>
                    </div>
                    <div className="cs12-mstair-item">
                      <span className="cs12-mstair-val light-purple-val">15%</span>
                      <div className="cs12-mstair-bar" style={{ height: '90px', background: '#a78bfa' }} />
                      <span className="cs12-mstair-lbl">V. Easy</span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 05: PROBLEM & SOLUTION
            =================================================================== */}
        <section id="sec-05" className="cs12-section">
          <div className="cs12-scope-of-work-card cs12-problem-solution-card">
            <div className="cs12-scope-header-row">
              <div className="cs12-scope-title-col">
                <span className="cs12-scope-index">05</span>
                <h2 className="cs12-scope-title">Problem &amp; Solution</h2>
              </div>
            </div>

            {/* Core Visual: Precision Telemetry Convergence Hub */}
            <div className="cs12-ps-diagram-wrapper">
              {/* Left Problem 1 Callout */}
              <div className="cs12-ps-callout-card callout-left">
                <div className="cs12-ps-badge">
                  <span className="cs12-badge-dot purple-dot" />
                  <span>Problem 01</span>
                </div>
                <div className="cs12-ps-metric-row">
                  <span className="cs12-ps-metric">68<small className="purple-small">%</small></span>
                </div>
                <p className="cs12-ps-metric-desc">
                  Struggle managing multiple disconnected apps for gym passes and daily meal tracking.
                </p>
              </div>

              {/* Center Precision Convergence Telemetry Hub */}
              <div className="cs12-ps-hub-orb">
                <svg viewBox="0 0 320 320" className="cs12-ps-hub-svg">
                  <defs>
                    {/* Ambient Glow Gradient */}
                    <radialGradient id="psHubGlow" cx="50%" cy="50%" r="50%">
                      <stop offset="0%" stopColor="rgba(124, 58, 237, 0.32)" />
                      <stop offset="50%" stopColor="rgba(167, 139, 250, 0.12)" />
                      <stop offset="100%" stopColor="transparent" />
                    </radialGradient>

                    {/* Dark Metallic Glass Core */}
                    <radialGradient id="psGlassCoreGrad" cx="35%" cy="30%" r="70%">
                      <stop offset="0%" stopColor="#252036" />
                      <stop offset="55%" stopColor="#151322" />
                      <stop offset="100%" stopColor="#0b0914" />
                    </radialGradient>

                    {/* Problem 01 Arc Gradient (Electric Digital Blue) */}
                    <linearGradient id="psLightPurpleArc" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#e9d5ff" />
                      <stop offset="50%" stopColor="#c4b5fd" />
                      <stop offset="100%" stopColor="#a78bfa" />
                    </linearGradient>

                    {/* Problem 02 Arc Gradient (Vibrant Cyan Ice Blue) */}
                    <linearGradient id="psDarkPurpleArc" x1="0%" y1="0%" x2="100%" y2="100%">
                      <stop offset="0%" stopColor="#a78bfa" />
                      <stop offset="50%" stopColor="#7c3aed" />
                      <stop offset="100%" stopColor="#5b21b6" />
                    </linearGradient>

                    {/* Glowing Filter */}
                    <filter id="psBeaconGlow" x="-50%" y="-50%" width="200%" height="200%">
                      <feGaussianBlur stdDeviation="3.5" result="blur" />
                      <feMerge>
                        <feMergeNode in="blur" />
                        <feMergeNode in="SourceGraphic" />
                      </feMerge>
                    </filter>
                  </defs>

                  {/* Ambient Backdrop Aura */}
                  <circle cx="160" cy="160" r="148" fill="url(#psHubGlow)" />

                  {/* Outer Precision Telemetry Ticks (12 Radial Markers) */}
                  <circle cx="160" cy="160" r="136" fill="none" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1" strokeDasharray="2 6" />
                  {[0, 30, 60, 90, 120, 150, 180, 210, 240, 270, 300, 330].map((deg) => (
                    <line
                      key={deg}
                      x1="160"
                      y1="20"
                      x2="160"
                      y2={deg % 90 === 0 ? "27" : "24"}
                      stroke={deg % 90 === 0 ? "rgba(255,255,255,0.4)" : "rgba(255,255,255,0.15)"}
                      strokeWidth={deg % 90 === 0 ? "1.5" : "1"}
                      transform={`rotate(${deg} 160 160)`}
                    />
                  ))}

                  {/* ---------------------------------------------------- */}
                  {/* RING 01: Problem 01 Arc (68% - Multi-App Friction)   */}
                  {/* Radius 114: C = 2 * PI * 114 = 716.28. 68% = 487.07 */}
                  {/* ---------------------------------------------------- */}
                  <circle
                    cx="160"
                    cy="160"
                    r="114"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.05)"
                    strokeWidth="8.5"
                  />
                  <circle
                    cx="160"
                    cy="160"
                    r="114"
                    fill="none"
                    stroke="url(#psLightPurpleArc)"
                    strokeWidth="8.5"
                    strokeLinecap="round"
                    strokeDasharray="487.07 716.28"
                    strokeDashoffset="0"
                    transform="rotate(-90 160 160)"
                    filter="drop-shadow(0 0 10px rgba(167, 139, 250, 0.65))"
                  />
                  {/* End Beacon Dot at 68% (154.8 deg) */}
                  <circle cx="56.8" cy="208.5" r="5" fill="#3B82F6" filter="url(#psBeaconGlow)" />
                  <circle cx="56.8" cy="208.5" r="2" fill="#ffffff" />

                  {/* ---------------------------------------------------- */}
                  {/* RING 02: Problem 02 Arc (36% - Rigid Subscriptions) */}
                  {/* Radius 92: C = 2 * PI * 92 = 578.05. 36% = 208.10   */}
                  {/* ---------------------------------------------------- */}
                  <circle
                    cx="160"
                    cy="160"
                    r="92"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.05)"
                    strokeWidth="8.5"
                  />
                  <circle
                    cx="160"
                    cy="160"
                    r="92"
                    fill="none"
                    stroke="url(#psDarkPurpleArc)"
                    strokeWidth="8.5"
                    strokeLinecap="round"
                    strokeDasharray="208.10 578.05"
                    strokeDashoffset="0"
                    transform="rotate(-90 160 160)"
                    filter="drop-shadow(0 0 10px rgba(56, 189, 248, 0.55))"
                  />
                  {/* End Beacon Dot at 36% (39.6 deg) */}
                  <circle cx="230.9" cy="218.6" r="5" fill="#a78bfa" filter="url(#psBeaconGlow)" />
                  <circle cx="230.9" cy="218.6" r="2" fill="#ffffff" />

                  {/* ---------------------------------------------------- */}
                  {/* CENTER CORE: Frosted Dark Glass Nexus                */}
                  {/* ---------------------------------------------------- */}
                  <circle
                    cx="160"
                    cy="160"
                    r="68"
                    fill="url(#psGlassCoreGrad)"
                    stroke="rgba(255, 255, 255, 0.14)"
                    strokeWidth="1.5"
                    filter="drop-shadow(0 12px 30px rgba(0, 0, 0, 0.8))"
                  />
                  <circle
                    cx="160"
                    cy="160"
                    r="55"
                    fill="none"
                    stroke="rgba(255, 255, 255, 0.08)"
                    strokeWidth="1"
                    strokeDasharray="3 4"
                  />

                  {/* Center Clean Typography Only */}
                  <text
                    x="160"
                    y="160"
                    dominantBaseline="central"
                    fill="#ffffff"
                    fontSize="15"
                    fontWeight="800"
                    textAnchor="middle"
                    letterSpacing="3.5"
                    fontFamily="Roboto, sans-serif"
                  >
                    FYMBLE
                  </text>
                </svg>
              </div>

              {/* Right Problem 2 Callout */}
              <div className="cs12-ps-callout-card callout-right">
                <div className="cs12-ps-badge">
                  <span className="cs12-badge-dot dark-purple-dot" />
                  <span>Problem 02</span>
                </div>
                <div className="cs12-ps-metric-row">
                  <span className="cs12-ps-metric">36<small className="dark-purple-small">%</small></span>
                </div>
                <p className="cs12-ps-metric-desc">
                  Find expensive 12-month memberships rigid, inconvenient, and financially wasteful.
                </p>
              </div>
            </div>

            {/* Bottom Solution Section Anchor */}
            <div className="cs12-ps-solution-anchor">
              <div className="cs12-solution-dot-pulse">
                <span className="cs12-sol-dot" />
              </div>
              <h3 className="cs12-ps-solution-title">The Solution</h3>
              <p className="cs12-ps-solution-desc">
                A unified ecosystem with ₹99 on-demand gym passes, AI camera nutrition logging, and personalized Kyra coaching in a single tap.
              </p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 06: USER & PARTNER PERSONAS (PORTFOLIO THEME)
            =================================================================== */}
        <section id="sec-06" className="cs12-section">
          <div className="cs12-scope-of-work-card cs12-user-persona-card">
            <div className="cs12-scope-header-row cs12-persona-header-flex">
              <div className="cs12-scope-title-col">
                <span className="cs12-scope-index">06</span>
                <h2 className="cs12-scope-title">User Persona</h2>
              </div>

              {/* Dual Persona Switcher */}
              <div className="cs12-persona-tabs-switch">
                <button
                  type="button"
                  className={`cs12-ptab-btn ${activePersonaTab === 'user' ? 'active' : ''}`}
                  onClick={() => setActivePersonaTab('user')}
                >
                  <span className="cs12-tab-dot" />
                  <span>Fitness Enthusiast (User)</span>
                </button>
                <button
                  type="button"
                  className={`cs12-ptab-btn ${activePersonaTab === 'partner' ? 'active' : ''}`}
                  onClick={() => setActivePersonaTab('partner')}
                >
                  <span className="cs12-tab-dot" />
                  <span>Gym Owner (Partner)</span>
                </button>
              </div>
            </div>

            {/* 3-Column Clean Persona Grid */}
            <div className="cs12-persona-tri-grid">
              {/* Left Column: 2 Stacked Specification Cards */}
              <div className="cs12-ptri-col ptri-col-left">
                {/* Top Card: Interests / Core Goals */}
                <div className="cs12-ptri-block">
                  <div className="cs12-ptri-block-header">
                    <span className="cs12-ptri-dot" />
                    <h4>{activePersonaTab === 'user' ? 'Interests & Goals' : 'Business Goals'}</h4>
                  </div>
                  <ul className="cs12-ptri-list">
                    {activePersonaTab === 'user' ? (
                      <>
                        <li>Flexible daily workouts &amp; on-demand gym visits</li>
                        <li>Automated photo calorie and macro logging</li>
                        <li>Maintaining long-term fitness consistency</li>
                      </>
                    ) : (
                      <>
                        <li>Monetize empty off-peak gym slots (11am – 5pm)</li>
                        <li>Increase daily walk-in footfall without ad budgets</li>
                        <li>Instant digital pass validation &amp; weekly payouts</li>
                      </>
                    )}
                  </ul>
                </div>

                {/* Bottom Card: Values / Frustrations */}
                <div className="cs12-ptri-block">
                  <div className="cs12-ptri-block-header">
                    <span className="cs12-ptri-dot" />
                    <h4>{activePersonaTab === 'user' ? 'Frustrations & Values' : 'Operational Pain Points'}</h4>
                  </div>
                  <ul className="cs12-ptri-list">
                    {activePersonaTab === 'user' ? (
                      <>
                        <li>Frustrated with expensive 12-month annual lock-ins</li>
                        <li>Tired of juggling 3+ disconnected fitness apps</li>
                        <li>Values daily flexibility, transparency &amp; control</li>
                      </>
                    ) : (
                      <>
                        <li>40% idle floor capacity during mid-day hours</li>
                        <li>Dropping renewal rates on annual memberships</li>
                        <li>Messy paper logbooks and manual cash disputes</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>

              {/* Center Column: Portrait, Name & Emphasized Quote */}
              <div className="cs12-ptri-col ptri-col-center">
                <div className="cs12-ptri-avatar-ring">
                  <img
                    src={
                      activePersonaTab === 'user'
                        ? 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80'
                        : 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80'
                    }
                    alt={activePersonaTab === 'user' ? 'Wade Warren' : 'Rajesh Sharma'}
                    className="cs12-ptri-avatar-img"
                  />
                </div>

                <div className="cs12-ptri-identity">
                  <h3 className="cs12-ptri-name">
                    {activePersonaTab === 'user' ? 'Wade Warren' : 'Rajesh Sharma'}
                  </h3>
                  <span className="cs12-ptri-role">
                    {activePersonaTab === 'user'
                      ? 'Marketing Manager • 28 Yrs • Bengaluru'
                      : 'Studio Owner • Pulse Fitness (120+ Cap)'}
                  </span>
                </div>

                <div className="cs12-ptri-quote-box">
                  <span className="cs12-ptri-quote-mark">“</span>
                  <p className="cs12-ptri-quote-text">
                    {activePersonaTab === 'user'
                      ? 'I want complete freedom over my workouts and diet without rigid annual lock-ins or switching across 3 separate apps.'
                      : 'We have empty machines during afternoons. We need continuous daily footfall and hassle-free pass payouts without administrative burden.'}
                  </p>
                  <span className="cs12-ptri-quote-mark-end">”</span>
                </div>
              </div>

              {/* Right Column: 2 Stacked Specification Cards */}
              <div className="cs12-ptri-col ptri-col-right">
                {/* Top Card: Personality / Behaviors */}
                <div className="cs12-ptri-block">
                  <div className="cs12-ptri-block-header">
                    <span className="cs12-ptri-dot" />
                    <h4>{activePersonaTab === 'user' ? 'Behaviors & Habits' : 'Management Traits'}</h4>
                  </div>
                  <ul className="cs12-ptri-list">
                    {activePersonaTab === 'user' ? (
                      <>
                        <li>Trains 4-5 days a week before or after office hours</li>
                        <li>Prefers 1-tap UPI payments &amp; instant QR entry</li>
                        <li>Active on smartphone for daily habit notifications</li>
                      </>
                    ) : (
                      <>
                        <li>Runs gym floor operations with a small front-desk staff</li>
                        <li>Relies on WhatsApp broadcasts &amp; flyers for local reach</li>
                        <li>Wants all member visits verified on a single digital dashboard</li>
                      </>
                    )}
                  </ul>
                </div>

                {/* Bottom Card: Ideal Solution */}
                <div className="cs12-ptri-block">
                  <div className="cs12-ptri-block-header">
                    <span className="cs12-ptri-dot" />
                    <h4>{activePersonaTab === 'user' ? 'Ideal Fymble Solution' : 'Fymble Partner Solution'}</h4>
                  </div>
                  <ul className="cs12-ptri-list">
                    {activePersonaTab === 'user' ? (
                      <>
                        <li>₹99 On-demand passes across any certified partner gym</li>
                        <li>3-Second AI camera meal scan for calories &amp; macros</li>
                        <li>Kyra AI assistant providing daily streak accountability</li>
                      </>
                    ) : (
                      <>
                        <li>Guaranteed ₹99 pass revenue deposited weekly to bank</li>
                        <li>1-Second QR scanner on partner mobile app</li>
                        <li>Live footfall analytics &amp; member conversion opportunities</li>
                      </>
                    )}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 07: USER JOURNEY MAP
            =================================================================== */}
        {/* ===================================================================
            SECTION 07: USER JOURNEY (STREAMLINED PIPELINE - PUNCHY BOXES)
            =================================================================== */}
        {/* ===================================================================
            SECTION 07: USER JOURNEY
            =================================================================== */}
        <section id="sec-07" className="cs12-section">
          <div className="cs12-scope-of-work-card cs12-journey-map-card">
            <div className="cs12-scope-header-row cs12-journey-header-flex">
              <div className="cs12-scope-title-col">
                <span className="cs12-scope-index">07</span>
                <h2 className="cs12-scope-title">User Journey</h2>
              </div>
            </div>

            {/* Journey Tracks */}
            <div className="cs12-journey-swimlanes-list">
              {/* PHASE 01: Discover & Book a Gym */}
              <div className="cs12-jphase-card">
                <div className="cs12-jphase-header">
                  <div className="cs12-jphase-info">
                    <span className="cs12-jphase-num">PHASE 01</span>
                    <h3 className="cs12-jphase-title">Discover &amp; Book a Gym</h3>
                  </div>
                </div>

                <div className="cs12-jsteps-flow">
                  <span className="cs12-jstep-text">Explore Gyms</span>
                  <svg className="cs12-jstep-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  <span className="cs12-jstep-text">View Details</span>
                  <svg className="cs12-jstep-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  <span className="cs12-jstep-text">Choose a Pass</span>
                  <svg className="cs12-jstep-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  <span className="cs12-jstep-text">Book &amp; Schedule</span>
                  <svg className="cs12-jstep-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  <span className="cs12-jstep-text active">Start Workout</span>
                </div>
              </div>

              {/* PHASE 02: Guidance with Kyra AI */}
              <div className="cs12-jphase-card">
                <div className="cs12-jphase-header">
                  <div className="cs12-jphase-info">
                    <span className="cs12-jphase-num">PHASE 02</span>
                    <h3 className="cs12-jphase-title">Guidance with Kyra AI</h3>
                  </div>
                </div>

                <div className="cs12-jsteps-flow">
                  <span className="cs12-jstep-text">Start a Chat</span>
                  <svg className="cs12-jstep-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  <span className="cs12-jstep-text">Get Recommendations</span>
                  <svg className="cs12-jstep-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  <span className="cs12-jstep-text">Follow the Plan</span>
                  <svg className="cs12-jstep-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  <span className="cs12-jstep-text">Get Diet Advice</span>
                  <svg className="cs12-jstep-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  <span className="cs12-jstep-text active">Stay Consistent</span>
                </div>
              </div>

              {/* PHASE 03: Track Nutrition & See Progress */}
              <div className="cs12-jphase-card">
                <div className="cs12-jphase-header">
                  <div className="cs12-jphase-info">
                    <span className="cs12-jphase-num">PHASE 03</span>
                    <h3 className="cs12-jphase-title">Track Nutrition &amp; Progress</h3>
                  </div>
                </div>

                <div className="cs12-jsteps-flow">
                  <span className="cs12-jstep-text">Scan Your Food</span>
                  <svg className="cs12-jstep-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  <span className="cs12-jstep-text">Get Nutrition Info</span>
                  <svg className="cs12-jstep-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  <span className="cs12-jstep-text">Save &amp; Track Daily</span>
                  <svg className="cs12-jstep-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  <span className="cs12-jstep-text">View Weekly Insights</span>
                  <svg className="cs12-jstep-arrow" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="9 18 15 12 9 6" />
                  </svg>
                  <span className="cs12-jstep-text active">Celebrate Streaks</span>
                </div>
              </div>
            </div>
          </div>
        </section>
        
{/* ===================================================================
            SECTION 08: USER FLOW (FULL FYMBLE TREE ARCHITECTURE - PURPLE THEME)
            =================================================================== */}
        <section id="sec-08" className="cs12-section">
          <div className="cs12-scope-of-work-card cs12-user-flow-card">
            <div className="cs12-scope-header-row">
              <div className="cs12-scope-title-col">
                <span className="cs12-scope-index">08</span>
                <h2 className="cs12-scope-title">User Flow</h2>
              </div>

              {/* Interactive Zoom & Enlarge Controls */}
              <div className="cs12-uf-header-actions">
                <div className="cs12-uf-zoom-pill">
                  <button
                    type="button"
                    className="cs12-uf-zoom-btn"
                    onClick={() => setUfZoom(z => Math.max(0.65, +(z - 0.15).toFixed(2)))}
                    title="Zoom Out"
                    aria-label="Zoom out user flow"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                  <span className="cs12-uf-zoom-text">{Math.round(ufZoom * 100)}%</span>
                  <button
                    type="button"
                    className="cs12-uf-zoom-btn"
                    onClick={() => setUfZoom(z => Math.min(1.5, +(z + 0.15).toFixed(2)))}
                    title="Zoom In"
                    aria-label="Zoom in user flow"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                  {ufZoom !== 1 && (
                    <button
                      type="button"
                      className="cs12-uf-reset-link"
                      onClick={() => setUfZoom(1)}
                    >
                      Reset
                    </button>
                  )}
                </div>

                <button
                  type="button"
                  className="cs12-uf-enlarge-btn"
                  onClick={() => setIsUfFullscreen(true)}
                  title="Fullscreen / Enlarge View"
                  aria-label="Fullscreen / Enlarge View"
                >
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="15 3 21 3 21 9" />
                    <polyline points="9 21 3 21 3 15" />
                    <line x1="21" y1="3" x2="14" y2="10" />
                    <line x1="3" y1="21" x2="10" y2="14" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Tree Flow Scroll Container with Inline Zoom */}
            <div className="cs12-uf-tree-container">
              <div
                className="cs12-uf-tree-scaler"
                style={{
                  zoom: ufZoom
                }}
              >
                <UserFlowTreeDiagram />
              </div>
            </div>
          </div>
        </section>

        <section id="sec-09" className="cs12-section">
          <div className="cs12-scope-of-work-card cs12-grid-system-card">
            <div className="cs12-scope-header-row">
              <div className="cs12-scope-title-col">
                <span className="cs12-scope-index">09</span>
                <h2 className="cs12-scope-title">Grid System</h2>
              </div>
            </div>

            {/* Grid Showcases Comparison */}
            <div className="cs12-grid-showcase-row">

              {/* Desktop Showcase */}
              <div className="cs12-grid-column-item desktop-item">
                <div className="cs12-grid-device-tag">Desktop</div>

                {/* Visual Artboard Container */}
                <div className="cs12-grid-artboard desktop-artboard">
                  <div className="cs12-grid-columns-container desktop-cols">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <div key={i} className="cs12-grid-stripe" />
                    ))}
                  </div>

                  {/* Floating Badges */}
                  <div className="cs12-grid-callout callout-gutters-desktop">
                    <span className="cs12-callout-icon">↔</span>
                    <span>Gutters 24px</span>
                  </div>

                  <div className="cs12-grid-callout callout-columns-desktop">
                    <span className="cs12-callout-icon">↔</span>
                    <span>12 Columns</span>
                  </div>

                  <div className="cs12-grid-callout callout-margins-desktop">
                    <span>Margins 120px</span>
                    <span className="cs12-callout-icon">↔</span>
                  </div>
                </div>

                {/* Dimension Line & Pill */}
                <div className="cs12-grid-dimension-wrapper">
                  <div className="cs12-grid-dimension-line">
                    <span className="dim-arrow-left">◀</span>
                    <span className="dim-bar" />
                    <span className="dim-arrow-right">▶</span>
                  </div>
                  <div className="cs12-grid-width-pill">
                    Width 1440px
                  </div>
                </div>
              </div>

              {/* Mobile Showcase */}
              <div className="cs12-grid-column-item mobile-item">
                <div className="cs12-grid-device-tag">Mobile</div>

                {/* Visual Artboard Container */}
                <div className="cs12-grid-artboard mobile-artboard">
                  <div className="cs12-grid-columns-container mobile-cols">
                    {Array.from({ length: 6 }).map((_, i) => (
                      <div key={i} className="cs12-grid-stripe" />
                    ))}
                  </div>

                  {/* Floating Badges */}
                  <div className="cs12-grid-callout callout-margins-mobile">
                    <span className="cs12-callout-icon">↔</span>
                    <span>Margins 16px</span>
                  </div>

                  <div className="cs12-grid-callout callout-columns-mobile">
                    <span className="cs12-callout-icon">↔</span>
                    <span>6 Columns</span>
                  </div>

                  <div className="cs12-grid-callout callout-gutters-mobile">
                    <span className="cs12-callout-icon">↔</span>
                    <span>Gutters 16px</span>
                  </div>
                </div>

                {/* Dimension Line & Pill */}
                <div className="cs12-grid-dimension-wrapper">
                  <div className="cs12-grid-dimension-line">
                    <span className="dim-arrow-left">◀</span>
                    <span className="dim-bar" />
                    <span className="dim-arrow-right">▶</span>
                  </div>
                  <div className="cs12-grid-width-pill">
                    Width 375px
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 10: CORE EXPERIENCE / SPOTLIGHT
            =================================================================== */}
        <section id="sec-10" className="cs12-section">
          <div className="cs12-scope-of-work-card cs12-core-exp-card">
            <div className="cs12-scope-header-row">
              <div className="cs12-scope-title-col">
                <span className="cs12-scope-index">10</span>
                <h2 className="cs12-scope-title">Core Experience</h2>
              </div>
            </div>

            {/* Showcase Stage */}
            <div className="cs12-core-exp-stage">

              {/* Big Hero Statement Headline */}
              <div className="cs12-core-exp-hero-text">
                <h2>
                  Seamless habit & workout tracking<br />
                  for a better <span className="highlight-text">fitness</span><br />
                  <span className="muted-text">Experience.</span>
                </h2>
              </div>

              {/* Main Interactive Spotlight Canvas */}
              <div className="cs12-spotlight-canvas">

                {/* Left Annotation */}
                <div className="cs12-spotlight-side-annotation left-side">
                  <div className="cs12-side-icon-box paper-plane">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M22 2L11 13" />
                      <path d="M22 2L15 22L11 13L2 9L22 2Z" />
                    </svg>
                  </div>
                  <p className="cs12-side-desc">
                    A simple and intuitive flow that helps users log habits, track workouts, and swap routines in just a few taps. Clear input metrics, smart goal detection.
                  </p>
                </div>

                {/* Central Floating Phone Mockup */}
                <div className="cs12-spotlight-phone-wrapper">
                  <div className="cs12-spotlight-phone-frame">
                    <div className="cs12-spotlight-phone-island" />
                    <img src={screen2} alt="Fymble Swap & Track Screen" className="cs12-spotlight-screen-img" />
                    <div className="cs12-spotlight-phone-glow" />
                  </div>

                  {/* SVG Connector Lines to Floating Detail Cards */}
                  <svg className="cs12-spotlight-connectors" viewBox="0 0 700 500">
                    {/* Top right curve */}
                    <path d="M 370 190 C 430 190, 450 140, 500 140" className="cs12-spotlight-path" />
                    <circle cx="370" cy="190" r="3.5" className="cs12-spotlight-dot" />
                    <circle cx="500" cy="140" r="3.5" className="cs12-spotlight-dot" />

                    {/* Bottom left curve */}
                    <path d="M 330 330 C 270 330, 240 400, 190 400" className="cs12-spotlight-path" />
                    <circle cx="330" cy="330" r="3.5" className="cs12-spotlight-dot" />
                    <circle cx="190" cy="400" r="3.5" className="cs12-spotlight-dot" />
                  </svg>

                  {/* Top-Right Floating UI Callout Card */}
                  <div className="cs12-floating-detail-card card-top-right">
                    <div className="cs12-fdc-header">
                      <span className="cs12-fdc-label">Daily Burn Goal</span>
                      <div className="cs12-fdc-balance">
                        <span>Target: <strong>650 kcal</strong></span>
                        <span className="cs12-fdc-max-pill">Active</span>
                      </div>
                    </div>
                    <div className="cs12-fdc-body">
                      <div className="cs12-fdc-token">
                        <div className="cs12-fdc-token-icon gold-burn">🔥</div>
                        <span className="cs12-fdc-token-name">HIIT Workout</span>
                      </div>
                      <div className="cs12-fdc-value-col">
                        <span className="cs12-fdc-val">450 kcal</span>
                        <span className="cs12-fdc-subval">= 45 min completed</span>
                      </div>
                    </div>
                  </div>

                  {/* Bottom-Left Floating UI Callout Card */}
                  <div className="cs12-floating-detail-card card-bottom-left">
                    <div className="cs12-fdc-header">
                      <span className="cs12-fdc-label">Protein Target</span>
                      <div className="cs12-fdc-balance">
                        <span>Daily Goal: <strong>140.0g</strong></span>
                      </div>
                    </div>
                    <div className="cs12-fdc-body">
                      <div className="cs12-fdc-token">
                        <div className="cs12-fdc-token-icon green-nutrition">🥗</div>
                        <span className="cs12-fdc-token-name">Macro Intake</span>
                      </div>
                      <div className="cs12-fdc-value-col">
                        <span className="cs12-fdc-val">115.5g</span>
                        <span className="cs12-fdc-subval">= 82.5% achieved</span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Right Annotation */}
                <div className="cs12-spotlight-side-annotation right-side">
                  <div className="cs12-side-icon-box sync-icon">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.19" />
                    </svg>
                  </div>
                  <p className="cs12-side-desc">
                    Swap workouts and meal plans dynamically with live biometric feedback, automated macro tracking, and real-time habit calibration for peak consistency.
                  </p>
                </div>

              </div>

            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 11: USER TESTING RESULT
            =================================================================== */}
        <section id="sec-11" className="cs12-section">
          <div className="cs12-scope-of-work-card cs12-testing-result-card">
            <div className="cs12-scope-header-row">
              <div className="cs12-scope-title-col">
                <span className="cs12-scope-index">11</span>
                <h2 className="cs12-scope-title">User testing Result</h2>
              </div>
            </div>

            {/* Matrix Container */}
            <div className="cs12-testing-table-wrapper">
              <h3 className="cs12-testing-table-title">Mission</h3>

              {/* Table Header Row */}
              <div className="cs12-testing-grid-row cs12-testing-grid-header">
                <div className="cs12-testing-cell cell-task">Task</div>
                <div className="cs12-testing-cell cell-time">Average Time</div>
                <div className="cs12-testing-cell cell-rate">Success Rate</div>
                <div className="cs12-testing-cell cell-comp">Completion</div>
              </div>

              {/* Row 1 */}
              <div className="cs12-testing-grid-row cs12-testing-data-row">
                <div className="cs12-testing-cell cell-task">
                  <span className="cs12-task-text">Sign in & Access Dashboard</span>
                </div>
                <div className="cs12-testing-metric-track">
                  <div className="cs12-testing-cell cell-time">
                    <div className="cs12-test-pill">
                      <span className="pill-dot left" />
                      <span className="pill-num">18</span><span className="pill-unit">s</span>
                      <span className="pill-dot right" />
                    </div>
                  </div>
                  <div className="cs12-testing-cell cell-rate">
                    <div className="cs12-test-pill">
                      <span className="pill-dot left" />
                      <span className="pill-num">87</span><span className="pill-unit">%</span>
                      <span className="pill-dot right" />
                    </div>
                  </div>
                  <div className="cs12-testing-cell cell-comp">
                    <div className="cs12-test-pill">
                      <span className="pill-dot left" />
                      <span className="pill-num">100</span><span className="pill-unit">%</span>
                      <span className="pill-dot right" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 2 */}
              <div className="cs12-testing-grid-row cs12-testing-data-row">
                <div className="cs12-testing-cell cell-task">
                  <span className="cs12-task-text">Book a Gym Pass & Check-In</span>
                </div>
                <div className="cs12-testing-metric-track">
                  <div className="cs12-testing-cell cell-time">
                    <div className="cs12-test-pill">
                      <span className="pill-dot left" />
                      <span className="pill-num">37</span><span className="pill-unit">s</span>
                      <span className="pill-dot right" />
                    </div>
                  </div>
                  <div className="cs12-testing-cell cell-rate">
                    <div className="cs12-test-pill">
                      <span className="pill-dot left" />
                      <span className="pill-num">93</span><span className="pill-unit">%</span>
                      <span className="pill-dot right" />
                    </div>
                  </div>
                  <div className="cs12-testing-cell cell-comp">
                    <div className="cs12-test-pill">
                      <span className="pill-dot left" />
                      <span className="pill-num">97</span><span className="pill-unit">%</span>
                      <span className="pill-dot right" />
                    </div>
                  </div>
                </div>
              </div>

              {/* Row 3 */}
              <div className="cs12-testing-grid-row cs12-testing-data-row">
                <div className="cs12-testing-cell cell-task">
                  <span className="cs12-task-text">Customize Habit Routine & Set Reminders</span>
                </div>
                <div className="cs12-testing-metric-track">
                  <div className="cs12-testing-cell cell-time">
                    <div className="cs12-test-pill">
                      <span className="pill-dot left" />
                      <span className="pill-num">45</span><span className="pill-unit">s</span>
                      <span className="pill-dot right" />
                    </div>
                  </div>
                  <div className="cs12-testing-cell cell-rate">
                    <div className="cs12-test-pill">
                      <span className="pill-dot left" />
                      <span className="pill-num">95</span><span className="pill-unit">%</span>
                      <span className="pill-dot right" />
                    </div>
                  </div>
                  <div className="cs12-testing-cell cell-comp">
                    <div className="cs12-test-pill">
                      <span className="pill-dot left" />
                      <span className="pill-num">100</span><span className="pill-unit">%</span>
                      <span className="pill-dot right" />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 12: RESULTS & FINAL IMPACT
            =================================================================== */}
        <section id="sec-12" className="cs12-section">
          <div className="cs12-scope-of-work-card cs12-results-card">
            <div className="cs12-scope-header-row">
              <div className="cs12-scope-title-col">
                <span className="cs12-scope-index">12</span>
                <h2 className="cs12-scope-title">Results</h2>
              </div>
            </div>

            {/* Middle Section: User Feedback */}
            <div className="cs12-feedback-section">
              <h3 className="cs12-feedback-title">User Feedback</h3>

              <div className="cs12-feedback-pills-list">
                {/* Feedback 1 */}
                <div className="cs12-feedback-capsule">
                  <div className="cs12-feedback-avatar-ring">
                    <img
                      src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=120&q=80"
                      alt="User 1"
                      className="cs12-feedback-avatar-img"
                    />
                  </div>
                  <span className="cs12-feedback-capsule-text">
                    <strong>89%</strong> Preferred the simplified habit tracking flow over traditional fitness apps.
                  </span>
                </div>

                {/* Feedback 2 */}
                <div className="cs12-feedback-capsule">
                  <div className="cs12-feedback-avatar-ring">
                    <img
                      src="https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=120&q=80"
                      alt="User 2"
                      className="cs12-feedback-avatar-img"
                    />
                  </div>
                  <span className="cs12-feedback-capsule-text">
                    <strong>91%</strong> Users completed essential workout and meal logging without assistance.
                  </span>
                </div>

                {/* Feedback 3 */}
                <div className="cs12-feedback-capsule">
                  <div className="cs12-feedback-avatar-ring">
                    <img
                      src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=120&q=80"
                      alt="User 3"
                      className="cs12-feedback-avatar-img"
                    />
                  </div>
                  <span className="cs12-feedback-capsule-text">
                    <strong>94%</strong> Found the navigation clear, rewarding, and intuitive.
                  </span>
                </div>
              </div>
            </div>

            {/* Bottom Row: Left Summary & Right 3 Metric Cards */}
            <div className="cs12-results-bottom-row">
              {/* Left Summary Text */}
              <div className="cs12-results-summary-col">
                <p>
                  The final product delivers a modern fitness and habit experience that combines simplicity, smart coaching, and gamified streak rewards to empower users in managing their daily health goals.
                </p>
              </div>

              {/* Right 3 Metric Cards */}
              <div className="cs12-results-metric-cards-grid">

                {/* Metric Card 1: Task Success Rate */}
                <div className="cs12-rmetric-card card-dot-matrix">
                  <div className="cs12-rmetric-header">
                    <span className="cs12-rmetric-title">Task Success<br />Rate</span>
                    <span className="cs12-rmetric-badge">92%</span>
                  </div>
                  <div className="cs12-rmetric-dot-chart">
                    {[4, 5, 3, 6, 4, 7, 5, 8, 12, 11].map((count, colIdx) => (
                      <div key={colIdx} className="cs12-dot-column">
                        {Array.from({ length: 12 }).map((_, dotIdx) => (
                          <span
                            key={dotIdx}
                            className={`cs12-chart-dot ${dotIdx < count ? 'active' : 'inactive'}`}
                          />
                        ))}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Metric Card 2: Confidence Radial Gauge */}
                <div className="cs12-rmetric-card card-radial-gauge">
                  <div className="cs12-rmetric-header">
                    <span className="cs12-rmetric-title">Did users complete<br />routines confidently?</span>
                  </div>
                  <p className="cs12-rmetric-subtext">Users completed routines effortlessly.</p>

                  <div className="cs12-rmetric-gauge-box">
                    <svg viewBox="0 0 160 90" className="cs12-gauge-svg">
                      <path
                        d="M 20 80 A 60 60 0 0 1 140 80"
                        fill="none"
                        stroke="rgba(167, 139, 250, 0.2)"
                        strokeWidth="10"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 20 80 A 60 60 0 0 1 128 40"
                        fill="none"
                        stroke="#a78bfa"
                        strokeWidth="10"
                        strokeLinecap="round"
                      />
                    </svg>
                    <div className="cs12-gauge-center-val">
                      <span className="cs12-gauge-pct">86%</span>
                      <span className="cs12-gauge-lbl">Successful Routines</span>
                    </div>
                  </div>
                </div>

                {/* Metric Card 3: Overall Completion Rate */}
                <div className="cs12-rmetric-card card-waveform-chart">
                  <div className="cs12-rmetric-header">
                    <span className="cs12-rmetric-title">Overall Completion<br />Rate</span>
                    <span className="cs12-rmetric-badge">98%</span>
                  </div>
                  <div className="cs12-rmetric-bars-row">
                    {[12, 16, 20, 18, 24, 20, 28, 36, 48, 62, 78, 92, 70, 85, 96, 75, 80, 88, 100, 40, 20, 15, 15, 15].map((h, i) => (
                      <span
                        key={i}
                        className={`cs12-rmetric-bar ${i >= 8 && i <= 18 ? 'active-bar' : 'idle-bar'}`}
                        style={{ height: `${h}%` }}
                      />
                    ))}
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* Bottom Footer Navigation Row */}
        <div className="cs12-case-footer-nav" style={{ margin: '80px 0 40px', display: 'flex', justifyContent: 'center', gap: '20px' }}>
          <button className="cs12-action-btn primary" onClick={onBack}>
            <span>← Back to Case Studies</span>
          </button>
          {onNavigateProject && (
            <button className="cs12-action-btn secondary" onClick={onNavigateProject}>
              <span>Next Project: Gym Management SaaS →</span>
            </button>
          )}
        </div>

  
      {/* Fullscreen Enlarge Modal for User Flow */}
      {isUfFullscreen && (
        <div
          className="cs12-uf-modal-overlay"
          onClick={() => setIsUfFullscreen(false)}
          role="dialog"
          aria-modal="true"
        >
          <div className="cs12-uf-modal-window" onClick={(e) => e.stopPropagation()}>
            {/* Modal Header */}
            <div className="cs12-uf-modal-header">
              <div className="cs12-uf-modal-info">
                <span className="cs12-uf-modal-tag">Architecture Diagram</span>
                <h3 className="cs12-uf-modal-title">08 · Fymble Complete User Flow</h3>
              </div>

              <div className="cs12-uf-modal-actions">
                <div className="cs12-uf-zoom-pill modal-zoom-pill">
                  <button
                    type="button"
                    className="cs12-uf-zoom-btn"
                    onClick={() => setUfModalZoom(z => Math.max(0.6, +(z - 0.15).toFixed(2)))}
                    title="Zoom Out"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                  <span className="cs12-uf-zoom-text">{Math.round(ufModalZoom * 100)}%</span>
                  <button
                    type="button"
                    className="cs12-uf-zoom-btn"
                    onClick={() => setUfModalZoom(z => Math.min(2.0, +(z + 0.15).toFixed(2)))}
                    title="Zoom In"
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                      <line x1="12" y1="5" x2="12" y2="19" />
                      <line x1="5" y1="12" x2="19" y2="12" />
                    </svg>
                  </button>
                  {ufModalZoom !== 1 && (
                    <button
                      type="button"
                      className="cs12-uf-reset-link"
                      onClick={() => setUfModalZoom(1)}
                    >
                      Reset
                    </button>
                  )}
                </div>

                <button
                  type="button"
                  className="cs12-uf-modal-close-btn"
                  onClick={() => setIsUfFullscreen(false)}
                  title="Close (Esc)"
                  aria-label="Close"
                >
                  <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round">
                    <line x1="18" y1="6" x2="6" y2="18" />
                    <line x1="6" y1="6" x2="18" y2="18" />
                  </svg>
                </button>
              </div>
            </div>

            {/* Modal Body: High-resolution scrollable canvas */}
            <div className="cs12-uf-modal-body">
              <div
                className="cs12-uf-modal-canvas"
                style={{
                  zoom: ufModalZoom
                }}
              >
                <UserFlowTreeDiagram />
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
    </div>
  )
}
