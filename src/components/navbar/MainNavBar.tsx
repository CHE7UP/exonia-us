'use client'

import React, { useState, useRef, useEffect } from 'react';
import Link from 'next/link';
import Logo from '../Logo'; // Assuming you have this component
import MegaMenu from './MegaMenu'; // Assuming you have this component
import Image from 'next/image'; // Assuming you're using Next.js for images

// --- Data & Types (Ensure these are defined or imported) ---
interface SubmenuItem {
  name: string;
  href: string;
  img?: string; // Optional image property
}
export interface SubmenuColumn {
  title: string; // Title can be optional for some mobile layouts
  items: SubmenuItem[];
  img?: string; // Optional image property
}

// --- Paste your existing submenu data here ---
const industrySubmenuData: SubmenuColumn[] = [
    {
        title: 'Food & Beverages',
        items: [
          { name: 'Dry food', href: '/industries/dry-food', img: '/images/industries/dry-food.png' },
          { name: 'Processed food', href: '/industries/processed-food', img: '/images/industries/processed-food.png' },
          { name: 'Fruit & vegetables', href: '/industries/fruit-vegetables', img: '/images/industries/fruit-vegetables.png' },
          { name: 'Fast food & take away', href: '/industries/fast-food-take-away', img: '/images/industries/fast-food-take-away.png' },
          { name: 'Sweets', href: '/industries/sweets', img: '/images/industries/sweets.png' },
          { name: 'Beverages & Liquids', href: '/industries/beverages-liquids', img: '/images/industries/beverages-liquids.png' },
          { name: 'Transport & Display', href: '/industries/transport-display', img: '/images/industries/transport-display.png' },
        ],
      },
      {
        title: 'Consumer & Luxury',
        items: [
          { name: 'Fashion & apparel', href: '/industries/fashion-apparel', img: '/images/industries/fashion-apparel.png' },
          { name: 'E-commerce', href: '/industries/ecommerce',  img: '/images/industries/ecommerce.png' },
          { name: 'Cosmetics', href: '/industries/cosmetics', img: '/images/industries/cosmetics.png' },
          { name: 'Chocolate & Confectionary', href: '/industries/chocolate-confectionary', img: '/images/industries/chocolate-confectionary.png' },
          { name: 'Wine & Spirits', href: '/industries/wine-spirits', img: '/images/industries/wine-spirits.png' },
          { name: 'Carrier bags', href: '/industries/carrier-bags', img: '/images/industries/carrier-bags.png' },
          { name: 'Graphical & print', href: '/industries/graphical-print', img: '/images/industries/graphical-print.png' },
          { name: 'Household & gardening', href: '/industries/household-gardening', img: '/images/industries/household-gardening.png' },
          { name: 'Consumer electronics', href: '/industries/consumer-electronics',   img: '/images/industries/consumer-electronics.png' },
        ],
      },
      {
        title: 'Industrial',
        img: '/images/industries/industrial.png',
        items: [
          { name: 'Industrial bags', href: '/industries/industrial-bags', img: '/images/industries/industrial-bags.png' },
          { name: 'Heavy Duty packaging', href: '/industries/heavy-duty-packaging', img: '/images/industries/heavy-duty-packaging.png' },
        ],
      },
      {
        title: 'Medical & Hygiene',
        items: [
          { name: 'Medical devices', href: '/industries/medical-devices',   img: '/images/industries/medical-devices.png' },
          { name: 'Hospital', href: '/industries/hospital', img: '/images/industries/hospital.png' },
          { name: 'Hygiene & personal care', href: '/industries/hygiene-personal-care', img: '/images/industries/hygiene-personal-care.png' },
          { name: 'Pharmaceuticals', href: '/industries/pharmaceuticals', img: '/images/industries/pharmaceuticals.png' },
          { name: 'Medical Packaging Blog', href: '/blog/medical-packaging',  img: '/images/industries/medical-packaging.png' },
        ],
      },
];

const productsSubmenuData: SubmenuColumn[] = [
          {
        title: 'Universal Stock Products',
        img: '/images/products/universal-stock-products.png',
        items: [
            { name: 'White Kraft Wrapping Paper', href: '/products/product-7e', img: '/images/products/white-kraft-wrapping-paper.png' },
            { name: 'Nature Kraft Wrapping Paper', href: '/products/product-8e', img: '/images/products/nature-kraft-wrapping-paper.png' },
            { name: 'Placemats Duro Kraft Natur', href: '/products/product-9e', img: '/images/products/placemats-duro-kraft-natur.png' },
            { name: 'Placemats White Kraft Paper', href: '/products/product-10e', img: '/images/products/placemats-white-kraft-paper.png' },
            { name: 'Natur Kraft with Flat Handles', href: '/products/product-1e', img: '/images/products/natur-kraft-with-flat-handles.png' },
            { name: 'White Kraft with Flat Handles', href: '/products/product-2e', img: '/images/products/white-kraft-with-flat-handles.png' },
        ]
    },
    {
        title: 'Paper Bags With Handle',
        items: [
            { name: 'Kraft Paper Carrier Bags', href: '/products/product-1', img: '/images/products/kraft-paper-carrier-bags.png' },
            { name: 'Shopping Bags for textile stores', href: '/products/product-2', img: '/images/products/shopping-bags-textile-stores.png' },
            { name: 'Paper Bag with handle for restaurants delivery', href: '/products/product-3', img: '/images/products/paper-bag-handle-restaurants-delivery.png' },
            { name: 'Shopping Paper Bag for pharmacies', href: '/products/product-4', img: '/images/products/shopping-paper-bag-pharmacies.png' },
            { name: 'Ventilated Bag for fresh products', href: '/products/product-5',   img: '/images/products/ventilated-bag-fresh-products.png' },
        ],
    },
    {
        title: 'Paper Bags Without Handle',
        img: '/images/products/paper-bags-without-handle.png',
        items: [
            { name: 'Fast food Paper Bags', href: '/products/product-4b', img: '/images/products/fast-food-paper-bags.png'}, // Ensure unique names if possible for keys
            { name: 'Small Paper Bags for pharmacy', href: '/products/product-5b', img: '/images/products/small-paper-bags-pharmacy.png' },
        ],
    },
    {
        title: 'Paper Sacks',
        img: '/images/products/paper-sacks.png',
        items: [
            { name: 'Paper Sacks with handles made of 2-5 layers of paper', href: '/products/product-7c', img: '/images/products/paper-sacks-2-5-layers.png' },
        ]
    },
    {
        title: 'Wrapping Paper', // Changed to D for clarity
        img: '/images/products/wrapping-paper.png',
        items: [
            { name: 'Wrapping paper sheets', href: '/products/product-7d', img: '/images/products/wrapping-paper-sheets.png' },
        ]
    },
    {
        title: 'Paper Corners',
        items: [
            { name: 'Paper corners for food products, pastries and confectionery', href: '/products/product-7e', img: '/images/products/paper-corners-food-products.png' },      
        ]
    },
];

const servicesSubmenuData: SubmenuColumn[] = [
  {
    title: 'Custom Sustainable Packaging Design & Prototyping',
    img: '/images/services/custom-sustainable-packaging.png',
    items: [
      { name: 'Digital mock-ups & on-demand samples', href: '/services/design-prototyping', img: '/images/services/digital-mockups.png' },
      { name: 'Material optimization analysis', href: '/services/material-optimization', img: '/images/services/material-optimization.png' },
      { name: 'User-testing feedback loops', href: '/services/user-testing', img: '/images/services/user-testing.png' },
    ],
  },
  {
    title: 'Private-Label & On-Demand Printing',
    img: '/images/services/private-label-on-demand.png',
    items: [
      { name: 'Full-color variable-data print', href: '/services/variable-printing', img: '/images/services/variable-printing.png' },
      { name: 'Eco-friendly inks & varnishes', href: '/services/eco-friendly-inks', img: '/images/services/eco-friendly-inks.png' },
    ],
  },
  {
    title: 'Subscription Replenishment & Inventory Management',
    img: '/images/services/subscription-replenishment.png',
    items: [
      { name: 'Scheduled shipment service', href: '/services/scheduled-shipments',  img: '/images/services/scheduled-shipments.png' },
      { name: 'Automated reorder triggers', href: '/services/reorder-triggers', img: '/images/services/reorder-triggers.png' },
      { name: 'Online portal & ESG metrics', href: '/services/portal-esg', img: '/images/services/portal-esg.png' },
    ],
  },
  {
    title: 'Sustainability Consulting & Certification Support',
    img: '/images/services/sustainability-consulting.png',
    items: [
      { name: 'Life-cycle assessments (LCA)', href: '/services/lca', img: '/images/services/lca.png' },
      { name: 'FSC/PEFC & compostability guidance', href: '/services/certification-guidance', img: '/images/services/certification-guidance.png' },
      { name: 'Custom eco-impact reporting', href: '/services/eco-reporting', img: '/images/services/eco-reporting.png' },
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
                <div>
                <Image 
                  src={column.img || '/images/default-placeholder.png'}
                  alt={column.title}
                  className="w-8 h-8 mb-2"
                  width={32}
                  height={32}
                />

                <h4 className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                  {column.title}
                </h4>
                </div>
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
                      {item.img && (
                        <Image
                          src={item.img}
                          alt={item.name}
                          className="w-6 h-6 mr-2 inline-block"
                          width={24}
                          height={24}
                        />
                      )}
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
