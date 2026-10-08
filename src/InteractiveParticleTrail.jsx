import React, { useEffect, useRef } from 'react'

/**
 * InteractiveParticleTrail - Soft Flow-Through Chrysanthemum Sky Rocket Firework
 * 
 * - Slightly smaller, elegant and compact burst size (~22px - 32px radius).
 * - 50% soft subtle opacity (never harsh or glaring).
 * - Extended lifetime with continuous flowing line streamer trails (flow-through willow light strands).
 * - Triggers on both Mouse Movement and Mouse Click (pointerdown).
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

    // Color Palettes (Rich Purple & Starlight, Soft 50% Blending)
    const getStreamerColor = (layer) => {
      if (layer === 'core') {
        return {
          r: 255, g: 245, b: 215, // Golden Starlight Core
          glowR: 240, glowG: 200, glowB: 255
        }
      } else if (layer === 'inner') {
        return {
          r: 225, g: 175, b: 255, // Luminous Lavender
          glowR: 185, glowG: 120, glowB: 255
        }
      } else {
        return {
          r: 165, g: 105, b: 255, // Royal Violet Flowing Line
          glowR: 130, glowG: 70,  glowB: 245
        }
      }
    }

    // Detonate Chrysanthemum / Willow Flow Burst
    const detonateChrysanthemum = (x, y, power = 1) => {
      // 1. Central Core Ignition Flash (Soft 50% opacity)
      coreSparks.push({
        x,
        y,
        radius: 8 * power,
        alpha: 0.50,
        decay: 0.04
      })

      // 2. Compact & Dense Flow-Through Needle Streamers (28 to 38 streamers)
      const count = Math.floor(28 + Math.random() * 10)
      // Compact size: 2.0 to 3.2 base speed (smaller radius ~22px - 32px)
      const baseSpeed = (2.1 + Math.random() * 1.1) * Math.min(power, 1.2)

      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.18
        const speed = baseSpeed * (0.65 + Math.random() * 0.65)
        const isCoreLayer = Math.random() < 0.25
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
          gravity: 0.038 + Math.random() * 0.025, // Gentle drooping willow flow
          friction: 0.962 + Math.random() * 0.012, // High momentum for long silky lines
          lineWidth: isCoreLayer ? 1.3 : 0.95, // Ultra-fine crisp flowing light threads
          alpha: 0.50, // Set to 50% opacity
          maxAlpha: 0.50,
          decay: 0.007 + Math.random() * 0.006, // Long graceful lifetime (~1.8s - 2.5s)
          color,
          twinkle: 0.85 + Math.random() * 0.15
        })
      }

      // Safeguard max active streamers
      if (streamers.length > 260) {
        streamers.splice(0, streamers.length - 260)
      }
    }

    // Launch Ascending Rocket
    const launchRocket = (startX, startY, targetX, targetY) => {
      const dx = targetX - startX
      const dy = targetY - startY
      const dist = Math.hypot(dx, dy)
      const steps = Math.max(Math.floor(dist / 14), 1)

      rockets.push({
        x: startX,
        y: startY,
        targetX,
        targetY,
        vx: dx / steps,
        vy: dy / steps,
        life: steps,
        color: { r: 255, g: 240, b: 220, glowR: 200, glowG: 150, glowB: 255 }
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

      // 1. Render Ascending Rocket Tracers
      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i]
        const oldX = r.x
        const oldY = r.y
        r.x += r.vx
        r.y += r.vy
        r.life--

        ctx.save()
        ctx.strokeStyle = `rgba(${r.color.r}, ${r.color.g}, ${r.color.b}, 0.45)`
        ctx.lineWidth = 1.4
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

      // 2. Render Core Center Soft Glows
      for (let i = coreSparks.length - 1; i >= 0; i--) {
        const c = coreSparks[i]
        c.alpha -= c.decay
        c.radius *= 0.94

        if (c.alpha <= 0.01 || c.radius <= 0.5) {
          coreSparks.splice(i, 1)
          continue
        }

        ctx.save()
        const grad = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.radius * 2)
        grad.addColorStop(0, `rgba(255, 255, 255, ${c.alpha * 0.50})`)
        grad.addColorStop(0.4, `rgba(215, 170, 255, ${c.alpha * 0.35})`)
        grad.addColorStop(1, `rgba(130, 70, 245, 0)`)

        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(c.x, c.y, c.radius * 2, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      // 3. Render Flow-Through Long Streamer Lines
      for (let i = streamers.length - 1; i >= 0; i--) {
        const s = streamers[i]

        s.prevX = s.x
        s.prevY = s.y

        s.vx *= s.friction
        s.vy *= s.friction
        s.vy += s.gravity

        s.x += s.vx
        s.y += s.vy

        // Save position history for extended flowing trail (up to 12 points)
        s.history.unshift({ x: s.x, y: s.y })
        if (s.history.length > 12) {
          s.history.pop()
        }

        s.alpha -= s.decay

        if (s.alpha <= 0.005) {
          streamers.splice(i, 1)
          continue
        }

        const currentAlpha = Math.max(0, Math.min(0.50, s.alpha * s.twinkle))

        ctx.save()
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'

        // 3a. Soft outer glowing flow-line aura
        ctx.lineWidth = s.lineWidth * 2.2
        ctx.strokeStyle = `rgba(${s.color.glowR}, ${s.color.glowG}, ${s.color.glowB}, ${currentAlpha * 0.25})`
        ctx.beginPath()
        ctx.moveTo(s.history[s.history.length - 1].x, s.history[s.history.length - 1].y)
        for (let h = s.history.length - 2; h >= 0; h--) {
          ctx.lineTo(s.history[h].x, s.history[h].y)
        }
        ctx.stroke()

        // 3b. Crisp flowing light streak line
        ctx.lineWidth = s.lineWidth
        ctx.strokeStyle = `rgba(${s.color.r}, ${s.color.g}, ${s.color.b}, ${currentAlpha * 0.80})`
        ctx.beginPath()
        ctx.moveTo(s.history[s.history.length - 1].x, s.history[s.history.length - 1].y)
        for (let h = s.history.length - 2; h >= 0; h--) {
          ctx.lineTo(s.history[h].x, s.history[h].y)
        }
        ctx.stroke()

        // 3c. Leading spark tip
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

    // Trigger helper
    const triggerBurstAt = (x, y, power = 1.0, withRocket = true) => {
      detonateChrysanthemum(x, y, power)
      if (withRocket) {
        const launchY = y + (28 + Math.random() * 22)
        const launchX = x + (Math.random() - 0.5) * 12
        launchRocket(launchX, launchY, x, y)
      }

      if (!isRunning) {
        isRunning = true
        animationFrameId = requestAnimationFrame(render)
      }
    }

    // Mouse movement listener
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

      // Detonate every ~30px along movement path
      const stepDistance = 30
      if (accumulatedDist >= stepDistance) {
        const intensity = Math.min(Math.max(speed / 14, 0.85), 1.25)
        const shouldLaunchTracer = dist > 16 && Math.random() > 0.45
        triggerBurstAt(currentX, currentY, intensity, shouldLaunchTracer)
        accumulatedDist = 0
      }

      lastMousePos = { x: currentX, y: currentY, time: now }
    }

    // Click trigger (pointerdown)
    const handlePointerDown = (e) => {
      triggerBurstAt(e.clientX, e.clientY, 1.25, true)
    }

    const handleMouseLeave = () => {
      lastMousePos = { x: null, y: null, time: 0 }
      accumulatedDist = 0
    }

    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('pointerdown', handlePointerDown, { passive: true })
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true })

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('pointerdown', handlePointerDown)
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
