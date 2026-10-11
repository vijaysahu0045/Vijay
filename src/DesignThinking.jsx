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
  const [viewMode, setViewMode] = useState('comparison') // 'comparison' | 'board'

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

      {/* Fixed Back Button (Unified clean icon, always accessible) */}
      <button className="dt-home-btn" onClick={onBack} title="Back to Portfolio" aria-label="Back to Portfolio">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
          <path d="M15 18l-6-6 6-6" />
        </svg>
      </button>

      {/* Main Container */}
      <main className="dt-main-wrapper">

        {/* ===================================================================
            HEADER: CASE STUDY META & HERO HEADLINE
            =================================================================== */}
        <section className="dt-hero-card">
          <div className="dt-header-meta">
            <div className="dt-pill-badge">
              <span className="dt-pill-brand">FYMBLE</span>
              <span className="dt-pill-sep">|</span>
              <span className="dt-pill-type">UX CASE STUDY</span>
            </div>
            <span className="dt-app-tag">Fitness Marketplace App</span>
          </div>

          <div className="dt-hero-text">
            <h1 className="dt-main-title">
              Home Page <span className="dt-gradient-text">Redesign</span>
            </h1>
            <p className="dt-subtitle">
              From a promotion-focused layout to a user-centric fitness marketplace experience.
            </p>
          </div>

          <div className="dt-annotation-callout">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="dt-callout-icon">
              <path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z" />
            </svg>
            <span className="dt-callout-text">
              "A cleaner, more intuitive home page to help users discover gyms and book faster."
            </span>
          </div>

          {/* View Toggle */}
          <div className="dt-view-toggle">
            <button
              className={`dt-toggle-btn ${viewMode === 'comparison' ? 'active' : ''}`}
              onClick={() => setViewMode('comparison')}
            >
              Side-by-Side Comparison
            </button>
            <button
              className={`dt-toggle-btn ${viewMode === 'board' ? 'active' : ''}`}
              onClick={() => setViewMode('board')}
            >
              Full Case Study Board
            </button>
          </div>
        </section>

        {/* ===================================================================
            VIEW 1: SIDE-BY-SIDE COMPARISON (BEFORE vs AFTER)
            =================================================================== */}
        {viewMode === 'comparison' ? (
          <section className="dt-comparison-section">
            <div className="dt-comparison-grid">

              {/* ---------- BEFORE COLUMN ---------- */}
              <div className="dt-comp-column dt-before-col">
                <div className="dt-col-header">
                  <div className="dt-col-badge before-badge">Before</div>
                  <h3 className="dt-col-title">Old Home Page</h3>
                </div>

                {/* Pain Points */}
                <ul className="dt-points-list">
                  {beforePoints.map((point, idx) => (
                    <li key={idx} className="dt-point-item before-item">
                      <span className="dt-point-icon before-icon">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                          <line x1="18" y1="6" x2="6" y2="18" />
                          <line x1="6" y1="6" x2="18" y2="18" />
                        </svg>
                      </span>
                      <span className="dt-point-text">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Phone Mockup Frame */}
                <div className="dt-phone-mockup-wrapper" onClick={() => openModal(homeBeforeImg, 'Old Home Page (Before)')}>
                  <div className="dt-phone-frame">
                    <div className="dt-phone-island" />
                    <img src={homeBeforeImg} alt="Old Home Page Before" className="dt-phone-screen-img" />
                    <div className="dt-phone-hover-overlay">
                      <span className="dt-zoom-tag">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          <line x1="11" y1="8" x2="11" y2="14" />
                          <line x1="8" y1="11" x2="14" y2="11" />
                        </svg>
                        Click to enlarge
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* ---------- AFTER COLUMN ---------- */}
              <div className="dt-comp-column dt-after-col">
                <div className="dt-col-header">
                  <div className="dt-col-badge after-badge">After</div>
                  <h3 className="dt-col-title">Updated Home Page</h3>
                </div>

                {/* Solution Highlights */}
                <ul className="dt-points-list">
                  {afterPoints.map((point, idx) => (
                    <li key={idx} className="dt-point-item after-item">
                      <span className="dt-point-icon after-icon">
                        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
                          <polyline points="20 6 9 17 4 12" />
                        </svg>
                      </span>
                      <span className="dt-point-text">{point}</span>
                    </li>
                  ))}
                </ul>

                {/* Phone Mockup Frame */}
                <div className="dt-phone-mockup-wrapper" onClick={() => openModal(homeAfterImg, 'Updated Home Page (After)')}>
                  <div className="dt-phone-frame active-glow">
                    <div className="dt-phone-island" />
                    <img src={homeAfterImg} alt="Updated Home Page After" className="dt-phone-screen-img" />
                    <div className="dt-phone-hover-overlay">
                      <span className="dt-zoom-tag">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                          <circle cx="11" cy="11" r="8" />
                          <line x1="21" y1="21" x2="16.65" y2="16.65" />
                          <line x1="11" y1="8" x2="11" y2="14" />
                          <line x1="8" y1="11" x2="14" y2="11" />
                        </svg>
                        Click to enlarge
                      </span>
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </section>
        ) : (
          /* ===================================================================
              VIEW 2: FULL CASE STUDY BOARD OVERVIEW
              =================================================================== */
          <section className="dt-board-section">
            <div className="dt-board-card" onClick={() => openModal(redesignBoardImg, 'Full Case Study Board')}>
              <img src={redesignBoardImg} alt="Fymble Full UX Case Study Board" className="dt-board-img" />
              <div className="dt-board-overlay">
                <span className="dt-zoom-tag">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <circle cx="11" cy="11" r="8" />
                    <line x1="21" y1="21" x2="16.65" y2="16.65" />
                    <line x1="11" y1="8" x2="11" y2="14" />
                    <line x1="8" y1="11" x2="14" y2="11" />
                  </svg>
                  Click to inspect full resolution board
                </span>
              </div>
            </div>
          </section>
        )}

        {/* ===================================================================
            SECTION: KEY UX IMPROVEMENTS (5 PILLARS)
            =================================================================== */}
        <section className="dt-improvements-section">
          <div className="dt-sec-header">
            <div className="dt-sec-title-wrap">
              <h2 className="dt-sec-title">
                Key <span className="dt-gradient-text">UX Improvements</span>
              </h2>
              <p className="dt-sec-sub">
                A more focused, intuitive and action-driven home page experience.
              </p>
            </div>
          </div>

          <div className="dt-improvements-grid">
            {keyImprovements.map((card, idx) => (
              <div key={idx} className="dt-imp-card">
                <div className="dt-imp-card-top">
                  <div className="dt-imp-icon-box">{card.icon}</div>
                  <span className="dt-imp-num">{card.num}</span>
                </div>
                <h3 className="dt-imp-title">{card.title}</h3>
                <p className="dt-imp-desc">{card.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* ===================================================================
          MODAL LIGHTBOX (CLICK TO ENLARGE)
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
