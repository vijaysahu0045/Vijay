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
                <div className="cs12-pillar-badge-tag tag-coral">
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
                        <span className="cs12-pbar-val coral-val">85%</span>
                      </div>
                      <div className="cs12-pbar-track">
                        <div className="cs12-pbar-fill fill-coral" style={{ width: '85%' }} />
                      </div>
                    </div>

                    <div className="cs12-pbar-row">
                      <div className="cs12-pbar-head">
                        <span className="cs12-pbar-name">Occasionally</span>
                        <span className="cs12-pbar-val">54%</span>
                      </div>
                      <div className="cs12-pbar-track">
                        <div className="cs12-pbar-fill fill-coral-subtle" style={{ width: '54%' }} />
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
                <div className="cs12-pillar-badge-tag tag-green">
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
                      <circle cx="80" cy="80" r="60" fill="none" stroke="#22C55E" strokeWidth="11"
                        strokeDasharray="210 380" strokeDashoffset="0" strokeLinecap="round" transform="rotate(-90 80 80)" />
                      {/* Segment 2: Slate 65% */}
                      <circle cx="80" cy="80" r="60" fill="none" stroke="#64748b" strokeWidth="11"
                        strokeDasharray="95 380" strokeDashoffset="-220" strokeLinecap="round" transform="rotate(-90 80 80)" />
                      {/* Segment 3: Coral 45% */}
                      <circle cx="80" cy="80" r="60" fill="none" stroke="#FF5757" strokeWidth="11"
                        strokeDasharray="50 380" strokeDashoffset="-320" strokeLinecap="round" transform="rotate(-90 80 80)" />
                    </svg>
                    <div className="cs12-donut-center-badge">
                      <span className="cs12-donut-big-num">85%</span>
                      <span className="cs12-donut-sub-lbl">Top Hurdle</span>
                    </div>
                  </div>

                  <div className="cs12-donut-mini-legend">
                    <div className="cs12-dleg-item">
                      <span className="cs12-dleg-dot dot-green" />
                      <span className="cs12-dleg-text">Lock-in Contracts <strong>85%</strong></span>
                    </div>
                    <div className="cs12-dleg-item">
                      <span className="cs12-dleg-dot dot-slate" />
                      <span className="cs12-dleg-text">Manual Logging <strong>65%</strong></span>
                    </div>
                    <div className="cs12-dleg-item">
                      <span className="cs12-dleg-dot dot-coral" />
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
                      <span className="cs12-mstair-val coral-val">56%</span>
                      <div className="cs12-mstair-bar" style={{ height: '32px', background: '#FF5757' }} />
                      <span className="cs12-mstair-lbl">V. Hard</span>
                    </div>
                    <div className="cs12-mstair-item">
                      <span className="cs12-mstair-val coral-val">45%</span>
                      <div className="cs12-mstair-bar" style={{ height: '48px', background: 'rgba(255, 87, 87, 0.65)' }} />
                      <span className="cs12-mstair-lbl">Hard</span>
                    </div>
                    <div className="cs12-mstair-item">
                      <span className="cs12-mstair-val">32%</span>
                      <div className="cs12-mstair-bar" style={{ height: '62px', background: 'rgba(255, 255, 255, 0.2)' }} />
                      <span className="cs12-mstair-lbl">Neutral</span>
                    </div>
                    <div className="cs12-mstair-item">
                      <span className="cs12-mstair-val green-val">25%</span>
                      <div className="cs12-mstair-bar" style={{ height: '76px', background: 'rgba(34, 197, 94, 0.65)' }} />
                      <span className="cs12-mstair-lbl">Easy</span>
                    </div>
                    <div className="cs12-mstair-item">
                      <span className="cs12-mstair-val green-val">15%</span>
                      <div className="cs12-mstair-bar" style={{ height: '90px', background: '#22C55E' }} />
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
        {/* ===================================================================
            SECTION 05: PROBLEM & SOLUTION (SIDE-BY-SIDE BEFORE VS AFTER MATRIX)
            =================================================================== */}
        <section id="sec-05" className="cs12-section">
          <div className="cs12-scope-of-work-card cs12-problem-solution-card">
            <div className="cs12-scope-header-row">
              <div className="cs12-scope-title-col">
                <span className="cs12-scope-index">05</span>
                <h2 className="cs12-scope-title">Problem &amp; Solution</h2>
              </div>
            </div>

            {/* Sub-Header Statement */}
            <div className="cs12-ps-problem-statement">
              <p>
                Transforming <strong>fragmented fitness tools &amp; rigid yearly contracts</strong> into a single <strong>flexible, AI-driven daily health ecosystem.</strong>
              </p>
            </div>

            {/* Split Comparison Matrix */}
            <div className="cs12-ps-comparison-matrix">
              {/* Left Column: The Friction (Problem) */}
              <div className="cs12-ps-matrix-side ps-side-problem">
                <div className="cs12-ps-side-header">
                  <div className="cs12-ps-side-badge badge-problem">
                    <span className="cs12-side-dot dot-coral" />
                    <span>THE FRICTION • BEFORE</span>
                  </div>
                  <h3 className="cs12-ps-side-heading">Current Industry Gaps</h3>
                </div>

                <div className="cs12-ps-side-cards">
                  {/* Problem Card 1 */}
                  <div className="cs12-ps-card ps-card-coral">
                    <div className="cs12-ps-card-top">
                      <div className="cs12-ps-card-metric coral-metric">68<small>%</small></div>
                      <span className="cs12-ps-card-tag tag-coral">Tool Overload</span>
                    </div>
                    <h4 className="cs12-ps-card-title">App Fragmentation &amp; Manual Fatigue</h4>
                    <p className="cs12-ps-card-desc">
                      Users juggle 3+ disconnected apps for calorie logging, workout routines, and gym memberships, leading to fast cognitive burnout.
                    </p>
                    <div className="cs12-ps-card-chips">
                      <span className="ps-chip chip-coral">✕ 3+ Separate Apps</span>
                      <span className="ps-chip chip-coral">✕ Manual Logging</span>
                    </div>
                  </div>

                  {/* Problem Card 2 */}
                  <div className="cs12-ps-card ps-card-coral">
                    <div className="cs12-ps-card-top">
                      <div className="cs12-ps-card-metric coral-metric">36<small>%</small></div>
                      <span className="cs12-ps-card-tag tag-coral">Financial Lock-In</span>
                    </div>
                    <h4 className="cs12-ps-card-title">Rigid 12-Month Gym Subscriptions</h4>
                    <p className="cs12-ps-card-desc">
                      Traditional gyms demand ₹15,000+ upfront yearly fees with strict lock-ins, causing wasted money when users travel or miss workouts.
                    </p>
                    <div className="cs12-ps-card-chips">
                      <span className="ps-chip chip-coral">✕ Expensive Upfront</span>
                      <span className="ps-chip chip-coral">✕ Zero Flexibility</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Center Transformation Bridge */}
              <div className="cs12-ps-bridge-divider">
                <div className="cs12-ps-bridge-line" />
                <div className="cs12-ps-bridge-node">
                  <div className="cs12-ps-bridge-pulse" />
                  <span className="cs12-ps-bridge-text">TRANSFORM</span>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" className="cs12-ps-bridge-arrow">
                    <line x1="5" y1="12" x2="19" y2="12" />
                    <polyline points="12 5 19 12 12 19" />
                  </svg>
                </div>
                <div className="cs12-ps-bridge-line" />
              </div>

              {/* Right Column: The Breakthrough (Solution) */}
              <div className="cs12-ps-matrix-side ps-side-solution">
                <div className="cs12-ps-side-header">
                  <div className="cs12-ps-side-badge badge-solution">
                    <span className="cs12-side-dot dot-emerald" />
                    <span>THE BREAKTHROUGH • FYMBLE</span>
                  </div>
                  <h3 className="cs12-ps-side-heading">The Unified Solution</h3>
                </div>

                <div className="cs12-ps-side-cards">
                  {/* Solution Card 1 */}
                  <div className="cs12-ps-card ps-card-emerald">
                    <div className="cs12-ps-card-top">
                      <div className="cs12-ps-card-metric emerald-metric">₹99<small>/pass</small></div>
                      <span className="cs12-ps-card-tag tag-emerald">1-Tap Access</span>
                    </div>
                    <h4 className="cs12-ps-card-title">On-Demand Flexible Gym Network</h4>
                    <p className="cs12-ps-card-desc">
                      Work out at any certified partner gym with instant 1-tap QR check-ins. No long-term contracts, pay only when you actually train.
                    </p>
                    <div className="cs12-ps-card-chips">
                      <span className="ps-chip chip-emerald">✓ Instant QR Entry</span>
                      <span className="ps-chip chip-emerald">✓ Pay-Per-Workout</span>
                    </div>
                  </div>

                  {/* Solution Card 2 */}
                  <div className="cs12-ps-card ps-card-emerald">
                    <div className="cs12-ps-card-top">
                      <div className="cs12-ps-card-metric emerald-metric">3s<small> AI Scan</small></div>
                      <span className="cs12-ps-card-tag tag-emerald">Smart Automation</span>
                    </div>
                    <h4 className="cs12-ps-card-title">AI Camera Nutrition &amp; Kyra Coaching</h4>
                    <p className="cs12-ps-card-desc">
                      Snap a single photo of any meal for instant calorie &amp; macro breakdown, paired with Kyra AI for proactive daily consistency nudges.
                    </p>
                    <div className="cs12-ps-card-chips">
                      <span className="ps-chip chip-emerald">✓ Auto Macro Breakdown</span>
                      <span className="ps-chip chip-emerald">✓ 24/7 Kyra AI Accountability</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Takeaway Impact Bar */}
            <div className="cs12-ps-impact-bar">
              <div className="cs12-ps-impact-item">
                <span className="cs12-ps-impact-num">74%</span>
                <span className="cs12-ps-impact-lbl">Drop in daily tracking friction</span>
              </div>
              <div className="cs12-ps-impact-divider" />
              <div className="cs12-ps-impact-item">
                <span className="cs12-ps-impact-num">1 App</span>
                <span className="cs12-ps-impact-lbl">For gym discovery, passes &amp; diet</span>
              </div>
              <div className="cs12-ps-impact-divider" />
              <div className="cs12-ps-impact-item">
                <span className="cs12-ps-impact-num">0</span>
                <span className="cs12-ps-impact-lbl">Rigid lock-ins or hidden contracts</span>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 06: USER PERSONA (CLEAN, SCANNABLE BENTO DESIGN)
            =================================================================== */}
        <section id="sec-06" className="cs12-section">
          <div className="cs12-scope-of-work-card cs12-user-persona-card">
            <div className="cs12-scope-header-row">
              <div className="cs12-scope-title-col">
                <span className="cs12-scope-index">06</span>
                <h2 className="cs12-scope-title">User Persona</h2>
              </div>
            </div>

            {/* Clean Persona Bento Layout */}
            <div className="cs12-persona-bento-grid">
              {/* Left Column: Sleek Profile Card */}
              <div className="cs12-persona-profile-card">
                <div className="cs12-persona-avatar-wrap">
                  <img
                    src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=800&q=80"
                    alt="Wade Warren Persona"
                    className="cs12-persona-avatar"
                  />
                  <div className="cs12-persona-tag-pill">
                    <span className="cs12-persona-pulse" />
                    <span>Active Fitness Enthusiast</span>
                  </div>
                </div>

                <div className="cs12-persona-bio-box">
                  <h3 className="cs12-persona-name">Wade Warren, 28</h3>
                  <p className="cs12-persona-role">Marketing Manager • Bengaluru</p>

                  <div className="cs12-persona-quote-bubble">
                    <span className="cs12-persona-quote-mark">“</span>
                    <p>I need flexible workouts and automatic meal tracking in one app without being locked into yearly gym contracts.</p>
                  </div>

                  <div className="cs12-persona-quick-stats">
                    <div className="cs12-persona-stat-chip">
                      <span className="cs12-chip-label">Workout</span>
                      <span className="cs12-chip-val">4-5 Days/Wk</span>
                    </div>
                    <div className="cs12-persona-stat-chip">
                      <span className="cs12-chip-label">Primary Goal</span>
                      <span className="cs12-chip-val">Strength &amp; Fat Loss</span>
                    </div>
                    <div className="cs12-persona-stat-chip">
                      <span className="cs12-chip-label">Main Friction</span>
                      <span className="cs12-chip-val">App Switching</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right Column: 3 Clean Visual Cards */}
              <div className="cs12-persona-pillars-col">
                {/* Card 1: Goals */}
                <div className="cs12-persona-bento-card bento-goals">
                  <div className="cs12-bento-card-top">
                    <div className="cs12-bento-icon-box icon-goals">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <circle cx="12" cy="12" r="6" />
                        <circle cx="12" cy="12" r="2" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="cs12-bento-title">Core Goals</h4>
                      <span className="cs12-bento-subtitle">What Wade wants to achieve</span>
                    </div>
                  </div>
                  <div className="cs12-bento-pills-list">
                    <div className="cs12-bento-item">
                      <span className="cs12-item-check check-goals">✓</span>
                      <span>Flexible on-demand gym access near work &amp; home</span>
                    </div>
                    <div className="cs12-bento-item">
                      <span className="cs12-item-check check-goals">✓</span>
                      <span>Unified tracking for daily workouts, calories &amp; hydration</span>
                    </div>
                    <div className="cs12-bento-item">
                      <span className="cs12-item-check check-goals">✓</span>
                      <span>Consistent fitness habits with actionable AI guidance</span>
                    </div>
                  </div>
                </div>

                {/* Card 2: Pain Points */}
                <div className="cs12-persona-bento-card bento-pain">
                  <div className="cs12-bento-card-top">
                    <div className="cs12-bento-icon-box icon-pain">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <circle cx="12" cy="12" r="10" />
                        <line x1="12" y1="8" x2="12" y2="12" />
                        <line x1="12" y1="16" x2="12.01" y2="16" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="cs12-bento-title">Frustrations &amp; Pain Points</h4>
                      <span className="cs12-bento-subtitle">What slows him down</span>
                    </div>
                  </div>
                  <div className="cs12-bento-pills-list">
                    <div className="cs12-bento-item">
                      <span className="cs12-item-check check-pain">✕</span>
                      <span>Locked into expensive 12-month memberships</span>
                    </div>
                    <div className="cs12-bento-item">
                      <span className="cs12-item-check check-pain">✕</span>
                      <span>Tired of switching between 3+ separate fitness apps</span>
                    </div>
                    <div className="cs12-bento-item">
                      <span className="cs12-item-check check-pain">✕</span>
                      <span>Tedious manual food logging and nutrition guesswork</span>
                    </div>
                  </div>
                </div>

                {/* Card 3: Key Expectations & Needs */}
                <div className="cs12-persona-bento-card bento-solution">
                  <div className="cs12-bento-card-top">
                    <div className="cs12-bento-icon-box icon-solution">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                        <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="cs12-bento-title">Ideal Fymble Solution</h4>
                      <span className="cs12-bento-subtitle">How Fymble solves it</span>
                    </div>
                  </div>
                  <div className="cs12-bento-pills-list">
                    <div className="cs12-bento-item">
                      <span className="cs12-item-check check-solution">★</span>
                      <span><strong>₹99 On-Demand Pass:</strong> Pay only when you work out</span>
                    </div>
                    <div className="cs12-bento-item">
                      <span className="cs12-item-check check-solution">★</span>
                      <span><strong>AI Photo Logging:</strong> Snap meal for instant calorie &amp; macro breakdown</span>
                    </div>
                    <div className="cs12-bento-item">
                      <span className="cs12-item-check check-solution">★</span>
                      <span><strong>Kyra AI Assistant:</strong> Personalized habit accountability &amp; insights</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 07: USER JOURNEY MAP
            =================================================================== */}
        <section id="sec-07" className="cs12-section">
          <div className="cs12-scope-of-work-card cs12-journey-map-card">
            <div className="cs12-scope-header-row">
              <div className="cs12-scope-title-col">
                <span className="cs12-scope-index">07</span>
                <h2 className="cs12-scope-title">User Journey Map</h2>
              </div>
            </div>

            {/* Top Row: 3 Persona & Context Cards */}
            <div className="cs12-journey-top-cards">
              {/* Card 1: Persona Summary */}
              <div className="cs12-jtop-card card-persona">
                <div className="cs12-jtop-avatar">
                  <img
                    src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=200&q=80"
                    alt="Jenny Wilson"
                  />
                </div>
                <div className="cs12-jtop-info">
                  <h3 className="cs12-jtop-name">Jenny Wilson</h3>
                  <div className="cs12-jtop-meta-grid">
                    <span className="cs12-jmeta-item"><strong>Age:</strong> 31</span>
                    <span className="cs12-jmeta-item"><strong>Occupation:</strong> Product Manager</span>
                    <span className="cs12-jmeta-item"><strong>Location:</strong> Bangalore, India</span>
                    <span className="cs12-jmeta-item"><strong>Status:</strong> Married</span>
                  </div>
                </div>
              </div>

              {/* Card 2: Scenario */}
              <div className="cs12-jtop-card card-scenario">
                <div className="cs12-jtop-header">
                  <div className="cs12-jtop-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
                      <polyline points="14 2 14 8 20 8" />
                      <line x1="16" y1="13" x2="8" y2="13" />
                      <line x1="16" y1="17" x2="8" y2="17" />
                    </svg>
                  </div>
                  <h4 className="cs12-jtop-title">Scenario</h4>
                </div>
                <p className="cs12-jtop-text">
                  Jenny Wilson actively manages a hectic corporate schedule while trying to maintain workout consistency, find flexible gym passes near client meetings, and track daily meal nutrition without complex manual effort.
                </p>
              </div>

              {/* Card 3: Goals & Expectations */}
              <div className="cs12-jtop-card card-goals">
                <div className="cs12-jtop-header">
                  <div className="cs12-jtop-icon">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <circle cx="12" cy="12" r="10" />
                      <circle cx="12" cy="12" r="6" />
                      <circle cx="12" cy="12" r="2" />
                    </svg>
                  </div>
                  <h4 className="cs12-jtop-title">Goals &amp; Expectations</h4>
                </div>
                <ul className="cs12-jtop-list">
                  <li>Easy gym discovery and on-demand pass checkout</li>
                  <li>Quick, automated camera meal logging with AI accuracy</li>
                  <li>Smart Kyra AI habit coaching &amp; workout recovery guidance</li>
                  <li>Reliable QR gym check-in with zero membership lock-ins</li>
                </ul>
              </div>
            </div>

            {/* Journey Map Matrix Grid */}
            <div className="cs12-journey-matrix-wrapper">
              <div className="cs12-journey-matrix">
                {/* Header Row: Stages */}
                <div className="cs12-jmatrix-row row-stages">
                  <div className="cs12-jlabel-cell">Stages</div>
                  <div className="cs12-jstage-cell">Discover</div>
                  <div className="cs12-jstage-cell">Onboarding</div>
                  <div className="cs12-jstage-cell">Explore</div>
                  <div className="cs12-jstage-cell">Pass Booking</div>
                  <div className="cs12-jstage-cell">Track &amp; Manage</div>
                  <div className="cs12-jstage-cell">Grow</div>
                  <div className="cs12-jstage-cell">Support</div>
                </div>

                {/* Row 2: Activities */}
                <div className="cs12-jmatrix-row row-activities">
                  <div className="cs12-jlabel-cell">Activities</div>
                  <div className="cs12-jcontent-cell">
                    <p>Discovers Fymble through fitness creators, friends, or App Store.</p>
                  </div>
                  <div className="cs12-jcontent-cell">
                    <p>Signs up via phone, selects fitness goals &amp; dietary preferences.</p>
                  </div>
                  <div className="cs12-jcontent-cell">
                    <p>Explores nearby partner gyms, live amenities &amp; class schedules.</p>
                  </div>
                  <div className="cs12-jcontent-cell">
                    <p>Selects flexible ₹99 day-pass with instant 1-tap checkout.</p>
                  </div>
                  <div className="cs12-jcontent-cell">
                    <p>Scans meals with AI camera, tracks workout sets &amp; daily macros.</p>
                  </div>
                  <div className="cs12-jcontent-cell">
                    <p>Kyra AI adapts workout intensity, unlocks streak rewards &amp; badges.</p>
                  </div>
                  <div className="cs12-jcontent-cell">
                    <p>Accesses 24/7 support for pass redemption &amp; trainer advice.</p>
                  </div>
                </div>

                {/* Row 3: Pain Points */}
                <div className="cs12-jmatrix-row row-pain-points">
                  <div className="cs12-jlabel-cell label-pain">Pain Points</div>
                  <div className="cs12-jcontent-cell pain-cell">
                    <p>Unclear features and rigid lock-in packages in legacy apps.</p>
                  </div>
                  <div className="cs12-jcontent-cell pain-cell">
                    <p>Lengthy registration forms and tedious onboarding steps.</p>
                  </div>
                  <div className="cs12-jcontent-cell pain-cell">
                    <p>Difficult to find real gym photos and amenity details.</p>
                  </div>
                  <div className="cs12-jcontent-cell pain-cell">
                    <p>Hidden registration fees &amp; complex admission processes.</p>
                  </div>
                  <div className="cs12-jcontent-cell pain-cell">
                    <p>Manual calorie counting is time-consuming and inconsistent.</p>
                  </div>
                  <div className="cs12-jcontent-cell pain-cell">
                    <p>Generic workout advice without personalized recovery.</p>
                  </div>
                  <div className="cs12-jcontent-cell pain-cell">
                    <p>Slow support turnaround from traditional gym desks.</p>
                  </div>
                </div>

                {/* Row 4: Touchpoints */}
                <div className="cs12-jmatrix-row row-touchpoints">
                  <div className="cs12-jlabel-cell">Touch points</div>
                  <div className="cs12-jcontent-cell">
                    <p>Social media ads, Reviews, Web portal</p>
                  </div>
                  <div className="cs12-jcontent-cell">
                    <p>Sign up screen, Kyra AI intro, Goal selector</p>
                  </div>
                  <div className="cs12-jcontent-cell">
                    <p>Gym radar map, Filter chips, Amenities modal</p>
                  </div>
                  <div className="cs12-jcontent-cell">
                    <p>UPI / Card payment, Dynamic QR gate pass</p>
                  </div>
                  <div className="cs12-jcontent-cell">
                    <p>AI Food Scanner, Workout log, Macro charts</p>
                  </div>
                  <div className="cs12-jcontent-cell">
                    <p>Streak tracker, Recovery stats, Rewards hub</p>
                  </div>
                  <div className="cs12-jcontent-cell">
                    <p>In-app chat, Help center, Trainer hotline</p>
                  </div>
                </div>

                {/* Row 5: Emotional & Sentiment */}
                <div className="cs12-jmatrix-row row-emotional">
                  <div className="cs12-jlabel-cell">Emotional</div>
                  
                  {/* Stage 1 */}
                  <div className="cs12-jemotion-cell">
                    <span className="cs12-emoji-icon">🤔</span>
                    <ul className="cs12-emotion-tags">
                      <li>Curious</li>
                      <li>Hopeful</li>
                    </ul>
                  </div>

                  {/* Stage 2 */}
                  <div className="cs12-jemotion-cell">
                    <span className="cs12-emoji-icon">😐</span>
                    <ul className="cs12-emotion-tags">
                      <li>Unsure</li>
                      <li>Evaluative</li>
                    </ul>
                  </div>

                  {/* Stage 3 */}
                  <div className="cs12-jemotion-cell">
                    <span className="cs12-emoji-icon">🧐</span>
                    <ul className="cs12-emotion-tags">
                      <li>Intrigued</li>
                      <li>Optimistic</li>
                    </ul>
                  </div>

                  {/* Stage 4 */}
                  <div className="cs12-jemotion-cell">
                    <span className="cs12-emoji-icon">😊</span>
                    <ul className="cs12-emotion-tags">
                      <li>Relieved</li>
                      <li>Satisfied</li>
                    </ul>
                  </div>

                  {/* Stage 5 */}
                  <div className="cs12-jemotion-cell">
                    <span className="cs12-emoji-icon">🙂</span>
                    <ul className="cs12-emotion-tags">
                      <li>Informed</li>
                      <li>In Control</li>
                    </ul>
                  </div>

                  {/* Stage 6 */}
                  <div className="cs12-jemotion-cell highlight-grow">
                    <span className="cs12-emoji-icon">😃</span>
                    <ul className="cs12-emotion-tags">
                      <li>Confident</li>
                      <li>Empowered</li>
                    </ul>
                  </div>

                  {/* Stage 7 */}
                  <div className="cs12-jemotion-cell">
                    <span className="cs12-emoji-icon">😌</span>
                    <ul className="cs12-emotion-tags">
                      <li>Heard</li>
                      <li>Supported</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 08: USER FLOW
            =================================================================== */}
        <section id="sec-08" className="cs12-section">
          <div className="cs12-scope-of-work-card cs12-user-flow-card">
            <div className="cs12-scope-header-row">
              <div className="cs12-scope-title-col">
                <span className="cs12-scope-index">08</span>
                <h2 className="cs12-scope-title">User Flow</h2>
              </div>
            </div>

            {/* Tree Diagram Body */}
            <div className="cs12-uf-diagram-container">
              <div className="cs12-uf-diagram-inner">

                {/* Level 1: Left Onboarding Device Box */}
                <div className="cs12-uf-onboarding-box">
                  <h3 className="cs12-uf-onboarding-title">Onboarding</h3>
                  <div className="cs12-uf-phone-mockup">
                    <div className="cs12-uf-phone-topbar">
                      <span className="cs12-uf-phone-time">10:41</span>
                      <div className="cs12-uf-phone-island" />
                      <div className="cs12-uf-phone-signals">
                        <span>5G</span>
                        <span>100%</span>
                      </div>
                    </div>

                    <div className="cs12-uf-phone-screen-content">
                      <div className="cs12-uf-phone-brand-row">
                        <span className="cs12-uf-brand-name">FYMBLE</span>
                        <span className="cs12-uf-skip-link">Skip</span>
                      </div>

                      {/* Mockup Mini Card */}
                      <div className="cs12-uf-mini-card">
                        <div className="cs12-uf-mini-card-head">
                          <span className="cs12-uf-mini-sub">VISA •••• 1287</span>
                        </div>
                        <div className="cs12-uf-mini-bal-label">Available balance</div>
                        <div className="cs12-uf-mini-bal-val">$578,395.00</div>

                        <div className="cs12-uf-mini-stats-grid">
                          <div className="cs12-uf-mini-chart-box">
                            <span className="cs12-uf-mini-stat-label">Total Income</span>
                            <span className="cs12-uf-mini-stat-val">$20,175.00</span>
                            <div className="cs12-uf-mini-bar-row">
                              <span style={{ height: '40%' }} />
                              <span style={{ height: '65%' }} />
                              <span style={{ height: '85%' }} />
                              <span style={{ height: '55%' }} />
                              <span style={{ height: '90%' }} />
                            </div>
                          </div>
                          <div className="cs12-uf-mini-quick-box">
                            <span className="cs12-uf-mini-stat-label">Quick Actions</span>
                            <div className="cs12-uf-mini-avatars">
                              <div className="cs12-uf-avatar-dot" />
                              <div className="cs12-uf-avatar-dot" />
                              <div className="cs12-uf-avatar-dot" />
                              <div className="cs12-uf-avatar-add">+</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Bottom Prompt in Phone */}
                      <div className="cs12-uf-phone-prompt-area">
                        <h4 className="cs12-uf-phone-headline">
                          All your Finances,<br />simplified in one place.
                        </h4>

                        <button className="cs12-uf-auth-btn cs12-uf-google-btn">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12.24 10.285V14.4h6.806c-.275 1.765-2.056 5.174-6.806 5.174-4.095 0-7.439-3.389-7.439-7.574s3.344-7.574 7.439-7.574c2.33 0 3.891.989 4.785 1.849l3.254-3.138C18.189 1.186 15.479 0 12.24 0c-6.635 0-12 5.365-12 12s5.365 12 12 12c6.926 0 11.52-4.869 11.52-11.726 0-.788-.085-1.39-.189-1.989H12.24z"/>
                          </svg>
                          <span>Continue with Google</span>
                        </button>

                        <button className="cs12-uf-auth-btn cs12-uf-apple-btn">
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.37c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.07 1.71-.94 2.73 1 .08 2.02-.48 2.64-1.23"/>
                          </svg>
                          <span>Continue With Apple</span>
                        </button>

                        <p className="cs12-uf-phone-login-text">
                          Already have an account? <span className="cs12-uf-login-link">Log in</span>
                        </p>
                      </div>

                      <div className="cs12-uf-home-bar" />
                    </div>
                  </div>
                  <div className="cs12-uf-anchor-pin right-pin" />
                </div>

                {/* Tree Branches Area */}
                <div className="cs12-uf-tree-wrapper">

                  {/* Auth Column (Sign Up / Login / Forgot Password) */}
                  <div className="cs12-uf-col cs12-uf-col-auth">
                    {/* SVG Connector from Onboarding to Sign Up & Login */}
                    <svg className="cs12-uf-svg-connector cs12-conn-onboard-auth" viewBox="0 0 100 200" preserveAspectRatio="none">
                      <path d="M 0 100 C 50 100, 50 40, 100 40" />
                      <path d="M 0 100 C 50 100, 50 160, 100 160" />
                      <circle cx="0" cy="100" r="4" className="cs12-svg-dot" />
                      <circle cx="100" cy="40" r="3.5" className="cs12-svg-dot" />
                      <circle cx="100" cy="160" r="3.5" className="cs12-svg-dot" />
                    </svg>

                    <div className="cs12-uf-auth-nodes">
                      <div className="cs12-uf-pill dark">
                        <span>Sign Up</span>
                      </div>

                      <div className="cs12-uf-login-group">
                        <div className="cs12-uf-pill light">
                          <span>Login</span>
                        </div>
                        {/* Vertical branch to Forgot Password */}
                        <div className="cs12-uf-vert-branch">
                          <span className="cs12-uf-vert-line" />
                          <div className="cs12-uf-pill light small-text">
                            <span>Forgot Password</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Dashboard Column */}
                  <div className="cs12-uf-col cs12-uf-col-dashboard">
                    {/* SVG Connector from Sign Up / Login to Dashboard */}
                    <svg className="cs12-uf-svg-connector cs12-conn-auth-dash" viewBox="0 0 100 200" preserveAspectRatio="none">
                      <path d="M 0 40 C 50 40, 50 100, 100 100" />
                      <path d="M 0 160 C 50 160, 50 100, 100 100" />
                      <circle cx="0" cy="40" r="3.5" className="cs12-svg-dot" />
                      <circle cx="0" cy="160" r="3.5" className="cs12-svg-dot" />
                      <circle cx="100" cy="100" r="4" className="cs12-svg-dot" />
                    </svg>

                    <div className="cs12-uf-pill dark hero-dashboard">
                      <span>Dashboard</span>
                    </div>
                  </div>

                  {/* Main Feature Modules & Sub-branches Column */}
                  <div className="cs12-uf-col cs12-uf-col-modules">
                    {/* SVG Fan-out Connector from Dashboard to 6 modules */}
                    <svg className="cs12-uf-svg-connector cs12-conn-dash-modules" viewBox="0 0 100 680" preserveAspectRatio="none">
                      <path d="M 0 340 C 50 340, 50 40, 100 40" />
                      <path d="M 0 340 C 50 340, 50 160, 100 160" />
                      <path d="M 0 340 C 50 340, 50 280, 100 280" />
                      <path d="M 0 340 C 50 340, 50 400, 100 400" />
                      <path d="M 0 340 C 50 340, 50 520, 100 520" />
                      <path d="M 0 340 C 50 340, 50 640, 100 640" />
                      <circle cx="0" cy="340" r="4" className="cs12-svg-dot" />
                      <circle cx="100" cy="40" r="3.5" className="cs12-svg-dot" />
                      <circle cx="100" cy="160" r="3.5" className="cs12-svg-dot" />
                      <circle cx="100" cy="280" r="3.5" className="cs12-svg-dot" />
                      <circle cx="100" cy="400" r="3.5" className="cs12-svg-dot" />
                      <circle cx="100" cy="520" r="3.5" className="cs12-svg-dot" />
                      <circle cx="100" cy="640" r="3.5" className="cs12-svg-dot" />
                    </svg>

                    <div className="cs12-uf-module-rows">

                      {/* Row 1: Manage Cards */}
                      <div className="cs12-uf-module-row">
                        <div className="cs12-uf-pill dark module-pill">
                          <span>Manage Cards</span>
                        </div>
                        <div className="cs12-uf-sub-branches">
                          <svg className="cs12-uf-svg-connector cs12-conn-sub-2" viewBox="0 0 60 90" preserveAspectRatio="none">
                            <path d="M 0 45 C 30 45, 30 20, 60 20" />
                            <path d="M 0 45 C 30 45, 30 70, 60 70" />
                            <circle cx="0" cy="45" r="3" className="cs12-svg-dot" />
                            <circle cx="60" cy="20" r="3" className="cs12-svg-dot" />
                            <circle cx="60" cy="70" r="3" className="cs12-svg-dot" />
                          </svg>
                          <div className="cs12-uf-sub-pills">
                            <div className="cs12-uf-pill light sub-pill">
                              <span>Card Details</span>
                            </div>
                            <div className="cs12-uf-pill light sub-pill">
                              <span>Card Security</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Row 2: Analytics */}
                      <div className="cs12-uf-module-row">
                        <div className="cs12-uf-pill dark module-pill">
                          <span>Analytics</span>
                        </div>
                        <div className="cs12-uf-sub-branches">
                          <svg className="cs12-uf-svg-connector cs12-conn-sub-2" viewBox="0 0 60 90" preserveAspectRatio="none">
                            <path d="M 0 45 C 30 45, 30 20, 60 20" />
                            <path d="M 0 45 C 30 45, 30 70, 60 70" />
                            <circle cx="0" cy="45" r="3" className="cs12-svg-dot" />
                            <circle cx="60" cy="20" r="3" className="cs12-svg-dot" />
                            <circle cx="60" cy="70" r="3" className="cs12-svg-dot" />
                          </svg>
                          <div className="cs12-uf-sub-pills">
                            <div className="cs12-uf-pill light sub-pill">
                              <span>Overview</span>
                            </div>
                            <div className="cs12-uf-pill light sub-pill">
                              <span>Spending Analysis</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Row 3: Transfer Money */}
                      <div className="cs12-uf-module-row">
                        <div className="cs12-uf-pill dark module-pill">
                          <span>Transfer Money</span>
                        </div>
                        <div className="cs12-uf-sub-branches">
                          <svg className="cs12-uf-svg-connector cs12-conn-sub-3" viewBox="0 0 60 130" preserveAspectRatio="none">
                            <path d="M 0 65 C 30 65, 30 18, 60 18" />
                            <path d="M 0 65 C 30 65, 30 65, 60 65" />
                            <path d="M 0 65 C 30 65, 30 112, 60 112" />
                            <circle cx="0" cy="65" r="3" className="cs12-svg-dot" />
                            <circle cx="60" cy="18" r="3" className="cs12-svg-dot" />
                            <circle cx="60" cy="65" r="3" className="cs12-svg-dot" />
                            <circle cx="60" cy="112" r="3" className="cs12-svg-dot" />
                          </svg>
                          <div className="cs12-uf-sub-pills">
                            <div className="cs12-uf-pill light sub-pill">
                              <span>Add Recipient</span>
                            </div>
                            <div className="cs12-uf-pill light sub-pill">
                              <span>Enter Amount</span>
                            </div>
                            <div className="cs12-uf-pill light sub-pill">
                              <span>Review & Confirm</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Row 4: Transaction Details */}
                      <div className="cs12-uf-module-row">
                        <div className="cs12-uf-pill dark module-pill">
                          <span>Transaction Details</span>
                        </div>
                        <div className="cs12-uf-sub-branches">
                          <svg className="cs12-uf-svg-connector cs12-conn-sub-2" viewBox="0 0 60 90" preserveAspectRatio="none">
                            <path d="M 0 45 C 30 45, 30 20, 60 20" />
                            <path d="M 0 45 C 30 45, 30 70, 60 70" />
                            <circle cx="0" cy="45" r="3" className="cs12-svg-dot" />
                            <circle cx="60" cy="20" r="3" className="cs12-svg-dot" />
                            <circle cx="60" cy="70" r="3" className="cs12-svg-dot" />
                          </svg>
                          <div className="cs12-uf-sub-pills">
                            <div className="cs12-uf-pill light sub-pill">
                              <span>Receipt & Summary</span>
                            </div>
                            <div className="cs12-uf-pill light sub-pill">
                              <span>Download Statement</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Row 5: Payment Card */}
                      <div className="cs12-uf-module-row">
                        <div className="cs12-uf-pill dark module-pill">
                          <span>Payment Card</span>
                        </div>
                        <div className="cs12-uf-sub-branches">
                          <svg className="cs12-uf-svg-connector cs12-conn-sub-2" viewBox="0 0 60 90" preserveAspectRatio="none">
                            <path d="M 0 45 C 30 45, 30 20, 60 20" />
                            <path d="M 0 45 C 30 45, 30 70, 60 70" />
                            <circle cx="0" cy="45" r="3" className="cs12-svg-dot" />
                            <circle cx="60" cy="20" r="3" className="cs12-svg-dot" />
                            <circle cx="60" cy="70" r="3" className="cs12-svg-dot" />
                          </svg>
                          <div className="cs12-uf-sub-pills">
                            <div className="cs12-uf-pill light sub-pill">
                              <span>Select Method</span>
                            </div>
                            <div className="cs12-uf-pill light sub-pill">
                              <span>Confirm Setup</span>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* Row 6: Swap Coins */}
                      <div className="cs12-uf-module-row">
                        <div className="cs12-uf-pill dark module-pill">
                          <span>Swap Coins</span>
                        </div>
                        <div className="cs12-uf-sub-branches">
                          <svg className="cs12-uf-svg-connector cs12-conn-sub-3" viewBox="0 0 60 130" preserveAspectRatio="none">
                            <path d="M 0 65 C 30 65, 30 18, 60 18" />
                            <path d="M 0 65 C 30 65, 30 65, 60 65" />
                            <path d="M 0 65 C 30 65, 30 112, 60 112" />
                            <circle cx="0" cy="65" r="3" className="cs12-svg-dot" />
                            <circle cx="60" cy="18" r="3" className="cs12-svg-dot" />
                            <circle cx="60" cy="65" r="3" className="cs12-svg-dot" />
                            <circle cx="60" cy="112" r="3" className="cs12-svg-dot" />
                          </svg>
                          <div className="cs12-uf-sub-pills">
                            <div className="cs12-uf-pill light sub-pill">
                              <span>Card Selection</span>
                            </div>
                            <div className="cs12-uf-pill light sub-pill">
                              <span>Enter Amount</span>
                            </div>
                            <div className="cs12-uf-pill light sub-pill">
                              <span>Confirm Exchange</span>
                            </div>
                          </div>
                        </div>
                      </div>

                    </div>
                  </div>

                </div>

              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 09: GRID SYSTEM
            =================================================================== */}
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
                        stroke="rgba(255, 255, 255, 0.12)"
                        strokeWidth="10"
                        strokeLinecap="round"
                      />
                      <path
                        d="M 20 80 A 60 60 0 0 1 128 40"
                        fill="none"
                        stroke="#FF5757"
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

      </main>
    </div>
  )
}
