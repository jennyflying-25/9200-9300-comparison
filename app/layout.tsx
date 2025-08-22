import type React from "react"
import type { Metadata } from "next"
import { Work_Sans, Open_Sans } from "next/font/google"
import "./globals.css"
import CookieConsent from "@/components/cookie-consent"

const workSans = Work_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-work-sans",
})

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-open-sans",
})

export const metadata: Metadata = {
  title: "Axonode - Curated Network Solutions | Cisco-Compatible Optical Transceivers",
  description:
    "Professional network hardware solutions. Cisco-compatible optical transceivers and cables. Curated, not complicated.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${workSans.variable} ${openSans.variable} antialiased`}>
      <body>
        {children}
        <CookieConsent />
      </body>
    </html>
  )
}
