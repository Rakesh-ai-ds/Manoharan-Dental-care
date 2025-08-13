"use client"

import { useState, useEffect } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Star, ChevronLeft, ChevronRight, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    location: "Salem, Tamil Nadu",
    rating: 5,
    text: "Dr. Balaji Prasath is exceptional! The clinic is spotlessly clean and the staff is so caring. My dental implant procedure was completely painless and the results are amazing.",
    treatment: "Dental Implants",
  },
  {
    name: "Rajesh Kumar",
    location: "Arisipalayam, Salem",
    rating: 5,
    text: "I was terrified of dental procedures, but Dr. Prasath made me feel so comfortable. The root canal treatment was surprisingly easy and pain-free. Highly recommend!",
    treatment: "Root Canal Treatment",
  },
  {
    name: "Meera Devi",
    location: "Salem, Tamil Nadu",
    rating: 5,
    text: "The teeth whitening results exceeded my expectations! Professional service, modern equipment, and very affordable prices. The best dental clinic in Salem.",
    treatment: "Teeth Whitening",
  },
  {
    name: "Arun Krishnan",
    location: "Salem, Tamil Nadu",
    rating: 5,
    text: "Emergency dental care at its finest. Called them at midnight with severe tooth pain, and they arranged immediate treatment. Truly 24/7 care!",
    treatment: "Emergency Care",
  },
  {
    name: "Lakshmi Narayanan",
    location: "Salem, Tamil Nadu",
    rating: 5,
    text: "Complete smile makeover done here. Dr. Prasath is an artist! My confidence has increased tremendously. The entire family now comes here for dental care.",
    treatment: "Cosmetic Dentistry",
  },
]

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAutoPlaying, setIsAutoPlaying] = useState(true)

  useEffect(() => {
    if (!isAutoPlaying) return

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)

    return () => clearInterval(interval)
  }, [isAutoPlaying])

  const goToPrevious = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  const goToNext = () => {
    setIsAutoPlaying(false)
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const goToSlide = (index: number) => {
    setIsAutoPlaying(false)
    setCurrentIndex(index)
  }

  return (
    <section id="testimonials" className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-cyan-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl lg:text-5xl font-sans font-bold text-gray-900 mb-6">What Our Patients Say</h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Don't just take our word for it. Here's what our satisfied patients have to say about their experience at
            Manoharan Dental Care.
          </p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Testimonial Card */}
          <Card className="border-0 shadow-2xl bg-white overflow-hidden">
            <CardContent className="p-8 lg:p-12">
              <div className="flex flex-col lg:flex-row items-center gap-8">
                {/* Quote Icon */}
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                    <Quote className="w-8 h-8 text-white" />
                  </div>
                </div>

                {/* Testimonial Content */}
                <div className="flex-1 text-center lg:text-left">
                  {/* Stars */}
                  <div className="flex justify-center lg:justify-start mb-4">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  {/* Testimonial Text */}
                  <blockquote className="text-lg lg:text-xl text-gray-700 mb-6 leading-relaxed">
                    "{testimonials[currentIndex].text}"
                  </blockquote>

                  {/* Patient Info */}
                  <div className="space-y-2">
                    <div className="font-sans font-bold text-gray-900 text-lg">{testimonials[currentIndex].name}</div>
                    <div className="text-gray-600">{testimonials[currentIndex].location}</div>
                    <div className="inline-block bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                      {testimonials[currentIndex].treatment}
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Navigation Buttons */}
          <div className="flex justify-center items-center mt-8 space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={goToPrevious}
              className="rounded-full border-blue-200 hover:bg-blue-50 bg-transparent"
            >
              <ChevronLeft className="w-4 h-4" />
            </Button>

            {/* Dots Indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex ? "bg-blue-600 w-8" : "bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>

            <Button
              variant="outline"
              size="icon"
              onClick={goToNext}
              className="rounded-full border-blue-200 hover:bg-blue-50 bg-transparent"
            >
              <ChevronRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="grid md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">1000+</div>
              <div className="text-gray-600">Satisfied Patients</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">4.9/5</div>
              <div className="text-gray-600">Average Rating</div>
            </div>
            <div className="space-y-2">
              <div className="text-3xl font-bold text-blue-600">324+</div>
              <div className="text-gray-600">Facebook Likes</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
