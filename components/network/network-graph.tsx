"use client"

import { useEffect, useRef, useState, useCallback } from "react"

interface Node {
  id: number
  name: string
  type: "hub" | "affiliate"
  x: number
  y: number
  radius: number
  opacity: number
  targetOpacity: number
}

interface Edge {
  from: number
  to: number
  opacity: number
  targetOpacity: number
}

const HUB_HOSPITALS = [
  "横浜市立大学附属病院",
  "附属市民総合医療センター",
  "神奈川県立がんセンター",
]

const AFFILIATE_HOSPITALS = [
  "横浜南共済病院",
  "横浜市南部病院",
  "藤沢市民病院",
  "横浜保土ヶ谷中央病院",
  "横浜掖済会病院",
  "県立足柄上病院",
  "横須賀市立市民病院",
  "秦野赤十字病院",
  "大和市立病院",
  "大森赤十字病院",
]

export function NetworkGraph() {
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)
  const nodesRef = useRef<Node[]>([])
  const edgesRef = useRef<Edge[]>([])
  const hoveredRef = useRef<number | null>(null)
  const animFrameRef = useRef<number>(0)
  const [tooltip, setTooltip] = useState<{
    name: string
    type: string
    x: number
    y: number
  } | null>(null)
  const [isVisible, setIsVisible] = useState(false)
  const phaseRef = useRef(0)
  const timeRef = useRef(0)

  const initNodes = useCallback((w: number, h: number) => {
    const nodes: Node[] = []
    const cx = w / 2
    const cy = h / 2

    // 拠点病院 (中心付近に三角形配置)
    HUB_HOSPITALS.forEach((name, i) => {
      const angle = (i / HUB_HOSPITALS.length) * Math.PI * 2 - Math.PI / 2
      const r = Math.min(w, h) * 0.08
      nodes.push({
        id: i,
        name,
        type: "hub",
        x: cx + Math.cos(angle) * r,
        y: cy + Math.sin(angle) * r,
        radius: Math.min(w, h) * 0.035,
        opacity: 0,
        targetOpacity: 1,
      })
    })

    // 協力病院 (外周に円形配置)
    AFFILIATE_HOSPITALS.forEach((name, i) => {
      const angle = (i / AFFILIATE_HOSPITALS.length) * Math.PI * 2 - Math.PI / 4
      const dist = Math.min(w, h) * 0.32 + (Math.random() - 0.5) * 20
      nodes.push({
        id: HUB_HOSPITALS.length + i,
        name,
        type: "affiliate",
        x: cx + Math.cos(angle) * dist + (Math.random() - 0.5) * 10,
        y: cy + Math.sin(angle) * dist + (Math.random() - 0.5) * 10,
        radius: Math.min(w, h) * 0.018,
        opacity: 0,
        targetOpacity: 1,
      })
    })

    // エッジ
    const edges: Edge[] = []
    const hubIds = HUB_HOSPITALS.map((_, i) => i)
    const affiliateIds = AFFILIATE_HOSPITALS.map(
      (_, i) => HUB_HOSPITALS.length + i
    )

    // 拠点間
    for (let i = 0; i < hubIds.length; i++) {
      for (let j = i + 1; j < hubIds.length; j++) {
        edges.push({
          from: hubIds[i],
          to: hubIds[j],
          opacity: 0,
          targetOpacity: 0.5,
        })
      }
    }

    // 拠点 → 協力病院 (最も近い拠点に接続)
    affiliateIds.forEach((aid) => {
      const nearest = hubIds.reduce((best, hid) => {
        const dx = nodes[aid].x - nodes[hid].x
        const dy = nodes[aid].y - nodes[hid].y
        const dBest = Math.hypot(
          nodes[best].x - nodes[aid].x,
          nodes[best].y - nodes[aid].y
        )
        return Math.hypot(dx, dy) < dBest ? hid : best
      }, hubIds[0])
      edges.push({
        from: nearest,
        to: aid,
        opacity: 0,
        targetOpacity: 0.25,
      })
    })

    nodesRef.current = nodes
    edgesRef.current = edges
  }, [])

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true)
          observer.disconnect()
        }
      },
      { threshold: 0.2 }
    )
    observer.observe(container)
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    if (!isVisible) return
    const canvas = canvasRef.current
    const container = containerRef.current
    if (!canvas || !container) return

    const dpr = window.devicePixelRatio || 1
    const rect = container.getBoundingClientRect()
    const w = rect.width
    const h = rect.height
    canvas.width = w * dpr
    canvas.height = h * dpr
    canvas.style.width = w + "px"
    canvas.style.height = h + "px"
    const ctx = canvas.getContext("2d")!
    ctx.scale(dpr, dpr)

    initNodes(w, h)
    phaseRef.current = 0
    timeRef.current = 0

    const draw = () => {
      timeRef.current += 1
      const t = timeRef.current

      if (t > 20) phaseRef.current = 1
      if (t > 60) phaseRef.current = 2

      ctx.clearRect(0, 0, w, h)

      const nodes = nodesRef.current
      const edges = edgesRef.current
      const hovered = hoveredRef.current

      nodes.forEach((node) => {
        let show = false
        if (node.type === "hub" && phaseRef.current >= 1) show = true
        if (node.type === "affiliate" && phaseRef.current >= 2) show = true
        const target = show ? node.targetOpacity : 0
        node.opacity += (target - node.opacity) * 0.06
      })
      edges.forEach((edge) => {
        const fromNode = nodes[edge.from]
        const toNode = nodes[edge.to]
        const show = fromNode.opacity > 0.3 && toNode.opacity > 0.3
        const target = show ? edge.targetOpacity : 0
        edge.opacity += (target - edge.opacity) * 0.06
      })

      // エッジ描画
      edges.forEach((edge) => {
        if (edge.opacity < 0.01) return
        const from = nodes[edge.from]
        const to = nodes[edge.to]
        const isHighlighted =
          hovered !== null && (edge.from === hovered || edge.to === hovered)
        ctx.beginPath()
        ctx.moveTo(from.x, from.y)
        ctx.lineTo(to.x, to.y)
        ctx.strokeStyle = isHighlighted
          ? `rgba(196, 146, 58, ${Math.min(edge.opacity * 3, 0.8)})`
          : `rgba(20, 122, 133, ${edge.opacity})`
        ctx.lineWidth = isHighlighted ? 1.5 : 0.6
        ctx.stroke()
      })

      // ノード描画
      nodes.forEach((node) => {
        if (node.opacity < 0.01) return
        const isHovered = hovered === node.id

        if (node.type === "hub") {
          const glowSize = 4 + Math.sin(t * 0.03) * 2
          const grad = ctx.createRadialGradient(
            node.x,
            node.y,
            node.radius,
            node.x,
            node.y,
            node.radius + glowSize
          )
          grad.addColorStop(0, `rgba(196, 146, 58, ${node.opacity * 0.4})`)
          grad.addColorStop(1, `rgba(196, 146, 58, 0)`)
          ctx.beginPath()
          ctx.arc(node.x, node.y, node.radius + glowSize, 0, Math.PI * 2)
          ctx.fillStyle = grad
          ctx.fill()
        }

        ctx.beginPath()
        ctx.arc(
          node.x,
          node.y,
          isHovered ? node.radius * 1.3 : node.radius,
          0,
          Math.PI * 2
        )
        ctx.fillStyle =
          node.type === "hub"
            ? `rgba(196, 146, 58, ${node.opacity})`
            : `rgba(20, 122, 133, ${node.opacity * 0.85})`
        ctx.fill()

        ctx.strokeStyle = `rgba(255, 255, 255, ${node.opacity * 0.3})`
        ctx.lineWidth = 1
        ctx.stroke()

        if ((node.type === "hub" || isHovered) && node.opacity > 0.5) {
          ctx.font =
            node.type === "hub" ? "bold 11px sans-serif" : "11px sans-serif"
          ctx.textAlign = "center"
          ctx.fillStyle = `rgba(255, 255, 255, ${node.opacity * 0.9})`
          ctx.fillText(node.name, node.x, node.y + node.radius + 16)
        }
      })

      animFrameRef.current = requestAnimationFrame(draw)
    }

    animFrameRef.current = requestAnimationFrame(draw)
    return () => cancelAnimationFrame(animFrameRef.current)
  }, [isVisible, initNodes])

  const handleMouseMove = useCallback(
    (e: React.MouseEvent<HTMLCanvasElement>) => {
      const canvas = canvasRef.current
      if (!canvas) return
      const rect = canvas.getBoundingClientRect()
      const mx = e.clientX - rect.left
      const my = e.clientY - rect.top
      const nodes = nodesRef.current

      let found: Node | null = null
      for (let i = nodes.length - 1; i >= 0; i--) {
        const dx = mx - nodes[i].x
        const dy = my - nodes[i].y
        const hitR = Math.max(nodes[i].radius + 6, 12)
        if (dx * dx + dy * dy < hitR * hitR && nodes[i].opacity > 0.3) {
          found = nodes[i]
          break
        }
      }

      hoveredRef.current = found ? found.id : null
      canvas.style.cursor = found ? "pointer" : "default"

      if (found) {
        const typeLabel =
          found.type === "hub" ? "拠点病院" : "協力病院"
        setTooltip({
          name: found.name,
          type: typeLabel,
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        })
      } else {
        setTooltip(null)
      }
    },
    []
  )

  const handleMouseLeave = useCallback(() => {
    hoveredRef.current = null
    setTooltip(null)
  }, [])

  return (
    <div
      ref={containerRef}
      className="relative w-full aspect-square max-h-[520px] md:max-h-[600px]"
    >
      <canvas
        ref={canvasRef}
        className="h-full w-full"
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      />
      {tooltip && (
        <div
          className="pointer-events-none absolute z-10 rounded-lg bg-navy-sub/95 px-4 py-2.5 text-sm text-white shadow-lg backdrop-blur-sm"
          style={{ left: tooltip.x + 12, top: tooltip.y - 40 }}
        >
          <p className="font-bold">{tooltip.name}</p>
          <p className="text-xs text-gold-light">{tooltip.type}</p>
        </div>
      )}
      <div className="absolute bottom-4 left-4 flex flex-wrap items-center gap-4 text-xs text-white/70">
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rounded-full bg-gold" />
          拠点病院
        </span>
        <span className="flex items-center gap-1.5">
          <span className="inline-block h-3 w-3 rounded-full bg-teal" />
          協力病院
        </span>
      </div>
    </div>
  )
}
