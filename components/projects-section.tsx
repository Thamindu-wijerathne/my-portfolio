"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ExternalLink, Github, Play } from "lucide-react"

const projects = [
  {
    id: 1,
    title: "Neural Style Transfer Platform",
    description:
      "Real-time artistic style transfer using deep neural networks. Processes images in under 2 seconds with GPU acceleration.",
    image: "/neural-style-transfer-artistic-ai.png",
    technologies: ["PyTorch", "FastAPI", "React", "CUDA", "Docker"],
    category: "Computer Vision",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Conversational AI Assistant",
    description:
      "Multi-modal AI assistant capable of understanding text, images, and voice. Built with transformer architecture and deployed on AWS.",
    image: "/ai-chatbot-interface.png",
    technologies: ["Transformers", "Whisper", "AWS Lambda", "DynamoDB", "WebRTC"],
    category: "Natural Language Processing",
    github: "#",
    demo: "#",
    featured: true,
  },
  {
    id: 3,
    title: "Autonomous Drone Navigation",
    description:
      "Computer vision system for autonomous drone navigation using reinforcement learning and real-time object detection.",
    image: "/autonomous-drone-with-computer-vision.png",
    technologies: ["OpenCV", "YOLO", "ROS", "Python", "Raspberry Pi"],
    category: "Robotics",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    id: 4,
    title: "Medical Image Diagnosis",
    description:
      "Deep learning model for early detection of diseases in medical imaging with 94% accuracy on validation dataset.",
    image: "/medical-ai-diagnosis-interface.png",
    technologies: ["TensorFlow", "Keras", "Flask", "PostgreSQL", "Docker"],
    category: "Healthcare AI",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    id: 5,
    title: "Real-time Sentiment Analysis",
    description:
      "Scalable sentiment analysis system processing 1M+ social media posts daily with real-time dashboard and alerts.",
    image: "/sentiment-analysis-dashboard.png",
    technologies: ["Apache Kafka", "Spark", "BERT", "Elasticsearch", "Kibana"],
    category: "Natural Language Processing",
    github: "#",
    demo: "#",
    featured: false,
  },
  {
    id: 6,
    title: "Predictive Maintenance System",
    description:
      "IoT-based predictive maintenance using time series analysis and anomaly detection for industrial equipment.",
    image: "/industrial-iot-predictive-maintenance.png",
    technologies: ["Time Series", "LSTM", "InfluxDB", "Grafana", "MQTT"],
    category: "Industrial AI",
    github: "#",
    demo: "#",
    featured: false,
  },
]

const categories = [
  "All",
  "Computer Vision",
  "Natural Language Processing",
  "Robotics",
  "Healthcare AI",
  "Industrial AI",
]

export function ProjectsSection() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const filteredProjects =
    selectedCategory === "All" ? projects : projects.filter((project) => project.category === selectedCategory)

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">Featured Projects</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Innovative AI solutions that push the boundaries of what&apos;s possible
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="mb-2"
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <Card
              key={project.id}
              className={`group bg-card/50 border-border/50 hover:bg-card/80 transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
                project.featured ? "ring-2 ring-primary/20" : ""
              }`}
              onMouseEnter={() => setHoveredProject(project.id)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="relative overflow-hidden rounded-t-lg">
                {/* <img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-110"
                /> */}
                {project.featured && (
                  <Badge className="absolute top-3 left-3 bg-primary text-primary-foreground">Featured</Badge>
                )}
                <div
                  className={`absolute inset-0 bg-black/60 flex items-center justify-center gap-4 transition-opacity duration-300 ${
                    hoveredProject === project.id ? "opacity-100" : "opacity-0"
                  }`}
                >
                  <Button size="sm" variant="secondary" asChild>
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      Code
                    </a>
                  </Button>
                  <Button size="sm" asChild>
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      <Play className="w-4 h-4 mr-2" />
                      Demo
                    </a>
                  </Button>
                </div>
              </div>

              <CardHeader>
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors">{project.title}</CardTitle>
                  <ExternalLink className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <Badge variant="outline" className="w-fit text-xs">
                  {project.category}
                </Badge>
              </CardHeader>

              <CardContent>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <Badge key={index} variant="secondary" className="text-xs">
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            View All Projects on GitHub
          </Button>
        </div>
      </div>
    </section>
  )
}
