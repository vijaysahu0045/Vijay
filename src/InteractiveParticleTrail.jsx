import React, { useEffect, useRef } from 'react'

/**
 * InteractiveParticleTrail - Magical Stardust Comet Swirl & Fairy Dust Trail
 * 
 * - Recreates the exact magical stardust swirl & fairy dust comet trail from reference image.
 * - Glowing flare head at cursor tip.
 * - Dense, glittering stream of 4-point sparkle stars, glowing embers, and micro-stardust.
 * - Golden-Lavender Starlight palette tailored to our dark luxury theme.
 * - 100% invisible when idle / on page load (0% CPU/GPU).
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

    // Particles collection & Flare state
    const particles = []
    let cursor = { x: -9999, y: -9999, active: false }
    let lastMousePos = { x: null, y: null, time: 0 }
    let flareAlpha = 0
    let flareTargetAlpha = 0

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

    // Helper: Draw 4-pointed sharp diamond sparkle star
    const drawSparkleStar = (ctx, x, y, size, rotation, alpha, r, g, b) => {
      ctx.save()
      ctx.translate(x, y)
      ctx.rotate(rotation)

      // Soft outer glow halo
      const glowR = size * 2.2
      const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, glowR)
      grad.addColorStop(0, `rgba(${r}, ${g}, ${b}, ${alpha * 0.45})`)
      grad.addColorStop(1, `rgba(${r}, ${g}, ${b}, 0)`)
      ctx.fillStyle = grad
      ctx.beginPath()
      ctx.arc(0, 0, glowR, 0, Math.PI * 2)
      ctx.fill()

      // 4-Point Sharp Diamond Star
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

      // Bright solid starlight body
      ctx.fillStyle = `rgba(${r}, ${g}, ${b}, ${alpha * 0.95})`
      ctx.fill()

      // Pure white diamond core
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

    // Helper: Draw Lens Flare Star at Cursor Tip
    const drawCursorFlare = (ctx, x, y, alpha) => {
      if (alpha <= 0.01) return
      ctx.save()
      ctx.translate(x, y)

      // Radial central glow
      const glowGrad = ctx.createRadialGradient(0, 0, 0, 0, 0, 24)
      glowGrad.addColorStop(0, `rgba(255, 255, 255, ${alpha * 0.95})`)
      glowGrad.addColorStop(0.25, `rgba(255, 235, 170, ${alpha * 0.70})`)
      glowGrad.addColorStop(0.65, `rgba(205, 150, 255, ${alpha * 0.30})`)
      glowGrad.addColorStop(1, 'rgba(150, 90, 255, 0)')
      ctx.fillStyle = glowGrad
      ctx.beginPath()
      ctx.arc(0, 0, 24, 0, Math.PI * 2)
      ctx.fill()

      // Cross 4-ray starlight spikes
      ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.90})`
      
      // Horizontal ray
      ctx.beginPath()
      ctx.moveTo(-18, 0)
      ctx.quadraticCurveTo(0, -1.2, 18, 0)
      ctx.quadraticCurveTo(0, 1.2, -18, 0)
      ctx.fill()

      // Vertical ray
      ctx.beginPath()
      ctx.moveTo(0, -18)
      ctx.quadraticCurveTo(-1.2, 0, 0, 18)
      ctx.quadraticCurveTo(1.2, 0, 0, -18)
      ctx.fill()

      ctx.restore()
    }

    // Spawn dense stardust stream along movement line
    const spawnStardustStream = (x1, y1, x2, y2, speed) => {
      const dist = Math.hypot(x2 - x1, y2 - y1)
      if (dist < 1) return

      // Number of particles proportional to distance & speed for seamless dense ribbon
      const count = Math.min(Math.max(Math.floor(dist * 0.75), 4), 16)
      const moveAngle = Math.atan2(y2 - y1, x2 - x1)

      for (let i = 0; i < count; i++) {
        const t = (i + Math.random() * 0.8) / count
        const interpX = x1 + (x2 - x1) * t
        const interpY = y1 + (y2 - y1) * t

        // Slight organic spread perpendicular to movement trajectory
        const perpAngle = moveAngle + (Math.PI / 2) * (Math.random() > 0.5 ? 1 : -1)
        const spreadDist = (Math.random() - 0.5) * (8 + Math.min(speed * 0.3, 12))

        const px = interpX + Math.cos(perpAngle) * spreadDist
        const py = interpY + Math.sin(perpAngle) * spreadDist

        // Particle type: 40% Diamond Stars, 45% Stardust Embers, 15% Fine Sparkles
        const typeRand = Math.random()
        let pType = 'star'
        let baseSize = 2.4 + Math.random() * 2.2 // 2.4px to 4.6px radius stars
        if (typeRand < 0.45) {
          pType = 'ember'
          baseSize = 1.2 + Math.random() * 1.6 // 1.2px to 2.8px embers
        } else if (typeRand < 0.60) {
          pType = 'micro'
          baseSize = 0.6 + Math.random() * 0.8 // 0.6px to 1.4px micro-dust
        }

        // Color Palette: Golden Starlight + Luminous Lavender-Purple + Diamond White
        const colRand = Math.random()
        let col = { r: 255, g: 235, b: 160 } // Warm Golden Starlight (like photo)
        if (colRand < 0.40) {
          col = { r: 255, g: 248, b: 215 } // Bright Champagne Gold
        } else if (colRand < 0.75) {
          col = { r: 230, g: 190, b: 255 } // Luminous Lavender Violet (theme accent)
        } else {
          col = { r: 255, g: 255, b: 255 } // Pure Diamond White
        }

        // Gentle drift inertia
        const driftSpeed = 0.2 + Math.random() * 0.6
        const driftAngle = moveAngle + (Math.random() - 0.5) * 1.5

        particles.push({
          x: px,
          y: py,
          vx: Math.cos(driftAngle) * driftSpeed * 0.4,
          vy: Math.sin(driftAngle) * driftSpeed * 0.4 + 0.1, // slight gentle gravity
          size: baseSize,
          maxSize: baseSize,
          rotation: Math.random() * Math.PI * 2,
          rotSpeed: (Math.random() - 0.5) * 0.04,
          alpha: 0.85 + Math.random() * 0.15,
          decay: 0.016 + Math.random() * 0.016, // Smooth ~0.5s - 0.9s lifetime
          type: pType,
          color: col,
          twinklePhase: Math.random() * Math.PI * 2,
          twinkleFreq: 0.2 + Math.random() * 0.3
        })
      }

      // Safeguard total active particles
      if (particles.length > 250) {
        particles.splice(0, particles.length - 250)
      }
    }

    // Animation & rendering loop
    const render = () => {
      ctx.clearRect(0, 0, width, height)

      // Smooth flare alpha transition
      flareAlpha += (flareTargetAlpha - flareAlpha) * 0.18

      // Draw Cursor Tip Star Flare
      if (cursor.active && flareAlpha > 0.01) {
        drawCursorFlare(ctx, cursor.x, cursor.y, flareAlpha)
      }

      if (particles.length === 0 && flareAlpha <= 0.01) {
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
        p.vx *= 0.96
        p.vy *= 0.96
        p.rotation += p.rotSpeed
        p.alpha -= p.decay
        p.size *= 0.988

        // Remove dead particle
        if (p.alpha <= 0.01 || p.size <= 0.3) {
          particles.splice(i, 1)
          continue
        }

        // Twinkle factor
        const twinkle = 0.8 + 0.2 * Math.sin(now * p.twinkleFreq + p.twinklePhase)
        const curAlpha = Math.max(0, Math.min(1, p.alpha * twinkle))

        if (p.type === 'star') {
          // Draw 4-point diamond sparkle star
          drawSparkleStar(ctx, p.x, p.y, p.size, p.rotation, curAlpha, p.color.r, p.color.g, p.color.b)
        } else {
          // Draw round glowing dust ember
          ctx.save()
          const emberGlow = p.size * (p.type === 'ember' ? 2.2 : 1.6)
          const grad = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, emberGlow)
          grad.addColorStop(0, `rgba(255, 255, 255, ${curAlpha * 0.95})`)
          grad.addColorStop(0.35, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${curAlpha * 0.75})`)
          grad.addColorStop(1, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, 0)`)
          ctx.fillStyle = grad
          ctx.beginPath()
          ctx.arc(p.x, p.y, emberGlow, 0, Math.PI * 2)
          ctx.fill()
          ctx.restore()
        }
      }

      if (particles.length > 0 || flareAlpha > 0.01) {
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
      flareTargetAlpha = 0.95

      if (lastMousePos.x === null) {
        lastMousePos = { x: currentX, y: currentY, time: now }
        return
      }

      const dx = currentX - lastMousePos.x
      const dy = currentY - lastMousePos.y
      const dist = Math.hypot(dx, dy)

      if (dist === 0) return

      const dt = Math.max(now - lastMousePos.time, 1)
      const speed = (dist / dt) * 16

      // Spawn dense stardust stream
      spawnStardustStream(lastMousePos.x, lastMousePos.y, currentX, currentY, speed)

      lastMousePos = { x: currentX, y: currentY, time: now }

      if (!isRunning) {
        isRunning = true
        animationFrameId = requestAnimationFrame(render)
      }
    }

    const handleMouseLeave = () => {
      cursor.active = false
      flareTargetAlpha = 0
      lastMousePos = { x: null, y: null, time: 0 }
    }

    // When mouse stops moving: dim the cursor flare
    let idleTimer = null
    const handleIdleCheck = () => {
      if (idleTimer) clearTimeout(idleTimer)
      idleTimer = setTimeout(() => {
        flareTargetAlpha = 0
      }, 70)
    }

    const onPointerMove = (e) => {
      handleMouseMove(e)
      handleIdleCheck()
    }

    // Click trigger: extra sparkle burst
    const onPointerDown = (e) => {
      spawnStardustStream(e.clientX - 6, e.clientY - 6, e.clientX + 6, e.clientY + 6, 20)
      flareAlpha = 1.0
      flareTargetAlpha = 0.95
      if (!isRunning) {
        isRunning = true
        animationFrameId = requestAnimationFrame(render)
      }
    }

    window.addEventListener('mousemove', onPointerMove, { passive: true })
    window.addEventListener('pointerdown', onPointerDown, { passive: true })
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true })

    return () => {
      if (idleTimer) clearTimeout(idleTimer)
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', onPointerMove)
      window.removeEventListener('pointerdown', onPointerDown)
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
