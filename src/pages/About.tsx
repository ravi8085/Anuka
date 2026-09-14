import React from 'react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

export const About: React.FC = () => {
  const values = [
    { title: "Innovation", desc: "Prioritizing modern architectures and solutions that push past standard templates." },
    { title: "Integrity", desc: "Open, transparent communication regarding project velocity, architecture, and timelines." },
    { title: "Customer Focus", desc: "Engineering around real business KPIs rather than technical vanity metrics." },
    { title: "Excellence", desc: "Writing clean, tested, documented, and resilient code across all tiers." },
    { title: "Collaboration", desc: "Acting as an integrated technical wing alongside client product teams." },
    { title: "Continuous Learning", desc: "Rapidly adopting and stress-testing new frameworks, tools, and paradigms." }
  ];

  const differentiators = [
    "Business-focused technology",
    "Experienced engineering teams",
    "Scalable, resilient architecture",
    "Modern, security-first stacks",
    "Long-term engineering partnership",
    "Flexible engagement models"
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-20">
      {/* Who We Are */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-4">
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-500">Who We Are</span>
          <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-brand-charcoal">
            Building Technology That Drives Real Enterprise Growth
          </h1>
          <p className="text-sm lg:text-base text-slate-600 leading-relaxed">
            Anuka Global IT Solutions is an international engineering collective. We partner with ambitious enterprises and rising tech ventures to build mission-critical digital systems, SaaS platforms, and AI workflows.
          </p>
        </div>
        <div className="lg:col-span-5">
          <ImagePlaceholder label="OFFICE HEADQUARTERS" aspectRatio="aspect-[4/3]" />
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="border border-brand-border p-8 rounded-lg bg-brand-subtle">
          <span className="text-xs uppercase font-mono text-slate-500">Our Mission</span>
          <h2 className="text-xl font-bold text-brand-charcoal mt-2 mb-3">
            To build innovative technology solutions that create measurable business value.
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            We avoid writing code simply for the sake of writing code. Every system, interface, and automated pipeline is designed around clear operational outcomes.
          </p>
        </div>
        <div className="border border-brand-border p-8 rounded-lg bg-brand-subtle">
          <span className="text-xs uppercase font-mono text-slate-500">Our Vision</span>
          <h2 className="text-xl font-bold text-brand-charcoal mt-2 mb-3">
            To become a trusted global technology partner for businesses seeking digital innovation.
          </h2>
          <p className="text-xs text-slate-600 leading-relaxed">
            We aim to set the global standard for how modern software consultancies operate: clean technical delivery, dependable project management, and zero vanity fluff.
          </p>
        </div>
      </section>

      {/* Values */}
      <section>
        <h2 className="text-2xl font-bold text-brand-charcoal mb-8">Our Values</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {values.map((val, idx) => (
            <div key={idx} className="border border-brand-border p-6 rounded bg-white">
              <h3 className="text-sm font-bold text-brand-charcoal">{val.title}</h3>
              <p className="text-xs text-slate-500 mt-2 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="bg-brand-charcoal text-white p-10 lg:p-16 rounded-2xl">
        <h2 className="text-2xl lg:text-3xl font-bold mb-6">Why Anuka Global IT Solutions</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {differentiators.map((diff, idx) => (
            <div key={idx} className="flex items-center gap-3">
              <div className="w-2 h-2 rounded-full bg-white flex-shrink-0" />
              <span className="text-sm text-slate-300 font-medium">{diff}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Leadership & Team Placeholders */}
      <section className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold text-brand-charcoal">Leadership Team</h2>
          <p className="text-xs text-slate-500 mt-1">Experienced engineers, architects, and product leaders.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <ImagePlaceholder label="LEADERSHIP: CEO" aspectRatio="aspect-[3/4]" />
          <ImagePlaceholder label="LEADERSHIP: CTO" aspectRatio="aspect-[3/4]" />
          <ImagePlaceholder label="LEADERSHIP: HEAD OF PRODUCT" aspectRatio="aspect-[3/4]" />
        </div>
      </section>
    </div>
  );
};