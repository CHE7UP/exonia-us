// LatestNews.tsx
'use client';

import React from 'react';

// Define the types for the props of NewsCard and news data
interface NewsCardProps {
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

interface NewsItem {
  id: number;
  imageSrc: string;
  imageAlt: string;
  title: string;
  description: string;
  buttonText: string;
  buttonLink: string;
}

// Placeholder data for the news cards
// In a real application, this data would likely come from a CMS or API
const newsData: NewsItem[] = [
  {
    id: 1,
    imageSrc: '/ex-1.webp', // Updated placeholder bg
    imageAlt: 'Exonia Annual and Sustainability Report 2024',
    title: "Exonia's Annual and Sustainability Report 2024",
    description:
      "You can now read and download our Annual and Sustainability Report for 2024. This year's report is particularly special - it marks our full compliance with the EU's Corporate Sustainability Reporting Directive (CSRD) and the new European Sustainability Reporting Standards (ESRS). You can also read highlights from our Sustainability report on this link.",
    buttonText: 'Read the full report',
    buttonLink: '#', // Replace with actual link
  },
  {
    id: 2,
    imageSrc: '/ex-2.webp', // Updated placeholder bg
    imageAlt: 'CDP A-List Ranking',
    title: 'Exonia receives A-list ranking from CDP for our sustainability work',
    description:
      'Exonia has been recognized by the international organization CDP as one of the companies at the forefront globally in sustainability efforts and transparency in sustainability reporting.',
    buttonText: 'Learn more',
    buttonLink: '#', // Replace with actual link
  },
  {
    id: 3,
    imageSrc: '/ex-3.webp', // Updated placeholder bg
    imageAlt: 'Environmental Product Declaration',
    title: 'Make sustainable choices',
    description:
      'Transparency is becoming increasingly important. At Exonia, we are leading the way by continually publishing EPD (Environmental Product Declaration) documents for our range of medical papers, revealing their climate impact. Discover how this commitment to openness can guide you to make more informed sustainability choices.',
    buttonText: 'Download our EPDs',
    buttonLink: '#', // Replace with actual link
  },
];

// Individual News Card Component
const NewsCard: React.FC<NewsCardProps> = ({
  imageSrc,
  imageAlt,
  title,
  description,
  buttonText,
  buttonLink,
}) => {
  return (
    // Card container: lighter grey background (bg-gray-50)
    <div className="flex flex-col bg-gray-50 rounded-lg shadow-lg overflow-hidden h-full">
      {/* Card Image */}
      <img
        className="w-full h-48 object-cover"
        src={imageSrc}
        alt={imageAlt}
        onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.onerror = null; // prevent infinite loop if fallback also fails
            target.src = `https://placehold.co/600x400/CCCCCC/4A5568?text=Image+Not+Found`;
          }}
      />
      {/* Card Content */}
      <div className="p-6 flex flex-col flex-grow">
        <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
        <p className="text-gray-600 text-sm flex-grow mb-4">{description}</p>
        {/* Card Button: Sleek and minimal design */}
        <a
          href={buttonLink}
          className="mt-auto inline-block text-center bg-transparent text-gray-700 font-medium py-3 px-6 rounded-md 
                     border border-gray-300
                     hover:bg-[#FFD400] hover:text-gray-900 hover:border-[#FFD400] 
                     active:bg-[#e6c300] active:text-gray-900 active:border-[#e6c300] 
                     focus:outline-none focus:ring-2 focus:ring-[#FFD400] focus:ring-opacity-50
                     transition-colors duration-150 ease-in-out"
        >
          {buttonText}
        </a>
      </div>
    </div>
  );
};

// Main Latest News Component
const LatestNews: React.FC = () => {
  return (
    <section className="bg-white py-12 md:py-20">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10 md:mb-16">
          OUR LATEST NEWS
        </h2>
        {/* Grid for News Cards */}
        {/* On mobile: 1 column. On tablet (md) and larger: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {newsData.map((item) => (
            <NewsCard
              key={item.id}
              imageSrc={item.imageSrc}
              imageAlt={item.imageAlt}
              title={item.title}
              description={item.description}
              buttonText={item.buttonText}
              buttonLink={item.buttonLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestNews;
