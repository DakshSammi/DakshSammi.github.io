'use client'

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="border-t border-primary/15 bg-card/50 py-8 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* About */}
          <div>
            <h3 className="text-sm font-semibold text-primary mb-3 uppercase tracking-widest">About</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Biomedical ML researcher exploring knowledge graphs, NLP, and healthcare AI innovation.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-primary mb-3 uppercase tracking-widest">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              {[
                { label: 'Resume', href: '#' },
                { label: 'GitHub', href: 'https://github.com/dakshsammi' },
                { label: 'LinkedIn', href: 'https://linkedin.com/in/daksh-sammi' },
                { label: 'Email', href: 'mailto:dakshsammi1@gmail.com' },
              ].map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Credits */}
          <div>
            <h3 className="text-sm font-semibold text-primary mb-3 uppercase tracking-widest">Tech Stack</h3>
            <p className="text-sm text-muted-foreground">
              Built with <span className="text-primary">Next.js 16</span>, <span className="text-primary">Tailwind CSS v4</span>, and deployed on <span className="text-primary">Vercel</span>.
            </p>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary/15 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground/60">
            © {currentYear} Daksh Sammi. All rights reserved.
          </p>
          <p className="text-sm text-muted-foreground/60 font-mono">
            <span className="text-primary">{'>'}</span> Advancing AI for healthcare and discovery
          </p>
        </div>
      </div>
    </footer>
  )
}
