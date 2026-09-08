import React from 'react'
import './Resume.css'
import bgImage from './assets/projects-bg.png'

export default function Resume({ onBack }) {
  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="resume-container">
      {/* Background Image Layer */}
      <div className="resume-bg-image">
        <img src={bgImage} alt="" />
      </div>

      {/* Smooth Moving Purple Ball Layer */}
      <div className="page-ambient-glow-layer">
        <div className="page-moving-purple-orb" />
      </div>

      {/* Top Header Bar */}
      <header className="resume-topbar">
        <button className="resume-home-btn" onClick={onBack} title="Back">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>

        <button className="resume-download-btn" onClick={handlePrint} title="Download / Print Resume">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Download CV</span>
        </button>
      </header>

      {/* Content Area */}
      <main className="resume-content">
        {/* Header Profile Card */}
        <div className="resume-header-card">
          <div className="resume-header-main">
            <h1 className="resume-name">Vijay Sahu</h1>
            <p className="resume-role">PRODUCT DESIGNER | UX/UI | AI UX</p>
          </div>

          <div className="resume-contact-links">
            <a href="tel:+917506182484" className="r-link">
              <span>📞</span> +91 75061 82484
            </a>
            <a href="mailto:vijaysahu@gmail.com" className="r-link">
              <span>✉️</span> vijaysahu@gmail.com
            </a>
            <a href="https://linkedin.com/in/vijaysahu-" target="_blank" rel="noopener noreferrer" className="r-link">
              <span>🔗</span> linkedin.com/in/vijaysahu-
            </a>
            <a href="https://vijay-henna.vercel.app" target="_blank" rel="noopener noreferrer" className="r-link">
              <span>🌐</span> vijay-henna.vercel.app
            </a>
          </div>
        </div>

        {/* Professional Summary */}
        <div className="resume-section-card">
          <div className="resume-section-title">
            <span className="sec-icon">⚡</span>
            <span>Professional Summary</span>
          </div>
          <p className="resume-summary-text">
            Product Designer with <strong>2 years of experience</strong> in end-to-end UX/UI and AI UX across B2B and B2C web and mobile products. Sole designer at <strong>Fymble</strong>, owning the complete product design lifecycle from UX strategy and user flows to high-fidelity UI, prototyping, and developer handoff. Designed <strong>250+ screens</strong> and <strong>20+ product features</strong> supporting <strong>20K+ users</strong> and <strong>600+ gym partners</strong>.
          </p>
        </div>

        {/* Experience Section */}
        <div className="resume-section-card">
          <div className="resume-section-title">
            <span className="sec-icon">💼</span>
            <span>Experience</span>
          </div>

          {/* Job 1: Fymble */}
          <div className="resume-item">
            <div className="resume-item-top">
              <div>
                <h3 className="resume-item-title">Fymble — Product Designer</h3>
                <span className="resume-item-location">Bengaluru</span>
              </div>
              <span className="resume-item-date active-badge">Apr 2025 – Present</span>
            </div>
            <ul className="resume-bullets">
              <li>Owned end-to-end UX/UI design for <strong>250+ web and mobile screens</strong> across B2B and B2C products.</li>
              <li>Designed fitness marketplace experiences serving <strong>20K+ users</strong> across <strong>600+ gym partners</strong>.</li>
              <li>Led UX/UI for <strong>20+ product features</strong>, including Kyra AI and AI-powered product experiences.</li>
              <li>Designed scalable B2B/B2C workflows across consumer, business, and operational product journeys.</li>
              <li>Partnered with a 5-member development team on design handoff, implementation, responsive UI, interactions, and design QA.</li>
            </ul>
          </div>

          {/* Job 2: Farmer Near Me */}
          <div className="resume-item">
            <div className="resume-item-top">
              <div>
                <h3 className="resume-item-title">Farmer Near Me — UI/UX Designer</h3>
                <span className="resume-item-location">Remote</span>
              </div>
              <span className="resume-item-date">Sep 2024 – Mar 2025</span>
            </div>
            <ul className="resume-bullets">
              <li>Designed end-to-end UI/UX across <strong>100+ screens</strong> for B2B and B2C web and product experiences.</li>
              <li>Designed responsive B2B/B2C websites with intuitive user journeys across key product flows.</li>
              <li>Created user flows, wireframes, high-fidelity UI, and interactive prototypes.</li>
              <li>Collaborated with product and development teams on design handoff and implementation.</li>
            </ul>
          </div>
        </div>

        {/* Selected Projects */}
        <div className="resume-section-card">
          <div className="resume-section-title">
            <span className="sec-icon">🚀</span>
            <span>Selected Projects</span>
          </div>

          <div className="resume-item">
            <h3 className="resume-item-title">Fymble — Multi-Platform Product Ecosystem</h3>
            <ul className="resume-bullets">
              <li>Designed UX/UI across B2C, B2B, and BDM applications for web and mobile.</li>
              <li>Designed B2C/B2B websites and Admin Panel supporting consumer, business, and operational workflows.</li>
              <li>Designed <strong>Kyra AI</strong> as an integrated AI experience within the Fymble product.</li>
            </ul>
          </div>

          <div className="resume-item">
            <h3 className="resume-item-title">Farmer Near Me — B2B/B2C Product</h3>
            <ul className="resume-bullets">
              <li>Designed <strong>100+ screens</strong> across B2B/B2C product and responsive web experiences.</li>
              <li>Designed user flows, wireframes, high-fidelity UI, and prototypes for core product journeys.</li>
            </ul>
          </div>
        </div>

        {/* Core Skills Section */}
        <div className="resume-section-card">
          <div className="resume-section-title">
            <span className="sec-icon">🛠️</span>
            <span>Core Skills</span>
          </div>

          <div className="resume-skills-categories">
            <div className="skill-cat-row">
              <span className="cat-badge">Product Design</span>
              <span className="cat-desc">UX/UI, AI UX, B2B/B2C, Design Thinking, Responsive Design</span>
            </div>

            <div className="skill-cat-row">
              <span className="cat-badge">UX Research</span>
              <span className="cat-desc">User Research, User Flows, Wireframing, Prototyping, Usability Testing</span>
            </div>

            <div className="skill-cat-row">
              <span className="cat-badge">UI Design</span>
              <span className="cat-desc">Visual Design, Design Systems, Typography, UI Components, Accessibility</span>
            </div>

            <div className="skill-cat-row">
              <span className="cat-badge">Interaction</span>
              <span className="cat-desc">Interaction Design, UI Motion Design, Micro-interactions</span>
            </div>

            <div className="skill-cat-row">
              <span className="cat-badge">Collaboration</span>
              <span className="cat-desc">Design QA, Developer Handoff, Design Specifications, Cross-functional Collaboration</span>
            </div>
          </div>
        </div>

        {/* Tools Section */}
        <div className="resume-section-card">
          <div className="resume-section-title">
            <span className="sec-icon">🎨</span>
            <span>Tools</span>
          </div>

          <div className="resume-tools-wrap">
            {['Figma', 'Figma Motion', 'Figma Dev Mode', 'Figma AI Agent', 'FigJam', 'Adobe XD', 'Photopea', 'Canva', 'Envato AI', 'Lottie', 'Vector Art & Illustration'].map((tool) => (
              <span key={tool} className="tool-pill">{tool}</span>
            ))}
          </div>
        </div>

        {/* Education Section */}
        <div className="resume-section-card">
          <div className="resume-section-title">
            <span className="sec-icon">🎓</span>
            <span>Education</span>
          </div>

          <div className="resume-item">
            <div className="resume-item-top">
              <div>
                <h3 className="resume-item-title">Master of Computer Applications (MCA)</h3>
                <span className="resume-item-location">Sambhram Institute of Technology</span>
              </div>
              <span className="resume-item-date">2022 – 2024 | 8.3 CGPA</span>
            </div>
          </div>

          <div className="resume-item">
            <div className="resume-item-top">
              <div>
                <h3 className="resume-item-title">Bachelor of Science in Information Technology (B.Sc. IT)</h3>
              </div>
              <span className="resume-item-date">2019 – 2022</span>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
