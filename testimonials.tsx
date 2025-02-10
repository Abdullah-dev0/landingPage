"use client"

import Image from "next/image"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { PlayCircle } from "lucide-react"

const clients = [
  { name: "Air Products", logo: "/placeholder.svg?height=50&width=100" },
  { name: "General Mills", logo: "/placeholder.svg?height=50&width=100" },
  { name: "Manchester United", logo: "/placeholder.svg?height=50&width=100" },
  { name: "Navy", logo: "/placeholder.svg?height=50&width=100" },
  { name: "Grow Your Brand", logo: "/placeholder.svg?height=50&width=100" },
  { name: "McCready Law", logo: "/placeholder.svg?height=50&width=100" },
  { name: "Green Company", logo: "/placeholder.svg?height=50&width=100" },
]

const testimonials = [
  {
    name: "Grzegorz Miroslaw",
    role: "Founder",
    company: "Brandive.eu",
    companyUrl: "https://brandive.eu",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-r1MbTsCclu63gT27Hr9w2czV2PcTFF.png",
    service: "Services provided: Fully managed cold email campaigns",
  },
  {
    name: "Nils Schneider",
    role: "Co-Founder",
    company: "Instantly.ai",
    companyUrl: "https://instantly.ai",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-r1MbTsCclu63gT27Hr9w2czV2PcTFF.png",
    service: "Services provided: Consulting",
  },
  {
    name: "Nicholas Young",
    role: "",
    company: "Pluto Media",
    image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-r1MbTsCclu63gT27Hr9w2czV2PcTFF.png",
    service: "Services provided: Fully managed cold email campaigns",
  },
]

function ClientCarousel() {
  return (
    <div className="overflow-hidden">
      <div className="flex animate-scroll">
        {[...clients, ...clients].map((client, index) => (
          <div key={index} className="flex-none w-[200px] mx-4">
            <Image
              src={client.logo || "/placeholder.svg"}
              alt={client.name}
              width={100}
              height={50}
              className="mx-auto"
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default function Testimonials() {
  return (
    <div className="relative w-full py-16 overflow-hidden">
      {/* Background decoration */}
      <div
        className="absolute inset-0 z-0 opacity-5"
        style={{
          backgroundImage: 'url("/placeholder.svg?height=800&width=1600")',
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4">
        {/* Clients Section */}
        <div className="mb-16">
          <p className="text-center mb-8 text-lg">
            <span className="text-gray-500 font-normal">Some of our </span>
            <span className="text-gray-700">happy clients</span>
          </p>

          <ClientCarousel />
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-white shadow-lg">
              <CardContent className="p-6">
                <div className="relative w-full h-64 mb-6 rounded-lg overflow-hidden bg-gray-100">
                  <Image
                    src={testimonial.image || "/placeholder.svg"}
                    alt={`${testimonial.name}'s testimonial`}
                    fill
                    className="object-cover"
                  />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-white/30 backdrop-blur-sm flex items-center justify-center">
                      <PlayCircle className="w-12 h-12 text-white" />
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="flex items-baseline gap-2">
                    <h3 className="font-medium text-gray-900">{testimonial.name}</h3>
                    {testimonial.role && <span className="text-gray-600">{testimonial.role}</span>}
                  </div>
                  {testimonial.companyUrl ? (
                    <a
                      href={testimonial.companyUrl}
                      className="text-[#FF9776] hover:text-[#FF8561] block"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {testimonial.company}
                    </a>
                  ) : (
                    <p className="text-[#FF9776]">{testimonial.company}</p>
                  )}
                  <p className="text-gray-600 text-sm">{testimonial.service}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* CTA Button */}
        <div className="text-center">
          <Button variant="default" className="bg-[#FF9776] hover:bg-[#FF8561] text-white px-8 py-6 text-lg rounded-md">
            See More Testimonials
          </Button>
        </div>
      </div>
    </div>
  )
}

