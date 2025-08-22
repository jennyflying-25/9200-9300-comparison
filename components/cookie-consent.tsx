"use client"

import { useState, useEffect } from "react"
import { X } from "lucide-react"

interface CookiePreferences {
  analytics: boolean
  marketing: boolean
}

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false)
  const [showSettings, setShowSettings] = useState(false)
  const [preferences, setPreferences] = useState<CookiePreferences>({
    analytics: false,
    marketing: false,
  })

  useEffect(() => {
    // Check if user has already made a choice
    const consentStatus = getCookie("cookie_consent_status")
    if (!consentStatus) {
      setShowBanner(true)
    } else if (consentStatus !== "rejected") {
      // Load scripts based on existing consent
      try {
        const savedPreferences = JSON.parse(consentStatus)
        loadScripts(savedPreferences)
      } catch {
        // If it's just "accepted", load all scripts
        if (consentStatus === "accepted") {
          loadScripts({ analytics: true, marketing: true })
        }
      }
    }
  }, [])

  const getCookie = (name: string): string | null => {
    const value = `; ${document.cookie}`
    const parts = value.split(`; ${name}=`)
    if (parts.length === 2) return parts.pop()?.split(";").shift() || null
    return null
  }

  const setCookie = (name: string, value: string, days: number) => {
    const expires = new Date()
    expires.setTime(expires.getTime() + days * 24 * 60 * 60 * 1000)
    document.cookie = `${name}=${value};expires=${expires.toUTCString()};path=/;SameSite=Lax`
  }

  const loadScripts = (prefs: CookiePreferences) => {
    // Load Google Analytics if analytics is enabled
    if (prefs.analytics) {
      loadGoogleAnalytics()
    }

    // Load other marketing scripts if marketing is enabled
    if (prefs.marketing) {
      // Add other marketing scripts here
      console.log("[v0] Marketing scripts would be loaded here")
    }
  }

  const loadGoogleAnalytics = () => {
    // Create and load Google Analytics script
    const script1 = document.createElement("script")
    script1.async = true
    script1.src = "https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"
    document.head.appendChild(script1)

    const script2 = document.createElement("script")
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', 'GA_MEASUREMENT_ID');
    `
    document.head.appendChild(script2)

    console.log("[v0] Google Analytics loaded")
  }

  const handleAcceptAll = () => {
    setCookie("cookie_consent_status", "accepted", 180)
    loadScripts({ analytics: true, marketing: true })
    setShowBanner(false)
  }

  const handleDeclineAll = () => {
    setCookie("cookie_consent_status", "rejected", 180)
    setShowBanner(false)
  }

  const handleSavePreferences = () => {
    const prefsString = JSON.stringify(preferences)
    setCookie("cookie_consent_status", prefsString, 180)
    loadScripts(preferences)
    setShowSettings(false)
    setShowBanner(false)
  }

  if (!showBanner) return null

  return (
    <>
      {/* Cookie Consent Banner */}
      <div className="fixed bottom-0 left-0 right-0 bg-slate-800 text-white p-4 shadow-lg z-50 border-t-4 border-cyan-500">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
            <div className="flex-1">
              <h3 className="text-lg font-semibold mb-2">We use cookies to improve your experience</h3>
              <p className="text-sm text-gray-300 leading-relaxed">
                We use cookies to provide you with the best website experience, analyze website traffic, and deliver
                personalized content. You can accept all cookies or manage your preferences through 'Cookie Settings'.
                For more information, please read our{" "}
                <a href="/privacy" className="text-cyan-400 hover:text-cyan-300 underline">
                  Privacy Policy
                </a>
                .
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 min-w-fit">
              <button
                onClick={handleAcceptAll}
                className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Accept All
              </button>
              <button
                onClick={handleDeclineAll}
                className="bg-transparent border border-gray-400 hover:border-gray-300 text-gray-300 hover:text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Decline All
              </button>
              <button
                onClick={() => setShowSettings(true)}
                className="bg-transparent border border-gray-400 hover:border-gray-300 text-gray-300 hover:text-white px-6 py-2 rounded-lg font-medium transition-colors"
              >
                Cookie Settings
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Cookie Settings Modal */}
      {showSettings && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-2xl w-full max-h-[90vh] overflow-y-auto">
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Cookie Settings</h2>
                <button onClick={() => setShowSettings(false)} className="text-gray-400 hover:text-gray-600">
                  <X size={24} />
                </button>
              </div>

              <div className="space-y-6">
                {/* Strictly Necessary */}
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">Strictly Necessary Cookies</h3>
                    <div className="bg-gray-100 px-3 py-1 rounded-full">
                      <span className="text-sm text-gray-600">Always Active</span>
                    </div>
                  </div>
                  <p className="text-sm text-gray-600">
                    These cookies are essential for the website to function properly. They enable basic functions like
                    page navigation, form submissions, and access to secure areas. The website cannot function properly
                    without these cookies.
                  </p>
                </div>

                {/* Analytics */}
                <div className="border-b border-gray-200 pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">Analytics & Performance Cookies</h3>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.analytics}
                        onChange={(e) => setPreferences((prev) => ({ ...prev, analytics: e.target.checked }))}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600">
                    These cookies help us understand how visitors interact with our website by collecting and reporting
                    information anonymously. This includes Google Analytics to analyze website traffic and improve user
                    experience.
                  </p>
                </div>

                {/* Marketing */}
                <div className="pb-4">
                  <div className="flex items-center justify-between mb-2">
                    <h3 className="text-lg font-semibold text-gray-900">Advertising & Marketing Cookies</h3>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input
                        type="checkbox"
                        checked={preferences.marketing}
                        onChange={(e) => setPreferences((prev) => ({ ...prev, marketing: e.target.checked }))}
                        className="sr-only peer"
                      />
                      <div className="w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-cyan-300 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-cyan-600"></div>
                    </label>
                  </div>
                  <p className="text-sm text-gray-600">
                    These cookies are used to deliver advertisements more relevant to you and your interests. They may
                    also be used to limit the number of times you see an advertisement and measure the effectiveness of
                    advertising campaigns.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-3 mt-8">
                <button
                  onClick={handleSavePreferences}
                  className="bg-cyan-600 hover:bg-cyan-700 text-white px-6 py-3 rounded-lg font-medium transition-colors flex-1"
                >
                  Save Preferences
                </button>
                <button
                  onClick={() => setShowSettings(false)}
                  className="bg-gray-200 hover:bg-gray-300 text-gray-800 px-6 py-3 rounded-lg font-medium transition-colors"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}
