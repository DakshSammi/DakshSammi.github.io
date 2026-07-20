import { Navigation } from '@/components/navigation'
import { Hero } from '@/components/hero'
import { About } from '@/components/about'
import { Projects } from '@/components/projects'
import { Experience } from '@/components/experience'
import { Skills } from '@/components/skills'
import { Publications } from '@/components/publications'
import { Music } from '@/components/music'
import { Contact } from '@/components/contact'
import { Footer } from '@/components/footer'

export default function Page() {
  return (
    <>
      <Navigation />
      <main className="min-h-screen">
        <Hero />
        <About />
        <Projects />
        <Experience />
        <Skills />
        <Publications />
        <Music />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
