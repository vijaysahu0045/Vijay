import React, { useEffect, useRef } from 'react'

/**
 * InteractiveParticleTrail - Sky Rocket Launch from Bottom & Detonation
 * 
 * 1. On Click (pointerdown): Rocket launches from bottom of screen, soars upward, and detonates into grand firework at click coordinate.
 * 2. 10-Second Continuous Drag/Movement: If user continuously moves/drags mouse for 10s, celebratory rocket launches from bottom and blooms at cursor.
 * 3. Normal Idle/Browsing: Completely hidden, clean background, 0% CPU/GPU.
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

    // Collections
    const rockets = []
    const streamers = []
    const coreSparks = []
    const rocketTailEmbers = []

    // 10-Second Continuous Movement Tracking
    let lastMoveTime = 0
    let continuousMoveDuration = 0
    let lastTickTime = performance.now()
    let currentCursor = { x: width / 2, y: height / 3 }

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

    // Color Palette (Rich Purple & Starlight theme, soft 50% opacity)
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
          r: 165, g: 105, b: 255, // Royal Violet Willow
          glowR: 130, glowG: 70,  glowB: 245
        }
      }
    }

    // Detonate Grand Chrysanthemum Firecracker Burst
    const detonateChrysanthemum = (x, y, power = 1.0) => {
      // 1. Central Core Ignition Flash
      coreSparks.push({
        x,
        y,
        radius: 20 * power,
        alpha: 0.55,
        decay: 0.012
      })

      // 2. Large Dense Chrysanthemum Streamers (48 to 64 streamers)
      const count = Math.floor(48 + Math.random() * 16)
      const baseSpeed = (0.58 + Math.random() * 0.35) * Math.min(power, 1.25)

      for (let i = 0; i < count; i++) {
        const angle = (i / count) * Math.PI * 2 + (Math.random() - 0.5) * 0.15
        const speed = baseSpeed * (0.65 + Math.random() * 0.70)
        const isCoreLayer = Math.random() < 0.28
        const isInnerLayer = Math.random() < 0.58
        const layerType = isCoreLayer ? 'core' : (isInnerLayer ? 'inner' : 'outer')

        const color = getStreamerColor(layerType)

        // Initial burst radius offset
        const startOffset = 24 + Math.random() * 28
        const startX = x + Math.cos(angle) * startOffset
        const startY = y + Math.sin(angle) * startOffset

        streamers.push({
          x: startX,
          y: startY,
          prevX: startX,
          prevY: startY,
          history: [{ x: startX, y: startY }],
          vx: Math.cos(angle) * speed,
          vy: Math.sin(angle) * speed,
          gravity: 0.0055 + Math.random() * 0.004, // Willow weeping curve
          friction: 0.988 + Math.random() * 0.004, // Smooth glide
          lineWidth: isCoreLayer ? 1.85 : 1.35, // Bold crisp flowing light threads
          alpha: 0.50, // 50% opacity
          maxAlpha: 0.50,
          decay: 0.0026 + Math.random() * 0.0018, // Long graceful lifetime (~3.5s - 5s)
          color,
          twinkle: 0.90 + Math.random() * 0.10
        })
      }

      // Safeguard max active streamers
      if (streamers.length > 350) {
        streamers.splice(0, streamers.length - 350)
      }
    }

    // Launch Rocket from Bottom of Viewport
    const launchRocketFromBottom = (targetX, targetY, power = 1.0) => {
      // Start near bottom with slight natural variation
      const startX = targetX + (Math.random() - 0.5) * 40
      const startY = height + 15

      const dx = targetX - startX
      const dy = targetY - startY
      const dist = Math.hypot(dx, dy)
      // Smooth realistic ascent time
      const totalSteps = Math.max(Math.floor(dist / 14), 25)

      rockets.push({
        x: startX,
        y: startY,
        startX,
        startY,
        targetX,
        targetY,
        dx,
        dy,
        step: 0,
        totalSteps,
        power,
        history: [{ x: startX, y: startY }]
      })

      if (!isRunning) {
        isRunning = true
        animationFrameId = requestAnimationFrame(render)
      }
    }

    // Animation & rendering loop
    const render = () => {
      ctx.clearRect(0, 0, width, height)

      const hasRockets = rockets.length > 0
      const hasTailEmbers = rocketTailEmbers.length > 0
      const hasCores = coreSparks.length > 0
      const hasStreamers = streamers.length > 0

      if (!hasRockets && !hasTailEmbers && !hasCores && !hasStreamers) {
        isRunning = false
        if (animationFrameId) {
          cancelAnimationFrame(animationFrameId)
          animationFrameId = null
        }
        return
      }

      // 1. Update & Render Ascending Rockets from Bottom
      for (let i = rockets.length - 1; i >= 0; i--) {
        const r = rockets[i]
        r.step++
        const progress = r.step / r.totalSteps
        // Easing out slightly as rocket approaches apex
        const easedProgress = Math.sin(progress * (Math.PI / 2))

        const currentX = r.startX + r.dx * easedProgress
        const currentY = r.startY + r.dy * easedProgress

        r.history.unshift({ x: currentX, y: currentY })
        if (r.history.length > 16) {
          r.history.pop()
        }

        // Spawn sparkling exhaust embers from rocket tail
        if (Math.random() > 0.3) {
          rocketTailEmbers.push({
            x: currentX + (Math.random() - 0.5) * 4,
            y: currentY + Math.random() * 4,
            vx: (Math.random() - 0.5) * 0.8,
            vy: 0.8 + Math.random() * 1.2,
            alpha: 0.65,
            decay: 0.045,
            size: 1.2 + Math.random() * 1.4
          })
        }

        // Draw glowing rocket ascent streak
        ctx.save()
        ctx.lineCap = 'round'

        // Soft outer ascent halo
        ctx.lineWidth = 4.5
        ctx.strokeStyle = 'rgba(215, 160, 255, 0.25)'
        ctx.beginPath()
        ctx.moveTo(r.history[r.history.length - 1].x, r.history[r.history.length - 1].y)
        for (let h = r.history.length - 2; h >= 0; h--) {
          ctx.lineTo(r.history[h].x, r.history[h].y)
        }
        ctx.stroke()

        // Bright burning ascent streak
        ctx.lineWidth = 2.2
        ctx.strokeStyle = 'rgba(255, 245, 220, 0.85)'
        ctx.beginPath()
        ctx.moveTo(r.history[r.history.length - 1].x, r.history[r.history.length - 1].y)
        for (let h = r.history.length - 2; h >= 0; h--) {
          ctx.lineTo(r.history[h].x, r.history[h].y)
        }
        ctx.stroke()

        // Rocket head glowing spark
        ctx.beginPath()
        ctx.arc(currentX, currentY, 2.5, 0, Math.PI * 2)
        ctx.fillStyle = '#ffffff'
        ctx.fill()
        ctx.restore()

        // Detonate at apex
        if (r.step >= r.totalSteps) {
          detonateChrysanthemum(r.targetX, r.targetY, r.power)
          rockets.splice(i, 1)
        }
      }

      // 2. Render Rocket Tail Exhaust Embers
      for (let i = rocketTailEmbers.length - 1; i >= 0; i--) {
        const e = rocketTailEmbers[i]
        e.x += e.vx
        e.y += e.vy
        e.alpha -= e.decay

        if (e.alpha <= 0.01) {
          rocketTailEmbers.splice(i, 1)
          continue
        }

        ctx.save()
        ctx.beginPath()
        ctx.arc(e.x, e.y, e.size, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 225, 170, ${e.alpha * 0.50})`
        ctx.fill()
        ctx.restore()
      }

      // 3. Render Core Center Soft Glows
      for (let i = coreSparks.length - 1; i >= 0; i--) {
        const c = coreSparks[i]
        c.alpha -= c.decay
        c.radius *= 0.95

        if (c.alpha <= 0.01 || c.radius <= 0.5) {
          coreSparks.splice(i, 1)
          continue
        }

        ctx.save()
        const grad = ctx.createRadialGradient(c.x, c.y, 0, c.x, c.y, c.radius * 2)
        grad.addColorStop(0, `rgba(255, 255, 255, ${c.alpha * 0.55})`)
        grad.addColorStop(0.35, `rgba(215, 170, 255, ${c.alpha * 0.35})`)
        grad.addColorStop(1, `rgba(130, 70, 245, 0)`)

        ctx.fillStyle = grad
        ctx.beginPath()
        ctx.arc(c.x, c.y, c.radius * 2, 0, Math.PI * 2)
        ctx.fill()
        ctx.restore()
      }

      // 4. Render Flow-Through Long Streamer Lines
      for (let i = streamers.length - 1; i >= 0; i--) {
        const s = streamers[i]

        s.prevX = s.x
        s.prevY = s.y

        s.vx *= s.friction
        s.vy *= s.friction
        s.vy += s.gravity

        s.x += s.vx
        s.y += s.vy

        // Save position history for extended flowing trail (up to 24 points)
        s.history.unshift({ x: s.x, y: s.y })
        if (s.history.length > 24) {
          s.history.pop()
        }

        s.alpha -= s.decay

        if (s.alpha <= 0.002) {
          streamers.splice(i, 1)
          continue
        }

        const currentAlpha = Math.max(0, Math.min(0.50, s.alpha * s.twinkle))

        ctx.save()
        ctx.lineCap = 'round'
        ctx.lineJoin = 'round'

        // 4a. Soft outer glowing flow-line aura
        ctx.lineWidth = s.lineWidth * 2.2
        ctx.strokeStyle = `rgba(${s.color.glowR}, ${s.color.glowG}, ${s.color.glowB}, ${currentAlpha * 0.25})`
        ctx.beginPath()
        ctx.moveTo(s.history[s.history.length - 1].x, s.history[s.history.length - 1].y)
        for (let h = s.history.length - 2; h >= 0; h--) {
          ctx.lineTo(s.history[h].x, s.history[h].y)
        }
        ctx.stroke()

        // 4b. Crisp flowing light streak line
        ctx.lineWidth = s.lineWidth
        ctx.strokeStyle = `rgba(${s.color.r}, ${s.color.g}, ${s.color.b}, ${currentAlpha * 0.80})`
        ctx.beginPath()
        ctx.moveTo(s.history[s.history.length - 1].x, s.history[s.history.length - 1].y)
        for (let h = s.history.length - 2; h >= 0; h--) {
          ctx.lineTo(s.history[h].x, s.history[h].y)
        }
        ctx.stroke()

        // 4c. Leading spark tip
        ctx.beginPath()
        ctx.arc(s.x, s.y, s.lineWidth * 0.8, 0, Math.PI * 2)
        ctx.fillStyle = `rgba(255, 255, 255, ${currentAlpha})`
        ctx.fill()

        ctx.restore()
      }

      if (rockets.length > 0 || rocketTailEmbers.length > 0 || coreSparks.length > 0 || streamers.length > 0) {
        animationFrameId = requestAnimationFrame(render)
      } else {
        ctx.clearRect(0, 0, width, height)
        isRunning = false
      }
    }

    // User Click: Launch Rocket from Bottom to Click Position
    const handlePointerDown = (e) => {
      launchRocketFromBottom(e.clientX, e.clientY, 1.2)
    }

    // Mouse Move & 10-Second Continuous Drag/Move Tracker
    const handleMouseMove = (e) => {
      const now = performance.now()
      const currentX = e.clientX
      const currentY = e.clientY
      currentCursor = { x: currentX, y: currentY }

      if (lastMoveTime === 0) {
        lastMoveTime = now
        lastTickTime = now
        return
      }

      const elapsedSinceLastMove = now - lastMoveTime

      // If user paused/stopped moving for more than 900ms, reset 10s counter
      if (elapsedSinceLastMove > 900) {
        continuousMoveDuration = 0
      } else {
        // Accumulate active movement duration
        continuousMoveDuration += (now - lastTickTime)
      }

      lastMoveTime = now
      lastTickTime = now

      // When user has moved/dragged continuously for 10 seconds (10,000ms):
      if (continuousMoveDuration >= 10000) {
        launchRocketFromBottom(currentX, currentY, 1.35)
        continuousMoveDuration = 0 // Reset for next cycle
      }
    }

    const handleMouseLeave = () => {
      continuousMoveDuration = 0
      lastMoveTime = 0
    }

    window.addEventListener('pointerdown', handlePointerDown, { passive: true })
    window.addEventListener('mousemove', handleMouseMove, { passive: true })
    window.addEventListener('mouseleave', handleMouseLeave, { passive: true })

    return () => {
      window.removeEventListener('resize', handleResize)
      window.removeEventListener('pointerdown', handlePointerDown)
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
