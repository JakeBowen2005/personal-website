'use client';

import Link from 'next/link';
import { ArrowRight, Code2, Zap, Trophy, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <section className="pt-40 pb-32 relative overflow-hidden">
        <div className="container-max">
          <div className="max-w-4xl">
            {/* Top accent */}
            <div className="accent-line mb-8 animate-fade-in-up" style={{ animationDelay: '0s' }}></div>

            {/* Main headline */}
            <h1 className="text-6xl md:text-7xl font-bold leading-tight mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
              Builder. Engineer.
              <br />
              <span className="gradient-text">Always Learning.</span>
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
              I'm early in my career, but I don't stop building. ClearBid went from zero to live in 2 weeks. I want to join a team where I can learn from engineers better than me.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
              <Link href="/projects" className="btn-primary">
                See my work
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a href="mailto:jakeeb05@gmail.com" className="btn-secondary no-underline">
                <Mail className="w-4 h-4" />
                Let's chat
              </a>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 md:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
              {[
                { number: '2', label: 'Weeks to launch' },
                { number: '3', label: 'AI integrations' },
                { number: '∞', label: 'Hunger to learn' },
              ].map((stat, idx) => (
                <div key={idx} className="border-l-2 border-blue-600 pl-4">
                  <p className="text-3xl md:text-4xl font-bold text-gray-900">{stat.number}</p>
                  <p className="text-gray-600 text-sm mt-2">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Parallax background element */}
        <div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-purple-100 rounded-full blur-3xl opacity-30 -z-10"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
      </section>

      {/* Featured Project */}
      <section className="py-20 bg-white border-y border-gray-200">
        <div className="container-max">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Featured</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">ClearBid</h2>
            <p className="text-gray-600 mt-4 text-lg">SaaS platform automating vendor bid management for HOA communities</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center animate-scale-in">
            <div className="card-interactive">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-600">Shipped in 2 weeks</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Founded & Shipped</h3>
                <p className="text-gray-600 leading-relaxed">
                  Founded and built a full-stack SaaS from concept to live product with real customers in less than 14 days. Django backend, React frontend, PostgreSQL database, three Claude AI integrations, and Google Places API.
                </p>
                <div className="pt-4 space-y-2">
                  <p className="text-sm text-gray-700"><strong>Tech:</strong> Django, PostgreSQL, React, Claude API, Google Places API</p>
                  <p className="text-sm text-gray-700"><strong>Status:</strong> Live at clearbid.us with active customer demos</p>
                </div>
                <div className="pt-4 flex gap-3">
                  <a href="https://clearbid.us" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2 px-4">
                    View Live
                  </a>
                  <a href="https://github.com/JakeBowen2005/ClearBid" target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm py-2 px-4">
                    <Github className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            <div className="card-interactive space-y-4">
              <h4 className="font-bold text-gray-900">Key Features</h4>
              <ul className="space-y-3 text-gray-700">
                {[
                  'Automated bid scoring (0-100 points)',
                  'AI vendor review summarization',
                  'Real-time contract generation (SSE)',
                  'AI-powered PDF parsing',
                  'Dual-portal system',
                  'Automated renewal alerts',
                  'Google Places integration',
                  'Tokenized email invitations',
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-blue-600 font-bold mt-1">▸</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Why section */}
      <section className="py-32">
        <div className="container-max">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">
            What I bring to your team
          </h2>

          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            {[
              {
                icon: Zap,
                title: 'Ship Fast',
                description: 'I move quick without sacrificing quality. ClearBid proved I can go from zero to customers in 2 weeks.',
              },
              {
                icon: Code2,
                title: 'Full-Stack Depth',
                description: 'Backend architecture, frontend interfaces, database design, DevOps, AI integrations. I can own the whole stack.',
              },
              {
                icon: Trophy,
                title: 'Athlete\'s Mindset',
                description: 'Competitive drive from jiu jitsu and running. Show up consistently. Get 1% better every day. That\'s how you win.',
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
      </section>

      {/* More projects teaser */}
      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="container-max text-center animate-fade-in-up">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-4">More Projects</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Stock Dashboard. Garmin Data Analysis. And more.
          </h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            Each project taught me something new. Each one shipped to real users.
          </p>
          <Link href="/projects" className="btn-primary">
            Explore all projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-32">
        <div className="container-max text-center max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Let's build something
            <br />
            <span className="gradient-text">great together</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            I'm actively looking for summer 2026 internships in software engineering and data science. If you think I'd be a good fit, let's talk.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:jakeeb05@gmail.com" className="btn-primary no-underline">
              <Mail className="w-4 h-4" />
              Email me
            </a>
            <a href="https://www.linkedin.com/in/jake-bowen-6b1269338/" target="_blank" rel="noopener noreferrer" className="btn-secondary no-underline">
              <Linkedin className="w-4 h-4" />
              LinkedIn
            </a>
            <a href="https://github.com/JakeBowen2005" target="_blank" rel="noopener noreferrer" className="btn-secondary no-underline">
              <Github className="w-4 h-4" />
              GitHub
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
