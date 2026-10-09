import React, { useState, useEffect } from 'react'
import './FymbleCaseStudy12.css'
import bgImage from './assets/projects-bg.png'

// Actual Fymble Product Screen Assets
import screen1 from './assets/fymble-screen-1.png'
import screen2 from './assets/fymble-screen-2.png'
import screen3 from './assets/fymble-screen-3.png'
import screen4 from './assets/fymble-screen-4.png'
import screen5 from './assets/fymble-screen-5.png'

// Kyra AI & Food Scanner Assets
import aiDiet1 from './assets/ai-diet-coach-screen-1.png'
import aiDiet2 from './assets/ai-diet-coach-screen-2.png'
import aiDiet3 from './assets/ai-diet-coach-screen-3.png'
import aiDiet4 from './assets/ai-diet-coach-screen-4.png'
import foodScanner1 from './assets/food-scanner-screen-1.png'
import foodScanner2 from './assets/food-scanner-screen-2.png'
import foodScanner3 from './assets/food-scanner-screen-3.png'

// B2B Gym SaaS Assets
import gymMgmt1 from './assets/gym-mgmt-screen-1.png'
import gymMgmt2 from './assets/gym-mgmt-screen-2.png'
import gymMgmt3 from './assets/gym-mgmt-screen-3.png'
import gymMgmt4 from './assets/gym-mgmt-screen-4.png'

import nutritionScreen3 from './assets/nutrition-screen-3.png'
import fymbleWebLanding from './assets/fymble-home-website-landing.png'
import kyraWebLanding from './assets/kyra-ai-website-landing.png'
import gymPassBanner from './assets/fymble-gym-pass-banner.jpg'
import nutritionConsultLanding from './assets/nutrition-consultation-landing.png'
import blogLanding from './assets/blog-page-website-landing.png'

const SECTIONS_INDEX = [
  { num: '01', id: 'sec-01', label: 'Overview' },
  { num: '02', id: 'sec-02', label: 'The Problem' },
  { num: '03', id: 'sec-03', label: 'The Solution' },
  { num: '04', id: 'sec-04', label: 'User Research' },
  { num: '05', id: 'sec-05', label: 'Architecture' },
  { num: '06', id: 'sec-06', label: 'Design System' },
  { num: '07', id: 'sec-07', label: 'Gym Discovery' },
  { num: '08', id: 'sec-08', label: 'Kyra AI Coach' },
  { num: '09', id: 'sec-09', label: 'Food Scanner' },
  { num: '10', id: 'sec-10', label: 'B2B Platform' },
  { num: '11', id: 'sec-11', label: 'Web Ecosystem' },
  { num: '12', id: 'sec-12', label: 'Impact & Results' }
]

export default function FymbleCaseStudy12({ onBack, onNavigateProject }) {
  const [activeNav, setActiveNav] = useState('sec-01')
  const [activePassTab, setActivePassTab] = useState('daily')
  const [activePersona, setActivePersona] = useState('trainee')

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
          <div className="cs12-brand-badge">
            <span className="cs12-brand-dot" />
            <span className="cs12-brand-title">FYMBLE CASE STUDY</span>
          </div>
        </div>

        {/* 12-Section Quick Scroller Strip */}
        <nav className="cs12-sections-nav">
          {SECTIONS_INDEX.map((sec) => (
            <button
              key={sec.id}
              className={`cs12-nav-item ${activeNav === sec.id ? 'active' : ''}`}
              onClick={() => scrollTo(sec.id)}
            >
              <span className="cs12-nav-num">{sec.num}</span>
              <span className="cs12-nav-name">{sec.label}</span>
            </button>
          ))}
        </nav>
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
              <div className="cs12-scope-desc-col">
                <p>
                  Throughout our journey we've gone from research to final design ensuring the user feels confident in testing and defining the final version.
                </p>
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

          {/* Spotlight Hero + Side Screens Showcase (Frameless Pure UI, Maximum Design Visibility) */}
          <div className="cs12-hero-showcase-box">
            <div className="cs12-spotlight-showcase-wrapper">
              {/* Left Side Screens */}
              <div className="cs12-spotlight-side-col">
                {/* Screen 1: Food Scanner */}
                <div className="cs12-spotlight-card">
                  <div className="cs12-screen-badge">
                    <span className="cs12-badge-dot" />
                    <span className="cs12-badge-text">AI Food Scanner</span>
                  </div>
                  <div className="cs12-pure-ui-frame">
                    <img src={foodScanner1} alt="Fymble AI Food Scanner UI" className="cs12-pure-ui-img" />
                  </div>
                  <span className="cs12-screen-sublabel">Instant Macro Vision</span>
                </div>

                {/* Screen 2: Class Booking */}
                <div className="cs12-spotlight-card">
                  <div className="cs12-screen-badge">
                    <span className="cs12-badge-dot" />
                    <span className="cs12-badge-text">Class Booking</span>
                  </div>
                  <div className="cs12-pure-ui-frame">
                    <img src={screen3} alt="Fymble Class Selection UI" className="cs12-pure-ui-img" />
                  </div>
                  <span className="cs12-screen-sublabel">Multi-Studio Access</span>
                </div>
              </div>

              {/* Center Spotlight Hero Screen */}
              <div className="cs12-spotlight-hero-col">
                <div className="cs12-spotlight-card is-hero-spotlight">
                  <div className="cs12-screen-badge center-badge">
                    <span className="cs12-badge-dot-glow" />
                    <span className="cs12-badge-text">Flagship Experience</span>
                  </div>
                  <div className="cs12-pure-ui-frame hero-frame">
                    <img src={screen1} alt="Fymble Pass Discovery UI" className="cs12-pure-ui-img hero-img" />
                  </div>
                  <div className="cs12-hero-info-tag">
                    <h4 className="cs12-hero-info-title">Fymble Discovery &amp; Passes</h4>
                    <p className="cs12-hero-info-desc">Dynamic pricing passes, nearby fitness hub &amp; Kyra AI Assistant</p>
                  </div>
                </div>
              </div>

              {/* Right Side Screens */}
              <div className="cs12-spotlight-side-col">
                {/* Screen 3: Nutrition */}
                <div className="cs12-spotlight-card">
                  <div className="cs12-screen-badge">
                    <span className="cs12-badge-dot" />
                    <span className="cs12-badge-text">Nutrition &amp; Meals</span>
                  </div>
                  <div className="cs12-pure-ui-frame">
                    <img src={nutritionScreen3} alt="Fymble Nutrition Recipes UI" className="cs12-pure-ui-img" />
                  </div>
                  <span className="cs12-screen-sublabel">Smart Recipe Logs</span>
                </div>

                {/* Screen 4: Social & Rewards */}
                <div className="cs12-spotlight-card">
                  <div className="cs12-screen-badge">
                    <span className="cs12-badge-dot" />
                    <span className="cs12-badge-text">Social &amp; Rewards</span>
                  </div>
                  <div className="cs12-pure-ui-frame">
                    <img src={screen5} alt="Fymble Referrals & Rewards UI" className="cs12-pure-ui-img" />
                  </div>
                  <span className="cs12-screen-sublabel">Viral Gamification</span>
                </div>
              </div>
            </div>
            <div className="cs12-showcase-caption">
              <span>Figure 1.1: Core B2C Ecosystem — Complete user journey from smart discovery to daily retention</span>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 02: THE PROBLEM & MARKET FRICTION POINTS
            =================================================================== */}
        <section id="sec-02" className="cs12-section">
          <div className="cs12-section-badge">
            <span className="cs12-num-tag">NO. 02</span>
            <span className="cs12-section-name">THE PROBLEM</span>
          </div>

          <h2 className="cs12-section-heading">Why 78% of people drop out of fitness within 60 days.</h2>
          <p className="cs12-section-intro">
            Traditional fitness experiences create unnecessary friction at every stage — from financial lock-in to fragmented dietary tracking.
          </p>

          <div className="cs12-friction-grid">
            <div className="cs12-friction-card">
              <div className="cs12-friction-icon">🔒</div>
              <span className="cs12-card-tag">FRICTION 01</span>
              <h3>Annual Subscription Traps</h3>
              <p>Traditional gyms force users into 6 to 12-month lock-in contracts, forcing modern mobile professionals to pay for facilities they rarely use.</p>
            </div>

            <div className="cs12-friction-card">
              <div className="cs12-friction-icon">🧩</div>
              <span className="cs12-card-tag">FRICTION 02</span>
              <h3>Fragmented Health Ecosystem</h3>
              <p>Users juggle 3 to 4 disconnected apps: one for gym passes, one for calorie logging, and another for trainer communication.</p>
            </div>

            <div className="cs12-friction-card">
              <div className="cs12-friction-icon">📉</div>
              <span className="cs12-card-tag">FRICTION 03</span>
              <h3>Zero Habit Retention Loop</h3>
              <p>Without contextual motivation and real-time habit feedback, motivation evaporates when work schedules change.</p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 03: THE STRATEGIC SOLUTION & CORE PILLARS
            =================================================================== */}
        <section id="sec-03" className="cs12-section">
          <div className="cs12-section-badge">
            <span className="cs12-num-tag">NO. 03</span>
            <span className="cs12-section-name">THE SOLUTION</span>
          </div>

          <h2 className="cs12-section-heading">A unified fitness marketplace paired with an AI Copilot.</h2>
          <p className="cs12-section-intro">
            Fymble reimagines fitness accessibility across 3 synergistic product pillars:
          </p>

          <div className="cs12-solution-pillars-grid">
            <div className="cs12-sol-card">
              <div className="cs12-sol-badge">PILLAR 01</div>
              <h3>Flexible On-Demand Passes</h3>
              <p>Pay-as-you-go Daily (₹99), Weekly, and Monthly passes across 600+ partner fitness studios with zero long-term lock-in.</p>
              <div className="cs12-sol-preview-img">
                <img src={gymPassBanner} alt="Fymble Daily Pass ₹99" />
              </div>
            </div>

            <div className="cs12-sol-card">
              <div className="cs12-sol-badge">PILLAR 02</div>
              <h3>Kyra AI Health Companion</h3>
              <p>Conversational multimodal AI coach providing real-time meal analysis, instant workout adjustments, and dietary streak motivation.</p>
              <div className="cs12-sol-preview-img">
                <img src={aiDiet1} alt="Kyra AI Assistant" />
              </div>
            </div>

            <div className="cs12-sol-card">
              <div className="cs12-sol-badge">PILLAR 03</div>
              <h3>B2B Gym Partner SaaS</h3>
              <p>Enterprise operating system enabling gym owners to manage live QR check-ins, revenue telemetry, trainer schedules, and member analytics.</p>
              <div className="cs12-sol-preview-img">
                <img src={gymMgmt1} alt="B2B SaaS Dashboard" />
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 04: USER RESEARCH & DUAL-SIDED PERSONAS
            =================================================================== */}
        <section id="sec-04" className="cs12-section">
          <div className="cs12-section-badge">
            <span className="cs12-num-tag">NO. 04</span>
            <span className="cs12-section-name">USER RESEARCH &amp; PERSONAS</span>
          </div>

          <h2 className="cs12-section-heading">Balancing the dual needs of trainees and gym owners.</h2>
          <p className="cs12-section-intro">
            Fymble operates a two-sided marketplace. Success depended on understanding both sides of the fitness counter.
          </p>

          {/* Persona Switcher Tabs */}
          <div className="cs12-persona-tabs">
            <button
              className={`cs12-tab-btn ${activePersona === 'trainee' ? 'active' : ''}`}
              onClick={() => setActivePersona('trainee')}
            >
              <span>🏃‍♂️ Trainee: Rohan (Urban Professional)</span>
            </button>
            <button
              className={`cs12-tab-btn ${activePersona === 'owner' ? 'active' : ''}`}
              onClick={() => setActivePersona('owner')}
            >
              <span>🏋️ Gym Owner: Vikram (Studio Founder)</span>
            </button>
          </div>

          {activePersona === 'trainee' ? (
            <div className="cs12-persona-card">
              <div className="cs12-persona-left">
                <span className="cs12-role-pill">B2C END USER</span>
                <h3>Rohan Mehta, 27</h3>
                <p className="cs12-persona-bio">Software Engineer living in Bengaluru. Works hybrid and frequently travels between Indiranagar and Whitefield.</p>
                <div className="cs12-quote-box">
                  <em>"I want to work out 4 days a week, but paying ₹25,000 upfront for a gym I can only visit on weekends makes no sense."</em>
                </div>
              </div>
              <div className="cs12-persona-right">
                <h4>Core Needs &amp; Pain Points:</h4>
                <ul className="cs12-check-list">
                  <li>Needs pay-per-visit flexibility near office and residence</li>
                  <li>Wants clear calorie &amp; macronutrient feedback without typing numbers</li>
                  <li>Requires instant QR check-in without front-desk delay</li>
                </ul>
              </div>
            </div>
          ) : (
            <div className="cs12-persona-card">
              <div className="cs12-persona-left">
                <span className="cs12-role-pill">B2B PARTNER</span>
                <h3>Vikram Singhal, 42</h3>
                <p className="cs12-persona-bio">Owner of a premium CrossFit &amp; Functional Fitness studio in Koramangala with 12 trainers.</p>
                <div className="cs12-quote-box">
                  <em>"Between 11 AM and 5 PM our floor is 70% empty. We need recurring footfall without slashing our annual brand value."</em>
                </div>
              </div>
              <div className="cs12-persona-right">
                <h4>Core Needs &amp; Pain Points:</h4>
                <ul className="cs12-check-list">
                  <li>Monetize off-peak gym floor capacity through daily pass visitors</li>
                  <li>Automate guest check-in verification via QR code scanning</li>
                  <li>Real-time automated payouts and daily footfall reporting</li>
                </ul>
              </div>
            </div>
          )}
        </section>

        {/* ===================================================================
            SECTION 05: INFORMATION ARCHITECTURE & USER FLOW
            =================================================================== */}
        <section id="sec-05" className="cs12-section">
          <div className="cs12-section-badge">
            <span className="cs12-num-tag">NO. 05</span>
            <span className="cs12-section-name">INFORMATION ARCHITECTURE</span>
          </div>

          <h2 className="cs12-section-heading">Frictionless 8-step end-to-end ecosystem flow.</h2>
          <p className="cs12-section-intro">
            From initial gym discovery to post-workout AI dietary logging and streak gamification:
          </p>

          <div className="cs12-flow-timeline">
            {[
              { step: '01', title: 'Location Radar', desc: 'Auto-detects closest gyms & live amenities' },
              { step: '02', title: 'Studio Details', desc: 'Inspect photos, equipment, trainers & reviews' },
              { step: '03', title: 'Pass Selection', desc: 'Choose Daily ₹99, Weekly or Monthly Pass' },
              { step: '04', title: '1-Tap UPI Pay', desc: 'Frictionless checkout with zero subscription lock-in' },
              { step: '05', title: 'QR Gate Check-In', desc: 'Scan turnstile code for instant verified entry' },
              { step: '06', title: 'Workout Logging', desc: 'Auto-logs session duration and calories burned' },
              { step: '07', title: 'Kyra AI Meal Scan', desc: 'Photo scan post-workout meal for macro balance' },
              { step: '08', title: 'Streak Retention', desc: 'Dynamic streak rewards to maintain consistency' },
            ].map((node) => (
              <div key={node.step} className="cs12-flow-node">
                <span className="cs12-node-num">{node.step}</span>
                <h4>{node.title}</h4>
                <p>{node.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ===================================================================
            SECTION 06: VISUAL IDENTITY & DESIGN SYSTEM
            =================================================================== */}
        <section id="sec-06" className="cs12-section">
          <div className="cs12-section-badge">
            <span className="cs12-num-tag">NO. 06</span>
            <span className="cs12-section-name">DESIGN SYSTEM &amp; TOKENS</span>
          </div>

          <h2 className="cs12-section-heading">High-contrast visual language engineered for high energy.</h2>
          <p className="cs12-section-intro">
            Built with a core <strong>#FF5757 Fymble Coral</strong> primary token, paired with OLED dark themes and clean light surfaces.
          </p>

          <div className="cs12-system-grid">
            {/* Color Palette */}
            <div className="cs12-system-card">
              <h3 className="cs12-card-title">Color Palette Tokens</h3>
              <div className="cs12-swatches-row">
                <div className="cs12-swatch-box" style={{ background: '#FF5757' }}>
                  <span className="cs12-swatch-hex">#FF5757</span>
                  <span className="cs12-swatch-name">Primary Coral</span>
                </div>
                <div className="cs12-swatch-box" style={{ background: '#FF7676' }}>
                  <span className="cs12-swatch-hex">#FF7676</span>
                  <span className="cs12-swatch-name">Coral Glow</span>
                </div>
                <div className="cs12-swatch-box" style={{ background: '#121216' }}>
                  <span className="cs12-swatch-hex">#121216</span>
                  <span className="cs12-swatch-name">Dark Surface</span>
                </div>
                <div className="cs12-swatch-box" style={{ background: '#1F1F27' }}>
                  <span className="cs12-swatch-hex">#1F1F27</span>
                  <span className="cs12-swatch-name">Elevated Card</span>
                </div>
                <div className="cs12-swatch-box" style={{ background: '#FFFFFF', color: '#111' }}>
                  <span className="cs12-swatch-hex" style={{ color: '#111' }}>#FFFFFF</span>
                  <span className="cs12-swatch-name" style={{ color: '#111' }}>Clean White</span>
                </div>
              </div>
            </div>

            {/* Typography & Spatial Baseline */}
            <div className="cs12-system-card">
              <h3 className="cs12-card-title">Spatial Tokens &amp; Geometry</h3>
              <div className="cs12-token-specs-grid">
                <div className="cs12-spec-item">
                  <span className="spec-label">GRID BASELINE</span>
                  <strong>8pt Spatial System</strong>
                </div>
                <div className="cs12-spec-item">
                  <span className="spec-label">CORNER RADII</span>
                  <strong>12px / 18px / 24px</strong>
                </div>
                <div className="cs12-spec-item">
                  <span className="spec-label">GLASS BLUR</span>
                  <strong>Backdrop Blur 24px</strong>
                </div>
                <div className="cs12-spec-item">
                  <span className="spec-label">TYPOGRAPHY</span>
                  <strong>Inter &amp; SF Pro Display</strong>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 07: B2C GYM DISCOVERY & PASS BOOKING EXPERIENCE
            =================================================================== */}
        <section id="sec-07" className="cs12-section">
          <div className="cs12-section-badge">
            <span className="cs12-num-tag">NO. 07</span>
            <span className="cs12-section-name">GYM DISCOVERY &amp; PASSES</span>
          </div>

          <h2 className="cs12-section-heading">Location-aware gym radar and 1-tap pass checkout.</h2>
          <p className="cs12-section-intro">
            Redesigning the discovery experience to reduce the time from app opening to active gym check-in down to under 45 seconds.
          </p>

          <div className="cs12-showcase-split">
            <div className="cs12-split-left">
              <div className="cs12-feature-block">
                <span className="cs12-pill-tag">LIVE PROXIMITY RADAR</span>
                <h3>Instant Amenities &amp; Trainer Availability</h3>
                <p>Interactive filtering lets trainees view live floor occupancy, air conditioning status, specialized equipment, and certified trainers.</p>
              </div>

              <div className="cs12-feature-block">
                <span className="cs12-pill-tag">FLEXIBLE PRICING TIERS</span>
                <h3>Daily ₹99, Weekly &amp; Monthly Passes</h3>
                <p>Transparent pricing with zero hidden registration fees or lock-in clauses.</p>
              </div>

              <div className="cs12-feature-block">
                <span className="cs12-pill-tag">QR ENTRY PASS</span>
                <h3>Dynamic Authenticated Gate Check-In</h3>
                <p>Secure offline-compatible QR codes refreshed every 30 seconds to prevent unauthorized pass sharing.</p>
              </div>
            </div>

            <div className="cs12-split-right">
              <div className="cs12-phone-frame-pair">
                <div className="cs12-phone-card">
                  <img src={screen1} alt="Fymble Pass Booking" />
                  <span className="cs12-phone-label">Pass Checkout Screen</span>
                </div>
                <div className="cs12-phone-card">
                  <img src={screen4} alt="Fymble Pass QR Code" />
                  <span className="cs12-phone-label">Verified Gate Pass</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 08: KYRA AI — MULTIMODAL HEALTH & HABIT COMPANION
            =================================================================== */}
        <section id="sec-08" className="cs12-section">
          <div className="cs12-section-badge">
            <span className="cs12-num-tag">NO. 08</span>
            <span className="cs12-section-name">KYRA AI HEALTH COMPANION</span>
          </div>

          <h2 className="cs12-section-heading">Conversational AI that adapts to daily workout fatigue.</h2>
          <p className="cs12-section-intro">
            Kyra AI serves as an intelligent copilot inside Fymble, interpreting user energy levels, dietary patterns, and recovery metrics.
          </p>

          <div className="cs12-ai-showcase-grid">
            <div className="cs12-ai-screen-card">
              <img src={aiDiet1} alt="Kyra AI Chat Interface" />
              <div className="cs12-ai-card-info">
                <h4>Conversational Habit Coach</h4>
                <p>Provides daily nutrition suggestions based on logged muscle fatigue and target calories.</p>
              </div>
            </div>

            <div className="cs12-ai-screen-card">
              <img src={aiDiet2} alt="Kyra AI Meal Plan Generation" />
              <div className="cs12-ai-card-info">
                <h4>Dynamic Meal Plan Generation</h4>
                <p>Calculates exact protein, carbs, and micronutrient ratios from local Indian and international foods.</p>
              </div>
            </div>

            <div className="cs12-ai-screen-card">
              <img src={aiDiet3} alt="Kyra AI Progress Telemetry" />
              <div className="cs12-ai-card-info">
                <h4>Consistency &amp; Recovery Tracker</h4>
                <p>Predictive recovery advice preventing overtraining through resting heart rate signals.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 09: AI FOOD SCANNER & COMPUTER VISION NUTRITION
            =================================================================== */}
        <section id="sec-09" className="cs12-section">
          <div className="cs12-section-badge">
            <span className="cs12-num-tag">NO. 09</span>
            <span className="cs12-section-name">AI FOOD SCANNER</span>
          </div>

          <h2 className="cs12-section-heading">Instant camera food logging with 96% macronutrient accuracy.</h2>
          <p className="cs12-section-intro">
            Eliminating tedious manual text entry with real-time visual recognition for complex multi-ingredient meals.
          </p>

          <div className="cs12-scanner-trio-row">
            <div className="cs12-scanner-item">
              <div className="cs12-scanner-frame">
                <img src={foodScanner1} alt="AI Camera Food Scanner" />
              </div>
              <h4>01. Point &amp; Scan</h4>
              <p>Camera scans plate and detects items in under 1.2 seconds.</p>
            </div>

            <div className="cs12-scanner-item">
              <div className="cs12-scanner-frame">
                <img src={foodScanner2} alt="AI Macro Breakdown" />
              </div>
              <h4>02. Macro Calculation</h4>
              <p>Instant calorie, protein, carbohydrate, and fat breakdown.</p>
            </div>

            <div className="cs12-scanner-item">
              <div className="cs12-scanner-frame">
                <img src={foodScanner3} alt="AI Daily Calorie Target" />
              </div>
              <h4>03. Auto-Sync Daily Log</h4>
              <p>Updates daily metabolic allowance and alerts Kyra AI coach.</p>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 10: B2B GYM OPERATING SYSTEM & SAAS PLATFORM
            =================================================================== */}
        <section id="sec-10" className="cs12-section">
          <div className="cs12-section-badge">
            <span className="cs12-num-tag">NO. 10</span>
            <span className="cs12-section-name">B2B GYM SAAS PLATFORM</span>
          </div>

          <h2 className="cs12-section-heading">An enterprise dashboard empowering 600+ partner fitness centers.</h2>
          <p className="cs12-section-intro">
            Comprehensive business operations for gym owners: real-time turnstile check-ins, automated payout telemetry, and trainer scheduling.
          </p>

          <div className="cs12-saas-grid">
            <div className="cs12-saas-card">
              <div className="cs12-saas-img-wrap">
                <img src={gymMgmt1} alt="B2B Dashboard Home" />
              </div>
              <div className="cs12-saas-text">
                <h3>Real-Time Live Check-In Telemetry</h3>
                <p>Instant verification of Fymble daily pass holders entering the gym floor, automatically tracking peak capacity hours.</p>
              </div>
            </div>

            <div className="cs12-saas-card">
              <div className="cs12-saas-img-wrap">
                <img src={gymMgmt2} alt="B2B Revenue Analytics" />
              </div>
              <div className="cs12-saas-text">
                <h3>Revenue &amp; Payout Analytics</h3>
                <p>Transparent breakdown of daily pass redemptions, direct bank settlements, and member growth retention curves.</p>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 11: WEB PLATFORM & HIGH-CONVERTING LANDING EXPERIENCES
            =================================================================== */}
        <section id="sec-11" className="cs12-section">
          <div className="cs12-section-badge">
            <span className="cs12-num-tag">NO. 11</span>
            <span className="cs12-section-name">WEB ECOSYSTEM</span>
          </div>

          <h2 className="cs12-section-heading">Responsive web platform and high-converting marketing portals.</h2>
          <p className="cs12-section-intro">
            Designing the official desktop and mobile web experiences at <strong>fymble.app</strong> to drive organic customer acquisition.
          </p>

          <div className="cs12-web-showcase-stack">
            <div className="cs12-web-card">
              <div className="cs12-browser-bar">
                <div className="cs12-browser-dots">
                  <span /><span /><span />
                </div>
                <div className="cs12-browser-url">https://fymble.app</div>
              </div>
              <div className="cs12-web-viewport">
                <img src={fymbleWebLanding} alt="Fymble Official Home Website" />
              </div>
              <div className="cs12-web-meta">
                <h4>Fymble Flagship Web Portal</h4>
                <p>Interactive 3D pass calculator, app download triggers, and partner gym onboarding forms.</p>
              </div>
            </div>

            <div className="cs12-web-dual-row">
              <div className="cs12-web-subcard">
                <div className="cs12-browser-bar">
                  <div className="cs12-browser-url">https://fymble.app/kyra-ai</div>
                </div>
                <img src={kyraWebLanding} alt="Kyra AI Web Landing" />
                <h5>Kyra AI Health Companion Portal</h5>
              </div>

              <div className="cs12-web-subcard">
                <div className="cs12-browser-bar">
                  <div className="cs12-browser-url">https://fymble.app/consultation</div>
                </div>
                <img src={nutritionConsultLanding} alt="1:1 Diet Consultation Web" />
                <h5>1:1 Nutrition &amp; Consultation Booking</h5>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================================
            SECTION 12: MEASURABLE IMPACT, PRODUCTION SHIPPED & REFLECTION
            =================================================================== */}
        <section id="sec-12" className="cs12-section cs12-final-section">
          <div className="cs12-section-badge">
            <span className="cs12-num-tag">NO. 12</span>
            <span className="cs12-section-name">MEASURABLE IMPACT &amp; REFLECTION</span>
          </div>

          <h2 className="cs12-section-heading">Real production metrics and shipped outcomes.</h2>
          <p className="cs12-section-intro">
            Fymble is a live, production-tested platform delivering real value to thousands of trainees daily.
          </p>

          {/* 4 Core Verified Metrics */}
          <div className="cs12-stats-grid">
            <div className="cs12-stat-box">
              <strong className="cs12-stat-number">250+</strong>
              <span className="cs12-stat-label">Production Screens Designed</span>
              <p className="cs12-stat-sub">Across iOS, Android, Web &amp; B2B SaaS</p>
            </div>

            <div className="cs12-stat-box">
              <strong className="cs12-stat-number">20K+</strong>
              <span className="cs12-stat-label">Active Trainees Onboarded</span>
              <p className="cs12-stat-sub">Active fitness marketplace users</p>
            </div>

            <div className="cs12-stat-box">
              <strong className="cs12-stat-number">600+</strong>
              <span className="cs12-stat-label">Partner Gyms &amp; Studios</span>
              <p className="cs12-stat-sub">Integrated on the B2B SaaS operating system</p>
            </div>

            <div className="cs12-stat-box">
              <strong className="cs12-stat-number">+38%</strong>
              <span className="cs12-stat-label">30-Day Trainee Retention</span>
              <p className="cs12-stat-sub">Driven by Kyra AI habit coaching</p>
            </div>
          </div>

          {/* Designer Reflection Card */}
          <div className="cs12-reflection-card">
            <span className="cs12-reflection-tag">PRODUCT DESIGNER REFLECTION</span>
            <h3 className="cs12-reflection-quote">
              "Great product design in fitness isn't about fancy workout graphics. It's about removing the psychological and financial friction that prevents people from showing up."
            </h3>
            <p className="cs12-reflection-body">
              Leading the end-to-end design of Fymble required balancing deep consumer empathy with robust SaaS business economics. By pairing flexible passes with autonomous AI habit reinforcement, we built a product that empowers urban trainees to stay consistent without feeling trapped.
            </p>

            <div className="cs12-footer-action-row">
              <button className="cs12-action-btn primary" onClick={onBack}>
                <span>← Back to Case Studies</span>
              </button>
              {onNavigateProject && (
                <button className="cs12-action-btn secondary" onClick={onNavigateProject}>
                  <span>Next Project: Gym Management SaaS →</span>
                </button>
              )}
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
