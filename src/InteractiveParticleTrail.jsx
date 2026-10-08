import React, { useEffect, useRef } from 'react'

/**
 * InteractiveParticleTrail - Chrysanthemum / Willow Sky Rocket Fireworks
 * 
 * - Authentic Japanese Chrysanthemum / Willow Firework bloom matching reference photo.
 * - Dense ultra-fine radiant needle streamers with glowing central core and graceful willow cascade.
 * - Compact & elegant size (not overly large).
 * - COMPLETELY HIDDEN when mouse is idle / on page load (0% CPU/GPU).
 * - ONLY triggers on actual mouse movement.
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

    // Firework collections
    const rockets = []
    const streamers = []
    const coreSparks = []
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

    // Color Palettes (Rich Chrysanthemum Blend: White-Gold Core with Electric Lavender & Deep Violet Streamers)
    const getStreamerColor = (layer) => {
      if (layer === 'core') {
        return {
          r: 255, g: 245, b: 210, // Bright Golden Starlight
          glowR: 240, glowG: 200, glowB: 255
        }
      } else if (layer === 'inner') {
        return {
          r: 235, g: 185, b: 255, // Luminous Lavender
          glowR: 195, glowG: 120, glowB: 255
        }
      } else {
        return {
          r: 175, g: 110, b: 255, // Deep Royal Violet Willow
          glowR: 140, glowG: 70,  glowB: 255
        }
      }
    }

    // Detonate Chrysanthemum / Willow Burst
    const detonateChrysanthemum = (x, y, power = 1) => {
      // 1. Central Core Ignition Flash
      coreSparks.push({
        x,
        y,
        radius: 12 * power,
        alpha: 0.95,
        decay: 0.09
      })

      // 2. Dense Fine-Needle Chrysanthemum Streamers (32 to 46 streamers)
      const count = Math.floor(32 + Math.random() * 14)
      const baseSpeed = (3.2 + Math.random() * 1.6) * Math.min(power, 1.25)

      for (let i = 0; i < count; i++) {
        // Spherical shell distribution with slight natural jitter
        const angle = (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.15
        const speed = baseSpeed * (0.65 + Math.random() * 0.65)
        const isCoreLayer = Math.random() < 0.28
        const isInnerLayer = Math.random() < 0.55
        const layerType = isCoreLayer ? 'core' : (isInnerLayer ? 'inner' : 'outer')

        const color = getStreamerColor(layerType)

        streamers.push({
          x,
          y,
          prevX: x,
          prevY: y,
          history: [{ x, y }],
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          gravity: 0.055 + Math.random() * 0.035, // Gentle drooping willow cascade
          friction: 0.935 + Math.random() * 0.015, // Air resistance forming spherical dome
          lineWidth: isCoreLayer ? 1.4 : 1.0, // Fine crisp needle-thin streamers
          alpha: 1.0,
          decay: isCoreLayer ? 0.024 : 0.014 + Math.random() * 0.012, // Long willow linger
          color,
          twinkle: 0.75 + Math.random() * 0.25,
          twinkleFreq: 0.25 + Math.random() * 0.25
        })
      }

      // Safeguard max active streamers
      if (streamers.length > 220) {
        streamers.splice(0, streamers.length - 220)
      }
    }

    // Launch Ascending Rocket
    const launchRocket = (startX, startY, targetX, targetY) => {
      const dx = targetX - startX
      const dy = targetY - startY
      const dist = Math.hypot(dx, dy)
      const steps = Math.max(Math.floor(dist / 16), 1)

      rockets.push({
        x: startX,
        y: startY,
        targetX,
        targetY,
        vx: dx / steps,
        vy: dy / steps,
        life: steps,
        color: { r: 255, g: 245, b: 220, glowR: 210, glowG: 160, glowB: 255 }
      })
    }

    // Animation & rendering loop
    const render = () => {
      ctx.clearRect(0, 0, width, height)

      const hasRockets = rockets.length > 0
      const hasCores = coreSparks.length > 0
      const hasStreamers = streamers.length > 0

      if (!hasRockets && !hasCores && !hasStreamers) {
        isRunning = false
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId)
          animationFrameId = null
        }
        return
      }

      // 1. Update & Render Ascending Rocket Tracers
      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i]
        const oldX = r.x
        const oldY = r.y
        r.x += r.vx
        r.y += r.vy
        r.life--

        // Glowing rocket ascent streak
        ctx.save()
        ctx.strokeStyle = `rgba(${r.color.r}, ${r.color.g}, ${r.color.b}, 0.85)`
        ctx.lineWidth = 1.8
        ctx.lineCap = 'round'
        ctx.beginPath()
        ctx.moveTo(oldX, oldY)
        ctx.lineTo(r.x, r.y)
        ctx.stroke()
        ctx.restore()

        if (r.life <= 0) {
          detonateChrysanthemum(r.targetX, r.targetY, 1.0)
          rockets.splice(i, 1)
        }
      }

      // 2. Render Core Center Flashes
      for (let i = coreSparks.length - 1; i >= 0; i--) {
        const c = coreSparks[i]
        c.alpha -= c.decay
        c.radius *= 0.90

        if (c.alpha <= 0.01 || c.radius <= 0.5) {
          coreSparks.splice(i, 1)
          continue
        }

        ctx.save()
        const grad = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.radius * 2)
        grad.addColorStop(0, `rgba(255, 255, 255, ${c.alpha * 0.95})`)
        grad.addColorStop(0.4, `rgba(225, 180, 255, ${c.alpha * 0.65})`)
        grad.addColorStop(1, `rgba(140, 80, 255, 0)`)

        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(c.x, c.y, c.radius * 2, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      // 3. Render Chrysanthemum / Willow Streamer Needles
      for (let i = streamers.length - 1; i >= 0; i--) {
        const s = streamers[i]

        s.prevX = s.x
        s.prevY = s.y

        s.vx *= s.friction
        s.vy *= s.friction
        s.vy += s.gravity

        s.x += s.vx
        s.y += s.vy

        s.history.unshift({ x: s.x, y: s.y })
        if (s.history.length > 5) {
          s.history.pop()
        }

        s.alpha -= s.decay

        if (s.alpha <= 0.01) {
          streamers.splice(i, 1)
          continue
        }

        const currentAlpha = Math.max(0, Math.min(1, s.alpha * s.twinkle))

        ctx.save()
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'

        // 3a. Ambient soft glow aura
        ctx.lineWidth = s.lineWidth * 2.2
        ctx.strokeStyle = `rgba(${s.color.glowR}, ${s.color.glowG}, ${s.color.glowB}, ${currentAlpha * 0.30})`
        ctx.beginPath()
        ctx.moveTo(s.history[s.history.length - 1].x, s.history[s.history.length - 1].y)
        for (let h = s.history.length - 2; h >= 0; h--) {
          ctx.lineTo(s.history[h].x, s.history[h].y)
        }
        ctx.stroke()

        // 3b. Crisp thin streamer line
        ctx.lineWidth = s.lineWidth
        ctx.strokeStyle = `rgba(${s.color.r}, ${s.color.g}, ${s.color.b}, ${currentAlpha * 0.90})`
        ctx.beginPath()
        ctx.moveTo(s.prevX, s.prevY)
        ctx.lineTo(s.x, s.y)
        ctx.stroke()

        // 3c. Luminous spark head
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.lineWidth * 0.8, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`
        ctx.fill()

        ctx.restore()
      }

      if (rockets.length > 0 || coreSparks.length > 0 || streamers.length > 0) {
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

      if (dist === 0) return

      accumulatedDist += dist

      const dt = Math.max(now - lastMousePos.time, 1)
      const speed = dist / dt * 16

      // Detonate elegant chrysanthemum burst every ~32px along cursor trail
      const stepDistance = 32
      if (accumulatedDist >= stepDistance) {
        const intensity = Math.min(Math.max(speed / 14, 0.9), 1.35)
        
        // Spawn rocket ascent + immediate burst at cursor point
        detonateChrysanthemum(currentX, currentY, intensity)

        // Occasional trailing mini-rocket ascent for true sky rocket feel
        if (dist > 18 && Math.random() > 0.4) {
          const launchY = currentY + (30 + Math.random() * 25)
          const launchX = currentX + (Math.random() - 0.5) * 15
          launchRocket(launchX, launchY, currentX, currentY)
        }

        accumulatedDist = 0
      }

      lastMousePos = { x: currentX, y: currentY, time: now }

      if (!isRunning && (streamers.length > 0 || rockets.length > 0 || coreSparks.length > 0)) {
        isRunning = true
        animationFrameId = requestAnimationFrame(render)
      }
    }

    const handleMouseLeave = () => {
      lastMousePos = { x: null, y: null, time: 0 }
      accumulatedDist = 0
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
