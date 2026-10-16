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

  // Responsive cards per view (1 on mobile <= 600px, 3 on desktop)
  const [cardsPerView, setCardsPerView] = useState(() => (typeof window !== 'undefined' && window.innerWidth <= 600 ? 1 : 3))

  useEffect(() => {
    const handleResize = () => {
      setCardsPerView(window.innerWidth <= 600 ? 1 : 3)
    }
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [])

  // Max slide index (adapts to mobile and desktop)
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
    if (!e.targetTouches || e.targetTouches.length === 0) return
    setTouchStartX(e.targetTouches[0].clientX)
    setTouchEndX(e.targetTouches[0].clientX)
  }

  const handleTouchMove = (e) => {
    if (!e.targetTouches || e.targetTouches.length === 0) return
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

  // Central Navigation & Browser History handler (Supports mobile hardware & browser back buttons)
  const navigateTo = (page, options = {}) => {
    const { project = null, detailSource: source = null, category = null, replace = false } = options

    if (category) setActiveCategory(category)
    if (source) setDetailSource(source)
    if (project) {
      setSelectedProject(project)
    } else if (page !== 'detail') {
      setSelectedProject(null)
    }

    setCurrentPage(page)

    // Push/Replace Browser History so mobile system back button returns to previous page rather than exiting website
    const hash = page === 'home' ? '' : `#${page}`
    const stateObj = {
      page,
      projectId: project ? project.id : null,
      detailSource: source || detailSource,
      activeCategory: category || activeCategory
    }

    if (replace) {
      window.history.replaceState(stateObj, '', hash || window.location.pathname)
    } else {
      window.history.pushState(stateObj, '', hash || window.location.pathname)
    }
  }

  const goBack = (fallbackPage = 'home') => {
    if (window.history.state && window.history.state.page && window.history.state.page !== 'home') {
      window.history.back()
    } else {
      navigateTo(fallbackPage, { replace: true })
    }
  }

  // Handle browser back / forward buttons (especially mobile hardware back button)
  useEffect(() => {
    const validPages = ['projects', 'case-study', 'design-thinking', 'about', 'skills', 'resume', 'contact', 'detail']
    const hash = window.location.hash.replace('#', '')
    const initialPage = validPages.includes(hash) ? hash : 'home'

    const initialState = {
      page: initialPage,
      projectId: null,
      detailSource: 'projects',
      activeCategory
    }
    window.history.replaceState(initialState, '', initialPage === 'home' ? window.location.pathname : `#${initialPage}`)
    if (initialPage !== 'home' && initialPage !== 'detail') {
      setCurrentPage(initialPage)
    }

    const handlePopState = (e) => {
      const state = e.state
      if (state && state.page) {
        setCurrentPage(state.page)
        if (state.activeCategory) setActiveCategory(state.activeCategory)
        if (state.detailSource) setDetailSource(state.detailSource)
        if (state.page === 'detail' && state.projectId) {
          const found = projectsList.find((p) => p.id === state.projectId)
          if (found) setSelectedProject(found)
        } else if (state.page !== 'detail') {
          setSelectedProject(null)
        }
      } else {
        const currentHash = window.location.hash.replace('#', '')
        if (validPages.includes(currentHash) && currentHash !== 'detail') {
          setCurrentPage(currentHash)
        } else {
          setCurrentPage('home')
          setSelectedProject(null)
        }
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [projectsList])

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
          onBack={() => goBack(detailSource || 'projects')}
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
          onBack={() => goBack('home')}
          onNavigateProject={() => {
            const nextProj = projectsList.find(p => p.id === 2) || projectsList[1]
            navigateTo('detail', { project: nextProj, detailSource: 'case-study' })
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
        <DesignThinking onBack={() => goBack('home')} />
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
          onBack={() => goBack('home')}
          onOpenProject={(proj, catLabel, catId) => {
            const chosenCategory = catId || activeCategory
            if (catId) setActiveCategory(catId)
            const fullProj = { ...proj, category: catLabel, categoryId: chosenCategory }
            navigateTo('detail', {
              project: fullProj,
              detailSource: 'projects',
              category: chosenCategory
            })
          }}
        />
      </>
    )
  }

  // Route 5: About Me page (with integrated Skills)
  if (currentPage === 'about') {
    return (
      <>
        <InteractiveParticleTrail />
        <AboutMe onBack={() => goBack('home')} />
      </>
    )
  }

  // Route 6: Skills page (fallback)
  if (currentPage === 'skills') {
    return (
      <>
        <InteractiveParticleTrail />
        <AboutMe onBack={() => goBack('home')} />
      </>
    )
  }

  // Route 7: Resume page (fallback)
  if (currentPage === 'resume') {
    return (
      <>
        <InteractiveParticleTrail />
        <Resume onBack={() => goBack('home')} />
      </>
    )
  }

  // Route 8: Contact page (with top Resume download banner)
  if (currentPage === 'contact') {
    return (
      <>
        <InteractiveParticleTrail />
        <Contact onBack={() => goBack('home')} />
      </>
    )
  }

  const handleNavClick = (item) => {
    switch (item) {
      case 'Case Study':
        navigateTo('case-study', { category: 'ux-ui' })
        break
      case 'Design Thinking':
        navigateTo('design-thinking')
        break
      case 'Projects':
        navigateTo('projects')
        break
      case 'About Me':
        navigateTo('about')
        break
      case 'Contact':
        navigateTo('contact')
        break
      default:
        break
    }
  }

  const openHomeProject = (proj) => {
    const chosenCategory = proj.categoryId || activeCategory
    if (proj.categoryId) {
      setActiveCategory(proj.categoryId)
    }
    const fullProj = {
      ...proj,
      category: proj.category || 'UX / UI Design',
      categoryId: chosenCategory
    }
    navigateTo('detail', {
      project: fullProj,
      detailSource: 'home',
      category: chosenCategory
    })
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

        {/* AI Navigation Bar: 5 Tabs on Desktop | 3 Tabs on Mobile */}
        <div className="ai-nav-bar">
          {['Case Study', 'Design Thinking', 'Projects', 'About Me', 'Contact'].map((item) => (
            <div
              className={`ai-nav-pill ${item === 'About Me' || item === 'Contact' ? 'desktop-only-nav-pill' : ''}`}
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
            onClick={() => navigateTo('projects')}
          >
            Explore My Projects
          </div>

          <div className="see-more-action-wrap">
            {/* See More Link (Navigates to full Projects page) */}
            <span
              className="see-more-link-btn"
              onClick={() => navigateTo('projects')}
            >
              See more
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
              transform: `translateX(calc(-${carouselIndex} * (${cardsPerView === 1 ? '100% + 16px' : '(100% - 36px) / 3 + 18px'})))`
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
                    <img
                      src={proj.thumbnail || proj.image}
                      alt={proj.title}
                      className={proj.categoryId === 'motion' ? 'home-card-img-motion' : ''}
                    />
                  ) : (
                    <div className={`home-card-gradient-mock ${proj.theme || 'theme-dark'}`}>
                      <span className="mock-mini-icon">{proj.icon || '✨'}</span>
                      <span className="mock-mini-tag">{proj.tag || proj.category}</span>
                    </div>
                  )}
                </div>

                <div className="home-card-meta">
                  <span className="home-card-title" title={proj.title}>{proj.title}</span>
                  <span className="home-card-author">{proj.author || 'by Vijay'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Quick Stats Card (Hidden on Desktop) */}
        <div className="home-mobile-stats-card">
          <div className="mobile-stat-col" onClick={() => navigateTo('projects')}>
            <span className="mobile-stat-num">20+</span>
            <span className="mobile-stat-lbl">Projects</span>
          </div>
          <div className="mobile-stat-divider" />
          <div className="mobile-stat-col" onClick={() => navigateTo('about')}>
            <span className="mobile-stat-num">2+</span>
            <span className="mobile-stat-lbl">Years Exp</span>
          </div>
          <div className="mobile-stat-divider" />
          <div className="mobile-stat-col" onClick={() => navigateTo('case-study')}>
            <span className="mobile-stat-num">1</span>
            <span className="mobile-stat-lbl">Flagship UX</span>
          </div>
        </div>

        {/* Simple About Me text right below stats box (Hidden on Desktop) */}
        <div className="home-about-simple-wrap">
          <span
            className="home-about-simple-text"
            onClick={() => navigateTo('about')}
          >
            About Me
          </span>
        </div>
      </div>
    </div>
  )
}

export default App
