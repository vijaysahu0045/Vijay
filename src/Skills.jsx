import React from 'react'
import './Skills.css'

const SKILLS_DATA = [
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    desc: 'Designing user-centered interfaces that are intuitive, accessible and delightful.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 19l7-7 3 3-7 7-3-3z"/>
        <path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z"/>
        <path d="M2 2l7.586 7.586"/>
        <circle cx="11" cy="11" r="2"/>
        <circle cx="2" cy="12" r="1.5"/>
        <circle cx="12" cy="2" r="1.5"/>
      </svg>
    )
  },
  {
    id: 'product-design',
    title: 'Product Design',
    desc: 'Turning ideas into functional products with a focus on usability and real world impact.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    )
  },
  {
    id: 'visual-design',
    title: 'Visual Design',
    desc: 'Crafting clean, modern and visually engaging designs that communicate clearly.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M18.375 2.625a3.875 3.875 0 0 0-5.48 0L3.5 12v6.5H10L19.375 9.125a3.875 3.875 0 0 0 0-5.48z"/>
        <path d="M13.5 6.5l4 4"/>
      </svg>
    )
  },
  {
    id: 'motion-design',
    title: 'Motion Design',
    desc: 'Bringing interfaces to life with meaningful motion and smooth interactions.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="6 3 20 12 6 21 6 3"/>
      </svg>
    )
  },
  {
    id: 'design-systems',
    title: 'Design Systems',
    desc: 'Building consistent, scalable and reusable design systems that ensure harmony.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>
    )
  },
  {
    id: 'prototyping',
    title: 'Prototyping',
    desc: 'Creating interactive prototypes to test ideas and validate the user experience early.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M3 3l7 18 3-7 7-3L3 3z"/>
      </svg>
    )
  }
]

export default function Skills({ onBack }) {
  return (
    <div className="skills-page-container">
      {/* Smooth Moving Purple Ball Layer */}
      <div className="page-ambient-glow-layer">
        <div className="page-moving-purple-orb" />
      </div>

      {/* Top Header Bar */}
      <header className="skills-topbar">
        <button className="skills-home-btn" onClick={onBack}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M19 12H5M12 19l-7-7 7-7"/>
          </svg>
          <span>Home</span>
        </button>
        <span className="skills-topbar-title">PORTFOLIO / SKILLS</span>
      </header>

      {/* Main Content Area */}
      <main className="skills-main-wrapper">
        <div className="skills-master-card">
          {/* Top Right Dot Grid Pattern */}
          <div className="skills-card-dot-grid">
            {Array.from({ length: 16 }).map((_, i) => (
              <span key={i} />
            ))}
          </div>

          {/* Left Column: Headlines & Always learning */}
          <div className="skills-left-col">
            <div className="skills-left-top">
              {/* Tag / Category */}
              <div className="skills-tag-wrap">
                <span className="skills-tag-text">SKILLS</span>
                <div className="skills-tag-line" />
              </div>

              {/* Headline */}
              <h1 className="skills-headline">
                What I bring to{' '}
                <span className="highlight-purple">the table.</span>
              </h1>

              {/* Description */}
              <p className="skills-body-text">
                A blend of creativity, strategy and technical skills that help me design digital experiences that are user-centered and visually impactful.
              </p>
            </div>

            {/* Bottom "Always learning." Card */}
            <div className="skills-learning-card">
              <div className="skills-learning-icon-box">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
                </svg>
              </div>
              <div className="skills-learning-text">
                <h4>Always learning.</h4>
                <p>Exploring new tools, techniques and ideas to grow every day.</p>
              </div>
            </div>
          </div>

          {/* Right Column: 6 Grid Cards */}
          <div className="skills-right-col">
            <div className="skills-grid-6">
              {SKILLS_DATA.map((item) => (
                <div key={item.id} className="skill-card-item">
                  <div className="skill-card-icon-wrap">
                    {item.icon}
                  </div>
                  <h3 className="skill-card-title">{item.title}</h3>
                  <div className="skill-card-accent-line" />
                  <p className="skill-card-desc">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
