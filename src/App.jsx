import { useState, useEffect } from 'react'
import './App.css'
import bgImage from './assets/bg-image.png'
import Projects from './Projects'
import ProjectDetail from './ProjectDetail'
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

  // Max slide index (show 3 cards per frame)
  const maxSlideIndex = Math.max(0, projectsList.length - 3)

  const handlePrevSlide = (e) => {
    e.stopPropagation()
    setCarouselIndex((prev) => (prev > 0 ? prev - 1 : maxSlideIndex))
  }

  const handleNextSlide = (e) => {
    e.stopPropagation()
    setCarouselIndex((prev) => (prev < maxSlideIndex ? prev + 1 : 0))
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
      <ProjectDetail
        project={selectedProject}
        categoryLabel={selectedProject.category || 'UX / UI Design'}
        onBack={() => setCurrentPage(detailSource || 'projects')}
        onNavigateProject={handleNextProject}
      />
    )
  }

  // Route 2: Projects page
  if (currentPage === 'projects') {
    return (
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
    )
  }

  // Route 3: About Me page
  if (currentPage === 'about') {
    return <AboutMe onBack={() => setCurrentPage('home')} />
  }

  // Route 4: Skills page
  if (currentPage === 'skills') {
    return <Skills onBack={() => setCurrentPage('home')} />
  }

  // Route 5: Resume page
  if (currentPage === 'resume') {
    return <Resume onBack={() => setCurrentPage('home')} />
  }

  // Route 6: Contact page
  if (currentPage === 'contact') {
    return <Contact onBack={() => setCurrentPage('home')} />
  }

  const handleNavClick = (item) => {
    switch (item) {
      case 'Projects':
        setCurrentPage('projects')
        break
      case 'About Me':
        setCurrentPage('about')
        break
      case 'Skills':
        setCurrentPage('skills')
        break
      case 'Resume':
        setCurrentPage('resume')
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

      {/* Main Content Area */}
      <div className="home-content">
        {/* Animated Rotating Headline with Typewriter Cursor */}
        <div className="home-heading-wrapper">
          <h1 className="home-heading">
            <span className="home-heading-gradient">{displayedPhrase}</span>
            <span className="typewriter-cursor" />
          </h1>
        </div>

        {/* AI Navigation Bar */}
        <div className="ai-nav-bar">
          {['Projects', 'About Me', 'Skills', 'Resume', 'Contact'].map((item) => (
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
            {/* See More Link (Navigates to full Projects page) */}
            <span
              className="see-more-link-btn"
              onClick={() => setCurrentPage('projects')}
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

        {/* Interactive Carousel Cards Slider with all 36 randomized projects */}
        <div className="home-carousel-viewport">
          <div
            className="home-carousel-track"
            style={{
              transform: `translateX(calc(-${carouselIndex} * ((100% - 36px) / 3 + 18px)))`
            }}
          >
            {projectsList.map((proj) => (
              <div
                key={`${proj.category}-${proj.id}`}
                className="home-carousel-card-item"
                onClick={() => openHomeProject(proj)}
              >
                <div className="home-card-visual">
                  {proj.image ? (
                    <img src={proj.image} alt={proj.title} />
                  ) : (
                    <div className={`home-card-gradient-mock ${proj.theme || 'theme-dark'}`}>
                      <span className="mock-mini-icon">{proj.icon || '✨'}</span>
                      <span className="mock-mini-tag">{proj.tag || proj.category}</span>
                    </div>
                  )}
                </div>

                <div className="home-card-meta">
                  <span className="home-card-title">{proj.title}</span>
                  <span className="home-card-author">{proj.author || 'by Vijay'}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default App
