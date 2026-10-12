import cardImg1 from './assets/project-card-1.png'
import gymMgmtThumbnail from './assets/gym-mgmt-thumbnail.png'
import fymbleGymPassBanner from './assets/fymble-gym-pass-banner.jpg'
import graphicFymbleMembership from './assets/graphic-fymble-membership.jpg'
import graphicCoffeeSubscription from './assets/graphic-coffee-subscription.jpg'
import graphicChaiSubscription from './assets/graphic-chai-subscription.jpg'
import graphicDailyPassBoxing from './assets/graphic-daily-pass-boxing.png'
import graphicKyraAiPoster from './assets/graphic-kyra-ai-poster.png'
import graphicNutritionConsultation199 from './assets/graphic-nutrition-consultation-199.png'
import graphicWinIphoneReward from './assets/graphic-win-iphone-reward.png'
import graphicReadyWorkout from './assets/graphic-ready-workout.png'
import graphicEatRightBowl from './assets/graphic-eat-right-bowl.png'
import graphicTrackEveryStep from './assets/graphic-track-every-step.png'
import graphicStayHydrated from './assets/graphic-stay-hydrated.png'
import graphicGymMateCouple from './assets/graphic-gym-mate-couple.jpg'
import graphicGymMatesTogether from './assets/graphic-gym-mates-together.jpg'
import graphicKyraStepsToday from './assets/graphic-kyra-steps-today.jpg'
import graphicPictureAbhiBaakiHai from './assets/graphic-picture-abhi-baaki-hai.jpg'
import graphicModiKyraLive from './assets/graphic-modi-kyra-live.png'
import graphicSimranKyraDialogue from './assets/graphic-simran-kyra-dialogue.png'
import graphicFymbleDelhiHaryanaLive from './assets/graphic-fymble-delhi-haryana-live.jpg'
import graphicKyraHealthPartner from './assets/graphic-kyra-health-partner.png'
import graphicCoffeeSkip66Pass from './assets/graphic-coffee-skip-66-pass.jpg'
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
      { id: 1, title: 'Fymble — Redefining Fitness & Health', image: cardImg1, tag: 'FLAGSHIP PRODUCT', description: 'End-to-end UX/UI for 250+ screens supporting 20K+ users and 600+ gym partners with Kyra AI coach.' },
      { id: 2, title: 'Gym Management App', image: gymMgmtThumbnail, tag: 'GYM MANAGEMENT B2B', theme: 'theme-purple', icon: '🏋️', description: 'Comprehensive B2B gym management SaaS platform for fitness centers to manage memberships, check-ins, trainers, and revenue analytics.' },
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
      {
        id: 101,
        title: 'Fymble — Gym Membership Campaign',
        image: graphicFymbleMembership,
        tag: 'PROMOTIONAL POSTER',
        theme: 'theme-sunset',
        icon: '🏋️',
        description: 'High-energy fitness campaign visual for Fymble gym membership booking with free subscription & 1:1 nutrition consultation perks.'
      },
      {
        id: 102,
        title: 'Fymble — Coffee Metaphor ₹6/day Ad',
        image: graphicCoffeeSubscription,
        tag: 'CREATIVE AD',
        theme: 'theme-dark',
        icon: '☕',
        description: 'Creative metaphor marketing poster comparing Fymble daily subscription cost (₹6/day) with a morning cup of coffee.'
      },
      {
        id: 103,
        title: 'Fymble — Cutting Chai Dumbbell Ad',
        image: graphicChaiSubscription,
        tag: 'SHADOW AD CREATIVE',
        theme: 'theme-sunset',
        icon: '☕',
        description: 'Clever visual ad featuring a hot glass of Indian cutting chai casting a dumbbell shadow with ₹6/day value hook.'
      },
      {
        id: 104,
        title: 'Fymble — Daily Gym Pass Action Poster',
        image: graphicDailyPassBoxing,
        tag: 'CAMPAIGN POSTER',
        theme: 'theme-blue',
        icon: '🥊',
        description: 'Action-packed boxing athlete visual campaign promoting Fymble ₹99/day gym pass with instant app download hooks.'
      },
      {
        id: 105,
        title: 'Kyra AI — Health Coach Launch Poster',
        image: graphicKyraAiPoster,
        tag: 'PRODUCT LAUNCH',
        theme: 'theme-purple',
        icon: '✨',
        description: 'Vibrant product launch poster for Kyra AI personal health coach covering fitness, nutrition, sleep, and wellness.'
      },
      {
        id: 14,
        title: 'Fymble — Daily Gym Pass ₹99 Giveaway',
        image: fymbleGymPassBanner,
        tag: 'OFFER BANNER',
        theme: 'theme-sunset',
        icon: '📢',
        description: 'Promotional marketing poster designed for Fymble Daily Gym Pass ₹99 campaign with iPhone giveaway hook.'
      },
      {
        id: 106,
        title: 'Nutrition Consultation Under ₹199',
        image: graphicNutritionConsultation199,
        tag: 'CONSULTATION AD',
        theme: 'theme-sunset',
        icon: '🥗',
        description: '60 Min Personal Nutrition Session campaign ad poster with expert dietitian consultation call-to-action.'
      },
      {
        id: 107,
        title: 'Win iPhone 17 Pro Max — Rewards Campaign',
        image: graphicWinIphoneReward,
        tag: 'REWARD CAMPAIGN',
        theme: 'theme-sunset',
        icon: '🎁',
        description: 'Limited-time rewards promotional card featuring iPhone 17 Pro Max hook for pass bookings and member referrals.'
      },
      {
        id: 108,
        title: "Ready for Today's Workout?",
        image: graphicReadyWorkout,
        tag: 'WORKOUT MOTIVATION',
        theme: 'theme-sunset',
        icon: '🔥',
        description: 'High-impact dumbbell workout motivation modal banner encouraging users to start their training journey.'
      },
      {
        id: 109,
        title: 'Eat Right, Achieve More — Healthy Bowls',
        image: graphicEatRightBowl,
        tag: 'NUTRITION & DIET',
        theme: 'theme-blue',
        icon: '🥑',
        description: 'Vibrant healthy meal bowl visual promoting personalized diet plans and automated calorie tracking.'
      },
      {
        id: 110,
        title: 'Track Every Step — Activity Monitor',
        image: graphicTrackEveryStep,
        tag: 'ACTIVITY TRACKING',
        theme: 'theme-blue',
        icon: '🏃‍♀️',
        description: 'Dynamic step tracking promotional visual highlighting smart pedometer, calorie monitoring, and daily distance goals.'
      },
      {
        id: 111,
        title: 'Stay Hydrated — Water Intake Tracker',
        image: graphicStayHydrated,
        tag: 'WELLNESS & HYDRATION',
        theme: 'theme-blue',
        icon: '💧',
        description: 'Refreshing water splash visual promoting daily hydration tracking and personalized hydration goals.'
      },
      {
        id: 112,
        title: 'Gym Mate — 92% Match Workout Partner',
        image: graphicGymMateCouple,
        tag: 'COMMUNITY CAMPAIGN',
        theme: 'theme-sunset',
        icon: '🤝',
        description: 'Social gym matching campaign visual: Find your workout partner, train together, and stay consistent.'
      },
      {
        id: 113,
        title: 'Gym Mates — Stronger Together',
        image: graphicGymMatesTogether,
        tag: 'FITNESS MOTIVATION',
        theme: 'theme-sunset',
        icon: '💪',
        description: 'Buddy workout motivation poster: Find nearby gym mates, train together, push each other, and achieve fitness goals faster.'
      },
      {
        id: 114,
        title: 'Steps You Took Today? Ask Kyra AI',
        image: graphicKyraStepsToday,
        tag: 'AI HEALTH CAMPAIGN',
        theme: 'theme-sunset',
        icon: '👟',
        description: 'Interactive step tracking campaign featuring Kyra AI health coach conversational assistance, calorie burn, and distance metrics.'
      },
      {
        id: 115,
        title: 'Picture Abhi Baaki Hai — Kyra AI Launch',
        image: graphicPictureAbhiBaakiHai,
        tag: 'BOLLYWOOD HOOK AD',
        theme: 'theme-sunset',
        icon: '🎬',
        description: 'High-energy Bollywood hook campaign for Kyra AI: Talk, track, and thrive with all-in-one voice chat health coaching.'
      },
      {
        id: 116,
        title: 'Hello Friends, Kyra AI Live Now',
        image: graphicModiKyraLive,
        tag: 'VIRAL POPULAR HOOK',
        theme: 'theme-sunset',
        icon: '👋',
        description: 'Engaging vector caricature hook campaign announcing Kyra AI launch across Google Play & App Store.'
      },
      {
        id: 117,
        title: 'Jaa Simran... Jaa Kyra Se Baat Kar Le',
        image: graphicSimranKyraDialogue,
        tag: 'BOLLYWOOD MEME CREATIVE',
        theme: 'theme-sunset',
        icon: '🎙️',
        description: 'Iconic DDLJ dialogue meme marketing poster promoting Kyra AI voice consultation and wellness coaching.'
      },
      {
        id: 118,
        title: 'Fymble Going Live in Delhi & Haryana',
        image: graphicFymbleDelhiHaryanaLive,
        tag: 'EXPANSION LAUNCH',
        theme: 'theme-sunset',
        icon: '📍',
        description: 'Geographic market expansion campaign poster announcing Fymble partner gym onboarding across Delhi NCR & Haryana.'
      },
      {
        id: 119,
        title: 'Fitness Apps Bahut Hain, Health Partner Ek Hai',
        image: graphicKyraHealthPartner,
        tag: 'BRAND POSITIONING',
        theme: 'theme-blue',
        icon: '📱',
        description: 'Clean phone UI mock-and-copy positioning Kyra AI as a lifelong personal health companion rather than just another fitness app.'
      },
      {
        id: 120,
        title: 'Less Than Your Daily Coffee — ₹66/Day Pass',
        image: graphicCoffeeSkip66Pass,
        tag: 'VALUE PROPOSITION AD',
        theme: 'theme-dark',
        icon: '☕',
        description: 'Punchy coffee cup takeaway ad: Skip a coffee, not your workout — ₹66/day Fymble weekly fitness pass.'
      }
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
