import React from 'react';
import Marquee from 'react-fast-marquee';

const clients = [
  { name: 'HERVIS SPORTS', logo: 'https://exonia.ro/wp-content/uploads/logo_hervis_sports.webp' },
  { name: 'PROCTER & GAMBLE', logo: 'https://exonia.ro/wp-content/uploads/logo_procter_and_gamble.webp' },
  { name: 'COCA-COLA', logo: 'https://exonia.ro/wp-content/uploads/logo_coca_cola.webp' },
  { name: 'MCDONALD\'S', logo: 'https://exonia.ro/wp-content/uploads/logo_mcdonalds.webp' },
  { name: 'EMAG', logo: 'https://exonia.ro/wp-content/uploads/logo_e-mag.webp' },
  { name: 'MADO', logo: 'https://exonia.ro/wp-content/uploads/logo_mado.webp' },
  { name: 'DR. MAX', logo: 'https://exonia.ro/wp-content/uploads/logo_dr_max.webp' },
  { name: 'EMAG', logo: 'https://exonia.ro/wp-content/uploads/logo_e-mag.webp' },
];

const ClientsSlider = () => {
  return (
    <section className="relative py-16 bg-gray-50">
      {/* Subtle yellow accent line at the top */}
      <div className="absolute top-0 left-0 right-0 h-1 bg-yellow-400"></div>
      
      <div className="relative z-10 text-center mb-8 px-4">
        <h2 className="text-2xl lg:text-3xl font-bold text-secondary mb-3 uppercase tracking-wider">
          <span className="border-b-2 border-yellow-400 pb-1">TRUSTED BY GLOBAL BRANDS</span>
        </h2>
        <p className="text-base lg:text-lg text-secondary-light uppercase tracking-wide">
          SERVING SUSTAINABLE SOLUTIONS TO NORTH AMERICAN AND EU MARKETS SINCE 2001
        </p>
      </div>
      
      <div className="relative z-10">
        <Marquee pauseOnHover gradient={false} speed={40}>
          <div className="flex gap-16 items-center px-4">
            {clients.map((client, idx) => (
              <div
                key={idx}
                className="relative group flex items-center justify-center h-24 w-48 min-w-[160px] px-6"
              >
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className="max-h-16 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-500 hover:scale-105"
                />
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-[2px] w-0 bg-yellow-400 group-hover:w-1/2 transition-all duration-300"></div>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
};

export default ClientsSlider;