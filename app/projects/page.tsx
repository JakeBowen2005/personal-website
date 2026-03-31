'use client';

import { Github, ExternalLink, Zap, Database, Brain, Clock } from 'lucide-react';
import ImagePlaceholder from '@/components/ImagePlaceholder';

const projects = [
  {
    title: 'ClearBid',
    subtitle: 'HOA Vendor Bid Management SaaS',
    timeline: 'Mar 2026 – Present',
    description:
      'Sole engineer for a production SaaS platform that streamlines vendor bidding, contract workflows, and renewal tracking for HOA organizations.',
    stats: [
      { label: '2 weeks', value: 'idea to live V1' },
      { label: '3', value: 'AI workflows shipped' },
      { label: 'Live', value: 'active demos in progress' },
    ],
    features: [
      'Tokenized vendor invitations and no-login bid submission',
      'Real-time contract generation via server-sent events',
      'AI-assisted PDF parsing to auto-fill contract fields',
      'Automated bid scoring model (price, timeline, compliance, experience)',
      'Google Places integration with staged loading and caching',
      'Dual portal experience for boards and management firms',
      'Automated renewal alerts at 90/60/30/14-day intervals',
    ],
    tech: ['Python', 'Django', 'PostgreSQL', 'Tailwind CSS', 'Claude API', 'Google Places API', 'AWS S3', 'Resend', 'Render'],
    links: {
      live: 'https://clearbid.us',
      github: 'https://github.com/JakeBowen2005/ClearBid',
    },
    screenshotPlaceholder: 'ClearBid product dashboard and workflow screenshots',
    featured: true,
  },
  {
    title: 'Stock Market Dashboard',
    subtitle: 'Analytics + Alerting Platform',
    timeline: 'Feb 2026 – Mar 2026',
    description:
      'Built a full-stack equities dashboard with account-based watchlists, metric computation pipelines, and automated price movement alerting.',
    stats: [
      { label: 'Pandas', value: 'analytics engine' },
      { label: 'Redis', value: 'fast data layer' },
      { label: 'Celery', value: 'background processing' },
    ],
    features: [
      'Secure authentication and user watchlist management',
      'Returns, CAGR, drawdown, and volatility calculations',
      'Moving-average and valuation indicator tracking',
      'Threshold-based price and percentage alerting',
      'Scheduled background checks for alert triggers',
      'Real-time market data integration via yfinance and Finnhub',
    ],
    tech: ['Django', 'PostgreSQL', 'Pandas', 'yfinance', 'Finnhub', 'Redis', 'Celery', 'Render'],
    links: {
      live: 'https://stock-dashboard-uef7.onrender.com',
      github: 'https://github.com/JakeBowen2005/Stock_Dashboard',
    },
    screenshotPlaceholder: 'Stock dashboard watchlist and analytics views',
  },
  {
    title: 'Garmin Running Analysis',
    subtitle: 'Performance Data Exploration Project',
    timeline: 'Sep 2025 – Jan 2026',
    description:
      'Analyzed personal running history to uncover pacing consistency, volume trends, and performance progression using reproducible Python workflows.',
    stats: [
      { label: '50+', value: 'runs analyzed' },
      { label: 'Python', value: 'data workflow' },
      { label: 'Matplotlib', value: 'visual reporting' },
    ],
    features: [
      'Data cleaning and normalization pipeline',
      'Weekly and monthly trend decomposition',
      'Pace consistency and mileage distribution analysis',
      'Distance-based segment comparisons',
      'Performance progression visualizations',
      'Statistical summaries for training insights',
    ],
    tech: ['Python', 'Pandas', 'Matplotlib', 'Jupyter'],
    links: {
      github: 'https://github.com/JakeBowen2005/Garmin-running-summary',
    },
    screenshotPlaceholder: 'Charts showing pace trends, volume, and performance improvements',
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container-max">
        <div className="mb-20 animate-fade-in-up">
          <div className="accent-line mb-8"></div>
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
            Selected
            <br />
            <span className="gradient-text">Engineering Work</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Projects built with a product mindset: clear user problems, measurable outcomes, and fast execution from concept to delivery.
          </p>
        </div>

        <div className="space-y-12">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className={`card-interactive animate-fade-in-up overflow-hidden ${
                project.featured ? 'ring-2 ring-blue-400 ring-offset-4' : ''
              }`}
              style={{ animationDelay: `${idx * 0.1}s` }}
            >
              <div className="space-y-8">
                <div>
                  {project.featured && (
                    <p className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3">Featured Project</p>
                  )}
                  <div className="space-y-2 mb-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{project.title}</h2>
                    <p className="text-lg text-gray-600">{project.subtitle}</p>
                  </div>
                  <p className="text-gray-600 leading-relaxed max-w-3xl text-lg">{project.description}</p>
                  <p className="text-sm text-gray-500 mt-4 font-medium">{project.timeline}</p>
                </div>

                <div className="grid grid-cols-3 gap-6 py-6 border-y border-gray-200">
                  {project.stats.map((stat, i) => (
                    <div key={i}>
                      <p className="text-blue-600 font-bold text-2xl">{stat.label}</p>
                      <p className="text-gray-600 text-sm">{stat.value}</p>
                    </div>
                  ))}
                </div>

                <div className="grid md:grid-cols-2 gap-12">
                  <div>
                    <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-widest">Impact Highlights</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-gray-700 flex items-start gap-3">
                          <span className="text-blue-600 font-bold flex-shrink-0">▸</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-widest">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.tech.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <ImagePlaceholder
                      title={`${project.title} Screenshot Slot`}
                      note={`Drop in images for: ${project.screenshotPlaceholder}.`}
                      ratio="wide"
                    />
                  </div>
                </div>

                <div className="flex flex-wrap gap-4 pt-6 border-t border-gray-200">
                  {project.links.live && (
                    <a
                      href={project.links.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-all group"
                    >
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition" />
                      View Live App
                    </a>
                  )}
                  {project.links.github && (
                    <a
                      href={project.links.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-gray-700 hover:text-blue-600 font-semibold transition-all group"
                    >
                      <Github className="w-4 h-4 group-hover:translate-x-1 transition" />
                      View Source Code
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-32 pt-20 border-t border-gray-200 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">How I build products</h2>

          <div className="grid md:grid-cols-2 gap-8 stagger-children">
            {[
              {
                icon: Clock,
                title: 'Bias for delivery',
                description:
                  'I optimize for learning velocity: ship useful versions early, gather feedback, and improve quickly based on real behavior.',
              },
              {
                icon: Zap,
                title: 'Speed with engineering discipline',
                description:
                  'Fast iteration works only when paired with clean structure, maintainable code, and thoughtful tradeoff decisions.',
              },
              {
                icon: Database,
                title: 'Real customer context',
                description:
                  'Building for actual users sharpens priorities, forces clarity, and improves product judgment far beyond classroom scope.',
              },
              {
                icon: Brain,
                title: 'High-growth mindset',
                description:
                  'I actively seek environments with strong engineers, hard technical problems, and direct feedback loops.',
              },
            ].map((item, idx) => (
              <div key={idx} className="card-interactive animate-fade-in-up">
                <item.icon className="w-8 h-8 text-blue-600 mb-4" />
                <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-20 p-12 md:p-16 text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-3xl animate-fade-in-up">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Interested in collaborating?</h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            I&apos;m looking for summer 2026 internship opportunities where I can contribute to production software and keep compounding as an engineer.
          </p>
          <a href="mailto:jakeeb05@gmail.com" className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all">
            Send me a message
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </div>
    </main>
  );
}
