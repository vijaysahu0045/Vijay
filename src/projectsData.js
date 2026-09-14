import cardImg1 from './assets/project-card-1.png'
import fymbleGymPassBanner from './assets/fymble-gym-pass-banner.jpg'
import nutritionAppThumbnail from './assets/nutrition-app-thumbnail.jpg'
import gymMateThumbnail from './assets/gym-mate-thumbnail.jpg'
import aiDietCoachThumbnail from './assets/ai-diet-coach-thumbnail.png'

export const CATEGORIES = [
  {
    id: 'ux-ui',
    label: 'UX / UI Design',
    iconName: 'ux-ui',
    projects: [
      { id: 1, title: 'Fymble — Multi-Platform Ecosystem', image: cardImg1, tag: 'FLAGSHIP PRODUCT', description: 'End-to-end UX/UI for 250+ screens supporting 20K+ users and 600+ gym partners with Kyra AI coach.' },
      { id: 2, title: 'Gym Management App', image: null, tag: 'GYM MANAGEMENT B2B', theme: 'theme-purple', icon: '🏋️', description: 'Comprehensive B2B gym management SaaS platform for fitness centers to manage memberships, check-ins, trainers, and revenue analytics.' },
      { id: 3, title: 'Nutrition App', image: nutritionAppThumbnail, tag: 'DIET & NUTRITION', theme: 'theme-sunset', icon: '🥗', description: 'Personalized meal plans, macro tracking, healthy recipe explorer, and daily calorie counter.' },
      { id: 4, title: 'Gym Mate App', image: gymMateThumbnail, tag: 'COMMUNITY & FITNESS', theme: 'theme-blue', icon: '🤝', description: 'Social fitness matching app to find nearby workout buddies, spotters, and local gym partners.' },
    ]
  },
  {
    id: 'ai-ux',
    label: 'AI UX',
    iconName: 'ai-ux',
    projects: [
      { id: 7, title: 'AI Diet Coach', image: aiDietCoachThumbnail, tag: 'CONVERSATIONAL AI', theme: 'theme-purple', icon: '🤖', description: 'Multimodal AI conversational health coach providing real-time habit guidance, daily check-ins, and adaptive fitness advice.' },
      { id: 8, title: 'Food Scanner App', image: null, tag: 'AI COMPUTER VISION', theme: 'theme-sunset', icon: '📸', description: 'Instant camera food scanning using AI vision to calculate calories, macronutrients, and nutritional breakdown in seconds.' },
      { id: 9, title: 'AI Nutrition App', image: nutritionAppThumbnail, tag: 'SMART HEALTH AI', theme: 'theme-blue', icon: '🥑', description: 'AI-driven nutrition engine with automated grocery lists, bio-adaptive dietary recommendations, and calorie forecasting.' },
    ]
  },
  {
    id: 'graphic',
    label: 'Graphic Design',
    iconName: 'graphic',
    projects: [
      { id: 13, title: 'Brand Identity & Guidelines', image: null, tag: 'BRAND IDENTITY', theme: 'theme-purple', icon: '🎨', description: 'Complete visual identity system, logos, typography rules, and color palettes.' },
      { id: 14, title: 'Fymble — Daily Gym Pass Banner', image: fymbleGymPassBanner, tag: 'CAMPAIGN BANNER', theme: 'theme-sunset', icon: '📢', description: 'High-converting promotional marketing poster designed for Fymble Daily Gym Pass ₹99 campaign with iPhone giveaway hook.' },
      { id: 15, title: 'Vector Illustration Pack', image: null, tag: 'ILLUSTRATIONS', theme: 'theme-blue', icon: '🖌️', description: 'Custom illustrated character sets, micro-icons, and storytelling graphics.' },
      { id: 16, title: 'Product Packaging Design', image: null, tag: 'PACKAGING', theme: 'theme-dark', icon: '📦', description: 'Modern eco-friendly retail package designs with 3D print mockups.' },
      { id: 17, title: 'Typography Posters', image: null, tag: 'TYPOGRAPHY', theme: 'theme-light', icon: '🔤', description: 'Experimental editorial typography art and Swiss-style poster compositions.' },
      { id: 18, title: '3D Mockup Showcase', image: null, tag: '3D RENDERS', theme: 'theme-purple', icon: '📐', description: 'Photorealistic device mockups, isometric scenes, and branding 3D renders.' },
    ]
  },
  {
    id: 'motion',
    label: 'UI Motion Design',
    iconName: 'motion',
    projects: [
      { id: 19, title: 'Micro-interactions & Lottie', image: null, tag: 'MICRO-MOTION', theme: 'theme-dark', icon: '⚡', description: 'Smooth button transitions, physics-based gesture interactions, and micro-animations.' },
      { id: 20, title: 'Onboarding Flow Animation', image: null, tag: 'ONBOARDING', theme: 'theme-sunset', icon: '🚀', description: 'Interactive walkthrough storytelling with multi-step delightful card morphs.' },
      { id: 21, title: 'Data Viz Transitions', image: null, tag: 'DATA MOTION', theme: 'theme-blue', icon: '📈', description: 'Fluid chart morphing, count-up numbers, and live telemetry motion widgets.' },
      { id: 22, title: '3D Scroll Experience', image: null, tag: 'PARALLAX 3D', theme: 'theme-purple', icon: '🌌', description: 'Parallax and WebGL scroll-triggered camera motion with depth shaders.' },
      { id: 23, title: 'Swipe Gestures & Physics', image: null, tag: 'TOUCH PHYSICS', theme: 'theme-light', icon: '👆', description: 'Natural gesture navigation, elastic bounce curves, and drag physics for mobile.' },
      { id: 24, title: 'Logo Reveal Animation', image: null, tag: 'LOGO REVEAL', theme: 'theme-dark', icon: '🎬', description: 'Dynamic 60fps logo splash screen reveal for product launch trailer.' },
    ]
  },
  {
    id: 'web',
    label: 'Web Design',
    iconName: 'web',
    projects: [
      { id: 25, title: 'Agency Portfolio Website', image: null, tag: 'WEB PORTFOLIO', theme: 'theme-blue', icon: '🌐', description: 'Clean, dark-mode portfolio landing page with high conversion and fast loading.' },
      { id: 26, title: 'E-commerce Storefront', image: null, tag: 'HEADLESS SHOP', theme: 'theme-purple', icon: '🛒', description: 'Ultra-fast headless shop with modern product filters and cart drawer.' },
      { id: 27, title: 'Startup Landing Page', image: null, tag: 'STARTUP SAAS', theme: 'theme-sunset', icon: '🚀', description: 'Feature showcase, social proof carousel, and interactive pricing calculator.' },
      { id: 28, title: 'Developer Documentation', image: null, tag: 'API DOCS', theme: 'theme-dark', icon: '📖', description: 'Content-focused API docs with interactive code blocks and quick search.' },
      { id: 29, title: 'Restaurant Booking Site', image: null, tag: 'RESTAURANT', theme: 'theme-light', icon: '🍽️', description: 'Visual menu presentation, dish story cards, and real-time table booking.' },
      { id: 30, title: 'Real Estate Portal', image: null, tag: 'REAL ESTATE', theme: 'theme-blue', icon: '🏢', description: 'Interactive map listings, filterable neighborhoods, and virtual home tours.' },
    ]
  },
  {
    id: 'frontend',
    label: 'Frontend Dev',
    iconName: 'frontend',
    projects: [
      { id: 31, title: 'React Component Library', image: null, tag: 'COMPONENT SYSTEM', theme: 'theme-light', icon: '⚛️', description: 'Accessible, themeable design system built with Radix, Tailwind, and custom tokens.' },
      { id: 32, title: 'Web3 Crypto Wallet DApp', image: null, tag: 'WEB3 DAPP', theme: 'theme-purple', icon: '🪙', description: 'Ethers.js web3 interface for token swaps, wallet connect, and yield staking.' },
      { id: 33, title: 'Fullstack Next.js Blog', image: null, tag: 'NEXT.JS APP', theme: 'theme-dark', icon: '📝', description: 'SEO optimized MDX content engine with server actions and edge caching.' },
      { id: 34, title: 'Realtime Chat Application', image: null, tag: 'SOCKET CHAT', theme: 'theme-blue', icon: '💬', description: 'Socket.io powered chat with live channels, typing indicators, and media sharing.' },
      { id: 35, title: 'Interactive Music Synth', image: null, tag: 'AUDIO SYNTH', theme: 'theme-sunset', icon: '🎹', description: 'Web Audio API synthesizer with real-time waveform visualizer canvas.' },
      { id: 36, title: 'Kanban Task Manager', image: null, tag: 'KANBAN BOARD', theme: 'theme-light', icon: '📋', description: 'Smooth drag-and-drop workflow board with local persistence and tags.' },
    ]
  }
]

// All 36 projects flattened with category info for home slider
export const ALL_FLATTENED_PROJECTS = CATEGORIES.flatMap((cat) =>
  cat.projects.map((proj) => ({
    ...proj,
    category: cat.label,
    categoryId: cat.id,
    author: 'by Vijay'
  }))
)

// Randomize array helper with deterministic seeded or randomized order
export function getShuffledProjects() {
  const arr = [...ALL_FLATTENED_PROJECTS]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}
