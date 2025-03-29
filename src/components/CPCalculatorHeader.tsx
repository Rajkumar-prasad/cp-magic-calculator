
import React from 'react';

const CPCalculatorHeader = () => {
  return (
    <div className="w-full bg-pogo-red text-white py-6 mb-6 rounded-md shadow-md">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Pokémon GO CP Calculator</h1>
        <p className="text-white/80">
          Calculate the Combat Power of your Pokémon based on Level and IVs
        </p>
      </div>
    </div>
  );
};

export default CPCalculatorHeader;
