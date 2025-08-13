import type React from "react"
import type { Metadata } from "next"
import { Inter, Poppins } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
})

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  display: "swap",
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Manoharan Dental Care - Best Dental Clinic in Salem | Dr. Balaji Prasath",
  description:
    "Premium dental care in Salem, Tamil Nadu. Expert treatments including cosmetic dentistry, dental implants, root canal, and teeth whitening. Book your appointment today!",
  keywords:
    "dental clinic Salem, dentist Salem, dental care Tamil Nadu, cosmetic dentistry, dental implants, root canal treatment, teeth whitening, Dr. Balaji Prasath",
  authors: [{ name: "Dr. Balaji Prasath" }],
  creator: "Manoharan Dental Care",
  publisher: "Manoharan Dental Care",
  robots: "index, follow",
  openGraph: {
    title: "Manoharan Dental Care - Best Dental Clinic in Salem",
    description: "Premium dental care with expert treatments. Your smile, our priority.",
    url: "https://manoharandentalcare.com",
    siteName: "Manoharan Dental Care",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Manoharan Dental Care - Best Dental Clinic in Salem",
    description: "Premium dental care with expert treatments. Your smile, our priority.",
  },
  viewport: "width=device-width, initial-scale=1",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} antialiased`}>
      <head>
        <link rel="canonical" href="https://manoharandentalcare.com" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Salem" />
        <meta name="geo.position" content="11.6643;78.1460" />
        <meta name="ICBM" content="11.6643, 78.1460" />
      </head>
      <body>{children}</body>
    </html>
  )
}
