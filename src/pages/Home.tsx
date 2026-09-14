import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Code, Globe, Smartphone, Layers, Cpu, Cloud, Share2, ShieldCheck, ChevronLeft, ChevronRight } from 'lucide-react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

export const Home: React.FC = () => {
  const [activeTestimonial, setActiveTestimonial] = useState<number>(0);

  const testimonials = [
    {
      quote: "Anuka Global IT Solutions helped us transform our business process with a scalable digital platform.",
      author: "Client Name",
      role: "CEO / CTO",
      rating: 5,
    },
    {
      quote: "The technical depth and architectural guidance in building our enterprise SaaS ecosystem were unmatched.",
      author: "Enterprise Partner",
      role: "VP of Engineering",
      rating: 5,
    }
  ];

  const services = [
    { title: 'Custom Software Development', icon: Code, desc: 'Tailored applications designed around specific mission-critical operational requirements.' },
    { title: 'Web Application Development', icon: Globe, desc: 'Scalable, performant, and secure enterprise web portals built on modern architectures.' },
    { title: 'Mobile Application Development', icon: Smartphone, desc: 'Native and multi-platform iOS/Android apps built for high reliability and engagement.' },
    { title: 'SaaS Development', icon: Layers, desc: 'Full-cycle multi-tenant platforms complete with billing, auth, and analytics.' },
    { title: 'AI & Machine Learning', icon: Cpu, desc: 'Predictive analytics, custom LLM applications, intelligent workflows, and data models.' },
    { title: 'Cloud & DevOps', icon: Cloud, desc: 'Cloud migration, Kubernetes orchestration, CI/CD pipelines, and active infra monitoring.' },
    { title: 'API & System Integration', icon: Share2, desc: 'Unified enterprise API layers connecting legacy nodes and contemporary third-party SaaS.' },
    { title: 'Enterprise Application Dev', icon: ShieldCheck, desc: 'Resilient software solutions engineered for large-scale operations and workflows.' },
  ];

  const stats = [
    { value: "250+", label: "Projects Delivered" },
    { value: "120+", label: "Businesses Served" },
    { value: "85+", label: "Technology Experts" },
    { value: "12+", label: "Years of Experience" },
  ];

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="pt-20 lg:pt-28">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7 space-y-6">
            <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-brand-charcoal leading-[1.08]">
              Where Every Solution Begins with AI
            </h1>
            <p className="text-lg lg:text-xl text-brand-textMuted max-w-2xl font-normal leading-relaxed">
              We design and develop intelligent software products and digital solutions that help businesses operate smarter, scale faster, and innovate continuously.
            </p>
            <div className="flex flex-wrap gap-4 pt-4">
              <Link 
                to="/solutions" 
                className="bg-brand-charcoal text-white text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-black transition-all inline-flex items-center gap-2"
              >
                Explore Our Solutions <ArrowRight className="w-4 h-4" />
              </Link>
              <Link 
                to="/contact" 
                className="bg-white border border-brand-border text-brand-charcoal text-sm font-semibold px-6 py-3.5 rounded-full hover:bg-brand-subtle transition-all"
              >
                Talk to Our Experts
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5">
            {/* HERO IMAGE PLACEHOLDER */}
            <ImagePlaceholder label="HERO" src="/images/Image1-hp.jpg" alt="Anuka Global IT Technology Architecture" aspectRatio="aspect-square" />
          </div>
        </div>
      </section>

      {/* Trust & Intro Banner */}
      <section className="border-y border-brand-border bg-brand-subtle/50 py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="max-w-3xl">
            <span className="text-xs uppercase font-semibold tracking-widest text-slate-500">Trusted Technology Partner</span>
            <p className="mt-4 text-xl lg:text-2xl text-slate-800 leading-relaxed font-light">
              Anuka Global IT Solutions functions as a strategic innovation engine. We build enterprise-grade software products, cloud systems, and machine-learning workflows designed to solve structural business problems.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-brand-charcoal">What We Do</h2>
            <p className="text-sm text-slate-500 mt-2">Comprehensive engineering services engineered for scalability.</p>
          </div>
          <Link to="/services" className="text-xs font-bold uppercase tracking-wider text-slate-800 hover:underline mt-4 md:mt-0">
            View All Services &rarr;
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((svc, idx) => {
            const Icon = svc.icon;
            return (
              <div 
                key={idx} 
                className="border border-brand-border p-6 rounded-lg bg-white flex flex-col justify-between hover:border-slate-400 hover:shadow-md transition-all group"
              >
                <div>
                  <div className="w-10 h-10 rounded-md bg-slate-100 flex items-center justify-center text-slate-800 mb-6 group-hover:bg-brand-charcoal group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-semibold text-brand-charcoal">{svc.title}</h3>
                  <p className="text-xs text-slate-500 mt-3 leading-relaxed">{svc.desc}</p>
                </div>
                <Link to="/services" className="inline-flex items-center gap-1 text-xs font-semibold text-slate-900 mt-6 group-hover:underline">
                  Learn More <ArrowRight className="w-3 h-3" />
                </Link>
              </div>
            );
          })}
        </div>
      </section>

      {/* Business Statistics */}
      <section className="bg-brand-charcoal text-white py-16">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, idx) => (
            <div key={idx} className="border-l border-slate-700 pl-6 space-y-1">
              <div className="text-4xl lg:text-5xl font-bold tracking-tight">{stat.value}</div>
              <div className="text-xs text-slate-400 uppercase tracking-widest">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Client Logos Section */}
      <section className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-sm font-semibold tracking-widest uppercase text-slate-400">
          Trusted by Businesses. Built for Growth.
        </h2>
        <div className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className="h-16 border border-brand-border rounded flex items-center justify-center bg-white text-xs font-mono text-slate-400">
              {/* CLIENT LOGO */}
              CLIENT LOGO {item}
            </div>
          ))}
        </div>
      </section>

      {/* Testimonials Slider */}
      <section className="max-w-4xl mx-auto px-6">
        <div className="border border-brand-border bg-white rounded-2xl p-10 relative">
          <div className="flex gap-1 text-amber-500 mb-6">
            {Array.from({ length: testimonials[activeTestimonial].rating }).map((_, i) => (
              <span key={i}>★</span>
            ))}
          </div>
          <p className="text-xl md:text-2xl text-brand-charcoal font-light leading-relaxed">
            &ldquo;{testimonials[activeTestimonial].quote}&rdquo;
          </p>
          <div className="mt-6 flex justify-between items-end">
            <div>
              <div className="font-semibold text-brand-charcoal">{testimonials[activeTestimonial].author}</div>
              <div className="text-xs text-slate-500">{testimonials[activeTestimonial].role}</div>
            </div>
            <div className="flex gap-2">
              <button 
                onClick={() => setActiveTestimonial((prev: number) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                className="w-9 h-9 border border-brand-border rounded-full flex items-center justify-center hover:bg-slate-100"
                aria-label="Previous testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={() => setActiveTestimonial((prev: number) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                className="w-9 h-9 border border-brand-border rounded-full flex items-center justify-center hover:bg-slate-100"
                aria-label="Next testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Global Call to Action */}
      <section className="max-w-7xl mx-auto px-6">
        <div className="bg-brand-subtle border border-brand-border rounded-2xl p-10 lg:p-16 flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="max-w-xl">
            <h2 className="text-3xl font-bold tracking-tight text-brand-charcoal">Have an idea? Let&apos;s build it together.</h2>
            <p className="mt-3 text-sm text-slate-600 leading-relaxed">
              Whether you need a custom application, SaaS platform, mobile application, or AI-powered solution, our team can help turn your idea into a scalable technology solution.
            </p>
          </div>
          <div className="flex flex-wrap gap-4">
            <Link to="/contact" className="bg-brand-charcoal text-white text-xs font-semibold px-6 py-3 rounded-full hover:bg-black">
              Start a Conversation
            </Link>
            <Link to="/contact" className="bg-white border border-brand-border text-brand-charcoal text-xs font-semibold px-6 py-3 rounded-full hover:bg-slate-50">
              Request a Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
