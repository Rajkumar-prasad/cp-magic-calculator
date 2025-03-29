
import React from 'react';
import { Calculator, Star, Zap } from 'lucide-react';

const CPCalculatorHeader = () => {
  return (
    <div className="w-full bg-gradient-to-r from-pogo-red to-pogo-blue text-white py-8 mb-6 rounded-md shadow-md relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0djZoNnYtNmgtNnptMC0xMHY2aDZ2LTZoLTZ6bTEwIDEwdjZoNnYtNmgtNnptLTEwLTIwdjZoNnYtNmgtNnptMTAgMHY2aDZ2LTZoLTZ6bTEwIDEwdjZoNnYtNmgtNnptLTIwLTEwdjZoNnYtNmgtNnptMTAgMHY2aDZ2LTZoLTZ6bTEwIDEwdjZoNnYtNmgtNnptLTQwLTIwdjZoNnYtNmgtNnptMTAgMHY2aDZ2LTZoLTZ6bTEwIDB2Nmg2di02aC02em0xMCAwdjZoNnYtNmgtNnptMTAgMHY2aDZ2LTZoLTZ6bS01MCAxMHY2aDZ2LTZoLTZ6bTEwIDB2Nmg2di02aC02em0xMCAwdjZoNnYtNmgtNnptMjAgMHY2aDZ2LTZoLTZ6bTEwIDB2Nmg2di02aC02em0tMzAgMTB2Nmg2di02aC02em0yMCAwdjZoNnYtNmgtNnptMTAgMHY2aDZ2LTZoLTZ6bS01MCAxMHY2aDZ2LTZoLTZ6bTEwIDB2Nmg2di02aC02em0xMCAwdjZoNnYtNmgtNnptMjAgMHY2aDZ2LTZoLTZ6bTEwIDB2Nmg2di02aC02em0tNDAgMTB2Nmg2di02aC02em0zMCAwdjZoNnYtNmgtNnptMTAgMHY2aDZ2LTZoLTZ6bS0yMCAxMHY2aDZ2LTZoLTZ6TTEwIDM0djZoNnYtNmgtNnoiLz48L2c+PC9nPjwvc3ZnPg==')]"></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="flex justify-center mb-4">
          <div className="bg-white/20 p-3 rounded-full">
            <Calculator className="h-10 w-10 text-white drop-shadow-lg" />
          </div>
        </div>
        
        <h1 className="text-3xl md:text-5xl font-bold mb-4 leading-tight">
          Combat Power Calculator
        </h1>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-lg md:text-xl text-white/90 leading-relaxed mb-6">
            The most accurate and comprehensive tool for calculating the Combat Power of your Pokémon
            based on Level, Individual Values (IVs), and base stats.
          </p>
          
          <div className="flex flex-wrap justify-center gap-5 mt-4">
            <Feature icon={<Star />} title="Precise CP Calculation">
              Get exact CP values for any Pokémon at any level
            </Feature>
            
            <Feature icon={<Zap />} title="Optimize Your Team">
              Make strategic decisions about which Pokémon to power up
            </Feature>
          </div>
        </div>
      </div>
    </div>
  );
};

const Feature = ({ icon, title, children }: { icon: React.ReactNode; title: string; children: React.ReactNode }) => (
  <div className="flex items-start gap-3 bg-white/10 backdrop-blur-sm p-3 rounded-lg">
    <div className="shrink-0 mt-1">
      {icon}
    </div>
    <div className="text-left">
      <h3 className="font-semibold">{title}</h3>
      <p className="text-white/80 text-sm">{children}</p>
    </div>
  </div>
);

export default CPCalculatorHeader;
