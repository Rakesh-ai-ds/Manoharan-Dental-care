"use client"

import { MapPin, Phone, Mail, Facebook, Instagram, Heart } from "lucide-react"

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Clinic Info */}
          <div className="space-y-4">
            <div className="flex items-center space-x-2">
              <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-cyan-400 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-lg font-sans">M</span>
              </div>
              <div>
                <h3 className="font-sans font-bold text-lg">Manoharan Dental Care</h3>
                <p className="text-sm text-gray-400">Dr. Balaji Prasath</p>
              </div>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed">
              Providing safe, hygienic, and affordable dental treatments in Salem, Tamil Nadu. Your smile is our
              priority.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-sans font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <button
                  onClick={() => document.getElementById("home")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("services")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("about")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("testimonials")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Testimonials
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-sans font-bold text-lg mb-4">Our Services</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>Cosmetic Dentistry</li>
              <li>Dental Implants</li>
              <li>Root Canal Treatment</li>
              <li>Teeth Whitening</li>
              <li>General Dentistry</li>
              <li>Emergency Care</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-sans font-bold text-lg mb-4">Contact Info</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start space-x-3">
                <MapPin className="w-4 h-4 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-400">
                  79, Arisipalayam Main Road
                  <br />
                  Salem, Tamil Nadu
                  <br />
                  <span className="text-xs">Opposite Devi Medical Shop</span>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Phone className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">Emergency: 24/7 Available</span>
              </div>

              <div className="flex items-center space-x-3">
                <Mail className="w-4 h-4 text-blue-400 flex-shrink-0" />
                <span className="text-gray-400">Book Online Appointment</span>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4 pt-2">
                <a
                  href="https://www.facebook.com/manoharandentalcare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-blue-400 transition-colors"
                >
                  <Facebook className="w-5 h-5" />
                </a>
                <a
                  href="https://www.instagram.com/manoharandentalcare"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-pink-400 transition-colors"
                >
                  <Instagram className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-gray-400">© {currentYear} Manoharan Dental Care. All rights reserved.</div>
            <div className="flex items-center space-x-1 text-sm text-gray-400">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500 fill-current" />
              <span>for healthier smiles</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
