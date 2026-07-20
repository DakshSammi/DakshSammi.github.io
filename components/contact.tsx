'use client'

import { Phone } from 'lucide-react'

export function Contact() {
  const phone = '+91 7982963117'

  return (
    <section id="contact" className="py-20 px-4 md:px-20">
      <div className="max-w-4xl mx-auto">
        <h2 className="section-title text-primary">Let&apos;s Connect</h2>

        <div className="neon-border p-8 md:p-12 text-center">
          <p className="text-foreground/80 text-lg leading-relaxed mb-8">
            Open to research opportunities, collaborations, and conversations about AI, biomedical innovation, 
            and knowledge systems. Feel free to reach out!
          </p>

          <div className="flex flex-col items-center gap-6">
            <div className="flex items-center gap-4 text-2xl font-bold">
              <Phone className="w-8 h-8 text-accent" />
              <a 
                href={`tel:${phone.replace(/\s/g, '')}`}
                className="text-primary hover:text-accent transition-colors"
              >
                {phone}
              </a>
            </div>
            
            <p className="text-sm text-muted-foreground">
              Based in Gurugram, Haryana, India
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
