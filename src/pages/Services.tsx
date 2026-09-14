import React from 'react';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

export const Services: React.FC = () => {
  const serviceList = [
    {
      title: "Custom Software Application Development",
      description: "We architect, build, and deploy high-performance software tailored directly to your operating structure.",
      details: ["Bespoke business engines", "Clean architecture frameworks", "Complete IP ownership", "Scalable domain-driven design"]
    },
    {
      title: "Web Application Development",
      description: "Progressive, high-performance web applications delivering desktop-level experiences on modern browser platforms.",
      details: ["Modern frontend frameworks", "Server-side rendering (SSR)", "Complex client-side states", "Strict web accessibility standards"]
    },
    {
      title: "Mobile Application Development",
      description: "Engineered mobile products with frictionless user experiences across iOS and Android ecosystems.",
      details: ["React Native / Flutter frameworks", "Native Swift / Kotlin optimization", "Offline sync engines", "Biometric device integrations"]
    },
    {
      title: "SaaS Application Development",
      description: "Full-lifecycle delivery for multi-tenant software platforms ready to scale from zero to millions of users.",
      details: ["Multi-tenancy models", "Stripe/Adyen payment integrations", "Role-based access control (RBAC)", "Tenant metric reporting"]
    },
    {
      title: "AI & Machine Learning",
      description: "Deep enterprise integration of artificial intelligence models that generate measurable operational leverage.",
      details: ["Custom LLM orchestration", "Agentic automation systems", "Machine learning classification pipelines", "Vector database architecture"]
    },
    {
      title: "Cloud Solutions",
      description: "Secure, highly available cloud infrastructures designed for high traffic volumes and regulatory adherence.",
      details: ["Infrastructure as Code (Terraform)", "Multi-region AWS / Azure topologies", "Zero-downtime CI/CD workflows", "Automated disaster recovery"]
    },
    {
      title: "API Development & Integration",
      description: "Robust data conduits facilitating resilient interoperability between disparate enterprise systems.",
      details: ["RESTful & GraphQL interfaces", "Enterprise service bus modernizations", "Microservice mesh architectures", "Throttled third-party gateways"]
    },
    {
      title: "Application Modernization",
      description: "Refactoring legacy monoliths into composable, secure cloud-native platforms without service interruption.",
      details: ["Strangler fig pattern migrations", "Monolith decoupling", "Database normalization & upgrades", "Interface modernizations"]
    },
    {
      title: "Software Maintenance & Support",
      description: "24/7 reliability engineering ensuring your applications maintain optimal uptime, speed, and safety standards.",
      details: ["Continuous patch cycles", "Proactive telemetry & alerting", "SLA-driven resolution teams", "Zero-day vulnerability audits"]
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-brand-charcoal">
          Engineering Services Built for Scalability
        </h1>
        <p className="mt-4 text-base text-slate-600">
          Our engineering capabilities span the entire product development lifecycle—from conceptual system architecture to production deployment and long-term modernization.
        </p>
      </header>

      <div className="mb-12">
        <ImagePlaceholder label="SERVICES ARCHITECTURE OVERVIEW" aspectRatio="aspect-[21/9]" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {serviceList.map((svc, idx) => (
          <div key={idx} className="border border-brand-border bg-white rounded-lg p-8 flex flex-col justify-between hover:border-slate-400 transition-all">
            <div>
              <span className="text-xs font-mono text-slate-400">0{idx + 1}</span>
              <h2 className="text-lg font-bold text-brand-charcoal mt-2 mb-3">{svc.title}</h2>
              <p className="text-xs text-slate-600 leading-relaxed mb-6">{svc.description}</p>
              
              <ul className="space-y-2 border-t border-slate-100 pt-4">
                {svc.details.map((item, i) => (
                  <li key={i} className="flex items-start gap-2 text-xs text-slate-500">
                    <CheckCircle2 className="w-3.5 h-3.5 text-slate-800 flex-shrink-0 mt-0.5" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="pt-8">
              <button className="text-xs font-semibold inline-flex items-center gap-1.5 text-slate-900 hover:underline">
                Engage Service <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};