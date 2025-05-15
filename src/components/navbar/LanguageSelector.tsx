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
    }, 100);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

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
      className="relative z-500 border-l border-white"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <button
        id="language-menu-button"
        type="button"
        className={`text-xs font-medium transition-all flex items-center gap-1 px-3 py-1 rounded-full ${
          isOpen
            ? 'bg-gray-200 text-gray-900'
            : 'text-gray-700 hover:bg-white-1 hover:text-gray-900'
        }`}
        aria-expanded="true"
        aria-haspopup="true"
        aria-controls="language-options-menu"
      >
        {currentLanguage.toUpperCase()}
        <ChevronDown
          size={14}
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>

      {isOpen && (
        <div
          id="language-options-menu"
          className="absolute -right-2 mt-2 w-36 rounded-md shadow-lg bg-white ring-1 ring-gray-300 ring-opacity-5 z-10 overflow-hidden animate-fadeIn"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div role="menu" aria-orientation="vertical" aria-labelledby="language-menu-button">
            {languages.map((language) => (
              <div key={language.code} role="menuitem">
                <Link
                  href={`/${language.code}`}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 transition-colors"
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