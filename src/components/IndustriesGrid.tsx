"use client";

import React from 'react';
import Link from 'next/link';
import { Utensils, Factory, ShoppingBag, Stethoscope } from 'lucide-react';

const sectors = [
  {
    title: 'Food & Beverages',
    icon: Utensils,
    href: '/solutions/food-beverage',
  },
  {
    title: 'Industrial',
    icon: Factory,
    href: '/solutions/industrial',
  },
  {
    title: 'Consumer & Luxury',
    icon: ShoppingBag,
    href: '/solutions/consumer-luxury',
  },
  {
    title: 'Medical & Hygiene',
    icon: Stethoscope,
    href: '/solutions/medical-hygiene',
  },
];

const SolutionsBySector = () => (
  <section className="relative h-[440px] md:h-[520px] w-full overflow-hidden">
    {/* Background image & overlay */}
    <div className="absolute inset-0">
      <img
        src="/images/solutions-bg.jpg" // replace with your asset
        alt="Packaging background"
        className="h-full w-full object-cover object-center"
      />
      <div className="absolute inset-0 bg-black/50" />
    </div>

    {/* Content */}
    <div className="relative z-10 flex flex-col items-center justify-center h-full px-4">
      <h2 className="mb-10 text-center text-2xl md:text-3xl lg:text-4xl font-extrabold tracking-wide text-white uppercase">
        Solutions by Sector
      </h2>

      <div className="flex flex-wrap justify-center gap-6 max-w-4xl">
        {sectors.map(({ title, icon: Icon, href }) => (
          <Link key={title} href={href} className="group">
            <button
              className="flex items-center gap-4 rounded-full bg-white/90 backdrop-blur px-6 py-3 shadow-md transition-all duration-300 hover:bg-[var(--primary)] hover:shadow-lg"
            >
              <Icon
                className="h-8 w-8 text-[var(--secondary)] transition-transform duration-300 group-hover:scale-110 group-hover:text-[var(--secondary-dark)]"
                strokeWidth={2.2}
              />
              <span className="whitespace-nowrap text-sm md:text-base font-semibold uppercase text-[var(--secondary)] group-hover:text-[var(--secondary-dark)]">
                {title}
              </span>
            </button>
          </Link>
        ))}
      </div>
    </div>
  </section>
);

export default SolutionsBySector;
