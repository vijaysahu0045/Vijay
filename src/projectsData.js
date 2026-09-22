import cardImg1 from './assets/project-card-1.png'
import fymbleGymPassBanner from './assets/fymble-gym-pass-banner.jpg'
import nutritionAppThumbnail from './assets/nutrition-app-thumbnail.jpg'
import gymMateThumbnail from './assets/gym-mate-thumbnail.jpg'
import aiDietCoachThumbnail from './assets/ai-diet-coach-thumbnail.png'
import foodScannerThumbnail from './assets/food-scanner-thumbnail.jpg'
import nutritionConsultationLanding from './assets/nutrition-consultation-landing.png'
import nutritionWebsiteThumbnail from './assets/nutrition-website-thumbnail.png'
import kyraAiWebsiteLanding from './assets/kyra-ai-website-landing.png'
import kyraAiWebsiteThumbnail from './assets/kyra-ai-website-thumbnail.png'
import gymMateWebsiteLanding from './assets/gym-mate-website-landing.png'
import gymMateWebsiteThumbnail from './assets/gym-mate-website-thumbnail.png'
import weightLossDietWebsiteLanding from './assets/weight-loss-diet-website-landing.png'
import weightLossDietWebsiteThumbnail from './assets/weight-loss-diet-website-thumbnail.png'
import blogPageWebsiteLanding from './assets/blog-page-website-landing.png'
import blogPageWebsiteThumbnail from './assets/blog-page-website-thumbnail.png'
import fymbleHomeWebsiteLanding from './assets/fymble-home-website-landing.png'
import fymbleHomeWebsiteThumbnail from './assets/fymble-home-website-thumbnail.png'

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
      { id: 8, title: 'Food Scanner App', image: foodScannerThumbnail, tag: 'AI COMPUTER VISION', theme: 'theme-sunset', icon: '📸', description: 'Instant camera food scanning using AI vision to calculate calories, macronutrients, and nutritional breakdown in seconds.' },
      { id: 9, title: 'AI Nutrition App', image: nutritionAppThumbnail, tag: 'SMART HEALTH AI', theme: 'theme-blue', icon: '🥑', description: 'AI-driven nutrition engine with automated grocery lists, bio-adaptive dietary recommendations, and calorie forecasting.' },
    ]
  },
  {
    id: 'web',
    label: 'Web Design',
    iconName: 'web',
    projects: [
      { 
        id: 38, 
        title: 'Fymble — Official Website Home Page', 
        image: fymbleHomeWebsiteLanding, 
        thumbnail: fymbleHomeWebsiteThumbnail, 
        tag: 'FLAGSHIP HOME WEBSITE', 
        liveUrl: 'https://fymble.app',
        theme: 'theme-purple', 
        icon: '⚡', 
        description: 'Official flagship marketing website for Fymble ecosystem featuring AI health coach demo, interactive gym pass booking, app store showcases, and pricing.' 
      },
      { 
        id: 25, 
        title: 'Kyra AI Health Coach', 
        image: kyraAiWebsiteLanding, 
        thumbnail: kyraAiWebsiteThumbnail, 
        tag: 'AI HEALTH COACH WEB', 
        liveUrl: 'https://fymble.app',
        theme: 'theme-blue', 
        icon: '🤖', 
        description: 'Voice-powered AI Health Coach landing page for Kyra AI featuring conversational health analysis, intelligent gym discovery, and instant food scanning.' 
      },
      { 
        id: 26, 
        title: 'Gym Mate', 
        image: gymMateWebsiteLanding, 
        thumbnail: gymMateWebsiteThumbnail, 
        tag: 'FITNESS COMMUNITY WEB', 
        liveUrl: 'https://fymble.app',
        theme: 'theme-purple', 
        icon: '🤝', 
        description: 'Location-based social workout partner matching landing page for Gym Mate connecting gym-goers, workout enthusiasts, and spotters nearby.' 
      },
      { 
        id: 27, 
        title: 'Weight Loss & Diet Consultation', 
        image: weightLossDietWebsiteLanding, 
        thumbnail: weightLossDietWebsiteThumbnail, 
        tag: 'WEIGHT LOSS & DIET WEB', 
        liveUrl: 'https://fymble.app',
        theme: 'theme-sunset', 
        icon: '🥑', 
        description: 'High-converting weight loss and personalized 1:1 diet consultation landing page featuring sustainable meal plans, pricing tiers, and real client success stories.' 
      },
      { 
        id: 37, 
        title: 'Blog Page Design', 
        image: blogPageWebsiteLanding, 
        thumbnail: blogPageWebsiteThumbnail, 
        tag: 'EDITORIAL & BLOG WEB', 
        liveUrl: 'https://fymble.app',
        theme: 'theme-blue', 
        icon: '📝', 
        description: 'Editorial Fitness & Wellness blog portal for Fymble featuring featured articles, topic exploration tabs, instant search, and clean reading layouts.' 
      },
      { 
        id: 28, 
        title: '1:1 Nutrition & Diet Consultation Website', 
        image: nutritionConsultationLanding, 
        thumbnail: nutritionWebsiteThumbnail, 
        tag: '1:1 DIET CONSULTATION', 
        liveUrl: 'https://fymble.app',
        theme: 'theme-sunset', 
        icon: '🥗', 
        description: 'Official live website and consultation landing page for Fymble detailing 1:1 expert nutrition consultations, personalized diet plans, and transformation proof.' 
      }
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

// Home Slider Filtered Categories: UX/UI Design, AI UX, and Web Design
export const HOME_ALLOWED_CATEGORY_IDS = ['ux-ui', 'ai-ux', 'web']

export const ALL_FLATTENED_PROJECTS = CATEGORIES
  .filter((cat) => HOME_ALLOWED_CATEGORY_IDS.includes(cat.id))
  .flatMap((cat) =>
    cat.projects.map((proj) => ({
      ...proj,
      category: cat.label,
      categoryId: cat.id,
      author: 'by Vijay'
    }))
  )

// Randomize array helper for home slider
export function getShuffledProjects() {
  const arr = [...ALL_FLATTENED_PROJECTS]
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]]
  }
  return arr
}
