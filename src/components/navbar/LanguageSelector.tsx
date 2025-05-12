// LanguageSelector.tsx
'use client';

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';

interface LanguageOption {
  code: string;
  label: string;
}

interface LanguageSelectorProps {
  currentLanguage?: string;
}

const LanguageSelector: React.FC<LanguageSelectorProps> = ({ 
  currentLanguage = 'EN' 
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const languages: LanguageOption[] = [
    { code: 'en', label: 'English' },
    { code: 'es', label: 'Español' },
    { code: 'de', label: 'Deutsch' },
    { code: 'it', label: 'Italiano' },
    { code: 'fr', label: 'Français' },
  ];

  const handleMouseEnter = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
      timeoutRef.current = null;
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 100); // 500ms delay before closing
  };

  // Clear timeout on unmount
  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  // Close the dropdown on click outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="relative z-[2000]"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button 
        type="button"
        className={`text-sm font-medium transition-all flex items-center gap-1 px-3 py-1 rounded-full ${
          isOpen 
            ? 'bg-gray-200 hover:text-gray-900' 
            : 'hover:bg-gray-200 hover:text-gray-900'
        }`}
        aria-expanded={isOpen.toString()}
        aria-haspopup="true"
      >
        {currentLanguage} 
        <ChevronDown 
          size={14} 
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`} 
        />
      </button>
      
      {isOpen && (
        <div 
          className="absolute right-(-2) mt-2 w-32 rounded-md shadow-lg bg-white ring-1 ring-gray-300 ring-opacity-5 z-10 overflow-hidden
                     animate-fadeIn"
        >
          <div role="menu" aria-orientation="vertical">
            {languages.map((language) => (
              <div key={language.code} role="menuitem" onMouseEnter={handleMouseEnter}>
                <Link 
                  href={`/${language.code}`} 
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 transition-colors"
                >
                  {language.label}
                </Link>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default LanguageSelector;