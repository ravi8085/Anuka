import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

export const CaseStudies: React.FC = () => {
  const studies = [
    {
      title: "Financial Platform Transformation",
      challenge: "Legacy banking system experiencing extreme latency during settlement operations.",
      solution: "Migrated architecture to event-driven microservices running on a multi-region distributed cluster.",
      tech: "Go, Apache Kafka, CockroachDB, Kubernetes",
      implementation: "Completed blue-green cutover over 6 months with zero unscheduled downtime.",
      results: "Cut transaction processing times from 4.2 seconds to 85 milliseconds.",
      impact: "Supported a 400% surge in user transactions during the next financial quarter."
    },
    {
      title: "HR Automation Platform",
      challenge: "Global workforce fragmentation across 14 distinct software platforms without centralized HR data.",
      solution: "Engineered a unified multi-tenant core HR application with dynamic payroll synchronization.",
      tech: "React, Node.js, GraphQL, PostgreSQL",
      implementation: "Consolidated all 14 legacy systems into a singular schema with role-based controls.",
      results: "Decreased cross-border payroll operational run-time by 65%.",
      impact: "Saved $1.2M annually in redundant administrative licensing costs."
    },
    {
      title: "AI-Powered Business Application",
      challenge: "Manual document extraction workflow causing an ongoing 5-day verification bottleneck.",
      solution: "Constructed an automated OCR and LLM reasoning pipeline with automatic validation checks.",
      tech: "Python, PyTorch, FastAPI, Vector Databases",
      implementation: "Trained domain-specific models with real-time exception queues for edge cases.",
      results: "Automated 92% of document intake with 99.4% accuracy.",
      impact: "Reduced operational turnaround from 5 days to under 20 minutes."
    },
    {
      title: "Enterprise Web Application",
      challenge: "Global inventory system unable to keep pace with dynamic changes across distributed hubs.",
      solution: "Engineered a progressive single-page application with resilient offline sync engines.",
      tech: "TypeScript, React, WebSockets, Redis",
      implementation: "Rolled out to 42 supply distribution hubs without disruption to ongoing shipments.",
      results: "Zero data conflicts and sub-second inventory sync globally.",
      impact: "Reduced lost product rate to absolute zero."
    },
    {
      title: "Mobile Application Transformation",
      challenge: "Customer-facing retail application suffering from low App Store ratings and high crash rates.",
      solution: "Complete ground-up rewrite using native patterns and automated regression test pipelines.",
      tech: "React Native, Swift, Kotlin",
      implementation: "Rebuilt UI layer with local state persistence and intelligent background syncing.",
      results: "Crash-free sessions increased to 99.98%.",
      impact: "Customer review scores rose from 2.4 to 4.8 stars within 90 days."
    },
    {
      title: "SaaS Platform Development",
      challenge: "Early-stage enterprise SaaS product hitting architectural limits with concurrent tenant loads.",
      solution: "Partitioned multi-tenant database tier and modularized authentication flows.",
      tech: "Next.js, Go, PostgreSQL, Docker",
      implementation: "Automated tenant provisioning pipelines backed by custom isolation walls.",
      results: "Maintained flat latency profiles even under 10x spikes in traffic.",
      impact: "Successfully passed SOC2 Type II compliance audits on the first run."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-brand-charcoal">
          Proven Engineering Results
        </h1>
        <p className="mt-4 text-base text-slate-600">
          A selection of technical implementations where we solved structural bottlenecks, modernized legacy setups, and drove tangible growth.
        </p>
      </header>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {studies.map((item, idx) => (
          <div key={idx} className="border border-brand-border rounded-xl bg-white p-8 flex flex-col justify-between hover:border-slate-400 transition-all">
            <div className="space-y-4">
              <ImagePlaceholder label={`CASE STUDY: ${item.title.toUpperCase()}`} aspectRatio="aspect-[16/9]" />
              <h2 className="text-xl font-bold text-brand-charcoal">{item.title}</h2>
              
              <div className="space-y-2 text-xs">
                <div><span className="font-semibold text-slate-800">Challenge:</span> <span className="text-slate-600">{item.challenge}</span></div>
                <div><span className="font-semibold text-slate-800">Solution:</span> <span className="text-slate-600">{item.solution}</span></div>
                <div><span className="font-semibold text-slate-800">Technology:</span> <span className="font-mono text-slate-500">{item.tech}</span></div>
                <div><span className="font-semibold text-slate-800">Results:</span> <span className="text-slate-600">{item.results}</span></div>
                <div><span className="font-semibold text-slate-800">Business Impact:</span> <span className="text-slate-900 font-medium">{item.impact}</span></div>
              </div>
            </div>

            <div className="pt-6 mt-6 border-t border-slate-100">
              <button className="text-xs font-bold inline-flex items-center gap-1 text-brand-charcoal hover:underline">
                Read Case Study &rarr;
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};