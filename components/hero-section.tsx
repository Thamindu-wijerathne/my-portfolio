"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { ChevronDown, Github, Linkedin, Mail } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  const [text, setText] = useState("")
  const fullText = "AI & Software Enginner"

  useEffect(() => {
    let i = 0
    const timer = setInterval(() => {
      if (i < fullText.length) {
        setText(fullText.slice(0, i + 1))
        i++
      } else {
        clearInterval(timer)
      }
    }, 100)

    return () => clearInterval(timer)
  }, [])

  // CV download function
  function downloadCV() {
      const link = document.createElement("a");
      link.href = "/resume.pdf";
      link.download = "Thamindu_Wijerathne_CV.pdf";
      link.click();
  }

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated background */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-background to-card">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_50%)]" />
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-secondary/5 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <Image 
            src="/profile_pic.png"
            alt="AI Engineer Profile"
            className="rounded-full mx-auto shadow-2xl mt-10"
            width={300}          // Required
            height={300}         // Required
          />
        </div>

        <h1 className="text-4xl sm:text-6xl lg:text-7xl font-bold mb-6 text-balance mt-[-40px]">
          Hi, I&apos;m{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">Thamindu</span>
        </h1>

        <div className="text-xl sm:text-2xl lg:text-3xl text-muted-foreground mb-8 h-12 flex items-center justify-center">
          <span className="font-mono">{text}</span>
          <span className="animate-pulse ml-1">|</span>
        </div>

        <p className="text-lg sm:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty">
          Transforming complex data into intelligent solutions. Specializing in Software engineering, deep learning, computer vision, and
          natural language processing.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-3">
            View My Work
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3 bg-transparent hover:bg-primary/90" onClick={downloadCV}>
            Download Resume
          </Button>
        </div>

        <div className="flex justify-center space-x-6 mb-12">
          <a href="https://github.com/Thamindu-wijerathne" className="text-muted-foreground hover:text-primary transition-colors">
            <Github className="w-6 h-6" />
          </a>
          <a href="https://www.linkedin.com/in/thamindu-wijerathne-a2a6a12a9/" className="text-muted-foreground hover:text-primary transition-colors">
            <Linkedin className="w-6 h-6" />
          </a>
          <a href="mailto:Thamindu12ku@gmail.com" className="text-gray-500 hover:text-blue-500 transition-colors">
            <Mail className="w-6 h-6" />
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  )
}
