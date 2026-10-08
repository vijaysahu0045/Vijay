import React, { useEffect, useRef } from 'react'

/**
 * InteractiveParticleTrail
 * 
 * - Renders large, luminous 4-pointed glowing stars/sparkles in the purple theme.
 * - COMPLETELY HIDDEN when mouse is idle / on page load.
 * - ONLY triggers on actual mouse movement (coordinate delta).
 * - Spawns beautiful 4-point stars along cursor trajectory.
 * - Smoothly fades out and halts requestAnimationFrame (0% CPU/GPU) when stopped.
 */
export default function InteractiveParticleTrail() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    // Accessibility & touch checks
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    const isTouchDevice = window.matchMedia('(hover: none) and (pointer: coarse)').matches

    if (prefersReducedMotion || isTouchDevice) {
      return
    }

    let animationFrameId = null
    let isRunning = false
    let width = window.innerWidth
    let height = window.innerHeight
    let dpr = Math.min(window.devicePixelRatio || 1, 2)

    // Stars collection
    const stars = []
    let lastMousePos = { x: null, y: null, time: 0 }
    let accumulatedDist = 0

    // Resize handler
    const handleResize = () => {
      if (!canvas) return
      dpr = Math.min(window.devicePixelRatio || 1, 2)
      width = window.innerWidth
      height = window.innerHeight

      canvas.width = Math.floor(width * dpr)
      canvas.height = Math.floor(height * dpr)
      canvas.style.width = `${width}px`
      canvas.style.height = `${height}px`

      ctx.scale(dpr, dpr)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    // Helper: Draw 4-pointed curved sparkle star
    const drawFourPointStar = (ctx, x, y, size, rotation, alpha, colorPalette, starType) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)

      // 1. Outer ambient radial glow behind star
      const glowRadius = size * 2.4
      const glowGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, glowRadius)
      glowGrad.addColorStop(0, `rgba(${colorPalette.glowR}, ${colorPalette.glowG}, ${colorPalette.glowB}, ${alpha * 0.55})`)
      glowGrad.addColorStop(0.4, `rgba(${colorPalette.glowR}, ${colorPalette.glowG}, ${colorPalette.glowB}, ${alpha * 0.22})`)
      glowGrad.addColorStop(1, `rgba(${colorPalette.glowR}, ${colorPalette.glowG}, ${colorPalette.glowB}, 0)`)

      ctx.fillStyle = glowGrad
      ctx.beginPath()
      ctx.arc(0, 0, glowRadius, 0, Math.PI * 2)
      ctx.fill()

      // 2. Main 4-pointed Star Geometry
      ctx.beginPath()
      if (starType === 'curved') {
        // Organic curved 4-point sparkle star
        const r = size
        ctx.moveTo(0, -r)
        ctx.quadraticCurveTo(0, 0, r, 0)
        ctx.quadraticCurveTo(0, 0, 0, r)
        ctx.quadraticCurveTo(0, 0, -r, 0)
        ctx.quadraticCurveTo(0, 0, 0, -r)
      } else {
        // Pinched diamond 4-point star polygon
        const rOuter = size
        const rInner = size * 0.30
        for (let i = 0; i < 4; i++) {
          const angleOuter = (i * Math.PI) / 2 - Math.PI / 2
          const angleInner = angleOuter + Math.PI / 4
          const xOuter = Math.cos(angleOuter) * rOuter
          const yOuter = Math.sin(angleOuter) * rOuter
          const xInner = Math.cos(angleInner) * rInner
          const yInner = Math.sin(angleInner) * rInner

          if (i === 0) {
            ctx.moveTo(xOuter, yOuter)
          } else {
            ctx.lineTo(xOuter, yOuter)
          }
          ctx.lineTo(xInner, yInner)
        }
      }
      ctx.closePath()

      // Gradient star fill in purple theme
      const starGrad = ctx.createLinearGradient(-size, -size, size, size)
      starGrad.addColorStop(0, `rgba(${colorPalette.topR}, ${colorPalette.topG}, ${colorPalette.topB}, ${alpha * 0.95})`)
      starGrad.addColorStop(0.5, `rgba(${colorPalette.midR}, ${colorPalette.midG}, ${colorPalette.midB}, ${alpha * 0.85})`)
      starGrad.addColorStop(1, `rgba(${colorPalette.botR}, ${colorPalette.botG}, ${colorPalette.botB}, ${alpha * 0.70})`)

      ctx.fillStyle = starGrad
      ctx.fill()

      // 3. Crisp luminous center core highlight
      const coreSize = size * 0.38
      ctx.beginPath()
      ctx.moveTo(0, -coreSize)
      ctx.quadraticCurveTo(0, 0, coreSize, 0)
      ctx.quadraticCurveTo(0, 0, 0, coreSize)
      ctx.quadraticCurveTo(0, 0, -coreSize, 0)
      ctx.quadraticCurveTo(0, 0, 0, -coreSize)
      ctx.closePath()
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.85})`
      ctx.fill()

      ctx.restore()
    }

    // Spawn stars along movement path
    const spawnStars = (x1, y1, x2, y2, speed) => {
      const dist = Math.hypot(x2 - x1, y2 - y1)
      if (dist < 1) return

      accumulatedDist += dist

      // Spawn a star roughly every 22px of cursor travel
      const stepDist = 24
      const count = Math.max(Math.floor(dist / stepDist), 1)

      for (let i = 0; i < count; i++) {
        const t = (i + Math.random() * 0.5) / count
        const interpX = x1 + (x2 - x1) * t
        const interpY = y1 + (y2 - y1) * t

        // Random jitter perpendicular to path
        const moveAngle = Math.atan2(y2 - y1, x2 - x1)
        const perpAngle = moveAngle + (Math.PI / 2) * (Math.random() > 0.5 ? 1 : -1)
        const spread = (Math.random() * 16) + (speed * 0.15)

        const spawnX = interpX + Math.cos(perpAngle) * spread
        const spawnY = interpY + Math.sin(perpAngle) * spread

        // Large sizes matching reference: 16px to 36px radius (32px to 72px width!)
        const isBigHeroStar = Math.random() > 0.55
        const baseSize = isBigHeroStar
          ? 22 + Math.random() * 14   // 22px - 36px radius (big hero stars)
          : 14 + Math.random() * 9    // 14px - 23px radius (medium stars)

        // Palette presets (Rich Purple / Lavender / Royal Violet Theme)
        const paletteChoice = Math.random()
        let palette
        if (paletteChoice < 0.45) {
          // Luminous Lavender / Electric Purple
          palette = {
            topR: 235, topG: 220, topB: 255,
            midR: 175, midG: 135, midB: 255,
            botR: 125, botG: 80,  botB: 245,
            glowR: 165, glowG: 120, glowB: 255
          }
        } else if (paletteChoice < 0.8) {
          // Deep Royal Violet & Golden Lavender Amber Accent (subtle touch of warm star fire blended with purple)
          palette = {
            topR: 245, topG: 215, topB: 255,
            midR: 155, midG: 105, midB: 255,
            botR: 95,  botG: 55,  botB: 220,
            glowR: 145, glowG: 90,  glowB: 255
          }
        } else {
          // Crisp White-Violet Starlight
          palette = {
            topR: 255, topG: 245, topB: 255,
            midR: 200, midG: 170, midB: 255,
            botR: 140, botG: 95,  botB: 255,
            glowR: 185, glowG: 140, glowB: 255
          }
        }

        // Slight drift velocity
        const driftAngle = moveAngle + (Math.random() - 0.5) * 1.2
        const driftSpeed = Math.min(dist * 0.03, 1.4)

        stars.push({
          x: spawnX,
          y: spawnY,
          vx: Math.cos(driftAngle) * driftSpeed * 0.25 + (Math.random() - 0.5) * 0.4,
          vy: Math.sin(driftAngle) * driftSpeed * 0.25 + (Math.random() - 0.5) * 0.4,
          size: baseSize,
          maxSize: baseSize,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.025,
          alpha: 0.88,
          decay: 0.014 + Math.random() * 0.012, // Smooth ~0.7s - 1.2s graceful lifetime
          palette,
          starType: Math.random() > 0.45 ? 'curved' : 'diamond'
        })
      }

      // Safeguard max active stars
      if (stars.length > 70) {
        stars.splice(0, stars.length - 70)
      }
    }

    // Animation & rendering loop
    const render = () => {
      ctx.clearRect(0, 0, width, height)

      if (stars.length === 0) {
        isRunning = false
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId)
          animationFrameId = null
        }
        return
      }

      for (let i = stars.length - 1; i >= 0; i--) {
        const s = stars[i]

        // Update physics
        s.x += s.vx
        s.y += s.vy
        s.vx *= 0.96
        s.vy *= 0.96
        s.rotation += s.rotSpeed
        s.alpha -= s.decay
        s.size *= 0.992 // Subtle graceful shrink as it dissolves

        // Remove dead star
        if (s.alpha <= 0.01 || s.size <= 2) {
          stars.splice(i, 1)
          continue
        }

        // Draw star
        drawFourPointStar(ctx, s.x, s.y, s.size, s.rotation, s.alpha, s.palette, s.starType)
      }

      if (stars.length > 0) {
        animationFrameId = requestAnimationFrame(render)
      } else {
        ctx.clearRect(0, 0, width, height)
        isRunning = false
      }
    }

    // Mouse movement listener (ONLY triggers on actual coordinate delta)
    const handleMouseMove = (e) => {
      const now = performance.now()
      const currentX = e.clientX
      const currentY = e.clientY

      if (lastMousePos.x === null) {
        lastMousePos = { x: currentX, y: currentY, time: now }
        return
      }

      const dx = currentX - lastMousePos.x
      const dy = currentY - lastMousePos.y
      const dist = Math.hypot(dx, dy)

      // Strict delta check
      if (dist === 0) return

      const dt = Math.max(now - lastMousePos.time, 1)
      const speed = dist / dt * 16

      spawnStars(lastMousePos.x, lastMousePos.y, currentX, currentY, speed)

      lastMousePos = { x: currentX, y: currentY, time: now }

      if (!isRunning && stars.length > 0) {
        isRunning = true
        animationFrameId = requestAnimationFrame(render)
      }
    }

    const handleMouseLeave = () => {
      lastMousePos = { x: null, y: null, time: 0 }
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true })

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      if (animationFrameId) {
        cancelAnimationFrame(animationFrameId)
      }
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="interactive-particle-trail-canvas"
      aria-hidden="true"
    />
  )
}
