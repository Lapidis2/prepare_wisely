"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Brain, Download, Share2, Mail, Link2, Copy, CheckCircle } from "lucide-react"

export default function ExportPage() {
  const [shareUrl] = useState("https://skillsnapshot.dev/jp-analyzer-abc123")
  const [copied, setCopied] = useState(false)
  const [email, setEmail] = useState("")
  const [message, setMessage] = useState(
    "Hi! I'd like to share my developer portfolio analysis with you. Please check out my SkillSnapshot report.",
  )

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(shareUrl)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleDownloadPDF = () => {
    // In a real app, this would generate and download a PDF
    console.log("Downloading PDF report...")
  }

  const handleEmailShare = () => {
    // In a real app, this would send an email
    console.log("Sending email to:", email)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <Brain className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900">SkillSnapshot</h1>
            <span className="text-sm text-gray-500">Export & Share</span>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">Share Your Portfolio Analysis</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Export your analysis as a PDF report or share it with potential employers and collaborators.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-2">
          {/* Download Options */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Download className="h-5 w-5" />
                Download Report
              </CardTitle>
              <CardDescription>Get a comprehensive PDF report of your portfolio analysis</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="p-4 bg-gray-50 rounded-lg">
                <h4 className="font-medium mb-2">Report includes:</h4>
                <ul className="text-sm text-gray-600 space-y-1">
                  <li>• GitHub activity analysis</li>
                  <li>• Skill assessment and radar chart</li>
                  <li>• Job role fit scores</li>
                  <li>• Resume-GitHub alignment</li>
                  <li>• Personalized recommendations</li>
                </ul>
              </div>
              <Button onClick={handleDownloadPDF} className="w-full" size="lg">
                <Download className="h-4 w-4 mr-2" />
                Download PDF Report
              </Button>
            </CardContent>
          </Card>

          {/* Share Options */}
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Share2 className="h-5 w-5" />
                Share Analysis
              </CardTitle>
              <CardDescription>Share your portfolio analysis with others via link</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Shareable Link</Label>
                <div className="flex gap-2">
                  <Input value={shareUrl} readOnly className="font-mono text-sm" />
                  <Button onClick={handleCopyLink} variant="outline" size="icon">
                    {copied ? <CheckCircle className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
                  </Button>
                </div>
                {copied && <p className="text-sm text-green-600">Link copied to clipboard!</p>}
              </div>

              <div className="p-4 bg-blue-50 rounded-lg">
                <p className="text-sm text-blue-800">
                  <Link2 className="h-4 w-4 inline mr-1" />
                  This link will remain active for 30 days and can be viewed without registration.
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Email Share */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Mail className="h-5 w-5" />
                Email to Hiring Manager
              </CardTitle>
              <CardDescription>Send your portfolio analysis directly to potential employers</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="email">Recipient Email</Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="hiring@company.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="subject">Subject</Label>
                  <Input id="subject" defaultValue="Developer Portfolio Analysis - John Doe" readOnly />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea id="message" rows={4} value={message} onChange={(e) => setMessage(e.target.value)} />
              </div>

              <Button onClick={handleEmailShare} disabled={!email} className="w-full" size="lg">
                <Mail className="h-4 w-4 mr-2" />
                Send Email
              </Button>
            </CardContent>
          </Card>

          {/* Portfolio Integration */}
          <Card className="md:col-span-2">
            <CardHeader>
              <CardTitle>Add to Portfolio Website</CardTitle>
              <CardDescription>Embed your SkillSnapshot analysis in your personal website</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label>Embed Code</Label>
                <Textarea
                  readOnly
                  rows={3}
                  value={`<iframe src="${shareUrl}/embed" width="100%" height="600" frameborder="0"></iframe>`}
                  className="font-mono text-sm"
                />
              </div>
              <div className="flex gap-2">
                <Button variant="outline" className="flex-1 bg-transparent">
                  <Copy className="h-4 w-4 mr-2" />
                  Copy Embed Code
                </Button>
                <Button variant="outline" className="flex-1 bg-transparent">
                  View Preview
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
