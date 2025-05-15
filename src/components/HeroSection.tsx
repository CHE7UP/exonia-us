// 'use client';

// import React, { useState } from 'react';
// import { Package, Recycle, Play } from 'lucide-react';

// const HeroSection: React.FC = () => {
//   const [videoModalOpen, setVideoModalOpen] = useState(false);

//   return (
//     <div className="relative w-full h-[60vh] min-h-[480px] max-h-[800px] overflow-hidden">
//       {/* Video Background */}
//       <div className="absolute inset-0 z-0">
//         <div className="absolute inset-0 bg-secondary/40 z-10" /> {/* Overlay */}
//         <video 
//           className="object-cover w-full h-full" 
//           autoPlay 
//           muted 
//           loop 
//           playsInline
//           style={{ transform: "scale(1.05)" }}
//           onCanPlay={(e) => {
//             e.currentTarget.playbackRate = 0.5;
//           }}
//         >
//           <source src="https://exonia.ro/wp-content/uploads/exonia_hero_video_1920x800.mp4" type="video/mp4" />
//         </video>
//       </div>

//       {/* Main hero content container */}
//       <div className="absolute inset-0 z-20 flex flex-col md:flex-row items-center">
//         {/* Left Section: Branded Packaging */}
//         <HeroHalfSection 
//           firstWord="BRANDED"
//           secondWord="PACKAGING"
//           icon={<Package size={40} />}
//           description="Premium customized packaging solutions for your brand identity. We create distinctive packaging that elevates your brand."
//           position="left"
//         />

//         {/* Center divider line */}
//         <div className="absolute hidden md:block left-1/2 transform -translate-x-1/2 top-[20%] bottom-[20%] w-px bg-white/30 z-30"></div>

//         {/* Right Section: Sustainable Solutions */}
//         <HeroHalfSection 
//           firstWord="SUSTAINABLE"
//           secondWord="SOLUTIONS"
//           icon={<Recycle size={40} />}
//           description="Eco-friendly packaging innovations that reduce environmental impact while maintaining quality and performance."
//           position="right"
//         />
//       </div>

//       {/* Video button at bottom */}
//       <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
//         <button
//           onClick={() => setVideoModalOpen(true)}
//           className="group flex items-center bg-primary/90 hover:bg-primary text-secondary px-4 py-2 border border-white rounded-full transition-colors duration-300"
//         >
//           <div className="mr-2 bg-white rounded-full p-1 group-hover:scale-105 transition-transform">
//             <Play size={12} fill="var(--primary)" className="ml-0.5" />
//           </div>
//           <span className="text-sm font-medium text-white/90">Watch Factory Tour</span>
//         </button>
//       </div>
      
//       {/* Video Modal */}
//       {videoModalOpen && (
//         <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 md:p-8" onClick={() => setVideoModalOpen(false)}>
//           <div className="relative w-full max-w-4xl aspect-video bg-black" onClick={e => e.stopPropagation()}>
//             <button 
//               className="absolute -top-10 right-0 text-white hover:text-primary"
//               onClick={() => setVideoModalOpen(false)}
//             >
//               Close
//             </button>
//             <div className="w-full h-full flex items-center justify-center">
//               <iframe 
//                 className="w-full h-full"
//                 src="https://www.youtube.com/embed/PfJeaQ8XdzI?autoplay=1&start=4" 
//                 title="Factory Tour" 
//                 frameBorder="0" 
//                 allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
//                 allowFullScreen
//               ></iframe>
//             </div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// // Hero Half Section Component
// interface HeroHalfSectionProps {
//   firstWord: string;
//   secondWord: string;
//   icon: React.ReactNode;
//   description: string;
//   position: 'left' | 'right';
// }

// const HeroHalfSection: React.FC<HeroHalfSectionProps> = ({
//   firstWord,
//   secondWord,
//   icon,
//   description,
//   position,
// }) => {
//   return (
//     <div
//       className="w-full h-1/2 md:h-full md:w-1/2 relative group transition-all duration-300 
//         hover:bg-primary/20 overflow-hidden"
//     >
//       <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4">
//         {/* Icon above title */}
//         <div className="mb-3 md:mb-4 text-white transform transition-transform group-hover:scale-110">
//           {icon}
//         </div>
        
//         {/* Two-tier title - with fixed heights */}
//         <div className="flex flex-col items-center justify-center h-20 md:h-24">
//           <div className="text-lg md:text-2xl text-white/90 font-light tracking-wider leading-tight h-6 md:h-8 flex items-center">
//             {firstWord}
//           </div>
//           <div className="text-2xl md:text-3xl lg:text-4xl text-white font-bold tracking-wide mt-1 leading-tight h-8 md:h-12 flex items-center">
//             {secondWord}
//           </div>
//         </div>
        
//         {/* Description - Visible on Hover */}
//         <div className="h-24 flex items-start justify-center overflow-hidden">
//           <p
//             className="text-white/90 text-sm md:text-md max-w-xs px-4 md:px-6 text-center 
//               transform transition-all duration-300 
//               translate-y-10 opacity-0 group-hover:translate-y-0 group-hover:opacity-100"
//           >
//             {description}
//           </p>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default HeroSection;

'use client';

import React, { useState, useRef } from 'react';
import { Package, Recycle, Play, ArrowRight } from 'lucide-react';
import Link from 'next/link';
// No more GSAP import
// import gsap from 'gsap';

// --- HeroSection Component (Updated) ---
const HeroSection: React.FC = () => {
  const [videoModalOpen, setVideoModalOpen] = useState(false);
  // Refs are kept if needed for structure or handlers, but not for GSAP targets
  const dividerRef = useRef<HTMLDivElement>(null);
  const taglineRef = useRef<HTMLDivElement>(null);
  const videoButtonRef = useRef<HTMLButtonElement>(null);

  // No more GSAP useEffects needed here for initial animations
  // These are now handled by CSS classes applied directly

  return (
    // Use a generic class or ID if needed, heroRef not strictly necessary unless used elsewhere
    <div className="relative border-t-[4px] border-t-[#FFD400] w-full h-[60vh] min-h-[480px] max-h-[800px] overflow-hidden">
      {/* Video Background */}
      <div className="absolute inset-0 z-0">
        {/* Consider making overlay color adjustable or consistent with yellow theme */}
        <div className="absolute inset-0 bg-black/50 z-10" /> {/* Adjusted overlay slightly */}
        <video
          className="object-cover w-full h-full"
          autoPlay
          muted
          loop
          playsInline
          style={{ transform: 'scale(1.05)' }} // Keep inline style if needed
          onCanPlay={(e) => {
            e.currentTarget.playbackRate = 0.5;
          }}
        >
          <source src="https://exonia.ro/wp-content/uploads/exonia_hero_video_1920x800.mp4" type="video/mp4" />
        </video>
      </div>

      {/* Top tagline - add animation class */}
      <div
        ref={taglineRef}
        // Apply fadeInUp animation class
        className="absolute top-8 left-0 right-0 text-center text-white z-20 px-4 animate-fadeInUp opacity-0" // Start with opacity-0
      >
        {/* Optional: Add back your tagline if needed */}
        {/* <p className="hidden md:block text-md font-light tracking-wider text-white">
          Serving sustainable solutions...
        </p> */}
      </div>

      {/* Main hero content container */}
      <div className="absolute inset-0 z-20 flex flex-col md:flex-row items-center">
        {/* Left Section */}
        <HeroHalfSection
          firstWord="BRANDED"
          secondWord="PACKAGING"
          icon={<Package size={40} />}
          description="Premium customized packaging solutions for your brand identity. We create distinctive packaging that elevates your brand."
          position="left"
          button="EXPLORE MORE"
        />

        {/* Center divider line - add animation class */}
        <div
          ref={dividerRef}
          // Apply fadeInScaleY animation class
          className="absolute hidden md:block left-1/2 transform -translate-x-1/2 top-[20%] bottom-[20%] w-px bg-white/30 z-30 animate-fadeInScaleY opacity-0" // Start with opacity-0
        ></div>

        {/* Right Section */}
        <HeroHalfSection
          firstWord="SUSTAINABLE"
          secondWord="SOLUTIONS"
          icon={<Recycle size={40} />}
          description="Eco-friendly packaging innovations that reduce environmental impact while maintaining quality and performance."
          position="right"
          button="EXPLORE MORE"
        />
      </div>

      {/* Video button - add animation class */}
    <div className="hidden md:block absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20">
      <button
        ref={videoButtonRef}
        onClick={() => setVideoModalOpen(true)}
        className="group cursor-pointer flex items-center bg-black/40 backdrop-blur-sm hover:bg-black/50 px-4 py-2 rounded-full transition-all duration-300 border border-white/20 transition-shadow duration-300
         hover:shadow-[0_4px_12px_-2px_rgba(255,212,0,0.6)]"
      >
        {/* Play icon with subtle animation */}
        <div className="relative z-10 mr-2 bg-white/10 rounded-full p-1.5 group-hover:bg-yellow-400/20 transition-colors duration-300">
          <Play size={12} fill="white" className="text-white" />
          <div className="absolute inset-0 bg-white/20 rounded-full animate-pulse opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
        </div>
        
        {/* Text with transition */}
        <span className="relative z-10 text-xs font-medium tracking-wide text-white/90 group-hover:text-white transition-colors duration-300">
          Watch Factory Tour
        </span>
      </button>
    </div>

      {/* Video Modal (no changes needed here) */}
      {videoModalOpen && (
        <div className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4 md:p-8" onClick={() => setVideoModalOpen(false)}>
          <div className="relative w-full max-w-4xl aspect-video bg-black" onClick={e => e.stopPropagation()}>
            <button
              className="absolute -top-10 right-0 text-white hover:text-primary"
              onClick={() => setVideoModalOpen(false)}
            >
              Close
            </button>
            <div className="w-full h-full flex items-center justify-center">
              <iframe
                className="w-full h-full"
                src="https://www.youtube.com/embed/PfJeaQ8XdzI?autoplay=1&start=4" // Replace with actual YouTube embed URL
                title="Factory Tour"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" // Updated allow attributes
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

// --- HeroHalfSection Component (Updated) ---
interface HeroHalfSectionProps {
  firstWord: string;
  secondWord: string;
  icon: React.ReactNode;
  description: string;
  button:string;
  position: 'left' | 'right';

}

const HeroHalfSection: React.FC<HeroHalfSectionProps> = ({
  firstWord,
  secondWord,
  icon,
  description,
  button,
}) => {
  // Ref needed for setting CSS variables
  const sectionRef = useRef<HTMLDivElement>(null);

  // Keep mouse enter handler ONLY to set ripple position
  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!sectionRef.current) return;
    const rect = sectionRef.current.getBoundingClientRect();
    // Set CSS custom properties for ripple origin
    sectionRef.current.style.setProperty('--ripple-x', `${e.clientX - rect.left}px`);
    sectionRef.current.style.setProperty('--ripple-y', `${e.clientY - rect.top}px`);
  };

  // We no longer need isHovered state or the GSAP useEffect

  return (
    <div
      ref={sectionRef}
      // Add the main class for hover styles and transitions
      className="hero-half-section w-full h-1/2 md:h-full md:w-1/2 overflow-hidden relative cursor-pointer" // Added cursor-pointer
      // Track mouse movement for ripple position
      onMouseMove={handleMouseMove}
      // Reset ripple position slightly off-center when mouse leaves if desired (optional)
      onMouseLeave={() => {
        if (sectionRef.current) {
           sectionRef.current.style.setProperty('--ripple-x', `50%`);
           sectionRef.current.style.setProperty('--ripple-y', `50%`);
        }
      }}
    >
      {/* Ripple effect element - styled and animated by CSS */}
      {/* The 'ripple' class links it to the CSS @keyframes and styles */}
      <div className="ripple" />

      {/* Content container - no changes needed here */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 z-10"> {/* Ensure content is above ripple */}
        <div className="mb-3 md:mb-4 text-white">
          {icon}
        </div>
        <div className="flex flex-col items-center justify-center h-20 md:h-24">
          <div className="text-lg md:text-2xl text-white/90 font-light tracking-wider leading-tight h-6 md:h-8 flex items-center">
            {firstWord}
          </div>
          <div className="text-2xl md:text-3xl lg:text-4xl text-white font-bold tracking-wide mt-1 leading-tight h-8 md:h-12 flex items-center">
            {secondWord}
          </div>
        </div>
        <div className="h-24 flex flex-col items-center justify-center pt-16"> {/* Added padding-top for spacing */}
          {/* Description - styled and animated by CSS via parent hover */}
          {/* The 'description' class links it to the CSS transitions */}
          <p className="description text-white/90 text-sm md:text-md max-w-xs px-4 md:px-6 text-center">
            {description}
          </p>
          <Link
            className=" description inline-block rounded-full w-[190px] text-md cursor-pointer mt-6 transition-all duration-300" // Full coverage for click
            href="products" // Adjust link as needed
          >
  <div
    className="flex items-center justify-center w-auto py-2 px-4 text-center text-gray-700 font-semibold rounded-full bg-white/60 hover:bg-white/90 transition-all duration-300 shadow-sm"
  >
    <span>{button}</span>
    <ArrowRight 
      size={18} 
      className="ml-2 transform transition-all duration-300 ease-in-out group-hover:translate-x-1"
    />
  </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;