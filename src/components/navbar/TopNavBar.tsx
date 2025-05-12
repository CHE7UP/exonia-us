// TopNavBar.tsx
// TopNavBar.tsx
import React from 'react';
import Link from 'next/link';
import { Search, ExternalLink} from 'lucide-react';
import LanguageSelector from './LanguageSelector';

const TopNavBar: React.FC = () => {

  return (
    <nav className="hidden lg:flex h-10 bg-gray-50 text-gray-700 justify-end items-center px-6 shadow-sm z-[1001]">
      <div className="flex items-center space-x-6">
        <Link 
          href="/trends-cases" 
          className="text-sm font-medium hover:text-gray-900 transition-all relative group px-2 py-1"
        >
          TRENDS & CASES
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent group-hover:bg-yellow-500 transform origin-left transition-all duration-200 scale-x-0 group-hover:scale-x-100"></span>
        </Link>
        <Link 
          href="/about" 
          className="text-sm font-medium hover:text-gray-900 transition-all relative group px-2 py-1"
        >
          ABOUT US
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent group-hover:bg-yellow-500 transform origin-left transition-all duration-200 scale-x-0 group-hover:scale-x-100"></span>
        </Link>
        <Link 
          href="/investors" 
          className="text-sm font-medium hover:text-gray-900 transition-all relative group px-2 py-1"
        >
          INVESTORS
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent group-hover:bg-yellow-500 transform origin-left transition-all duration-200 scale-x-0 group-hover:scale-x-100"></span>
        </Link>
        <Link 
          href="/press-news" 
          className="text-sm font-medium hover:text-gray-900 transition-all relative group px-2 py-1"
        >
          PRESS & NEWS
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent group-hover:bg-yellow-500 transform origin-left transition-all duration-200 scale-x-0 group-hover:scale-x-100"></span>
        </Link>
        <Link 
          href="/career" 
          className="text-sm font-medium hover:text-gray-900 transition-all relative group px-2 py-1"
        >
          CAREER
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent group-hover:bg-yellow-500 transform origin-left transition-all duration-200 scale-x-0 group-hover:scale-x-100"></span>
        </Link>
        <Link 
          href="/contact" 
          className="text-sm font-medium hover:text-gray-900 transition-all relative group px-2 py-1"
        >
          CONTACT
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent group-hover:bg-yellow-500 transform origin-left transition-all duration-200 scale-x-0 group-hover:scale-x-100"></span>
        </Link>
        <Link 
          href="/forestry" 
          className="text-sm font-medium hover:text-gray-900 transition-all relative group px-2 py-1 flex items-center gap-1" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          FORESTRY
          <ExternalLink size={14} className="inline-block" />
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent group-hover:bg-yellow-500 transform origin-left transition-all duration-200 scale-x-0 group-hover:scale-x-100"></span>
        </Link>
        
        {/* Language selector */}
        <LanguageSelector />
        
        {/* Separator before login */}
        <div className="h-4 w-px bg-white/80 mx-3 self-center"></div>
        
        <Link 
          href="/login" 
          className="text-sm font-medium hover:text-gray-900 transition-all relative group px-1 py-1"
        >
          LOG IN
          <span className="absolute inset-x-0 bottom-0 h-0.5 bg-transparent group-hover:bg-yellow-500 transform origin-left transition-all duration-200 scale-x-0 group-hover:scale-x-100"></span>
        </Link>
        
        {/* Separator before search */} 
        <div className="h-4 w-px bg-white/80 mx-3 self-center"></div>
        
        <button 
          className="flex items-center justify-center hover:text-yellow-500 transition-all p-1.5 rounded-full hover:bg-primary" 
          aria-label="Search"
        >
          <Search size={18} strokeWidth={2} />
        </button>
      </div>
    </nav>
  );
};

export default TopNavBar;