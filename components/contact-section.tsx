"use client"

import type React from "react"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { MapPin, Phone, Clock, Mail, Facebook, Instagram, Calendar, Timer } from "lucide-react"

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    service: "",
    preferredDate: "",
    preferredTime: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const response = await fetch("/api/send-appointment", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })

      const result = await response.json()

      if (result.success) {
        alert(
          `Thank you ${formData.name}! Your appointment request for ${formData.preferredDate} at ${formData.preferredTime} has been received and sent to our clinic. We will confirm shortly.`,
        )
        setFormData({
          name: "",
          phone: "",
          email: "",
          service: "",
          preferredDate: "",
          preferredTime: "",
          message: "",
        })
      } else {
        alert("There was an error sending your appointment request. Please try again or call us directly.")
      }
    } catch (error) {
      console.error("Error submitting appointment:", error)
      alert("There was an error sending your appointment request. Please try again or call us directly.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  // Generate time slots
  const timeSlots = [
    "9:30 AM",
    "10:00 AM",
    "10:30 AM",
    "11:00 AM",
    "11:30 AM",
    "12:00 PM",
    "12:30 PM",
    "1:00 PM",
    "1:30 PM",
    "5:30 PM",
    "6:00 PM",
    "6:30 PM",
    "7:00 PM",
    "7:30 PM",
    "8:00 PM",
    "8:30 PM",
    "9:00 PM",
  ]

  // Get minimum date (today)
  const today = new Date().toISOString().split("T")[0]

  return (
    <section id="contact" className="py-16 sm:py-20 lg:py-32 bg-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-sans font-bold text-gray-900 mb-4 sm:mb-6 leading-tight px-4 sm:px-0">
            Book Your Appointment
          </h2>
          <p className="text-base sm:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed px-4 sm:px-0">
            Ready to transform your smile? Schedule your consultation with Dr. Balaji Prasath at Manoharan Dental Care.
            Choose your preferred date and time for a convenient visit.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Contact Form */}
          <Card className="border-0 shadow-lg bg-white">
            <CardContent className="p-6 sm:p-8">
              <div className="flex items-center space-x-3 mb-6">
                <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600" />
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-gray-900">Schedule Your Visit</h3>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your full name"
                      className="w-full h-11 sm:h-12 text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                      className="w-full h-11 sm:h-12 text-base"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email Address
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Enter your email address"
                    className="w-full h-11 sm:h-12 text-base"
                  />
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="preferredDate" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Date *
                    </label>
                    <Input
                      id="preferredDate"
                      name="preferredDate"
                      type="date"
                      required
                      min={today}
                      value={formData.preferredDate}
                      onChange={handleChange}
                      className="w-full h-11 sm:h-12 text-base"
                    />
                  </div>
                  <div>
                    <label htmlFor="preferredTime" className="block text-sm font-medium text-gray-700 mb-2">
                      Preferred Time *
                    </label>
                    <select
                      id="preferredTime"
                      name="preferredTime"
                      required
                      value={formData.preferredTime}
                      onChange={handleChange}
                      className="w-full h-11 sm:h-12 px-3 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select time slot</option>
                      {timeSlots.map((time) => (
                        <option key={time} value={time}>
                          {time}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="service" className="block text-sm font-medium text-gray-700 mb-2">
                    Service Needed *
                  </label>
                  <select
                    id="service"
                    name="service"
                    required
                    value={formData.service}
                    onChange={handleChange}
                    className="w-full h-11 sm:h-12 px-3 py-2 text-base border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  >
                    <option value="">Select a service</option>
                    <option value="consultation">General Consultation</option>
                    <option value="cleaning">Dental Cleaning</option>
                    <option value="cosmetic">Cosmetic Dentistry</option>
                    <option value="implants">Dental Implants</option>
                    <option value="root-canal">Root Canal Treatment</option>
                    <option value="whitening">Teeth Whitening</option>
                    <option value="orthodontics">Orthodontics (Braces)</option>
                    <option value="emergency">Emergency Care</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Additional Notes
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us about your dental concerns, special requirements, or any questions..."
                    className="w-full text-base resize-none"
                  />
                </div>

                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-blue-600 hover:bg-blue-700 disabled:bg-blue-400 text-white py-3 sm:py-4 text-base sm:text-lg font-medium h-12 sm:h-14"
                >
                  <Timer className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
                  {isSubmitting ? "Sending..." : "Book Appointment"}
                </Button>

                <p className="text-xs sm:text-sm text-gray-500 text-center">
                  * We will confirm your appointment within 2 hours during business hours
                </p>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information & Map */}
          <div className="space-y-6 sm:space-y-8">
            {/* Contact Details */}
            <Card className="border-0 shadow-lg bg-white">
              <CardContent className="p-6 sm:p-8">
                <h3 className="text-xl sm:text-2xl font-sans font-bold text-gray-900 mb-4 sm:mb-6 text-center lg:text-left">
                  Contact Information
                </h3>

                <div className="space-y-4 sm:space-y-6">
                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">Address</h4>
                      <p className="text-gray-600 leading-relaxed text-sm sm:text-base">
                        79, Arisipalayam Main Road
                        <br />
                        Arisipalayam, Salem
                        <br />
                        Tamil Nadu 636002, India
                        <br />
                        <span className="text-xs sm:text-sm text-blue-600 font-medium">
                          Opposite to Devi Medical Shop
                        </span>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <Phone className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">Phone</h4>
                      <p className="text-gray-600 text-sm sm:text-base">
                        <span className="text-red-600 font-medium">Emergency: 24/7 Available</span>
                        <br />
                        <a href="tel:+91" className="text-blue-600 hover:underline font-medium">
                          Call for Appointment
                        </a>
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <Clock className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">Operating Hours</h4>
                      <div className="text-gray-600 space-y-1 text-sm sm:text-base">
                        <p>
                          <span className="font-medium">Monday - Saturday:</span>
                        </p>
                        <p className="ml-2 sm:ml-4">Morning: 9:30 AM - 1:30 PM</p>
                        <p className="ml-2 sm:ml-4">Evening: 5:30 PM - 9:00 PM</p>
                        <p>
                          <span className="font-medium">Sunday:</span> Appointments & Emergency Only
                        </p>
                        <p className="text-red-600 font-medium mt-2">Emergency Care: 24/7</p>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3 sm:space-x-4">
                    <Mail className="w-5 h-5 sm:w-6 sm:h-6 text-blue-600 mt-1 flex-shrink-0" />
                    <div className="flex-1">
                      <h4 className="font-medium text-gray-900 mb-1 text-sm sm:text-base">Follow Us</h4>
                      <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 mt-2">
                        <a
                          href="https://www.facebook.com/manoharandentalcare"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700 transition-colors text-sm sm:text-base"
                        >
                          <Facebook className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>Facebook</span>
                        </a>
                        <a
                          href="https://www.instagram.com/manoharandentalcare"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 text-pink-600 hover:text-pink-700 transition-colors text-sm sm:text-base"
                        >
                          <Instagram className="w-4 h-4 sm:w-5 sm:h-5" />
                          <span>Instagram</span>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg bg-white overflow-hidden">
              <CardContent className="p-0">
                <div className="aspect-video sm:aspect-[4/3] lg:aspect-video">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3908.823456789012!2d78.14600000000001!3d11.664300000000001!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf1ccf52421e3%3A0x94d9b5b1b1b1b1b1!2sArisipalayam%20Main%20Rd%2C%20Arisipalayam%2C%20Salem%2C%20Tamil%20Nadu%20636002!5e0!3m2!1sen!2sin!4v1703123456789!5m2!1sen!2sin"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Manoharan Dental Care - 79, Arisipalayam Main Road, Salem"
                  ></iframe>
                </div>
                <div className="p-3 sm:p-4 bg-gray-50 text-center">
                  <p className="text-xs sm:text-sm text-gray-600">
                    <MapPin className="w-3 h-3 sm:w-4 sm:h-4 inline mr-1" />
                    79, Arisipalayam Main Road, Salem, Tamil Nadu 636002
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
