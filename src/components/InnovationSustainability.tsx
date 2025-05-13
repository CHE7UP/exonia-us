'use client';

import React from 'react';

// Interface for content block props
type ContentBlockProps = {
  title: string;
  textLines: string[];
  buttonText?: string;
  buttonLink?: string;
};

// Reusable Content Block Component
const ContentBlock: React.FC<ContentBlockProps> = ({ title, textLines, buttonText, buttonLink }) => {
  return (
    <div className="mb-12 last:mb-0">
      <h3 className="text-2xl md:text-3xl font-extrabold text-[#FFD400] mb-4 tracking-tight">
        {title}
      </h3>
      {textLines.map((line, idx) => (
        <p key={idx} className="text-gray-800 mb-3 text-base md:text-lg leading-relaxed">
          {line}
        </p>
      ))}
      {buttonText && buttonLink && (
        <a
          href={buttonLink}
          className="mt-6 inline-block bg-[#FFD400] text-gray-900 font-semibold py-3 px-6 rounded-lg shadow-md
                     hover:bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-[#FFD400] focus:ring-offset-2
                     transition-colors duration-300 ease-in-out text-sm md:text-base"
        >
          {buttonText}
        </a>
      )}
    </div>
  );
};

// Main Innovation & Sustainability Component for a Packaging Company
const InnovationSustainability: React.FC = () => {
  // Content for packaging-focused messaging
  const innovationContent = {
    title: 'Innovation',
    textLines: [
      'Custom packaging designs that elevate brand visibility and protect products in transit.',
      'Smart packaging technology integrates QR codes and NFC tags for interactive unboxing experiences.',
    ],
    buttonText: 'Discover Our Capabilities',
    buttonLink: '#capabilities',
  };

  const sustainabilityContent = {
    title: 'Sustainability',
    textLines: [
      'Committed to 100% recyclable and biodegradable materials across all packaging solutions.',
      'Streamlined processes reduce waste and carbon footprint, aligning with ESG and circular economy goals.',
    ],
  };

  const imageUrl = '/ex-4.webp';
  const imageAlt = 'Innovative and sustainable packaging showcase';

  return (
    <section className="bg-gray-50 py-16 md:py-24">
      <div className="container mx-auto px-6 md:px-8">
        {/* Section Title */}
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-gray-900 mb-16 tracking-tight">
          Delivering Excellence in Packaging: Innovation & Sustainability
        </h2>

        {/* Layout */}
        <div className="flex flex-col md:flex-row items-center md:items-start gap-12 md:gap-20">
          {/* Image */}
          <div className="w-full md:w-5/12 flex-shrink-0">
            <img
              src={imageUrl}
              alt={imageAlt}
              className="w-full h-auto object-cover rounded-2xl shadow-2xl transform hover:scale-105 transition-transform duration-500 ease-out"
              onError={(e) => {
                const img = e.target as HTMLImageElement;
                img.onerror = null;
                img.src = '/ex-4.webp';
              }}
            />
          </div>

          {/* Text Blocks */}
          <div className="w-full md:w-7/12">
            <ContentBlock {...innovationContent} />
            <ContentBlock {...sustainabilityContent} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default InnovationSustainability;
