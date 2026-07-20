'use client'

import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

export function Hero() {
  const scrollToNext = () => {
    const aboutSection = document.getElementById('about')
    aboutSection?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section className="min-h-screen flex flex-col items-center justify-center relative overflow-hidden pt-20 px-4 md:px-0">
      {/* Animated background orbs */}
      <div className="absolute top-20 right-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 left-10 w-96 h-96 bg-accent/8 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>

      <div className="relative z-10 text-center max-w-4xl">
        {/* Profile Image */}
        <div className="mb-8 flex justify-center">
          <div className="relative w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden border-2 border-primary/60 neon-border">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/asagao7_shukrana-xKkXx5iUrwj70IUCBq67B4gGRkNEK2.jpg"
              alt="Daksh Sammi"
              fill
              className="object-cover"
            />
          </div>
        </div>

        {/* Main Title */}
        <h1 className="text-5xl md:text-7xl font-bold mb-4 glow-text">
          Daksh Sammi
        </h1>

        {/* Subtitle */}
        <p className="text-xl md:text-2xl text-primary mb-2">
          Knowledge Graphs, Biomedical ML &amp; Healthcare AI
        </p>

        {/* Description */}
        <p className="text-base md:text-lg text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          AI researcher &amp; engineer passionate about bridging artificial intelligence and healthcare through data-driven innovation. 
          Expertise in knowledge representation, NLP, large language models, and biomedical data science.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a
            href="#projects"
            className="px-8 py-3 bg-primary/20 border border-primary text-primary rounded-lg hover:bg-primary/30 transition-all duration-300 font-medium"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-8 py-3 bg-transparent border border-muted text-foreground rounded-lg hover:border-primary hover:text-primary transition-all duration-300 font-medium"
          >
            Get in Touch
          </a>
        </div>

        {/* Scroll Indicator */}
        <button
          onClick={scrollToNext}
          className="flex justify-center w-full animate-bounce"
        >
          <ChevronDown className="w-6 h-6 text-primary" />
        </button>
      </div>
    </section>
  )
}
