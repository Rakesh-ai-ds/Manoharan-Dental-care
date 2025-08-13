import { Card, CardContent } from "@/components/ui/card"
import { Award, Users, Clock, Shield } from "lucide-react"

const stats = [
  { icon: Users, number: "1000+", label: "Happy Patients" },
  { icon: Award, number: "15+", label: "Years Experience" },
  { icon: Clock, number: "24/7", label: "Emergency Care" },
  { icon: Shield, number: "100%", label: "Safe & Hygienic" },
]

export function AboutSection() {
  return (
    <section id="about" className="py-20 lg:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Content */}
          <div className="space-y-8">
            <div>
              <h2 className="text-3xl lg:text-5xl font-sans font-bold text-gray-900 mb-6">Meet Dr. Balaji Prasath</h2>
              <p className="text-lg text-gray-600 leading-relaxed mb-6">
                With over 15 years of experience in comprehensive dental care, Dr. Balaji Prasath is committed to
                providing safe, hygienic, and affordable dental treatments to the Salem community.
              </p>
              <p className="text-gray-600 leading-relaxed mb-6">
                At Manoharan Dental Care, we believe that everyone deserves a healthy, beautiful smile. Our
                state-of-the-art facility combines advanced dental technology with a warm, caring approach to ensure
                your comfort throughout every visit.
              </p>
            </div>

            {/* Qualifications */}
            <div className="space-y-4">
              <h3 className="text-xl font-sans font-bold text-gray-900">Qualifications & Expertise</h3>
              <ul className="space-y-2 text-gray-600">
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Comprehensive Dental and Oral Health Care Specialist
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Advanced Training in Cosmetic Dentistry
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Certified in Modern Dental Implant Procedures
                </li>
                <li className="flex items-center">
                  <div className="w-2 h-2 bg-blue-500 rounded-full mr-3"></div>
                  Member of Indian Dental Association
                </li>
              </ul>
            </div>

            {/* Mission */}
            <div className="bg-blue-50 p-6 rounded-lg">
              <h3 className="text-lg font-sans font-bold text-gray-900 mb-3">Our Mission</h3>
              <p className="text-gray-700 italic">
                "To provide exceptional dental care that combines clinical excellence with compassionate service,
                ensuring every patient leaves with a healthier, more confident smile."
              </p>
            </div>
          </div>

          {/* Right Content */}
          <div className="space-y-8">
            {/* Doctor Image */}
            <div className="relative">
              <div className="aspect-[4/5] bg-gradient-to-br from-blue-100 to-cyan-50 rounded-2xl overflow-hidden">
                <img
                  src="/smiling-dentist.png"
                  alt="Dr. Balaji Prasath - Dentist at Manoharan Dental Care"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white p-4 rounded-lg shadow-lg">
                <div className="text-center">
                  <div className="text-2xl font-bold text-blue-600">15+</div>
                  <div className="text-sm text-gray-600">Years Experience</div>
                </div>
              </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-2 gap-4">
              {stats.map((stat, index) => (
                <Card key={index} className="border-0 bg-gray-50 hover:bg-gray-100 transition-colors">
                  <CardContent className="p-6 text-center">
                    <stat.icon className="w-8 h-8 text-blue-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-gray-900 mb-1">{stat.number}</div>
                    <div className="text-sm text-gray-600">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
