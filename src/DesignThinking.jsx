import React, { useState, useEffect, useRef } from 'react'
import './DesignThinking.css'
import bgImage from './assets/projects-bg.png'
import homeBeforeImg from './assets/fymble-mockup-before.png'
import homeAfterImg from './assets/fymble-mockup-after.png'

const UX_STRATEGY_POINTS = [
  {
    id: 1,
    col: 'left',
    badge: '01',
    title: 'Location First',
    tag: "User's current area",
    desc: 'Shows user\'s current location so they can instantly find gyms near them.',
    pinPos: { top: '10.5%', left: '18%' },
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
        <circle cx="12" cy="10" r="3" />
      </svg>
    )
  },
  {
    id: 2,
    col: 'right',
    badge: '02',
    title: 'Lowest Price Ever',
    tag: 'Core value',
    desc: 'A high-visibility banner that instantly communicates the biggest advantage — affordable gym access.',
    pinPos: { top: '23%', right: '18%' },
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    )
  },
  {
    id: 3,
    col: 'left',
    badge: '03',
    title: 'Gym at a Glance',
    tag: 'Compare & Book',
    desc: 'See gym name, distance, location and daily price in one view. Book directly without opening multiple screens.',
    pinPos: { top: '48%', left: '18%' },
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <line x1="8" y1="6" x2="21" y2="6" />
        <line x1="8" y1="12" x2="21" y2="12" />
        <line x1="8" y1="18" x2="21" y2="18" />
        <line x1="3" y1="6" x2="3.01" y2="6" />
        <line x1="3" y1="12" x2="3.01" y2="12" />
        <line x1="3" y1="18" x2="3.01" y2="18" />
      </svg>
    )
  },
  {
    id: 4,
    col: 'right',
    badge: '04',
    title: 'Quick Explore Tabs',
    tag: 'Easy discovery',
    desc: 'Explore all gyms, nearby options, total gym count and special offers in one tap.',
    pinPos: { top: '33.5%', right: '18%' },
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <rect x="3" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="3" width="7" height="7" rx="1.5" />
        <rect x="14" y="14" width="7" height="7" rx="1.5" />
        <rect x="3" y="14" width="7" height="7" rx="1.5" />
      </svg>
    )
  },
  {
    id: 5,
    col: 'right',
    badge: '05',
    title: 'Kyra AI',
    tag: 'Personalised Guidance',
    desc: 'An AI agent that chats with users and provides fitness, nutrition and overall health guidance.',
    pinPos: { top: '67.5%', right: '18%' },
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83" />
      </svg>
    )
  },
  {
    id: 6,
    col: 'left',
    badge: '06',
    title: 'AI Food Scanner',
    tag: 'Nutrition Insights',
    desc: 'Scan your food and get instant nutrition insights — calories, protein, carbs, fats and more.',
    pinPos: { top: '86.5%', left: '46%' },
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 8V5a1 1 0 0 1 1-1h3M16 4h3a1 1 0 0 1 1 1v3M20 16v3a1 1 0 0 1-1 1h-3M8 20H5a1 1 0 0 1-1-1v-3" />
      </svg>
    )
  },
  {
    id: 7,
    col: 'right',
    badge: '07',
    title: 'Gym Mate',
    tag: 'Find Workout Partners',
    desc: 'Helps users find nearby fitness partners and book a gym together. Makes fitness more social and engaging.',
    pinPos: { top: '86.5%', right: '37%' },
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }
]

export default function DesignThinking({ onBack }) {
  const [revealedCount, setRevealedCount] = useState(1)
  const [activeHoverId, setActiveHoverId] = useState(null)
  const strategyRef = useRef(null)

  // Scroll observer to trigger step-by-step reading animation
  useEffect(() => {
    let timer = null
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reveal cards one after another with timed reading intervals
          timer = setInterval(() => {
            setRevealedCount((prev) => {
              if (prev < 7) {
                return prev + 1
              }
              clearInterval(timer)
              return prev
            })
          }, 2400) // 2.4 seconds per card: comfortable, natural reading pace
        }
      },
      { threshold: 0.15 }
    )

    if (strategyRef.current) {
      observer.observe(strategyRef.current)
    }

    return () => {
      observer.disconnect()
      if (timer) clearInterval(timer)
    }
  }, [])

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
              SECTION 2: HOME PAGE UX STRATEGY (EXACT USER FIGMA BOARD IN DARK THEME)
              Sequential reveal: Point 01 appears, then 02, then 03, etc.
              =================================================================== */}
          <div ref={strategyRef} className="dt-ux-strategy-board">

            {/* Top Brand Header */}
            <div className="dt-strat-top-bar">
              <div className="dt-strat-brand">
                <span className="dt-strat-brand-name">Fymble</span>
                <span className="dt-strat-brand-sub">Fitness for Everyone</span>
              </div>
              <div className="dt-strat-pill-meta">
                India's First Pay Per Day Fitness App
              </div>
            </div>

            {/* Hero Title Row */}
            <div className="dt-strat-title-row">
              <h2 className="dt-strat-heading">
                Home Page<br />
                <span className="dt-highlight-red">UX Strategy</span>
              </h2>
              <p className="dt-strat-subtitle">
                A simple, location-first home page designed to help users find, compare and book gyms quickly — with AI-powered fitness support.
              </p>
            </div>

            {/* 3-Column Visual Stage: Left Cards | Center Phone with Pointer Lines | Right Cards */}
            <div className="dt-strat-stage">

              {/* Left Column (01 Location, 03 Gym at a Glance, 06 AI Food Scanner) */}
              <div className="dt-strat-col dt-strat-col-left">
                {UX_STRATEGY_POINTS.filter(p => p.col === 'left').map(item => (
                  <StrategyCard
                    key={item.id}
                    item={item}
                    isRevealed={item.id <= revealedCount}
                    isHovered={activeHoverId === item.id}
                    onHover={() => setActiveHoverId(item.id)}
                    onLeave={() => setActiveHoverId(null)}
                  />
                ))}
              </div>

              {/* Center Column: Phone Mockup with 7 Exact Numbered Pointer Pins */}
              <div className="dt-strat-center-wrap">
                <div className="dt-strat-phone">
                  <img src={homeAfterImg} alt="Fymble Redesigned Home Page" className="dt-strat-phone-img" />

                  {/* 7 Numbered Pins matching reference */}
                  {UX_STRATEGY_POINTS.map(item => {
                    const isRevealed = item.id <= revealedCount
                    const isHovered = activeHoverId === item.id
                    return (
                      <div
                        key={item.id}
                        className={`dt-strat-pin ${isRevealed ? 'pin-visible' : 'pin-hidden'} ${isHovered ? 'pin-active' : ''}`}
                        style={item.pinPos}
                        onMouseEnter={() => setActiveHoverId(item.id)}
                        onMouseLeave={() => setActiveHoverId(null)}
                      >
                        <span>{item.badge}</span>
                        {isHovered && <div className="dt-strat-pin-glow" />}
                      </div>
                    )
                  })}
                </div>
              </div>

              {/* Right Column (02 Lowest Price, 04 Explore Tabs, 05 Kyra AI, 07 Gym Mate) */}
              <div className="dt-strat-col dt-strat-col-right">
                {UX_STRATEGY_POINTS.filter(p => p.col === 'right').map(item => (
                  <StrategyCard
                    key={item.id}
                    item={item}
                    isRevealed={item.id <= revealedCount}
                    isHovered={activeHoverId === item.id}
                    onHover={() => setActiveHoverId(item.id)}
                    onLeave={() => setActiveHoverId(null)}
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

function StrategyCard({ item, isRevealed, isHovered, onHover, onLeave }) {
  return (
    <div
      className={`dt-strat-card ${isRevealed ? 'card-shown' : 'card-hidden'} ${isHovered ? 'card-hovered' : ''}`}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
    >
      <div className="dt-strat-card-header">
        <span className="dt-strat-badge">{item.badge}</span>
        <h3 className="dt-strat-card-title">{item.title}</h3>
        {item.tag && <span className="dt-strat-tag">{item.tag}</span>}
      </div>

      <div className="dt-strat-card-body">
        <div className="dt-strat-icon-box">{item.icon}</div>
        <p className="dt-strat-card-desc">{item.desc}</p>
      </div>
    </div>
  )
}
