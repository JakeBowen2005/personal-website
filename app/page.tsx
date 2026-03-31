'use client';

import Link from 'next/link';
import { ArrowRight, Code2, Zap, Trophy, Github, Linkedin, Mail } from 'lucide-react';
import { useEffect, useState } from 'react';
import Image from 'next/image';

export default function Home() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <main className="min-h-screen">
      <section className="pt-36 pb-28 relative overflow-hidden">
        <div className="container-max">
          <div className="grid lg:grid-cols-[1.15fr_0.85fr] gap-12 items-start">
            <div className="max-w-4xl">
              <div className="accent-line mb-8 animate-fade-in-up" style={{ animationDelay: '0s' }}></div>

              <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-8 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
                Product-Minded
                <br />
                <span className="gradient-text">Software Engineer.</span>
              </h1>

              <p className="text-xl md:text-2xl text-gray-600 max-w-2xl mb-12 leading-relaxed animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
                I build quickly, iterate with real users, and care about shipping software that solves practical problems. In March 2026, I launched ClearBid from idea to production in under two weeks.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 mb-16 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
                <Link href="/projects" className="btn-primary">
                  View projects
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <a href="mailto:jakeeb05@gmail.com" className="btn-secondary no-underline">
                  <Mail className="w-4 h-4" />
                  Contact me
                </a>
              </div>

              <div className="grid grid-cols-3 md:grid-cols-3 gap-8 animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
                {[
                  { number: '2', label: 'Weeks to launch V1' },
                  { number: '3', label: 'AI workflows in production' },
                  { number: '1', label: 'Live SaaS serving real demos' },
                ].map((stat, idx) => (
                  <div key={idx} className="border-l-2 border-blue-600 pl-4">
                    <p className="text-3xl md:text-4xl font-bold text-gray-900">{stat.number}</p>
                    <p className="text-gray-600 text-sm mt-2">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="space-y-5 animate-fade-in-up" style={{ animationDelay: '0.25s' }}>
              <div className="relative aspect-[3/4] overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-white">
                <Image
                  src="/images/main-portrait.jpg"
                  alt="Jake Bowen with his sister"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  priority
                />
              </div>
              <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-white">
                <Image
                  src="/images/home-athlete.jpg"
                  alt="Jake Bowen training with his jiu jitsu team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 33vw"
                />
              </div>
            </div>
          </div>
        </div>

        <div
          className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-blue-100 to-indigo-100 rounded-full blur-3xl opacity-30 -z-10"
          style={{ transform: `translateY(${scrollY * 0.5}px)` }}
        ></div>
      </section>

      <section className="py-20 bg-white border-y border-gray-200">
        <div className="container-max">
          <div className="text-center mb-16 animate-fade-in-up">
            <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-3">Featured Project</p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900">ClearBid</h2>
            <p className="text-gray-600 mt-4 text-lg">Bid management SaaS for HOA boards and property management teams</p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start animate-scale-in">
            <div className="card-interactive">
              <div className="space-y-4">
                <div className="flex items-center gap-2">
                  <Zap className="w-5 h-5 text-blue-600" />
                  <span className="text-sm font-semibold text-blue-600">Launched in March 2026</span>
                </div>
                <h3 className="text-2xl font-bold text-gray-900">Zero to production in under 14 days</h3>
                <p className="text-gray-600 leading-relaxed">
                  I designed and shipped the core product architecture, onboarding flow, vendor bid submission system, and AI-assisted contract tools. The product is live, and active outreach is underway with Southern California management firms.
                </p>
                <div className="pt-4 space-y-2">
                  <p className="text-sm text-gray-700"><strong>Stack:</strong> Django, PostgreSQL, Tailwind, AWS S3, Resend, Claude API, Google Places API</p>
                  <p className="text-sm text-gray-700"><strong>Business focus:</strong> Reducing bid cycle friction for HOA decision makers</p>
                </div>
                <div className="pt-4 flex gap-3">
                  <a href="https://clearbid.us" target="_blank" rel="noopener noreferrer" className="btn-primary text-sm py-2 px-4">
                    View Live
                  </a>
                  <a href="https://github.com/JakeBowen2005/ClearBid" target="_blank" rel="noopener noreferrer" className="btn-secondary text-sm py-2 px-4">
                    <Github className="w-4 h-4" />
                    Source
                  </a>
                </div>
              </div>
            </div>

            <div className="grid gap-4">
              <div className="relative aspect-[16/9] overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-white">
                <Image
                  src="/images/clearbid-dashboard.png"
                  alt="ClearBid dashboard overview"
                  fill
                  className="object-contain"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
              </div>
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-white">
                  <Image
                    src="/images/clearbid-workflow-1.png"
                    alt="ClearBid workflow screenshot showing project portfolio view"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
                <div className="relative aspect-[16/10] overflow-hidden rounded-2xl border border-gray-200 shadow-sm bg-white">
                  <Image
                    src="/images/clearbid-workflow-2.png"
                    alt="ClearBid workflow screenshot showing vendor suggestions and invitations"
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 100vw, 25vw"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-32">
        <div className="container-max">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-16 text-center">What I bring to an engineering team</h2>

          <div className="grid md:grid-cols-3 gap-8 stagger-children">
            {[
              {
                icon: Zap,
                title: 'Execution Speed',
                description: 'I move quickly from requirements to shipped code while keeping the product reliable and user-focused.',
              },
              {
                icon: Code2,
                title: 'Full-Stack Ownership',
                description: 'I can own backend systems, APIs, data modeling, frontend UX, and deployment workflows end to end.',
              },
              {
                icon: Trophy,
                title: 'Competitive Consistency',
                description: 'Sports taught me disciplined iteration: show up daily, learn fast, and improve under pressure.',
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

      <section className="py-20 bg-gray-50 border-y border-gray-200">
        <div className="container-max text-center animate-fade-in-up">
          <p className="text-blue-600 font-semibold text-sm uppercase tracking-widest mb-4">More Work</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Stock analytics, performance data, and practical product builds</h2>
          <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
            My projects reflect a consistent pattern: identify a real problem, build quickly, and learn through deployment.
          </p>
          <Link href="/projects" className="btn-primary">
            Explore all projects
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      <section className="py-32">
        <div className="container-max text-center max-w-3xl mx-auto animate-fade-in-up">
          <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-8">
            Let&apos;s build
            <br />
            <span className="gradient-text">something meaningful</span>
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            I&apos;m actively pursuing summer 2026 software engineering and data-focused internships where I can contribute quickly and keep leveling up.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="mailto:jakeeb05@gmail.com" className="btn-primary no-underline">
              <Mail className="w-4 h-4" />
              Email
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
