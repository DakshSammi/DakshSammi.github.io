'use client'

import { ExternalLink } from 'lucide-react'

export function Projects() {
  const projects = [
    {
      title: 'OntoInsight',
      subtitle: 'Ontology Quality Evaluation with LLM-Powered Recommendations',
      description: 'B.Tech thesis project engineered a scalable system evaluating ontology quality across 15+ metrics. Built LLM-powered suggestion engine using Llama/GPT-4 for automated improvement recommendations. Published at 44th International Conference on Conceptual Modeling (ER2025).',
      technologies: ['Python', 'LLMs', 'Ontology Engineering', 'NLP'],
      link: 'https://github.com/kracr/onto-insight',
      dates: 'Jan 2024 - Feb 2025',
      impact: 'A-level conference publication (ER2025)'
    },
    {
      title: 'Food Ontology Development',
      subtitle: 'Semantic Knowledge Representation for Culinary Applications',
      description: 'Built comprehensive food ontology modeling 118,000+ recipes with 2,000+ flavor molecule relationships from RecipeDB and FlavorDB. Developed semantic RAG-based recommendation system achieving 89% accuracy for recipe-flavor predictions.',
      technologies: ['Ontology Modeling', 'SPARQL', 'RAG', 'Knowledge Graphs'],
      link: 'https://github.com/cosylabiiit/FoodOnt',
      dates: 'Aug - Sep 2024',
      impact: 'Submitted to FOIS2025'
    },
    {
      title: 'Biomedical Knowledge Graph System',
      subtitle: 'Automated NLP-Driven ETL Pipeline for Healthcare Data',
      description: 'Designed and deployed scalable biomedical knowledge graphs with automated NLP-driven ETL pipelines processing 100K+ publications and clinical records. Engineered time-series forecasting models for journal growth predictions (PubMed metadata).',
      technologies: ['Python', 'ETL', 'NLP', 'Knowledge Graphs', 'Time Series'],
      dates: 'May 2025 - Present',
      impact: 'Production system at MicroCrispr'
    },
    {
      title: 'LLM-Powered Medical RAG Chatbot',
      subtitle: 'Domain-Specific Question Answering for Healthcare',
      description: 'Engineered LLM-powered RAG chatbot using BotPress with custom domain knowledge base deployed across product website and mobile app. Served 5K+ user queries with contextual medication information, improving user engagement.',
      technologies: ['BotPress', 'LLMs', 'RAG', 'Healthcare NLP'],
      dates: 'May - Jul 2024',
      impact: '5000+ queries served, 40% improvement in medication adherence'
    },
    {
      title: 'Handwritten Prescription Parser',
      subtitle: 'OCR & Clinical Entity Extraction System',
      description: 'Developed end-to-end handwritten prescription parser with OCR preprocessing and clinical entity extraction. Integrated ONDC APIs enabling 20+ pharmacy network integrations for seamless medication delivery.',
      technologies: ['OCR', 'Entity Extraction', 'Clinical NLP', 'APIs'],
      dates: 'May - Jul 2024',
      impact: '20+ pharmacy integrations, 95% data quality'
    },
  ]

  return (
    <section id="projects" className="py-20 px-4 md:px-20 bg-card/50">
      <div className="max-w-6xl mx-auto">
        {/* Section Title */}
        <div className="mb-16">
          <h2 className="section-title text-primary">Featured Projects</h2>
          <p className="text-muted-foreground max-w-2xl">
            Showcasing AI, knowledge engineering, and healthcare innovation projects spanning biomedical ML, 
            knowledge graphs, NLP, and data pipelines.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="group neon-border bg-background/40 hover:bg-background/60 transition-all duration-300 p-6 md:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-foreground mb-1">{project.title}</h3>
                  <p className="text-primary font-medium">{project.subtitle}</p>
                  <p className="text-sm text-muted-foreground mt-1">{project.dates}</p>
                </div>
                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-accent hover:text-primary transition-colors self-start md:self-center"
                  >
                    <ExternalLink className="w-4 h-4" />
                  </a>
                )}
              </div>

              <p className="text-foreground/80 mb-4 leading-relaxed">{project.description}</p>

              {/* Technologies */}
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech) => (
                  <span key={tech} className="code-block text-xs md:text-sm">
                    {tech}
                  </span>
                ))}
              </div>

              {/* Impact */}
              {project.impact && (
                <p className="text-sm text-accent font-medium border-t border-primary/20 pt-3 mt-4">
                  ✦ {project.impact}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
