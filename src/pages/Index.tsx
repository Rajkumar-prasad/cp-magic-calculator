
import React from 'react';
import CPCalculator from "@/components/CPCalculator";
import CPCalculatorHeader from "@/components/CPCalculatorHeader";
import { CalendarClock, Calculator, Award, Zap, ArrowUpRight, Flame, Star, HelpCircle } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 to-indigo-900 py-8 px-4">
      <div className="container mx-auto max-w-5xl">
        <CPCalculatorHeader />
        
        {/* Hero Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8 text-white shadow-xl border border-white/20">
          <h2 className="text-3xl font-bold mb-4 text-center">The Ultimate Pokémon GO CP Calculator</h2>
          <p className="text-lg text-center mb-6">
            Calculate the exact Combat Power (CP) of any Pokémon based on its IVs and level.
            The most accurate Pokémon GO CP Calculator available online!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-4">
            <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex items-start">
              <Zap className="text-yellow-400 mr-3 h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-1">Fast & Accurate</h3>
                <p>Our Pokémon GO CP calculator uses the official formula to deliver precise results instantly.</p>
              </div>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex items-start">
              <Award className="text-yellow-400 mr-3 h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-1">Complete Database</h3>
                <p>Access all Pokémon including the latest generations and special forms.</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a href="#calculator" className="inline-flex items-center px-6 py-3 bg-pogo-red hover:bg-red-700 text-white font-medium rounded-lg transition-colors">
              Try The Calculator
              <ArrowUpRight className="ml-2 h-4 w-4" />
            </a>
          </div>
        </div>

        {/* Calculator Section */}
        <div id="calculator" className="mb-12">
          <CPCalculator />
        </div>
        
        {/* About Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 text-white shadow-xl border border-white/20">
          <h2 className="text-3xl font-bold mb-6 text-center">What is the Pokémon GO CP Calculator?</h2>
          <div className="space-y-6">
            <p>
              Our Pokémon GO CP Calculator is a powerful tool designed to help trainers calculate the exact Combat Power (CP) 
              of any Pokémon in the game. Whether you're planning evolutions, comparing IV combinations, or preparing for 
              battles, this calculator delivers precise CP predictions using the official Pokémon GO formula.
            </p>
            <p>
              Unlike basic IV calculators, our evolution calculator for Pokémon GO considers all factors that influence CP: 
              base stats, Individual Values (IVs), and level-specific CP Multipliers (CPM). This makes it the most accurate 
              Pokémon GO calculator IV tool available.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex flex-col items-center text-center">
                <Calculator className="text-pogo-blue h-10 w-10 mb-3" />
                <h3 className="font-bold text-xl mb-2">CP Calculation</h3>
                <p>Accurate CP values using the official game formula</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex flex-col items-center text-center">
                <Flame className="text-pogo-red h-10 w-10 mb-3" />
                <h3 className="font-bold text-xl mb-2">Evolution Planning</h3>
                <p>Plan your Pokémon evolutions with precision</p>
              </div>
              <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex flex-col items-center text-center">
                <Star className="text-yellow-400 h-10 w-10 mb-3" />
                <h3 className="font-bold text-xl mb-2">IV Optimization</h3>
                <p>Find the perfect IV combinations for battles</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Why We Created Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 text-white shadow-xl border border-white/20">
          <h2 className="text-3xl font-bold mb-6 text-center">Why We Created This Tool</h2>
          <div className="space-y-6">
            <p>
              As passionate Pokémon GO players ourselves, we were frustrated by the limitations of existing CP calculators and 
              IV calculators for Pokémon GO. Many tools were outdated, inaccurate, or difficult to use.
            </p>
            <p>
              We developed this Pokémon GO calculator to provide the community with a reliable, easy-to-use tool that gives 
              trainers the precise information they need. Our evolve calculator for Pokémon GO is maintained and updated 
              regularly to ensure accuracy with the latest game data.
            </p>
            <p>
              Whether you're a casual player or a competitive battler, our Pokémon CP calculator helps you make informed 
              decisions about which Pokémon to power up, evolve, or use in battles.
            </p>
          </div>
        </div>
        
        {/* Benefits Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 text-white shadow-xl border border-white/20">
          <h2 className="text-3xl font-bold mb-6 text-center">Benefits of Our Pokémon GO CP Calculator</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex items-start">
              <div className="bg-pogo-blue rounded-full p-2 mr-4 flex-shrink-0">
                <CalendarClock className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">Save Time & Resources</h3>
                <p>Avoid wasting valuable Stardust and Candy on Pokémon with sub-optimal potential. Our IV calculator for Pokémon GO helps you invest wisely.</p>
              </div>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex items-start">
              <div className="bg-pogo-blue rounded-full p-2 mr-4 flex-shrink-0">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">Precision Planning</h3>
                <p>Our Pokémon GO evolution calculator lets you preview exactly how powerful your Pokémon will be after evolution or powering up.</p>
              </div>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex items-start">
              <div className="bg-pogo-blue rounded-full p-2 mr-4 flex-shrink-0">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">Competitive Edge</h3>
                <p>Gain an advantage in battles by understanding exactly how your Pokémon's CP compares to others. Our Pokémon GO calculator IV tool is a trainer's best friend.</p>
              </div>
            </div>
            <div className="bg-white/5 p-4 rounded-lg border border-white/10 flex items-start">
              <div className="bg-pogo-blue rounded-full p-2 mr-4 flex-shrink-0">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">Simplicity & Accessibility</h3>
                <p>Our CP calculator for Pokémon GO is designed to be user-friendly and accessible to trainers of all levels. No complicated inputs required!</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Why Use Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 text-white shadow-xl border border-white/20">
          <h2 className="text-3xl font-bold mb-6 text-center">Why You Should Use Our Tool</h2>
          <div className="space-y-6">
            <p>
              With so many Pokémon GO calculators available online, why choose ours? Our evolve calculator Pokémon GO tool stands out for several reasons:
            </p>
            
            <ul className="list-disc pl-6 space-y-4">
              <li>
                <span className="font-bold">Complete Accuracy:</span> We use the exact formula from the game for our Pokémon GO IV calculator, ensuring precise CP predictions.
              </li>
              <li>
                <span className="font-bold">Up-to-Date:</span> Our Pokémon CP calculator is regularly updated with the latest game data, including new Pokémon and any formula changes.
              </li>
              <li>
                <span className="font-bold">User-Friendly Interface:</span> Simple, intuitive design makes our Pokémon GO calculator easy to use for everyone.
              </li>
              <li>
                <span className="font-bold">No Downloads Required:</span> Access our evolution calculator Pokémon GO tool directly in your browser on any device.
              </li>
              <li>
                <span className="font-bold">Free to Use:</span> Our IV calculator Pokémon GO tool is completely free with no hidden costs.
              </li>
            </ul>
          </div>
        </div>
        
        {/* FAQs Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 text-white shadow-xl border border-white/20">
          <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-white/10 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-4 py-4 hover:bg-white/5 text-xl font-medium text-left">How accurate is this Pokémon GO CP calculator?</AccordionTrigger>
              <AccordionContent className="bg-white/5 px-4 py-4">
                Our CP calculator for Pokémon GO uses the official formula from the game, making it extremely accurate. It considers base stats, IVs, and the exact CP multipliers for each level.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-white/10 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-4 py-4 hover:bg-white/5 text-xl font-medium text-left">Can I use this as an evolution calculator for Pokémon GO?</AccordionTrigger>
              <AccordionContent className="bg-white/5 px-4 py-4">
                Yes! By selecting the evolved form of your Pokémon and entering the same IVs and level, you can see exactly what CP your Pokémon will have after evolving. Our Pokémon GO evolution calculator takes all factors into account.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border border-white/10 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-4 py-4 hover:bg-white/5 text-xl font-medium text-left">How does the IV calculator for Pokémon GO work?</AccordionTrigger>
              <AccordionContent className="bg-white/5 px-4 py-4">
                Our tool calculates CP based on IVs you input. For a reverse calculation (finding IVs from CP), you may need to try different IV combinations. The Pokémon GO calculator IV function helps you understand how different IV spreads affect your Pokémon's CP.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border border-white/10 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-4 py-4 hover:bg-white/5 text-xl font-medium text-left">Does this Pokémon GO calculator include all Pokémon?</AccordionTrigger>
              <AccordionContent className="bg-white/5 px-4 py-4">
                Yes, our evolve calculator Pokémon GO tool includes all Pokémon currently available in the game, including special forms and regional variants.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border border-white/10 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-4 py-4 hover:bg-white/5 text-xl font-medium text-left">Can I calculate CP for max level Pokémon?</AccordionTrigger>
              <AccordionContent className="bg-white/5 px-4 py-4">
                Absolutely! Our Pokémon GO CP calculator allows you to calculate CP for Pokémon at any level from 1 to 50, including half levels. This makes it perfect for planning your power-up strategy.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-300">
          <p>
            This Pokémon GO CP Calculator uses the official formula to calculate Combat Power.
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
