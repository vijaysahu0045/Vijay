import React, { useState, useEffect, useRef } from 'react'
import './DesignThinking.css'
import bgImage from './assets/projects-bg.png'
import homeBeforeImg from './assets/fymble-mockup-before.png'
import homeAfterImg from './assets/fymble-mockup-after.png'
import point6Img from './assets/dt-point6-preview.png'
import point7Img from './assets/dt-point7-preview.png'

const UX_POINTS = [
  {
    id: 1,
    col: 'left',
    badge: '1',
    title: 'Location First',
    desc: "Shows user's current location so they can instantly find gyms near them. Reduces search effort and shows relevant results.",
    pinPos: { top: '10.5%', left: '17%' },
    chip: {
      icon: '📍',
      title: 'Jayanagar',
      subtitle: '28th Main Rd, Bengaluru'
    }
  },
  {
    id: 2,
    col: 'right',
    badge: '2',
    title: 'Promotional Banner (GIF)',
    desc: 'A high-visibility banner that instantly communicates the core value – lowest prices. Creates interest, builds price awareness and is easy to share with friends.',
    pinPos: { top: '23%', right: '17%' },
    promo: {
      icon: '⚡',
      title: 'Lowest Price Ever',
      subtitle: 'Builds instant attention and drives exploration.'
    }
  },
  {
    id: 3,
    col: 'left',
    badge: '3',
    title: 'Gym Listing at a Glance',
    desc: 'Shows gym image, name, location, distance and daily price in one card. Users can quickly compare options and book directly without opening multiple screens.',
    pinPos: { top: '48%', left: '17%' },
    chipsList: [
      { icon: '🖼️', text: 'Gym image' },
      { icon: '📍', text: 'Distance & location' },
      { icon: '₹', text: 'Daily price' },
      { icon: '🎟️', text: 'Book CTA' }
    ]
  },
  {
    id: 4,
    col: 'right',
    badge: '4',
    title: 'Quick Explore Tabs',
    desc: 'Multiple entry points to explore gyms based on different user needs. Helps users quickly discover relevant gyms, nearby options, total gym count and special offers.',
    pinPos: { top: '33.5%', right: '17%' },
    tabs: [
      { label: 'All', icon: '▦', active: true },
      { label: 'Nearby', icon: '📍' },
      { label: '63 Gyms', count: true },
      { label: 'Offer', icon: '🏷️' }
    ]
  },
  {
    id: 5,
    col: 'right',
    badge: '5',
    title: 'Kyra AI – Personalised Health Coach',
    desc: 'An AI agent that chats with users, answers their questions and provides personalised guidance for fitness, nutrition and overall health.',
    pinPos: { top: '67.5%', right: '17%' },
    bullets: [
      'Instant answers to fitness questions',
      'Personalised recommendations',
      'Always accessible from home and bottom nav'
    ],
    bulletIcon: '💬'
  },
  {
    id: 6,
    col: 'left',
    badge: '6',
    title: 'AI Scanner – Food Insights',
    desc: 'Scan your food and get nutritional insights including calories, protein, carbs, fats and more. Helps users make better food choices and stay on track with their goals.',
    pinPos: { top: '86.5%', left: '46%' },
    image: point6Img,
    bullets: [
      'Scan food',
      'Get nutrition insights',
      'Track your diet easily'
    ],
    bulletIcon: '📷'
  },
  {
    id: 7,
    col: 'right',
    badge: '7',
    title: 'Gym Mate – Find Workout Partners',
    desc: 'Helps users find nearby fitness partners and book a gym together. Makes fitness more social, engaging and motivating.',
    pinPos: { top: '86.5%', right: '37%' },
    image: point7Img,
    bullets: [
      'Find nearby fitness partners',
      'Book a gym together',
      'Stay motivated and consistent'
    ],
    bulletIcon: '👥'
  }
]

export default function DesignThinking({ onBack }) {
  const [activeUxStep, setActiveUxStep] = useState(1)
  const [revealedCount, setRevealedCount] = useState(1)
  const [isUxPlaying, setIsUxPlaying] = useState(true)
  const [isHoverPaused, setIsHoverPaused] = useState(false)
  const [hasInView, setHasInView] = useState(false)
  const uxSectionRef = useRef(null)

  // IntersectionObserver to auto-start sequence when user scrolls to this section
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setHasInView(true)
        }
      },
      { threshold: 0.15 }
    )

    if (uxSectionRef.current) {
      observer.observe(uxSectionRef.current)
    }

    return () => observer.disconnect()
  }, [])

  // Timed sequential reveal effect (~4 seconds per point)
  useEffect(() => {
    if (!hasInView || !isUxPlaying || isHoverPaused) return

    const timer = setInterval(() => {
      setRevealedCount((prevRevealed) => {
        if (prevRevealed < 7) {
          const next = prevRevealed + 1
          setActiveUxStep(next)
          return next
        } else {
          // Once all 7 are revealed, gentle spotlight cycle
          setActiveUxStep((prevStep) => (prevStep % 7) + 1)
          return prevRevealed
        }
      })
    }, 4000)

    return () => clearInterval(timer)
  }, [hasInView, isUxPlaying, isHoverPaused])

  const handleSelectStep = (stepId) => {
    setActiveUxStep(stepId)
    if (stepId > revealedCount) {
      setRevealedCount(stepId)
    }
  }

  const handleResetSequence = () => {
    setRevealedCount(1)
    setActiveUxStep(1)
    setIsUxPlaying(true)
  }

  const beforePoints = [
    'Heavy banner with limited information',
    'Key services mixed without clear hierarchy',
    'Gym discovery not prominent',
    'Important actions like booking were not visible upfront',
    'Kyra AI was not easily accessible',
  ]

  const afterPoints = [
    'Clear location with quick access to nearby gyms',
    'Simple category navigation (All, Nearby, Gyms, Offer)',
    'Gym listing with distance, price and direct booking',
    'Cleaner layout with better visual hierarchy',
    'Dedicated Kyra AI section for easy access to health coaching',
  ]

  const keyImprovements = [
    {
      num: '01',
      title: 'Simplified Gym Discovery',
      desc: 'Made nearby gyms easier to discover with visible locations, distances, and gym images.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
      ),
    },
    {
      num: '02',
      title: 'Clear Category Navigation',
      desc: 'Organized gyms into All, Nearby, Gyms, and Offers for easier browsing.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
        </svg>
      ),
    },
    {
      num: '03',
      title: 'Transparent Pricing & Booking',
      desc: 'Displayed gym prices and Book buttons directly on listing cards.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="6" y1="4" x2="18" y2="4" />
          <line x1="6" y1="9" x2="18" y2="9" />
          <path d="M6 14h6a4 4 0 0 0 0-8" />
          <line x1="6" y1="14" x2="14" y2="21" />
        </svg>
      ),
    },
    {
      num: '04',
      title: 'Improved Content Hierarchy',
      desc: 'Prioritized gym discovery and booking over secondary content for a cleaner, focused layout.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <polygon points="12 2 2 7 12 12 22 7 12 2" />
          <polyline points="2 17 12 22 22 17" />
          <polyline points="2 12 12 17 22 12" />
        </svg>
      ),
    },
    {
      num: '05',
      title: 'Kyra AI Integration',
      desc: 'Added a dedicated homepage section for users to access their AI health coach.',
      icon: (
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
        </svg>
      ),
    },
  ]

  return (
    <div className="dt-page-container">
      {/* Background Ambience Layer */}
      <div className="dt-bg-image">
        <img src={bgImage} alt="" />
      </div>

      <div className="page-ambient-glow-layer">
        <div className="page-moving-purple-orb" />
      </div>

      {/* Fixed Minimalist Back Button */}
      <button className="dt-home-btn" onClick={onBack} title="Back to Portfolio" aria-label="Back to Portfolio">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Main Container */}
      <main className="dt-main-wrapper">

        {/* ===================================================================
            SECTION 1: THE FYMBLE HOME PAGE REDESIGN BOARD (BEFORE vs AFTER)
            =================================================================== */}
        <div className="dt-board-card">

          {/* Top Board Meta Header */}
          <div className="dt-board-top-meta">
            <div className="dt-board-meta-left">
              <span className="dt-meta-brand">FYMBLE</span>
              <span className="dt-meta-bar">|</span>
              <span className="dt-meta-tag">UX CASE STUDY</span>
            </div>
            <div className="dt-board-meta-right">
              <span className="dt-meta-category">Fitness Marketplace App</span>
              <span className="dt-meta-dash" />
            </div>
          </div>

          {/* Main Board Hero Title */}
          <div className="dt-board-title-row">
            <div className="dt-board-title-col">
              <h1 className="dt-board-heading">
                Home Page<br />
                <span className="dt-highlight-red">Redesign</span>
              </h1>
              <p className="dt-board-subheading">
                From a promotion-focused layout to a user-centric<br />
                fitness marketplace experience.
              </p>
            </div>

            {/* Handwritten Style Annotation with Arrow */}
            <div className="dt-board-annotation-col">
              <div className="dt-annotation-doodle">
                <svg className="dt-curved-arrow" viewBox="0 0 160 70" fill="none">
                  <path
                    d="M 140 10 C 90 10, 40 30, 20 60"
                    stroke="#c084fc"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeDasharray="4 2"
                  />
                  <path
                    d="M 15 50 L 20 62 L 32 58"
                    stroke="#c084fc"
                    strokeWidth="2.2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <p className="dt-doodle-text">
                  A cleaner, more intuitive<br />
                  home page to help users<br />
                  discover gyms and book faster.
                </p>
              </div>
            </div>
          </div>

          {/* MIDDLE SHOWCASE: 4-COLUMN EXACT BEFORE vs AFTER MOCKUP LAYOUT */}
          <div className="dt-showcase-stage">

            {/* Column 1: Before Pain Points */}
            <div className="dt-stage-col dt-before-points-col">
              <div className="dt-badge-wrap">
                <span className="dt-badge dt-badge-before">Before</span>
                <span className="dt-badge-sub">Old Home Page</span>
              </div>

              <ul className="dt-points-list">
                {beforePoints.map((item, idx) => (
                  <li key={idx} className="dt-point-row">
                    <span className="dt-point-icon dt-icon-cross">✕</span>
                    <span className="dt-point-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Column 2: Phone Mockup 1 (Before) */}
            <div className="dt-stage-col dt-phone-col">
              <div className="dt-iphone-mockup">
                <img src={homeBeforeImg} alt="Old Home Page (Before)" className="dt-iphone-img" />
              </div>
            </div>

            {/* Column 3: Phone Mockup 2 (After) */}
            <div className="dt-stage-col dt-phone-col">
              <div className="dt-iphone-mockup dt-iphone-after">
                <img src={homeAfterImg} alt="Updated Home Page (After)" className="dt-iphone-img" />
              </div>
            </div>

            {/* Column 4: After Improvements */}
            <div className="dt-stage-col dt-after-points-col">
              <div className="dt-badge-wrap">
                <span className="dt-badge dt-badge-after">After</span>
                <span className="dt-badge-sub">Updated Home Page</span>
              </div>

              <ul className="dt-points-list">
                {afterPoints.map((item, idx) => (
                  <li key={idx} className="dt-point-row">
                    <span className="dt-point-icon dt-icon-check">✓</span>
                    <span className="dt-point-text">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

          </div>

          {/* ===================================================================
              SECTION 2: DEEP DIVE BREAKDOWN — HOME PAGE DESIGN & UX (7 ANNOTATED POINTS)
              Sequential reveal: Point 1 appears first, then Point 2, Point 3, etc.
              =================================================================== */}
          <div ref={uxSectionRef} className="dt-ux-deepdive-board">

            {/* Header of Section 2 */}
            <div className="dt-ux-header-row">
              <div className="dt-ux-header-left">
                <div className="dt-ux-sub-badge">
                  <span className="dt-ux-badge-tag">UX ANNOTATIONS</span>
                  <span className="dt-ux-badge-sep">•</span>
                  <span className="dt-ux-badge-info">India's First Pay Per Day Fitness App</span>
                </div>
                <h2 className="dt-ux-title">
                  Home Page <span className="dt-highlight-red">Design & UX</span>
                </h2>
                <p className="dt-ux-subtitle">
                  A location-first, discovery-driven home page that helps users find, compare and book gyms easily, while also providing AI-powered fitness support.
                </p>
              </div>

              {/* Sequential Walkthrough Player & Control Bar */}
              <div className="dt-ux-player-bar">
                <div className="dt-ux-player-status">
                  <span className="dt-ux-pulse-dot" />
                  <span className="dt-ux-step-label">
                    Point <strong>0{activeUxStep}</strong> of 07
                  </span>
                </div>

                <div className="dt-ux-step-pills">
                  {UX_POINTS.map((pt) => {
                    const isRevealed = pt.id <= revealedCount
                    const isActive = pt.id === activeUxStep
                    return (
                      <button
                        key={pt.id}
                        className={`dt-step-pill-btn ${isActive ? 'active' : ''} ${isRevealed ? 'revealed' : 'locked'}`}
                        onClick={() => handleSelectStep(pt.id)}
                        title={`Point ${pt.id}: ${pt.title}`}
                        aria-label={`Jump to point ${pt.id}`}
                      >
                        {pt.badge}
                      </button>
                    )
                  })}
                </div>

                <div className="dt-ux-player-actions">
                  <button
                    className="dt-ux-ctrl-btn"
                    onClick={() => setIsUxPlaying(!isUxPlaying)}
                    title={isUxPlaying ? 'Pause automatic walkthrough' : 'Resume walkthrough'}
                  >
                    {isUxPlaying ? '⏸ Pause' : '▶ Play'}
                  </button>
                  <button
                    className="dt-ux-ctrl-btn dt-ux-reset-btn"
                    onClick={handleResetSequence}
                    title="Replay sequence from Point 1"
                  >
                    ↺ Replay
                  </button>
                </div>
              </div>
            </div>

            {/* 3-Column Interactive Stage: Left Cards | Center Phone + Pins | Right Cards */}
            <div
              className="dt-ux-stage-layout"
              onMouseEnter={() => setIsHoverPaused(true)}
              onMouseLeave={() => setIsHoverPaused(false)}
            >
              {/* Left Column (Points 1, 3, 6) */}
              <div className="dt-ux-col dt-ux-col-left">
                {UX_POINTS.filter((p) => p.col === 'left').map((pt) => (
                  <UxPointCard
                    key={pt.id}
                    point={pt}
                    isRevealed={pt.id <= revealedCount}
                    isActive={pt.id === activeUxStep}
                    onSelect={() => handleSelectStep(pt.id)}
                  />
                ))}
              </div>

              {/* Center Column: Phone Mockup with 7 Interactive Floating Pins */}
              <div className="dt-ux-col dt-ux-col-center">
                <div className="dt-ux-phone-wrapper">
                  <img src={homeAfterImg} alt="Fymble Redesigned Home Page" className="dt-ux-phone-img" />

                  {/* 7 Interactive Pins positioned on the phone screen */}
                  {UX_POINTS.map((pt) => {
                    const isActive = pt.id === activeUxStep
                    const isRevealed = pt.id <= revealedCount
                    return (
                      <button
                        key={pt.id}
                        className={`dt-ux-pin ${isActive ? 'pin-active' : ''} ${isRevealed ? 'pin-revealed' : 'pin-muted'}`}
                        style={pt.pinPos}
                        onClick={() => handleSelectStep(pt.id)}
                        title={`Point ${pt.id}: ${pt.title}`}
                        aria-label={`Highlight ${pt.title}`}
                      >
                        <span className="dt-pin-num">{pt.badge}</span>
                        {isActive && <span className="dt-pin-glow-ring" />}
                      </button>
                    )
                  })}
                </div>
              </div>

              {/* Right Column (Points 2, 4, 5, 7) */}
              <div className="dt-ux-col dt-ux-col-right">
                {UX_POINTS.filter((p) => p.col === 'right').map((pt) => (
                  <UxPointCard
                    key={pt.id}
                    point={pt}
                    isRevealed={pt.id <= revealedCount}
                    isActive={pt.id === activeUxStep}
                    onSelect={() => handleSelectStep(pt.id)}
                  />
                ))}
              </div>
            </div>

          </div>

          {/* ===================================================================
              SECTION 3: KEY UX IMPROVEMENTS (5 CARDS)
              =================================================================== */}
          <div className="dt-improvements-container">
            <div className="dt-imp-header">
              <h2 className="dt-imp-heading">
                Key <span className="dt-highlight-red">UX Improvements</span>
              </h2>
            </div>

            {/* 5 Improvement Cards Grid */}
            <div className="dt-imp-grid">
              {keyImprovements.map((card, idx) => (
                <div key={idx} className="dt-card-box">
                  <div className="dt-card-top-row">
                    <div className="dt-card-icon-bubble">{card.icon}</div>
                    <span className="dt-card-num-tag">{card.num}</span>
                  </div>
                  <h3 className="dt-card-name">{card.title}</h3>
                  <p className="dt-card-desc">{card.desc}</p>
                </div>
              ))}
            </div>
          </div>

        </div>
      </main>
    </div>
  )
}

function UxPointCard({ point, isRevealed, isActive, onSelect }) {
  return (
    <div
      className={`dt-ux-card ${isRevealed ? 'card-revealed' : 'card-waiting'} ${isActive ? 'card-active' : ''}`}
      onClick={onSelect}
    >
      <div className="dt-ux-card-header">
        <span className="dt-ux-card-badge">{point.badge}</span>
        <h3 className="dt-ux-card-title">{point.title}</h3>
      </div>

      <p className="dt-ux-card-desc">{point.desc}</p>

      {/* Point 1 Micro Preview: Location Tag */}
      {point.chip && (
        <div className="dt-ux-location-pill">
          <span className="dt-ux-loc-icon">{point.chip.icon}</span>
          <div className="dt-ux-loc-text">
            <strong>{point.chip.title}</strong>
            <span>{point.chip.subtitle}</span>
          </div>
        </div>
      )}

      {/* Point 2 Micro Preview: Promo Banner Hook */}
      {point.promo && (
        <div className="dt-ux-promo-pill">
          <span className="dt-ux-promo-icon">{point.promo.icon}</span>
          <div className="dt-ux-promo-text">
            <strong>{point.promo.title}</strong>
            <span>{point.promo.subtitle}</span>
          </div>
        </div>
      )}

      {/* Point 3 Micro Preview: 4 Gym Feature Chips */}
      {point.chipsList && (
        <div className="dt-ux-chips-row">
          {point.chipsList.map((item, idx) => (
            <span key={idx} className="dt-ux-chip">
              <span className="dt-ux-chip-icon">{item.icon}</span>
              <span className="dt-ux-chip-text">{item.text}</span>
            </span>
          ))}
        </div>
      )}

      {/* Point 4 Micro Preview: Quick Explore Tabs */}
      {point.tabs && (
        <div className="dt-ux-tabs-row">
          {point.tabs.map((tab, idx) => (
            <span key={idx} className={`dt-ux-tab ${tab.active ? 'active' : ''}`}>
              {tab.icon && <span className="dt-tab-icon">{tab.icon}</span>}
              <span className="dt-tab-label">{tab.label}</span>
            </span>
          ))}
        </div>
      )}

      {/* Point 5, 6, 7: Visual Thumbnails & Bullet Points */}
      {(point.image || point.bullets) && (
        <div className="dt-ux-media-block">
          {point.image && (
            <div className="dt-ux-media-thumb">
              <img src={point.image} alt={point.title} />
            </div>
          )}

          {point.bullets && (
            <div className="dt-ux-bullets-wrap">
              {point.bullets.map((b, idx) => (
                <div key={idx} className="dt-ux-bullet-item">
                  <span className="dt-ux-bullet-dot">{point.bulletIcon || '•'}</span>
                  <span className="dt-ux-bullet-text">{b}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}
    </div>
  )
}
