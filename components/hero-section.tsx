"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Star, Shield, Clock } from "lucide-react"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-100 via-white to-blue-50 overflow-hidden"
    >
      {/* Background Dental Images */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-10 right-10 w-96 h-96 opacity-60">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dental.jpg-YIMr8fInGXlENnot7snszg1StheDZQ.jpeg"
            alt="Dental background"
            className="w-full h-full object-contain animate-float"
          />
        </div>
        <div className="absolute bottom-20 left-10 w-80 h-80 opacity-40">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dental%202.jpg-o9u1fptKkHebeMAAswzB0OBzi4pKIa.jpeg"
            alt="Dental background"
            className="w-full h-full object-contain animate-pulse-slow"
          />
        </div>
        <div className="absolute top-1/2 left-1/4 w-64 h-64 opacity-30 hidden lg:block">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dental.jpg-YIMr8fInGXlENnot7snszg1StheDZQ.jpeg"
            alt="Dental background"
            className="w-full h-full object-contain animate-bounce-slow"
          />
        </div>
        <div className="absolute top-1/3 right-1/4 w-72 h-72 opacity-20 lg:hidden">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dental%202.jpg-o9u1fptKkHebeMAAswzB0OBzi4pKIa.jpeg"
            alt="Dental background"
            className="w-full h-full object-contain animate-float"
          />
        </div>

        {/* Additional background images for richer visual experience */}
        <div className="absolute top-16 left-1/3 w-48 h-48 opacity-25 hidden xl:block">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dental%202.jpg-o9u1fptKkHebeMAAswzB0OBzi4pKIa.jpeg"
            alt="Dental background"
            className="w-full h-full object-contain animate-spin-slow"
          />
        </div>

        <div className="absolute bottom-32 right-1/3 w-56 h-56 opacity-15 hidden lg:block">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dental.jpg-YIMr8fInGXlENnot7snszg1StheDZQ.jpeg"
            alt="Dental background"
            className="w-full h-full object-contain animate-pulse-slow"
          />
        </div>

        <div className="absolute top-2/3 left-16 w-40 h-40 opacity-20 hidden md:block">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dental%202.jpg-o9u1fptKkHebeMAAswzB0OBzi4pKIa.jpeg"
            alt="Dental background"
            className="w-full h-full object-contain animate-bounce-slow"
          />
        </div>

        <div className="absolute top-1/4 right-12 w-52 h-52 opacity-18 hidden lg:block">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dental.jpg-YIMr8fInGXlENnot7snszg1StheDZQ.jpeg"
            alt="Dental background"
            className="w-full h-full object-contain animate-float"
          />
        </div>

        <div className="absolute bottom-10 left-1/2 w-44 h-44 opacity-22 hidden xl:block">
          <img
            src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/dental%202.jpg-o9u1fptKkHebeMAAswzB0OBzi4pKIa.jpeg"
            alt="Dental background"
            className="w-full h-full object-contain animate-spin-slow"
          />
        </div>
      </div>

      {/* Background Pattern */}
      <div className="absolute inset-0 bg-[url('/images/pattern.png')] opacity-5"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-32 relative z-10">
        <div className="max-w-4xl mx-auto text-center space-y-8 lg:space-y-12">
          <div className="space-y-6 lg:space-y-8">
            <div className="flex justify-center">
              <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium">
                <Star className="w-4 h-4 fill-current" />
                <span>Trusted by 1000+ Patients</span>
              </div>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-sans font-bold text-gray-900 leading-tight">
              Your Smile, <span className="gradient-text">Our Priority</span>
            </h1>

            <p className="text-lg sm:text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Experience premium dental care with Dr. Balaji Prasath at Manoharan Dental Care. Safe, hygienic, and
              affordable treatments in the heart of Salem.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 text-sm text-gray-600">
            <div className="flex items-center justify-center space-x-2">
              <Shield className="w-5 h-5 text-blue-600" />
              <span>100% Safe & Hygienic</span>
            </div>
            <div className="flex items-center justify-center space-x-2">
              <Clock className="w-5 h-5 text-blue-600" />
              <span>Emergency Care 24/7</span>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={scrollToContact}
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 text-lg group"
            >
              Book Appointment
              <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
              className="border-blue-600 text-blue-600 hover:bg-blue-50 px-8 py-4 text-lg"
            >
              Our Services
            </Button>
          </div>

          <div className="pt-8 border-t border-gray-200">
            <p className="text-gray-600 leading-relaxed text-base">
              <strong className="text-gray-900">Location:</strong> 79, Arisipalayam Main Road, Salem, Tamil Nadu
            </p>
            <p className="text-sm text-gray-500 mt-1">Opposite to Devi Medical Shop, Arisipalayam</p>
          </div>
        </div>
      </div>
    </section>
  )
}
