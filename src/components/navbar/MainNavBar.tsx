
// 'use client'

// import React, { useState, useRef, useEffect } from 'react';
// import Link from 'next/link';
// import Logo from '../Logo'; // Assuming you have this component
// import MegaMenu from './MegaMenu'; // Assuming you have this component

// // --- Data & Types (Ensure these are defined or imported) ---
// interface SubmenuItem {
//   name: string;
//   href: string;
// }
// export interface SubmenuColumn {
//   title: string;
//   items: SubmenuItem[];
// }

// // Example data (replace with your actual data structure if different)
// const industrySubmenuData: SubmenuColumn[] = [
//     // ... (paste the data structure from step 1 in previous answer here) ...
//     {
//         title: 'Food & Beverages',
//         items: [
//           { name: 'Dry food', href: '/industries/dry-food' },
//           { name: 'Processed food', href: '/industries/processed-food' },
//           { name: 'Fruit & vegetables', href: '/industries/fruit-vegetables' },
//           { name: 'Fast food & take away', href: '/industries/fast-food-take-away' },
//           { name: 'Sweets', href: '/industries/sweets' },
//           { name: 'Beverages & Liquids', href: '/industries/beverages-liquids' },
//           { name: 'Transport & Display', href: '/industries/transport-display' },
//         ],
//       },
//       {
//         title: 'Consumer & Luxury',
//         items: [
//           { name: 'Fashion & apparel', href: '/industries/fashion-apparel' },
//           { name: 'E-commerce', href: '/industries/ecommerce' },
//           { name: 'Cosmetics', href: '/industries/cosmetics' },
//           { name: 'Chocolate & Confectionary', href: '/industries/chocolate-confectionary' },
//           { name: 'Wine & Spirits', href: '/industries/wine-spirits' },
//           { name: 'Carrier bags', href: '/industries/carrier-bags' },
//           { name: 'Graphical & print', href: '/industries/graphical-print' },
//           { name: 'Household & gardening', href: '/industries/household-gardening' },
//           { name: 'Consumer electronics', href: '/industries/consumer-electronics' },
//         ],
//       },
//       {
//         title: 'Industrial',
//         items: [
//           { name: 'Industrial bags', href: '/industries/industrial-bags' },
//           { name: 'Heavy Duty packaging', href: '/industries/heavy-duty-packaging' },
//         ],
//       },
//       {
//         title: 'Medical & Hygiene',
//         items: [
//           { name: 'Medical devices', href: '/industries/medical-devices' },
//           { name: 'Hospital', href: '/industries/hospital' },
//           { name: 'Hygiene & personal care', href: '/industries/hygiene-personal-care' },
//           { name: 'Pharmaceuticals', href: '/industries/pharmaceuticals' },
//           { name: 'Medical Packaging Blog', href: '/blog/medical-packaging' }, // Example link
//         ],
//       },
// ];

// const productsSubmenuData: SubmenuColumn[] = [ // Example for a different NavItem
//     {
//         title: 'Category A',
//         items: [
//             { name: 'Product 1', href: '/products/product-1'},
//             { name: 'Product 2', href: '/products/product-2'},
//             { name: 'Product 3', href: '/products/product-3'},
//             { name: 'Product 4', href: '/products/product-4'},
//             { name: 'Product 5', href: '/products/product-5'},
//             { name: 'Product 6', href: '/products/product-6'},
//             { name: 'Product 7', href: '/products/product-7'},
//         ],
//     },
//     {
//         title: 'Category B',
//         items: [
//             { name: 'Product 4', href: '/products/product-4'},
//             { name: 'Product 5', href: '/products/product-5'},
//             { name: 'Product 6', href: '/products/product-6'}, 
//             { name: 'Product 7', href: '/products/product-7'},
//             { name: 'Product 8', href: '/products/product-8'},
//             { name: 'Product 9', href: '/products/product-9'},
//             { name: 'Product 10', href: '/products/product-10'},   
//         ],
//     },
//     {
//         title: 'Category C',
//         items: [  
//             { name: 'Product 7', href: '/products/product-7'},
//             { name: 'Product 8', href: '/products/product-8'},
//             { name: 'Product 9', href: '/products/product-9'},
//             { name: 'Product 10', href: '/products/product-10'},
//             { name: 'Product 1', href: '/products/product-1'},  
//             { name: 'Product 2', href: '/products/product-2'},
//             { name: 'Product 3', href: '/products/product-3'},
//         ]
//     },
//         {
//         title: 'Category d',
//         items: [  
//             { name: 'Product 7', href: '/products/product-7'},
//             { name: 'Product 8', href: '/products/product-8'},
//             { name: 'Product 9', href: '/products/product-9'},
//             { name: 'Product 10', href: '/products/product-10'},
//             { name: 'Product 1', href: '/products/product-1'},  
//             { name: 'Product 2', href: '/products/product-2'},
//             { name: 'Product 3', href: '/products/product-3'},
//         ]
//     },
//     // ... other columns
// ]

// const servicesSubmenuData: SubmenuColumn[] = [
//   {
//     title: 'Sustainable Design & Consulting',
//     items: [
//       { name: 'Bespoke Eco-Package Design', href: '/services/bespoke-eco-design' },
//       { name: 'Sustainable Material Expertise', href: '/services/sustainable-material-expertise' },
//       { name: 'Packaging Lifecycle Analysis (LCA)', href: '/services/lifecycle-analysis' },
//       { name: 'Circular Economy Strategy Development', href: '/services/circular-economy-strategy' },
//       { name: 'Eco-Branding & Graphic Design', href: '/services/eco-branding-packaging' },
//       { name: 'Packaging Sustainability Audits', href: '/services/packaging-sustainability-audits' },
//     ],
//   },
//   {
//     title: 'EU Production & Quality Excellence',
//     items: [
//       { name: 'State-of-the-Art EU Production', href: '/services/eu-production' },
//       { name: 'Ethical & Sustainable Sourcing', href: '/services/ethical-sourcing-production' },
//       { name: 'EU-Based Prototyping & Sampling', href: '/services/eu-prototyping-sampling' },
//       { name: 'Rigorous Quality Assurance & Testing', href: '/services/quality-assurance' },
//       { name: 'Custom Tooling & Mould Development', href: '/services/custom-tooling' },
//       { name: 'Advanced Print & Finishing Options', href: '/services/print-finishing-services' },
//     ],
//   },
//   {
//     title: 'Global Logistics & Market Access',
//     items: [
//       { name: 'EU & North America Logistics Solutions', href: '/services/logistics-eu-na' },
//       { name: 'EU & NA Market Compliance Support', href: '/services/market-compliance-support' }, // Covers regulations like PPWR, FDA etc.
//       { name: 'Optimized Supply Chain Management', href: '/services/supply-chain-management' },
//       { name: 'Strategic EU Warehousing & Inventory', href: '/services/warehousing-inventory-eu' },
//       { name: 'Low-Carbon Shipping Solutions', href: '/services/low-carbon-shipping' },
//       { name: 'Dedicated After-Sales & Optimization Support', href: '/services/after-sales-optimization' },
//     ],
//   },
//   {
//     title: 'Sustainability & Compliance',
//     items: [
//       { name: 'Sustainable Packaging Solutions', href: '/services/sustainable-packaging' },
//       { name: 'Compliance with EU Regulations', href: '/services/eu-regulations-compliance' },
//       { name: 'Sustainable Material Sourcing', href: '/services/sustainable-material-sourcing' },
//       { name: 'Eco-Friendly Packaging Solutions', href: '/services/eco-friendly-packaging' },
//       { name: 'Sustainability Consulting Services', href: '/services/sustainability-consulting' },
//       { name: 'Packaging Waste Management Solutions', href: '/services/packaging-waste-management' },
//     ],
//   },
// ];

// // --- NavItem Component (Modified) ---
// interface NavItemProps {
//   href: string;
//   children: React.ReactNode;
//   submenu?: SubmenuColumn[];
//   onActivate?: (submenuData: SubmenuColumn[]) => void;
//   onDeactivate?: () => void;
//   isSubmenuActive?: boolean; // To control aria-expanded
// }

// const NavItem: React.FC<NavItemProps> = ({
//   href,
//   children,
//   submenu,
//   onActivate,
//   onDeactivate,
//   isSubmenuActive,
// }) => {
//   const [isLinkHovered, setIsLinkHovered] = useState(false); // For underline effect

//   const handleMouseEnter = () => {
//     setIsLinkHovered(true);
//     if (submenu && onActivate) {
//       onActivate(submenu);
//     }
//   };

//   const handleMouseLeave = () => {
//     setIsLinkHovered(false);
//     // Deactivation (starting the hide timer) is always called if onDeactivate is provided,
//     // regardless of whether there's a submenu. This allows MainNavBar to manage hiding
//     // a menu if the mouse leaves a submenu-navitem and enters a non-submenu-navitem.
//     if (onDeactivate) {
//       onDeactivate();
//     }
//   };

//   return (
//     <div
//       className="py-1" // Defines the hoverable area
//       onMouseEnter={handleMouseEnter}
//       onMouseLeave={handleMouseLeave}
//     >
//       <Link
//         href={href}
//         className="relative group text-gray-900 font-medium tracking-wide text-lg transition-colors duration-200 hover:text-yellow-500 block"
//         aria-haspopup={!!submenu}
//         aria-expanded={!!isSubmenuActive} // Controlled by MainNavBar
//       >
//         <span className="inline-block">{children}</span>
//         <span
//           className={`
//             absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-500
//             transition-transform duration-300 origin-left
//             ${isLinkHovered ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
//           `}
//         ></span>
//       </Link>
//     </div>
//   );
// };

// // --- MainNavBar Component (Modified) ---
// const MainNavBar: React.FC = () => {
//   const [activeSubmenuData, setActiveSubmenuData] = useState<SubmenuColumn[] | null>(null);
//   const [isMegaMenuVisible, setIsMegaMenuVisible] = useState<boolean>(false);
//   const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
//   const HIDE_DELAY = 200; // milliseconds, adjust as needed

//   const clearHideTimeout = () => {
//     if (hoverTimeoutRef.current) {
//       clearTimeout(hoverTimeoutRef.current);
//       hoverTimeoutRef.current = null;
//     }
//   };

//   const handleNavItemActivate = (submenuData: SubmenuColumn[]) => {
//     clearHideTimeout();
//     setActiveSubmenuData(submenuData);
//     setIsMegaMenuVisible(true);
//   };

//   const scheduleHideMegaMenu = () => {
//     clearHideTimeout();
//     hoverTimeoutRef.current = setTimeout(() => {
//       setIsMegaMenuVisible(false);
//       // Consider delaying activeSubmenuData = null if MegaMenu has a fade-out animation
//       // e.g., setTimeout(() => setActiveSubmenuData(null), HIDE_DELAY + animation_duration);
//     }, HIDE_DELAY);
//   };

//   const handleMegaMenuMouseEnter = () => {
//     clearHideTimeout(); // Mouse entered the MegaMenu, so keep it open
//   };

//   const handleMegaMenuMouseLeave = () => {
//     scheduleHideMegaMenu(); // Mouse left the MegaMenu, schedule to hide
//   };

//   // Cleanup timeout on component unmount
//   useEffect(() => {
//     return () => {
//       clearHideTimeout();
//     };
//   }, []);

//   return (
//     <nav className="relative z-[100] bg-white shadow-md py-4 px-4 font-[Inter]">
//       <div className="container mx-auto flex items-center justify-between">
//         <div className="flex-shrink-0">
//           <Link href="/">
//             <Logo />
//           </Link>
//         </div>

//         <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex items-center space-x-8 text-gray-800 font-medium text-lg">
//           <NavItem
//             href="/products"
//             submenu={productsSubmenuData} // Use the correct submenu data
//             onActivate={handleNavItemActivate}
//             onDeactivate={scheduleHideMegaMenu}
//             isSubmenuActive={isMegaMenuVisible && activeSubmenuData === productsSubmenuData}
//           >
//             PRODUCTS
//           </NavItem>
//           <NavItem
//             href="/industries"
//             submenu={industrySubmenuData}
//             onActivate={handleNavItemActivate}
//             onDeactivate={scheduleHideMegaMenu}
//             isSubmenuActive={isMegaMenuVisible && activeSubmenuData === industrySubmenuData}
//           >
//             INDUSTRIES
//           </NavItem>
//           <NavItem
//             href="/services"
//             submenu={servicesSubmenuData}
//             onActivate={handleNavItemActivate}
//             onDeactivate={scheduleHideMegaMenu} // Still call onDeactivate to hide any open menu
//             isSubmenuActive={isMegaMenuVisible && activeSubmenuData === servicesSubmenuData}
//           >
//             SERVICES
//           </NavItem>
//           <NavItem
//             href="/sustainability"
//             onDeactivate={scheduleHideMegaMenu}
//             isSubmenuActive={false}
//           >
//             SUSTAINABILITY
//           </NavItem>
//         </div>

//         <div className="lg:hidden">
//           {/* Mobile menu button placeholder */}
//           <button type="button" className="text-gray-900">MENU</button>
//         </div>
//       </div>

//       {/* MegaMenu is rendered here, positioned relative to this <nav> */}
//       {/* It will only attempt to render if activeSubmenuData is not null */}
//       {activeSubmenuData && (
//         <MegaMenu
//           columns={activeSubmenuData}
//           isVisible={isMegaMenuVisible}
//           onMouseEnter={handleMegaMenuMouseEnter}
//           onMouseLeave={handleMegaMenuMouseLeave}
//         />
//       )}
//     </nav>
//   );
// };

// export default MainNavBar;



'use client'
'use client'

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../Logo'; // Assuming you have this component
import MegaMenu from './MegaMenu'; // Assuming you have this component

// --- Data & Types (Ensure these are defined or imported) ---
interface SubmenuItem {
  name: string;
  href: string;
}
export interface SubmenuColumn {
  title: string; // Title can be optional for some mobile layouts
  items: SubmenuItem[];
}

// --- Paste your existing submenu data here ---
const industrySubmenuData: SubmenuColumn[] = [
    {
        title: 'Food & Beverages',
        items: [
          { name: 'Dry food', href: '/industries/dry-food' },
          { name: 'Processed food', href: '/industries/processed-food' },
          { name: 'Fruit & vegetables', href: '/industries/fruit-vegetables' },
          { name: 'Fast food & take away', href: '/industries/fast-food-take-away' },
          { name: 'Sweets', href: '/industries/sweets' },
          { name: 'Beverages & Liquids', href: '/industries/beverages-liquids' },
          { name: 'Transport & Display', href: '/industries/transport-display' },
        ],
      },
      {
        title: 'Consumer & Luxury',
        items: [
          { name: 'Fashion & apparel', href: '/industries/fashion-apparel' },
          { name: 'E-commerce', href: '/industries/ecommerce' },
          { name: 'Cosmetics', href: '/industries/cosmetics' },
          { name: 'Chocolate & Confectionary', href: '/industries/chocolate-confectionary' },
          { name: 'Wine & Spirits', href: '/industries/wine-spirits' },
          { name: 'Carrier bags', href: '/industries/carrier-bags' },
          { name: 'Graphical & print', href: '/industries/graphical-print' },
          { name: 'Household & gardening', href: '/industries/household-gardening' },
          { name: 'Consumer electronics', href: '/industries/consumer-electronics' },
        ],
      },
      {
        title: 'Industrial',
        items: [
          { name: 'Industrial bags', href: '/industries/industrial-bags' },
          { name: 'Heavy Duty packaging', href: '/industries/heavy-duty-packaging' },
        ],
      },
      {
        title: 'Medical & Hygiene',
        items: [
          { name: 'Medical devices', href: '/industries/medical-devices' },
          { name: 'Hospital', href: '/industries/hospital' },
          { name: 'Hygiene & personal care', href: '/industries/hygiene-personal-care' },
          { name: 'Pharmaceuticals', href: '/industries/pharmaceuticals' },
          { name: 'Medical Packaging Blog', href: '/blog/medical-packaging' },
        ],
      },
];

const productsSubmenuData: SubmenuColumn[] = [
    {
        title: 'Category A',
        items: [
            { name: 'Product 1', href: '/products/product-1'},
            { name: 'Product 2', href: '/products/product-2'},
            { name: 'Product 3', href: '/products/product-3'},
            { name: 'Product 4', href: '/products/product-4'},
            { name: 'Product 5', href: '/products/product-5'},
            { name: 'Product 6', href: '/products/product-6'},
            { name: 'Product 7', href: '/products/product-7'},
        ],
    },
    {
        title: 'Category B',
        items: [
            { name: 'Product 4B', href: '/products/product-4b'}, // Ensure unique names if possible for keys
            { name: 'Product 5B', href: '/products/product-5b'},
            { name: 'Product 6B', href: '/products/product-6b'},
            { name: 'Product 7B', href: '/products/product-7b'},
            { name: 'Product 8', href: '/products/product-8'},
            { name: 'Product 9', href: '/products/product-9'},
            { name: 'Product 10', href: '/products/product-10'},
        ],
    },
    {
        title: 'Category C',
        items: [
            { name: 'Product 7C', href: '/products/product-7c'},
            { name: 'Product 8C', href: '/products/product-8c'},
            { name: 'Product 9C', href: '/products/product-9c'},
            { name: 'Product 10C', href: '/products/product-10c'},
            { name: 'Product 1C', href: '/products/product-1c'},
            { name: 'Product 2C', href: '/products/product-2c'},
            { name: 'Product 3C', href: '/products/product-3c'},
        ]
    },
    {
        title: 'Category D', // Changed to D for clarity
        items: [
            { name: 'Product 7D', href: '/products/product-7d'},
            { name: 'Product 8D', href: '/products/product-8d'},
            { name: 'Product 9D', href: '/products/product-9d'},
            { name: 'Product 10D', href: '/products/product-10d'},
            { name: 'Product 1D', href: '/products/product-1d'},
            { name: 'Product 2D', href: '/products/product-2d'},
            { name: 'Product 3D', href: '/products/product-3d'},
        ]
    },
];

const servicesSubmenuData: SubmenuColumn[] = [
  {
    title: 'Sustainable Design & Consulting',
    items: [
      { name: 'Bespoke Eco-Package Design', href: '/services/bespoke-eco-design' },
      { name: 'Sustainable Material Expertise', href: '/services/sustainable-material-expertise' },
      { name: 'Packaging Lifecycle Analysis (LCA)', href: '/services/lifecycle-analysis' },
      { name: 'Circular Economy Strategy Development', href: '/services/circular-economy-strategy' },
      { name: 'Eco-Branding & Graphic Design', href: '/services/eco-branding-packaging' },
      { name: 'Packaging Sustainability Audits', href: '/services/packaging-sustainability-audits' },
    ],
  },
  {
    title: 'EU Production & Quality Excellence',
    items: [
      { name: 'State-of-the-Art EU Production', href: '/services/eu-production' },
      { name: 'Ethical & Sustainable Sourcing', href: '/services/ethical-sourcing-production' },
      { name: 'EU-Based Prototyping & Sampling', href: '/services/eu-prototyping-sampling' },
      { name: 'Rigorous Quality Assurance & Testing', href: '/services/quality-assurance' },
      { name: 'Custom Tooling & Mould Development', href: '/services/custom-tooling' },
      { name: 'Advanced Print & Finishing Options', href: '/services/print-finishing-services' },
    ],
  },
  {
    title: 'Global Logistics & Market Access',
    items: [
      { name: 'EU & North America Logistics Solutions', href: '/services/logistics-eu-na' },
      { name: 'EU & NA Market Compliance Support', href: '/services/market-compliance-support' },
      { name: 'Optimized Supply Chain Management', href: '/services/supply-chain-management' },
      { name: 'Strategic EU Warehousing & Inventory', href: '/services/warehousing-inventory-eu' },
      { name: 'Low-Carbon Shipping Solutions', href: '/services/low-carbon-shipping' },
      { name: 'Dedicated After-Sales & Optimization Support', href: '/services/after-sales-optimization' },
    ],
  },
  {
    title: 'Sustainability & Compliance',
    items: [
      { name: 'Sustainable Packaging Solutions', href: '/services/sustainable-packaging' },
      { name: 'Compliance with EU Regulations', href: '/services/eu-regulations-compliance' },
      { name: 'Sustainable Material Sourcing', href: '/services/sustainable-material-sourcing' },
      { name: 'Eco-Friendly Packaging Solutions', href: '/services/eco-friendly-packaging' },
      { name: 'Sustainability Consulting Services', href: '/services/sustainability-consulting' },
      { name: 'Packaging Waste Management Solutions', href: '/services/packaging-waste-management' },
    ],
  },
];
// --- End of submenu data ---


// --- NavItem Component (Unchanged from your original) ---
interface NavItemProps {
  href: string;
  children: React.ReactNode;
  submenu?: SubmenuColumn[];
  onActivate?: (submenuData: SubmenuColumn[]) => void;
  onDeactivate?: () => void;
  isSubmenuActive?: boolean;
}

const NavItem: React.FC<NavItemProps> = ({
  href,
  children,
  submenu,
  onActivate,
  onDeactivate,
  isSubmenuActive,
}) => {
  const [isLinkHovered, setIsLinkHovered] = useState(false);

  const handleMouseEnter = () => {
    setIsLinkHovered(true);
    if (submenu && onActivate) {
      onActivate(submenu);
    }
  };

  const handleMouseLeave = () => {
    setIsLinkHovered(false);
    if (onDeactivate) {
      onDeactivate();
    }
  };

  return (
    <div
      className="py-1"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={href}
        className="relative group text-gray-900 font-medium tracking-wide text-lg transition-colors duration-200 hover:text-yellow-500 block"
        aria-haspopup={!!submenu}
        aria-expanded={!!isSubmenuActive}
      >
        <span className="inline-block">{children}</span>
        <span
          className={`
            absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-500
            transition-transform duration-300 origin-left
            ${isLinkHovered ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
          `}
        ></span>
      </Link>
    </div>
  );
};


// --- BurgerButton Component (New) ---
interface BurgerButtonProps {
  isOpen: boolean;
  onClick: () => void;
  className?: string;
}

const BurgerButton: React.FC<BurgerButtonProps> = ({ isOpen, onClick, className = '' }) => (
  <button
    onClick={onClick}
    className={`p-2 rounded-md text-gray-700 hover:text-yellow-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-yellow-500 z-[150] ${className}`}
    aria-label={isOpen ? "Close main menu" : "Open main menu"}
    aria-expanded={isOpen}
    aria-controls="mobile-menu-panel" // Ensure the mobile panel has this ID
  >
    <div className="space-y-1.5"> {/* Adjusted spacing for a tighter look */}
      <span
        className={`block w-7 h-0.5 bg-current transform transition duration-300 ease-in-out
          ${isOpen ? "rotate-45 translate-y-[7px]" : ""}`} // Adjusted translate-y
      ></span>
      <span
        className={`block w-7 h-0.5 bg-current transition duration-300 ease-in-out
          ${isOpen ? "opacity-0" : ""}`}
      ></span>
      <span
        className={`block w-7 h-0.5 bg-current transform transition duration-300 ease-in-out
          ${isOpen ? "-rotate-45 -translate-y-[7px]" : ""}`} // Adjusted translate-y
      ></span>
    </div>
  </button>
);


// --- MobileNavItem Component (New) ---
interface MobileNavItemProps {
  href: string;
  children: React.ReactNode;
  submenu?: SubmenuColumn[];
  onLinkClick?: () => void; // To close mobile menu on navigation
}

const MobileNavItem: React.FC<MobileNavItemProps> = ({ href, children, submenu, onLinkClick }) => {
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);
  const idSuffix = children?.toString().toLowerCase().replace(/\s+/g, '-') || Math.random().toString(36).substring(7);

  const handleToggleSubmenu = (e: React.MouseEvent) => {
    // This function is for the button or the Link if it has a submenu
    e.preventDefault(); // Prevent navigation if it's a submenu toggle
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  const handleDirectLinkClick = () => {
    // For direct links (no submenu) or items within a submenu
    if (onLinkClick) {
      onLinkClick();
    }
  };

  return (
    <div className="border-b border-gray-200 last:border-b-0">
      <div className="flex justify-between items-center">
        <Link
          href={href}
          onClick={submenu ? handleToggleSubmenu : handleDirectLinkClick}
          className={`block py-4 px-4 text-base font-medium text-gray-700 hover:bg-gray-100 flex-grow ${submenu ? 'cursor-pointer' : ''}`}
          aria-current={!submenu && typeof window !== 'undefined' && window.location.pathname === href ? 'page' : undefined}
        >
          {children}
        </Link>
        {submenu && (
          <button
            onClick={handleToggleSubmenu}
            className="p-4 focus:outline-none text-gray-500 hover:text-yellow-500"
            aria-expanded={isSubmenuOpen}
            aria-controls={`mobile-submenu-${idSuffix}`}
            title={isSubmenuOpen ? "Collapse submenu" : "Expand submenu"}
          >
            <svg
              className={`w-5 h-5 transform transition-transform duration-200 ${
                isSubmenuOpen ? 'rotate-180' : 'rotate-0'
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
            </svg>
          </button>
        )}
      </div>
      {submenu && isSubmenuOpen && (
        <div
          id={`mobile-submenu-${idSuffix}`}
          className="bg-gray-50 transition-all duration-300 ease-in-out overflow-hidden"
        // Max height transition can be added here if desired for smoother accordion
        // style={{ maxHeight: isSubmenuOpen ? `${submenu.reduce((acc, col) => acc + col.items.length * 40 + (col.title ? 40 : 0), 0)}px` : '0px' }}
        >
          {submenu.map((column, colIndex) => (
            <div key={column.title || `col-${colIndex}`} className="pt-2 pb-1 pl-4"> {/* Indent submenu columns */}
              {column.title && (
                <h4 className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  {column.title}
                </h4>
              )}
              <ul>
                {column.items.map((item, itemIndex) => (
                  <li key={item.name || `item-${itemIndex}`}>
                    <Link
                      href={item.href}
                      onClick={handleDirectLinkClick} // All submenu items navigate and close menu
                      className="block py-2.5 px-4 text-gray-600 hover:bg-gray-200 hover:text-gray-800 rounded-md text-sm"
                      aria-current={typeof window !== 'undefined' && window.location.pathname === item.href ? 'page' : undefined}
                    >
                      {item.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};


// --- MainNavBar Component (Modified for Mobile Menu) ---
const MainNavBar: React.FC = () => {
  const [activeSubmenuData, setActiveSubmenuData] = useState<SubmenuColumn[] | null>(null);
  const [isMegaMenuVisible, setIsMegaMenuVisible] = useState<boolean>(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const HIDE_DELAY = 200;

  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const navRef = useRef<HTMLElement>(null); // Ref for the nav element

  const clearHideTimeout = () => {
    if (hoverTimeoutRef.current) {
      clearTimeout(hoverTimeoutRef.current);
      hoverTimeoutRef.current = null;
    }
  };

  const handleNavItemActivate = (submenuData: SubmenuColumn[]) => {
    clearHideTimeout();
    setActiveSubmenuData(submenuData);
    setIsMegaMenuVisible(true);
  };

  const scheduleHideMegaMenu = () => {
    clearHideTimeout();
    hoverTimeoutRef.current = setTimeout(() => {
      setIsMegaMenuVisible(false);
      // Optionally delay hiding data if there's a fade-out for MegaMenu
      // setTimeout(() => setActiveSubmenuData(null), HIDE_DELAY + 150);
    }, HIDE_DELAY);
  };

  const handleMegaMenuMouseEnter = () => {
    clearHideTimeout();
  };

  const handleMegaMenuMouseLeave = () => {
    scheduleHideMegaMenu();
  };

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden'; // Prevent scrolling of background content
      if (isMegaMenuVisible) setIsMegaMenuVisible(false); // Close mega menu if mobile opens
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset'; // Cleanup on unmount
    };
  }, [isMobileMenuOpen, isMegaMenuVisible]);

  useEffect(() => {
    return () => { // Cleanup timeout on component unmount
      clearHideTimeout();
    };
  }, []);

  // Calculate navbar height for offsetting the mobile menu
  const [navHeight, setNavHeight] = useState(0);
  useEffect(() => {
    if (navRef.current) {
      setNavHeight(navRef.current.offsetHeight);
    }
  }, []); // Runs once on mount, or if navRef content changes height (though less likely for a static nav)


  return (
    <nav ref={navRef} className="relative z-[100] bg-white shadow-md py-3 px-4 sm:px-6 lg:px-8 font-[Inter]">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link href="/" onClick={isMobileMenuOpen ? closeMobileMenu : undefined}>
            {/* Ensure Logo component is imported */}
            <Logo variant="dark"  />
          </Link>
        </div>

        {/* Desktop Navigation (centered) */}
        <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex items-center space-x-8">
          <NavItem
            href="/products"
            submenu={productsSubmenuData}
            onActivate={handleNavItemActivate}
            onDeactivate={scheduleHideMegaMenu}
            isSubmenuActive={isMegaMenuVisible && activeSubmenuData === productsSubmenuData}
          >
            PRODUCTS
          </NavItem>
          <NavItem
            href="/industries"
            submenu={industrySubmenuData}
            onActivate={handleNavItemActivate}
            onDeactivate={scheduleHideMegaMenu}
            isSubmenuActive={isMegaMenuVisible && activeSubmenuData === industrySubmenuData}
          >
            INDUSTRIES
          </NavItem>
          <NavItem
            href="/services"
            submenu={servicesSubmenuData}
            onActivate={handleNavItemActivate}
            onDeactivate={scheduleHideMegaMenu}
            isSubmenuActive={isMegaMenuVisible && activeSubmenuData === servicesSubmenuData}
          >
            SERVICES
          </NavItem>
          <NavItem
            href="/sustainability"
            onDeactivate={scheduleHideMegaMenu}
            isSubmenuActive={false} // This item does not open a submenu itself
          >
            SUSTAINABILITY
          </NavItem>
        </div>

        {/* Burger Button for Mobile */}
        <div className="lg:hidden flex items-center cursor-pointer">
          <BurgerButton isOpen={isMobileMenuOpen} onClick={toggleMobileMenu} />
        </div>

        {/* Optional: Right-aligned desktop items (e.g., Contact button) */}

      </div>

      {/* MegaMenu for Desktop - ensure it doesn't show if mobile menu is open */}
      {activeSubmenuData && isMegaMenuVisible && !isMobileMenuOpen && (
        <MegaMenu
          columns={activeSubmenuData}
          isVisible={isMegaMenuVisible} // isMegaMenuVisible already implies activeSubmenuData is not null
          onMouseEnter={handleMegaMenuMouseEnter}
          onMouseLeave={handleMegaMenuMouseLeave}
        />
      )}

      {/* Mobile Menu Panel */}
      {/* Using a transition for the panel itself */}
      <div
        id="mobile-menu-panel"
        className={`lg:hidden fixed inset-x-0 bottom-0 bg-white shadow-xl overflow-y-auto transition-transform duration-300 ease-in-out z-[140]
                    ${isMobileMenuOpen ? 'translate-y-0' : 'translate-y-full'}`}
        style={{ top: `${navHeight}px` }} // Start below the navbar
        aria-hidden={!isMobileMenuOpen}
        role="dialog" // More appropriate for a full-screen overlay menu
        aria-modal="true"
      >
        <div className="container mx-auto py-4 px-0"> {/* px-0 to allow MobileNavItem to control its padding */}
            <MobileNavItem href="/products" submenu={productsSubmenuData} onLinkClick={closeMobileMenu}>
                PRODUCTS
            </MobileNavItem>
            <MobileNavItem href="/industries" submenu={industrySubmenuData} onLinkClick={closeMobileMenu}>
                INDUSTRIES
            </MobileNavItem>
            <MobileNavItem href="/services" submenu={servicesSubmenuData} onLinkClick={closeMobileMenu}>
                SERVICES
            </MobileNavItem>
            <MobileNavItem href="/sustainability" onLinkClick={closeMobileMenu}>
                SUSTAINABILITY
            </MobileNavItem>
            {/* Add other top-level links for mobile here, e.g., Contact */}
            <MobileNavItem href="/contact" onLinkClick={closeMobileMenu}>
                CONTACT
            </MobileNavItem>
            {/* You might want to add other links like Login, etc. here for mobile */}
        </div>
      </div>
      {/* Optional: Overlay for when mobile menu is open */}
      {isMobileMenuOpen && (
          <div
            className="lg:hidden fixed inset-0 bg-black/30 z-[130]"
            onClick={closeMobileMenu}
            aria-hidden="true"
          ></div>
      )}
    </nav>
  );
};

export default MainNavBar;

// --- Dummy Components (replace with your actual implementations) ---
// const Logo: React.FC = () => <div className="text-2xl font-bold text-yellow-600">YourLogo</div>;
// const MegaMenu: React.FC<any> = ({ columns, isVisible, onMouseEnter, onMouseLeave }) => {
//   if (!isVisible || !columns) return null;
//   return (
//     <div
//       onMouseEnter={onMouseEnter}
//       onMouseLeave={onMouseLeave}
//       className="absolute top-full left-0 w-full bg-white shadow-lg p-8 border-t border-gray-200"
//     >
//       <div className="container mx-auto grid grid-cols-4 gap-8">
//         {columns.map((col: SubmenuColumn) => (
//           <div key={col.title}>
//             <h3 className="font-semibold text-gray-800 mb-3">{col.title}</h3>
//             <ul>
//               {col.items.map((item: SubmenuItem) => (
//                 <li key={item.name} className="mb-1.5">
//                   <Link href={item.href} className="text-gray-600 hover:text-yellow-500 text-sm">
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