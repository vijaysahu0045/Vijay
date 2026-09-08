import React from 'react'
import './Resume.css'
import bgImage from './assets/projects-bg.png'

export default function Resume({ onBack }) {
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

        <button
          className="resume-download-btn"
          onClick={() => alert('Downloading Vijay_Resume.pdf...')}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
            <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4M7 10l5 5 5-5M12 15V3" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
          <span>Download CV</span>
        </button>
      </header>

      {/* Content Area */}
      <main className="resume-content">
        {/* Header Card */}
        <div className="resume-header-card">
          <div>
            <h1 className="resume-name">Vijay</h1>
            <p className="resume-role">UI / UX Designer & Frontend Developer</p>
          </div>
          <div style={{ textAlign: 'right', fontSize: '12px', color: '#aaa', lineHeight: '1.6' }}>
            <p>📍 India (Open for Remote & Relocation)</p>
            <p>✉️ email@example.com</p>
          </div>
        </div>

        {/* Experience Section */}
        <div className="resume-section-card">
          <div className="resume-section-title">
            <span>💼</span>
            <span>Work Experience</span>
          </div>

          <div className="resume-item">
            <div className="resume-item-top">
              <span className="resume-item-title">Lead Product Designer & Frontend Dev</span>
              <span className="resume-item-date">2023 - Present</span>
            </div>
            <span className="resume-item-company">Freelance Studio & Consulting</span>
            <p className="resume-item-desc">
              Designed and shipped 15+ SaaS dashboards, AI copilot tools, and responsive web platforms. Built reusable component systems in Figma and implemented them using React and Tailwind CSS.
            </p>
          </div>

          <div className="resume-item">
            <div className="resume-item-top">
              <span className="resume-item-title">UI / UX Designer</span>
              <span className="resume-item-date">2021 - 2023</span>
            </div>
            <span className="resume-item-company">Digital Product Agency</span>
            <p className="resume-item-desc">
              Conducted user research, designed high-fidelity wireframes, interactive mobile prototypes, and established company-wide design tokens and guidelines.
            </p>
          </div>
        </div>

        {/* Education Section */}
        <div className="resume-section-card">
          <div className="resume-section-title">
            <span>🎓</span>
            <span>Education & Certification</span>
          </div>

          <div className="resume-item">
            <div className="resume-item-top">
              <span className="resume-item-title">Bachelor of Science in Computer Science / IT</span>
              <span className="resume-item-date">2018 - 2022</span>
            </div>
            <span className="resume-item-company">University of Mumbai</span>
          </div>

          <div className="resume-item">
            <div className="resume-item-top">
              <span className="resume-item-title">Google UX Design Professional Certificate</span>
              <span className="resume-item-date">2022</span>
            </div>
            <span className="resume-item-company">Coursera / Google</span>
          </div>
        </div>
      </main>
    </div>
  )
}
