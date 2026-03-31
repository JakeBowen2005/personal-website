'use client';

import { Github, ExternalLink, Zap, Database, Brain, Clock } from 'lucide-react';

const projects = [
  {
    title: 'ClearBid',
    subtitle: 'HOA Vendor Bid Management SaaS',
    timeline: 'Mar 2026 – Present',
    description:
      'Founded and sole-developed a production SaaS automating vendor bid management. Zero to live product with real customers in 2 weeks.',
    stats: [
      { label: '2 weeks', value: 'to launch' },
      { label: '3', value: 'AI features' },
      { label: '∞', value: 'potential' },
    ],
    features: [
      'Django 6 + PostgreSQL backend',
      'Real-time contract generation via SSE',
      'AI vendor summarization',
      'PDF parsing and field auto-fill',
      'Google Places API integration',
      'Automated bid scoring (0-100)',
      'Dual-portal system',
      'Email invitations with tokens',
      'Renewal alerts (90/60/30/14 days)',
    ],
    tech: ['Python', 'Django', 'PostgreSQL', 'React', 'Claude API', 'Google Places API', 'AWS S3', 'Resend', 'Render'],
    links: {
      live: 'https://clearbid.us',
      github: 'https://github.com/JakeBowen2005/ClearBid',
    },
    featured: true,
  },
  {
    title: 'Stock Market Dashboard',
    subtitle: 'Real-time Stock Analytics Platform',
    timeline: 'Feb 2026 – Mar 2026',
    description:
      'Full-stack Django stock dashboard with advanced analytics engine, real-time alerts, and watchlist management.',
    stats: [
      { label: 'Pandas', value: 'analytics' },
      { label: 'Redis', value: 'caching' },
      { label: 'Celery', value: 'tasks' },
    ],
    features: [
      'User authentication system',
      'Watchlist management (8 tickers)',
      'Returns & CAGR calculation',
      'Volatility & drawdown analysis',
      'Moving average signals',
      'Price/percentage alerts',
      'Background job processing',
      'Real-time data via yfinance',
    ],
    tech: ['Django', 'PostgreSQL', 'Pandas', 'yfinance', 'Finnhub', 'Redis', 'Celery', 'Render'],
    links: {
      live: 'https://stock-dashboard-uef7.onrender.com',
      github: 'https://github.com/JakeBowen2005/Stock_Dashboard',
    },
  },
  {
    title: 'Garmin Running Analysis',
    subtitle: 'Personal Data → Performance Insights',
    timeline: 'Sep 2025 – Jan 2026',
    description:
      'Analyzed personal Garmin running data to identify trends. Shows ability to turn passion into technical projects.',
    stats: [
      { label: '50+', value: 'runs analyzed' },
      { label: 'Python', value: 'analysis' },
      { label: 'Matplotlib', value: 'visualization' },
    ],
    features: [
      'Data cleaning & normalization',
      'Weekly trend analysis',
      'Monthly performance metrics',
      'Pace consistency analysis',
      'Mileage distribution',
      'Progress visualization',
      'Distance-based segmentation',
      'Statistical insights',
    ],
    tech: ['Python', 'Pandas', 'Matplotlib', 'Jupyter'],
    links: {
      github: 'https://github.com/JakeBowen2005/Garmin-running-summary',
    },
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container-max">
        {/* Header */}
        <div className="mb-20 animate-fade-in-up">
          <div className="accent-line mb-8"></div>
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
            Work that speaks
            <br />
            <span className="gradient-text">for itself</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            From shipped SaaS platforms with real customers to data analysis projects — here's what I've built and shipped.
          </p>
        </div>

        {/* Projects Grid */}
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
                {/* Header */}
                <div>
                  {project.featured && (
                    <p className="text-blue-600 text-sm font-bold uppercase tracking-widest mb-3">
                      ⭐ Featured Project
                    </p>
                  )}
                  <div className="space-y-2 mb-4">
                    <h2 className="text-4xl md:text-5xl font-bold text-gray-900">{project.title}</h2>
                    <p className="text-lg text-gray-600">{project.subtitle}</p>
                  </div>
                  <p className="text-gray-600 leading-relaxed max-w-3xl text-lg">{project.description}</p>
                  <p className="text-sm text-gray-500 mt-4 font-medium">{project.timeline}</p>
                </div>

                {/* Stats */}
                {project.stats && (
                  <div className="grid grid-cols-3 gap-6 py-6 border-y border-gray-200">
                    {project.stats.map((stat, i) => (
                      <div key={i}>
                        <p className="text-blue-600 font-bold text-2xl">{stat.label}</p>
                        <p className="text-gray-600 text-sm">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                )}

                {/* Content Grid */}
                <div className="grid md:grid-cols-2 gap-12">
                  {/* Features */}
                  <div>
                    <h4 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-widest">Features</h4>
                    <ul className="space-y-2">
                      {project.features.map((feature, i) => (
                        <li key={i} className="text-gray-700 flex items-start gap-3">
                          <span className="text-blue-600 font-bold flex-shrink-0">▸</span>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Tech Stack */}
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
                </div>

                {/* Links */}
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

        {/* Philosophy Section */}
        <div className="mt-32 pt-20 border-t border-gray-200 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-12 text-center">
            How I approach building
          </h2>

          <div className="grid md:grid-cols-2 gap-8 stagger-children">
            {[
              {
                icon: Clock,
                title: 'Bias for shipping',
                description:
                  '80% shipped beats 99% stuck in development. Real feedback from real users teaches more than planning.',
              },
              {
                icon: Zap,
                title: 'Speed with quality',
                description:
                  '2 weeks to ClearBid v1 proved I can move fast. But speed without solid engineering is technical debt.',
              },
              {
                icon: Database,
                title: 'Real products',
                description:
                  'ClearBid isn\'t a classroom project. Real property management companies rely on it. That changes everything.',
              },
              {
                icon: Brain,
                title: 'Constant learning',
                description:
                  'Every project taught me something new. Django, React, APIs, DevOps. I\'m hungry to learn faster.',
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

        {/* Final CTA */}
        <div className="mt-20 p-12 md:p-16 text-center bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-3xl animate-fade-in-up">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Want to work together?</h3>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto text-lg">
            I'm actively looking for summer 2026 internships. Let's talk about what we can build.
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
