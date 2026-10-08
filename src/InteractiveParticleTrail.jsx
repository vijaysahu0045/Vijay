import React, { useEffect, useRef } from 'react'

/**
 * InteractiveParticleTrail
 * 
 * - COMPLETELY HIDDEN when mouse is idle / on page load.
 * - ONLY triggers on actual mouse movement (coordinate delta).
 * - Spawns subtle stardust/micro-dot particles along cursor trajectory.
 * - Smoothly fades out and halts requestAnimationFrame (0% CPU/GPU) when stopped.
 * - Color palette strictly aligned with existing dark + purple theme.
 */
export default function InteractiveParticleTrail() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d', { alpha: true })
    if (!ctx) return

    // Accessibility & device checks
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

    // Particles collection
    const particles = []
    let lastMousePos = { x: null, y: null, time: 0 }

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

    // Spawning particles along movement path
    const spawnParticles = (x1, y1, x2, y2, speed) => {
      const dist = Math.hypot(x2 - x1, y2 - y1)
      if (dist < 1.5) return // Ignore infinitesimal tremors

      // Interpolate count based on movement distance and speed
      // Keep subtle: 1 to 4 particles for normal movement, up to 7 for fast swipe
      const count = Math.min(Math.max(Math.floor(dist / 14), 1), 7)
      const speedFactor = Math.min(speed / 18, 1.3)

      for (let i = 0; i < count; i++) {
        const t = (i + Math.random() * 0.6) / count
        const interpX = x1 + (x2 - x1) * t
        const interpY = y1 + (y2 - y1) * t

        // Slight spread around cursor path
        const spreadRadius = (Math.random() - 0.5) * (14 + speedFactor * 10)
        const spreadAngle = Math.random() * Math.PI * 2

        // Drift velocity with gentle momentum
        const moveAngle = Math.atan2(y2 - y1, x2 - x1)
        const moveSpeed = Math.min(dist * 0.04, 1.2)

        const vx = Math.cos(moveAngle) * moveSpeed * 0.35 + (Math.random() - 0.5) * 0.6
        const vy = Math.sin(moveAngle) * moveSpeed * 0.35 + (Math.random() - 0.5) * 0.6

        // Micro-dot / fine stardust size: 0.75px to 1.6px radius
        const isStarHighlight = Math.random() > 0.68
        const baseRadius = isStarHighlight 
          ? 1.1 + Math.random() * 0.55 
          : 0.7 + Math.random() * 0.45

        // Initial alpha scaled subtly by speed (never blinding)
        const baseAlpha = (0.28 + Math.random() * 0.28) * (0.8 + speedFactor * 0.4)

        // Palette: Subtle lavender / purple-gray matching portfolio theme
        // 75% subtle purple-lavender, 25% faint crisp stardust
        const colorType = isStarHighlight
          ? { r: 215, g: 205, b: 255 } // Soft crisp stardust
          : { r: 175, g: 155, b: 245 } // Muted purple-lavender

        particles.push({
          x: interpX + Math.cos(spreadAngle) * spreadRadius,
          y: interpY + Math.sin(spreadAngle) * spreadRadius,
          vx,
          vy,
          radius: baseRadius,
          alpha: Math.min(baseAlpha, 0.65),
          decay: 0.016 + Math.random() * 0.018, // Fade lifetime ~0.4s - 0.75s
          color: colorType,
          glow: isStarHighlight
        })
      }

      // Max particle safeguard
      if (particles.length > 120) {
        particles.splice(0, particles.length - 120)
      }
    }

    // Animation & rendering loop
    const render = () => {
      ctx.clearRect(0, 0, width, height)

      if (particles.length === 0) {
        isRunning = false
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId)
          animationFrameId = null
        }
        return
      }

      for (let i = particles.length - 1; i >= 0; i--) {
        const p = particles[i]

        // Update physics
        p.x += p.vx
        p.y += p.vy
        p.vx *= 0.95
        p.vy *= 0.95
        p.alpha -= p.decay
        p.radius *= 0.986

        // Remove dead particle
        if (p.alpha <= 0.01 || p.radius <= 0.25) {
          particles.splice(i, 1)
          continue
        }

        // Draw particle
        ctx.save()
        
        // Optional subtle soft halo for star highlights
        if (p.glow && p.alpha > 0.18) {
          ctx.beginPath()
          ctx.arc(p.x, p.y, p.radius * 2.2, 0, Math.PI * 2)
          ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha * 0.25})`
          ctx.fill()
        }

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha})`
        ctx.fill()
        ctx.restore()
      }

      if (particles.length > 0) {
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

      // Strict delta check: ignore if mouse didn't move
      if (dist === 0) return

      const dt = Math.max(now - lastMousePos.time, 1)
      const speed = dist / dt * 16 // normalized px/frame speed

      spawnParticles(lastMousePos.x, lastMousePos.y, currentX, currentY, speed)

      lastMousePos = { x: currentX, y: currentY, time: now }

      // Start loop if not already running
      if (!isRunning && particles.length > 0) {
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
