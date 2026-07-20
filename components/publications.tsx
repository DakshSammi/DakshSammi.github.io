'use client'

import { Award, FileText, Trophy } from 'lucide-react'

export function Publications() {
  const publications = [
    {
      type: 'Conference',
      title: 'OntoInsight: Ontology Quality Evaluation with LLM-Powered Recommendations',
      venue: '44th International Conference on Conceptual Modeling (ER2025)',
      date: '2025',
      description: 'A-level publication presenting a scalable framework for evaluating ontology quality across 15+ metrics with LLM-powered improvement suggestions.',
      link: 'https://doi.org/10.1007/978-3-032-08623-5_21',
      status: 'Published',
    },
    {
      type: 'Journal',
      title: 'Ginkgo Datapoints Antibody Developability Competition Outcomes: Limited Model Performance and a Call for Data Standardization',
      venue: 'mAbs Journal',
      date: 'February 2026',
      description: 'Published research on antibody developability ML/DL ensemble models, ranked top-5 on Ginkgo leaderboard with 8+ models.',
      link: 'https://doi.org/10.1080/19420862.2026.2634216',
      status: 'Published',
    },
    {
      type: 'Conference Workshop',
      title: 'Benchmarking OCRs and VLMs for Indian Medical Handwritten Prescriptions',
      venue: 'BDA 2026 (Big Data Analytics)',
      date: '2026',
      description: 'Research on OCR and vision-language model performance for medical document processing with Indian prescriptions.',
      status: 'Submitted',
    },
    {
      type: 'Conference Workshop',
      title: 'Food Ontology Development',
      venue: 'FOIS 2025 (Formal Ontology in Information Systems)',
      date: '2025',
      description: 'Comprehensive food ontology modeling 118,000+ recipes with semantic RAG-based recommendation systems achieving 89% accuracy.',
      status: 'Submitted',
    },
    {
      type: 'Journal',
      title: 'Knowledge-Grounded Agentic Framework for Clinical Information Transformation',
      venue: 'IEEE Journal of Biomedical and Health Informatics (IF 7.6)',
      date: '2026 (In Progress)',
      description: 'Working on agentic AI framework integrating extraction, semantic normalization, and medical ontologies for handwritten records transformation.',
      status: 'In Progress',
    },
  ]

  const achievements = [
    {
      icon: Trophy,
      title: '1st Place',
      subtitle: 'TBO Voyage Hack - Healthcare Hackathon',
      detail: 'Prize: Rs. 5,00,000',
    },
    {
      icon: Award,
      title: '2nd Place',
      subtitle: 'SEED Global Hackathon',
      detail: 'Boston University & George Washington University',
    },
    {
      icon: Award,
      title: '2nd Place',
      subtitle: 'BiKE Challenge at ESWC\'2026',
      detail: 'LLM-TEXT2KG Workshop',
    },
    {
      icon: Award,
      title: '2nd Place',
      subtitle: 'Anveshan 2.0 Hackathon',
      detail: 'Prize: Rs. 40,000',
    },
    {
      icon: Trophy,
      title: '3rd Place',
      subtitle: 'Hardinge Hackathon',
      detail: 'Security & Defense Challenge',
    },
    {
      icon: Award,
      title: 'NTSE Scholar',
      subtitle: 'National Talent Search Examination',
      detail: 'Top 1% of India',
    },
    {
      icon: Award,
      title: 'Dean\'s List Awardee',
      subtitle: 'IIITD',
      detail: 'Distinguished Graduate',
    },
    {
      icon: FileText,
      title: 'Certifications',
      subtitle: 'Multiple Achievements',
      detail: 'Learn to Program, Intro to ML, Knowledge Graphs, Deep Learning, Winter School & Neuro-Symbolic AI Summer School',
    },
  ]

  return (
    <section id="publications" className="py-20 px-4 md:px-20 bg-card/50">
      <div className="max-w-6xl mx-auto">
        <div className="mb-16">
          <h2 className="section-title text-primary">Publications & Recognition</h2>
          <p className="text-muted-foreground max-w-2xl">
            Peer-reviewed publications in A-level conferences and journals, along with significant hackathon 
            wins and academic recognition.
          </p>
        </div>

        {/* Publications */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
            <FileText className="w-6 h-6 text-primary" />
            Research Publications
          </h3>

          <div className="space-y-6">
            {publications.map((pub, idx) => (
              <div key={idx} className="neon-border p-6 md:p-8 group hover:bg-background/30 transition-all">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="px-3 py-1 bg-primary/20 text-primary text-xs font-semibold rounded-full">
                        {pub.type}
                      </span>
                      <span className={`px-3 py-1 text-xs font-semibold rounded-full ${
                        pub.status === 'Published' ? 'bg-accent/20 text-accent' :
                        pub.status === 'Submitted' ? 'bg-yellow-500/20 text-yellow-300' :
                        'bg-sky-500/20 text-sky-300'
                      }`}>
                        {pub.status}
                      </span>
                    </div>
                    <h4 className="text-lg md:text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {pub.title}
                    </h4>
                    <p className="text-primary font-medium mb-1">{pub.venue}</p>
                    <p className="text-sm text-muted-foreground">{pub.date}</p>
                  </div>
                  {pub.link && (
                    <a
                      href={pub.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-accent hover:text-primary transition-colors text-sm font-medium whitespace-nowrap self-start md:self-center"
                    >
                      View Paper →
                    </a>
                  )}
                </div>
                <p className="text-foreground/80 leading-relaxed">{pub.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Achievements & Awards */}
        <div>
          <h3 className="text-2xl font-bold text-foreground mb-8 flex items-center gap-2">
            <Trophy className="w-6 h-6 text-primary" />
            Achievements & Awards
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {achievements.map((achievement, idx) => {
              const Icon = achievement.icon
              return (
                <div key={idx} className="neon-border p-6 hover:bg-background/30 transition-all group">
                  <div className="flex justify-center mb-4">
                    <div className="w-12 h-12 rounded-lg bg-primary/20 border border-primary/30 flex items-center justify-center group-hover:bg-primary/30 transition-colors">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                  </div>
                  <h4 className="font-bold text-foreground text-center mb-1 group-hover:text-primary transition-colors">
                    {achievement.title}
                  </h4>
                  <p className="text-sm text-muted-foreground text-center mb-2">
                    {achievement.subtitle}
                  </p>
                  <p className="text-xs text-accent text-center font-medium">
                    {achievement.detail}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
