"use client"

import type React from "react"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Linkedin } from "lucide-react"
import { useState, useEffect } from "react"
import Footer from "@/components/footer"

interface FormErrors {
  fullName?: string
  email?: string
  company?: string
  message?: string
}

export default function ContactPage() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    company: "",
    message: "",
  })

  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Show/hide navbar based on scroll direction
      if (currentScrollY < lastScrollY || currentScrollY < 100) {
        // Scrolling up or near top - show navbar
        setShowNavbar(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and not near top - hide navbar
        setShowNavbar(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [lastScrollY])

  const validateEmail = (email: string): boolean => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const validateForm = (): FormErrors => {
    const newErrors: FormErrors = {}

    if (!formData.fullName.trim()) {
      newErrors.fullName = "Name is required."
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required."
    } else if (!validateEmail(formData.email)) {
      newErrors.email = "Invalid email address"
    }

    if (!formData.company.trim()) {
      newErrors.company = "Company is required."
    }

    if (!formData.message.trim()) {
      newErrors.message = "Message is required."
    }

    return newErrors
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({
        ...prev,
        [name]: undefined,
      }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formErrors = validateForm()
    setErrors(formErrors)

    if (Object.keys(formErrors).length === 0) {
      // Form is valid, submit the data
      console.log("Form submitted:", formData)
      // Add your form submission logic here

      // Reset form after successful submission
      setFormData({
        fullName: "",
        email: "",
        company: "",
        message: "",
      })
    }

    setIsSubmitting(false)
  }

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#0067B1" }}>
      {/* Header */}
      <header
        className={`relative z-50 bg-white px-4 py-4 md:px-6 lg:px-8 fixed w-full top-0 transition-transform duration-300 ease-in-out ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-teal-500 to-teal-600">
              <span className="text-lg font-bold text-white">S</span>
            </div>
            <div className="flex flex-col">
              <span className="text-lg font-bold text-teal-600">SUPREME</span>
              <span className="text-xs text-teal-600 -mt-1">GROUP</span>
            </div>
          </Link>

          <div className="flex items-center space-x-4">
            <Button className="bg-cyan-400 hover:bg-cyan-500 text-black font-medium px-6 py-2 rounded-full text-sm">
              Contact Us
            </Button>
            <Link href="#" className="text-gray-600 hover:text-gray-800">
              <Linkedin className="h-5 w-5" />
            </Link>
            <div className="flex items-center space-x-1">
              <div className="w-4 h-3 bg-black rounded-sm flex items-center justify-center">
                <span className="text-white text-xs">🏴</span>
              </div>
              <span className="text-sm font-medium text-black">ENG</span>
            </div>
          </div>
        </div>
      </header>

      {/* Contact Section */}
      <section className="py-16 px-4 md:px-6 lg:px-8 min-h-screen flex items-center justify-center">
        <div className="mx-auto max-w-5xl w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Left Side - Contact Information */}
            <div className="text-white">
              <div className="mb-8">
                <h1 className="text-3xl md:text-4xl font-light mb-4">Get in touch</h1>
                <div className="w-12 h-0.5 bg-white"></div>
              </div>

              <p className="text-lg font-light mb-8 text-white/90">For general enquiries</p>

              <div className="space-y-6">
                {/* Address */}
                <div>
                  <h3 className="text-base font-medium mb-1">Address :</h3>
                  <p className="text-white/90 text-sm leading-relaxed">110, 16th Road, Chembur, Mumbai - 400071</p>
                </div>

                {/* Phone */}
                <div>
                  <h3 className="text-base font-medium mb-1">Phone :</h3>
                  <p className="text-white/90 text-sm">+91 22 25208822</p>
                </div>

                {/* Email */}
                <div>
                  <h3 className="text-base font-medium mb-1">Email :</h3>
                  <p className="text-white/90 text-sm">info@supremegroup.co.in</p>
                </div>
              </div>
            </div>

            {/* Right Side - Contact Form */}
            <div className="bg-transparent">
              <form onSubmit={handleSubmit} className="space-y-5">
                {/* Full Name */}
                <div>
                  <Input
                    type="text"
                    name="fullName"
                    placeholder="Full name"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    className={`bg-transparent border-0 border-b border-white/30 rounded-none px-0 py-3 text-white placeholder:text-white/60 focus:border-white focus:ring-0 text-base ${
                      errors.fullName ? "border-red-500 focus:border-red-500" : ""
                    }`}
                    required
                  />
                  {errors.fullName && <p className="text-red-500 text-xs mt-1 font-medium">{errors.fullName}</p>}
                </div>

                {/* Email */}
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="E-mail"
                    value={formData.email}
                    onChange={handleInputChange}
                    className={`bg-transparent border-0 border-b border-white/30 rounded-none px-0 py-3 text-white placeholder:text-white/60 focus:border-white focus:ring-0 text-base ${
                      errors.email ? "border-red-500 focus:border-red-500" : ""
                    }`}
                    required
                  />
                  {errors.email && <p className="text-red-500 text-xs mt-1 font-medium">{errors.email}</p>}
                </div>

                {/* Subject (Company field renamed) */}
                <div>
                  <Input
                    type="text"
                    name="company"
                    placeholder="Subject"
                    value={formData.company}
                    onChange={handleInputChange}
                    className={`bg-transparent border-0 border-b border-white/30 rounded-none px-0 py-3 text-white placeholder:text-white/60 focus:border-white focus:ring-0 text-base ${
                      errors.company ? "border-red-500 focus:border-red-500" : ""
                    }`}
                  />
                  {errors.company && <p className="text-red-500 text-xs mt-1 font-medium">{errors.company}</p>}
                </div>

                {/* Message */}
                <div>
                  <Textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={3}
                    className={`bg-transparent border-0 border-b border-white/30 rounded-none px-0 py-3 text-white placeholder:text-white/60 focus:border-white focus:ring-0 resize-none text-base ${
                      errors.message ? "border-red-500 focus:border-red-500" : ""
                    }`}
                    required
                  />
                  {errors.message && <p className="text-red-500 text-xs mt-1 font-medium">{errors.message}</p>}
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <Button
                    type="submit"
                    className="bg-white text-blue-600 hover:bg-white/90 px-6 py-2 rounded-full text-base font-medium transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Send"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <Footer />
    </div>
  )
}
