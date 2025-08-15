"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import { Menu, X, Phone } from "lucide-react"

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
      setIsMenuOpen(false)
    }
  }

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg font-sans">M</span>
            </div>
            <div>
              <h1 className="font-sans font-bold text-lg text-gray-900">Manoharan Dental Care</h1>
              <p className="text-xs text-gray-600 hidden sm:block">Dr. Balaji Prasath</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <a href="/" className="text-gray-700 hover:text-blue-600 transition-colors">Home</a>
            <a href="/services" className="text-gray-700 hover:text-blue-600 transition-colors">Services</a>
            <a href="/about" className="text-gray-700 hover:text-blue-600 transition-colors">About</a>
            <a href="/testimonials" className="text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
            <a href="/contact" className="text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
          </nav>

          {/* Contact Info & CTA */}
          <div className="hidden lg:flex items-center space-x-4">
            <div className="flex items-center space-x-2 text-sm text-gray-600">
              <Phone className="w-4 h-4" />
              <span className="text-xs">Emergency: 24/7</span>
            </div>
            <a href="/contact" className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium">Book Appointment</a>
          </div>

          {/* Mobile Menu Button */}
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="lg:hidden p-2 text-gray-700">
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden bg-white border-t border-gray-200 py-4">
            <nav className="flex flex-col space-y-4">
              <a href="/" className="text-left text-gray-700 hover:text-blue-600 transition-colors">Home</a>
              <a href="/services" className="text-left text-gray-700 hover:text-blue-600 transition-colors">Services</a>
              <a href="/about" className="text-left text-gray-700 hover:text-blue-600 transition-colors">About</a>
              <a href="/testimonials" className="text-left text-gray-700 hover:text-blue-600 transition-colors">Testimonials</a>
              <a href="/contact" className="text-left text-gray-700 hover:text-blue-600 transition-colors">Contact</a>
              <div className="pt-4 border-t border-gray-200">
                <a href="/contact" className="w-full bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded font-medium block text-center">Book Appointment</a>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
