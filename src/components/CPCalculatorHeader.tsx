
import React from 'react';

const CPCalculatorHeader = () => {
  return (
    <div className="w-full bg-gradient-to-r from-pogo-red to-pogo-blue text-white py-6 mb-6 rounded-md shadow-md">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold mb-2">Combat Power Calculator</h1>
        <p className="text-white/80 max-w-3xl mx-auto">
          The most accurate and comprehensive tool for calculating the Combat Power of your Pokémon
          based on Level, Individual Values (IVs), and base stats. Perfect for trainers who want to optimize their team!
        </p>
      </div>
    </div>
  );
};

export default CPCalculatorHeader;
