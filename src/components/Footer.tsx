// import React from 'react';
// import Link from 'next/link';
// import { Linkedin, Facebook, Instagram, Youtube, ArrowRight, Home, Mail, Phone, MapPin } from 'lucide-react';
// import Logo from './Logo'; // Assuming your Logo component is in ./Logo.tsx or ./Logo.js

// const Footer: React.FC = () => {
//   // CSS variables are used directly in Tailwind classes, so brandColor constant is no longer needed here.

//   // Consistent link styling using CSS variables
//   const baseLinkStyle = `text-[var(--gray-200)] hover:text-[var(--primary)] transition-colors duration-300 ease-in-out`; // Adjusted from gray-400 to gray-200 for better visibility on dark bg
//   const navLinkStyle = `${baseLinkStyle} text-sm`;
//   const socialIconStyle = `text-[var(--gray-200)] hover:text-[var(--primary)] transition-colors duration-300 ease-in-out`; // Adjusted for consistency

//   // Section title styling using CSS variables
//   const sectionTitleStyle = "text-[var(--gray-50)] font-semibold mb-5 text-base tracking-wide uppercase"; // Using a very light gray or white equivalent

//   return (
//     // Using --secondary for footer background and --secondary-light for border
//     <footer className="bg-[var(--secondary)] text-[var(--gray-100)] font-sans border-t border-[var(--secondary-light)]">
//       <div className="container mx-auto px-6 lg:px-8 py-16">
//         {/* Breadcrumb - subtle styling using CSS variables */}
//         <div className="mb-12 text-xs text-[var(--gray-200)]"> {/* Adjusted from gray-500 */}
//           <Link href="/" className="hover:text-[var(--gray-50)] flex items-center"> {/* Hover to lighter gray/white */}
//             <Home size={14} className="mr-1.5" /> HOME >
//           </Link>
//         </div>

//         {/* Main content grid - adjusted gap and layout */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
//           {/* Contact Section - Updated Address */}
//           <div>
//             <h3 className={sectionTitleStyle}>Contact</h3>
//             <p className="text-[var(--gray-50)] font-medium mb-1">North America</p>
//             <div className="flex items-start mb-2 text-sm text-[var(--gray-100)]"> {/* Text for address details */}
//               <MapPin size={16} className="mr-2 mt-1 flex-shrink-0 text-[var(--gray-200)]" /> {/* Icon color */}
//               <span>1037 N 65th St, #81726, Seattle WA 98115</span>
//             </div>
//             <div className="flex items-center mb-2 text-sm">
//               <Mail size={16} className="mr-2 flex-shrink-0 text-[var(--gray-200)]" /> {/* Icon color */}
//               <a href="mailto:info@exonia.us" className={navLinkStyle}>info@exonia.us</a>
//             </div>
//             <div className="flex items-center mb-4 text-sm">
//               <Phone size={16} className="mr-2 flex-shrink-0 text-[var(--gray-200)]" /> {/* Icon color */}
//               <a href="tel:2066192804" className={navLinkStyle}>206.619.2804</a>
//             </div>
//             <Link href="/contact" className={`${navLinkStyle} flex items-center group font-medium`}>
//               View All Contact Options
//               <ArrowRight size={16} className="ml-1.5 transform transition-transform duration-300 group-hover:translate-x-1" />
//             </Link>
//           </div>

//           {/* Shortcuts Section - refined spacing and link style */}
//           <div>
//             <h3 className={sectionTitleStyle}>Shortcuts</h3>
//             <ul className="space-y-2.5">
//               <li><Link href="/about-us" className={navLinkStyle}>About Us</Link></li>
//               <li><Link href="/careers" className={navLinkStyle}>Job Vacancies</Link></li>
//               <li><Link href="/sustainability" className={navLinkStyle}>Go Sustainable</Link></li>
//               <li><Link href="/insights" className={navLinkStyle}>Trends & Cases</Link></li>
//               <li><Link href="/investors/financial-reports" className={navLinkStyle}>Financial Reports</Link></li>
//               <li><Link href="/products" className={navLinkStyle}>Products</Link></li>
//             </ul>
//           </div>

//           {/* Subscribe Section - refined button style using CSS variables */}
//           <div>
//             <h3 className={sectionTitleStyle}>Stay Updated</h3>
//             <p className="mb-5 text-sm text-[var(--gray-100)]"> {/* Text for subscribe details */}
//               Subscribe to our newsletter for the latest press releases, reports, and company information.
//             </p>
//             <Link href="/subscribe" passHref>
//               <button
//                 className={`bg-[var(--primary)] text-[var(--secondary-dark)] hover:bg-opacity-80 font-semibold py-2.5 px-6 rounded-md transition-all duration-300 ease-in-out w-full sm:w-auto focus:outline-none focus:ring-2 focus:ring-[var(--primary)] cursor-pointer focus:ring-opacity-50`}
//               >
//                 Subscribe Now
//               </button>
//             </Link>
//           </div>

//           {/* Inspiration/Social Media Section - Modernized icons, updated links */}
//           <div>
//             <h3 className={sectionTitleStyle}>Follow Us</h3>
//             <div className="flex space-x-5">
//               <a href="https://www.linkedin.com/company/exonia-holding-sa-romania/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={socialIconStyle}>
//                 <Linkedin size={22} />
//               </a>
//               <a href="https://www.facebook.com/Exonia.ro" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={socialIconStyle}>
//                 <Facebook size={22} />
//               </a>
//               <a href="https://www.instagram.com/exonia_romania/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={socialIconStyle}>
//                 <Instagram size={22} />
//               </a>
//               <a href="https://www.youtube.com/@BIOEXONIA" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={socialIconStyle}>
//                 <Youtube size={22} />
//               </a>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* Divider - more subtle using CSS variables */}
//       <div className="container mx-auto px-6 lg:px-8">
//         <hr className="border-[var(--secondary-light)]" /> {/* Using --secondary-light for divider */}
//       </div>

//       {/* Bottom Bar - refined layout and styling using CSS variables */}
//       <div className="container mx-auto px-6 lg:px-8 py-8">
//         <div className="flex flex-col md:flex-row justify-between items-center text-xs">
//           {/* Logo - Using imported Logo component */}
//           <div className="mb-4 md:mb-0">
//             <Link href="/" aria-label="Company Homepage">
//               <Logo color="white" /> {/* Your company logo component */}
//             </Link>
//           </div>

//           {/* Copyright and Legal Links - combined and refined using CSS variables */}
//           <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4 md:mb-0 text-[var(--gray-200)]"> {/* Copyright text color */}
//             <span>© {new Date().getFullYear()} Exonia Holdings. All Rights Reserved.</span>
//             <span className="hidden sm:inline">|</span>
//             <Link href="/legal/terms-of-use" className={baseLinkStyle}>Terms of Use</Link>
//             <Link href="/legal/privacy-notice" className={baseLinkStyle}>Privacy Notice</Link>
//           </div>

//           {/* Language Switcher - more subtle styling using CSS variables */}

//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from 'react';
import Link from 'next/link';
import { Linkedin, Facebook, Instagram, Youtube, ArrowRight, Home, Mail, Phone, MapPin, ChevronRight } from 'lucide-react';
import Logo from './Logo'; // Assuming your Logo component is in ./Logo.tsx or ./Logo.js

const Footer: React.FC = () => {
  // Consistent link styling
  const baseLinkStyle = "text-gray-400 hover:text-gray-200 transition-colors duration-300 ease-in-out";
  const navLinkStyle = `${baseLinkStyle} text-sm`;
  const socialIconStyle = "text-gray-400 hover:text-gray-300 transition-colors duration-300";

  // Section title styling
  const sectionTitleStyle = "text-gray-200 font-medium mb-5 text-sm tracking-wide uppercase";

  return (
    <footer className="bg-gray-800 bg-opacity-95 text-gray-300 font-sans border-t border-gray-700">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        {/* Breadcrumb - more subtle */}
        <div className="mb-12 text-xs text-gray-500">
          <Link href="/" className="hover:text-gray-300 flex items-center transition-colors duration-300">
            <Home size={14} className="mr-1.5" /> HOME
          </Link>
        </div>

        {/* Main content grid - elegant spacing */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-10 gap-y-12">
          {/* Contact Section - Updated Address */}
          <div>
            <h3 className={sectionTitleStyle}>Contact</h3>
            <p className="text-gray-200 font-medium mb-1 text-sm">North America</p>
            <div className="flex items-start mb-3 text-xs text-gray-400">
              <MapPin size={14} className="mr-2 mt-0.5 flex-shrink-0 text-gray-500" />
              <span>1037 N 65th St, #81726, Seattle WA 98115</span>
            </div>
            <div className="flex items-center mb-3 text-xs">
              <Mail size={14} className="mr-2 flex-shrink-0 text-gray-500" />
              <a href="mailto:info@exonia.us" className={navLinkStyle}>info@exonia.us</a>
            </div>
            <div className="flex items-center mb-4 text-xs">
              <Phone size={14} className="mr-2 flex-shrink-0 text-gray-500" />
              <a href="tel:2066192804" className={navLinkStyle}>206.619.2804</a>
            </div>
            <Link href="/contact" className={`${navLinkStyle} flex items-center group font-medium text-xs`}>
              View All Contact Options
              <ChevronRight size={14} className="ml-1 transform transition-all duration-300 group-hover:translate-x-0.5" />
            </Link>
          </div>

          {/* Shortcuts Section - refined spacing and link style */}
          <div>
            <h3 className={sectionTitleStyle}>Shortcuts</h3>
            <ul className="space-y-2.5 text-xs">
              <li><Link href="/about-us" className={navLinkStyle}>About Us</Link></li>
              <li><Link href="/careers" className={navLinkStyle}>Job Vacancies</Link></li>
              <li><Link href="/sustainability" className={navLinkStyle}>Go Sustainable</Link></li>
              <li><Link href="/insights" className={navLinkStyle}>Trends & Cases</Link></li>
              <li><Link href="/investors/financial-reports" className={navLinkStyle}>Financial Reports</Link></li>
              <li><Link href="/products" className={navLinkStyle}>Products</Link></li>
            </ul>
          </div>

          {/* Subscribe Section - refined button style with subtle animation */}
          <div>
            <h3 className={sectionTitleStyle}>Stay Updated</h3>
            <p className="mb-5 text-xs text-gray-400">
              Subscribe to our newsletter for the latest press releases, reports, and company information.
            </p>
            <Link href="/subscribe" passHref>
              <button
                className="bg-amber-300 bg-opacity-80 text-gray-800 hover:bg-amber-200 font-medium py-2 px-5 rounded transition-all duration-300 ease-in-out w-full sm:w-auto focus:outline-none focus:ring-1 focus:ring-amber-300 cursor-pointer text-xs group flex items-center justify-center"
              >
                Subscribe Now
                <ArrowRight size={14} className="ml-2 transform transition-all duration-300 group-hover:translate-x-1" />
              </button>
            </Link>
          </div>

          {/* Social Media Section - Modernized icons, updated links */}
          <div>
            <h3 className={sectionTitleStyle}>Follow Us</h3>
            <div className="flex space-x-5">
              <a href="https://www.linkedin.com/company/exonia-holding-sa-romania/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className={socialIconStyle}>
                <Linkedin size={18} className="hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="https://www.facebook.com/Exonia.ro" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className={socialIconStyle}>
                <Facebook size={18} className="hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="https://www.instagram.com/exonia_romania/" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className={socialIconStyle}>
                <Instagram size={18} className="hover:scale-110 transition-transform duration-300" />
              </a>
              <a href="https://www.youtube.com/@BIOEXONIA" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className={socialIconStyle}>
                <Youtube size={18} className="hover:scale-110 transition-transform duration-300" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Divider - more subtle */}
      <div className="container mx-auto px-6 lg:px-8">
        <hr className="border-gray-700 border-opacity-50" />
      </div>

      {/* Bottom Bar - refined layout and styling */}
      <div className="container mx-auto px-6 lg:px-8 py-6">
        <div className="flex flex-col md:flex-row justify-between items-center text-xs">
          {/* Logo */}
          <div className="mb-4 md:mb-0 opacity-80 hover:opacity-100 transition-opacity duration-300">
            <Link href="/" aria-label="Company Homepage">
              <Logo /> {/* Your company logo component */}
            </Link>
          </div>

          {/* Copyright and Legal Links - combined and refined */}
          <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-4 mb-4 md:mb-0 text-gray-500 text-xs">
            <span>© {new Date().getFullYear()} Exonia Holdings. All Rights Reserved.</span>
            <span className="hidden sm:inline text-gray-600">|</span>
            <Link href="/legal/terms-of-use" className={baseLinkStyle}>Terms of Use</Link>
            <Link href="/legal/privacy-notice" className={baseLinkStyle}>Privacy Notice</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;