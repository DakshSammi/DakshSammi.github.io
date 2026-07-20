'use client'

import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false)
  const [activeSection, setActiveSection] = useState('hero')

  useEffect(() => {
    const observerOptions = {
      threshold: 0.5,
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id)
        }
      })
    }, observerOptions)

    const sections = document.querySelectorAll('section[id]')
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])

  const navItems = [
    { label: 'About', href: '#about' },
    { label: 'Projects', href: '#projects' },
    { label: 'Experience', href: '#experience' },
    { label: 'Skills', href: '#skills' },
    { label: 'Publications', href: '#publications' },
    { label: 'Contact', href: '#contact' },
  ]

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-primary/15">
      <div className="max-w-6xl mx-auto px-4 md:px-20 py-4 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-xl font-bold text-primary hover:text-accent transition-colors">
          DS.
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={`text-sm font-medium transition-colors ${
                activeSection === item.href.slice(1)
                  ? 'text-primary'
                  : 'text-muted-foreground hover:text-primary'
              }`}
            >
              {item.label}
            </a>
          ))}
          <a
            href="/daksh-sammi-resume.pdf"
            download="Daksh-Sammi-Resume.pdf"
            className="px-4 py-2 text-sm font-medium bg-primary/20 border border-primary text-primary rounded-lg hover:bg-primary/30 transition-all"
          >
            Resume
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-foreground hover:text-primary transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden border-t border-primary/15 bg-background/95 backdrop-blur-sm">
          <div className="px-4 py-4 space-y-3">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className={`block px-4 py-2 rounded transition-colors ${
                  activeSection === item.href.slice(1)
                    ? 'bg-primary/20 text-primary'
                    : 'text-muted-foreground hover:text-primary'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <a
              href="/daksh-sammi-resume.pdf"
              download="Daksh-Sammi-Resume.pdf"
              className="block px-4 py-2 rounded text-sm font-medium bg-primary/20 border border-primary text-primary hover:bg-primary/30 transition-all text-center"
              onClick={() => setIsOpen(false)}
            >
              Resume
            </a>
          </div>
        </div>
      )}
    </nav>
  )
}
