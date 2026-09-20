import React, { useState, useEffect } from 'react'
import './ProjectDetail.css'
import bgImage from './assets/projects-bg.png'
import screen1 from './assets/fymble-screen-1.png'
import screen2 from './assets/fymble-screen-2.png'
import screen3 from './assets/fymble-screen-3.png'
import screen4 from './assets/fymble-screen-4.png'
import screen5 from './assets/fymble-screen-5.png'

import nutritionScreen1 from './assets/nutrition-screen-1.png'
import nutritionScreen2 from './assets/nutrition-screen-2.png'
import nutritionScreen3 from './assets/nutrition-screen-3.png'
import nutritionScreen4 from './assets/nutrition-screen-4.png'
import nutritionScreen5 from './assets/nutrition-screen-5.png'

import gymMateScreen1 from './assets/gym-mate-screen-1.png'
import gymMateScreen2 from './assets/gym-mate-screen-2.png'
import gymMateScreen3 from './assets/gym-mate-screen-3.png'
import gymMateScreen4 from './assets/gym-mate-screen-4.png'
import gymMateScreen5 from './assets/gym-mate-screen-5.png'
import gymMateScreen6 from './assets/gym-mate-screen-6.png'

import aiDietCoachScreen1 from './assets/ai-diet-coach-screen-1.png'
import aiDietCoachScreen2 from './assets/ai-diet-coach-screen-2.png'
import aiDietCoachScreen3 from './assets/ai-diet-coach-screen-3.png'
import aiDietCoachScreen4 from './assets/ai-diet-coach-screen-4.png'
import aiDietCoachScreen5 from './assets/ai-diet-coach-screen-5.png'
import aiDietCoachScreen6 from './assets/ai-diet-coach-screen-6.png'
import aiDietCoachScreen7 from './assets/ai-diet-coach-screen-7.png'

import foodScannerScreen1 from './assets/food-scanner-screen-1.png'
import foodScannerScreen2 from './assets/food-scanner-screen-2.png'
import foodScannerScreen3 from './assets/food-scanner-screen-3.png'
import foodScannerScreen4 from './assets/food-scanner-screen-4.png'
import foodScannerScreen5 from './assets/food-scanner-screen-5.png'
import foodScannerScreen6 from './assets/food-scanner-screen-6.png'
import foodScannerScreen7 from './assets/food-scanner-screen-7.png'

// Dynamic Case Studies Data Dictionary
const CASE_STUDIES = {
  1: {
    id: 1,
    title: 'Fymble — Multi-Platform Ecosystem',
    category: 'Product Design',
    headlinePrefix: 'Making fitness easier to start — ',
    headlineGradient: 'and easier to stick with.',
    subtitle: 'A flexible fitness marketplace with an AI health coach that keeps you consistent.',
    role: 'UI/UX Designer',
    timeline: 'May – Jul 2024',
    platform: 'iOS & Android',
    heroPhones: {
      left: { image: screen3, alt: 'Fitness Class Selection' },
      center: { image: screen1, alt: 'Gym Discovery & Passes' },
      right: { image: screen2, alt: 'Food Scanner & AI Nutrition' }
    },
    screens: [
      { id: 1, title: 'Gym Discovery & Passes', image: screen1, tag: 'DISCOVERY' },
      { id: 2, title: 'Smart Food Scanner', image: screen2, tag: 'AI VISION' },
      { id: 3, title: 'Fitness Class Booking', image: screen3, tag: 'CLASSES' },
      { id: 4, title: 'Diet & Nutrition Recipes', image: screen4, tag: 'NUTRITION' },
      { id: 5, title: 'Refer & Daily Rewards', image: screen5, tag: 'REWARDS' },
    ],
    showcaseTitle: 'Experience Fymble on iPhone 16 Pro.',
    showcaseSubtitle: 'Interactive high-fidelity screens designed for 250+ flows and 20K+ active users.',
    figmaTitle: 'Fymble Design System • Figma Canvas',
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&theme=dark&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2F5CszbCF6Lf5VfMKI1iyMEh%2FPORTFOLIO%3Fnode-id%3D0-1%26t%3DVfQJiW2c87ssCIl9-1'
  },
  3: {
    id: 3,
    title: 'Nutrition App',
    category: 'UX / UI Design',
    headlinePrefix: 'Personalized Nutrition & Macro Intelligence — ',
    headlineGradient: 'simplifying healthy habits every day.',
    subtitle: 'A seamless nutrition companion featuring AI-powered food tracking, personalized macro balancing, and chef-curated healthy recipes.',
    role: 'UI/UX Designer',
    timeline: 'Jun – Aug 2024',
    platform: 'iOS & Android',
    heroPhones: {
      left: { image: nutritionScreen2, alt: 'Personalized Nutrition Diet Plan' },
      center: { image: nutritionScreen1, alt: 'Nutrition & Wellness Hub' },
      right: { image: nutritionScreen3, alt: 'Healthy Recipe & Ingredients' }
    },
    screens: [
      { id: 1, title: 'Nutrition & Wellness Hub', image: nutritionScreen1, tag: 'DASHBOARD' },
      { id: 2, title: 'Personalized Daily Diet Plan', image: nutritionScreen2, tag: 'DIET PLAN' },
      { id: 3, title: 'Healthy Recipe & Ingredients', image: nutritionScreen3, tag: 'RECIPES' },
      { id: 4, title: '3D Interactive Body Metrics', image: nutritionScreen4, tag: 'BODY METRICS' },
      { id: 5, title: 'BMI & Nutrition Consultation Plans', image: nutritionScreen5, tag: 'CONSULTATION' },
    ],
    showcaseTitle: 'Experience Nutrition App on iPhone 16 Pro.',
    showcaseSubtitle: 'Interactive high-fidelity nutrition & macro tracking screens designed for effortless daily health.',
    figmaTitle: 'Nutrition App Design System • Figma Canvas',
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&theme=dark&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2F5CszbCF6Lf5VfMKI1iyMEh%2FPORTFOLIO%3Fnode-id%3D0-1%26t%3DVfQJiW2c87ssCIl9-1'
  },
  4: {
    id: 4,
    title: 'Gym Mate App',
    category: 'Community & Fitness',
    headlinePrefix: 'Social Fitness Matching — ',
    headlineGradient: 'find workout partners & spotters nearby.',
    subtitle: 'A location-based social fitness matching app connecting gym-goers, workout enthusiasts, and spotters for shared workouts and community motivation.',
    role: 'UI/UX Designer',
    timeline: 'Jul – Sep 2024',
    platform: 'iOS & Android',
    heroPhones: {
      left: { image: gymMateScreen1, alt: 'Gym Mate Discovery Hub' },
      center: { image: gymMateScreen6, alt: 'Find Your Perfect Gym Mate' },
      right: { image: gymMateScreen2, alt: 'Discover Gym Partners' }
    },
    screens: [
      { id: 1, title: 'Find Perfect Gym Mate', image: gymMateScreen6, tag: 'MATCH SPLASH' },
      { id: 2, title: 'Gym Mate Discovery Hub', image: gymMateScreen1, tag: 'DISCOVERY' },
      { id: 3, title: 'Discover Gym Partners', image: gymMateScreen2, tag: 'COMMUNITY' },
      { id: 4, title: 'Profile Photos & Bio', image: gymMateScreen3, tag: 'PROFILE SETUP' },
      { id: 5, title: 'City Selection & Onboarding', image: gymMateScreen4, tag: 'ONBOARDING' },
      { id: 6, title: 'Refer & Earn Rewards', image: gymMateScreen5, tag: 'REWARDS' },
    ],
    showcaseTitle: 'Experience Gym Mate on iPhone 16 Pro.',
    showcaseSubtitle: 'Interactive social fitness interfaces designed to connect workout enthusiasts seamlessly.',
    figmaTitle: 'Gym Mate Design System • Figma Canvas',
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&theme=dark&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2F5CszbCF6Lf5VfMKI1iyMEh%2FPORTFOLIO%3Fnode-id%3D0-1%26t%3DVfQJiW2c87ssCIl9-1'
  },
  7: {
    id: 7,
    title: 'AI Diet Coach',
    category: 'AI UX',
    headlinePrefix: 'Conversational Health & Nutrition Intelligence — ',
    headlineGradient: 'adaptive habits and real-time coaching.',
    subtitle: 'Multimodal AI conversational health coach providing personalized daily meal plans, allergy-safe nutrition balancing, and adaptive calorie reports.',
    role: 'AI Product Designer',
    timeline: 'Aug – Oct 2024',
    platform: 'iOS & Android',
    heroPhones: {
      left: { image: aiDietCoachScreen2, alt: 'Personalized AI Diet Plan' },
      center: { image: aiDietCoachScreen1, alt: 'AI Diet Report & Daily Hub' },
      right: { image: aiDietCoachScreen6, alt: 'Macro & Calorie Daily Log' }
    },
    screens: [
      { id: 1, title: 'AI Diet Report & Coach', image: aiDietCoachScreen1, tag: 'COACH HUB' },
      { id: 2, title: 'Macro & Calorie Daily Log', image: aiDietCoachScreen6, tag: 'MACROS & FOOD' },
      { id: 3, title: 'Personalized Meal Plan', image: aiDietCoachScreen2, tag: 'DIET PLAN' },
      { id: 4, title: 'AI Plan Generator Engine', image: aiDietCoachScreen3, tag: 'AI ENGINE' },
      { id: 5, title: 'Target Weight & BMI Goal', image: aiDietCoachScreen7, tag: 'GOAL SETUP' },
      { id: 6, title: 'Dietary Preference Style', image: aiDietCoachScreen4, tag: 'PREFERENCES' },
      { id: 7, title: 'Allergies & Dietary Guardrails', image: aiDietCoachScreen5, tag: 'ONBOARDING' },
    ],
    showcaseTitle: 'Experience AI Diet Coach on iPhone 16 Pro.',
    showcaseSubtitle: 'Interactive AI conversational nutrition and personalized diet tracking interfaces.',
    figmaTitle: 'AI Diet Coach Design System • Figma Canvas',
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&theme=dark&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2F5CszbCF6Lf5VfMKI1iyMEh%2FPORTFOLIO%3Fnode-id%3D0-1%26t%3DVfQJiW2c87ssCIl9-1'
  },
  8: {
    id: 8,
    title: 'Food Scanner App',
    category: 'AI UX',
    headlinePrefix: 'Instant AI Computer Vision Food Scanning — ',
    headlineGradient: 'calories, macros & nutrition in seconds.',
    subtitle: 'Point-and-shoot camera scanner powered by AI vision to instantly analyze meal portions, breakdown macronutrients, and track daily caloric budget.',
    role: 'AI Product Designer',
    timeline: 'Aug – Oct 2024',
    platform: 'iOS & Android',
    heroPhones: {
      left: { image: foodScannerScreen2, alt: 'Real-Time Camera AI Scanner' },
      center: { image: foodScannerScreen1, alt: 'Instant Macro & Calorie Breakdown' },
      right: { image: foodScannerScreen5, alt: 'Dish Breakdown & Micro Nutrients' }
    },
    screens: [
      { id: 1, title: 'Instant Dish & Macro Analysis', image: foodScannerScreen1, tag: 'AI VISION' },
      { id: 2, title: 'Dish Breakdown & Micro Nutrients', image: foodScannerScreen5, tag: 'NUTRIENTS' },
      { id: 3, title: 'Live Camera Food Scanner', image: foodScannerScreen2, tag: 'CAMERA SCAN' },
      { id: 4, title: 'My Cal Daily Nutrition Hub', image: foodScannerScreen3, tag: 'DASHBOARD' },
      { id: 5, title: 'Angle Guidance: Bowl Analysis', image: foodScannerScreen6, tag: 'SCAN GUIDE' },
      { id: 6, title: 'Angle Guidance: Meal & Sandwiches', image: foodScannerScreen7, tag: 'SCAN GUIDE' },
      { id: 7, title: 'Kyra Pro AI Coach Upgrade', image: foodScannerScreen4, tag: 'PAYWALL & PRO' },
    ],
    showcaseTitle: 'Experience Food Scanner App on iPhone 16 Pro.',
    showcaseSubtitle: 'Interactive AI computer vision camera and automated calorie tracking interfaces.',
    figmaTitle: 'Food Scanner Design System • Figma Canvas',
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&theme=dark&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2F5CszbCF6Lf5VfMKI1iyMEh%2FPORTFOLIO%3Fnode-id%3D0-1%26t%3DVfQJiW2c87ssCIl9-1'
  },
  9: {
    id: 9,
    title: 'AI Nutrition App',
    category: 'AI UX',
    headlinePrefix: 'AI-Driven Bio-Adaptive Nutrition — ',
    headlineGradient: 'intelligent macros & automated meal plans.',
    subtitle: 'Next-generation AI nutrition engine with automated grocery lists, bio-adaptive dietary recommendations, and smart calorie forecasting.',
    role: 'AI Product Designer',
    timeline: 'Jul – Sep 2024',
    platform: 'iOS & Android',
    heroPhones: {
      left: { image: nutritionScreen2, alt: 'Personalized Nutrition Diet Plan' },
      center: { image: nutritionScreen1, alt: 'Nutrition & Wellness Hub' },
      right: { image: nutritionScreen3, alt: 'Healthy Recipe & Ingredients' }
    },
    screens: [
      { id: 1, title: 'Nutrition & Wellness Hub', image: nutritionScreen1, tag: 'DASHBOARD' },
      { id: 2, title: 'Personalized Daily Diet Plan', image: nutritionScreen2, tag: 'DIET PLAN' },
      { id: 3, title: 'Healthy Recipe & Ingredients', image: nutritionScreen3, tag: 'RECIPES' },
      { id: 4, title: '3D Interactive Body Metrics', image: nutritionScreen4, tag: 'BODY METRICS' },
      { id: 5, title: 'BMI & Nutrition Consultation Plans', image: nutritionScreen5, tag: 'CONSULTATION' },
    ],
    showcaseTitle: 'Experience AI Nutrition App on iPhone 16 Pro.',
    showcaseSubtitle: 'Interactive AI-powered nutrition intelligence interface crafted for seamless daily consistency.',
    figmaTitle: 'AI Nutrition Design System • Figma Canvas',
    figmaUrl: 'https://www.figma.com/embed?embed_host=share&theme=dark&url=https%3A%2F%2Fwww.figma.com%2Fdesign%2F5CszbCF6Lf5VfMKI1iyMEh%2FPORTFOLIO%3Fnode-id%3D0-1%26t%3DVfQJiW2c87ssCIl9-1'
  }
}

export default function ProjectDetail({ project, categoryLabel, onBack, onNavigateProject }) {
  if (!project) return null

  const [activeStep, setActiveStep] = useState(0)
  const [currentScreenIdx, setCurrentScreenIdx] = useState(0)
  const [isBlackout, setIsBlackout] = useState(false)
  const [blackoutMsg, setBlackoutMsg] = useState('')
  const [isLightboxOpen, setIsLightboxOpen] = useState(false)
  const [isAutoplayPaused, setIsAutoplayPaused] = useState(false)
  const [isFigmaLoading, setIsFigmaLoading] = useState(true)

  // Resolve case study data if available
  const matchedCaseStudy =
    CASE_STUDIES[project.id] ||
    (project.title?.toLowerCase().includes('food scanner') ? CASE_STUDIES[8] : null) ||
    (project.title?.toLowerCase().includes('diet coach') ? CASE_STUDIES[7] : null) ||
    (project.title?.toLowerCase().includes('gym mate') ? CASE_STUDIES[4] : null) ||
    (project.title?.toLowerCase().includes('nutrition') ? CASE_STUDIES[3] : null) ||
    (project.title?.toLowerCase().includes('fymble') ? CASE_STUDIES[1] : null)

  const isCaseStudyProject = Boolean(matchedCaseStudy)
  const activeCaseStudy = matchedCaseStudy || CASE_STUDIES[1]

  const isWebProject =
    project.categoryId === 'web' ||
    project.category?.toLowerCase().includes('web') ||
    (categoryLabel && categoryLabel.toLowerCase().includes('web'))

  // 1. Full Image Artwork Project (renders exact high-res image showcase)
  const isImageArtworkProject = Boolean(project.image && !isCaseStudyProject && !isWebProject)

  const activeScreens = activeCaseStudy.screens

  // Auto-scroll slideshow timer for iPhone showcase (every 3.5s)
  useEffect(() => {
    if (!isCaseStudyProject || isAutoplayPaused) return

    const timer = setInterval(() => {
      setCurrentScreenIdx((prev) => (prev + 1) % activeScreens.length)
    }, 3500)

    return () => clearInterval(timer)
  }, [isCaseStudyProject, isAutoplayPaused, activeScreens.length])

  // =========================================================================
  // ANTI-DOWNLOAD, ANTI-RIGHT-CLICK & ANTI-SCREENSHOT BLACKOUT PROTECTION
  // =========================================================================
  useEffect(() => {
    let blackoutTimer = null

    const triggerBlackout = (reason) => {
      setIsBlackout(true)
      setBlackoutMsg(reason)
      if (blackoutTimer) clearTimeout(blackoutTimer)
      blackoutTimer = setTimeout(() => {
        setIsBlackout(false)
      }, 2200)
    }

    // 1. Block right click / context menu
    const handleContextMenu = (e) => {
      e.preventDefault()
      return false
    }

    // 2. Keyboard shortcut prevention (PrintScreen, Snipping tool, DevTools, Save, Print)
    const handleKeyDown = (e) => {
      // PrintScreen key pressed
      if (e.key === 'PrintScreen' || e.code === 'PrintScreen') {
        e.preventDefault()
        triggerBlackout('Screenshot Key Intercepted')
        try {
          navigator.clipboard?.writeText('🔒 Protected Design Asset — © Vijay Sahu')
        } catch (_) {}
      }

      // Block Ctrl+S (Save), Ctrl+P (Print), Ctrl+U (Source)
      if ((e.ctrlKey || e.metaKey) && ['s', 'p', 'u', 'S', 'P', 'U'].includes(e.key)) {
        e.preventDefault()
        triggerBlackout('Page Save / Print Restricted')
      }

      // Block Ctrl+Shift+I / Ctrl+Shift+C / Ctrl+Shift+J (DevTools) / Win+Shift+S (Snipping)
      if ((e.ctrlKey || e.metaKey) && e.shiftKey && ['I', 'i', 'C', 'c', 'J', 'j', 'S', 's'].includes(e.key)) {
        e.preventDefault()
        triggerBlackout('Developer Tools / Screen Snip Restricted')
      }

      // Block F12
      if (e.key === 'F12') {
        e.preventDefault()
        triggerBlackout('Developer Inspection Restricted')
      }
    }

    const handleKeyUp = (e) => {
      if (e.key === 'PrintScreen' || e.code === 'PrintScreen') {
        triggerBlackout('Screenshot Attempt Blocked')
      }
    }

    window.addEventListener('contextmenu', handleContextMenu)
    window.addEventListener('keydown', handleKeyDown)
    window.addEventListener('keyup', handleKeyUp)

    return () => {
      window.removeEventListener('contextmenu', handleContextMenu)
      window.removeEventListener('keydown', handleKeyDown)
      window.removeEventListener('keyup', handleKeyUp)
      if (blackoutTimer) clearTimeout(blackoutTimer)
    }
  }, [])

  return (
    <div
      className="detail-container"
      onContextMenu={(e) => e.preventDefault()}
    >
      {/* =====================================================================
          SECURITY BLACKOUT SCREEN (Anti-Screenshot / Snipping Protection)
          ===================================================================== */}
      {isBlackout && (
        <div className="security-blackout-shield">
          <div className="security-shield-card">
            <div className="security-shield-icon">🔒</div>
            <h3 className="security-shield-title">Protected Creative Work</h3>
            <p className="security-shield-desc">
              {blackoutMsg || 'Screenshots, screen recordings, and asset downloads are restricted to protect intellectual property.'}
            </p>
            <span className="security-shield-badge">© 2026 Vijay Sahu • Design Protected</span>
          </div>
        </div>
      )}

      {/* Background Image Layer */}
      <div className="detail-bg-image">
        <img src={bgImage} alt="" draggable="false" />
      </div>

      {/* Smooth Moving Purple Ambient Orb */}
      <div className="page-ambient-glow-layer">
        <div className="page-moving-purple-orb" />
      </div>

      {/* Top Header Navigation */}
      <header className="detail-topbar">
        <button className="detail-btn-back" onClick={onBack} title="Back to Projects">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6"/>
          </svg>
          <span>Back</span>
        </button>

        <button
          className="detail-action-btn"
          onClick={() => {
            if (isImageArtworkProject) {
              setIsLightboxOpen(true)
            } else if (isWebProject) {
              const el = document.getElementById('web-architecture-section')
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' })
              }
            } else {
              const el = document.getElementById('figma-workbench-section')
              if (el) {
                el.scrollIntoView({ behavior: 'smooth' })
              }
            }
          }}
        >
          <span>{isImageArtworkProject ? 'Inspect Artwork' : isWebProject ? 'Explore Architecture' : 'View Prototype'}</span>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M7 17L17 7M17 7H7M17 7V17" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </button>
      </header>

      {/* =====================================================================
          RENDER BRANCH 1: PURE FULL-SCREEN IMAGE VIEW ONLY (NO TEXT/CONTENT)
          ===================================================================== */}
      {isImageArtworkProject ? (
        <main className="detail-content pure-image-viewport">
          <div className="pure-image-stage">
            <div className="pure-image-glow" />

            <div className="pure-image-container">
              <img
                src={project.image}
                alt={project.title || 'Artwork'}
                className="pure-main-img"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
              />

              {/* Invisible Anti-Drag & Anti-Download Protection Shield */}
              <div
                className="pure-protection-shield"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              >
                <div className="pure-shield-watermark">
                  <span>🔒 Designed by Vijay Sahu • Protected Work</span>
                </div>
              </div>
            </div>
          </div>
        </main>
      ) : isWebProject ? (
        /* =====================================================================
            RENDER BRANCH 2: MACBOOK PRO 16" LAPTOP SHOWCASE (WEB DESIGN PROJECTS)
            ===================================================================== */
        <main className="detail-content web-showcase-main">
          {/* Section 1: Photorealistic MacBook Pro 16" Device Showcase (Immediately at top!) */}
          <section className="macbook-showcase-section">
            <div className="macbook-ambient-glow" />

            <div className="macbook-device-wrap">
              {/* MacBook Top Lid with Display */}
              <div className="macbook-lid">
                {/* Center Top Camera Notch */}
                <div className="macbook-notch">
                  <div className="macbook-camera-lens" />
                  <div className="macbook-camera-indicator" />
                </div>

                {/* Inner Screen & Browser Window */}
                <div className="macbook-screen-viewport">
                  {/* Safari / Chrome Browser Top Bar */}
                  <div className="macbook-browser-bar">
                    <div className="macbook-traffic-dots">
                      <span className="dot dot-red" />
                      <span className="dot dot-yellow" />
                      <span className="dot dot-green" />
                    </div>

                    <div className="macbook-url-bar">
                      <span className="macbook-url-lock">🔒</span>
                      <span>https://vijay.design/{project.title.toLowerCase().replace(/[^a-z0-9]+/g, '-')}</span>
                    </div>

                    <div className="macbook-browser-actions">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M4 12v8a2 2 0 002 2h12a2 2 0 002-2v-8"/>
                        <polyline points="16 6 12 2 8 6"/>
                        <line x1="12" y1="2" x2="12" y2="15"/>
                      </svg>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="12" y1="5" x2="12" y2="19"/>
                        <line x1="5" y1="12" x2="19" y2="12"/>
                      </svg>
                    </div>
                  </div>

                  {/* Scrollable Website Canvas Area */}
                  <div className="macbook-canvas-area">
                    {project.image ? (
                      <img
                        src={project.image}
                        alt={project.title}
                        className="macbook-artwork-img"
                        draggable="false"
                        onContextMenu={(e) => e.preventDefault()}
                      />
                    ) : (
                      <div className="macbook-mock-website">
                        <header className="mock-web-nav">
                          <div className="mock-web-logo">
                            <span>⚡</span>
                            <span>{project.title}</span>
                          </div>
                          <nav className="mock-web-links">
                            <span>Features</span>
                            <span>Solutions</span>
                            <span>Architecture</span>
                            <span>Pricing</span>
                          </nav>
                          <button className="mock-web-cta-btn">Get Started</button>
                        </header>

                        <div className="mock-web-hero-content">
                          <span className="mock-web-badge">✨ Next-Gen Web Experience</span>
                          <h2 className="mock-web-title">
                            Architected for <span className="mock-web-title-grad">Maximum Velocity &amp; Scale</span>
                          </h2>
                          <p className="mock-web-desc">
                            {project.description || 'Designed with high conversion layouts, accessible typography hierarchy, and sub-second load performance.'}
                          </p>
                          <div className="mock-web-cta-row">
                            <button className="mock-web-btn-primary">Explore Platform</button>
                            <button className="mock-web-btn-secondary">View Case Study</button>
                          </div>
                        </div>

                        <div className="mock-web-cards-row">
                          <div className="mock-web-card">
                            <span className="card-ico">⚡</span>
                            <h5>Sub-Second Performance</h5>
                            <p>Optimized Core Web Vitals with 100/100 Lighthouse performance metrics.</p>
                          </div>
                          <div className="mock-web-card">
                            <span className="card-ico">📐</span>
                            <h5>Fluid Responsive Grid</h5>
                            <p>Pixel-perfect layout consistency from mobile displays up to 4K ultra-wide monitors.</p>
                          </div>
                          <div className="mock-web-card">
                            <span className="card-ico">🔒</span>
                            <h5>Enterprise UX Standards</h5>
                            <p>WCAG 2.1 AA accessible contrast tokens and intuitive user feedback loops.</p>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Lower Aluminum Base Lip with Thumb Notch */}
              <div className="macbook-base">
                <div className="macbook-notch-lip" />
              </div>
            </div>
          </section>

          {/* Section 2: Project Overview & Meta Details (Directly Below Laptop) */}
          <section id="web-architecture-section" className="web-showcase-hero web-details-below">
            <div className="case-category-label">
              <span>{project.title}</span>
              <span className="dot-sep">•</span>
              <span>{categoryLabel || project.category || 'Web Design'}</span>
            </div>

            <h1 className="web-hero-title">
              {project.title} — <br className="hide-mobile" />
              <span className="web-hero-title-gradient">Crafted for High-Impact Web Experiences.</span>
            </h1>

            <p className="web-hero-subtitle">
              {project.description || 'Responsive, performant web architecture designed with fluid UX interactions and cohesive design tokens.'}
            </p>

            <div className="web-meta-row">
              <div className="case-meta-pill">
                <span className="meta-icon">💻</span>
                <div className="meta-text">
                  <span className="meta-lbl">Platform</span>
                  <span className="meta-val">Responsive Web / SaaS</span>
                </div>
              </div>

              <div className="case-meta-pill">
                <span className="meta-icon">👤</span>
                <div className="meta-text">
                  <span className="meta-lbl">Role</span>
                  <span className="meta-val">Lead Web &amp; UI Designer</span>
                </div>
              </div>

              <div className="case-meta-pill">
                <span className="meta-icon">⚡</span>
                <div className="meta-text">
                  <span className="meta-lbl">Stack</span>
                  <span className="meta-val">Next.js • Tailwind • Figma</span>
                </div>
              </div>

              <div className="case-meta-pill">
                <span className="meta-icon">🚀</span>
                <div className="meta-text">
                  <span className="meta-lbl">Status</span>
                  <span className="meta-val">Live &amp; Production Ready</span>
                </div>
              </div>
            </div>
          </section>

          {/* Section 3: Web Architecture & UX Foundations Section (NO Figma Embed!) */}
          <section className="case-section-container">
            <div className="case-section-head">
              <span className="section-eyebrow eyebrow-purple">CORE ARCHITECTURE</span>
              <h2 className="case-section-h2">Design precision engineered for modern web.</h2>
              <p className="case-section-sub">
                Every component is built around clean visual hierarchy, fast interaction feedback, and responsive layout resilience.
              </p>
            </div>

            <div className="problem-cards-grid">
              <div className="problem-card">
                <div className="card-top-icon">📐</div>
                <h3>1. Fluid Design System</h3>
                <p>Engineered with scalable design tokens, standardized typography scale, and 8pt spatial grid for unified brand consistency.</p>
              </div>

              <div className="problem-card">
                <div className="card-top-icon">⚡</div>
                <h3>2. High-Performance UX</h3>
                <p>Minimal layout shifts (zero CLS), predictive micro-interactions, and instant page transitions for effortless user journeys.</p>
              </div>

              <div className="problem-card">
                <div className="card-top-icon">📱</div>
                <h3>3. Cross-Platform Adaptability</h3>
                <p>Fluid responsive breakpoints rigorously tested across mobile viewports, tablets, laptops, and wide desktop displays.</p>
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
      ) : isCaseStudyProject ? (
        /* =====================================================================
            RENDER BRANCH 2: INTERACTIVE 3D PHONE ECOSYSTEM CASE STUDY
            ===================================================================== */
        <main className="detail-content">
        {/* =========================================================================
            SECTION 1: HERO & 3D PHONE MOCKUPS
            ========================================================================= */}
        <section className="case-hero-section">
          <div className="case-hero-left">
            <div className="case-category-label">
              <span>{activeCaseStudy.title || project.title}</span>
              <span className="dot-sep">•</span>
              <span>{categoryLabel || activeCaseStudy.category || 'Product Design'}</span>
            </div>

            <h1 className="case-hero-title">
              {activeCaseStudy.headlinePrefix} <br className="hide-mobile" />
              <span className="case-hero-title-gradient">{activeCaseStudy.headlineGradient}</span>
            </h1>

            <p className="case-hero-subtitle">
              {activeCaseStudy.subtitle || project.description}
            </p>

            <div className="case-meta-row">
              <div className="case-meta-pill">
                <span className="meta-icon">👤</span>
                <div className="meta-text">
                  <span className="meta-lbl">Role</span>
                  <span className="meta-val">{activeCaseStudy.role || 'UI/UX Designer'}</span>
                </div>
              </div>

              <div className="case-meta-pill">
                <span className="meta-icon">📅</span>
                <div className="meta-text">
                  <span className="meta-lbl">Timeline</span>
                  <span className="meta-val">{activeCaseStudy.timeline || 'May – Jul 2024'}</span>
                </div>
              </div>

              <div className="case-meta-pill">
                <span className="meta-icon">📱</span>
                <div className="meta-text">
                  <span className="meta-lbl">Platform</span>
                  <span className="meta-val">{activeCaseStudy.platform || 'iOS & Android'}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: 3D Multi-Device Showcase using Realistic iPhone 16 Pro Hardware */}
          <div className="case-hero-right">
            <div className="phones-hero-showcase">
              {/* Left Phone */}
              <div className="mock-phone phone-left">
                <div className="hero-iphone-chassis">
                  <div className="hero-iphone-viewport">
                    <div className="hero-dynamic-island" />
                    <img
                      src={activeCaseStudy.heroPhones.left.image}
                      alt={activeCaseStudy.heroPhones.left.alt}
                      className="hero-phone-screen-img"
                      draggable="false"
                      onContextMenu={(e) => e.preventDefault()}
                    />
                    <div className="hero-phone-glare" />
                    <div className="hero-home-indicator" />
                  </div>
                </div>
              </div>

              {/* Center Phone */}
              <div className="mock-phone phone-center">
                <div className="hero-iphone-chassis">
                  <div className="hero-iphone-viewport">
                    <div className="hero-dynamic-island" />
                    <img
                      src={activeCaseStudy.heroPhones.center.image}
                      alt={activeCaseStudy.heroPhones.center.alt}
                      className="hero-phone-screen-img"
                      draggable="false"
                      onContextMenu={(e) => e.preventDefault()}
                    />
                    <div className="hero-phone-glare" />
                    <div className="hero-home-indicator" />
                  </div>
                </div>
              </div>

              {/* Right Phone */}
              <div className="mock-phone phone-right">
                <div className="hero-iphone-chassis">
                  <div className="hero-iphone-viewport">
                    <div className="hero-dynamic-island" />
                    <img
                      src={activeCaseStudy.heroPhones.right.image}
                      alt={activeCaseStudy.heroPhones.right.alt}
                      className="hero-phone-screen-img"
                      draggable="false"
                      onContextMenu={(e) => e.preventDefault()}
                    />
                    <div className="hero-phone-glare" />
                    <div className="hero-home-indicator" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* =========================================================================
            SECTION 2: INTERACTIVE IPHONE MOBILE SCREENS SHOWCASE SLIDER
            ========================================================================= */}
        <section
          className="case-section-container iphone-showcase-container"
          onMouseEnter={() => setIsAutoplayPaused(true)}
          onMouseLeave={() => setIsAutoplayPaused(false)}
        >
          <div className="case-section-head">
            <div className="showcase-header-badge-row">
              <span className="section-eyebrow eyebrow-purple">MOBILE APP SCREENS</span>
              <span className="autoplay-status-badge">
                <span className="live-dot" /> Auto-playing
              </span>
            </div>
            <h2 className="case-section-h2">{activeCaseStudy.showcaseTitle}</h2>
            <p className="case-section-sub">
              {activeCaseStudy.showcaseSubtitle}
            </p>
          </div>

          <div className="iphone-slider-stage">
            <div className="iphone-ambient-glow" />

            {/* Left Prev Arrow Button */}
            <button
              className="iphone-slider-nav-btn prev"
              onClick={() => setCurrentScreenIdx((prev) => (prev > 0 ? prev - 1 : activeScreens.length - 1))}
              title="Previous Screen"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M15 18l-6-6 6-6"/>
              </svg>
            </button>

            {/* Photorealistic iPhone 16 Pro 3D Device Model */}
            <div className="iphone-device-wrap">
              {/* Hardware Side Buttons */}
              <div className="iphone-btn-action" />
              <div className="iphone-btn-volume-up" />
              <div className="iphone-btn-volume-down" />
              <div className="iphone-btn-power" />

              {/* Outer Titanium Chassis & Inner Screen Viewport */}
              <div className="iphone-chassis">
                {/* Screen Viewport */}
                <div className="iphone-screen-viewport">
                  {/* Dynamic Island Pill & Front Camera Lens */}
                  <div className="iphone-dynamic-island">
                    <div className="island-camera-lens" />
                    <div className="island-mic-indicator" />
                  </div>

                  {/* Status Bar */}
                  <div className="iphone-status-bar">
                    <span className="status-time">9:41</span>
                    <div className="status-icons">
                      <svg width="15" height="11" viewBox="0 0 18 12" fill="currentColor">
                        <path d="M1 9.5h2.5V12H1v-2.5zm4-3.5h2.5V12H5V6zm4-3.5h2.5V12H9V2.5zm4-2.5h2.5V12H13V0z"/>
                      </svg>
                      <svg width="14" height="11" viewBox="0 0 16 12" fill="currentColor">
                        <path d="M8 3.6c2.4 0 4.6 1 6.1 2.6l1.4-1.4C13.6 2.9 10.9 1.7 8 1.7 5.1 1.7 2.4 2.9.5 4.8l1.4 1.4C3.4 4.6 5.6 3.6 8 3.6zm0 3.7c1.4 0 2.7.6 3.6 1.6l1.4-1.4C11.8 6.3 10 5.4 8 5.4s-3.8.9-5 2.1l1.4 1.4c.9-1 2.2-1.6 3.6-1.6zm0 3.8c.8 0 1.5.3 2 1l1.4-1.4C10.5 9.8 9.3 9.2 8 9.2s-2.5.6-3.4 1.5L6 12.1c.5-.7 1.2-1 2-1z"/>
                      </svg>
                      <div className="status-battery">
                        <div className="battery-level" />
                      </div>
                    </div>
                  </div>

                  {/* Screen Content Artwork */}
                  {activeScreens[currentScreenIdx]?.image ? (
                    <img
                      src={activeScreens[currentScreenIdx].image}
                      alt={activeScreens[currentScreenIdx].title}
                      className="iphone-screen-artwork"
                      draggable="false"
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  ) : (
                    <div className="iphone-screen-ready-state">
                      <div className="ph-badge">{activeScreens[currentScreenIdx]?.tag || 'UI SCREEN'}</div>
                      <span className="ph-icon">✨</span>
                      <h4 className="ph-title">{activeScreens[currentScreenIdx]?.title || 'Screen Showcase'}</h4>
                      <p className="ph-desc">Upload your high-fidelity Figma UI screen to render inside this iPhone 16 Pro.</p>
                      <div className="ph-screen-guide-hint">
                        <span>📐 Optimal ratio: 9:19.5 (1179 × 2556 px)</span>
                      </div>
                    </div>
                  )}

                  {/* Glass Reflection Highlight & Glare */}
                  <div className="iphone-glass-glare" />

                  {/* Bottom Home Indicator Bar */}
                  <div className="iphone-home-indicator" />

                  {/* Anti-Drag & Anti-Save Shield */}
                  <div
                    className="iphone-screen-protection"
                    onContextMenu={(e) => e.preventDefault()}
                    onDragStart={(e) => e.preventDefault()}
                  />
                </div>
              </div>
            </div>

            {/* Right Next Arrow Button */}
            <button
              className="iphone-slider-nav-btn next"
              onClick={() => setCurrentScreenIdx((prev) => (prev < activeScreens.length - 1 ? prev + 1 : 0))}
              title="Next Screen"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                <path d="M9 18l6-6-6-6"/>
              </svg>
            </button>
          </div>

          {/* Screen Navigation Selector Pills */}
          <div className="iphone-screen-selector-bar">
            {activeScreens.map((screen, idx) => (
              <button
                key={screen.id}
                className={`iphone-nav-tab-pill ${idx === currentScreenIdx ? 'active' : ''}`}
                onClick={() => setCurrentScreenIdx(idx)}
              >
                <span className="tab-idx">0{idx + 1}</span>
                <span className="tab-name">{screen.title}</span>
              </button>
            ))}
          </div>
        </section>

        {/* =========================================================================
            SECTION 3: LIVE INTERACTIVE FIGMA CANVAS WORKBENCH
            ========================================================================= */}
        <section id="figma-workbench-section" className="case-section-container figma-workbench-section">
          <div className="case-section-head">
            <div className="showcase-header-badge-row">
              <span className="section-eyebrow eyebrow-purple">FIGMA WORKBENCH</span>
              <span className="figma-live-badge">
                <svg width="12" height="12" viewBox="0 0 38 57" fill="none">
                  <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
                  <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
                  <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
                  <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
                  <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
                </svg>
                <span>Live Canvas</span>
              </span>
            </div>
            <h2 className="case-section-h2">Explore Complete Design in Figma.</h2>
            <p className="case-section-sub">
              Directly pan, zoom in/out, and inspect user flows, components, and wireframes inside the canvas below.
            </p>
          </div>

          {/* Figma Browser Frame */}
          <div className="figma-embed-frame">
            <div className="figma-frame-topbar">
              <div className="figma-window-dots">
                <span className="dot dot-red" />
                <span className="dot dot-yellow" />
                <span className="dot dot-green" />
              </div>

              <div className="figma-file-title-pill">
                <span className="figma-file-icon">🎨</span>
                <span className="figma-file-name">{activeCaseStudy.figmaTitle}</span>
              </div>

              <div className="figma-hint-pill">
                <span>🔍 Pinch / Scroll to Zoom • Drag to Pan</span>
              </div>
            </div>

            {/* Embedded Live Figma Viewer */}
            <div className="figma-iframe-container">
              {/* Dark Theme Figma Loading State Overlay */}
              {isFigmaLoading && (
                <div className="figma-loading-overlay">
                  <div className="figma-loader-spinner-wrap">
                    <div className="figma-loader-spinner" />
                    <div className="figma-loader-icon-center">
                      <svg width="28" height="28" viewBox="0 0 38 57" fill="none">
                        <path d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38C23.2533 38 19 33.7467 19 28.5Z" fill="#1ABCFE"/>
                        <path d="M0 47.5C0 42.2533 4.25329 38 9.5 38H19V47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z" fill="#0ACF83"/>
                        <path d="M19 0V19H28.5C33.7467 19 38 14.7467 38 9.5C38 4.25329 33.7467 0 28.5 0H19Z" fill="#FF7262"/>
                        <path d="M0 9.5C0 14.7467 4.25329 19 9.5 19H19V0H9.5C4.25329 0 0 4.25329 0 9.5Z" fill="#F24E1E"/>
                        <path d="M0 28.5C0 33.7467 4.25329 38 9.5 38H19V19H9.5C4.25329 19 0 23.2533 0 28.5Z" fill="#A259FF"/>
                      </svg>
                    </div>
                  </div>
                  <div className="figma-loading-text-group">
                    <h4 className="figma-loading-title">Loading Figma Canvas</h4>
                    <p className="figma-loading-subtitle">
                      Explore full design system and components live.
                    </p>
                    <button
                      className="figma-force-enter-btn"
                      onClick={() => setIsFigmaLoading(false)}
                    >
                      <span>Launch Interactive Canvas ↗</span>
                    </button>
                  </div>
                </div>
              )}

              <iframe
                title="Figma Live Canvas Embed"
                src={activeCaseStudy.figmaUrl}
                allowFullScreen
                className={`figma-iframe ${isFigmaLoading ? 'loading' : 'ready'}`}
                onLoad={() => {
                  setTimeout(() => setIsFigmaLoading(false), 7000)
                }}
              />
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
      ) : (
        /* =====================================================================
            RENDER BRANCH 3: GENERAL PROJECT OVERVIEW & ARCHITECTURE SPECS
            ===================================================================== */
        <main className="detail-content graphic-showcase-main">
          <section className="graphic-hero-layout">
            <div className="graphic-info-col">
              <div className="case-category-label">
                <span>{project.title}</span>
                <span className="dot-sep">•</span>
                <span>{categoryLabel || project.category || 'Product Design'}</span>
              </div>

              <h1 className="graphic-hero-title">
                {project.title}
              </h1>

              <p className="case-hero-subtitle">
                {project.description || 'Comprehensive design system, responsive UI architecture, and high-fidelity prototypes.'}
              </p>

              <div className="case-meta-row graphic-meta-grid">
                <div className="case-meta-pill">
                  <span className="meta-icon">👤</span>
                  <div className="meta-text">
                    <span className="meta-lbl">Role</span>
                    <span className="meta-val">Lead Product Designer</span>
                  </div>
                </div>

                <div className="case-meta-pill">
                  <span className="meta-icon">🏷️</span>
                  <div className="meta-text">
                    <span className="meta-lbl">Tag</span>
                    <span className="meta-val">{project.tag || project.category}</span>
                  </div>
                </div>

                <div className="case-meta-pill">
                  <span className="meta-icon">🚀</span>
                  <div className="meta-text">
                    <span className="meta-lbl">Status</span>
                    <span className="meta-val">Designed &amp; Prototyped</span>
                  </div>
                </div>

                <div className="case-meta-pill">
                  <span className="meta-icon">⚡</span>
                  <div className="meta-text">
                    <span className="meta-lbl">Tools</span>
                    <span className="meta-val">Figma, Next.js, React</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="graphic-artwork-col">
              <div className="artwork-glass-frame general-mock-frame">
                <div className={`general-banner-mock ${project.theme || 'theme-purple'}`}>
                  <span className="general-mock-icon">{project.icon || '✨'}</span>
                  <span className="general-mock-tag">{project.tag || project.category}</span>
                  <h3 className="general-mock-title">{project.title}</h3>
                </div>
                <div className="artwork-frame-bar">
                  <span className="artwork-frame-title">{project.title}</span>
                  <span className="lb-shield-tag">Case Study In Production</span>
                </div>
              </div>
            </div>
          </section>

          {/* Core Highlights */}
          <section className="case-section-container">
            <div className="case-section-head">
              <span className="section-eyebrow eyebrow-purple">KEY ARCHITECTURE</span>
              <h2 className="case-section-h2">Design precision engineered for performance.</h2>
            </div>

            <div className="problem-cards-grid">
              <div className="problem-card">
                <div className="card-top-icon">📐</div>
                <h3>1. Cohesive Design System</h3>
                <p>Built with accessible color contrast tokens, fluid typography scaling, and standard 8pt spatial grid.</p>
              </div>

              <div className="problem-card">
                <div className="card-top-icon">⚡</div>
                <h3>2. Seamless User Flows</h3>
                <p>Minimal click paths with predictive micro-interactions and instant feedback states.</p>
              </div>

              <div className="problem-card">
                <div className="card-top-icon">📱</div>
                <h3>3. Multi-Device Adaptability</h3>
                <p>Optimized layouts crafted for flawless responsive rendering across mobile, tablet, and desktop viewports.</p>
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
      )}

      {/* =====================================================================
          LIGHTBOX MODAL FOR FULLSCREEN ARTWORK INSPECT
          ===================================================================== */}
      {isLightboxOpen && isImageArtworkProject && (
        <div className="artwork-lightbox-modal" onClick={() => setIsLightboxOpen(false)}>
          <div className="lightbox-content-box" onClick={(e) => e.stopPropagation()}>
            <button
              className="lightbox-close-btn"
              onClick={() => setIsLightboxOpen(false)}
              title="Close"
            >
              ✕
            </button>

            <div className="lightbox-img-shield-wrap">
              <img
                src={project.image}
                alt={project.title}
                className="lightbox-full-img"
                draggable="false"
                onContextMenu={(e) => e.preventDefault()}
              />
              <div
                className="artwork-protection-shield"
                onContextMenu={(e) => e.preventDefault()}
                onDragStart={(e) => e.preventDefault()}
              />
            </div>

            <div className="lightbox-caption-bar">
              <div className="lb-title-group">
                <span className="lb-title">{project.title}</span>
                <span className="lb-sub">Visual &amp; Graphic Design • Vijay Sahu</span>
              </div>
              <span className="lb-shield-tag">🔒 Right-Click &amp; Downloads Disabled</span>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}
