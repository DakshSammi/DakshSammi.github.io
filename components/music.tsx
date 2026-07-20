'use client'

import { Music as MusicIcon } from 'lucide-react'

export function Music() {
  const currentSongEmbedUrl = 'https://open.spotify.com/embed/track/3fc3piWEXs8OoJ0oTIrs5V'

  return (
    <section id="music" className="py-20 px-4 md:px-20 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <h2 className="section-title text-primary flex items-center gap-3">
            <MusicIcon className="w-8 h-8" />
            Currently Listening
          </h2>
          <p className="text-muted-foreground max-w-2xl">
            Here's what I'm vibing to right now. Music fuels creativity and focus during research and development.
          </p>
        </div>

        {/* Spotify Embed */}
        <div className="neon-border rounded-2xl p-6 overflow-hidden bg-background/40 mb-12">
          <iframe
            style={{
              borderRadius: '12px',
              border: '1px solid rgba(212, 175, 55, 0.3)',
            }}
            src={`${currentSongEmbedUrl}?utm_source=generator&theme=dark`}
            width="100%"
            height="352"
            frameBorder="0"
            allowFullScreen
            allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
            loading="lazy"
          ></iframe>
        </div>

        {/* Description */}
        <div className="neon-border p-6 md:p-8 hover:bg-background/30 transition-all">
          <h3 className="text-lg font-bold text-foreground mb-4 flex items-center gap-2">
            <MusicIcon className="w-5 h-5 text-primary" />
            Music & Creativity
          </h3>
          <p className="text-foreground/80 leading-relaxed">
            Music is integral to my creative process. Whether deep diving into biomedical research, building scalable AI systems, or solving complex problems, 
            the right track sets the rhythm for breakthrough thinking. Great music enhances focus, sparks innovation, and sustains energy through long coding and research sessions.
          </p>
        </div>
      </div>
    </section>
  )
}
