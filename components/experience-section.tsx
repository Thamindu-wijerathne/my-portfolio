import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, MapPin, Building } from "lucide-react"

const experiences = [
  {
    title: "Senior AI Engineer",
    company: "TechCorp AI",
    location: "San Francisco, CA",
    period: "2022 - Present",
    type: "Full-time",
    description:
      "Leading a team of 8 engineers developing next-generation AI products. Architected and deployed ML systems serving 10M+ users with 99.9% uptime.",
    achievements: [
      "Reduced model inference time by 60% through optimization",
      "Led migration to microservices architecture",
      "Mentored 5 junior engineers and 3 interns",
      "Published 4 papers in top-tier conferences",
    ],
    technologies: ["PyTorch", "Kubernetes", "AWS", "MLflow", "Apache Spark"],
  },
  {
    title: "Machine Learning Engineer",
    company: "DataFlow Systems",
    location: "Seattle, WA",
    period: "2020 - 2022",
    type: "Full-time",
    description:
      "Developed and deployed computer vision models for autonomous systems. Built end-to-end ML pipelines processing terabytes of sensor data.",
    achievements: [
      "Improved object detection accuracy by 25%",
      "Built real-time inference pipeline handling 1000 req/sec",
      "Reduced training time from weeks to days",
      "Implemented A/B testing framework for ML models",
    ],
    technologies: ["TensorFlow", "OpenCV", "Docker", "GCP", "Apache Beam"],
  },
  {
    title: "AI Research Intern",
    company: "Stanford AI Lab",
    location: "Stanford, CA",
    period: "2019 - 2020",
    type: "Internship",
    description:
      "Conducted research on neural architecture search and automated machine learning. Collaborated with PhD students on cutting-edge research projects.",
    achievements: [
      "Co-authored 2 research papers",
      "Developed novel NAS algorithm",
      "Presented findings at NeurIPS workshop",
      "Open-sourced research code with 500+ GitHub stars",
    ],
    technologies: ["PyTorch", "Ray Tune", "Weights & Biases", "Jupyter", "Git"],
  },
]

const education = [
  {
    degree: "Ph.D. in Computer Science",
    school: "Stanford University",
    location: "Stanford, CA",
    period: "2018 - 2022",
    focus: "Machine Learning & Computer Vision",
    thesis: "Efficient Neural Architecture Search for Real-time Applications",
  },
  {
    degree: "M.S. in Computer Science",
    school: "MIT",
    location: "Cambridge, MA",
    period: "2016 - 2018",
    focus: "Artificial Intelligence",
    thesis: "Deep Reinforcement Learning for Autonomous Navigation",
  },
]

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 bg-card/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 text-balance">Experience & Education</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            A journey through cutting-edge AI research and industry applications
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Experience */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <Building className="w-6 h-6 mr-3 text-primary" />
              Professional Experience
            </h3>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <Card key={index} className="bg-card/50 border-border/50 hover:bg-card/80 transition-colors">
                  <CardHeader>
                    <div className="flex justify-between items-start mb-2">
                      <div>
                        <CardTitle className="text-xl mb-1">{exp.title}</CardTitle>
                        <div className="flex items-center text-primary font-semibold mb-2">
                          <Building className="w-4 h-4 mr-2" />
                          {exp.company}
                        </div>
                      </div>
                      <Badge variant="outline">{exp.type}</Badge>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {exp.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {exp.location}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-4 leading-relaxed">{exp.description}</p>
                    <div className="mb-4">
                      <h4 className="font-semibold mb-2">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground">
                        {exp.achievements.map((achievement, aIndex) => (
                          <li key={aIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, tIndex) => (
                        <Badge key={tIndex} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <h3 className="text-2xl font-bold mb-8 flex items-center">
              <svg className="w-6 h-6 mr-3 text-primary" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z" />
              </svg>
              Education
            </h3>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <Card key={index} className="bg-card/50 border-border/50 hover:bg-card/80 transition-colors">
                  <CardHeader>
                    <CardTitle className="text-xl mb-1">{edu.degree}</CardTitle>
                    <div className="flex items-center text-primary font-semibold mb-2">
                      <Building className="w-4 h-4 mr-2" />
                      {edu.school}
                    </div>
                    <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-sm text-muted-foreground">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 mr-2" />
                        {edu.period}
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-4 h-4 mr-2" />
                        {edu.location}
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="mb-3">
                      <Badge variant="outline" className="mb-2">
                        Focus: {edu.focus}
                      </Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      <strong>Thesis:</strong> {edu.thesis}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Certifications */}
            <div className="mt-12">
              <h4 className="text-xl font-bold mb-6">Certifications</h4>
              <div className="grid gap-4">
                <Card className="bg-card/30 border-border/30">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h5 className="font-semibold">AWS Certified Machine Learning - Specialty</h5>
                        <p className="text-sm text-muted-foreground">Amazon Web Services</p>
                      </div>
                      <Badge variant="secondary">2023</Badge>
                    </div>
                  </CardContent>
                </Card>
                <Card className="bg-card/30 border-border/30">
                  <CardContent className="p-4">
                    <div className="flex justify-between items-center">
                      <div>
                        <h5 className="font-semibold">Google Cloud Professional ML Engineer</h5>
                        <p className="text-sm text-muted-foreground">Google Cloud</p>
                      </div>
                      <Badge variant="secondary">2022</Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
