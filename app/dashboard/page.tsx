"use client"

import { Suspense, useState } from "react"
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarTrigger,
  SidebarInset,
} from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Brain,
  BarChart3,
  Clock,
  FileText,
  Target,
  Star,
  GitFork,
  Activity,
  Code,
  Award,
  TrendingUp,
} from "lucide-react"
import { SkillRadarChart } from "@/components/skill-radar-chart"
import { LanguageChart } from "@/components/language-chart"
import { ActivityChart } from "@/components/activity-chart"
import { RoleMatchCard } from "@/components/role-match-card"

function DashboardContent() {
  const [activeSection, setActiveSection] = useState("overview")

  // Mock data - in real app, this would come from API
  const githubStats = {
    username: "john-doe",
    stars: 234,
    forks: 89,
    repos: 42,
    followers: 156,
    contributions: 1247,
  }

  const topLanguages = [
    { name: "JavaScript", percentage: 35, color: "#f7df1e" },
    { name: "TypeScript", percentage: 28, color: "#3178c6" },
    { name: "Python", percentage: 20, color: "#3776ab" },
    { name: "React", percentage: 15, color: "#61dafb" },
    { name: "Other", percentage: 2, color: "#8884d8" },
  ]

  const skillsData = [
    { skill: "Frontend", score: 85 },
    { skill: "Backend", score: 72 },
    { skill: "Database", score: 68 },
    { skill: "DevOps", score: 45 },
    { skill: "Mobile", score: 35 },
    { skill: "Testing", score: 78 },
  ]

  const roleMatches = [
    { role: "Frontend Developer", score: 92, level: "Senior", color: "bg-green-500" },
    { role: "Fullstack Developer", score: 85, level: "Mid-Senior", color: "bg-blue-500" },
    { role: "Backend Developer", score: 78, level: "Mid-Level", color: "bg-purple-500" },
    { role: "Mobile Developer", score: 45, level: "Junior", color: "bg-orange-500" },
  ]

  const resumeSkills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Python",
    "SQL",
    "Git",
    "AWS",
    "Docker",
    "MongoDB",
  ]

  const menuItems = [
    { id: "overview", label: "Overview", icon: BarChart3 },
    { id: "skills", label: "Skill Map", icon: Target },
    { id: "timeline", label: "Timeline", icon: Clock },
    { id: "resume", label: "Resume Match", icon: FileText },
    { id: "roles", label: "Job Fit Score", icon: Award },
  ]

  return (
    <SidebarProvider>
      <div className="flex min-h-screen w-full">
        <Sidebar className="border-r">
          <SidebarHeader className="border-b p-4">
            <div className="flex items-center gap-2">
              <Brain className="h-6 w-6 text-blue-600" />
              <span className="font-semibold">SkillSnapshot</span>
            </div>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Analysis</SidebarGroupLabel>
              <SidebarGroupContent>
                <SidebarMenu>
                  {menuItems.map((item) => (
                    <SidebarMenuItem key={item.id}>
                      <SidebarMenuButton
                        onClick={() => setActiveSection(item.id)}
                        isActive={activeSection === item.id}
                        className="w-full justify-start"
                      >
                        <item.icon className="h-4 w-4" />
                        <span>{item.label}</span>
                      </SidebarMenuButton>
                    </SidebarMenuItem>
                  ))}
                </SidebarMenu>
              </SidebarGroupContent>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>

        <SidebarInset className="flex-1 ml-0">
          <header className="flex h-16 shrink-0 items-center gap-2 border-b px-6 bg-white">
            <SidebarTrigger className="-ml-1" />
            <div className="h-4 w-px bg-gray-200 mx-2" />
            <h1 className="text-xl font-semibold">Portfolio Dashboard</h1>
            <Badge variant="secondary" className="ml-auto">
              @{githubStats.username}
            </Badge>
          </header>

          <main className="flex-1 px-8 py-8 bg-gray-50 overflow-auto min-h-screen ml-4">
            <div className="w-full max-w-none space-y-8 pl-4">
              {/* GitHub Stats Overview */}
              <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-8">
                <Card className="shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2">
                      <Star className="h-4 w-4 text-yellow-500" />
                      <span className="text-sm text-gray-600">Stars</span>
                    </div>
                    <p className="text-2xl font-bold">{githubStats.stars}</p>
                  </CardContent>
                </Card>
                <Card className="shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2">
                      <GitFork className="h-4 w-4 text-blue-500" />
                      <span className="text-sm text-gray-600">Forks</span>
                    </div>
                    <p className="text-2xl font-bold">{githubStats.forks}</p>
                  </CardContent>
                </Card>
                <Card className="shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2">
                      <Code className="h-4 w-4 text-green-500" />
                      <span className="text-sm text-gray-600">Repos</span>
                    </div>
                    <p className="text-2xl font-bold">{githubStats.repos}</p>
                  </CardContent>
                </Card>
                <Card className="shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-purple-500" />
                      <span className="text-sm text-gray-600">Contributions</span>
                    </div>
                    <p className="text-2xl font-bold">{githubStats.contributions}</p>
                  </CardContent>
                </Card>
                <Card className="shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="h-4 w-4 text-orange-500" />
                      <span className="text-sm text-gray-600">Followers</span>
                    </div>
                    <p className="text-2xl font-bold">{githubStats.followers}</p>
                  </CardContent>
                </Card>
              </div>

              {/* Dynamic Content Based on Active Section */}
              <div className="w-full">
                {activeSection === "overview" && (
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    <Card className="shadow-sm">
                      <CardHeader>
                        <CardTitle>Language Distribution</CardTitle>
                        <CardDescription>Based on your GitHub repositories</CardDescription>
                      </CardHeader>
                      <CardContent className="p-6">
                        <LanguageChart data={topLanguages} />
                      </CardContent>
                    </Card>

                    <Card className="shadow-sm">
                      <CardHeader>
                        <CardTitle>Contribution Activity</CardTitle>
                        <CardDescription>Last 12 months</CardDescription>
                      </CardHeader>
                      <CardContent className="p-6">
                        <ActivityChart />
                      </CardContent>
                    </Card>
                  </div>
                )}

                {activeSection === "skills" && (
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    <Card className="shadow-sm">
                      <CardHeader>
                        <CardTitle>Skill Radar</CardTitle>
                        <CardDescription>Your technical skill distribution</CardDescription>
                      </CardHeader>
                      <CardContent className="p-6">
                        <SkillRadarChart data={skillsData} />
                      </CardContent>
                    </Card>

                    <Card className="shadow-sm">
                      <CardHeader>
                        <CardTitle>Skill Breakdown</CardTitle>
                        <CardDescription>Detailed skill analysis</CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4 p-6">
                        {skillsData.map((skill) => (
                          <div key={skill.skill} className="space-y-2">
                            <div className="flex justify-between">
                              <span className="text-sm font-medium">{skill.skill}</span>
                              <span className="text-sm text-gray-500">{skill.score}%</span>
                            </div>
                            <Progress value={skill.score} className="h-2" />
                          </div>
                        ))}
                      </CardContent>
                    </Card>
                  </div>
                )}

                {activeSection === "roles" && (
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {roleMatches.map((role) => (
                      <RoleMatchCard key={role.role} {...role} />
                    ))}
                  </div>
                )}

                {activeSection === "resume" && (
                  <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
                    <Card className="shadow-sm">
                      <CardHeader>
                        <CardTitle>Extracted Skills</CardTitle>
                        <CardDescription>Skills found in your resume</CardDescription>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="flex flex-wrap gap-2">
                          {resumeSkills.map((skill) => (
                            <Badge key={skill} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </CardContent>
                    </Card>

                    <Card className="shadow-sm">
                      <CardHeader>
                        <CardTitle>Resume-GitHub Match</CardTitle>
                        <CardDescription>How well your GitHub aligns with your resume</CardDescription>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="flex justify-between items-center">
                            <span>Overall Match</span>
                            <span className="font-bold text-green-600">87%</span>
                          </div>
                          <Progress value={87} className="h-3" />
                          <div className="text-sm text-gray-600">
                            Your GitHub activity strongly supports the skills mentioned in your resume.
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}

                {activeSection === "timeline" && (
                  <div className="max-w-4xl">
                    <Card className="shadow-sm">
                      <CardHeader>
                        <CardTitle>Development Timeline</CardTitle>
                        <CardDescription>Your coding journey over time</CardDescription>
                      </CardHeader>
                      <CardContent className="p-6">
                        <div className="space-y-4">
                          <div className="flex items-center gap-4 p-4 border rounded-lg">
                            <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            <div>
                              <p className="font-medium">Started Frontend Development</p>
                              <p className="text-sm text-gray-500">2+ years ago</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 p-4 border rounded-lg">
                            <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                            <div>
                              <p className="font-medium">Learned Backend Technologies</p>
                              <p className="text-sm text-gray-500">1.5 years ago</p>
                            </div>
                          </div>
                          <div className="flex items-center gap-4 p-4 border rounded-lg">
                            <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                            <div>
                              <p className="font-medium">Advanced Full-Stack Projects</p>
                              <p className="text-sm text-gray-500">6 months ago</p>
                            </div>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </div>
                )}
              </div>
            </div>
          </main>
        </SidebarInset>
      </div>
    </SidebarProvider>
  )
}

export default function Dashboard() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <DashboardContent />
    </Suspense>
  )
}
