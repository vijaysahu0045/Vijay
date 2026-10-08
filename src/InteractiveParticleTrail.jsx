import React, { useEffect, useRef } from 'react'

/**
 * InteractiveParticleTrail - Sky Rocket Firecracker / Fireworks Burst Effect
 * 
 * - Recreates authentic festival sky rocket cracker bursts in the purple/violet theme.
 * - Outward exploding radiant spark streaks with realistic gravity cascade and twinkling embers.
 * - COMPLETELY HIDDEN when mouse is idle / on page load (0% CPU/GPU).
 * - ONLY triggers on actual mouse movement (coordinate delta).
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

    // Sparks & flashes collections
    const sparks = []
    const flashes = []
    let lastMousePos = { x: null, y: null, time: 0 }
    let distanceSinceLastBurst = 0

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

    // Firework Sky Rocket Cracker Burst Generator
    const createSkyRocketBurst = (x, y, intensity = 1) => {
      // 1. Central Ignition Flash
      flashes.push({
        x,
        y,
        radius: 18 * intensity,
        alpha: 0.9,
        decay: 0.08
      })

      // 2. Exploding Radiating Sparks (14 to 26 sparks per rocket burst)
      const sparkCount = Math.floor((14 + Math.random() * 12) * Math.min(intensity, 1.5))
      const baseSpeed = 3.5 + Math.random() * 3.5 + (intensity * 1.5)

      // Color Palette: Electric Violet, Lavender Neon, Radiant White, Starlight Gold-Purple
      const colorPresets = [
        { r: 215, g: 155, b: 255, glowR: 165, glowG: 90,  glowB: 255 }, // Electric Lavender
        { r: 175, g: 105, b: 255, glowR: 130, glowG: 60,  glowB: 255 }, // Royal Violet Fire
        { r: 245, g: 215, b: 255, glowR: 195, glowG: 140, glowB: 255 }, // Bright Starlight Spark
        { r: 255, g: 235, b: 180, glowR: 215, glowG: 140, glowB: 255 }, // Golden Starlight Embers
        { r: 255, g: 255, b: 255, glowR: 175, glowG: 120, glowB: 255 }  // Pure White-Violet Core
      ]

      for (let i = 0; i < sparkCount; i++) {
        // Radial 360 degree outward explosion
        const angle = (i / sparkCount) * Math.PI * 2 + (Math.random() - 0.5) * 0.4
        const speed = baseSpeed * (0.55 + Math.random() * 0.9)
        const color = colorPresets[Math.floor(Math.random() * colorPresets.length)]

        sparks.push({
          x,
          y,
          prevX: x,
          prevY: y,
          history: [{ x, y }],
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          gravity: 0.09 + Math.random() * 0.08, // Gentle downward gravity arch
          friction: 0.94 + Math.random() * 0.02, // Air resistance
          lineWidth: 1.4 + Math.random() * 1.6, // Streak thickness
          alpha: 1.0,
          decay: 0.016 + Math.random() * 0.016, // Fade duration (~0.6s - 1.1s)
          color,
          flickerRate: 0.2 + Math.random() * 0.3,
          flickerOffset: Math.random() * Math.PI * 2
        })
      }

      // Safeguard total active sparks
      if (sparks.length > 250) {
        sparks.splice(0, sparks.length - 250)
      }
    }

    // Animation & rendering loop
    const render = () => {
      ctx.clearRect(0, 0, width, height)

      const hasFlashes = flashes.length > 0
      const hasSparks = sparks.length > 0

      if (!hasFlashes && !hasSparks) {
        isRunning = false
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId)
          animationFrameId = null
        }
        return
      }

      // 1. Render Center Bursts & Flashes
      for (let i = flashes.length - 1; i >= 0; i--) {
        const f = flashes[i]
        f.alpha -= f.decay
        f.radius *= 0.92

        if (f.alpha <= 0.01 || f.radius <= 1) {
          flashes.splice(i, 1)
          continue
        }

        ctx.save()
        const grad = ctx.createRadialGradient(f.x, f.y, 0, f.x, f.y, f.radius * 2)
        grad.addColorStop(0, `rgba(255, 255, 255, ${f.alpha * 0.95})`)
        grad.addColorStop(0.35, `rgba(195, 140, 255, ${f.alpha * 0.65})`)
        grad.addColorStop(1, `rgba(130, 70, 255, 0)`)

        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(f.x, f.y, f.radius * 2, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      // 2. Render Sky Rocket Cracker Sparks & Streaks
      for (let i = sparks.length - 1; i >= 0; i--) {
        const s = sparks[i]

        // Update physics
        s.prevX = s.x
        s.prevY = s.y

        s.vx *= s.friction
        s.vy *= s.friction
        s.vy += s.gravity // Gravity pull down

        s.x += s.vx
        s.y += s.vy

        s.history.unshift({ x: s.x, y: s.y })
        if (s.history.length > 4) {
          s.history.pop()
        }

        s.alpha -= s.decay

        // Remove dead spark
        if (s.alpha <= 0.01) {
          sparks.splice(i, 1)
          continue
        }

        // Cracker spark flickering effect
        const flicker = 0.8 + 0.2 * Math.sin(performance.now() * s.flickerRate + s.flickerOffset)
        const currentAlpha = Math.max(0, Math.min(1, s.alpha * flicker))

        ctx.save()
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'

        // 2a. Soft outer glowing streak aura
        ctx.lineWidth = s.lineWidth * 2.4
        ctx.strokeStyle = `rgba(${s.color.glowR}, ${s.color.glowG}, ${s.color.glowB}, ${currentAlpha * 0.35})`
        ctx.beginPath()
        ctx.moveTo(s.history[s.history.length - 1].x, s.history[s.history.length - 1].y)
        for (let h = s.history.length - 2; h >= 0; h--) {
          ctx.lineTo(s.history[h].x, s.history[h].y)
        }
        ctx.stroke()

        // 2b. Crisp inner bright spark streak
        ctx.lineWidth = s.lineWidth
        ctx.strokeStyle = `rgba(${s.color.r}, ${s.color.g}, ${s.color.b}, ${currentAlpha * 0.95})`
        ctx.beginPath()
        ctx.moveTo(s.prevX, s.prevY)
        ctx.lineTo(s.x, s.y)
        ctx.stroke()

        // 2c. Bright burning tip ember
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.lineWidth * 0.9, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`
        ctx.fill()

        ctx.restore()
      }

      if (flashes.length > 0 || sparks.length > 0) {
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

      if (lastMousePos.x === null) {
        lastMousePos = { x: currentX, y: currentY, time: now }
        return
      }

      const dx = currentX - lastMousePos.x
      const dy = currentY - lastMousePos.y
      const dist = Math.hypot(dx, dy)

      // Strict delta check
      if (dist === 0) return

      distanceSinceLastBurst += dist

      const dt = Math.max(now - lastMousePos.time, 1)
      const speed = dist / dt * 16

      // Trigger rocket bursts every ~26px - 36px along cursor movement path
      const burstThreshold = 28
      if (distanceSinceLastBurst >= burstThreshold) {
        const intensity = Math.min(Math.max(speed / 12, 0.85), 1.6)
        createSkyRocketBurst(currentX, currentY, intensity)
        distanceSinceLastBurst = 0
      }

      lastMousePos = { x: currentX, y: currentY, time: now }

      if (!isRunning && (sparks.length > 0 || flashes.length > 0)) {
        isRunning = true
        animationFrameId = requestAnimationFrame(render)
      }
    }

    const handleMouseLeave = () => {
      lastMousePos = { x: null, y: null, time: 0 }
      distanceSinceLastBurst = 0
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
