import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

export const Solutions: React.FC = () => {
  const solutions = [
    { title: "Digital Transformation", desc: "Holistic modernization of legacy structures into digital operating frameworks." },
    { title: "Business Process Automation", desc: "Eliminating manual bottlenecks using software loops and logic chains." },
    { title: "Enterprise Software", desc: "Reliable platforms handling massive operational data across corporate divisions." },
    { title: "AI Transformation", desc: "Integrating intelligent reasoning engines and automation layers across departments." },
    { title: "Cloud Transformation", desc: "Migrating on-premises infrastructure to elastic, fault-tolerant cloud platforms." },
    { title: "Data & Analytics", desc: "Actionable business intelligence derived from aggregated enterprise data warehouses." },
    { title: "Customer Experience", desc: "Frictionless interfaces maximizing client retention, clarity, and satisfaction." },
    { title: "Workflow Automation", desc: "Standardizing complex multi-person tasks into programmatic pipelines." },
    { title: "Legacy Modernization", desc: "Refactoring aging technology stacks without operational downtime." },
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-brand-charcoal">
          Enterprise Solutions
        </h1>
        <p className="mt-4 text-base text-slate-600">
          Targeted technology solutions engineered to navigate enterprise complexity, reduce manual overhead, and accelerate execution.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {solutions.map((item, idx) => (
          <div key={idx} className="border border-brand-border bg-white rounded-lg p-6 hover:shadow-lg transition-all">
            <h2 className="text-base font-bold text-brand-charcoal">{item.title}</h2>
            <p className="text-xs text-slate-500 mt-2 mb-6 leading-relaxed">{item.desc}</p>
            <ImagePlaceholder label={`SOLUTION: ${item.title.toUpperCase()}`} aspectRatio="aspect-video" />
            <div className="mt-6">
              <a href="/contact" className="text-xs font-semibold inline-flex items-center gap-1 text-slate-900 hover:underline">
                Explore Implementation <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};