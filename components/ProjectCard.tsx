import { Github, ExternalLink } from 'lucide-react';

interface ProjectCardProps {
  project: {
    title: string;
    subtitle: string;
    description: string;
    features: string[];
    techStack: string[];
    links: {
      live?: string;
      github?: string;
    };
    stats?: Array<{ label: string; value: string }>;
    timeline?: string;
    hero?: boolean;
  };
}

export default function ProjectCard({ project }: ProjectCardProps) {
  return (
    <div
      className={`glass-effect rounded-2xl overflow-hidden border border-slate-600 hover:border-blue-400 transition-all ${
        project.hero ? 'ring-2 ring-blue-400/50 ring-offset-2 ring-offset-slate-900' : ''
      }`}
    >
      <div className="p-8 md:p-12">
        {/* Header */}
        <div className="mb-8">
          <div className="flex items-start justify-between gap-4 mb-3">
            <div>
              {project.hero && (
                <p className="text-blue-400 text-sm font-semibold uppercase tracking-widest mb-2">
                  ⭐ Hero Project
                </p>
              )}
              <h3 className="text-3xl md:text-4xl font-bold">{project.title}</h3>
              <p className="text-lg text-slate-400 mt-1">{project.subtitle}</p>
            </div>
          </div>
          <p className="text-slate-300 text-lg leading-relaxed max-w-3xl">{project.description}</p>
        </div>

        {/* Stats */}
        {project.stats && (
          <div className="grid grid-cols-3 gap-4 mb-8 p-6 bg-slate-800/50 rounded-lg">
            {project.stats.map((stat, idx) => (
              <div key={idx}>
                <p className="text-blue-400 font-bold text-lg">{stat.label}</p>
                <p className="text-slate-400 text-sm">{stat.value}</p>
              </div>
            ))}
          </div>
        )}

        {/* Timeline */}
        {project.timeline && (
          <p className="text-slate-400 text-sm mb-6 font-medium">{project.timeline}</p>
        )}

        {/* Features */}
        <div className="mb-8">
          <h4 className="font-semibold text-slate-200 mb-4">Key Features</h4>
          <ul className="grid md:grid-cols-2 gap-3">
            {project.features.map((feature, idx) => (
              <li key={idx} className="text-slate-300 text-sm flex items-start gap-2">
                <span className="text-blue-400 mt-1">▸</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Tech Stack */}
        <div className="mb-8">
          <h4 className="font-semibold text-slate-200 mb-4">Tech Stack</h4>
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech, idx) => (
              <span
                key={idx}
                className="bg-blue-900/30 text-blue-300 px-3 py-1 rounded-full text-sm font-medium border border-blue-700/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Links */}
        <div className="flex flex-wrap gap-4 pt-6 border-t border-slate-700">
          {project.links.live && (
            <a
              href={project.links.live}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-medium text-sm transition-colors"
            >
              <ExternalLink className="w-4 h-4" />
              View Live
            </a>
          )}
          {project.links.github && (
            <a
              href={project.links.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-slate-300 hover:text-blue-400 font-medium text-sm transition-colors"
            >
              <Github className="w-4 h-4" />
              Source Code
            </a>
          )}
        </div>
      </div>
    </div>
  );
}
