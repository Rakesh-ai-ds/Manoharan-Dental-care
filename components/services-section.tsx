"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Smile, Zap, Heart, Sparkles } from "lucide-react"

const services = [
  {
    icon: Smile,
    title: "Cosmetic Dentistry",
    description:
      "Transform your smile with veneers, whitening, and aesthetic treatments for a confident, beautiful appearance.",
    features: ["Teeth Whitening", "Veneers", "Smile Makeover", "Bonding"],
  },
  {
    icon: Heart,
    title: "Dental Implants",
    description: "Permanent tooth replacement solutions that look, feel, and function like natural teeth.",
    features: ["Single Implants", "Full Mouth Restoration", "Implant Crowns", "Bone Grafting"],
  },
  {
    icon: Zap,
    title: "Root Canal",
    description: "Pain-free root canal treatments to save your natural teeth and eliminate dental pain.",
    features: ["Pain Relief", "Tooth Preservation", "Advanced Techniques", "Same-day Treatment"],
  },
  {
    icon: Sparkles,
    title: "Teeth Whitening",
    description: "Professional whitening treatments for a brighter, more radiant smile in just one visit.",
    features: ["Professional Grade", "Instant Results", "Safe & Effective", "Long-lasting"],
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-16 sm:py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-gray-900 mb-4 sm:mb-6 px-4 sm:px-0">
            Comprehensive Dental Services
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto px-4 sm:px-0">
            From routine cleanings to advanced procedures, we provide complete dental care with the latest technology
            and techniques for optimal oral health.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {services.map((service, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white"
            >
              <CardContent className="p-6 sm:p-8 text-center">
                <div className="w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="w-6 h-6 sm:w-8 sm:h-8 text-white" />
                </div>

                <h3 className="text-lg sm:text-xl font-sans font-bold text-gray-900 mb-3 sm:mb-4">{service.title}</h3>

                <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6 leading-relaxed">{service.description}</p>

                <ul className="space-y-1 sm:space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li
                      key={featureIndex}
                      className="text-xs sm:text-sm text-gray-500 flex items-center justify-center"
                    >
                      <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mr-2 flex-shrink-0"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-12 px-4 sm:px-0">
          <p className="text-sm sm:text-base text-gray-600 mb-4 sm:mb-6">
            Need a specific treatment not listed? We offer comprehensive dental care for all your needs.
          </p>
          <button
            onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            className="text-blue-600 hover:text-blue-700 font-medium underline underline-offset-4 text-sm sm:text-base"
          >
            Contact us for more information
          </button>
        </div>
      </div>
    </section>
  )
}
