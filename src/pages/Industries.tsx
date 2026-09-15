import React from 'react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

export const Industries: React.FC = () => {
  const industries = [
    {
      name: "Banking & Financial Services",
      image: "/images/industries/banking.jpg",
      overview: "Regulatory-compliant financial technology systems built for high-frequency operations.",
      challenges: "Complex regulatory frameworks, legacy mainframes, real-time fraud threats.",
      solutions: "Distributed ledger networks, modern transactional APIs, automated compliance audits.",
      outcomes: "Sub-millisecond processing, zero compliance failures, decreased overhead."
    },
    {
      name: "Insurance",
      image: "/images/industries/insurance.jpg",
      overview: "Streamlined claims processing and algorithmic risk assessment architectures.",
      challenges: "Lengthy claims lifecycles, manual underwriting bottlenecks, disparate data records.",
      solutions: "AI-based claims document validation, algorithmic underwriting engines.",
      outcomes: "70% faster claim decisions, reduced processing friction, high client satisfaction."
    },
    {
      name: "Healthcare",
      image: "/images/industries/healthcare.jpg",
      overview: "HIPAA-compliant software ecosystems connecting providers, clinics, and diagnostic platforms.",
      challenges: "Sensitive data protection, siloed EHR platforms, critical operational stakes.",
      solutions: "Interoperable FHIR/HL7 data hubs, secure diagnostic telemetric pipelines.",
      outcomes: "Integrated clinical workflows, strict regulatory compliance, elevated patient care."
    },
    {
      name: "Retail",
      image: "/images/industries/retail.jpg",
      overview: "Unified omnichannel inventory, dynamic point-of-sale, and e-commerce platforms.",
      challenges: "Omnichannel inventory synchronization, spiky web traffic, order drop-offs.",
      solutions: "Headless microservices, real-time inventory event buses, high-concurrency checkout.",
      outcomes: "Zero downtime during peak sales, synchronized global inventory, reduced cart abandonment."
    },
    {
      name: "Manufacturing",
      image: "/images/industries/manufacturing.jpg",
      overview: "Smart factory integrations, industrial IoT, and real-time equipment tracking.",
      challenges: "Unscheduled line shutdowns, distributed factory networks, legacy machinery.",
      solutions: "Edge-based sensor telemetry, predictive component analytics, SCADA integration.",
      outcomes: "Minimized unscheduled downtime, elevated operational yield, real-time floor insight."
    },
    {
      name: "Energy & Utilities",
      image: "/images/industries/energy.jpg",
      overview: "Smart grid load management, renewable infrastructure oversight, and consumption monitoring.",
      challenges: "Grid fluctuation management, distributed renewable nodes, aging infrastructure.",
      solutions: "Real-time load balancing systems, intelligent smart-meter telemetry engines.",
      outcomes: "Reduced power transmission losses, balanced grid assets, automated anomaly alerts."
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-brand-charcoal">
          Industry Expertise
        </h1>
        <p className="mt-4 text-base text-slate-600">
          Domain-specific software engineering addressing unique regulatory and technical constraints across key global sectors.
        </p>
      </header>

      <div className="space-y-12">
        {industries.map((ind, idx) => (
          <div key={idx} className="border border-brand-border rounded-xl p-8 bg-white grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4">
              <h2 className="text-xl font-bold text-brand-charcoal">{ind.name}</h2>
              <p className="text-xs text-slate-600 leading-relaxed">{ind.overview}</p>
              
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2 text-xs">
                <div className="bg-brand-subtle p-3 rounded">
                  <span className="font-semibold text-slate-800 block mb-1">Challenges</span>
                  <span className="text-slate-500">{ind.challenges}</span>
                </div>
                <div className="bg-brand-subtle p-3 rounded">
                  <span className="font-semibold text-slate-800 block mb-1">Our Solutions</span>
                  <span className="text-slate-500">{ind.solutions}</span>
                </div>
                <div className="bg-brand-subtle p-3 rounded">
                  <span className="font-semibold text-slate-800 block mb-1">Business Outcomes</span>
                  <span className="text-slate-500">{ind.outcomes}</span>
                </div>
              </div>
            </div>

            {/* Industry Image Block */}
            <div className="lg:col-span-5">
              <ImagePlaceholder 
                label={`INDUSTRY: ${ind.name.toUpperCase()}`} 
                src={ind.image} 
                alt={ind.name} 
                aspectRatio="aspect-video" 
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};