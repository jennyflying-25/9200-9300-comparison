"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Network, Shield, Zap, ArrowRight, Menu, X, Download } from "lucide-react"

export default function AxonodeLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
    interestedProduct: "",
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
    setIsMenuOpen(false)
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    console.log("Form submitted:", formData)

    setIsSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-gray-200 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="font-bold text-xl text-slate-800">Axonode</div>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-6">
                <button
                  onClick={() => scrollToSection("hero")}
                  className="text-gray-600 hover:text-slate-800 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Home
                </button>
                <button
                  onClick={() => scrollToSection("comparison")}
                  className="text-gray-600 hover:text-slate-800 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Switch Guide
                </button>
                <button
                  onClick={() => scrollToSection("budget-optimization")}
                  className="text-gray-600 hover:text-slate-800 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Budget Solutions
                </button>
                <button
                  onClick={() => scrollToSection("products")}
                  className="text-gray-600 hover:text-slate-800 px-3 py-2 text-sm font-medium transition-colors"
                >
                  Products
                </button>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-600 hover:text-slate-800 px-3 py-2 text-sm font-medium transition-colors"
                >
                  About
                </button>
                <button
                  onClick={() => scrollToSection("contact")}
                  className="bg-slate-800 text-white px-4 py-2 rounded-md text-sm font-medium hover:bg-slate-700 transition-colors"
                >
                  Get Quote
                </button>
              </div>
            </div>
            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 hover:text-slate-800 p-2">
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <button
                onClick={() => scrollToSection("hero")}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-slate-800 w-full text-left"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("comparison")}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-slate-800 w-full text-left"
              >
                Switch Guide
              </button>
              <button
                onClick={() => scrollToSection("budget-optimization")}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-slate-800 w-full text-left"
              >
                Budget Solutions
              </button>
              <button
                onClick={() => scrollToSection("products")}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-slate-800 w-full text-left"
              >
                Products
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-slate-800 w-full text-left"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="block px-3 py-2 text-base font-medium text-gray-600 hover:text-slate-800 w-full text-left"
              >
                Get Quote
              </button>
            </div>
          </div>
        )}
      </nav>

      <section
        id="hero"
        className="relative bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white min-h-[80vh] flex items-center"
      >
        <div className="absolute inset-0">
          <img
            src="https://raw.githubusercontent.com/jennyflying-25/9200l-/main/img/1755158427202.jpg"
            alt="Enterprise data center with high-performance network infrastructure and redundant power systems"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-slate-900/90 via-slate-800/80 to-slate-900/90" />
        </div>
        <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="max-w-4xl">
            <h1 className="font-bold text-4xl sm:text-5xl md:text-6xl mb-6 leading-tight">
              Cisco 9200L vs 9300: <span className="text-blue-400">The Engineer's Guide</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8 leading-relaxed max-w-2xl">
              End the debate. Get the unbiased, data-driven comparison you need to choose the right switch and optimize
              your budget.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3"
                onClick={() => scrollToSection("comparison")}
              >
                View Technical Comparison <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-gray-400 text-gray-300 hover:bg-white/10 px-8 py-3 bg-transparent"
                onClick={() => scrollToSection("contact")}
              >
                Request Compatibility Matrix
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl md:text-4xl text-slate-800 mb-4">Why Network Engineers Trust Axonode</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Reliable, compatible optics for your Cisco, Aruba, Juniper, and more hardware, backed by expert support.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-4 pt-8">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-blue-200 transition-colors">
                  <Shield className="h-8 w-8 text-blue-600" />
                </div>
                <CardTitle className="font-bold text-xl text-slate-800">Guaranteed Compatibility </CardTitle>
              </CardHeader>
              <CardContent className="pb-8">
                <p className="text-gray-600 leading-relaxed">
                  Rigorously tested in real Cisco Catalyst 9200L and 9300 switches—across multiple IOS-XE firmware
                  versions. We guarantee seamless performance with our SFP, SFP+, and DAC solutions, freeing you from
                  compatibility guesswork.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-4 pt-8">
                <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-amber-200 transition-colors">
                  <Zap className="h-8 w-8 text-amber-600" />
                </div>
                <CardTitle className="font-bold text-xl text-slate-800"> Expert Technical Support </CardTitle>
              </CardHeader>
              <CardContent className="pb-8">
                <p className="text-gray-600 leading-relaxed">
                  Our support team is composed of veteran optical engineers, not just support agents. Get direct access
                  to specialists with deep, hands-on Cisco, Aruba, Juniper, and more brands' experience.
                </p>
              </CardContent>
            </Card>
            <Card className="text-center group hover:shadow-lg transition-all duration-300 border-0 shadow-md">
              <CardHeader className="pb-4 pt-8">
                <div className="w-16 h-16 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-emerald-200 transition-colors">
                  <Network className="h-8 w-8 text-emerald-600" />
                </div>
                <CardTitle className="font-bold text-xl text-slate-800">Intelligent TCO Optimization</CardTitle>
              </CardHeader>
              <CardContent className="pb-8">
                <p className="text-gray-600 leading-relaxed">
                  Stop overpaying for OEM optics. Reduce your total cost of ownership by up to 70% with our compatible
                  10G SFP+ and 1G SFP modules, while meeting or exceeding OEM performance and reliability standards.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <section id="comparison" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl md:text-4xl text-slate-800 mb-4">
              Cisco Catalyst 9200L vs. 9300: The Definitive Comparison
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              An objective, data-driven analysis to help you choose the right switch for your network and budget.
            </p>
          </div>

          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="font-bold text-2xl text-slate-800 mb-4">The 30-Second Decision Guide</h3>
              <p className="text-gray-600 max-w-2xl mx-auto">Find your perfect fit in under 30 seconds.</p>
            </div>

            <div className="grid lg:grid-cols-2 gap-8">
              <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-blue-50 to-blue-100 border-b">
                  <CardTitle className="font-bold text-xl text-slate-800 flex items-center gap-3">
                    <div className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    Choose the Catalyst 9300 if...
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-800">You need to support high-speed Wi-Fi 6/7</p>
                        <p className="text-sm text-gray-600">
                          Its mGig ports are essential for future wireless performance.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-800">Maximum reliability is non-negotiable</p>
                        <p className="text-sm text-gray-600">StackPower ensures uptime for critical PoE devices.</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-800">You need a flexible, multi-role switch</p>
                        <p className="text-sm text-gray-600">
                          Acts as a powerful access, distribution, or compact core.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-800">You need to drive high-power IoT devices</p>
                        <p className="text-sm text-gray-600">PTZ cameras, digital signage with UPOE/UPOE+ (60W/90W)</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-lg bg-white hover:shadow-xl transition-shadow duration-300">
                <CardHeader className="bg-gradient-to-r from-slate-50 to-slate-100 border-b">
                  <CardTitle className="font-bold text-xl text-slate-800 flex items-center gap-3">
                    <div className="w-8 h-8 bg-slate-600 rounded-full flex items-center justify-center">
                      <CheckCircle className="h-5 w-5 text-white" />
                    </div>
                    Choose the Catalyst 9200L if...
                  </CardTitle>
                </CardHeader>
                <CardContent className="p-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-800">You are replacing older 2960-X/XR switches</p>
                        <p className="text-sm text-gray-600">
                          It's the direct, modern successor with rock-solid reliability.
                        </p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-800">Your budget is the primary concern</p>
                        <p className="text-sm text-gray-600">Need the best value for a solid L2 access layer</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0 mt-0.5" />
                      <div>
                        <p className="font-medium text-slate-800">Your network consists of 1G user devices</p>
                        <p className="text-sm text-gray-600">Perfect for standard desktops, phones, and current APs.</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mb-16"></div>

          <div className="mb-16">
            <Card className="border-0 shadow-lg overflow-hidden">
              <CardHeader className="bg-slate-50 border-b">
                <CardTitle className="font-bold text-xl text-slate-800">
                  Detailed Feature Comparison & Selection Guide
                </CardTitle>
                <CardDescription className="text-gray-600">
                  Technical specifications with practical deployment insights for informed decision-making
                </CardDescription>
              </CardHeader>
              <div className="overflow-x-auto">
                <table className="w-full text-sm text-left text-gray-500">
                  <thead className="text-xs text-gray-700 uppercase bg-gray-100">
                    <tr>
                      <th scope="col" className="px-6 py-3">
                        Feature
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Catalyst 9200L
                      </th>
                      <th scope="col" className="px-6 py-3">
                        Catalyst 9300 / 9300L
                      </th>
                      <th scope="col" className="px-6 py-3">
                        The "So What?" & Who Should Choose?
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="bg-white border-b">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Market Position
                      </th>
                      <td className="px-6 py-4">
                        <strong>Successor to 2960X/XR</strong>
                        <br />
                        High-value enterprise access
                      </td>
                      <td className="px-6 py-4">
                        <strong>Successor to 3850</strong>
                        <br />
                        High-performance access & compact core
                      </td>
                      <td className="px-6 py-4">
                        <strong>Summary:</strong> The 9200L is the pragmatic choice for reliable 1G access. The 9300 is
                        the strategic, future-proof choice for high-speed wireless and mission-critical applications.
                      </td>
                    </tr>
                    <tr className="bg-gray-50 border-b">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Stacking Bandwidth
                      </th>
                      <td className="px-6 py-4">StackWise-80 (80 Gbps)</td>
                      <td className="px-6 py-4">
                        StackWise-480 (9300)
                        <br />
                        StackWise-320 (9300L)
                      </td>
                      <td className="px-6 py-4">
                        The 9300 series offers <strong>4x to 6x more stacking bandwidth</strong> than the 9200L. This
                        means faster communication between stacked switches, preventing performance bottlenecks in
                        high-density and high-traffic environments.
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Power Stacking (StackPower)
                      </th>
                      <td className="px-6 py-4">
                        <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                          Not Supported
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                          Supported (9300/X models only)
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <strong>Why It Matters:</strong> This is the 9300's <strong>killer feature</strong> for
                        reliability. It creates a shared power pool for N+1 redundancy.This ensures your critical PoE
                        devices—like security cameras, access points, and door access systems—remain online even if a
                        power supply fails. <br />
                        <strong>Choose 9300 if</strong> business continuity is non-negotiable, the Catalyst 9300 is the
                        definitive choice.
                      </td>
                    </tr>
                    <tr className="bg-gray-50 border-b">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        mGig Port Support (Access)
                      </th>
                      <td className="px-6 py-4">
                        <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                          Not Supported (Only a few new models offer fixed mGig Uplinks))
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                          Widely Available (on Access Ports)
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        This is the <strong>number one reason to upgrade</strong>. Standard 9200L{" "}
                        <strong>access ports are 1G only</strong>, creating a bottleneck for modern devices. The 9300's
                        mGig access ports are essential to unleash the full potential of Wi-Fi 6/6E/7 APs. <br />
                        <strong>Selection Advice:</strong> If you are deploying, or plan to deploy, a high-speed
                        wireless network, the <strong>Catalyst 9300 is the only choice</strong> to protect your
                        investment and avoid performance throttling.
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        UPOE/UPOE+ (60W/90W)
                      </th>
                      <td className="px-6 py-4">
                        <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                          Not Supported (PoE+ 30W max)
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                          Supported (on UPOE/UPOE+ models)
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <strong>For High-Power IoT.</strong> The 9300 can power devices like PTZ cameras, digital
                        signage, and smart lighting, which the 9200L cannot.
                      </td>
                    </tr>
                    <tr className="bg-gray-50 border-b">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Uplink Ports
                      </th>
                      <td className="px-6 py-4">
                        <strong>Fixed</strong>
                        <br />
                        (4x 1G SFP or 4x 10G SFP+)
                      </td>
                      <td className="px-6 py-4">
                        <strong>Modular</strong>
                        <br />
                        (1G up to 100G modules)
                      </td>
                      <td className="px-6 py-4">
                        <strong>Investment Protection.</strong> The 9300's modularity offers unmatched flexibility for
                        future speed upgrades, allowing you to move from 10G to 100G without replacing the entire
                        switch.
                      </td>
                    </tr>
                    <tr className="bg-white border-b">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Hardware Specs
                      </th>
                      <td className="px-6 py-4">
                        DRAM: <strong>2GB</strong>
                        <br />
                        MAC Table: <strong>16,000</strong>
                        <br />
                        IPv4 Routes: <strong>11,000</strong>
                      </td>
                      <td className="px-6 py-4">
                        DRAM: <strong>8GB+</strong>
                        <br />
                        MAC Table: <strong>32,000+</strong>
                        <br />
                        IPv4 Routes: <strong>32,000+</strong>
                      </td>
                      <td className="px-6 py-4">
                        <strong>More Horsepower.</strong> The 9300 has a much stronger "engine" and more memory,
                        allowing it to handle more devices, larger networks, and more complex security policies without
                        performance degradation.
                      </td>
                    </tr>
                    <tr className="bg-gray-50 border-b">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Security Feature (ETA)
                      </th>
                      <td className="px-6 py-4">
                        <span className="bg-red-100 text-red-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                          Not Supported
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <span className="bg-green-100 text-green-800 text-xs font-medium me-2 px-2.5 py-0.5 rounded">
                          Supported
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <strong>Advanced Threat Detection.</strong> The 9300 supports Encrypted Traffic Analytics (ETA)
                        to identify malware in encrypted traffic *without* decryption, providing a higher level of
                        security.
                      </td>
                    </tr>
                    <tr className="bg-white">
                      <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                        Licensing Model
                      </th>
                      <td className="px-6 py-4">
                        Perpetual License +<br />
                        Mandatory Initial DNA Sub
                      </td>
                      <td className="px-6 py-4">
                        Perpetual License +<br />
                        Mandatory Initial DNA Sub
                      </td>
                      <td className="px-6 py-4">
                        The licensing model is identical for both. The core network functions (Network
                        Essentials/Advantage) are <strong>perpetual licenses</strong> and last forever. A Cisco DNA
                        subscription is mandatory for the initial purchase, but{" "}
                        <strong>
                          if you do not use Cisco DNA Center, the subscription does NOT need to be renewed.
                        </strong>{" "}
                        The switch will continue to operate with its full perpetual features. This is the single biggest
                        point of confusion, now clarified.
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </Card>
          </div>

          <div className="space-y-20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h4 className="font-bold text-2xl text-slate-800 mb-4">
                  Technical Deep Dive: StackPower Redundancy Architecture
                </h4>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  StackPower is the Catalyst 9300's killer feature for business continuity. It creates a single, shared
                  power pool across the stack, providing automatic, N+1 failover protection.
                </p>
                <p className="text-gray-600 leading-relaxed text-lg">
                  When one power supply fails, the remaining units instantly redistribute power, ensuring critical
                  services like IP phones, wireless APs, and security cameras stay online without interruption.
                </p>
              </div>
              <div className="text-center">
                <img
                  src="https://raw.githubusercontent.com/jennyflying-25/9200l-/main/img/1755158427195.jpg"
                  alt="StackPower redundancy diagram showing power sharing across Cisco Catalyst 9300 switch stack with automatic failover capabilities"
                  className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-500 italic mt-4">
                  StackPower ensures continuous operation, even during PSU failure scenarios.
                </p>
              </div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="lg:order-last">
                <h4 className="font-bold text-2xl text-slate-800 mb-4">
                  Performance Analysis: The mGig Technology Impact
                </h4>
                <p className="text-gray-600 leading-relaxed text-lg mb-4">
                  Connecting high-performance Wi-Fi 6/6E/7 access points to a standard 1G port creates a significant
                  performance bottleneck, limiting wireless throughput and degrading the user experience.
                </p>
                <p className="text-gray-600 leading-relaxed">
                  The Catalyst 9300's mGig ports (2.5G/5G/10G) eliminate this bottleneck, maximizing the ROI on your
                  wireless investment and future-proofing your network for years to come.
                </p>
              </div>
              <div className="text-center">
                <img
                  src="https://raw.githubusercontent.com/jennyflying-25/9200l-/main/img/1755158427196.jpg"
                  alt="Performance comparison showing mGig vs 1G bottleneck impact on Wi-Fi 6 access point throughput and user experience"
                  className="w-full max-w-lg mx-auto rounded-lg shadow-lg"
                />
                <p className="text-sm text-gray-500 italic mt-4">
                  The diagram clearly shows how mGig ports unlock full Wi-Fi 6 performance, eliminating infrastructure
                  bottlenecks.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center"></div>
        </div>
      </section>

      <section id="budget-optimization" className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl md:text-4xl text-slate-800 mb-4">
              Beyond the Switch: The Smartest Way to Optimize Your Budget
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              The switch is just the beginning. Strategic sourcing of compatible transceivers is the most effective way
              to reduce your project's Total Cost of Ownership (TCO) without compromising on quality.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-blue-50 to-blue-100">
              <CardContent className="p-8">
                <div className="text-3xl font-bold text-blue-600 mb-2">Up to 70%</div>
                <h3 className="font-semibold text-lg text-slate-800 mb-3">Cost Savings</h3>
                <p className="text-gray-600">
                  Typical savings on optical transceivers compared to OEM pricing while maintaining identical
                  performance specifications
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-emerald-50 to-emerald-100">
              <CardContent className="p-8">
                <div className="text-3xl font-bold text-emerald-600 mb-2">99.99%</div>
                <h3 className="font-semibold text-lg text-slate-800 mb-3">Compatibility Guarantee</h3>
                <p className="text-gray-600">
                  Verified compatibility across Cisco platforms through comprehensive testing and quality assurance
                  protocols
                </p>
              </CardContent>
            </Card>
            <Card className="text-center border-0 shadow-lg bg-gradient-to-br from-amber-50 to-amber-100">
              <CardContent className="p-8">
                <div className="text-3xl font-bold text-amber-600 mb-2">24/7</div>
                <h3 className="font-semibold text-lg text-slate-800 mb-3">Technical Support</h3>
                <p className="text-gray-600">
                  Professional engineering support with rapid response times and comprehensive warranty coverage
                </p>
              </CardContent>
            </Card>
          </div>

          <div className="bg-slate-50 rounded-lg p-8">
            <h3 className="font-bold text-xl text-slate-800 mb-4">Investment Protection Strategy</h3>
            <p className="text-gray-600 leading-relaxed mb-4">
              By sourcing compatible optical components at optimized pricing, network engineers can allocate saved
              budget toward:
            </p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">Additional switch ports for future expansion</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">Enhanced power redundancy solutions</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">Advanced monitoring and management tools</span>
                </div>
              </div>
              <div className="space-y-3">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">Extended warranty and support coverage</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">Professional services and implementation</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-emerald-600 flex-shrink-0" />
                  <span className="text-gray-700">Future-proofing with higher-tier switch models</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-bold text-3xl md:text-4xl text-slate-800 mb-4">Cisco-Compatible Optical Solutions</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              OEM-equivalent performance with comprehensive compatibility testing, quality certifications, and
              professional warranty coverage.
            </p>
          </div>

          <div className="mb-12">
            <Card className="border-0 shadow-lg bg-white">
              <CardHeader className="bg-slate-50 border-b">
                <CardTitle className="font-bold text-xl text-slate-800">Quality Assurance & Testing Protocol</CardTitle>
              </CardHeader>
              <CardContent className="p-6">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="text-center">
                    <div className="w-12 h-12 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Shield className="h-6 w-6 text-blue-600" />
                    </div>
                    <h4 className="font-semibold text-slate-800 mb-2">Compatibility Testing</h4>
                    <p className="text-sm text-gray-600">
                      Validated across multiple firmware versions and hardware configurations
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-emerald-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <CheckCircle className="h-6 w-6 text-emerald-600" />
                    </div>
                    <h4 className="font-semibold text-slate-800 mb-2">Quality Certifications</h4>
                    <p className="text-sm text-gray-600">
                      ISO 9001, RoHS compliance, and industry standard certifications
                    </p>
                  </div>
                  <div className="text-center">
                    <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-3">
                      <Zap className="h-6 w-6 text-amber-600" />
                    </div>
                    <h4 className="font-semibold text-slate-800 mb-2">Warranty Coverage</h4>
                    <p className="text-sm text-gray-600">
                      Comprehensive 3-year warranty with advance replacement service
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <Card className="border-0 shadow-lg overflow-hidden">
            <CardHeader className="bg-slate-50 border-b">
              <CardTitle className="font-bold text-xl text-slate-800">
                Compatibility Matrix - Cisco Catalyst Series
              </CardTitle>
            </CardHeader>
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-100 border-b border-gray-200">
                    <th className="px-6 py-4 text-left font-semibold text-slate-800">Category</th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-800">Module Type</th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-800">Cisco Part Number</th>
                    <th className="px-6 py-4 text-left font-semibold text-slate-800">Axonode Model</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 font-medium text-slate-800">10G SFP+ Optics</td>
                    <td className="px-6 py-4 text-gray-700">SR (Multi-Mode, 300m)</td>
                    <td className="px-6 py-4 text-gray-700">SFP-10G-SR</td>
                    <td className="px-6 py-4 font-semibold">
                      <a
                        href="https://www.axonodesolution.com/1G_10G_SFP_Transceiver-37/20.html"
                        className="text-blue-600 hover:underline"
                      >
                        A-SFP-10G-SR-C
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <td className="px-6 py-4"></td>
                    <td className="px-6 py-4 text-gray-700">LR (Single-Mode, 10km)</td>
                    <td className="px-6 py-4 text-gray-700">SFP-10G-LR</td>
                    <td className="px-6 py-4 font-semibold">
                      <a
                        href="https://www.axonodesolution.com/1G_10G_SFP_Transceiver-37/20.html"
                        className="text-blue-600 hover:underline"
                      >
                        A-SFP-10G-LR-C
                      </a>
                    </td>
                  </tr>
                  <tr className="border-b border-gray-100">
                    <td className="px-6 py-4 font-medium text-slate-800">1G SFP Optics</td>
                    <td className="px-6 py-4 text-gray-700">SX (Multi-Mode, 550m)</td>
                    <td className="px-6 py-4 text-gray-700">GLC-SX-MMD</td>
                    <td className="px-6 py-4 font-semibold">
                      <a
                        href="https://www.axonodesolution.com/Industrial_SFP_Transceivers-15/18.html"
                        className="text-blue-600 hover:underline"
                      >
                        A-SFP-1G-SX-C
                      </a>
                    </td>
                  </tr>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <td className="px-6 py-4"></td>
                    <td className="px-6 py-4 text-gray-700">LX (Single-Mode, 10km)</td>
                    <td className="px-6 py-4 text-gray-700">GLC-LH-SMD</td>
                    <td className="px-6 py-4 font-semibold">
                      <a
                        href="https://www.axonodesolution.com/Industrial_SFP_Transceivers-15/18.html"
                        className="text-blue-600 hover:underline"
                      >
                        A-SFP-1G-LX-C
                      </a>
                    </td>
                  </tr>
                  <tr>
                    <td className="px-6 py-4 font-medium text-slate-800">Direct Attach</td>
                    <td className="px-6 py-4 text-gray-700">10G DAC (1m)</td>
                    <td className="px-6 py-4 text-gray-700">SFP-H10GB-CU1M</td>
                    <td className="px-6 py-4 font-semibold">
                      <a
                        href="https://www.axonodesolution.com/AOC_DAC_cable-16/23.html"
                        className="text-blue-600 hover:underline"
                      >
                        A-DAC-SFP10G-1M
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </Card>
          <div className="mt-8 text-center">
            <p className="text-gray-600 mb-4">Industrial Grade (-40°C to +85°C) and custom cable lengths available</p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3"
                onClick={() => scrollToSection("contact")}
              >
                Request Compatibility List
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-slate-300 text-slate-700 hover:bg-slate-50 px-6 py-3 bg-transparent"
                onClick={() => scrollToSection("contact")}
              >
                <Download className="mr-2 h-4 w-4" />
                Download Product Specifications
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-5 gap-12">
            <div className="lg:col-span-2" id="about">
              <h2 className="font-bold text-3xl md:text-4xl text-slate-800 mb-6">
                About Axonode: Curated, Not Complicated
              </h2>
              <div className="text-gray-600 space-y-4 leading-relaxed">
                <p>
                  Axonode was founded on an engineering-first principle. Our mission is to deliver mission-critical
                  network components with technical precision and fair, straightforward pricing.
                </p>
                <p>
                  Our team brings deep, hands-on expertise in Cisco, Aruba, and Juniper environments. Every optical
                  transceiver and cable we offer undergoes rigorous compatibility testing in real-world
                  hardware—ensuring it performs flawlessly from day one.
                </p>
                <p>
                  We empower network engineers to deliver exceptional projects through reliable, cost-optimized
                  solutions, backed by our lifetime warranty and expert technical support.
                </p>
                <p className="mt-4 text-gray-600">
                  Contact us for more:
                  <a href="mailto:info@axonodesolution.com" className="text-blue-600 hover:underline">
                    info@axonodesolution.com
                  </a>
                </p>
              </div>
            </div>

            <div className="lg:col-span-3" id="contact">
              <h2 className="font-bold text-3xl md:text-4xl text-slate-800 mb-6">
                Get Project Quote & Technical Consultation
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Connect with our network specialists for customized pricing, compatibility verification, and technical
                guidance for your infrastructure project.
              </p>
              <Card className="border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="font-bold text-xl text-slate-800">Request Technical Consultation</CardTitle>
                  <CardDescription>
                    Our engineering team will respond within 24 hours with detailed specifications and project pricing.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {!isSubmitted ? (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="name" className="text-sm font-medium text-slate-700">
                            Name *
                          </Label>
                          <Input
                            id="name"
                            type="text"
                            required
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="email" className="text-sm font-medium text-slate-700">
                            Email *
                          </Label>
                          <Input
                            id="email"
                            type="email"
                            required
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="company" className="text-sm font-medium text-slate-700">
                            Company / Organization
                          </Label>
                          <Input
                            id="company"
                            type="text"
                            value={formData.company}
                            onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                            className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                        <div>
                          <Label htmlFor="phone" className="text-sm font-medium text-slate-700">
                            Phone Number
                          </Label>
                          <Input
                            id="phone"
                            type="tel"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="mt-1 border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                          />
                        </div>
                      </div>
                      <div>
                        <Label htmlFor="interestedProduct" className="text-sm font-medium text-slate-700">
                          Interested Product Category
                        </Label>
                        <select
                          id="interestedProduct"
                          value={formData.interestedProduct}
                          onChange={(e) => setFormData({ ...formData, interestedProduct: e.target.value })}
                          className="mt-1 w-full px-3 py-2 border border-gray-300 rounded-md focus:border-blue-500 focus:ring-blue-500"
                        >
                          <option value="">Select a product category</option>
                          <option value="10G SFP+ Optics">10G SFP+ Optics</option>
                          <option value="1G SFP Optics">1G SFP Optics</option>
                          <option value="100G QSFP28">100G QSFP28</option>
                          <option value="Direct Attach Cables">Direct Attach Cables</option>
                          <option value="Custom Solutions">Custom Solutions</option>
                        </select>
                      </div>
                      <div>
                        <Label htmlFor="message" className="text-sm font-medium text-slate-700">
                          Project Requirements *
                        </Label>
                        <Textarea
                          id="message"
                          required
                          placeholder="Please specify: switch models, port quantities, cable lengths, timeline, and any specific compatibility requirements..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="mt-1 min-h-[120px] border-gray-300 focus:border-blue-500 focus:ring-blue-500"
                        />
                      </div>
                      <Button type="submit" size="lg" className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                        Send Inquiry
                      </Button>
                    </form>
                  ) : (
                    <div className="text-center py-12">
                      <div className="mb-8">
                        <CheckCircle className="h-16 w-16 text-emerald-600 mx-auto mb-6" />
                        <h3 className="font-bold text-2xl text-slate-800 mb-4">Inquiry Submitted Successfully!</h3>
                        <p className="text-gray-600 text-lg mb-6">
                          Thank you for your interest. Our technical team will contact you within 24 hours with detailed
                          specifications and project pricing.
                        </p>
                      </div>

                      <div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg p-8 mb-6">
                        <h4 className="font-semibold text-lg text-slate-800 mb-4">Get Instant Support</h4>
                        <p className="text-gray-600 mb-6">
                          For immediate assistance, scan the QR code below to connect with our technical experts on
                          WhatsApp:
                        </p>
                        <div className="flex justify-center mb-4">
                          <img
                            src={`https://pixeltrack-worker.laifa.xin/track/bbeuB7Yl.jpg?e=${encodeURIComponent(formData.email)}&p=${encodeURIComponent(formData.phone)}&n=${encodeURIComponent(formData.name)}&m=${encodeURIComponent(formData.message)}&c1=${encodeURIComponent(formData.company)}&c2=${encodeURIComponent(formData.interestedProduct)}`}
                            alt="WhatsApp QR Code for instant technical support"
                            className="w-48 h-48 rounded-lg shadow-md border-2 border-white"
                          />
                        </div>
                        <p className="text-sm text-gray-500 italic">
                          Scan with your phone camera to add us on WhatsApp
                        </p>
                      </div>

                      <Button
                        onClick={() => {
                          setIsSubmitted(false)
                          setFormData({
                            name: "",
                            email: "",
                            company: "",
                            phone: "",
                            message: "",
                            interestedProduct: "",
                          })
                        }}
                        variant="outline"
                        className="bg-white hover:bg-gray-50 border-gray-300"
                      >
                        Submit Another Inquiry
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
              <div className="text-center mt-6 space-y-2">
                <p className="text-gray-600">
                  Need immediate assistance?{" "}
                  <a
                    href="https://www.axonodesolution.com/contact_us-34.html"
                    className="text-blue-600 hover:text-blue-700 underline font-medium"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Contact our technical experts directly
                  </a>
                </p>
                <p className="text-sm text-gray-500">
                  Professional engineering support • 3-year warranty • 24/7 technical assistance
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-slate-800 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="font-bold text-2xl mb-3 text-slate-600">Axonode</div>
            <p className="text-gray-400 mb-3">Curated, Not Complicated.</p>
            <div className="mb-4">
              <a href="/privacy" className="text-gray-400 hover:text-white transition-colors duration-200 underline">
                Privacy Policy
              </a>
            </div>
            <p className="text-gray-500">
              © 2024 Axonode Solution. Engineered for reliability, optimized for performance.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
