'use client'

import { Code2, Database, Zap, BookOpen } from 'lucide-react'

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: 'Languages & Programming',
      skills: ['Python', 'C++', 'C', 'Java', 'R', 'SQL', 'SPARQL', 'RDF', 'OWL', 'Turtle', 'JSON-LD'],
    },
    {
      icon: Database,
      title: 'ML/AI & Data Science',
      skills: [
        'Machine Learning',
        'Deep Learning',
        'Knowledge Graphs',
        'Ontology Engineering',
        'Natural Language Processing',
        'Large Language Models',
        'Graph Neural Networks',
        'Biomedical Data Analysis',
        'Time Series Forecasting',
        'Entity Extraction',
        'RAG Systems',
        'Neural Networks',
      ],
    },
    {
      icon: Zap,
      title: 'Tools, Frameworks & Platforms',
      skills: [
        'Python Ecosystem: scikit-learn, NumPy, Pandas, PyTorch, OpenCV',
        'Web Frameworks: Flask, FastAPI',
        'Data Engineering: Docker, AWS, MinIO, Dagster, Apache Airflow',
        'Databases: PostgreSQL, MySQL, Neo4j, RDF Stores',
        'Semantic Web: Protégé, SPARQL',
        'Bioinformatics: NCBI, PDB, ComfyUI',
        'Visualization: PowerBI, Excel',
        'Development: Git, VSCode, Figma',
      ],
    },
    {
      icon: BookOpen,
      title: 'Languages (Non-Programming)',
      skills: [
        'English (Native or Bilingual)',
        'Punjabi (Native or Bilingual)',
        'Japanese (Elementary)',
        'German (Elementary)',
      ],
    },
  ]

  const expertise = [
    'Machine Learning & Deep Learning',
    'Knowledge Graphs & Ontologies',
    'NLP & Large Language Models',
    'Biomedical Data Analysis',
    'ETL Pipelines & Data Engineering',
    'Graph Neural Networks',
    'RAG & Semantic Search',
    'Healthcare AI Systems',
  ]

  return (
    <section id="skills" className="py-20 px-4 md:px-20">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="section-title text-primary">Skills & Technologies</h2>
          <p className="text-muted-foreground max-w-2xl">
            Deep expertise across machine learning, biomedical data science, semantic web technologies, 
            and healthcare AI systems.
          </p>
        </div>

        {/* Expertise Highlights */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-12">
          {expertise.map((exp, idx) => (
            <div key={idx} className="neon-border p-4 text-center group hover:bg-primary/5 transition-colors">
              <p className="text-foreground font-medium group-hover:text-primary transition-colors">{exp}</p>
            </div>
          ))}
        </div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, idx) => {
            const Icon = category.icon
            return (
              <div key={idx} className="neon-border p-6 hover:bg-background/30 transition-all duration-300 group">
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                </div>

                <div className="space-y-2">
                  {category.skills.map((skill, skillIdx) => (
                    <div
                      key={skillIdx}
                      className="flex items-center gap-2 text-foreground/80 group/skill cursor-pointer"
                    >
                      <span className="text-primary opacity-0 group-hover/skill:opacity-100 transition-opacity">▸</span>
                      <span className="group-hover/skill:text-primary transition-colors">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
