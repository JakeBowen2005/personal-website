'use client';

import { Heart, Zap, Target, Users, Github, Linkedin, Mail } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container-max">
        <div className="mb-20 animate-fade-in-up">
          <div className="accent-line mb-8"></div>
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
            The person
            <br />
            <span className="gradient-text">behind the code</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            Athlete, hospitality professional, and builder. My background shaped how I work: disciplined execution, clear communication, and ownership under pressure.
          </p>
        </div>

        <div className="space-y-20">
          <div className="grid md:grid-cols-2 gap-12 items-center stagger-children">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Built on consistency</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                I grew up in a family culture centered on discipline and accountability. That mindset became foundational to how I approach engineering work: show up, execute, and improve continuously.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Running reinforced that foundation for me. Long training blocks taught me patience, pacing, and resilience, and I bring that same energy into engineering work and long-term product building.
              </p>
            </div>
            <div className="card-interactive animate-fade-in-up">
              <div className="space-y-3">
                <p className="text-xs font-bold uppercase tracking-[0.2em] text-blue-600">Personal Philosophy</p>
                <p className="text-gray-700 leading-relaxed">
                  I treat engineering progress like athletic training: consistent reps, honest feedback, and measurable improvement over time.
                </p>
                <p className="text-gray-700 leading-relaxed">
                  That mindset helps me stay steady through ambiguity and keep shipping with a long-term view.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="card-interactive animate-fade-in-up">
                <div className="space-y-4 text-gray-700">
                  <p className="font-semibold">Basketball: years of team discipline and communication</p>
                  <p className="font-semibold">Running: consistency, pacing, and long-term improvement</p>
                  <p className="font-semibold">Jiu jitsu: humility, iteration, and composure</p>
                  <p className="text-sm text-gray-600 mt-6">
                    Sports gave me a repeatable system for growth that I now apply to software.
                  </p>
                </div>
              </div>
            </div>
            <div className="animate-fade-in-up order-1 md:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Athlete&apos;s mindset in engineering</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Athletics trained me to operate in feedback loops: practice, review, adjust, repeat. That maps directly to product development.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                I am comfortable with hard critiques, fast iterations, and sustained effort over long timelines. Those habits help me execute when projects get complex.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                The tools change between sports and software, but the core process stays the same: discipline, resilience, and continuous refinement.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Hospitality taught product empathy</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Working in hotels and service environments taught me to stay composed under pressure, communicate clearly, and prioritize what the customer needs right now.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Those are directly transferable engineering skills. Product quality is not only code quality, it is also reliability, clarity, and user trust.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I bring that service mindset into software: listen closely, solve the real problem, and deliver with professionalism.
              </p>
            </div>
            <div className="card-interactive animate-fade-in-up">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-900">Courtyard Marriott</p>
                  <p className="text-sm text-gray-600">Bistro Attendant | Sep 2025 – Present</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Lafayette Park Hotel</p>
                  <p className="text-sm text-gray-600">Food Runner | Mar 2023 – Aug 2025</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Mathnasium</p>
                  <p className="text-sm text-gray-600">Math Tutor | Aug 2024 – Jan 2025</p>
                </div>
              </div>
            </div>
          </div>

          <div className="py-20 border-y border-gray-200 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why I build software</h2>
            <div className="grid md:grid-cols-2 gap-8 stagger-children">
              {[
                {
                  icon: Zap,
                  title: 'I am energized by execution',
                  description:
                    'I enjoy turning ambiguity into shipped product features that solve practical business problems.',
                },
                {
                  icon: Target,
                  title: 'I learn through production feedback',
                  description:
                    'Building live systems with real users has been the fastest way for me to improve technical and product judgment.',
                },
                {
                  icon: Heart,
                  title: 'I care about useful outcomes',
                  description:
                    'I prefer projects with tangible impact where quality and reliability matter to the people using the product.',
                },
                {
                  icon: Users,
                  title: 'I want strong engineering mentorship',
                  description:
                    'I am actively looking for teams where I can contribute immediately while learning from experienced engineers.',
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

          <div className="animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-12">Technical toolkit</h2>
            <div className="grid md:grid-cols-2 gap-8 stagger-children">
              {[
                {
                  category: 'Languages & Frameworks',
                  skills: ['Python', 'Django', 'React', 'TypeScript', 'PostgreSQL', 'C++', 'R', 'MATLAB', 'Tailwind CSS'],
                },
                {
                  category: 'Data & AI',
                  skills: ['Pandas', 'NumPy', 'Matplotlib', 'yfinance', 'Claude API', 'Server-Sent Events', 'Finnhub'],
                },
                {
                  category: 'Infrastructure',
                  skills: ['Git/GitHub', 'Render', 'AWS S3', 'Redis', 'Celery', 'Docker', 'Vercel'],
                },
                {
                  category: 'APIs & Integrations',
                  skills: ['Google Places API', 'Resend', 'yfinance', 'Finnhub', 'Claude API'],
                },
              ].map((skillGroup, idx) => (
                <div key={idx} className="card-interactive animate-fade-in-up">
                  <h3 className="font-bold text-gray-900 mb-4 uppercase text-sm tracking-widest">{skillGroup.category}</h3>
                  <div className="flex flex-wrap gap-2">
                    {skillGroup.skills.map((skill, i) => (
                      <span key={i} className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-medium border border-blue-200">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="card-interactive animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Education</h2>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-gray-900 text-lg">California State University, Fullerton</p>
                <p className="text-sm text-gray-600">B.S. Computer Science | Minor in Mathematics</p>
                <p className="text-sm text-gray-600">Expected graduation: May 2027</p>
              </div>
              <p className="text-gray-600 leading-relaxed">
                I focus on applying coursework to production projects, building practical systems, and developing engineering judgment through real-world iteration.
              </p>
            </div>
          </div>

          <div className="p-12 md:p-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-3xl text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What I&apos;m looking for</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Summer 2026 internship opportunities where I can contribute to production software and continue learning from high-performing teams.
            </p>
            <ul className="text-white/90 max-w-2xl mx-auto mb-12 space-y-3 text-lg text-left">
              <li>Build features that matter to real users</li>
              <li>Receive direct technical feedback from strong engineers</li>
              <li>Work on systems where reliability and performance matter</li>
              <li>Own problems end-to-end with clear accountability</li>
            </ul>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="mailto:jakeeb05@gmail.com"
                className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all"
              >
                <Mail className="w-4 h-4" />
                Email me
              </a>
              <a
                href="https://www.linkedin.com/in/jake-bowen-6b1269338/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all"
              >
                <Linkedin className="w-4 h-4" />
                LinkedIn
              </a>
              <a
                href="https://github.com/JakeBowen2005"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 border-2 border-white text-white hover:bg-white/10 px-8 py-3 rounded-lg font-semibold transition-all"
              >
                <Github className="w-4 h-4" />
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
