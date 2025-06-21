"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Linkedin, Pause, Play } from "lucide-react"
import { useState, useEffect, useRef } from "react"
import Footer from "@/components/footer"

export default function HomePage() {
  const [activeVehicleType, setActiveVehicleType] = useState<"passenger" | "commercial">("passenger")
  const [activePart, setActivePart] = useState<string>("complete-body")
  const [isVideoPaused, setIsVideoPaused] = useState(false)
  const [isTextVisible, setIsTextVisible] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeScrollSection, setActiveScrollSection] = useState<"passenger" | "commercial" | null>("passenger")
  const [showNavbar, setShowNavbar] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)
  const [titlePosition, setTitlePosition] = useState<"center" | "top">("center")
  const [showRestContent, setShowRestContent] = useState(false)
  const [manualSelection, setManualSelection] = useState(false)

  const sectionRef = useRef<HTMLElement>(null)
  const titleRef = useRef<HTMLDivElement>(null)
  const passengerRef = useRef<HTMLDivElement>(null)
  const commercialRef = useRef<HTMLDivElement>(null)

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

      // Handle title position and content reveal
      if (sectionRef.current) {
        const sectionTop = sectionRef.current.offsetTop
        const windowHeight = window.innerHeight

        // When user starts scrolling into the second section
        if (currentScrollY + windowHeight > sectionTop + 300) {
          setTitlePosition("top")
          setShowRestContent(true)
        } else {
          setTitlePosition("center")
          setShowRestContent(false)
        }
      }

      if (
        sectionRef.current &&
        titleRef.current &&
        passengerRef.current &&
        commercialRef.current &&
        showRestContent &&
        !manualSelection
      ) {
        const sectionTop = sectionRef.current.offsetTop
        const sectionHeight = sectionRef.current.offsetHeight
        const scrollY = window.scrollY
        const windowHeight = window.innerHeight

        // Calculate when the section comes into view
        const sectionInView = scrollY + windowHeight > sectionTop + 400

        // Calculate scroll progress within the section
        const progress = Math.max(0, Math.min(1, (scrollY + windowHeight - sectionTop) / (windowHeight * 0.8)))

        // Calculate which vehicle section should be active based on scroll position within the section
        const sectionScrollStart = sectionTop - windowHeight * 0.3
        const sectionScrollEnd = sectionTop + sectionHeight - windowHeight * 0.7
        const scrollWithinSection = Math.max(
          0,
          Math.min(1, (scrollY - sectionScrollStart) / (sectionScrollEnd - sectionScrollStart)),
        )

        let activeSection: "passenger" | "commercial" | null = null
        let newActiveVehicleType: "passenger" | "commercial" = "passenger"

        // Enhanced logic for scroll-based switching
        if (sectionInView) {
          if (scrollWithinSection < 0.7) {
            activeSection = "passenger"
            newActiveVehicleType = "passenger"
          } else {
            activeSection = "commercial"
            newActiveVehicleType = "commercial"
          }

          // Auto-switch vehicle type based on scroll position
          if (activeVehicleType !== newActiveVehicleType) {
            setActiveVehicleType(newActiveVehicleType)
            setActivePart("complete-body") // Reset to complete body when switching
          }
        }

        setScrollProgress(progress)
        setIsTextVisible(sectionInView)
        setActiveScrollSection(activeSection)
      }
    }

    window.addEventListener("scroll", handleScroll)
    handleScroll() // Check initial state

    return () => window.removeEventListener("scroll", handleScroll)
  }, [activeVehicleType, lastScrollY, showRestContent, manualSelection])

  // Reset manual selection after a delay to re-enable scroll-based switching
  useEffect(() => {
    if (manualSelection) {
      const timer = setTimeout(() => {
        setManualSelection(false)
      }, 3000) // Reset after 3 seconds

      return () => clearTimeout(timer)
    }
  }, [manualSelection])

  const handlePassengerClick = () => {
    setActiveVehicleType("passenger")
    setActivePart("complete-body")
    setActiveScrollSection("passenger")
    setManualSelection(true)
  }

  const handleCommercialClick = () => {
    setActiveVehicleType("commercial")
    setActivePart("complete-body")
    setActiveScrollSection("commercial")
    setManualSelection(true)
  }

  const passengerParts = [
    { id: "complete-body", label: "Complete body", thumbnail: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAACMCAMAAAB23NoyAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAALxUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////9wLB8UAAAD6dFJOUwAK7/4/2/0gBAII5/v49l/HARP1vwZvGRT3HJvhCSHulEAH4xGfDN+v8vEQ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" },
    { id: "front", label: "Front", thumbnail: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAACMCAMAAAB23NoyAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAALuUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////0cNUIUAAAD5dFJOUwD2Cvs//QECBCAI5wbHDO9A/hCH918Z4fib42/09Z/oCdHfBYuUtdQHrBHyCyHevzHtHBgU2PB7eMSv3Pr5MPHlEzjXYKjDs5lE5pMvfWGNUTofWqUkvds1Ax7plyOh1ownKquOKB1XN+sOo2nuM/xYcVY07MINmGxdJcbVLhJOxXNusmh/cmc53ZJ+sdJkXnkawcrz6kEbQlUiFq1JzywXTK6IK8CPS209UKaw00qcejzZdqmGzTKJZjvadWVDcFSR0GuVNhWEgbxSgIpG5Heit09cJmO6fA9btMi5uCmqReJ0yYNqoGJIkKfMy7ukLZaCmkeFU76ezlCj3tsAAAfCSURBVBgZ7cFTgCMLGgbQL6xU0rY9bdu2zbFt27Zt2zaubXtt7/+20z3T0530BJVU7t2HOgcCgUAgEAgEAoFAIBAI9JOH187Z+kblhKRDAb3aVR2qWDB6XbXN8MO1oQx+PuHlH7hXBc7OthbJPNsiE3yvWrb7w97ZTc5bNo9L97D2dv5joNeVe5XVNpkRdi0wH+XYJYFuHg7e/VYPdq9e3uAUb2elDFa0C1aKp4bGO7Fztt5fvKQsZGNC6RgXmUuiym+N5aAJrTADn7qNGW6Lku5fi5dDH7lda7nNB/nuFQHF72/J8poJvuV+EZb6LyW42/DI2S0X/NoxJu0CjBTxb1U0+JQvmhYPo8296KsEf/Z4PFbABJOyKsAbaUzBVJhkibUdeLLPrTEephkw5l3wY4jf7ByYanC2GHyY4/dwF0z2kcwdPIj1HbENPEh9h4HJXvHL3gk+RMvuwRTxc2Yibq8qF/zoJbKB0Z5EEdFPe1UseKJIcfnbHH8YpdXbcmK0q21eJnjjc9vPc5YTjDG9LRZ45GYDPuVMbHOFMS45KwDkgGcVbjCGVHQbZrBOFgwjBNe73Af/xpMVjBD+n3E7wL/xZAXu9vlKFirAv/FkBa4UyR5rGmAO1eQETpjoH34U/fMVmEW0x0oYTh47/b+ittStMJfRkm0wUPger5jJu2fsh/nk0EQYpDb/qmjW+jhAPtdKDnMhRxhAPCFbtvumHFBsr1fN/mTljZs5MAdyhF4W6yI9p0UD2PcgkjqpXu+d/OHYkeAVOUKfPvMlqRF4av8t0tQWK7Z/bfHJmsNxYvCAHKHHglLfEgZPzZ1FPajq/egpmccIt6CUor72CyfaDLGA0cgRuiV79spBO2WILRmiMdxn7aaU3WUVx2dUlww/HBvqD4ORI3Sa7pDUgg6TyoPIEDK/d+iFdI8xKud+s94f5NW7KiCg/1LoRo7QJXnzdQbPWH0qI5MNhy7DyBE65NvaM2jHHHstgXgwELpEWedCuxu0qgUdzkqID6nQhdnoCu1OJo6yQAfxReLBiCV20MViUxm02rm5QIlnKsk0iVlEdGQodBMH9Yc2TOOaoXiumEzg8Wq505AvjrwRDj1Cv0+CNh9KtqPTgC9lZKyMZXhK7g+9NoQ9ghZM3mp0YfqMdibjWOfCQB/Z1kGLSXQWataTcWI+h4Fy6QS08HJmoOYQGUXyKxiqmuLxcp+lJUGNnTUZZT0MZq+CFix9h+4Uq8ko9jCY/MgpaMGSFN2MPEhdbK3JULLAvvbLbJzsGECeWXZHCR1mhg2DFixJ0c00W+ryeKYvcSFLzPY6PqEqkegt6PCpagO0YEmKbpKoy+6pYH1Jq7C0wtP1o0alHhzkQJocatHDNzPQYW72KGjDkhTdNXuNsKUOBUoAY0WkzQkGz4QGUQ8DoYHJj8m4qwAg9lLthDYsSaFu6LyjjU1bvC1t/nEtzubxFNLGBp1qXm1McQ6jFyRZRxmo87kn+urL7y03RhVNSXeEVixJ0ZN/w/VIIppMOkxHd8F9Diw8t6aUiBJ6b+8DDYpzsirGaVWZq9egkB3QjiUpeqp5SHoVLV4QLYeGgWOXW6GH/VFZaxkYgCUpNCncXcgwabftoF9N05ZmGIQlKTQEh5DhDkAfxtE6JQ6GYUkKDQHEwSro4WMvmTYXBmJJCnUKN+Ig0g46hRZknRfDUCxJoe4b4iRwF3RoSPEeD8OxJIW68cTNij3Q6ol35BNwwJIU6hYQR+muVngpZplD1EhwwZIU6oqJgxUBfkR0pgQv4ePqed0CnLAkhboi4qAKFq4ORKL+yy2gYf+U9DvgiCUp1EwNappMBoscCay1JiKHhOKSUHSTualN2gKOWNoKNSUB2w5IyGDJACrHUTvbFUPwQo133lhw5hQ2A5oUvqSTLOTXhaVh46idqBlAMj0zD50+F327C9yFP/wrenhAOsjmHwMQPlM6bGGvr9MmLwKwoZQ6/AadTs9WwBhvuVlA00lb0spzlQJdLIbuAyAfTB0uodOm1TAKK3kTmoKTRaTNrVr0FJcUQ0/9Dp1K7WGcaenbGWjwn0IaJBIi8q6v2JOJl7Lq70KUiueCZetgHMW3suJJSqh7k9Q5/LbBvsbGAtoxFwZf7YvnLtAAGIlxv+gQ9N4wJ3RTPl9G3SzKlEM/pRjP/ZDoD6NZlfTOk8UUrY1oQSefaPt+GfTM5Hf9wc3BT2ASRe30wERJwoO3p+KF1rpFI4gkIUPAUWjkBJisT92pWy4r3tsR4Y9OsfnD5jHgapLtTfBB3Lz+DHnOPz8ApljqIAZfIpaFjJE19Z+ohJEsogrAJ+Xb5xIo/fTHO+UwwvCMs+BbrHtUDDkfPTESXPXNE4N/zNDKUWdcnHvXDWwBB+zmKzATcfNP/VzCCpf+RYmXUsRfG12Qsg1dmJVurTAfRWZlSHbGj8XznKwUeI7x+Syu4e7oK3+epcpQWYoWo8t3kjsws13HyoI8rftZ/mlQvatr398XFe5Nsx7n4Z33+t/dc3MUl6co0Ck2z5KB+THldedXngr8qrCwMfCya8ClGdIBdnJ0GC4qsMAzcb5pEfhlyfNdPKMGf9ysYG74NQ3EL67V/XKQiLJibL9+Bf8XxBF3jy9d7gOBQCAQCAQCgUAgEAgE3f0Po0/jNg2Ql+0AAAAASUVORK5CYII=" },
    { id: "cabin", label: "Cabin", thumbnail: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAACMCAMAAAB23NoyAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAL0UExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////7AI5DgAAAD7dFJOUwD+9goE/fsCID/xAcdv5/cD9Qi/4+hV4V/X7xj6+AnfXfzuGVqbFfnt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" },
    { id: "trunk", label: "Trunk", thumbnail: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAACMCAMAAAB23NoyAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAALuUExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////0cNUIUAAAD5dFJOUwD2Cv0/x/sgAgRfCPUUCW8B+JTn9xnjIeEc6PoQOBi/DPR/A/HRN6jv19UGB/Pl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" },
    { id: "exterior", label: "Exterior", thumbnail: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI0AAACMCAMAAAB23NoyAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAAJcEhZcwAAFiUAABYlAUlSJPAAAAL6UExURUdwTP///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////3RO3yAAAAD9dFJOUwAICvv9PwECBCD4z/bvBgP+9fEHV18kx+eUGZvtFOO/3gxv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" },
  ]

  const commercialParts = [
    { id: "complete-body", label: "Complete Body", thumbnail: "https://supreme-group.vercel.app/static/media/commercial-body.497c72f2daf47ca41c4fd25f86191b69.svg" },
    { id: "engine", label: "Engine", thumbnail: "https://supreme-group.vercel.app/static/media/commercial-engine.474985507c936157fc7a6daa457d4f04.svg" },
    { id: "cabin", label: "Cabin", thumbnail: "https://supreme-group.vercel.app/static/media/commercial-cabin.7981ee5cadcf17dbe57012daa413c584.svg" },
  ]

  const currentParts = activeVehicleType === "passenger" ? passengerParts : commercialParts

  function getVideoSrc(vehicleType: "passenger" | "commercial", part: string) {
    if (vehicleType === "passenger") {
      switch (part) {
        case "front":
          return "/assets/Front.8f5fda304d3095ab6b02.mp4"
        case "cabin":
          return "/assets/Cabin.3260d3e4f52b3804dae5.mp4"
        case "trunk":
          return "/assets/Trunk.54bfaa734c0395172c08.mp4"
        case "exterior":
          return "/assets/Exterior.a127ebb308e655c7e32c.mp4"
        case "complete-body":
        default:
          return "/assets/Passenger Alpha.bc06b347f5b526ad9a60.mp4"
      }
    } else {
      switch (part) {
        case "engine":
          return "/assets/Commercial-Engine.d8957f7c027ca396858e.mp4"
        case "cabin":
          return "/assets/Commercial-Cabin.69adf15a8021267cbe8c.mp4"
        case "complete-body":
        default:
          return "/assets/Commercial Alpha.92c92d40f9116c837d1d.mp4"
      }
    }
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header
        className={`relative z-50 bg-white px-4 py-4 md:px-6 lg:px-8 fixed w-full top-0 transition-transform duration-300 ease-in-out ${
          showNavbar ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between ">
          <Link href="/" className="flex items-center space-x-3">
          
            <div className="flex flex-col ">
            <img
              src="https://supreme-group.vercel.app/static/media/logo.68f5b8493efb88f7cd65756bf67a1f5b.svg"
              alt="Supreme Group Logo"
              className="h-146 w-41  bg-white object-contain"
            />
            </div>
          </Link>

          <div className="flex items-center space-x-4">
            <Link href="/contact">
              <Button className="bg-cyan-400 hover:bg-cyan-500 text-black font-medium px-6 py-2 rounded-full text-sm">
                Contact Us
              </Button>
            </Link>
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

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center">
        <div className="absolute inset-0 overflow-hidden">
          {/* YouTube Video Background */}
          <video
            src="./assets/automotive.224e7418884105595114.mp4"
            className="absolute inset-0 w-full h-full object-cover pointer-events-none"
            style={{
              width: "100vw",
              height: "100vh",
              transform: "scale(1.2)",
              transformOrigin: "center center",
            }}
            autoPlay
            loop
            muted
            playsInline
          />
          <div className="absolute inset-0 bg-black/50"></div>
        </div>

        <div className="relative z-10 text-center px-4 md:px-6 lg:px-8 max-w-5xl mx-auto">
          <p className="text-white/90 text-lg md:text-xl mb-6 font-light tracking-wide">Performance in motion</p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-light text-white leading-tight">
            Soft Trims and NVH Solutions
            <br />
            <span className="block mt-2">for seamless rides</span>
          </h1>
        </div>
      </section>

      {/* Interactive 360-degree Section */}
      <section ref={sectionRef} className="min-h-screen bg-black relative overflow-hidden">
        {/* Background Pattern */}
      

        {/* Animated Title - Moves from center to top */}
        <div
          ref={titleRef}
          className={`absolute left-0 right-0 z-20 text-center px-4 md:px-6 lg:px-8 transition-all duration-1000 ease-out ${
            titlePosition === "center" ? "top-1/2 -translate-y-1/2" : "top-8 translate-y-0"
          }`}
        >
          <div className="space-y-4">
            {/* First line with staggered animation */}
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              {["Evolving", "the", "drive", "with"].map((word, index) => (
                <span
                  key={index}
                  className={`font-light text-white transition-all duration-1000 ease-out ${
                    titlePosition === "center" ? "text-4xl md:text-5xl lg:text-6xl" : "text-2xl md:text-3xl lg:text-4xl"
                  }`}
                  style={{
                    transitionDelay: `${index * 150}ms`,
                  }}
                >
                  {word}
                </span>
              ))}
              <span
                className={`font-normal text-white transition-all duration-1000 ease-out ${
                  titlePosition === "center" ? "text-4xl md:text-5xl lg:text-6xl" : "text-2xl md:text-3xl lg:text-4xl"
                }`}
                style={{
                  transitionDelay: "600ms",
                  background: "linear-gradient(45deg, #ffffff, #60a5fa)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                  backgroundClip: "text",
                }}
              >
                360-degree
              </span>
            </div>

            {/* Second line with staggered animation */}
            <div className="flex flex-wrap justify-center gap-x-4 gap-y-2">
              {["comprehensive", "solutions"].map((word, index) => (
                <span
                  key={index}
                  className={`font-light text-white transition-all duration-1000 ease-out ${
                    titlePosition === "center" ? "text-4xl md:text-5xl lg:text-6xl" : "text-2xl md:text-3xl lg:text-4xl"
                  }`}
                  style={{
                    transitionDelay: `${800 + index * 150}ms`,
                  }}
                >
                  {word}
                </span>
              ))}
            </div>
          </div>

          {/* Animated underline - only show when centered */}
          <div
            className={`mt-8 mx-auto bg-gradient-to-r from-transparent via-white to-transparent transition-all duration-1500 ease-out ${
              titlePosition === "center" ? "w-32 opacity-60" : "w-0 opacity-0"
            }`}
            style={{
              height: "1px",
              transitionDelay: "1200ms",
            }}
          />
        </div>

        {/* Rest of Content - Shows when title moves to top */}
        <div
          className={`relative z-10 flex flex-col justify-end min-h-screen px-4 md:px-6 lg:px-8 pb-16 transition-all duration-1000 ease-out ${
            showRestContent ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
          style={{
            paddingTop: titlePosition === "top" ? "200px" : "0px",
          }}
        >
          {/* Main Content Grid */}
          <div className="w-full max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Side - Vehicle Type Selection with Single Glowing Line */}
            <div className="relative space-y-16">
              {/* Single Continuous Glowing Line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-white/20 via-white/40 to-white/20">
                {/* Glowing section indicator */}
                <div
                  className={`absolute w-1 bg-gradient-to-b transition-all duration-700 ease-out ${
                    activeScrollSection === "passenger"
                      ? "from-cyan-400 via-white to-cyan-400 top-0 h-1/2 shadow-lg shadow-cyan-400/50"
                      : activeScrollSection === "commercial"
                        ? "from-cyan-400 via-white to-cyan-400 top-1/2 h-1/2 shadow-lg shadow-cyan-400/50"
                        : "from-white/40 via-white/60 to-white/40 top-0 h-full"
                  }`}
                  style={{
                    boxShadow: activeScrollSection ? "0 0 20px rgba(34, 211, 238, 0.6)" : "none",
                  }}
                />
              </div>

              {/* Passenger Vehicles */}
              <div
                ref={passengerRef}
                className={`cursor-pointer transition-all duration-700 ease-out pl-8 ${
                  activeScrollSection === "passenger"
                    ? "opacity-100 scale-105 translate-x-2"
                    : activeScrollSection === "commercial"
                      ? "opacity-40 scale-95"
                      : "opacity-70"
                }`}
                onClick={handlePassengerClick}
                style={{
                  filter:
                    activeScrollSection === "passenger" ? "drop-shadow(0 0 10px rgba(34, 211, 238, 0.3))" : "none",
                }}
              >
                <h3
                  className={`text-2xl md:text-3xl font-light mb-2 transition-all duration-700 ${
                    activeScrollSection === "passenger" ? "text-white" : "text-gray-400"
                  }`}
                >
                  Passenger vehicles
                </h3>
                <p
                  className={`text-lg transition-all duration-700 ${
                    activeScrollSection === "passenger" ? "text-gray-200" : "text-gray-500"
                  }`}
                >
                  Revving up Nonwoven innovation from <br/>interior to exterior.
                </p>
              </div>

              {/* Commercial Vehicles */}
              <div
                ref={commercialRef}
                className={`cursor-pointer transition-all duration-700 ease-out pl-8 ${
                  activeScrollSection === "commercial"
                    ? "opacity-100 scale-105 translate-x-2"
                    : activeScrollSection === "passenger"
                      ? "opacity-40 scale-95"
                      : "opacity-70"
                }`}
                onClick={handleCommercialClick}
                style={{
                  filter:
                    activeScrollSection === "commercial" ? "drop-shadow(0 0 10px rgba(34, 211, 238, 0.3))" : "none",
                }}
              >
                <h3
                  className={`text-2xl md:text-3xl font-light mb-2 transition-all duration-700 ${
                    activeScrollSection === "commercial" ? "text-white" : "text-gray-400"
                  }`}
                >
                  Commercial vehicles
                </h3>
                <p
                  className={`text-lg transition-all duration-700 ${
                    activeScrollSection === "commercial" ? "text-gray-200" : "text-gray-500"
                  }`}
                >
                  Advancing engineering <br/>for heavy-duty vehicles.
                </p>
              </div>
            </div>

            {/* Right Side - 3D Vehicle Visualization */}
            <div className="relative">
              <div className="rounded-lg flex items-center justify-center relative overflow-hidden">
                {/* 3D Vehicle Model Placeholder */}
                <div className="relative w-full h-full flex items-center justify-center">
                  <video
                    key={`${activeVehicleType}-${activePart}`}
                    src={getVideoSrc(activeVehicleType, activePart)}
                    className="w-full h-full object-contain"
                    autoPlay
                    loop
                    muted
                    playsInline
                  />
                </div>

                {/* Video Controls */}
                <button
                  onClick={() => setIsVideoPaused(!isVideoPaused)}
                  className="absolute bottom-4 right-4 w-12 h-12 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center hover:bg-white/20 transition-colors"
                >
                  {isVideoPaused ? (
                    <Play className="h-5 w-5 text-white ml-1" />
                  ) : (
                    <Pause className="h-5 w-5 text-white" />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Bottom Navigation - Vehicle Parts */}
          <div className="flex justify-end w-full ">
  <div className="flex flex-wrap gap-2 md:gap-8 max-w-3xl justify-end">
    {currentParts.map((part, index) => (
      <button
        key={part.id}
        onClick={() => setActivePart(part.id)}
        className={`flex flex-col items-center space-y-2 p-4 rounded-lg transition-all duration-300 ${
          activePart === part.id
            ? "text-white scale-105"
            : "text-gray-400 hover:text-white hover:bg-white/5"
        }`}
      >
        <div className="w-16 h-12 rounded-lg flex items-center justify-center overflow-hidden">
          <img
            src={part.thumbnail}
            alt={part.label}
            className="w-full h-full object-contain"
          />
        </div>
        <span className="text-sm font-medium">{part.label}</span>
      </button>
    ))}
  </div>
</div>

        </div>
      </section>
 {/* Contact Section */}
 <section
        className="py-16 px-16 md:px-24 lg:px-32 xl:px-48 2xl:px-64 flex items-center justify-center"
        style={{ backgroundColor: "#0067B1" }}
      >
        <div className="mx-auto w-full max-w-4xl" style={{ height: "433px" }}>
          <div className="grid lg:grid-cols-2 gap-16 items-start h-full">
            {/* Left Side - Contact Information */}
            <div className="text-white flex flex-col justify-center h-full">
              <div className="mb-6">
                <h2 className="text-3xl md:text-4xl font-light mb-3">Get in touch</h2>
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
            <div className="bg-transparent flex flex-col justify-center h-full">
              <form className="space-y-4">
                {/* Full Name */}
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full name"
                    className="w-full bg-transparent border-0 border-b border-white/30 px-0 py-3 text-white placeholder:text-white/80 focus:border-white focus:outline-none text-base text-sm"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full bg-transparent border-0 border-b border-white/30 px-0 py-3 text-white placeholder:text-white/80 focus:border-white focus:outline-none text-base text-sm"
                    required
                  />
                </div>

                {/* Company */}
                <div>
                  <input
                    type="text"
                    name="company"
                    placeholder="Company"
                    className="w-full bg-transparent border-0 border-b border-white/30 px-0 py-3 text-white placeholder:text-white/80 focus:border-white focus:outline-none text-base text-sm"
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    rows={3}
                    className="w-full bg-transparent border-0 border-b border-white/30 px-0 py-3 text-white placeholder:text-white/80 focus:border-white focus:outline-none resize-none text-base text-sm"
                    required
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                <button
              type="submit"
              className="bg-transparent border border-white text-white hover:bg-white hover:text-black px-9 py-2 rounded-full text-base font-medium transition-all duration-300 text-sm"
            >
              Send
            </button>
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
