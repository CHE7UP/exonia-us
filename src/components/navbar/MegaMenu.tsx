import React from 'react';
import Link from 'next/link';
import { SubmenuColumn } from './MainNavBar'; // Ensure this type is correctly imported

interface MegaMenuProps {
  columns: SubmenuColumn[];
  isVisible: boolean;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const MegaMenu: React.FC<MegaMenuProps> = ({ columns, isVisible, onMouseEnter, onMouseLeave }) => {
  const megaMenuContainerClasses = `
    absolute top-full left-0 w-full
    bg-white shadow-xl border-t border-gray-200 // Subtle top border for separation
    transform transition-all duration-300 ease-out // Smooth animation for opacity and position
    ${isVisible ? 'opacity-100 translate-y-0 pointer-events-auto' : 'opacity-0 -translate-y-2 pointer-events-none'} // Slide-down and fade-in effect
    z-[101]
  `;

  // Using grid with a gap for spacing. This gap acts as the visual separation.
  const contentWrapperClasses = `
    container mx-auto px-4 sm:px-6 lg:px-8 // Standard container padding, adjust to match site
    py-8 md:py-10 // Vertical padding for the content area
    grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 lg:gap-x-8 // Responsive columns with gap
  `;

  return (
    <div
      className={megaMenuContainerClasses}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
      role="region"
      aria-label="Submenu Navigation"
    >
      <div className={contentWrapperClasses}>
        {columns.map((column, index) => (
          <div
            key={column.title + index}
            className="text-sm" // Each column block
          >
            <h3 className="text-base text-gray-900 font-semibold mb-5 pb-2.5 border-b border-gray-300">
              {column.title}
            </h3>
            <ul className="space-y-1.5"> {/* Space between links */}
              {column.items.map((item) => (
                <li key={item.name}>
                  <Link
                    href={item.href}
                    className="group flex items-center text-gray-700 hover:text-yellow-700 hover:bg-yellow-50 transition-all duration-200 ease-in-out py-2 px-3 rounded-lg" // Enhanced hover with padding and group for icon
                  >
                    <span className="flex-grow">{item.name}</span>
                    {/* Arrow icon appears and slides on hover */}
                    <span className="ml-2 transform transition-all duration-200 ease-in-out opacity-0 group-hover:opacity-100 group-hover:translate-x-1">
                      &rarr;
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MegaMenu;

// // components/MegaMenu.tsx
// import React from 'react';
// import Link from 'next/link';
// import { SubmenuColumn } from './MainNavBar'; // Ensure this type is correctly imported or defined

// interface MegaMenuProps {
//   columns: SubmenuColumn[];
//   isVisible: boolean;
//   onMouseEnter?: () => void;
//   onMouseLeave?: () => void;
// }

// const MegaMenu: React.FC<MegaMenuProps> = ({ columns, isVisible, onMouseEnter, onMouseLeave }) => {
//   const megaMenuContainerClasses = `
//     absolute top-full left-0 w-full // Positions below nav, spans full width of <nav>
//     bg-white shadow-xl border-t border-gray-200 // Full-width background, shadow, and top border
//     transition-opacity duration-300 ease-in-out
//     ${isVisible ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}
//     z-[101] // Stacking context
//   `;

//   // Inner container to align columns with the page content (e.g., Tailwind's container)
//   // and provide padding for the content itself.
//   const contentWrapperClasses = `
//     container mx-auto px-6 md:px-22 // Aligns content with MainNavBar's container (adjust px as needed)
//     py-8 md:py-10 // Vertical padding for the content area
//     flex flex-row flex-wrap justify-start // Lays out columns horizontally, change justify- if needed
//     gap-x-8 gap-y-6 // Spacing between columns
//   `;

//   return (
//     <div
//       className={megaMenuContainerClasses}
//       onMouseEnter={onMouseEnter}
//       onMouseLeave={onMouseLeave}
//       role="region" // More semantic for a larger section
//       aria-label="Submenu Navigation"
//     >
//       <div className={contentWrapperClasses}>
//         {columns.map((column, index) => (
//           <div
//             key={column.title + index} // Add index for more robust key if titles aren't unique across all possible menus
//             className="text-sm w-full sm:w-auto flex-shrink-0 md:flex-1 md:min-w-[200px] lg:min-w-[220px]" // Responsive column width
//           >
//             <h3 className="text-base text-gray-800 font-semibold mb-4 pb-2 border-b border-gray-300">
//               {column.title}
//             </h3>
//             <ul className="space-y-2.5">
//               {column.items.map((item) => (
//                 <li key={item.name}>
//                   <Link
//                     href={item.href}
//                     className="block text-gray-600 hover:text-yellow-600 transition-colors duration-150 py-0.5"
//                   >
//                     {item.name}
//                   </Link>
//                 </li>
//               ))}
//             </ul>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default MegaMenu;