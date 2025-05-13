'use client';

import React, { useState, useEffect } from 'react';

const Stats = () => {
  // Stats data for the packaging company
  const stats = React.useMemo(() => [
    {
      value: "3,000",
      description: "tons of packaging delivered across North America, EU",
    },
    {
      value: "40%",
      description: "lower carbon footprint than conventional packaging",
    },
    {
      value: "30%",
      description: "cost savings via optimized, personalized designs",
    },
    {
      value: "100%",
      description: "client satisfaction for durability, performance",
    },
  ], []);

  // State for animated numbers
  const [animatedValues, setAnimatedValues] = useState(stats.map(() => "0"));
  const [hasAnimated, setHasAnimated] = useState(false);

  useEffect(() => {
    // Function to determine if element is in viewport
    const isInViewport = (element: HTMLElement | null) => {
      if (!element) return false;
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    };

    // Animate numbers when component is in viewport
    const handleScroll = () => {
      const element = document.getElementById('stats-section');
      if (element && isInViewport(element) && !hasAnimated) {
        setHasAnimated(true);
        
        stats.forEach((stat, index) => {
          const value = stat.value.replace(/\D/g, '');
          const symbol = stat.value.replace(/[0-9.,]/g, ''); // Capture symbols like % ,
          const target = parseInt(value, 10);
          if (isNaN(target)) return; // Skip if not a valid number

          const duration = 2000; // Animation duration in ms
          const steps = 60; // Number of animation steps
          const increment = target / steps;
          let current = 0;
          
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              clearInterval(timer);
              setAnimatedValues(prev => {
                const newValues = [...prev];
                newValues[index] = stat.value; // Set to final string value with symbols
                return newValues;
              });
            } else {
              setAnimatedValues(prev => {
                const newValues = [...prev];
                // Format number with commas if original had them (simple check)
                const displayValue = Math.floor(current);
                const formattedValue = stat.value.includes(',') ? displayValue.toLocaleString() : displayValue.toString();
                newValues[index] = formattedValue + symbol;
                return newValues;
              });
            }
          }, duration / steps);
        });
      }
    };

    // Initial check and add scroll listener
    handleScroll();
    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      // Consider clearing intervals if component unmounts while animating
      // stats.forEach(() => {/* logic to clear existing intervals if needed */});
    };
  }, [hasAnimated, stats]);

  return (
    <div className="w-full bg-white py-12" id="stats-section">
      <div className="max-w-6xl mx-auto px-4">
        {/* Changed to grid for mobile, flex for medium and up */}
        <div className="grid grid-cols-2 md:flex md:flex-row">
          {stats.map((stat, index) => {
            // Define base classes for items
            const baseItemClasses = [
              "bg-gray-50", "flex", "flex-col", "items-center", "justify-center", "text-center",
              "p-4", "sm:p-6", "md:p-8", // Responsive padding: smaller on mobile
              "transition-all", "duration-200"
            ];

            const conditionalItemClasses = [...baseItemClasses];
            const mobileBorderThickness = "4"; // Corresponds to border-4 (4px)
            const borderColorClass = "border-white";

            // --- Mobile-first (2x2 Grid) styles ---
            // Borders for 2x2 grid (these are effectively the "separators")
            // Rounding for 2x2 grid
            if (index === 0) { // Top-left
              conditionalItemClasses.push("rounded-tl-lg", `border-r-${mobileBorderThickness}`, `border-b-${mobileBorderThickness}`, borderColorClass);
            } else if (index === 1) { // Top-right
              conditionalItemClasses.push("rounded-tr-lg", `border-b-${mobileBorderThickness}`, borderColorClass);
              // Item 0 provides the right border for the visual separation
            } else if (index === 2) { // Bottom-left
              conditionalItemClasses.push("rounded-bl-lg", `border-r-${mobileBorderThickness}`, borderColorClass);
              // Item 0 provides the bottom border for the visual separation
            } else if (index === 3) { // Bottom-right
              conditionalItemClasses.push("rounded-br-lg");
              // Item 1 provides bottom border, Item 2 provides right border
            }

            // --- Desktop (md and up - Flex Row) overrides and additions ---
            conditionalItemClasses.push("md:flex-1"); // Allow items to grow in a flex row
            
            // Override mobile borders for row layout
            conditionalItemClasses.push("md:border-b-0"); // No bottom border for items in a row
            if (index === stats.length - 1) {
              conditionalItemClasses.push("md:border-r-0"); // Last item has no right border
            } else {
              // Other items get a right border (separator)
              conditionalItemClasses.push(`md:border-r-${mobileBorderThickness}`, borderColorClass);
            }
            
            // Desktop rounding for row layout (overrides mobile corner-specific rounding)
            if (index === 0) { // First item in the row
              conditionalItemClasses.push("md:rounded-l-lg", "md:rounded-r-none");
            } else if (index === stats.length - 1) { // Last item in the row
              conditionalItemClasses.push("md:rounded-r-lg", "md:rounded-l-none");
            } else { // Middle items in the row
              conditionalItemClasses.push("md:rounded-none");
            }

            return (
              <div
                key={index}
                className={conditionalItemClasses.join(" ")}
              >
                <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-800 mb-2 relative"> {/* Smaller text on mobile */}
                  <span className="relative">
                    {animatedValues[index]}
                    <span className="absolute -bottom-1 left-0 w-full h-1 bg-yellow-400"></span>
                  </span>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 font-medium"> {/* Adjusted for sm breakpoint */}
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;