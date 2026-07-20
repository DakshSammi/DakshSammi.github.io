'use client'

import { Briefcase } from 'lucide-react'

export function Experience() {
  const experiences = [
    {
      title: 'Research & Development Executive',
      company: 'MicroCrispr Pvt. Ltd. (Meril Life Sciences)',
      period: 'May 2025 - Present',
      location: 'New Delhi',
      description: 'Built schema-first biomedical knowledge graph systems with automated NLP-driven ETL pipelines processing 100K+ publications. Architected agentic AI systems for GEO sample curation, drug repositioning via GNNs, and disease/target discovery. Designed antibody developability ML/DL ensemble models predicting thermostability, hydrophobicity, and polyreactivity; ranked top-5 on Ginkgo leaderboard.',
      tags: ['Knowledge Graphs', 'ETL', 'NLP', 'GNNs', 'Agentic AI', 'PyTorch'],
    },
    {
      title: 'Part-Time Research Intern',
      company: 'Sharda University / University of Southern California',
      period: 'Jun - Aug 2026',
      location: 'Remote',
      description: 'Benchmarked OCRs, VLMs, and hybrid pipelines for Indian medical handwritten prescriptions. Working on knowledge-grounded agentic framework integrating extraction, semantic normalization, and medical ontologies for clinical information transformation.',
      tags: ['OCR', 'VLMs', 'Medical NLP', 'Clinical Data'],
    },
    {
      title: 'AI/ML Intern',
      company: 'VaidyaRx',
      period: 'May - Jul 2024',
      location: 'Remote',
      description: 'Engineered ETL pipelines for antimicrobial resistance research, normalized 10K+ prescription records achieving 95% data quality. Built LLM-powered RAG chatbot serving 5K+ user queries. Implemented smart medication reminder systems with 40% improvement in adherence tracking. Developed end-to-end handwritten prescription parser with 20+ pharmacy integrations.',
      tags: ['ETL', 'LLMs', 'RAG', 'Healthcare Data', 'Clinical NLP'],
    },
    {
      title: 'Undergraduate Researcher',
      company: 'KrACR Lab (IIITD)',
      period: 'Sep 2023 - Jun 2025',
      location: 'New Delhi',
      description: 'Designed and implemented ontology quality evaluation framework with 15+ heterogeneous metrics. Built LLM-powered recommendation engine using Llama/GPT-4 for automated improvement suggestions. Published at ER2025 (A-level conference).',
      tags: ['Ontology Engineering', 'LLMs', 'Semantic Web', 'Python'],
    },
    {
      title: 'Undergraduate Researcher',
      company: 'Complex Systems Lab (IIITD)',
      period: 'Aug 2024 - Jun 2025',
      location: 'New Delhi',
      description: 'Engineered comprehensive food ontology from 118,000+ recipes modeling 2K+ flavor molecules and ingredient relationships. Built semantic RAG-based chatbot achieving 89% recipe-flavor prediction accuracy. Submitted to FOIS2025.',
      tags: ['Knowledge Graphs', 'Ontology Modeling', 'RAG', 'Semantic Web'],
    },
    {
      title: 'Teaching Assistant',
      company: 'Indraprastha Institute of Information Technology (IIITD)',
      period: 'Jan - Jun 2025',
      location: 'New Delhi',
      description: 'Designed and delivered weekly tutorials for 150+ undergraduate students in MTH 201: Probability and Statistics. Created 8 problem sets covering probability theory, hypothesis testing, and statistical inference. Graded 600+ assignments with detailed feedback.',
      tags: ['Statistics', 'Teaching', 'Mentoring'],
    },
    {
      title: 'Coordinator',
      company: 'BioBytes Club (IIITD)',
      period: 'Jul 2023 - Aug 2024',
      location: 'New Delhi',
      description: 'Founded and led computational biology club attracting 50+ members. Organized 12 technical workshops on ML in bioinformatics, ontologies, and genomics. Mentored 15 students on undergraduate research projects.',
      tags: ['Leadership', 'Community Building', 'Bioinformatics'],
    },
    {
      title: 'Design Team Head',
      company: 'Creatives and Design Team (IIITD)',
      period: 'Aug 2022 - Jul 2023',
      location: 'New Delhi',
      description: 'Led visual design strategy for 20+ institute events. Created brand guidelines adopted campus-wide. Designed 50+ promotional materials achieving 20% increase in event attendance.',
      tags: ['Design', 'Branding', 'Creative Leadership'],
    },
    {
      title: 'Volunteer',
      company: 'Teach For India',
      period: 'Jan - Mar 2024',
      location: 'New Delhi',
      description: 'Mentored 30 underprivileged high school students in science and quantitative reasoning. Designed 15 interactive lessons. Improved average student science scores by 12%.',
      tags: ['Education', 'Mentoring', 'Community Service'],
    },
  ]

  return (
    <section id="experience" className="py-20 px-4 md:px-20 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="section-title text-primary">Experience</h2>
          <p className="text-muted-foreground max-w-2xl">
            Full-time research roles, internships, and academic positions spanning biomedical ML, knowledge systems, 
            healthcare data science, and leadership in research communities.
          </p>
        </div>

        <div className="space-y-6">
          {experiences.map((exp, idx) => (
            <div
              key={idx}
              className="neon-border p-6 md:p-8 hover:bg-background/30 transition-all duration-300 group"
            >
              <div className="flex gap-4 md:gap-6">
                <div className="flex-shrink-0 mt-1">
                  <div className="w-10 h-10 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Briefcase className="w-5 h-5 text-primary" />
                  </div>
                </div>

                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-2 mb-2">
                    <div>
                      <h3 className="text-lg md:text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {exp.title}
                      </h3>
                      <p className="text-accent font-medium text-sm">{exp.company}</p>
                    </div>
                    <span className="text-sm text-primary font-mono whitespace-nowrap">{exp.period}</span>
                  </div>

                  <p className="text-muted-foreground text-sm mb-3">{exp.location}</p>
                  <p className="text-foreground/80 mb-4 leading-relaxed">{exp.description}</p>

                  <div className="flex flex-wrap gap-2">
                    {exp.tags.map((tag, tagIdx) => (
                      <span
                        key={tagIdx}
                        className="code-block text-xs"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
