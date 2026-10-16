import React, { useEffect, useRef } from 'react'

/**
 * InteractiveParticleTrail - Premium Purple Comet Stardust Trail
 * 
 * - High-density flowing particle stream inspired by celestial comet / glowing dust trails.
 * - Soft purple, lavender, subtle violet & starlight white color palette.
 * - Activates ONLY during active mouse movement.
 * - Smooth velocity-driven curvature and density.
 * - Graceful fade-out when mouse stops (0% CPU/GPU when idle).
 * - Layered behind UI with pointer-events: none.
 */
export default function InteractiveParticleTrail() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    // Accessibility & touch device detection
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

    // Particle collection & emitter flare
    const particles = []
    let cursor = { x: -9999, y: -9999, active: false }
    let lastMousePos = { x: null, y: null, time: 0 }
    let emitterAlpha = 0
    let emitterTargetAlpha = 0

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

    // Palette: Soft Purple, Lavender, Subtle Violet, Starlight White & Cool Light Gray
    const THEME_COLORS = [
      { r: 185, g: 155, b: 255 }, // Luminous Lavender
      { r: 155, g: 120, b: 250 }, // Soft Violet
      { r: 215, g: 195, b: 255 }, // Cool Lilac
      { r: 245, g: 240, b: 255 }, // Starlight White
      { r: 135, g: 95,  b: 240 }, // Deep Ambient Violet
      { r: 200, g: 180, b: 245 }  // Subtle Soft Purple
    ]

    // Helper: Draw Small Emitter Core at Cursor Tip
    const drawEmitter = (ctx, x, y, alpha) => {
      if (alpha <= 0.01) return
      ctx.save()

      // Small central soft purple starlight glow (12px radius)
      const grad = ctx.createRadialGradient(x, y, 0, x, y, 14)
      grad.addColorStop(0, `rgba(255, 255, 255, ${alpha * 0.95})`)
      grad.addColorStop(0.25, `rgba(220, 190, 255, ${alpha * 0.70})`)
      grad.addColorStop(0.65, `rgba(165, 125, 255, ${alpha * 0.28})`)
      grad.addColorStop(1, 'rgba(140, 90, 255, 0)')

      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(x, y, 14, 0, Math.PI * 2)
      ctx.fill()

      // Subtle delicate cross-shimmer rays
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.80})`
      ctx.beginPath()
      ctx.moveTo(x - 9, y)
      ctx.quadraticCurveTo(x, y - 0.8, x + 9, y)
      ctx.quadraticCurveTo(x, y + 0.8, x - 9, y)
      ctx.fill()

      ctx.beginPath()
      ctx.moveTo(x, y - 9)
      ctx.quadraticCurveTo(x - 0.8, y, x, y + 9)
      ctx.quadraticCurveTo(x + 0.8, y, x, y - 9)
      ctx.fill()

      ctx.restore()
    }

    // Helper: Draw 4-point micro sparkle star
    const drawMicroSparkle = (ctx, x, y, size, rotation, alpha, r, g, b) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)

      // Outer soft aura
      const glowR = size * 2.2
      const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, glowR)
      grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha * 0.45})`)
      grad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`)
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(0, 0, glowR, 0, Math.PI * 2)
      ctx.fill()

      // 4-Point Diamond Sparkle
      const rOuter = size
      const rInner = size * 0.22
      ctx.beginPath()
      for (let i = 0; i < 4; i++) {
        const angleOuter = (i * Math.PI) / 2
        const angleInner = angleOuter + Math.PI / 4
        const xo = Math.cos(angleOuter) * rOuter
        const yo = Math.sin(angleOuter) * rOuter
        const xi = Math.cos(angleInner) * rInner
        const yi = Math.sin(angleInner) * rInner
        if (i === 0) ctx.moveTo(xo, yo)
        else ctx.lineTo(xo, yo)
        ctx.lineTo(xi, yi)
      }
      ctx.closePath()
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha * 0.90})`
      ctx.fill()

      // Crisp White Diamond Center
      ctx.beginPath()
      const coreR = size * 0.35
      for (let i = 0; i < 4; i++) {
        const angleOuter = (i * Math.PI) / 2
        const angleInner = angleOuter + Math.PI / 4
        const xo = Math.cos(angleOuter) * coreR
        const yo = Math.sin(angleOuter) * coreR
        const xi = Math.cos(angleInner) * (coreR * 0.25)
        const yi = Math.sin(angleInner) * (coreR * 0.25)
        if (i === 0) ctx.moveTo(xo, yo)
        else ctx.lineTo(xo, yo)
        ctx.lineTo(xi, yi)
      }
      ctx.closePath()
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha})`
      ctx.fill()

      ctx.restore()
    }

    // Spawn dense stardust stream along movement line
    const spawnCometDust = (x1, y1, x2, y2, speed) => {
      const dist = Math.hypot(x2 - x1, y2 - y1)
      if (dist < 1) return

      // High density: hundreds of particles during fluid mouse strokes
      const count = Math.min(Math.max(Math.floor(dist * 0.85), 3), 16)
      const moveAngle = Math.atan2(y2 - y1, x2 - x1)
      const speedFactor = Math.min(speed / 16, 1.4)

      for (let i = 0; i < count; i++) {
        const t = (i + Math.random() * 0.75) / count
        const interpX = x1 + (x2 - x1) * t
        const interpY = y1 + (y2 - y1) * t

        // Natural perpendicular dispersion (tighter near cursor tip, wider as trail fans out)
        const perpAngle = moveAngle + (Math.PI / 2) * (Math.random() > 0.5 ? 1 : -1)
        const spreadDist = (Math.random() - 0.5) * (6 + speedFactor * 11)

        const px = interpX + Math.cos(perpAngle) * spreadDist
        const py = interpY + Math.sin(perpAngle) * spreadDist

        // Particle size variation:
        // 65% tiny micro dots, 28% medium shimmer dust, 7% brighter sparkle stars
        const typeRand = Math.random()
        let pType = 'micro'
        let baseRadius = 0.65 + Math.random() * 0.55 // Tiny micro dot

        if (typeRand > 0.93) {
          pType = 'star'
          baseRadius = 2.2 + Math.random() * 1.1 // Luminous sparkle star
        } else if (typeRand > 0.65) {
          pType = 'medium'
          baseRadius = 1.3 + Math.random() * 0.85 // Medium shimmer dot
        }

        // Color from soft purple palette
        const col = THEME_COLORS[Math.floor(Math.random() * THEME_COLORS.length)]

        // Drift momentum in movement direction with subtle spread
        const driftAngle = moveAngle + (Math.random() - 0.5) * 1.4
        const driftSpeed = (0.15 + Math.random() * 0.55) * (0.8 + speedFactor * 0.3)

        particles.push({
          x: px,
          y: py,
          vx: Math.cos(driftAngle) * driftSpeed * 0.35,
          vy: Math.sin(driftAngle) * driftSpeed * 0.35 + 0.05, // subtle ambient gravity
          radius: baseRadius,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.035,
          alpha: 0.80 + Math.random() * 0.20,
          decay: 0.016 + Math.random() * 0.018, // Smooth ~0.45s - 0.85s lifetime
          type: pType,
          color: col,
          twinklePhase: Math.random() * Math.PI * 2,
          twinkleFreq: 0.2 + Math.random() * 0.3
        })
      }

      // Safeguard max active particle pool
      if (particles.length > 380) {
        particles.splice(0, particles.length - 380)
      }
    }

    // Animation & rendering loop
    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Smooth emitter alpha transition
      emitterAlpha += (emitterTargetAlpha - emitterAlpha) * 0.22

      // Draw cursor tip emitter flare
      if (cursor.active && emitterAlpha > 0.01) {
        drawEmitter(ctx, cursor.x, cursor.y, emitterAlpha)
      }

      if (particles.length === 0 && emitterAlpha <= 0.01) {
        isRunning = false
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId)
          animationFrameId = null
        }
        return
      }

      const now = performance.now()

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]

        // Update physics
        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.965
        p.vy *= 0.965
        p.rotation += p.rotSpeed
        p.alpha -= p.decay
        p.radius *= 0.987

        // Remove dead particle
        if (p.alpha <= 0.01 || p.radius <= 0.25) {
          particles.splice(i, 1)
          continue
        }

        // Twinkle factor
        const twinkle = 0.82 + 0.18 * Math.sin(now * p.twinkleFreq + p.twinklePhase)
        const curAlpha = Math.max(0, Math.min(1, p.alpha * twinkle))

        if (p.type === 'star') {
          drawMicroSparkle(ctx, p.x, p.y, p.radius, p.rotation, curAlpha, p.color.r, p.color.g, p.color.b)
        } else {
          // Render soft glowing stardust dot
          ctx.save()
          const glowR = p.radius * (p.type === 'medium' ? 2.2 : 1.6)
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, glowR)
          grad.addColorStop(0, `rgba(255, 255, 255, ${curAlpha * 0.95})`)
          grad.addColorStop(0.35, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${curAlpha * 0.70})`)
          grad.addColorStop(1, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0)`)
          ctx.fillStyle = grad
          ctx.beginPath()
          ctx.arc(p.x, p.y, glowR, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()
        }
      }

      if (particles.length > 0 || emitterAlpha > 0.01) {
        animationFrameId = requestAnimationFrame(render)
      } else {
        ctx.clearRect(0, 0, width, height)
        isRunning = false
      }
    }

    // Mouse movement listener (ONLY activates on actual coordinate delta)
    const handleMouseMove = (e) => {
      const now = performance.now()
      const currentX = e.clientX
      const currentY = e.clientY

      cursor.x = currentX
      cursor.y = currentY
      cursor.active = true
      emitterTargetAlpha = 0.95

      if (lastMousePos.x === null) {
        lastMousePos = { x: currentX, y: currentY, time: now }
        return
      }

      const dx = currentX - lastMousePos.x
      const dy = currentY - lastMousePos.y
      const dist = Math.hypot(dx, dy)

      // Strict delta check: ignore stationary hover
      if (dist === 0) return

      const dt = Math.max(now - lastMousePos.time, 1)
      const speed = (dist / dt) * 16

      // Spawn dense comet dust stream
      spawnCometDust(lastMousePos.x, lastMousePos.y, currentX, currentY, speed)

      lastMousePos = { x: currentX, y: currentY, time: now }

      if (!isRunning) {
        isRunning = true
        animationFrameId = requestAnimationFrame(render)
      }
    }

    const handleMouseLeave = () => {
      cursor.active = false
      emitterTargetAlpha = 0
      lastMousePos = { x: null, y: null, time: 0 }
    }

    // When mouse stops moving: dim the emitter flare immediately
    let idleTimer = null
    const handleIdleCheck = () => {
      if (idleTimer) clearTimeout(idleTimer)
      idleTimer = setTimeout(() => {
        emitterTargetAlpha = 0
      }, 65)
    }

    const onPointerMove = (e) => {
      handleMouseMove(e)
      handleIdleCheck()
    }

    window.addEventListener('mousemove', onPointerMove, { passive: true })
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true })

    return () => {
      if (idleTimer) clearTimeout(idleTimer)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', onPointerMove)
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
