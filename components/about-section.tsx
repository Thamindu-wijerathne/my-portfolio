import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Brain, Code, Database, Zap } from "lucide-react"

const highlights = [
  {
    icon: Brain,
    title: "AI Research",
    description: "Published 12+ papers in top-tier conferences including NeurIPS and ICML",
  },
  {
    icon: Code,
    title: "Production Systems",
    description: "Deployed ML models serving 10M+ users with 99.9% uptime",
  },
  {
    icon: Database,
    title: "Big Data",
    description: "Processed petabytes of data using distributed computing frameworks",
  },
  {
    icon: Zap,
    title: "Innovation",
    description: "Led breakthrough projects in computer vision and NLP",
  },
]

const technologies = [
  "Python",
  "TensorFlow",
  "PyTorch",
  "Kubernetes",
  "AWS",
  "GCP",
  "Docker",
  "MLflow",
  "Apache Spark",
  "React",
  "Node.js",
  "PostgreSQL",
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">About Me</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Passionate about pushing the boundaries of artificial intelligence to solve real-world problems
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              With over 5 years of experience in AI and machine learning, I&apos;ve had the privilege of working on
              cutting-edge projects that span from research to production. My journey began with a PhD in Computer
              Science, focusing on deep learning architectures for computer vision.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              I believe in the transformative power of AI to solve complex challenges across industries. From healthcare
              diagnostics to autonomous systems, I&apos;m driven by the potential to create intelligent solutions that make a
              meaningful impact.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              When I&apos;m not training models or optimizing algorithms, you&apos;ll find me contributing to open-source
              projects, mentoring aspiring AI engineers, or exploring the latest research papers.
            </p>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {highlights.map((highlight, index) => (
              <Card key={index} className="bg-card/50 border-border/50 hover:bg-card/80 transition-colors">
                <CardContent className="p-6 text-center">
                  <highlight.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                  <h3 className="font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-sm text-muted-foreground">{highlight.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="text-center">
          <h3 className="text-2xl font-bold mb-8">Technologies I Work With</h3>
          <div className="flex flex-wrap justify-center gap-3">
            {technologies.map((tech, index) => (
              <Badge key={index} variant="secondary" className="px-4 py-2 text-sm">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
