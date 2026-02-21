"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Upload, Github, Target, Zap, Brain, BarChart3, Users } from "lucide-react"

export default function LandingPage() {
  const [resume, setResume] = useState<File | null>(null)
  const [githubUsername, setGithubUsername] = useState("")
  const [targetRole, setTargetRole] = useState("")
  const [isAnalyzing, setIsAnalyzing] = useState(false)
  const router = useRouter()

  const handleFileUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0]
    if (file && file.type === "application/pdf") {
      setResume(file)
    }
  }

  const handleAnalyze = async () => {
    if (!resume || !githubUsername) return

    setIsAnalyzing(true)
    
    setTimeout(() => {
      router.push(`/dashboard?github=${githubUsername}&role=${targetRole}`)
    }, 3000)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
  
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">SkillSnapshot</h1>
            <span className="text-sm text-gray-500">Developer Portfolio Analyzer</span>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Analyze Your Developer Portfolio</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Upload your resume and connect your GitHub to get personalized insights about your skills and discover the
            best job roles that match your profile.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="text-center p-6">
            <BarChart3 className="h-12 w-12 text-blue-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">GitHub Analysis</h3>
            <p className="text-gray-600">Deep dive into your coding patterns, languages, and contribution history</p>
          </div>
          <div className="text-center p-6">
            <Upload className="h-12 w-12 text-purple-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Resume Parsing</h3>
            <p className="text-gray-600">Extract and analyze skills, experience, and qualifications from your resume</p>
          </div>
          <div className="text-center p-6">
            <Users className="h-12 w-12 text-green-600 mx-auto mb-4" />
            <h3 className="font-semibold mb-2">Role Matching</h3>
            <p className="text-gray-600">
              Get scored recommendations for frontend, backend, fullstack, and seniority levels
            </p>
          </div>
        </div>

        {/* Upload Form */}
        <Card className="max-w-2xl mx-auto">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Zap className="h-5 w-5" />
              Start Your Analysis
            </CardTitle>
            <CardDescription>Upload your resume and provide your GitHub username to begin the analysis</CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Resume Upload */}
            <div className="space-y-2">
              <Label htmlFor="resume" className="flex items-center gap-2">
                <Upload className="h-4 w-4" />
                Upload Resume (PDF)
              </Label>
              <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                <input id="resume" type="file" accept=".pdf" onChange={handleFileUpload} className="hidden" />
                <label htmlFor="resume" className="cursor-pointer">
                  {resume ? (
                    <div className="text-green-600">
                      <Upload className="h-8 w-8 mx-auto mb-2" />
                      <p className="font-medium">{resume.name}</p>
                      <p className="text-sm text-gray-500">Click to change file</p>
                    </div>
                  ) : (
                    <div className="text-gray-500">
                      <Upload className="h-8 w-8 mx-auto mb-2" />
                      <p className="font-medium">Click to upload your resume</p>
                      <p className="text-sm">PDF files only</p>
                    </div>
                  )}
                </label>
              </div>
            </div>

            {/* GitHub Username */}
            <div className="space-y-2">
              <Label htmlFor="github" className="flex items-center gap-2">
                <Github className="h-4 w-4" />
                GitHub Username
              </Label>
              <div className="flex">
                <span className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                  github.com/
                </span>
                <Input
                  id="github"
                  placeholder="your-username"
                  value={githubUsername}
                  onChange={(e) => setGithubUsername(e.target.value)}
                  className="rounded-l-none"
                />
              </div>
            </div>

            {/* Target Role */}
            <div className="space-y-2">
              <Label className="flex items-center gap-2">
                <Target className="h-4 w-4" />
                Target Role (Optional)
              </Label>
              <Select value={targetRole} onValueChange={setTargetRole}>
                <SelectTrigger>
                  <SelectValue placeholder="Select a target role" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="frontend">Frontend Developer</SelectItem>
                  <SelectItem value="backend">Backend Developer</SelectItem>
                  <SelectItem value="fullstack">Fullstack Developer</SelectItem>
                  <SelectItem value="mobile">Mobile Developer</SelectItem>
                  <SelectItem value="devops">DevOps Engineer</SelectItem>
                  <SelectItem value="data">Data Scientist</SelectItem>
                  <SelectItem value="ml">ML Engineer</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Analyze Button */}
            <Button
              onClick={handleAnalyze}
              disabled={!resume || !githubUsername || isAnalyzing}
              className="w-full h-12 text-lg"
              size="lg"
            >
              {isAnalyzing ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                  Analyzing Portfolio...
                </>
              ) : (
                <>
                  <Zap className="h-5 w-5 mr-2" />
                  Analyze Portfolio
                </>
              )}
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
