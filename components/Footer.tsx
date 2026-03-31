'use client';

import { Github, Linkedin, Mail, ArrowRight } from 'lucide-react';
import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-50 border-t border-gray-200 mt-32">
      <div className="container-max py-16">
        {/* CTA Section */}
        <div className="mb-20 p-8 md:p-12 rounded-3xl bg-gradient-to-r from-blue-600 to-blue-700 text-white text-center animate-fade-in-up">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to work together?</h3>
          <p className="text-white/90 mb-6 max-w-2xl mx-auto">
            I'm actively looking for summer 2026 internships. Let's build something great.
          </p>
          <a
            href="mailto:jakeeb05@gmail.com"
            className="inline-flex items-center gap-2 bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 rounded-lg font-semibold transition-all no-underline"
          >
            Get in touch
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

        {/* Footer Grid */}
        <div className="grid md:grid-cols-3 gap-12 mb-12 pb-12 border-b border-gray-200">
          {/* About */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <h3 className="text-lg font-bold mb-4 text-gray-900">Jake Bowen</h3>
            <p className="text-gray-600 text-sm leading-relaxed">
              Full-stack engineer. Built a SaaS in 2 weeks. Athlete mindset. Always learning.
            </p>
          </div>

          {/* Links */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            <h4 className="font-semibold mb-4 text-gray-900">Explore</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/projects" className="text-gray-600 hover:text-blue-600 underline-animate">
                  My Work
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-600 hover:text-blue-600 underline-animate">
                  About Me
                </Link>
              </li>
              <li>
                <a
                  href="https://clearbid.us"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-600 hover:text-blue-600 underline-animate"
                >
                  ClearBid (Live)
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div className="animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            <h4 className="font-semibold mb-4 text-gray-900">Connect</h4>
            <div className="flex gap-3">
              <a
                href="https://github.com/JakeBowen2005"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-200 hover:bg-blue-600 hover:text-white text-gray-700 transition-all"
                title="GitHub"
              >
                <Github className="w-4 h-4" />
              </a>
              <a
                href="https://www.linkedin.com/in/jake-bowen-6b1269338/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-lg bg-gray-200 hover:bg-blue-600 hover:text-white text-gray-700 transition-all"
                title="LinkedIn"
              >
                <Linkedin className="w-4 h-4" />
              </a>
              <a
                href="mailto:jakeeb05@gmail.com"
                className="p-3 rounded-lg bg-gray-200 hover:bg-blue-600 hover:text-white text-gray-700 transition-all"
                title="Email"
              >
                <Mail className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>

        <div className="text-center text-sm text-gray-500">
          <p>© 2026 Jake Bowen. Built with Next.js, React, Tailwind.</p>
        </div>
      </div>
    </footer>
  );
}
