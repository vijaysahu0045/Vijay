import React from 'react'
import './Skills.css'
import bgImage from './assets/projects-bg.png'

const SKILLS_DATA = [
  {
    id: 'ai-ux',
    title: 'UX/UI & AI UX',
    desc: 'Consumer & enterprise workflows, AI Copilot assistants (Kyra AI), and adaptive interfaces.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4M4.93 19.07l2.83-2.83M16.24 7.76l2.83-2.83"/>
      </svg>
    )
  },
  {
    id: 'product-design',
    title: 'Product Design',
    desc: 'End-to-end B2B/B2C product lifecycles, user strategy, and 250+ shipped production screens.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
        <polyline points="3.27 6.96 12 12.01 20.73 6.96"/>
        <line x1="12" y1="22.08" x2="12" y2="12"/>
      </svg>
    )
  },
  {
    id: 'ux-research',
    title: 'UX Research',
    desc: 'User journey mapping, wireframing, interactive prototyping, and usability testing.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="11" cy="11" r="8"/>
        <line x1="21" y1="21" x2="16.65" y2="16.65"/>
      </svg>
    )
  },
  {
    id: 'design-systems',
    title: 'Design Systems',
    desc: 'Scalable Figma component architectures, design tokens, and accessible typography.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="12 2 2 7 12 12 22 7 12 2"/>
        <polyline points="2 17 12 22 22 17"/>
        <polyline points="2 12 12 17 22 12"/>
      </svg>
    )
  },
  {
    id: 'motion-design',
    title: 'UI Motion & Lottie',
    desc: 'Delightful micro-interactions, gesture physics, and fluid 60fps animations.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polygon points="5 3 19 12 5 21 5 3"/>
      </svg>
    )
  },
  {
    id: 'dev-handoff',
    title: 'Dev Handoff & QA',
    desc: 'Figma Dev Mode specifications, design QA, and seamless developer handoff.',
    icon: (
      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <polyline points="16 18 22 12 16 6"/>
        <polyline points="8 6 2 12 8 18"/>
      </svg>
    )
  }
]

const TOOLS_LIST = ['Figma', 'Figma Motion', 'Figma Dev Mode', 'Figma AI Agent', 'FigJam', 'Adobe XD', 'Photopea', 'Canva', 'Envato AI', 'Lottie', 'Vector Art & Illustration']

export default function Skills({ onBack }) {
  return (
    <div className="skills-page-container">
      {/* Background Image Layer */}
      <div className="skills-bg-image">
        <img src={bgImage} alt="" />
      </div>

      {/* Smooth Moving Purple Ball Layer */}
      <div className="page-ambient-glow-layer">
        <div className="page-moving-purple-orb" />
      </div>

      {/* Top Header Bar */}
      <header className="skills-topbar">
        <button className="skills-home-btn" onClick={onBack} title="Back">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
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

          {/* Left Column: Clean & Spacious */}
          <div className="skills-left-col">
            <div className="skills-left-top">
              {/* Tag */}
              <div className="skills-tag-wrap">
                <span className="skills-tag-text">SKILLS</span>
                <div className="skills-tag-line" />
              </div>

              {/* Headline */}
              <h1 className="skills-headline">
                What I bring to{' '}
                <span className="highlight-purple">the table.</span>
              </h1>

              {/* Short 2-line Clean Description */}
              <p className="skills-body-text">
                Core product design capabilities engineered for scale, clarity, and human delight.
              </p>

              {/* Clean Tools Badges */}
              <div className="skills-tools-section">
                <span className="tools-title">PRIMARY TOOLS</span>
                <div className="skills-tools-pills">
                  {TOOLS_LIST.map((tool) => (
                    <span key={tool} className="skill-tool-badge">{tool}</span>
                  ))}
                </div>
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
