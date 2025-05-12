import React from 'react';
import Marquee from 'react-fast-marquee';

const clients = [
  { name: 'Hervis Sports', logo: 'https://exonia.ro/wp-content/uploads/logo_hervis_sports.webp' },
  { name: 'Procter & Gamble', logo: 'https://exonia.ro/wp-content/uploads/logo_procter_and_gamble.webp' },
  { name: 'Coca-Cola', logo: 'https://exonia.ro/wp-content/uploads/logo_coca_cola.webp' },
  { name: 'McDonald’s', logo: 'https://exonia.ro/wp-content/uploads/logo_mcdonalds.webp' },
  { name: 'eMAG', logo: 'https://exonia.ro/wp-content/uploads/logo_e-mag.webp' },
  { name: 'Mado', logo: 'https://exonia.ro/wp-content/uploads/logo_mado.webp' },
  { name: 'Dr. Max', logo: 'https://exonia.ro/wp-content/uploads/logo_dr_max.webp' },
  { name: 'eMAG (Duplicate)', logo: 'https://exonia.ro/wp-content/uploads/logo_e-mag.webp' },
];

const ClientsSlider = () => {
  return (
    <section className="bg-white py-10">
      <div className="text-center mb-4 px-4">
        <h2 className="text-xl lg:text-2xl font-semibold text-secondary mb-2">
          Trusted by Global Brands
        </h2>
        <p className="text-sm lg:text-base text-secondary-light">
          Serving sustainable solutions to North American and EU markets since 2001.
        </p>
      </div>
      <Marquee pauseOnHover gradient={false} speed={50}>
        <div className="flex gap-12 items-center">
          {clients.map((client, idx) => (
            <div
              key={idx}
              className="flex items-center justify-center h-20 w-40 min-w-[120px] px-4"
            >
              <img
                src={client.logo}
                alt={`${client.name} logo`}
                className="max-h-16 max-w-full object-contain grayscale hover:grayscale-0 transition-all duration-300"
              />
            </div>
          ))}
        </div>
      </Marquee>
    </section>
  );
};

export default ClientsSlider;
