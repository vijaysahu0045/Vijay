import React from 'react'
import './AboutMe.css'
import profileImg from './assets/about-profile.jpg'
import bgImage from './assets/projects-bg.png'

const CORE_SKILLS = [
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

export default function AboutMe({ onBack }) {
  return (
    <div className="about-page-container">
      {/* Background Image Layer */}
      <div className="about-bg-image">
        <img src={bgImage} alt="" />
      </div>

      {/* Smooth Moving Purple Ball Layer */}
      <div className="page-ambient-glow-layer">
        <div className="page-moving-purple-orb" />
      </div>

      {/* Top Header Bar */}
      <header className="about-topbar">
        <button className="about-home-btn" onClick={onBack} title="Back">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
      </header>

      {/* Main Spacious Content */}
      <main className="about-main-wrapper">
        <div className="about-content-layout">
          {/* Top Hero Showcase Card */}
          <div className="about-hero-card">
            <div className="about-hero-left">
              <div className="about-tag-wrap">
                <span className="about-tag-text">ABOUT VIJAY</span>
                <div className="about-tag-line" />
              </div>

              <h1 className="about-headline">
                Designing products at the intersection of{' '}
                <span className="highlight-purple">AI, craft &amp; intuition.</span>
              </h1>

              <p className="about-body-text">
                Product Designer with 2 years of experience leading end-to-end design at <strong>Fymble</strong>. I specialize in turning complex product journeys into clean, human-centered digital experiences that scale.
              </p>

              {/* Spacious Metrics Row */}
              <div className="about-metrics-row">
                <div className="about-metric-box">
                  <strong>250+</strong>
                  <span>Screens Shipped</span>
                </div>
                <div className="about-metric-box">
                  <strong>20K+</strong>
                  <span>Active Users</span>
                </div>
                <div className="about-metric-box">
                  <strong>600+</strong>
                  <span>Gym Partners</span>
                </div>
              </div>
            </div>

            <div className="about-hero-right">
              <div className="about-portrait-frame">
                <img src={profileImg} alt="Vijay Sahu - Product Designer" />
              </div>
            </div>
          </div>

          {/* Core Philosophy Pillar Cards */}
          <div className="about-pillars-grid">
            <div className="about-pillar-card">
              <div className="pillar-icon">🧠</div>
              <h3>AI &amp; Multimodal UX</h3>
              <p>Designing intelligent copilots like Kyra AI, contextual prompt flows, and adaptive interfaces.</p>
            </div>

            <div className="about-pillar-card">
              <div className="pillar-icon">📦</div>
              <h3>0→1 Product Strategy</h3>
              <p>Owning the complete design lifecycle across B2B &amp; B2C ecosystems with rapid user testing.</p>
            </div>

            <div className="about-pillar-card">
              <div className="pillar-icon">📐</div>
              <h3>Systems &amp; Motion</h3>
              <p>Building scalable Figma component architectures, design tokens, and fluid 60fps micro-interactions.</p>
            </div>
          </div>

          {/* Integrated Skills & Capabilities Section */}
          <div className="about-skills-section">
            <div className="about-skills-header">
              <div className="about-tag-wrap">
                <span className="about-tag-text">SKILLS &amp; CAPABILITIES</span>
                <div className="about-tag-line" />
              </div>
              <h2 className="about-subheading">Core Competencies &amp; Toolkit</h2>
            </div>

            <div className="about-skills-grid">
              {CORE_SKILLS.map((skill) => (
                <div key={skill.id} className="about-skill-card">
                  <div className="skill-card-top">
                    <div className="skill-icon-wrap">{skill.icon}</div>
                    <h3 className="skill-title">{skill.title}</h3>
                  </div>
                  <p className="skill-desc">{skill.desc}</p>
                </div>
              ))}
            </div>

            {/* Tools & Tech Chips */}
            <div className="about-tools-box">
              <h4 className="tools-title"><span>🛠️</span> Design &amp; Prototyping Tools</h4>
              <div className="tools-tags-cloud">
                {TOOLS_LIST.map((tool, idx) => (
                  <span key={idx} className="tool-chip-tag">{tool}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
