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
      // 2 to 5 particles for normal movement, up to 9 for fast swipe
      const count = Math.min(Math.max(Math.floor(dist / 12), 2), 9)
      const speedFactor = Math.min(speed / 16, 1.4)

      for (let i = 0; i < count; i++) {
        const t = (i + Math.random() * 0.6) / count
        const interpX = x1 + (x2 - x1) * t
        const interpY = y1 + (y2 - y1) * t

        // Spread around cursor path
        const spreadRadius = (Math.random() - 0.5) * (24 + speedFactor * 18)
        const spreadAngle = Math.random() * Math.PI * 2

        // Drift velocity with gentle momentum
        const moveAngle = Math.atan2(y2 - y1, x2 - x1)
        const moveSpeed = Math.min(dist * 0.05, 1.8)

        const vx = Math.cos(moveAngle) * moveSpeed * 0.3 + (Math.random() - 0.5) * 0.9
        const vy = Math.sin(moveAngle) * moveSpeed * 0.3 + (Math.random() - 0.5) * 0.9

        // Noticeably larger particle size: 2.2px to 5.2px radius
        const isStarHighlight = Math.random() > 0.60
        const baseRadius = isStarHighlight 
          ? 3.2 + Math.random() * 2.2  // Large luminous star dots (3.2px - 5.4px)
          : 1.8 + Math.random() * 1.6  // Medium elegant particles (1.8px - 3.4px)

        // Alpha scaled smoothly by speed
        const baseAlpha = (0.42 + Math.random() * 0.35) * (0.85 + speedFactor * 0.35)

        // Palette: Vibrant soft purple-lavender & radiant stardust
        const colorType = isStarHighlight
          ? { r: 228, g: 220, b: 255, glowR: 165, glowG: 135, glowB: 255 } // Radiant stardust
          : { r: 178, g: 150, b: 255, glowR: 135, glowG: 100, glowB: 255 } // Rich purple-lavender

        particles.push({
          x: interpX + Math.cos(spreadAngle) * spreadRadius,
          y: interpY + Math.sin(spreadAngle) * spreadRadius,
          vx,
          vy,
          radius: baseRadius,
          maxRadius: baseRadius,
          alpha: Math.min(baseAlpha, 0.85),
          decay: 0.013 + Math.random() * 0.015, // Smooth ~0.6s - 1.1s lifetime
          color: colorType,
          glow: isStarHighlight
        })
      }

      // Max particle safeguard
      if (particles.length > 150) {
        particles.splice(0, particles.length - 150)
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
        p.vx *= 0.96
        p.vy *= 0.96
        p.alpha -= p.decay
        p.radius *= 0.990

        // Remove dead particle
        if (p.alpha <= 0.01 || p.radius <= 0.4) {
          particles.splice(i, 1)
          continue
        }

        // Draw particle with lush soft glow aura
        ctx.save()
        
        // Soft outer ambient halo
        const haloRadius = p.radius * (p.glow ? 3.2 : 2.4)
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, haloRadius)
        gradient.addColorStop(0, `rgba(${p.color.r}, ${p.color.g}, ${p.color.b}, ${p.alpha * 0.9})`)
        gradient.addColorStop(0.35, `rgba(${p.color.glowR || p.color.r}, ${p.color.glowG || p.color.g}, ${p.color.glowB || p.color.b}, ${p.alpha * 0.45})`)
        gradient.addColorStop(1, `rgba(${p.color.glowR || p.color.r}, ${p.color.glowG || p.color.g}, ${p.color.glowB || p.color.b}, 0)`)
        
        ctx.fillStyle = gradient
        ctx.beginPath()
        ctx.arc(p.x, p.y, haloRadius, 0, Math.PI * 2)
        ctx.fill()

        // Crisp inner solid core
        ctx.beginPath()
        ctx.arc(p.x, p.y, p.radius * 0.65, 0, Math.PI * 2)
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
