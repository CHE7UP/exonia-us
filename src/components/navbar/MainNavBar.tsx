// // components/MainNavBar.tsx

// 'use client'

// import React, { useState } from 'react';
// import Link from 'next/link';
// import Logo from '../Logo';
// import MegaMenu from './MegaMenu';

// // --- Data & Types (Keep or import from separate file) ---
// interface SubmenuItem {
//   name: string;
//   href: string;
// }
// export interface SubmenuColumn {
//   title: string;
//   items: SubmenuItem[];
// }

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

// // --- Components ---

// const MainNavBar: React.FC = () => {
//   return (
//     // **** MODIFICATION ****
//     // Add position: relative and a z-index to the main nav
//     <nav className="relative z-[100] bg-white shadow-md py-4 px-22 font-[Inter] border border-red-200">
//       {/* Container still centers the direct content (Logo, NavItems Hoster) */}
//       <div className="container mx-auto flex items-center justify-between">
//         {/* Logo */}
//         <div className="flex-shrink-0">
//           <Link href="/">
//             <Logo />
//           </Link>
//         </div>

//         {/* Centered navigation menu */}
//         {/* This div itself isn't relative, NavItems are inside */}
//         <div className="absolute border border-blue-200 left-1/2 transform -translate-x-1/2 hidden lg:flex items-center space-x-6 text-gray-800 font-medium text-lg">
//           <NavItem href="/products" submenu={industrySubmenuData}>PRODUCTS</NavItem>
//           <NavItem href="/industries" submenu={industrySubmenuData}>
//             INDUSTRIES
//           </NavItem>
//           <NavItem href="/services">SERVICES</NavItem>
//           <NavItem href="/sustainability">SUSTAINABILITY</NavItem>
//         </div>

//         {/* Placeholder */}
//         <div className="lg:hidden">
//            {/* Mobile menu button */}
//         </div>
//       </div>
//       {/* MegaMenu will be rendered by NavItem but positioned relative to this <nav> */}
//     </nav>
//   );
// };

// // --- Updated NavItem ---
// interface NavItemProps {
//     href: string;
//     children: React.ReactNode;
//     submenu?: SubmenuColumn[]; // Optional submenu prop
// }

// const NavItem: React.FC<NavItemProps> = ({ href, children, submenu }) => {
//   const [isHovered, setIsHovered] = useState(false);

//   // **** MODIFICATION ****
//   // This wrapper div still handles hover, but doesn't need explicit positioning
//   // unless required for other reasons. `relative` is fine here too, the menu
//   // should still look for the higher `relative` nav. Let's keep it simple.
//   return (
//     <div
//       className="py-1" // Add padding here if needed, removed from Link span
//       onMouseEnter={() => submenu && setIsHovered(true)}
//       onMouseLeave={() => submenu && setIsHovered(false)}
//     >
//       <Link
//         href={href}
//         className="relative group text-gray-900 font-medium tracking-wide text-lg transition-colors duration-200 hover:text-yellow-500 block"
//         aria-haspopup={!!submenu}
//         aria-expanded={isHovered}
//       >
//         {/* Removed py-1 from here */}
//         <span className="inline-block">{children}</span>
//         {/* Underline hover effect */}
//         <span className={`
//           absolute -bottom-1 left-0 w-full h-0.5 bg-yellow-500
//           transition-transform duration-300 origin-left
//           ${ isHovered ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'}
//         `}></span>
//       </Link>

//       {/* Render MegaMenu if submenu data exists */}
//       {/* It will be positioned relative to the <nav> because it's the
//           nearest ancestor with position: relative */}
//       {submenu && (
//         <MegaMenu columns={submenu} isVisible={isHovered} />
//       )}
//     </div>
//   );
// };


// export default MainNavBar;


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
  title: string;
  items: SubmenuItem[];
}

// Example data (replace with your actual data structure if different)
const industrySubmenuData: SubmenuColumn[] = [
    // ... (paste the data structure from step 1 in previous answer here) ...
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
          { name: 'Medical Packaging Blog', href: '/blog/medical-packaging' }, // Example link
        ],
      },
];

const productsSubmenuData: SubmenuColumn[] = [ // Example for a different NavItem
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
            { name: 'Product 4', href: '/products/product-4'},
            { name: 'Product 5', href: '/products/product-5'},
            { name: 'Product 6', href: '/products/product-6'}, 
            { name: 'Product 7', href: '/products/product-7'},
            { name: 'Product 8', href: '/products/product-8'},
            { name: 'Product 9', href: '/products/product-9'},
            { name: 'Product 10', href: '/products/product-10'},   
        ],
    },
    {
        title: 'Category C',
        items: [  
            { name: 'Product 7', href: '/products/product-7'},
            { name: 'Product 8', href: '/products/product-8'},
            { name: 'Product 9', href: '/products/product-9'},
            { name: 'Product 10', href: '/products/product-10'},
            { name: 'Product 1', href: '/products/product-1'},  
            { name: 'Product 2', href: '/products/product-2'},
            { name: 'Product 3', href: '/products/product-3'},
        ]
    },
        {
        title: 'Category d',
        items: [  
            { name: 'Product 7', href: '/products/product-7'},
            { name: 'Product 8', href: '/products/product-8'},
            { name: 'Product 9', href: '/products/product-9'},
            { name: 'Product 10', href: '/products/product-10'},
            { name: 'Product 1', href: '/products/product-1'},  
            { name: 'Product 2', href: '/products/product-2'},
            { name: 'Product 3', href: '/products/product-3'},
        ]
    },
    // ... other columns
]

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
      { name: 'EU & NA Market Compliance Support', href: '/services/market-compliance-support' }, // Covers regulations like PPWR, FDA etc.
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

// --- NavItem Component (Modified) ---
interface NavItemProps {
  href: string;
  children: React.ReactNode;
  submenu?: SubmenuColumn[];
  onActivate?: (submenuData: SubmenuColumn[]) => void;
  onDeactivate?: () => void;
  isSubmenuActive?: boolean; // To control aria-expanded
}

const NavItem: React.FC<NavItemProps> = ({
  href,
  children,
  submenu,
  onActivate,
  onDeactivate,
  isSubmenuActive,
}) => {
  const [isLinkHovered, setIsLinkHovered] = useState(false); // For underline effect

  const handleMouseEnter = () => {
    setIsLinkHovered(true);
    if (submenu && onActivate) {
      onActivate(submenu);
    }
  };

  const handleMouseLeave = () => {
    setIsLinkHovered(false);
    // Deactivation (starting the hide timer) is always called if onDeactivate is provided,
    // regardless of whether there's a submenu. This allows MainNavBar to manage hiding
    // a menu if the mouse leaves a submenu-navitem and enters a non-submenu-navitem.
    if (onDeactivate) {
      onDeactivate();
    }
  };

  return (
    <div
      className="py-1" // Defines the hoverable area
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <Link
        href={href}
        className="relative group text-gray-900 font-medium tracking-wide text-lg transition-colors duration-200 hover:text-yellow-500 block"
        aria-haspopup={!!submenu}
        aria-expanded={!!isSubmenuActive} // Controlled by MainNavBar
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

// --- MainNavBar Component (Modified) ---
const MainNavBar: React.FC = () => {
  const [activeSubmenuData, setActiveSubmenuData] = useState<SubmenuColumn[] | null>(null);
  const [isMegaMenuVisible, setIsMegaMenuVisible] = useState<boolean>(false);
  const hoverTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const HIDE_DELAY = 200; // milliseconds, adjust as needed

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
      // Consider delaying activeSubmenuData = null if MegaMenu has a fade-out animation
      // e.g., setTimeout(() => setActiveSubmenuData(null), HIDE_DELAY + animation_duration);
    }, HIDE_DELAY);
  };

  const handleMegaMenuMouseEnter = () => {
    clearHideTimeout(); // Mouse entered the MegaMenu, so keep it open
  };

  const handleMegaMenuMouseLeave = () => {
    scheduleHideMegaMenu(); // Mouse left the MegaMenu, schedule to hide
  };

  // Cleanup timeout on component unmount
  useEffect(() => {
    return () => {
      clearHideTimeout();
    };
  }, []);

  return (
    <nav className="relative z-[100] bg-white shadow-md py-4 px-22 font-[Inter]">
      <div className="container mx-auto flex items-center justify-between">
        <div className="flex-shrink-0">
          <Link href="/">
            <Logo />
          </Link>
        </div>

        <div className="absolute left-1/2 transform -translate-x-1/2 hidden lg:flex items-center space-x-8 text-gray-800 font-medium text-lg">
          <NavItem
            href="/products"
            submenu={productsSubmenuData} // Use the correct submenu data
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
            onDeactivate={scheduleHideMegaMenu} // Still call onDeactivate to hide any open menu
            isSubmenuActive={isMegaMenuVisible && activeSubmenuData === servicesSubmenuData}
          >
            SERVICES
          </NavItem>
          <NavItem
            href="/sustainability"
            onDeactivate={scheduleHideMegaMenu}
            isSubmenuActive={false}
          >
            SUSTAINABILITY
          </NavItem>
        </div>

        <div className="lg:hidden">
          {/* Mobile menu button placeholder */}
          <button type="button" className="text-gray-900">MENU</button>
        </div>
      </div>

      {/* MegaMenu is rendered here, positioned relative to this <nav> */}
      {/* It will only attempt to render if activeSubmenuData is not null */}
      {activeSubmenuData && (
        <MegaMenu
          columns={activeSubmenuData}
          isVisible={isMegaMenuVisible}
          onMouseEnter={handleMegaMenuMouseEnter}
          onMouseLeave={handleMegaMenuMouseLeave}
        />
      )}
    </nav>
  );
};

export default MainNavBar;
