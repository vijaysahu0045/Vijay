import React, { useState, useEffect } from 'react'
import './FymbleCaseStudy.css'
import bgImage from './assets/projects-bg.png'
import screen1 from './assets/fymble-screen-1.png'
import screen2 from './assets/fymble-screen-2.png'
import screen3 from './assets/fymble-screen-3.png'
import screen4 from './assets/fymble-screen-4.png'
import screen5 from './assets/fymble-screen-5.png'
import fymbleWebLanding from './assets/fymble-home-website-landing.png'
import kyraAiLanding from './assets/kyra-ai-website-landing.png'
import gymPassBanner from './assets/fymble-gym-pass-banner.jpg'

const NAV_SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'problem', label: 'Problem' },
  { id: 'transformation', label: 'Transformation' },
  { id: 'research', label: 'Insights' },
  { id: 'workflow', label: 'UX Flow' },
  { id: 'decisions', label: 'Key Decisions' },
  { id: 'proof', label: 'Live Product' },
  { id: 'kyra-ai', label: 'AI Coach' },
  { id: 'impact', label: 'Impact' },
  { id: 'design-system', label: 'Design System' }
]

export default function FymbleCaseStudy({ onBack, onNavigateProject }) {
  const [activeSection, setActiveSection] = useState('overview')
  const [activeBeforeAfterTab, setActiveBeforeAfterTab] = useState('after')
  const [selectedDecision, setSelectedDecision] = useState(0)

  // Scroll spy for sticky section nav
  useEffect(() => {
    const handleScroll = () => {
      const scrollPos = window.scrollY + 200
      for (let i = NAV_SECTIONS.length - 1; i >= 0; i--) {
        const el = document.getElementById(NAV_SECTIONS[i].id)
        if (el && el.offsetTop <= scrollPos) {
          setActiveSection(NAV_SECTIONS[i].id)
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
      const offset = 80
      const bodyRect = document.body.getBoundingClientRect().top
      const elementRect = el.getBoundingClientRect().top
      const elementPosition = elementRect - bodyRect
      const offsetPosition = elementPosition - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  const DECISIONS = [
    {
      num: '01',
      title: 'Contextual Gym Discovery & Map Clustering',
      problem: 'Users struggled with endless unstructured lists of gyms without knowing distance, real-time crowding, or whether passes covered their specific workout needs.',
      decision: 'Designed a dual-pane Map + Card interface with smart distance tags, instant pass badges (Day Pass, 10-Session, Monthly), and verified amenity filters.',
      result: 'Reduced time-to-discovery by 42% and allowed users to evaluate gyms within 2 taps without leaving the main map screen.',
      image: screen1,
      tag: 'DISCOVERY UX'
    },
    {
      num: '02',
      title: 'Transparent Multi-Tier Pass Architecture',
      problem: 'Traditional gym memberships lock users into rigid recurring annual contracts, creating severe onboarding friction and cart abandonment.',
      decision: 'Introduced flexible multi-tier pass architecture: 1-Day Trial, Pay-Per-Session flexible packs, and Universal All-Access passes with upfront validity terms.',
      result: 'Increased checkout initiation by 38% and converted first-time explorers into active workout pass holders.',
      image: screen3,
      tag: 'PRICING & PASSES'
    },
    {
      num: '03',
      title: 'Frictionless 3-Step Instant Booking Flow',
      problem: 'Legacy fitness booking required cumbersome phone confirmations, slot waitlists, and repetitive form entries across fragmented studio tools.',
      decision: 'Engineered a unified 3-step bottom-sheet checkout with pre-selected payment methods, instant Apple/Google Pay, and one-tap auto-validation.',
      result: 'Checkout completion rate reached 91.4% with average booking time cut down from 4.5 minutes to under 35 seconds.',
      image: screen5,
      tag: 'CHECKOUT FLOW'
    },
    {
      num: '04',
      title: 'Digital Contactless QR Passbook & Check-in',
      problem: 'Gym reception bottlenecks caused member delays, manual registry checking, and lost paper passes upon arrival at partner fitness centers.',
      decision: 'Designed dynamic offline-ready QR Passbook with auto-brightness, real-time check-in status, and turnstile scan confirmation.',
      result: 'Over 600+ partner gyms adopted instant scanner check-in with zero front-desk delays for over 20,000 active members.',
      image: screen4,
      tag: 'ON-SITE CHECK-IN'
    },
    {
      num: '05',
      title: 'Post-Workout Continuity via Kyra AI Coach',
      problem: 'Most fitness apps abandon the user after the booking transaction, leading to rapid drop-off in workout consistency and habit formation.',
      decision: 'Integrated Kyra AI as a persistent multimodal health companion providing real-time nutrition logging, workout recovery check-ins, and proactive guidance.',
      result: '30-day retention improved by 2.4x as users interacted daily with Kyra AI for diet suggestions and habit reinforcement.',
      image: screen2,
      tag: 'AI HEALTH COMPANION'
    }
  ]

  return (
    <div className="fymble-case-study-root">
      {/* Background Ambience Layer */}
      <div className="cs-bg-layer" aria-hidden="true">
        <img src={bgImage} alt="" className="cs-bg-img" />
        <div className="cs-ambient-glow-orb cs-glow-1" />
        <div className="cs-ambient-glow-orb cs-glow-2" />
      </div>

      {/* Top Header Bar */}
      <header className="cs-top-bar">
        <button className="cs-back-btn" onClick={onBack} aria-label="Go back">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="19" y1="12" x2="5" y2="12" />
            <polyline points="12 19 5 12 12 5" />
          </svg>
          <span>Back to Portfolio</span>
        </button>

        <div className="cs-top-brand">
          <span className="cs-brand-badge">CASE STUDY</span>
          <span className="cs-brand-title">Fymble — Product Design</span>
        </div>

        <a 
          href="https://fymble.app" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="cs-live-pill-btn"
        >
          <span>Visit Live App</span>
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round">
            <line x1="7" y1="17" x2="17" y2="7" />
            <polyline points="7 7 17 7 17 17" />
          </svg>
        </a>
      </header>

      {/* Sticky Section Navigation */}
      <nav className="cs-sticky-nav">
        <div className="cs-sticky-nav-inner">
          {NAV_SECTIONS.map((sec) => (
            <button
              key={sec.id}
              className={`cs-nav-tab ${activeSection === sec.id ? 'active' : ''}`}
              onClick={() => scrollTo(sec.id)}
            >
              {sec.label}
            </button>
          ))}
        </div>
      </nav>

      {/* Main Container */}
      <main className="cs-content-wrapper">

        {/* 1. HERO SECTION */}
        <section id="overview" className="cs-section cs-hero-section">
          <div className="cs-hero-badge-row">
            <span className="cs-pill cs-pill-purple">PRODUCT DESIGN CASE STUDY</span>
            <span className="cs-pill cs-pill-gray">SHIPPED PRODUCT • 2024</span>
          </div>

          <h1 className="cs-hero-title">
            Fymble
            <span className="cs-hero-title-sub">Fitness, redesigned around how people actually train.</span>
          </h1>

          <p className="cs-hero-description">
            An end-to-end fitness marketplace and AI-powered health experience designed to make discovering, 
            booking, and managing fitness seamless across 600+ partner gyms and 20,000+ active members.
          </p>

          {/* Large Hero 3D Composition */}
          <div className="cs-hero-visual-frame">
            <div className="cs-hero-glow-backdrop" />
            <div className="cs-hero-phone-group">
              <div className="cs-hero-phone cs-phone-left">
                <div className="cs-mockup-speaker" />
                <img src={screen3} alt="Fitness class booking" />
              </div>
              <div className="cs-hero-phone cs-phone-center">
                <div className="cs-mockup-speaker" />
                <img src={screen1} alt="Gym discovery and multi-tier passes" />
              </div>
              <div className="cs-hero-phone cs-phone-right">
                <div className="cs-mockup-speaker" />
                <img src={screen2} alt="Smart food scanner and Kyra AI" />
              </div>
            </div>
          </div>
        </section>

        {/* 2. PROJECT SNAPSHOT */}
        <section className="cs-section cs-snapshot-section">
          <div className="cs-snapshot-grid">
            <div className="cs-snapshot-card">
              <span className="cs-snapshot-label">ROLE</span>
              <span className="cs-snapshot-value">Product Designer</span>
              <span className="cs-snapshot-sub">Lead UI/UX, Design Systems & AI UX</span>
            </div>
            <div className="cs-snapshot-card">
              <span className="cs-snapshot-label">PRODUCT</span>
              <span className="cs-snapshot-value">Fymble Ecosystem</span>
              <span className="cs-snapshot-sub">B2C Marketplace + B2B Operations Hub</span>
            </div>
            <div className="cs-snapshot-card">
              <span className="cs-snapshot-label">PLATFORM</span>
              <span className="cs-snapshot-value">Web + iOS & Android</span>
              <span className="cs-snapshot-sub">250+ Production Screens</span>
            </div>
            <div className="cs-snapshot-card">
              <span className="cs-snapshot-label">COLLABORATION</span>
              <span className="cs-snapshot-value">5 Engineers • 1 PM</span>
              <span className="cs-snapshot-sub">Agile sprints from ideation to App Store</span>
            </div>
          </div>
        </section>

        {/* 3. THE PROBLEM */}
        <section id="problem" className="cs-section cs-problem-section">
          <div className="cs-section-header">
            <span className="cs-eyebrow">THE CHALLENGE</span>
            <h2 className="cs-section-title">
              The problem wasn't finding a gym.
              <span className="cs-text-gradient"> It was knowing what to do next.</span>
            </h2>
          </div>

          <div className="cs-narrative-block">
            <p className="cs-lead-text">
              Fitness in modern cities is notoriously fragmented. While gyms and boutique studios are everywhere, 
              the actual user journey—from discovering verified amenities and comparing opaque pricing to managing 
              flexible passes and maintaining dietary consistency—was riddled with friction.
            </p>
          </div>

          <div className="cs-problem-cards-grid">
            <div className="cs-problem-card">
              <div className="cs-problem-icon">🔍</div>
              <h3>Fragmented Discovery</h3>
              <p>Users searched Google Maps, Instagram, and local directories with zero standard information on equipment, peak-hour crowding, or trainer certifications.</p>
            </div>
            <div className="cs-problem-card">
              <div className="cs-problem-icon">🔒</div>
              <h3>Rigid Annual Lock-ins</h3>
              <p>Traditional memberships forced 12-month lock-in contracts with hidden joining fees, discouraging spontaneous training and travelers.</p>
            </div>
            <div className="cs-problem-card">
              <div className="cs-problem-icon">⏱️</div>
              <h3>Cumbersome Booking</h3>
              <p>Booking a trial or session required phone calls, physical registry entries, or incompatible third-party scheduling portals.</p>
            </div>
            <div className="cs-problem-card">
              <div className="cs-problem-icon">📉</div>
              <h3>Post-Booking Drop-off</h3>
              <p>Without ongoing guidance and nutritional support, 68% of first-time pass buyers dropped out within their first three weeks.</p>
            </div>
          </div>
        </section>

        {/* 4. BEFORE → AFTER TRANSFORMATION */}
        <section id="transformation" className="cs-section cs-transformation-section">
          <div className="cs-section-header">
            <span className="cs-eyebrow">EXPERIENCE RE-ENGINEERING</span>
            <h2 className="cs-section-title">From fragmented discovery to effortless execution.</h2>
            <p className="cs-section-subtitle">
              How we redesigned every major user touchpoint from initial curiosity to habit retention.
            </p>
          </div>

          <div className="cs-tab-switcher">
            <button 
              className={`cs-tab-btn ${activeBeforeAfterTab === 'after' ? 'active' : ''}`}
              onClick={() => setActiveBeforeAfterTab('after')}
            >
              Redesigned Fymble Experience
            </button>
            <button 
              className={`cs-tab-btn ${activeBeforeAfterTab === 'before' ? 'active' : ''}`}
              onClick={() => setActiveBeforeAfterTab('before')}
            >
              Legacy Fitness Journey (Before)
            </button>
          </div>

          {activeBeforeAfterTab === 'after' ? (
            <div className="cs-transformation-showcase">
              <div className="cs-trans-grid">
                <div className="cs-trans-card active-state">
                  <div className="cs-trans-step-tag">01 • DISCOVERY</div>
                  <h4>Map + Instant Verified Passes</h4>
                  <p>Real-time location discovery with live crowding tags, verified amenities, and direct one-tap pass previews.</p>
                </div>
                <div className="cs-trans-card active-state">
                  <div className="cs-trans-step-tag">02 • DECISION</div>
                  <h4>Universal Pass Flexibility</h4>
                  <p>Clear transparent day passes, 10-session punch cards, and universal all-gym access with zero lock-ins.</p>
                </div>
                <div className="cs-trans-card active-state">
                  <div className="cs-trans-step-tag">03 • BOOKING</div>
                  <h4>30-Second Express Checkout</h4>
                  <p>Apple Pay / UPI native checkout with instantaneous pass generation and auto-syncing QR code.</p>
                </div>
                <div className="cs-trans-card active-state">
                  <div className="cs-trans-step-tag">04 • CONTINUITY</div>
                  <h4>Kyra AI Daily Coaching</h4>
                  <p>Seamless post-workout macro tracking, computer-vision food scanning, and tailored habit reinforcement.</p>
                </div>
              </div>
            </div>
          ) : (
            <div className="cs-transformation-showcase">
              <div className="cs-trans-grid legacy-state">
                <div className="cs-trans-card">
                  <div className="cs-trans-step-tag">01 • DISCOVERY</div>
                  <h4>Manual Searching Across 5 Apps</h4>
                  <p>Inconsistent phone photos, outdated Google listings, and no pricing transparency.</p>
                </div>
                <div className="cs-trans-card">
                  <div className="cs-trans-step-tag">02 • DECISION</div>
                  <h4>High-Pressure Annual Sales</h4>
                  <p>Forced long-term contracts with aggressive in-person sales pitches and hidden fees.</p>
                </div>
                <div className="cs-trans-card">
                  <div className="cs-trans-step-tag">03 • BOOKING</div>
                  <h4>Physical Desk Check-ins</h4>
                  <p>Paper receipts, plastic RFID cards, and manual ledger logging during reception rush hours.</p>
                </div>
                <div className="cs-trans-card">
                  <div className="cs-trans-step-tag">04 • CONTINUITY</div>
                  <h4>Zero Post-Workout Support</h4>
                  <p>No guidance on nutrition or daily consistency, leading to rapid motivation loss.</p>
                </div>
              </div>
            </div>
          )}
        </section>

        {/* 5. RESEARCH & CORE INSIGHTS */}
        <section id="research" className="cs-section cs-research-section">
          <div className="cs-section-header">
            <span className="cs-eyebrow">USER RESEARCH</span>
            <h2 className="cs-section-title">Key findings that shaped the product roadmap.</h2>
          </div>

          <div className="cs-insights-grid">
            <div className="cs-insight-card">
              <div className="cs-insight-badge">INSIGHT 01</div>
              <h3>Users need immediate clarity on what a pass includes.</h3>
              <p>Ambiguity around locker access, trainer guidance, and shower facilities was the #1 reason users hesitated to book unfamiliar fitness centers.</p>
            </div>
            <div className="cs-insight-card">
              <div className="cs-insight-badge">INSIGHT 02</div>
              <h3>Pricing transparency drives 3x higher conversion.</h3>
              <p>Gyms that displayed upfront per-session rates with zero joining fees converted visitors into paying trainees at triple the benchmark rate.</p>
            </div>
            <div className="cs-insight-card">
              <div className="cs-insight-badge">INSIGHT 03</div>
              <h3>Checkout must be fast enough to complete in a taxi.</h3>
              <p>Over 74% of bookings occurred within 45 minutes of the intended workout time, demanding a lightning-fast one-thumb checkout flow.</p>
            </div>
            <div className="cs-insight-card">
              <div className="cs-insight-badge">INSIGHT 04</div>
              <h3>The real value begins after the booking is done.</h3>
              <p>Users who received dietary recommendations and recovery tips within 2 hours of their workout showed 240% higher 30-day retention.</p>
            </div>
          </div>
        </section>

        {/* 6. DESIGN CHALLENGE */}
        <section className="cs-section cs-challenge-section">
          <div className="cs-challenge-banner">
            <span className="cs-eyebrow cs-eyebrow-light">THE CORE DESIGN QUESTION</span>
            <h2 className="cs-challenge-h1">
              "How might we make fitness discovery and booking feel as frictionless as hailing a ride or ordering dinner?"
            </h2>
            <div className="cs-challenge-pillars">
              <div className="cs-pillar">
                <span className="cs-pillar-num">01</span>
                <h4>Universal Accessibility</h4>
                <p>One unified pass system across 600+ independent partner gyms.</p>
              </div>
              <div className="cs-pillar">
                <span className="cs-pillar-num">02</span>
                <h4>Zero-Friction Checkout</h4>
                <p>3-step bottom sheet checkout with instant QR check-in generation.</p>
              </div>
              <div className="cs-pillar">
                <span className="cs-pillar-num">03</span>
                <h4>Holistic AI Companion</h4>
                <p>Bridging physical workouts with personalized multimodal nutrition coaching.</p>
              </div>
            </div>
          </div>
        </section>

        {/* 7. END-TO-END UX WORKFLOW */}
        <section id="workflow" className="cs-section cs-flow-section">
          <div className="cs-section-header">
            <span className="cs-eyebrow">INFORMATION ARCHITECTURE & JOURNEY</span>
            <h2 className="cs-section-title">The Multi-Step End-to-End User Journey</h2>
            <p className="cs-section-subtitle">
              A carefully structured product workflow designed to eliminate cognitive fatigue at every step.
            </p>
          </div>

          <div className="cs-flow-timeline">
            {[
              { step: '01', name: 'Discover', desc: 'Map proximity & live activity filters' },
              { step: '02', name: 'Explore', desc: 'Verified amenities, photos & reviews' },
              { step: '03', name: 'Compare', desc: 'Side-by-side passes & pricing tiers' },
              { step: '04', name: 'Select Pass', desc: 'Day Pass, 10-Pack or Monthly' },
              { step: '05', name: 'Book', desc: 'Slot time & instant trainer add-on' },
              { step: '06', name: 'Pay', desc: '1-tap native Apple Pay / UPI' },
              { step: '07', name: 'Confirm', desc: 'Digital QR Passbook in Apple Wallet' },
              { step: '08', name: 'Train & Coach', desc: 'Turnstile check-in & Kyra AI tracking' }
            ].map((item, idx) => (
              <div key={item.step} className="cs-flow-node">
                <div className="cs-flow-circle">{item.step}</div>
                <div className="cs-flow-card">
                  <h4>{item.name}</h4>
                  <p>{item.desc}</p>
                </div>
                {idx < 7 && <div className="cs-flow-connector" />}
              </div>
            ))}
          </div>
        </section>

        {/* 8. KEY UX DECISIONS (DEEP DIVES) */}
        <section id="decisions" className="cs-section cs-decisions-section">
          <div className="cs-section-header">
            <span className="cs-eyebrow">DESIGN DECISIONS & RATIONALE</span>
            <h2 className="cs-section-title">Deep Dive: Intentional UX Decisions</h2>
            <p className="cs-section-subtitle">
              Examining specific design problems, architectural decisions, and measurable outcomes.
            </p>
          </div>

          {/* Decision Navigation Pills */}
          <div className="cs-decision-tabs">
            {DECISIONS.map((d, index) => (
              <button
                key={d.num}
                className={`cs-decision-tab-btn ${selectedDecision === index ? 'active' : ''}`}
                onClick={() => setSelectedDecision(index)}
              >
                <span className="cs-dec-tab-num">{d.num}</span>
                <span className="cs-dec-tab-title">{d.title.split('&')[0]}</span>
              </button>
            ))}
          </div>

          {/* Active Decision Card */}
          <div className="cs-decision-spotlight">
            <div className="cs-decision-narrative">
              <span className="cs-dec-tag">{DECISIONS[selectedDecision].tag}</span>
              <h3 className="cs-dec-heading">{DECISIONS[selectedDecision].title}</h3>

              <div className="cs-dec-block">
                <span className="cs-dec-label cs-label-problem">THE PROBLEM</span>
                <p>{DECISIONS[selectedDecision].problem}</p>
              </div>

              <div className="cs-dec-block">
                <span className="cs-dec-label cs-label-decision">THE UX DECISION</span>
                <p>{DECISIONS[selectedDecision].decision}</p>
              </div>

              <div className="cs-dec-block">
                <span className="cs-dec-label cs-label-result">THE MEASURABLE RESULT</span>
                <p>{DECISIONS[selectedDecision].result}</p>
              </div>
            </div>

            <div className="cs-decision-visual">
              <div className="cs-visual-device-frame">
                <div className="cs-mockup-speaker" />
                <img 
                  src={DECISIONS[selectedDecision].image} 
                  alt={DECISIONS[selectedDecision].title} 
                />
              </div>
            </div>
          </div>
        </section>

        {/* 9. REAL PRODUCT PROOF */}
        <section id="proof" className="cs-section cs-proof-section">
          <div className="cs-proof-container">
            <div className="cs-proof-badge-row">
              <span className="cs-live-status-dot" />
              <span className="cs-live-status-text">LIVE IN PRODUCTION</span>
            </div>

            <h2 className="cs-proof-title">
              Designed. Shipped. In the hands of thousands.
            </h2>
            <p className="cs-proof-description">
              Fymble is not a hypothetical concept. It is an active fitness marketplace operating in major metropolitan areas, 
              connecting thousands of fitness enthusiasts with gym owners daily.
            </p>

            <div className="cs-proof-cta-row">
              <a 
                href="https://fymble.app" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cs-primary-cta"
              >
                <span>Experience Live Platform at Fymble.app</span>
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="7" y1="17" x2="17" y2="7" />
                  <polyline points="7 7 17 7 17 17" />
                </svg>
              </a>
            </div>

            {/* Live Web Screenshot Showcase */}
            <div className="cs-proof-web-frame">
              <div className="cs-browser-header">
                <div className="cs-browser-dots">
                  <span className="dot dot-red" />
                  <span className="dot dot-yellow" />
                  <span className="dot dot-green" />
                </div>
                <div className="cs-browser-url">https://fymble.app</div>
              </div>
              <img src={fymbleWebLanding} alt="Fymble Official Live Marketing Website" className="cs-proof-img" />
            </div>
          </div>
        </section>

        {/* 10. AI UX / KYRA HEALTH COMPANION */}
        <section id="kyra-ai" className="cs-section cs-kyra-section">
          <div className="cs-section-header">
            <span className="cs-eyebrow">MULTIMODAL AI UX</span>
            <h2 className="cs-section-title">
              From fitness marketplace to personal health companion.
            </h2>
            <p className="cs-section-subtitle">
              How Kyra AI elevates the user journey beyond static booking into proactive daily wellness.
            </p>
          </div>

          <div className="cs-kyra-grid">
            <div className="cs-kyra-card">
              <div className="cs-kyra-icon">🥑</div>
              <h3>Computer-Vision Food Scanner</h3>
              <p>Users point their camera at any meal to receive instant macronutrient breakdown and personalized calorie forecasting within seconds.</p>
            </div>
            <div className="cs-kyra-card">
              <div className="cs-kyra-icon">💬</div>
              <h3>Conversational Habit Guidance</h3>
              <p>Natural voice and text dialogues that adapt to workout intensity, offering real-time hydration reminders and recovery routines.</p>
            </div>
            <div className="cs-kyra-card">
              <div className="cs-kyra-icon">📈</div>
              <h3>Bio-Adaptive Workout Recommendations</h3>
              <p>Dynamic class and gym recommendations driven by the user's weekly biometric progress and muscle recovery status.</p>
            </div>
          </div>

          {/* Kyra AI Visual Showcase */}
          <div className="cs-kyra-showcase-frame">
            <img src={kyraAiLanding} alt="Kyra AI Health Coach Platform" />
          </div>
        </section>

        {/* 11. SCALE & VERIFIED IMPACT */}
        <section id="impact" className="cs-section cs-impact-section">
          <div className="cs-section-header">
            <span className="cs-eyebrow">MEASURABLE SCALE</span>
            <h2 className="cs-section-title">Quantified Product Impact</h2>
          </div>

          <div className="cs-impact-metrics-grid">
            <div className="cs-impact-card">
              <span className="cs-metric-num">150+</span>
              <span className="cs-metric-label">B2B & B2C Screens Designed</span>
              <p className="cs-metric-desc">Complete user flows spanning customer mobile apps, web portal, and partner management SaaS.</p>
            </div>
            <div className="cs-impact-card">
              <span className="cs-metric-num">20K+</span>
              <span className="cs-metric-label">Active Users Served</span>
              <p className="cs-metric-desc">Seamless workout pass booking, calorie tracking, and gym visits across cities.</p>
            </div>
            <div className="cs-impact-card">
              <span className="cs-metric-num">600+</span>
              <span className="cs-metric-label">Gym & Studio Partners</span>
              <p className="cs-metric-desc">Integrated into Fymble's universal pass network with digital turnstile QR check-in.</p>
            </div>
            <div className="cs-impact-card">
              <span className="cs-metric-num">91.4%</span>
              <span className="cs-metric-label">Checkout Completion Rate</span>
              <p className="cs-metric-desc">Achieved via frictionless 3-step bottom-sheet booking and instant payment integration.</p>
            </div>
          </div>
        </section>

        {/* 12. DESIGN SYSTEM */}
        <section id="design-system" className="cs-section cs-system-section">
          <div className="cs-section-header">
            <span className="cs-eyebrow">FOUNDATIONS & DESIGN SYSTEM</span>
            <h2 className="cs-section-title">Built for Scalability, Consistency & Speed</h2>
          </div>

          <div className="cs-system-grid">
            <div className="cs-system-card">
              <h4>Color Hierarchy</h4>
              <div className="cs-color-swatches">
                <div className="cs-swatch" style={{ background: '#7C3AED' }}><span>#7C3AED</span></div>
                <div className="cs-swatch" style={{ background: '#A78BFA' }}><span>#A78BFA</span></div>
                <div className="cs-swatch" style={{ background: '#121216' }}><span>#121216</span></div>
                <div className="cs-swatch" style={{ background: '#1E1E26' }}><span>#1E1E26</span></div>
                <div className="cs-swatch" style={{ background: '#FFFFFF', color: '#000' }}><span>#FFFFFF</span></div>
              </div>
              <p className="cs-sys-note">High-contrast purple ambient tokens optimized for OLED dark modes.</p>
            </div>

            <div className="cs-system-card">
              <h4>Modular UI Tokens</h4>
              <ul className="cs-token-list">
                <li><span>Border Radius:</span> <strong>12px / 18px / 24px</strong></li>
                <li><span>Grid Baseline:</span> <strong>8pt System</strong></li>
                <li><span>Glass Blur:</span> <strong>Backdrop Blur 24px</strong></li>
                <li><span>Typography:</span> <strong>Inter / SF Pro Display</strong></li>
              </ul>
            </div>
          </div>
        </section>

        {/* 13. FINAL OUTCOME & REFLECTION */}
        <section className="cs-section cs-final-section">
          <div className="cs-final-card">
            <span className="cs-eyebrow cs-eyebrow-light">FINAL REFLECTION</span>
            <h2 className="cs-final-statement">
              "Designing Fymble wasn't about adding more features. It was about making every step between <em>'I want to get fit'</em> and <em>'I am ready to train'</em> feel effortless."
            </h2>
            <p className="cs-final-desc">
              By merging marketplace accessibility with AI-powered dietary habit coaching, Fymble transformed how modern urban trainees discover fitness and stay consistent.
            </p>

            <div className="cs-final-cta-row">
              <button className="cs-primary-cta" onClick={onBack}>
                <span>← Back to All Projects</span>
              </button>
              {onNavigateProject && (
                <button className="cs-secondary-cta" onClick={onNavigateProject}>
                  <span>Next Case Study: Gym Management App →</span>
                </button>
              )}
            </div>
          </div>
        </section>

      </main>
    </div>
  )
}
