import React, { useState } from 'react'
import './ProjectDetail.css'
import bgImage from './assets/projects-bg.png'

export default function ProjectDetail({ project, categoryLabel, onBack, onNavigateProject }) {
  if (!project) return null

  const [activeStep, setActiveStep] = useState(0)

  return (
    <div className="detail-container">
      {/* Background Image Layer */}
      <div className="detail-bg-image">
        <img src={bgImage} alt="" />
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

        <button
          className="detail-action-btn"
          onClick={() => alert(`Launching live interactive prototype for ${project.title}...`)}
        >
          <span>View Prototype</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </header>

      {/* Main Case Study Body */}
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
            SECTION 2: THE PROBLEM
            ========================================================================= */}
        <section className="case-section-container">
          <div className="case-section-head">
            <span className="section-eyebrow eyebrow-coral">THE PROBLEM</span>
            <h2 className="case-section-h2">Fitness shouldn't feel like a commitment.</h2>
          </div>

          <div className="problem-cards-grid">
            <div className="problem-card">
              <div className="problem-icon-wrap">
                <span className="p-icon">📄</span>
                <span className="badge-lock">🔒</span>
              </div>
              <h3>Rigid memberships</h3>
              <p>Expensive plans with long-term lock-ins discourage users from trying new fitness routines.</p>
            </div>

            <div className="problem-card">
              <div className="problem-icon-wrap">
                <span className="p-icon">🔍</span>
              </div>
              <h3>Hard to compare gyms</h3>
              <p>Scattered information, hidden pricing and unverified photos make discovery confusing.</p>
            </div>

            <div className="problem-card">
              <div className="problem-icon-wrap">
                <span className="p-icon">📉</span>
              </div>
              <h3>Low consistency</h3>
              <p>Lack of personalized guidance, accountability and workout adaptivity leads to steep drop-offs.</p>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: THE EXPERIENCE (USER JOURNEY & 4 SCREENS)
            ========================================================================= */}
        <section className="case-section-container">
          <div className="experience-head-row">
            <div>
              <span className="section-eyebrow eyebrow-coral">THE EXPERIENCE</span>
              <h2 className="case-section-h2">A seamless journey from discovery to consistency.</h2>
            </div>

            {/* Interactive Flow Breadcrumb */}
            <div className="journey-flow-pills">
              <span className="flow-step">🔍 Discover</span>
              <span className="flow-arrow">→</span>
              <span className="flow-step">📄 Choose Pass</span>
              <span className="flow-arrow">→</span>
              <span className="flow-step">📅 Book</span>
              <span className="flow-arrow">→</span>
              <span className="flow-step">🏋️ Workout</span>
              <span className="flow-arrow">→</span>
              <span className="flow-step">📈 Track</span>
              <span className="flow-arrow">→</span>
              <span className="flow-step">🤖 Kyra</span>
            </div>
          </div>

          {/* 4 Screens Grid */}
          <div className="screens-journey-grid">
            {/* Screen 1: Discover */}
            <div className="screen-column-card">
              <div className="standalone-mock-phone">
                <div className="phone-screen">
                  <div className="phone-notch"><div className="dynamic-island" /></div>
                  <div className="phone-inner-content">
                    <div className="screen-header-mini">
                      <h4>Explore Gyms</h4>
                    </div>
                    <div className="mini-search-box">🔍 Search location or gym...</div>
                    <div className="mini-filters-row">
                      <span className="m-chip">⚙️ Filters</span>
                      <span className="m-chip">Distance ▾</span>
                      <span className="m-chip">Price ▾</span>
                    </div>
                    <div className="mini-map-view">
                      <div className="map-pin pin-1">📍</div>
                      <div className="map-pin pin-2">📍</div>
                      <div className="map-pin pin-3">📍</div>
                      <div className="map-bottom-card">
                        <div className="mbc-info">
                          <h5>The Strength Co.</h5>
                          <span>⭐ 4.8 (1.2 km)</span>
                        </div>
                        <span className="mbc-btn">View Details</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="screen-caption">
                <h4>Discover</h4>
                <p>Find gyms near you with details that matter.</p>
              </div>
            </div>

            {/* Screen 2: Choose Pass */}
            <div className="screen-column-card">
              <div className="standalone-mock-phone">
                <div className="phone-screen">
                  <div className="phone-notch"><div className="dynamic-island" /></div>
                  <div className="phone-inner-content">
                    <div className="screen-header-mini">
                      <h4>Choose your pass</h4>
                      <span>Pick what works for you</span>
                    </div>

                    <div className="screen-pass-list">
                      <div className="sp-card">
                        <div>
                          <h6>Daily Pass</h6>
                          <span>₹99 / day</span>
                        </div>
                        <span className="arrow-sm">›</span>
                      </div>

                      <div className="sp-card featured-glow">
                        <span className="hot-tag">Most Popular</span>
                        <div>
                          <h6>Weekly Pass</h6>
                          <span className="sp-price">₹499 / week</span>
                          <small>7 days access</small>
                        </div>
                        <span className="arrow-sm">›</span>
                      </div>

                      <div className="sp-card">
                        <div>
                          <h6>10 Day Pass</h6>
                          <span>₹899 / 14 days</span>
                        </div>
                        <span className="arrow-sm">›</span>
                      </div>

                      <div className="sp-card">
                        <div>
                          <h6>Monthly Pass</h6>
                          <span>₹1,499 / month</span>
                        </div>
                        <span className="arrow-sm">›</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="screen-caption">
                <h4>Choose Pass</h4>
                <p>Flexible passes that fit your schedule, not the other way around.</p>
              </div>
            </div>

            {/* Screen 3: Book */}
            <div className="screen-column-card">
              <div className="standalone-mock-phone">
                <div className="phone-screen">
                  <div className="phone-notch"><div className="dynamic-island" /></div>
                  <div className="phone-inner-content">
                    <div className="screen-gym-banner">
                      <span>The Strength Co.</span>
                    </div>

                    <div className="screen-gym-rating-row">
                      <span>⭐ 4.8 (230 reviews)</span>
                      <small>Andheri West, Mumbai • 1.2 km</small>
                    </div>

                    <div className="screen-times-box">
                      <span className="box-title">Available Today</span>
                      <div className="time-chips">
                        <span>6 AM</span>
                        <span>7 AM</span>
                        <span className="active-time">8 AM</span>
                        <span>9 AM</span>
                        <span>10 AM</span>
                      </div>
                    </div>

                    <div className="screen-checkout-card">
                      <div className="chk-row">
                        <span>Weekly Pass (7 days)</span>
                        <span>₹499</span>
                      </div>
                      <div className="chk-row total">
                        <span>Total</span>
                        <span>₹499</span>
                      </div>
                      <button className="confirm-btn">Confirm Booking</button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="screen-caption">
                <h4>Book</h4>
                <p>Quick booking with real-time availability.</p>
              </div>
            </div>

            {/* Screen 4: Track & Improve */}
            <div className="screen-column-card">
              <div className="standalone-mock-phone">
                <div className="phone-screen">
                  <div className="phone-notch"><div className="dynamic-island" /></div>
                  <div className="phone-inner-content">
                    <div className="screen-header-mini">
                      <h4>Progress</h4>
                      <span>This Week ▾</span>
                    </div>

                    <div className="progress-bar-stat">
                      <div className="p-header">
                        <span>Workouts</span>
                        <strong>4</strong>
                      </div>
                      <div className="mini-chart-bars">
                        <div className="bar filled" style={{ height: '60%' }} />
                        <div className="bar filled" style={{ height: '85%' }} />
                        <div className="bar filled" style={{ height: '40%' }} />
                        <div className="bar filled" style={{ height: '90%' }} />
                        <div className="bar" style={{ height: '20%' }} />
                        <div className="bar" style={{ height: '10%' }} />
                        <div className="bar" style={{ height: '10%' }} />
                      </div>
                    </div>

                    <div className="progress-dual-metrics">
                      <div className="metric-box">
                        <small>Calories</small>
                        <strong>1,850</strong>
                        <span>kcal</span>
                      </div>
                      <div className="metric-box">
                        <small>Active Time</small>
                        <strong>320</strong>
                        <span>mins</span>
                      </div>
                    </div>

                    <div className="health-score-box">
                      <div>
                        <small>Health Score</small>
                        <strong>82 <small>/100</small></strong>
                        <span className="good-tag">Good going!</span>
                      </div>
                      <div className="spark-line">📈</div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="screen-caption">
                <h4>Track &amp; Improve</h4>
                <p>Track workouts, health score and stay on top of your goals.</p>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 4: KEY DESIGN DECISIONS
            ========================================================================= */}
        <section className="case-section-container">
          <div className="case-section-head">
            <span className="section-eyebrow eyebrow-coral">KEY DESIGN DECISIONS</span>
            <h2 className="case-section-h2">Thoughtful features engineered for high retention.</h2>
          </div>

          <div className="decisions-cards-grid">
            {/* Decision 1 */}
            <div className="decision-card">
              <div className="decision-top">
                <div className="decision-icon">🎫</div>
                <div>
                  <h3>Flexible access</h3>
                  <p>Short-duration passes remove the pressure of long-term commitments and make fitness accessible.</p>
                </div>
              </div>

              <div className="decision-preview-box">
                <div className="preview-pass-pill">
                  <span>Daily</span>
                  <strong>₹99</strong>
                </div>
                <div className="preview-pass-pill active">
                  <span>Weekly</span>
                  <strong>₹499</strong>
                </div>
                <div className="preview-pass-pill">
                  <span>14 Day</span>
                  <strong>₹899</strong>
                </div>
                <div className="preview-pass-pill">
                  <span>Monthly</span>
                  <strong>₹1,499</strong>
                </div>
              </div>
            </div>

            {/* Decision 2 */}
            <div className="decision-card">
              <div className="decision-top">
                <div className="decision-icon">🔍</div>
                <div>
                  <h3>Simple discovery</h3>
                  <p>Clear filters, map view and key information help users compare and choose the right gym quickly.</p>
                </div>
              </div>

              <div className="decision-preview-box">
                <div className="preview-chips-row">
                  <span className="p-chip">⚙️ Filters</span>
                  <span className="p-chip">Distance ▾</span>
                  <span className="p-chip">Price ▾</span>
                  <span className="p-chip">Rating ▾</span>
                </div>
                <div className="mini-map-strip">
                  <span>📍 Andheri West, Mumbai</span>
                </div>
              </div>
            </div>

            {/* Decision 3 */}
            <div className="decision-card">
              <div className="decision-top">
                <div className="decision-icon">💬</div>
                <div>
                  <h3>Personalized coaching</h3>
                  <p>Kyra AI connects workouts, nutrition, sleep and recovery into one continuous conversation.</p>
                </div>
              </div>

              <div className="decision-preview-box chat-preview">
                <div className="bubble-bot">
                  <span>🤖 Have you had enough water today?</span>
                </div>
                <div className="bubble-user-action">
                  <span>Not really, I'll drink more.</span>
                </div>
              </div>
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
    </div>
  )
}
