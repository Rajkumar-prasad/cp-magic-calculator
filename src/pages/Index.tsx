
import React from 'react';
import CPCalculator from "@/components/CPCalculator";
import CPCalculatorHeader from "@/components/CPCalculatorHeader";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-100 py-8 px-4">
      <div className="container mx-auto max-w-4xl">
        <CPCalculatorHeader />
        <CPCalculator />
        
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>
            Pokémon GO CP Calculator uses the official formula to calculate Combat Power.
          </p>
          <p className="mt-2">
            Pokémon GO is a trademark of Niantic, Inc. 
            Pokémon and Pokémon character names are trademarks of Nintendo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
