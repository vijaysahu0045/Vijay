import React, { useState } from 'react'
import './DesignThinking.css'
import bgImage from './assets/projects-bg.png'

const DESIGN_STAGES = [
  {
    step: '01',
    name: 'Empathize & Discover',
    subtitle: 'Uncovering unarticulated user needs & market gaps',
    icon: '🔍',
    tag: 'USER RESEARCH & DISCOVERY',
    description: 'Deep qualitative and quantitative user immersion to understand real user behaviors, pain points, and cognitive friction before writing a single line of spec.',
    activities: [
      '1:1 Qualitative User & Gym Owner Interviews',
      'Field Observations & Contextual Inquiries',
      'Behavioral Empathy Mapping & Persona Synthesis',
      'Competitive & Market Heuristic Benchmarking'
    ],
    deliverables: ['Empathy Maps', 'User Journey Maps', 'Pain-Point Archetypes', 'Heuristic Audits']
  },
  {
    step: '02',
    name: 'Define & Strategy',
    subtitle: 'Framing high-impact problem statements & success KPIs',
    icon: '🎯',
    tag: 'PROBLEM FORMULATION',
    description: 'Transforming messy user insights into razor-sharp "How Might We" statements, aligning product strategy with real business outcomes and technical feasibility.',
    activities: [
      'Root-Cause & Friction Point Analysis',
      '"How Might We" (HMW) Solution Framing',
      'User Personas & Core Jobs-To-Be-Done (JTBD)',
      'Feature Impact vs Effort Prioritization Matrix'
    ],
    deliverables: ['Problem Statements', 'Core Value Props', 'Prioritization Grid', 'Success Metrics (KPIs)']
  },
  {
    step: '03',
    name: 'Ideate & Architecture',
    subtitle: 'Exploring divergent concepts & structuring friction-free journeys',
    icon: '💡',
    tag: 'INFORMATION ARCHITECTURE',
    description: 'Rapid divergent sketching, structural information architecture, and multi-platform user flows to map every possible path before committing to visual fidelity.',
    activities: [
      'Low-Fidelity Paper & Digital Wireframing',
      'End-to-End User Flow & Edge-Case Mapping',
      'Multimodal AI Copilot Interaction Logic (Kyra AI)',
      'Navigation Hierarchy & Spatial Wireflows'
    ],
    deliverables: ['Information Architecture', 'User Flowcharts', 'Low-Fi Wireframes', 'Interaction Models']
  },
  {
    step: '04',
    name: 'Prototype & Craft',
    subtitle: 'High-fidelity visual systems, OLED dark themes & 60fps micro-motion',
    icon: '✨',
    tag: 'UI & DESIGN SYSTEMS',
    description: 'Crafting pixel-perfect interface components, scalable design tokens, tactile micro-interactions, and high-contrast dark aesthetic built for real production.',
    activities: [
      'Scalable Figma Component & Token Architecture',
      '8pt Spatial Baseline & OLED Dark Mode Optimization',
      'Micro-interactions, Haptics & 60fps Lottie Motion',
      'Interactive Clickable Prototypes for Usability'
    ],
    deliverables: ['Design System Tokens', 'Hi-Fi Prototypes', 'Micro-Interactions', 'Component Libraries']
  },
  {
    step: '05',
    name: 'Test, Ship & Iterate',
    subtitle: 'Validation with real trainees & seamless engineering handoff',
    icon: '🚀',
    tag: 'VALIDATION & DEV HANDOFF',
    description: 'Closing the loop through usability testing sessions, telemetry feedback, detailed Figma Dev Mode specs, and continuous metric-driven iterations.',
    activities: [
      'Moderated & Unmoderated Usability Sessions',
      'Task Completion Rate & Time-To-Value Analysis',
      'Figma Dev Mode Specs & Design QA Collaboration',
      'Post-Launch Telemetry Feedback Loops'
    ],
    deliverables: ['Usability Test Reports', 'Dev Hand-off Specs', 'Design QA Checklists', 'Metric Telemetry']
  }
]

export default function DesignThinking({ onBack }) {
  const [selectedStage, setSelectedStage] = useState(0)
  const activeStage = DESIGN_STAGES[selectedStage]

  return (
    <div className="dt-page-container">
      {/* Background Image Layer */}
      <div className="dt-bg-image">
        <img src={bgImage} alt="" />
      </div>

      {/* Smooth Moving Purple Ball Layer */}
      <div className="page-ambient-glow-layer">
        <div className="page-moving-purple-orb" />
      </div>

      {/* Top Header Bar */}
      <header className="dt-topbar">
        <button className="dt-home-btn" onClick={onBack} title="Back to Home">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.8" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
        </button>
      </header>

      {/* Main Content */}
      <main className="dt-main-wrapper">
        {/* Hero Section */}
        <section className="dt-hero-card">
          <div className="dt-tag-wrap">
            <span className="dt-tag-text">HUMAN-CENTERED DESIGN FRAMEWORK</span>
            <div className="dt-tag-line" />
          </div>

          <h1 className="dt-headline">
            Design Thinking at the core of{' '}
            <span className="dt-gradient-text">every product decision.</span>
          </h1>

          <p className="dt-subtext">
            My structured, 5-stage framework for turning ambiguous problems into intuitive, scalable, and high-impact digital experiences across B2B and B2C ecosystems.
          </p>

          {/* Stepper Pill Tabs */}
          <div className="dt-stepper-tabs">
            {DESIGN_STAGES.map((stg, idx) => (
              <button
                key={stg.step}
                className={`dt-step-pill ${selectedStage === idx ? 'active' : ''}`}
                onClick={() => setSelectedStage(idx)}
              >
                <span className="dt-pill-num">{stg.step}</span>
                <span className="dt-pill-name">{stg.name}</span>
              </button>
            ))}
          </div>
        </section>

        {/* Deep Dive Active Stage Card */}
        <section className="dt-active-stage-card">
          <div className="dt-stage-header">
            <div className="dt-stage-icon-wrap">
              <span className="dt-stage-icon">{activeStage.icon}</span>
              <div>
                <span className="dt-stage-badge">{activeStage.tag}</span>
                <h2 className="dt-stage-title">{activeStage.step}. {activeStage.name}</h2>
              </div>
            </div>
            <p className="dt-stage-subtitle">{activeStage.subtitle}</p>
          </div>

          <p className="dt-stage-description">{activeStage.description}</p>

          <div className="dt-stage-columns-grid">
            {/* Core Activities */}
            <div className="dt-col-box">
              <h3 className="dt-col-title">
                <span>⚡</span> Core Activities
              </h3>
              <ul className="dt-item-list">
                {activeStage.activities.map((act, i) => (
                  <li key={i}>
                    <span className="dt-bullet-dot" />
                    <span>{act}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Deliverables */}
            <div className="dt-col-box">
              <h3 className="dt-col-title">
                <span>📦</span> Key Deliverables
              </h3>
              <div className="dt-chips-wrap">
                {activeStage.deliverables.map((del, i) => (
                  <span key={i} className="dt-deliverable-chip">
                    {del}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Real-World Proof Application Banner */}
        <section className="dt-proof-banner">
          <div className="dt-proof-content">
            <div className="dt-proof-tag">PROVEN IN PRODUCTION</div>
            <h3 className="dt-proof-title">Applied Across 250+ Screens at Fymble</h3>
            <p className="dt-proof-text">
              This exact Design Thinking process empowered us to scale Fymble from 0→1, delivering Kyra AI companion, flexible multi-gym booking, and B2B studio management serving 20K+ users and 600+ fitness centers.
            </p>
          </div>

          <div className="dt-proof-stats">
            <div className="dt-stat-item">
              <strong>250+</strong>
              <span>Shipped Screens</span>
            </div>
            <div className="dt-stat-item">
              <strong>20K+</strong>
              <span>Active Users</span>
            </div>
            <div className="dt-stat-item">
              <strong>600+</strong>
              <span>Gym Partners</span>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}
