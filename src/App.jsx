import { useState, useEffect } from 'react'
import './App.css'
import bgImage from './assets/bg-image.png'
import InteractiveParticleTrail from './InteractiveParticleTrail'
import Projects from './Projects'
import ProjectDetail from './ProjectDetail'
import DesignThinking from './DesignThinking'
import FymbleCaseStudy12 from './FymbleCaseStudy12'
import AboutMe from './AboutMe'
import Skills from './Skills'
import Resume from './Resume'
import Contact from './Contact'
import { getShuffledProjects } from './projectsData'

const HERO_ROTATING_PHRASES = [
  "Hi, I’m Vijay",
  "Product & AI UX Designer",
  "2 Years of Experience",
  "UI Motion & Graphics Designer"
]

function App() {
  const [currentPage, setCurrentPage] = useState('home') // 'home' | 'projects' | 'detail' | 'about' | 'skills' | 'resume' | 'contact'
  const [selectedProject, setSelectedProject] = useState(null)
  const [activeCategory, setActiveCategory] = useState('ux-ui')
  const [detailSource, setDetailSource] = useState('projects') // 'projects' | 'home'
  const [carouselIndex, setCarouselIndex] = useState(0)

  // Randomized pool of all 36 projects across all 6 categories
  const [projectsList] = useState(() => getShuffledProjects())

  // Animated Rotating Typewriter Heading
  const [phraseIndex, setPhraseIndex] = useState(0)
  const [displayedPhrase, setDisplayedPhrase] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentFullPhrase = HERO_ROTATING_PHRASES[phraseIndex]
    const typingSpeed = isDeleting ? 35 : 85

    const timeout = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedPhrase(currentFullPhrase.substring(0, displayedPhrase.length + 1))
        if (displayedPhrase.length + 1 === currentFullPhrase.length) {
          setTimeout(() => setIsDeleting(true), 1800)
        }
      } else {
        setDisplayedPhrase(currentFullPhrase.substring(0, displayedPhrase.length - 1))
        if (displayedPhrase.length - 1 === 0) {
          setIsDeleting(false)
          setPhraseIndex((prev) => (prev + 1) % HERO_ROTATING_PHRASES.length)
        }
      }
    }, typingSpeed)

    return () => clearTimeout(timeout)
  }, [displayedPhrase, isDeleting, phraseIndex])

  // Responsive screen detection for perfect mobile/tablet/desktop sliding & orientation
  const [windowWidth, setWindowWidth] = useState(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  )
  const [windowHeight, setWindowHeight] = useState(
    typeof window !== 'undefined' ? window.innerHeight : 800
  )

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth)
      setWindowHeight(window.innerHeight)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  const isLandscape = windowWidth > windowHeight
  // Mobile: phones (typically <= 600px)
  const isMobile = windowWidth <= 600
  // Tablet Portrait: vertical orientation on tablets (601px to 1024px, vertical only)
  // When tablet is horizontal/landscape, it automatically uses laptop view (3 cards)
  const isTablet = windowWidth > 600 && windowWidth <= 1024 && !isLandscape
  const cardsPerView = isMobile ? 1 : isTablet ? 2 : 3

  // Max slide index (adapts to mobile, tablet & desktop)
  const maxSlideIndex = Math.max(0, projectsList.length - cardsPerView)

  const handlePrevSlide = (e) => {
    if (e && e.stopPropagation) e.stopPropagation()
    setCarouselIndex((prev) => (prev > 0 ? prev - 1 : maxSlideIndex))
  }

  const handleNextSlide = (e) => {
    if (e && e.stopPropagation) e.stopPropagation()
    setCarouselIndex((prev) => (prev < maxSlideIndex ? prev + 1 : 0))
  }

  // Touch Swipe Gesture Handlers for Mobile Thumb Navigation
  const [touchStartX, setTouchStartX] = useState(null)
  const [touchEndX, setTouchEndX] = useState(null)

  const handleTouchStart = (e) => {
    setTouchStartX(e.targetTouches[0].clientX)
    setTouchEndX(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    setTouchEndX(e.targetTouches[0].clientX)
  }

  const handleTouchEnd = () => {
    if (touchStartX === null || touchEndX === null) return
    const diff = touchStartX - touchEndX
    if (diff > 35) {
      // Swiped Left -> Next Project
      setCarouselIndex((prev) => (prev < maxSlideIndex ? prev + 1 : 0))
    } else if (diff < -35) {
      // Swiped Right -> Previous Project
      setCarouselIndex((prev) => (prev > 0 ? prev - 1 : maxSlideIndex))
    }
    setTouchStartX(null)
    setTouchEndX(null)
  }

  // Route 1: Project Detail page
  if (currentPage === 'detail' && selectedProject) {
    const handleNextProject = () => {
      const idx = projectsList.findIndex(p => p.id === selectedProject.id)
      const nextIdx = (idx + 1) % projectsList.length
      const nextProj = projectsList[nextIdx]
      setSelectedProject(nextProj)
    }

    return (
      <>
        <InteractiveParticleTrail />
        <ProjectDetail
          project={selectedProject}
          categoryLabel={selectedProject.category || 'UX / UI Design'}
          onBack={() => setCurrentPage(detailSource || 'projects')}
          onNavigateProject={handleNextProject}
        />
      </>
    )
  }

  // Route 2: Direct Fymble Case Study page
  if (currentPage === 'case-study') {
    return (
      <>
        <InteractiveParticleTrail />
        <FymbleCaseStudy12
          onBack={() => setCurrentPage('home')}
          onNavigateProject={() => {
            const nextProj = projectsList.find(p => p.id === 2) || projectsList[1]
            setSelectedProject(nextProj)
            setDetailSource('case-study')
            setCurrentPage('detail')
          }}
        />
      </>
    )
  }

  // Route 3: Design Thinking page
  if (currentPage === 'design-thinking') {
    return (
      <>
        <InteractiveParticleTrail />
        <DesignThinking onBack={() => setCurrentPage('home')} />
      </>
    )
  }

  // Route 4: All Projects page
  if (currentPage === 'projects') {
    return (
      <>
        <InteractiveParticleTrail />
        <Projects
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
          onBack={() => setCurrentPage('home')}
          onOpenProject={(proj, catLabel, catId) => {
            if (catId) setActiveCategory(catId)
            setSelectedProject({ ...proj, category: catLabel, categoryId: catId || activeCategory })
            setDetailSource('projects')
            setCurrentPage('detail')
          }}
        />
      </>
    )
  }

  // Route 4: About Me page (with integrated Skills)
  if (currentPage === 'about') {
    return (
      <>
        <InteractiveParticleTrail />
        <AboutMe onBack={() => setCurrentPage('home')} />
      </>
    )
  }

  // Route 5: Skills page (fallback)
  if (currentPage === 'skills') {
    return (
      <>
        <InteractiveParticleTrail />
        <AboutMe onBack={() => setCurrentPage('home')} />
      </>
    )
  }

  // Route 6: Resume page (fallback)
  if (currentPage === 'resume') {
    return (
      <>
        <InteractiveParticleTrail />
        <Resume onBack={() => setCurrentPage('home')} />
      </>
    )
  }

  // Route 7: Contact page (with top Resume download banner)
  if (currentPage === 'contact') {
    return (
      <>
        <InteractiveParticleTrail />
        <Contact onBack={() => setCurrentPage('home')} />
      </>
    )
  }

  const handleNavClick = (item) => {
    switch (item) {
      case 'Case Study':
        setActiveCategory('ux-ui')
        setCurrentPage('case-study')
        break
      case 'Design Thinking':
        setCurrentPage('design-thinking')
        break
      case 'Projects':
        setCurrentPage('projects')
        break
      case 'About Me':
        setCurrentPage('about')
        break
      case 'Contact':
        setCurrentPage('contact')
        break
      default:
        break
    }
  }

  const openHomeProject = (proj) => {
    if (proj.categoryId) {
      setActiveCategory(proj.categoryId)
    }
    setSelectedProject({
      ...proj,
      category: proj.category || 'UX / UI Design',
      categoryId: proj.categoryId || activeCategory
    })
    setDetailSource('home')
    setCurrentPage('detail')
  }

  return (
    <div className="home-container">
      {/* Background Image Layer */}
      <div className="home-bg-image">
        <img src={bgImage} alt="" />
      </div>

      {/* Dynamic Smooth Floating Purple Ball & Synchronized Grid Spotlight */}
      <div className="home-glow-layer">
        <div className="home-moving-purple-orb" />
        <div className="home-moving-grid-spotlight" />
      </div>

      {/* Motion-Activated Dynamic Particle Stardust Trail */}
      <InteractiveParticleTrail />

      {/* Main Content Area */}
      <div className="home-content">
        {/* Animated Rotating Headline with Typewriter Cursor */}
        <div className="home-heading-wrapper">
          <h1 className="home-heading">
            <span className="home-heading-gradient">{displayedPhrase}</span>
            <span className="typewriter-cursor" />
          </h1>
        </div>

        {/* AI Navigation Bar: Case Study | Design Thinking | Projects | About Me | Contact */}
        <div className="ai-nav-bar">
          {['Case Study', 'Design Thinking', 'Projects', 'About Me', 'Contact'].map((item) => (
            <div
              className="ai-nav-pill"
              key={item}
              onClick={() => handleNavClick(item)}
            >
              <span>{item}</span>
            </div>
          ))}
        </div>

        {/* Explore Projects Header Bar */}
        <div className="projects-header-bar">
          <div
            className="explore-text-btn"
            onClick={() => setCurrentPage('projects')}
          >
            Explore My Projects
          </div>

          <div className="see-more-action-wrap">
            {/* Slide Index Counter */}
            <span className="carousel-counter-badge">
              {carouselIndex + 1}/{projectsList.length}
            </span>

            {/* See More Link (Navigates to full Projects page) */}
            <span
              className="see-more-link-btn"
              onClick={() => setCurrentPage('projects')}
            >
              See more ›
            </span>

            {/* Left & Right Arrow Buttons for Carousel Slider */}
            <div className="arrow-buttons-group">
              <button
                className="nav-arrow-btn"
                onClick={handlePrevSlide}
                title="Previous Projects"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M19 12H5M12 19l-7-7 7-7"/>
                </svg>
              </button>

              <button
                className="nav-arrow-btn"
                onClick={handleNextSlide}
                title="Next Projects"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M5 12h14M12 5l7 7-7 7"/>
                </svg>
              </button>
            </div>
          </div>
        </div>

        {/* Interactive Carousel Cards Slider with Mobile Touch Swipe */}
        <div
          className="home-carousel-viewport"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className="home-carousel-track"
            style={{
              transform: isMobile
                ? `translateX(calc(-${carouselIndex} * (100% + 16px)))`
                : isTablet
                ? `translateX(calc(-${carouselIndex} * ((100% + 16px) / 2)))`
                : `translateX(calc(-${carouselIndex} * ((100% + 18px) / 3)))`
            }}
          >
            {projectsList.map((proj) => (
              <div
                key={`${proj.category}-${proj.id}`}
                className="home-carousel-card-item"
                onClick={() => openHomeProject(proj)}
              >
                <div className="home-card-visual">
                  {proj.thumbnail || proj.image ? (
                    <img src={proj.thumbnail || proj.image} alt={proj.title} />
                  ) : (
                    <div className={`home-card-gradient-mock ${proj.theme || 'theme-dark'}`}>
                      <span className="mock-mini-icon">{proj.icon || '✨'}</span>
                      <span className="mock-mini-tag">{proj.tag || proj.category}</span>
                    </div>
                  )}
                </div>

                <div className="home-card-meta">
                  <span className="home-card-title">{proj.title}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Quick Stats / Bottom Polish (Only on Mobile to fill empty void) */}
        <div className="home-mobile-stats-card">
          <div className="mobile-stat-col" onClick={() => handleNavClick('Projects')}>
            <span className="mobile-stat-num">30+</span>
            <span className="mobile-stat-lbl">Projects</span>
          </div>
          <div className="mobile-stat-divider" />
          <div className="mobile-stat-col" onClick={() => handleNavClick('Case Study')}>
            <span className="mobile-stat-num">2+</span>
            <span className="mobile-stat-lbl">Years Exp</span>
          </div>
          <div className="mobile-stat-divider" />
          <div className="mobile-stat-col" onClick={() => handleNavClick('Contact')}>
            <span className="mobile-stat-num mobile-stat-available">
              <span className="mobile-available-dot" />
            </span>
            <span className="mobile-stat-lbl">Available</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
