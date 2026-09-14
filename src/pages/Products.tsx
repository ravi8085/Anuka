import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

export const Products: React.FC = () => {
  const categories = [
    {
      id: "finance",
      title: "Finance Solutions",
      desc: "High-throughput, secure frameworks engineered for regulatory compliance and transaction transparency.",
      examples: ["Financial Management", "Investment Management", "Advisory Platforms", "Accounting & Reporting", "Payment & Transaction Platforms"],
      features: ["Multi-currency Ledger", "Automated Reconciliation", "Real-time Fraud Checks"],
      benefits: ["Accelerated settlement cycles", "Full audit readiness", "Reduced human reconciliation"],
      tech: "Go, PostgreSQL, Kafka, Rust, OpenBanking Protocols"
    },
    {
      id: "hr",
      title: "HR Solutions",
      desc: "Modern workplace management systems unifying recruitment, evaluation, and global payroll functions.",
      examples: ["HR Management", "Recruitment Automation", "Employee Records", "Payroll Integration", "Performance Tracking", "LMS Platforms"],
      features: ["Dynamic Org Charting", "Automated Onboarding", "Unified Time Tracking"],
      benefits: ["Streamlined staff operations", "Single pane of glass HR analytics", "Automated compliance"],
      tech: "Node.js, React, GraphQL, Distributed Document Stores"
    },
    {
      id: "electronics",
      title: "Electronics Solutions",
      desc: "Hardware-adjacent intelligence, edge IoT orchestration, and telemetry platforms.",
      examples: ["Smart Monitoring", "IoT Frameworks", "Device Management", "Intelligent Control Systems", "Connected Infrastructure"],
      features: ["Over-the-air (OTA) updates", "Edge compute capabilities", "Fault isolation"],
      benefits: ["Low-latency telemetry", "Extended device operational lifespans", "Secure edge processing"],
      tech: "C++, MQTT, AWS IoT Greengrass, Time-Series Databases"
    },
    {
      id: "electrical",
      title: "Electrical Solutions",
      desc: "Asset reliability and power infrastructure load monitoring software platforms.",
      examples: ["Energy Management", "Electrical Asset Monitoring", "Smart Infrastructure", "Power Grid Telemetry", "Predictive Maintenance"],
      features: ["Waveform anomaly detection", "Predictive load shedding", "Component health scoring"],
      benefits: ["Averted unplanned downtime", "Optimized carbon metrics", "Regulatory compliance"],
      tech: "Python, Scada Integrations, InfluxDB, WebSockets"
    },
    {
      id: "ai",
      title: "AI-Powered Products",
      desc: "Domain-specific artificial intelligence models, agentic workflows, and document extraction engines.",
      examples: ["AI Assistants", "Intelligent Automation", "AI Analytics", "Document Intelligence", "Predictive Analytics", "Generative AI Systems", "Decision Support"],
      features: ["Retrieval-Augmented Generation (RAG)", "Autonomous Agents", "Structured extraction pipelines"],
      benefits: ["Automated knowledge access", "Near-instant document parsing", "Data-driven decisions"],
      tech: "PyTorch, LangChain, Vector Embeddings, CUDA, FastAPI"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-brand-charcoal">
          Technology Products Built for Real Business Needs
        </h1>
        <p className="mt-4 text-base text-slate-600">
          Modular, high-performance product suites built to deploy as sovereign platforms or turnkey business engines.
        </p>
      </header>

      <div className="space-y-20">
        {categories.map((cat) => (
          <article key={cat.id} id={cat.id} className="border-t border-brand-border pt-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
              <div className="lg:col-span-6 space-y-6">
                <div>
                  <span className="text-xs uppercase font-mono tracking-wider text-slate-500">Suite</span>
                  <h2 className="text-2xl font-bold text-brand-charcoal mt-1">{cat.title}</h2>
                  <p className="text-sm text-slate-600 mt-2 leading-relaxed">{cat.desc}</p>
                </div>

                <div>
                  <h3 className="text-xs font-bold uppercase tracking-wider text-slate-700">Scope & Offerings</h3>
                  <div className="flex flex-wrap gap-2 mt-2">
                    {cat.examples.map((ex, i) => (
                      <span key={i} className="text-xs bg-slate-100 text-slate-700 px-3 py-1 rounded-full">
                        {ex}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4 text-xs">
                  <div>
                    <span className="font-bold text-slate-900 block mb-1">Key Features:</span>
                    <ul className="list-disc list-inside space-y-1 text-slate-600">
                      {cat.features.map((f, i) => <li key={i}>{f}</li>)}
                    </ul>
                  </div>
                  <div>
                    <span className="font-bold text-slate-900 block mb-1">Business Benefits:</span>
                    <ul className="list-disc list-inside space-y-1 text-slate-600">
                      {cat.benefits.map((b, i) => <li key={i}>{b}</li>)}
                    </ul>
                  </div>
                </div>

                <div className="text-xs text-slate-500">
                  <span className="font-semibold text-slate-800">Technology Highlights:</span> {cat.tech}
                </div>

                <div className="flex items-center gap-4 pt-2">
                  <button className="text-xs font-semibold bg-brand-charcoal text-white px-4 py-2.5 rounded hover:bg-black transition-colors">
                    Request Demo &rarr;
                  </button>
                  <button className="text-xs font-semibold border border-brand-border px-4 py-2.5 rounded hover:bg-slate-50 transition-colors">
                    View Product &rarr;
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6">
                <ImagePlaceholder label={`PRODUCT ${cat.title.toUpperCase()}`} aspectRatio="aspect-[4/3]" />
              </div>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};