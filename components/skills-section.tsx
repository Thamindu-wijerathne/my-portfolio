"use client"

import { useState, useEffect, useRef } from "react"

const neuralNodes = [
  { id: "python", name: "Python", x: 200, y: 150, category: "core", level: 95 },
  { id: "tensorflow", name: "TensorFlow", x: 350, y: 100, category: "ml", level: 90 },
  { id: "pytorch", name: "PyTorch", x: 400, y: 200, category: "ml", level: 88 },
  { id: "react", name: "React", x: 150, y: 250, category: "frontend", level: 85 },
  { id: "aws", name: "AWS", x: 300, y: 300, category: "cloud", level: 90 },
  { id: "docker", name: "Docker", x: 450, y: 150, category: "devops", level: 82 },
  { id: "kubernetes", name: "K8s", x: 500, y: 250, category: "devops", level: 80 },
  { id: "opencv", name: "OpenCV", x: 250, y: 50, category: "cv", level: 85 },
  { id: "transformers", name: "Transformers", x: 100, y: 100, category: "nlp", level: 88 },
  { id: "fastapi", name: "FastAPI", x: 350, y: 350, category: "backend", level: 90 },
  { id: "postgresql", name: "PostgreSQL", x: 150, y: 350, category: "database", level: 85 },
  { id: "rust", name: "Rust", x: 50, y: 200, category: "systems", level: 70 },
  { id: "javascript", name: "JS", x: 100, y: 300, category: "frontend", level: 88 },
  { id: "go", name: "Go", x: 480, y: 80, category: "systems", level: 75 },
  { id: "mongodb", name: "MongoDB", x: 50, y: 350, category: "database", level: 80 },
]

const generateMeshConnections = () => {
  const connections = []
  for (let i = 0; i < neuralNodes.length; i++) {
    for (let j = i + 1; j < neuralNodes.length; j++) {
      connections.push({
        from: neuralNodes[i].id,
        to: neuralNodes[j].id,
        distance: Math.sqrt(
          Math.pow(neuralNodes[i].x - neuralNodes[j].x, 2) + Math.pow(neuralNodes[i].y - neuralNodes[j].y, 2),
        ),
      })
    }
  }
  return connections
}

const meshConnections = generateMeshConnections()

interface Particle {
  id: string
  connectionIndex: number
  progress: number
  speed: number
  color: string
}

function NeuralNetwork() {
  const svgRef = useRef<SVGSVGElement>(null)
  const [hoveredNode, setHoveredNode] = useState<string | null>(null)
  const [animationPhase, setAnimationPhase] = useState(0)
  const [particles, setParticles] = useState<Particle[]>([])

  useEffect(() => {
    const initialParticles: Particle[] = []
    const colors = [
      "rgba(6, 182, 212, 0.8)", // cyan
      "rgba(236, 72, 153, 0.8)", // pink
      "rgba(34, 197, 94, 0.8)", // green
      "rgba(249, 115, 22, 0.8)", // orange
      "rgba(168, 85, 247, 0.8)", // purple
    ]

    for (let i = 0; i < 15; i++) {
      initialParticles.push({
        id: `particle-${i}`,
        connectionIndex: Math.floor(Math.random() * meshConnections.length),
        progress: Math.random(),
        speed: 0.005 + Math.random() * 0.01,
        color: colors[i % colors.length],
      })
    }
    setParticles(initialParticles)
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationPhase((prev) => (prev + 1) % 1000)
      setParticles((prevParticles) =>
        prevParticles.map((particle) => ({
          ...particle,
          progress: (particle.progress + particle.speed) % 1,
          connectionIndex:
            Math.random() < 0.002 ? Math.floor(Math.random() * meshConnections.length) : particle.connectionIndex,
        })),
      )
    }, 50)
    return () => clearInterval(interval)
  }, [])

  const getNodeColor = (category: string, level: number) => {
    const opacity = level / 100
    switch (category) {
      case "core":
        return `rgba(6, 182, 212, ${opacity})` // cyan
      case "ml":
        return `rgba(236, 72, 153, ${opacity})` // pink
      case "frontend":
        return `rgba(34, 197, 94, ${opacity})` // green
      case "backend":
        return `rgba(249, 115, 22, ${opacity})` // orange
      case "cloud":
        return `rgba(168, 85, 247, ${opacity})` // purple
      case "devops":
        return `rgba(239, 68, 68, ${opacity})` // red
      case "cv":
        return `rgba(59, 130, 246, ${opacity})` // blue
      case "nlp":
        return `rgba(16, 185, 129, ${opacity})` // emerald
      case "database":
        return `rgba(245, 158, 11, ${opacity})` // amber
      case "systems":
        return `rgba(156, 163, 175, ${opacity})` // gray
      default:
        return `rgba(6, 182, 212, ${opacity})`
    }
  }

  const getConnectionOpacity = (from: string, to: string, distance: number) => {
    const baseOpacity = Math.max(0.05, 0.3 - distance / 600)
    if (hoveredNode && (hoveredNode === from || hoveredNode === to)) {
      return Math.min(0.8, baseOpacity * 3)
    }
    return baseOpacity + (Math.sin(animationPhase * 0.02) + 1) * 0.02
  }

  return (
    <div className="relative w-full h-96 bg-card/20 rounded-lg border border-border/50 overflow-hidden">
      <svg ref={svgRef} width="100%" height="100%" viewBox="0 0 600 400" className="absolute inset-0">
        {meshConnections.map((connection, index) => {
          const fromNode = neuralNodes.find((n) => n.id === connection.from)
          const toNode = neuralNodes.find((n) => n.id === connection.to)
          if (!fromNode || !toNode) return null

          return (
            <line
              key={index}
              x1={fromNode.x}
              y1={fromNode.y}
              x2={toNode.x}
              y2={toNode.y}
              stroke="rgba(6, 182, 212, 0.3)"
              strokeWidth="1"
              opacity={getConnectionOpacity(connection.from, connection.to, connection.distance)}
              className="transition-opacity duration-300"
            />
          )
        })}

        {neuralNodes.map((node) => (
          <g key={node.id}>
            <circle
              cx={node.x}
              cy={node.y}
              r={hoveredNode === node.id ? 18 : 12}
              fill="none"
              stroke={getNodeColor(node.category, node.level)}
              strokeWidth="1"
              opacity="0.3"
              className="animate-pulse"
            />
            <circle
              cx={node.x}
              cy={node.y}
              r={hoveredNode === node.id ? 12 : 8}
              fill={getNodeColor(node.category, node.level)}
              stroke="rgba(255, 255, 255, 0.5)"
              strokeWidth="2"
              className="transition-all duration-300 cursor-pointer"
              onMouseEnter={() => setHoveredNode(node.id)}
              onMouseLeave={() => setHoveredNode(null)}
            />
            <text
              x={node.x}
              y={node.y - 15}
              textAnchor="middle"
              className="text-xs font-medium fill-foreground pointer-events-none"
              opacity={hoveredNode === node.id ? 1 : 0.7}
            >
              {node.name}
            </text>
            {hoveredNode === node.id && (
              <text
                x={node.x}
                y={node.y + 25}
                textAnchor="middle"
                className="text-xs font-bold fill-primary pointer-events-none"
              >
                {node.level}%
              </text>
            )}
          </g>
        ))}

        {particles.map((particle) => {
          const connection = meshConnections[particle.connectionIndex]
          if (!connection) return null

          const fromNode = neuralNodes.find((n) => n.id === connection.from)
          const toNode = neuralNodes.find((n) => n.id === connection.to)
          if (!fromNode || !toNode) return null

          const x = fromNode.x + (toNode.x - fromNode.x) * particle.progress
          const y = fromNode.y + (toNode.y - fromNode.y) * particle.progress

          return (
            <circle key={particle.id} cx={x} cy={y} r="2" fill={particle.color} className="animate-pulse">
              <animate attributeName="opacity" values="0;1;0" dur="2s" repeatCount="indefinite" />
            </circle>
          )
        })}

        <circle cx="300" cy="200" r="5" fill="rgba(6, 182, 212, 0.6)" className="animate-ping" />
      </svg>

      <div className="absolute bottom-4 left-4 bg-background/80 backdrop-blur-sm rounded-lg p-3 border border-border/50">
        <div className="text-xs font-medium mb-2">Technology Categories</div>
        <div className="grid grid-cols-2 gap-2 text-xs">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-cyan-500"></div>
            <span>Core</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-pink-500"></div>
            <span>ML/AI</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-purple-500"></div>
            <span>Cloud</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <span>Backend</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export function SkillsSection() {

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">Skills & Expertise</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            A comprehensive toolkit for building intelligent systems from research to production
          </p>
        </div>

        <div className="mb-16">
          <h3 className="text-2xl font-bold text-center mb-8">Technology Neural Network</h3>
          <NeuralNetwork />
          <p className="text-center text-sm text-muted-foreground mt-4">
            Interactive visualization showing connections between technologies • Hover over nodes to explore
          </p>
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center w-64 h-64 relative">
            <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full animate-spin-slow" />
            <div className="absolute inset-4 bg-background rounded-full flex items-center justify-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-primary mb-2">5+</div>
                <div className="text-sm text-muted-foreground">Years Experience</div>
              </div>
            </div>
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-2">
              <div className="w-4 h-4 bg-primary rounded-full" />
            </div>
            <div className="absolute top-1/4 right-0 transform translate-x-2 -translate-y-1/2">
              <div className="w-4 h-4 bg-secondary rounded-full" />
            </div>
            <div className="absolute bottom-1/4 right-0 transform translate-x-2 translate-y-1/2">
              <div className="w-4 h-4 bg-primary rounded-full" />
            </div>
            <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-2">
              <div className="w-4 h-4 bg-secondary rounded-full" />
            </div>
            <div className="absolute bottom-1/4 left-0 transform -translate-x-2 translate-y-1/2">
              <div className="w-4 h-4 bg-primary rounded-full" />
            </div>
            <div className="absolute top-1/4 left-0 transform -translate-x-2 -translate-y-1/2">
              <div className="w-4 h-4 bg-secondary rounded-full" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
