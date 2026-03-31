'use client';

import { Heart, Zap, Target, Users, Github, Linkedin, Mail } from 'lucide-react';

export default function AboutPage() {
  return (
    <main className="min-h-screen pt-32 pb-20">
      <div className="container-max">
        {/* Header */}
        <div className="mb-20 animate-fade-in-up">
          <div className="accent-line mb-8"></div>
          <h1 className="text-6xl md:text-7xl font-bold text-gray-900 mb-6">
            Who I am
            <br />
            <span className="gradient-text">and why I code</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl">
            The story behind the engineer — what shaped how I think, learn, and build.
          </p>
        </div>

        {/* Story Sections */}
        <div className="space-y-20">
          {/* Growing Up */}
          <div className="grid md:grid-cols-2 gap-12 items-center stagger-children">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Raised to work hard</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                I grew up in a family that valued hard work above just about everything else. Not the flashy kind — the quiet, consistent kind. Show up. Put in the work. Don't make excuses.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                That became my foundation. It's how I approach problems, how I learn new things, and how I build products. Talent is overrated when someone else is working harder.
              </p>
            </div>
            <div className="card-interactive animate-fade-in-up text-center">
              <p className="text-3xl font-bold text-blue-600 mb-2">Bay Area</p>
              <p className="text-gray-600">Born and raised in the place that makes builders</p>
            </div>
          </div>

          {/* Athlete */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="card-interactive animate-fade-in-up order-2 md:order-1">
              <div className="space-y-4 text-gray-700">
                <p className="font-semibold flex items-center gap-2">
                  <span className="text-2xl">🏀</span> Basketball most of my life
                </p>
                <p className="font-semibold flex items-center gap-2">
                  <span className="text-2xl">🏃</span> Competitive running (serious training)
                </p>
                <p className="font-semibold flex items-center gap-2">
                  <span className="text-2xl">🥋</span> Jiu jitsu now
                </p>
                <p className="text-sm text-gray-600 mt-6">
                  Sports taught me what school never could: how to get good at something.
                </p>
              </div>
            </div>
            <div className="animate-fade-in-up order-1 md:order-2">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Athlete's mentality</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Sports taught me that showing up consistently, even when you're not seeing results, is how you actually get good at something. That's not just about athletics.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Basketball taught me communication under pressure. Running taught me discipline. Jiu jitsu taught me humility — you get submitted every class, and that's how you improve.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                I apply that same mentality to learning code, shipping products, and working in teams. The tools change, but the mindset stays the same.
              </p>
            </div>
          </div>

          {/* Work */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="animate-fade-in-up">
              <h2 className="text-4xl font-bold text-gray-900 mb-6">Hospitality shaped me</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                Most people see hospitality as "just a job." I saw it as a masterclass. Working as a Food Runner, Bistro Attendant, and math tutor taught me real skills: communication, managing pressure, taking ownership.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                I learned to be direct, clear, and focused on what the user actually needs. I learned to stay composed when everything's on fire. Those skills are just as important in a startup as they are in a busy restaurant.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Work isn't beneath you. It's where you learn who you are.
              </p>
            </div>
            <div className="card-interactive animate-fade-in-up">
              <div className="space-y-4">
                <div>
                  <p className="font-semibold text-gray-900">Lafayette Park Hotel</p>
                  <p className="text-sm text-gray-600">Food Runner, 2+ years</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Courtyard Marriott</p>
                  <p className="text-sm text-gray-600">Bistro Attendant, now</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Mathnasium</p>
                  <p className="text-sm text-gray-600">Math Tutor</p>
                </div>
                <div>
                  <p className="font-semibold text-gray-900">Ultimate Fieldhouse</p>
                  <p className="text-sm text-gray-600">Basketball Gym</p>
                </div>
              </div>
            </div>
          </div>

          {/* Why I Code */}
          <div className="py-20 border-y border-gray-200 animate-fade-in-up">
            <h2 className="text-4xl font-bold text-gray-900 mb-12 text-center">Why I code</h2>
            <div className="grid md:grid-cols-2 gap-8 stagger-children">
              {[
                {
                  icon: Zap,
                  title: "I can't stop building",
                  description:
                    "It's not a career move — it's how I think. I see a problem and I want to build the solution. ClearBid proved that.",
                },
                {
                  icon: Target,
                  title: 'I learn by shipping',
                  description:
                    'I\'ll read the docs, but real learning happens when code is live and users are using it. That\'s where growth lives.',
                },
                {
                  icon: Heart,
                  title: 'I want to build things that matter',
                  description:
                    'ClearBid isn\'t a portfolio piece. Real HOA communities are using it. That\'s what makes it matter.',
                },
                {
                  icon: Users,
                  title: 'I want to learn from better engineers',
                  description:
                    'Solo learning has a ceiling. I want to be in a room with people better than me, doing hard things together.',
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

          {/* Skills */}
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
                  skills: ['Git/GitHub', 'Render', 'AWS S3', 'PostgreSQL', 'Redis', 'Celery', 'Docker', 'Vercel'],
                },
                {
                  category: 'APIs & Integrations',
                  skills: ['Google Places', 'Resend', 'yfinance', 'Finnhub', 'Claude API'],
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

          {/* Education */}
          <div className="card-interactive animate-fade-in-up">
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Education</h2>
            <div className="space-y-4">
              <div>
                <p className="font-bold text-gray-900 text-lg">California State University, Fullerton</p>
                <p className="text-sm text-gray-600">Expected Graduation: May 2027</p>
              </div>
              <p className="text-gray-700">
                <strong>B.S. Computer Science</strong> | <strong>Minor: Mathematics</strong> | <strong>GPA: 3.66</strong>
              </p>
              <p className="text-gray-600 leading-relaxed">
                I chose CSUF because it has a strong engineering program and a focus on practical skills. But real learning happens outside the classroom — building products, shipping code, getting feedback from real users.
              </p>
            </div>
          </div>

          {/* Looking for */}
          <div className="p-12 md:p-16 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-3xl text-center animate-fade-in-up">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">What I'm looking for</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              I'm actively applying for summer 2026 software engineering and data science internships.
            </p>
            <ul className="text-white/90 max-w-2xl mx-auto mb-12 space-y-3 text-lg text-left">
              <li>✓ A team where I can ship real code that matters</li>
              <li>✓ Engineers better than me who will give hard feedback</li>
              <li>✓ A chance to learn systems at scale</li>
              <li>✓ Problems I don't immediately know how to solve</li>
              <li>✓ A place that values speed, ownership, and getting things done</li>
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
