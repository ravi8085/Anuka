import React from 'react';
import { ArrowRight, FileText, BookOpen } from 'lucide-react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

export const Resources: React.FC = () => {
  const whitepapers = [
    { title: "AI Transformation for Businesses", topic: "Machine Learning & Integration" },
    { title: "Building Scalable SaaS Platforms", topic: "Cloud Architectures & Multi-Tenancy" },
    { title: "Modern Application Development", topic: "Microservices vs. Modular Monoliths" },
    { title: "Cloud Transformation Strategy", topic: "Enterprise Migration Playbooks" }
  ];

  const blogs = [
    {
      title: "Optimizing Latency in High-Throughput Event Streams",
      category: "Software Development",
      date: "August 2026",
      desc: "A breakdown of architectural strategies for eliminating bottlenecks in modern stream processors."
    },
    {
      title: "Securing Edge IoT Nodes in Mission-Critical Systems",
      category: "Cybersecurity",
      date: "July 2026",
      desc: "A technical dive into mutual TLS, hardware root-of-trust, and zero-trust edge policies."
    },
    {
      title: "The Reality of Enterprise Generative AI Integration",
      category: "AI",
      date: "July 2026",
      desc: "Moving beyond basic LLM wrappers toward domain-aware agent systems that actually work."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-brand-charcoal">
          Resources & Insights
        </h1>
        <p className="mt-4 text-base text-slate-600">
          Whitepapers, architectural blueprints, and deep-dive technical insights directly from our engineering team.
        </p>
      </header>

      {/* Whitepapers */}
      <section className="space-y-6">
        <h2 className="text-xl font-bold text-brand-charcoal flex items-center gap-2">
          <FileText className="w-5 h-5 text-slate-600" /> Research & Whitepapers
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {whitepapers.map((wp, idx) => (
            <div key={idx} className="border border-brand-border p-6 rounded bg-white hover:border-slate-400 transition-all flex flex-col justify-between">
              <div>
                <span className="text-[10px] uppercase font-mono tracking-wider text-slate-400">{wp.topic}</span>
                <h3 className="text-sm font-bold text-brand-charcoal mt-2">{wp.title}</h3>
              </div>
              <button className="text-xs font-semibold text-slate-800 hover:underline mt-6 inline-flex items-center gap-1">
                Download PDF &rarr;
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Blogs */}
      <section className="space-y-6 pt-10 border-t border-brand-border">
        <h2 className="text-xl font-bold text-brand-charcoal flex items-center gap-2">
          <BookOpen className="w-5 h-5 text-slate-600" /> Technology Insights
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {blogs.map((b, idx) => (
            <div key={idx} className="border border-brand-border rounded-lg bg-white overflow-hidden flex flex-col justify-between">
              <div>
                <ImagePlaceholder label={`BLOG THUMBNAIL ${idx + 1}`} aspectRatio="aspect-[16/10]" />
                <div className="p-6">
                  <div className="flex items-center justify-between text-[11px] text-slate-400 mb-2">
                    <span className="font-semibold uppercase text-slate-600">{b.category}</span>
                    <span>{b.date}</span>
                  </div>
                  <h3 className="text-sm font-bold text-brand-charcoal mb-2">{b.title}</h3>
                  <p className="text-xs text-slate-500 leading-relaxed">{b.desc}</p>
                </div>
              </div>
              <div className="px-6 pb-6">
                <button className="text-xs font-bold text-slate-900 hover:underline inline-flex items-center gap-1">
                  Read Article &rarr;
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};