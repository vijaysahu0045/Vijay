import React, { useState } from 'react'
import './DesignThinking.css'
import bgImage from './assets/projects-bg.png'
import homeBeforeImg from './assets/fymble-home-before.jpg'
import homeAfterImg from './assets/fymble-home-after.png'
import redesignBoardImg from './assets/fymble-redesign-board.jpg'

export default function DesignThinking({ onBack }) {
  const [modalImg, setModalImg] = useState(null)
  const [modalTitle, setModalTitle] = useState('')
  const [zoomLevel, setZoomLevel] = useState(1)

  const openModal = (img, title) => {
    setModalImg(img)
    setModalTitle(title)
    setZoomLevel(1)
    document.body.style.overflow = 'hidden'
  }

  const closeModal = () => {
    setModalImg(null)
    setModalTitle('')
    setZoomLevel(1)
    document.body.style.overflow = ''
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
            THE EXACT FYMBLE HOME PAGE REDESIGN BOARD
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

          {/* ===================================================================
              MIDDLE SHOWCASE: 4-COLUMN EXACT BEFORE vs AFTER MOCKUP LAYOUT
              =================================================================== */}
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
              <div className="dt-iphone-mockup" onClick={() => openModal(homeBeforeImg, 'Old Home Page (Before)')}>
                {/* Physical Hardware Buttons */}
                <div className="dt-phone-btn dt-btn-action" />
                <div className="dt-phone-btn dt-btn-vol-up" />
                <div className="dt-phone-btn dt-btn-vol-down" />
                <div className="dt-phone-btn dt-btn-power" />
                {/* Top Speaker Ear-piece */}
                <div className="dt-phone-speaker" />

                {/* Inner Screen Display */}
                <div className="dt-phone-screen-wrap">
                  {/* Dynamic Island */}
                  <div className="dt-phone-island">
                    <div className="dt-island-sensor" />
                    <div className="dt-island-lens" />
                  </div>
                  {/* Subtle 3D Glass Sheen */}
                  <div className="dt-phone-glare" />
                  <img src={homeBeforeImg} alt="Old Home Page (Before)" className="dt-iphone-screen" />
                  {/* Home Bar Indicator */}
                  <div className="dt-phone-home-bar" />
                  <div className="dt-iphone-overlay">
                    <span>Click to zoom</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Column 3: Phone Mockup 2 (After) */}
            <div className="dt-stage-col dt-phone-col">
              <div className="dt-iphone-mockup dt-iphone-after" onClick={() => openModal(homeAfterImg, 'Updated Home Page (After)')}>
                {/* Physical Hardware Buttons */}
                <div className="dt-phone-btn dt-btn-action" />
                <div className="dt-phone-btn dt-btn-vol-up" />
                <div className="dt-phone-btn dt-btn-vol-down" />
                <div className="dt-phone-btn dt-btn-power" />
                {/* Top Speaker Ear-piece */}
                <div className="dt-phone-speaker" />

                {/* Inner Screen Display */}
                <div className="dt-phone-screen-wrap">
                  {/* Dynamic Island */}
                  <div className="dt-phone-island">
                    <div className="dt-island-sensor" />
                    <div className="dt-island-lens" />
                  </div>
                  {/* Subtle 3D Glass Sheen */}
                  <div className="dt-phone-glare" />
                  <img src={homeAfterImg} alt="Updated Home Page (After)" className="dt-iphone-screen" />
                  {/* Home Bar Indicator */}
                  <div className="dt-phone-home-bar" />
                  <div className="dt-iphone-overlay">
                    <span>Click to zoom</span>
                  </div>
                </div>
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
              BOTTOM SECTION: KEY UX IMPROVEMENTS (5 CARDS)
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

      {/* ===================================================================
          MODAL LIGHTBOX (ZOOM IN/OUT INSPECT)
          =================================================================== */}
      {modalImg && (
        <div className="dt-modal-overlay" onClick={closeModal}>
          <div className="dt-modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="dt-modal-header">
              <h3 className="dt-modal-title">{modalTitle}</h3>
              <div className="dt-modal-controls">
                <button
                  className="dt-ctrl-btn"
                  onClick={() => setZoomLevel((z) => Math.max(0.6, z - 0.2))}
                  title="Zoom Out"
                >
                  −
                </button>
                <span className="dt-zoom-indicator">{Math.round(zoomLevel * 100)}%</span>
                <button
                  className="dt-ctrl-btn"
                  onClick={() => setZoomLevel((z) => Math.min(2.5, z + 0.2))}
                  title="Zoom In"
                >
                  +
                </button>
                <button className="dt-modal-close-btn" onClick={closeModal} title="Close">
                  ✕
                </button>
              </div>
            </div>

            <div className="dt-modal-body">
              <img
                src={modalImg}
                alt={modalTitle}
                className="dt-modal-img"
                style={{ transform: `scale(${zoomLevel})` }}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
