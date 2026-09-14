import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock } from 'lucide-react';
import { ImagePlaceholder } from '../components/ImagePlaceholder';

export const Contact: React.FC = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    companyName: '',
    email: '',
    phone: '',
    country: '',
    serviceRequired: 'Custom Software Development',
    projectBudget: '$25k - $50k',
    projectDescription: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Enquiry submitted successfully. A technical advisor will contact you within 24 hours.');
  };

  return (
    <div className="max-w-7xl mx-auto px-6 py-20 space-y-16">
      <header className="max-w-3xl">
        <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-brand-charcoal">
          Let&apos;s Build Something Great Together
        </h1>
        <p className="mt-4 text-base text-slate-600">
          Reach out to schedule an architectural consultation, discuss project parameters, or review product demos.
        </p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
        {/* Contact Form */}
        <div className="lg:col-span-7 bg-white border border-brand-border rounded-xl p-8 shadow-sm">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Full Name *</label>
                <input 
                  type="text" 
                  name="fullName" 
                  required 
                  value={formData.fullName} 
                  onChange={handleChange}
                  className="w-full text-xs border border-brand-border rounded p-3 focus:outline-none focus:border-black"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Company Name</label>
                <input 
                  type="text" 
                  name="companyName" 
                  value={formData.companyName} 
                  onChange={handleChange}
                  className="w-full text-xs border border-brand-border rounded p-3 focus:outline-none focus:border-black"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Work Email *</label>
                <input 
                  type="email" 
                  name="email" 
                  required 
                  value={formData.email} 
                  onChange={handleChange}
                  className="w-full text-xs border border-brand-border rounded p-3 focus:outline-none focus:border-black"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Phone Number</label>
                <input 
                  type="tel" 
                  name="phone" 
                  value={formData.phone} 
                  onChange={handleChange}
                  className="w-full text-xs border border-brand-border rounded p-3 focus:outline-none focus:border-black"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Country</label>
                <input 
                  type="text" 
                  name="country" 
                  value={formData.country} 
                  onChange={handleChange}
                  className="w-full text-xs border border-brand-border rounded p-3 focus:outline-none focus:border-black"
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Service Required</label>
                <select 
                  name="serviceRequired" 
                  value={formData.serviceRequired} 
                  onChange={handleChange}
                  className="w-full text-xs border border-brand-border rounded p-3 bg-white focus:outline-none focus:border-black"
                >
                  <option>Custom Software Development</option>
                  <option>Web Application Development</option>
                  <option>Mobile Application Development</option>
                  <option>SaaS Platform Development</option>
                  <option>AI & Machine Learning</option>
                  <option>Cloud Infrastructure</option>
                  <option>Application Modernization</option>
                </select>
              </div>
              <div>
                <label className="block text-xs font-semibold text-slate-700 mb-1">Project Budget</label>
                <select 
                  name="projectBudget" 
                  value={formData.projectBudget} 
                  onChange={handleChange}
                  className="w-full text-xs border border-brand-border rounded p-3 bg-white focus:outline-none focus:border-black"
                >
                  <option>&lt; $25,000</option>
                  <option>$25,000 - $50,000</option>
                  <option>$50,000 - $100,000</option>
                  <option>$100,000+</option>
                </select>
              </div>
            </div>

            <div>
              <label className="block text-xs font-semibold text-slate-700 mb-1">Project Description *</label>
              <textarea 
                rows={4} 
                name="projectDescription" 
                required 
                value={formData.projectDescription} 
                onChange={handleChange}
                placeholder="Describe your timeline, business context, and technical challenges..."
                className="w-full text-xs border border-brand-border rounded p-3 focus:outline-none focus:border-black"
              />
            </div>

            <button 
              type="submit" 
              className="w-full py-3.5 bg-brand-charcoal text-white rounded font-semibold text-xs hover:bg-black transition-colors"
            >
              Send Enquiry
            </button>
          </form>
        </div>

        {/* Operational Info */}
        <div className="lg:col-span-5 space-y-6">
          <div className="border border-brand-border rounded-xl p-6 bg-brand-subtle space-y-4">
            <h2 className="text-sm font-bold text-brand-charcoal">Global Headquarters & Contact</h2>
            <div className="space-y-3 text-xs text-slate-600">
              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-slate-400" />
                <span>contact@anukaglobal.com</span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-4 h-4 text-slate-400" />
                <span>+1 (800) 000-0000 / +91 (0) 00-0000-0000</span>
              </div>
              <div className="flex items-center gap-3">
                <MapPin className="w-4 h-4 text-slate-400" />
                <span>Anuka Global Technology Park, Financial District, Technology Hub</span>
              </div>
              <div className="flex items-center gap-3">
                <Clock className="w-4 h-4 text-slate-400" />
                <span>Monday – Friday: 08:00 – 18:00 UTC</span>
              </div>
            </div>
          </div>

          {/* EMBEDDED MAP PLACEHOLDER */}
          <ImagePlaceholder label="EMBEDDED INTERACTIVE MAP" aspectRatio="aspect-video" />
        </div>
      </div>
    </div>
  );
};