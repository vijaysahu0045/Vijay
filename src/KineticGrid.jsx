import { useEffect, useRef } from 'react'

export default function KineticGrid() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')

    let animationFrameId
    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)

    const mouse = {
      x: -1000,
      y: -1000,
      targetX: -1000,
      targetY: -1000,
      radius: 160,
      active: false
    }

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX
      mouse.targetY = e.clientY
      mouse.active = true
    }

    const handleMouseLeave = () => {
      mouse.targetX = -1000
      mouse.targetY = -1000
      mouse.active = false
    }

    const handleResize = () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    }

    window.addEventListener('mousemove', handleMouseMove)
    window.addEventListener('mouseleave', handleMouseLeave)
    window.addEventListener('resize', handleResize)

    const cellSize = 22
    const gridPoints = []

    // Initialize interactive grid nodes
    const cols = Math.ceil(window.innerWidth / cellSize) + 2
    const rows = Math.ceil(window.innerHeight / cellSize) + 2

    for (let i = 0; i < cols; i++) {
      for (let j = 0; j < rows; j++) {
        gridPoints.push({
          baseX: i * cellSize,
          baseY: j * cellSize,
          currentX: i * cellSize,
          currentY: j * cellSize,
          lift: 0,
          scale: 1,
          opacity: 0.08
        })
      }
    }

    let time = 0

    const render = () => {
      time += 0.015

      // Smooth lerp mouse position for organic fluid response
      mouse.x += (mouse.targetX - mouse.x) * 0.12
      mouse.y += (mouse.targetY - mouse.y) * 0.12

      ctx.clearRect(0, 0, width, height)

      // Draw kinetic interactive grid
      for (let p of gridPoints) {
        const dx = mouse.x - p.baseX
        const dy = mouse.y - p.baseY
        const dist = Math.hypot(dx, dy)

        let targetLift = 0
        let targetOpacity = 0.06
        let targetScale = 1
        let isClose = false

        if (mouse.active && dist < mouse.radius) {
          const normDist = dist / mouse.radius
          const force = Math.cos(normDist * (Math.PI / 2)) // Smooth bell curve
          targetLift = force * 10 // Lift up towards user
          targetOpacity = 0.12 + force * 0.45 // Brighten under cursor
          targetScale = 1 + force * 0.25
          isClose = true
        }

        // Spring dampening physics
        p.lift += (targetLift - p.lift) * 0.15
        p.opacity += (targetOpacity - p.opacity) * 0.15
        p.scale += (targetScale - p.scale) * 0.15

        if (p.opacity > 0.05 || p.lift > 0.5) {
          const drawX = p.baseX
          const drawY = p.baseY - p.lift // Elevate upwards
          const w = (cellSize - 4) * p.scale
          const h = (cellSize - 4) * p.scale

          // Subtle box stroke
          if (isClose && p.lift > 1) {
            // Glowing kinetic border
            ctx.strokeStyle = `rgba(167, 139, 250, ${p.opacity})`
            ctx.fillStyle = `rgba(129, 140, 248, ${p.opacity * 0.15})`
            ctx.lineWidth = 1.2

            ctx.beginPath()
            ctx.roundRect(drawX - w / 2, drawY - h / 2, w, h, 3)
            ctx.fill()
            ctx.stroke()
          } else {
            // Subtle resting grid line node
            ctx.strokeStyle = `rgba(255, 255, 255, ${p.opacity})`
            ctx.lineWidth = 0.8
            ctx.beginPath()
            ctx.strokeRect(drawX - cellSize / 2, drawY - cellSize / 2, cellSize - 2, cellSize - 2)
          }
        }
      }

      animationFrameId = requestAnimationFrame(render)
    }

    render()

    return () => {
      cancelAnimationFrame(animationFrameId)
      window.removeEventListener('mousemove', handleMouseMove)
      window.removeEventListener('mouseleave', handleMouseLeave)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 2,
        pointerEvents: 'none'
      }}
    />
  )
}
