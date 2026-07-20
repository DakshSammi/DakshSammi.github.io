'use client'

import Image from 'next/image'

export function About() {
  return (
    <section id="about" className="min-h-screen flex items-center py-20 px-4 md:px-20">
      <div className="max-w-6xl w-full">
        <h2 className="section-title text-primary">About Me</h2>

        <div className="grid md:grid-cols-2 gap-12 mb-12">
          {/* Left Column - Text */}
          <div className="space-y-6">
            <p className="text-foreground/80 leading-relaxed">
              I&apos;m passionate about bridging artificial intelligence and healthcare through data-driven innovation, interpretability, and real-world impact. 
              My work lies at the intersection of machine learning, biomedical data science, and knowledge representation, where I strive to make AI systems 
              more explainable, ethical, and clinically relevant.
            </p>

            <p className="text-foreground/80 leading-relaxed">
              At MicroCrispr, I&apos;ve designed scalable biomedical knowledge graphs processing 100K+ publications with automated NLP-driven ETL pipelines. 
              I&apos;ve architected agentic AI systems for automated target-drug discovery, data curation, and semantic analysis. My research spans graph neural networks, 
              ontology engineering, RAG systems, and end-to-end feature engineering.
            </p>

            <p className="text-foreground/80 leading-relaxed">
              I&apos;m a B.Tech Honours graduate in Computer Science and Biosciences from IIITD (CGPA 8.32/10), Dean&apos;s List Awardee, and NTSE Scholar (top 1% of India). 
              My work has been published at ER2025 (A-level conference) and mAbs Journal, with multiple hackathon wins and research submissions.
            </p>

            <div className="pt-4">
              <p className="text-primary font-mono text-sm mb-3">// Key Areas of Expertise</p>
              <ul className="space-y-2 text-foreground/80">
                <li className="flex items-center gap-2">
                  <span className="text-primary">{'>'}</span> Biomedical ML & Knowledge Graphs
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">{'>'}</span> NLP & Large Language Models
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">{'>'}</span> Ontology Engineering & Semantic Web
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">{'>'}</span> Healthcare AI Systems
                </li>
                <li className="flex items-center gap-2">
                  <span className="text-primary">{'>'}</span> ETL Pipelines & Data Engineering
                </li>
              </ul>
            </div>
          </div>

          {/* Right Column - Images */}
          <div className="space-y-4">
            <div className="relative w-full h-80 rounded-lg overflow-hidden neon-border">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/JaiGuruJioffice-rSMVrUVkflUGzJxi4YotirITD7rHJ5.jpg"
                alt="Working at MicroCrispr"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="relative w-full h-56 rounded-lg overflow-hidden neon-border">
              <Image
                src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Teach%20For%20India-OrLvEnvbmFAFTj5y2wRcGCC5X5awST.jpg"
                alt="Teaching with Teach For India"
                fill
                className="object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
