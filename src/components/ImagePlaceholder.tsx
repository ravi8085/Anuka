import React from 'react';

interface ImagePlaceholderProps {
  label: string;
  src?: string;
  alt?: string;
  aspectRatio?: string;
  className?: string;
}

export const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({ 
  label, 
  src,
  alt,
  aspectRatio = "aspect-video", 
  className = "" 
}) => {
  if (src) {
    return (
      <div className={`w-full overflow-hidden rounded-lg ${aspectRatio} ${className}`}>
        <img 
          src={src} 
          alt={alt || label} 
          className="w-full h-full object-cover object-center transition-transform duration-300 hover:scale-105" 
          loading="lazy"
        />
      </div>
    );
  }

  return (
    <div 
      className={`w-full ${aspectRatio} bg-slate-100 border border-dashed border-slate-300 rounded-lg flex flex-col items-center justify-center p-6 text-center group transition-colors hover:bg-slate-50 ${className}`}
    >
      <div className="w-10 h-10 mb-3 rounded-full bg-slate-200 border border-slate-300 flex items-center justify-center text-slate-400 group-hover:scale-105 transition-transform">
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
      </div>
      <span className="text-xs tracking-wider uppercase font-semibold text-slate-500">
        &lt;!-- IMAGE PLACEHOLDER: {label} --&gt;
      </span>
    </div>
  );
};