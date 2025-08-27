"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, X, Send, Bot, User } from "lucide-react"

interface Message {
  id: number
  text: string
  sender: "user" | "bot"
  timestamp: Date
}

const predefinedResponses = {
  hello:
    "Hi there! I'm Alex's AI assistant. I can help you learn more about his experience, projects, and skills. What would you like to know?",
  projects:
    "Alex has worked on several exciting projects including neural style transfer, conversational AI, autonomous drone navigation, and medical image diagnosis. Which project interests you most?",
  skills:
    "Alex specializes in deep learning, computer vision, NLP, and MLOps. He's proficient in Python, PyTorch, TensorFlow, AWS, and many other technologies. Any specific skill you'd like to know more about?",
  experience:
    "Alex has 5+ years of experience as an AI engineer, currently working as a Senior AI Engineer at TechCorp AI. He previously worked at DataFlow Systems and interned at Stanford AI Lab.",
  contact:
    "You can reach Alex at alex.chen@aienginer.dev or connect with him on LinkedIn. He's currently available for new opportunities!",
  education:
    "Alex holds a Ph.D. in Computer Science from Stanford University and an M.S. from MIT, both focusing on AI and machine learning.",
  default:
    "That's an interesting question! For detailed information about Alex's work and experience, I'd recommend checking out his portfolio sections above or reaching out to him directly.",
}

export function AIChat() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hello! I'm Alex's AI assistant. I can answer questions about his experience, projects, and skills. How can I help you today?",
      sender: "bot",
      timestamp: new Date(),
    },
  ])
  const [inputValue, setInputValue] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const getResponse = (input: string): string => {
    const lowerInput = input.toLowerCase()

    if (lowerInput.includes("hello") || lowerInput.includes("hi")) {
      return predefinedResponses.hello
    } else if (lowerInput.includes("project")) {
      return predefinedResponses.projects
    } else if (lowerInput.includes("skill") || lowerInput.includes("technology")) {
      return predefinedResponses.skills
    } else if (lowerInput.includes("experience") || lowerInput.includes("work")) {
      return predefinedResponses.experience
    } else if (lowerInput.includes("contact") || lowerInput.includes("email")) {
      return predefinedResponses.contact
    } else if (lowerInput.includes("education") || lowerInput.includes("degree")) {
      return predefinedResponses.education
    } else {
      return predefinedResponses.default
    }
  }

  const handleSendMessage = async () => {
    if (!inputValue.trim()) return

    const userMessage: Message = {
      id: messages.length + 1,
      text: inputValue,
      sender: "user",
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsTyping(true)

    // Simulate AI thinking time
    setTimeout(() => {
      const botResponse: Message = {
        id: messages.length + 2,
        text: getResponse(inputValue),
        sender: "bot",
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botResponse])
      setIsTyping(false)
    }, 1500)
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleSendMessage()
    }
  }

  return (
    <>
      {/* Chat Toggle Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full shadow-lg bg-primary hover:bg-primary/90"
        size="sm"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageCircle className="w-6 h-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 z-40 w-80 sm:w-96 h-96 bg-card/95 backdrop-blur-sm border-border shadow-2xl">
          <CardHeader className="pb-3">
            <CardTitle className="text-lg flex items-center">
              <Bot className="w-5 h-5 mr-2 text-primary" />
              AI Assistant
            </CardTitle>
          </CardHeader>

          <CardContent className="flex flex-col h-full p-0">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message) => (
                <div key={message.id} className={`flex ${message.sender === "user" ? "justify-end" : "justify-start"}`}>
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.sender === "user"
                        ? "bg-primary text-primary-foreground"
                        : "bg-muted text-muted-foreground"
                    }`}
                  >
                    <div className="flex items-start space-x-2">
                      {message.sender === "bot" && <Bot className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                      {message.sender === "user" && <User className="w-4 h-4 mt-0.5 flex-shrink-0" />}
                      <p className="text-sm leading-relaxed">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}

              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-muted text-muted-foreground p-3 rounded-lg">
                    <div className="flex items-center space-x-2">
                      <Bot className="w-4 h-4" />
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce" />
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce delay-100" />
                        <div className="w-2 h-2 bg-current rounded-full animate-bounce delay-200" />
                      </div>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Input */}
            <div className="p-4 border-t border-border">
              <div className="flex space-x-2">
                <Input
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask about Alex's experience..."
                  className="flex-1"
                />
                <Button onClick={handleSendMessage} size="sm">
                  <Send className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  )
}
