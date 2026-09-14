import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, ArrowRight, Menu, X } from 'lucide-react';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const productLinks = [
    { title: 'Finance Solutions', href: '/products#finance' },
    { title: 'HR Solutions', href: '/products#hr' },
    { title: 'Electronics Solutions', href: '/products#electronics' },
    { title: 'Electrical Solutions', href: '/products#electrical' },
    { title: 'AI-Powered Products', href: '/products#ai' },
    { title: 'SaaS Products', href: '/products#saas' },
    { title: 'Custom Enterprise Products', href: '/products#enterprise' },
  ];

  const serviceLinks = [
    { title: 'Custom Software Development', href: '/services' },
    { title: 'Web Application Development', href: '/services' },
    { title: 'Mobile Application Development', href: '/services' },
    { title: 'SaaS Application Development', href: '/services' },
    { title: 'API Development & Integration', href: '/services' },
    { title: 'Cloud Solutions', href: '/services' },
    { title: 'AI & Machine Learning', href: '/services' },
    { title: 'Enterprise Application Dev', href: '/services' },
    { title: 'Application Modernization', href: '/services' },
    { title: 'Software Maintenance & Support', href: '/services' },
  ];

  const solutionLinks = [
    { title: 'Enterprise Solutions', href: '/solutions' },
    { title: 'Digital Transformation', href: '/solutions' },
    { title: 'Automation Solutions', href: '/solutions' },
    { title: 'AI Solutions', href: '/solutions' },
    { title: 'Cloud Solutions', href: '/solutions' },
    { title: 'Data & Analytics', href: '/solutions' },
    { title: 'Workflow Automation', href: '/solutions' },
  ];

  return (
    <header className="sticky top-0 z-50 bg-white/95 backdrop-blur-sm border-b border-brand-border">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold tracking-tight text-brand-charcoal">
          ANUKA GLOBAL <span className="font-light text-slate-500">IT SOLUTIONS</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center space-x-7 text-sm font-medium text-slate-700">
          <Link to="/" className="hover:text-black transition-colors">Home</Link>

          {/* Products Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('products')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-black transition-colors py-2">
              Products <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>
            {activeDropdown === 'products' && (
              <div className="absolute top-full left-0 w-64 bg-white border border-brand-border rounded-lg shadow-xl py-2 animate-in fade-in slide-in-from-top-1">
                {productLinks.map((item, idx) => (
                  <Link key={idx} to={item.href} className="block px-4 py-2 text-xs text-slate-600 hover:bg-brand-subtle hover:text-black">
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Services Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('services')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-black transition-colors py-2">
              Services <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>
            {activeDropdown === 'services' && (
              <div className="absolute top-full left-0 w-72 bg-white border border-brand-border rounded-lg shadow-xl py-2 animate-in fade-in slide-in-from-top-1">
                {serviceLinks.map((item, idx) => (
                  <Link key={idx} to={item.href} className="block px-4 py-2 text-xs text-slate-600 hover:bg-brand-subtle hover:text-black">
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          {/* Solutions Dropdown */}
          <div 
            className="relative"
            onMouseEnter={() => setActiveDropdown('solutions')}
            onMouseLeave={() => setActiveDropdown(null)}
          >
            <button className="flex items-center gap-1 hover:text-black transition-colors py-2">
              Solutions <ChevronDown className="w-4 h-4 text-slate-400" />
            </button>
            {activeDropdown === 'solutions' && (
              <div className="absolute top-full left-0 w-64 bg-white border border-brand-border rounded-lg shadow-xl py-2">
                {solutionLinks.map((item, idx) => (
                  <Link key={idx} to={item.href} className="block px-4 py-2 text-xs text-slate-600 hover:bg-brand-subtle hover:text-black">
                    {item.title}
                  </Link>
                ))}
              </div>
            )}
          </div>

          <Link to="/industries" className="hover:text-black transition-colors">Industries</Link>
          <Link to="/about" className="hover:text-black transition-colors">About Us</Link>
          <Link to="/resources" className="hover:text-black transition-colors">Resources</Link>
        </nav>

        {/* CTA Button */}
        <div className="hidden lg:flex items-center">
          <Link 
            to="/contact" 
            className="inline-flex items-center gap-2 bg-brand-charcoal text-white text-xs font-semibold px-5 py-2.5 rounded-full hover:bg-black transition-all"
          >
            Let&apos;s Talk <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button 
          className="lg:hidden p-2 text-slate-600" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-brand-border bg-white px-6 py-4 space-y-3">
          <Link to="/" className="block py-1 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>Home</Link>
          <Link to="/products" className="block py-1 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>Products</Link>
          <Link to="/services" className="block py-1 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>Services</Link>
          <Link to="/solutions" className="block py-1 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>Solutions</Link>
          <Link to="/industries" className="block py-1 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>Industries</Link>
          <Link to="/about" className="block py-1 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>About Us</Link>
          <Link to="/resources" className="block py-1 text-sm font-medium" onClick={() => setMobileMenuOpen(false)}>Resources</Link>
          <Link to="/contact" className="block py-1 text-sm font-medium text-slate-900 font-bold" onClick={() => setMobileMenuOpen(false)}>Let&apos;s Talk →</Link>
        </div>
      )}
    </header>
  );
};