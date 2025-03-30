
import React from 'react';
import CPCalculatorHeader from '@/components/CPCalculatorHeader';
import CPCalculator from '@/components/CPCalculator';
import { Card, CardContent } from '@/components/ui/card';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import { Checkbox } from '@/components/ui/checkbox';
import { ChevronDown, Info, Star, Calculator, Zap, ArrowUp, HelpCircle } from 'lucide-react';

const Index = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <CPCalculatorHeader />
      <CPCalculator />
      
      {/* SEO Content Section */}
      <div className="mt-16 space-y-12 max-w-4xl mx-auto">
        <section className="text-center">
          <h2 className="text-3xl font-bold mb-6 text-pogo-blue">The Ultimate Pokémon GO CP Calculator</h2>
          <p className="text-lg text-gray-700 mb-6">
            Discover the most accurate and comprehensive Combat Power calculator for Pokémon GO trainers. Calculate CP values with precision and optimize your Pokémon team for battles, raids, and leagues.
          </p>
        </section>
        
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4 text-pogo-blue flex items-center gap-2">
            <Info className="h-6 w-6" />
            What is the Pokémon GO CP Calculator?
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p>
              Our <strong>Pokémon GO CP Calculator</strong> is a powerful tool designed to help trainers accurately predict and calculate the Combat Power (CP) of any Pokémon. Unlike basic calculators, our tool considers all the essential factors that determine a Pokémon's strength:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Individual Values (IVs) - Attack, Defense, and Stamina</li>
              <li>Pokémon level and corresponding CP multiplier</li>
              <li>Base stats of each Pokémon species</li>
              <li>Evolution CP changes and predictions</li>
            </ul>
            <p className="mt-4">
              Whether you're planning evolutions, powering up for specific battle leagues, or simply want to know how strong your Pokémon can become, our <strong>Pokémon GO Calculator</strong> provides the precise information you need.
            </p>
          </div>
        </section>
        
        <section className="bg-gradient-to-r from-pogo-red/10 to-pogo-blue/10 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4 text-pogo-red flex items-center gap-2">
            <Zap className="h-6 w-6" />
            Why We Created This Tool
          </h2>
          <div className="prose max-w-none text-gray-700">
            <p>
              As dedicated Pokémon GO players, we noticed a significant gap in the available resources for CP calculation. Many trainers were making decisions based on incomplete or inaccurate information, leading to:
            </p>
            <ul className="list-disc pl-6 mt-4 space-y-2">
              <li>Wasting valuable stardust and candy on suboptimal Pokémon</li>
              <li>Evolving Pokémon that exceed CP limits for specific battle leagues</li>
              <li>Uncertainty about which Pokémon would become strongest after evolution</li>
            </ul>
            <p className="mt-4">
              Our team of developers and Pokémon enthusiasts created this <strong>Evolution Calculator for Pokémon GO</strong> to solve these problems. We've built a tool that uses the official CP formula from the game, combined with up-to-date base stats for all Pokémon species.
            </p>
          </div>
        </section>
        
        <section className="bg-white rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-6 text-pogo-blue flex items-center gap-2">
            <Star className="h-6 w-6" />
            Benefits of Using Our CP Calculator
          </h2>
          
          <div className="grid md:grid-cols-2 gap-6">
            <Card className="border-l-4 border-l-pogo-blue">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Resource Optimization</h3>
                <p className="text-gray-700">
                  Save valuable stardust and candy by focusing only on Pokémon with the highest potential CP. Our <strong>IV calculator for Pokémon GO</strong> helps you identify which Pokémon deserve your investment.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-pogo-red">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Competitive Edge</h3>
                <p className="text-gray-700">
                  Gain an advantage in battles by precisely calculating CP for different battle leagues. Our <strong>Pokémon GO CP calculator</strong> helps you stay under CP caps while maximizing performance.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-pogo-red">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Evolution Planning</h3>
                <p className="text-gray-700">
                  Plan evolutions with confidence using our <strong>Evolve Pokémon GO calculator</strong>. Know exactly what CP your Pokémon will have after evolution before spending resources.
                </p>
              </CardContent>
            </Card>
            
            <Card className="border-l-4 border-l-pogo-blue">
              <CardContent className="pt-6">
                <h3 className="text-xl font-semibold mb-2">Time Efficiency</h3>
                <p className="text-gray-700">
                  Make faster, more informed decisions with our instant calculations. Our <strong>Pokémon GO calculator IV</strong> tool provides immediate feedback based on your inputs.
                </p>
              </CardContent>
            </Card>
          </div>
        </section>
        
        <section className="bg-gradient-to-r from-pogo-blue/10 to-pogo-red/10 rounded-lg shadow-md p-8">
          <h2 className="text-2xl font-bold mb-4 text-pogo-blue flex items-center gap-2">
            <Calculator className="h-6 w-6" />
            Why Choose Our Tool
          </h2>
          <div className="space-y-4 mt-4">
            <div className="flex items-start gap-3">
              <Checkbox id="accurate" className="mt-1" defaultChecked />
              <div>
                <label htmlFor="accurate" className="font-medium cursor-pointer">Unmatched Accuracy</label>
                <p className="text-gray-700 text-sm mt-1">
                  Our <strong>Pokémon CP calculator</strong> uses the exact formula from the game, ensuring precise results every time.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Checkbox id="comprehensive" className="mt-1" defaultChecked />
              <div>
                <label htmlFor="comprehensive" className="font-medium cursor-pointer">Comprehensive Database</label>
                <p className="text-gray-700 text-sm mt-1">
                  We maintain an up-to-date database of all Pokémon species and their base stats, including the latest additions.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Checkbox id="user-friendly" className="mt-1" defaultChecked />
              <div>
                <label htmlFor="user-friendly" className="font-medium cursor-pointer">User-Friendly Interface</label>
                <p className="text-gray-700 text-sm mt-1">
                  Our <strong>Pokémon GO IV calculator</strong> is designed to be intuitive and easy to use, even for new players.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Checkbox id="free" className="mt-1" defaultChecked />
              <div>
                <label htmlFor="free" className="font-medium cursor-pointer">Completely Free</label>
                <p className="text-gray-700 text-sm mt-1">
                  All features of our <strong>Evolution calculator Pokémon GO</strong> tool are available at no cost, with no hidden fees.
                </p>
              </div>
            </div>
            
            <div className="flex items-start gap-3">
              <Checkbox id="mobile" className="mt-1" defaultChecked />
              <div>
                <label htmlFor="mobile" className="font-medium cursor-pointer">Mobile-Friendly Design</label>
                <p className="text-gray-700 text-sm mt-1">
                  Use our <strong>CP calculator Pokémon GO</strong> tool on any device, whether you're at home or on the go.
                </p>
              </div>
            </div>
          </div>
        </section>
        
        <section className="bg-white rounded-lg shadow-md p-8" id="faq">
          <h2 className="text-2xl font-bold mb-6 text-pogo-blue flex items-center gap-2">
            <HelpCircle className="h-6 w-6" />
            Frequently Asked Questions
          </h2>
          
          <div className="space-y-4">
            <Collapsible className="border rounded-md overflow-hidden">
              <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left font-medium">
                <span>What is Combat Power (CP) in Pokémon GO?</span>
                <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-200" />
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4 pt-0 text-gray-700 border-t">
                <p>
                  Combat Power (CP) is a numeric value that represents the overall strength of a Pokémon in battles. It's calculated using a formula that includes the Pokémon's base stats (Attack, Defense, Stamina), Individual Values (IVs), and level. Higher CP generally indicates a stronger Pokémon, though type matchups and move sets also play crucial roles in battle performance.
                </p>
              </CollapsibleContent>
            </Collapsible>
            
            <Collapsible className="border rounded-md overflow-hidden">
              <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left font-medium">
                <span>How accurate is the Combat Power Calculator?</span>
                <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-200" />
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4 pt-0 text-gray-700 border-t">
                <p>
                  Our <strong>Pokémon GO CP calculator</strong> is extremely accurate, using the official CP formula from Niantic and up-to-date base stats for all Pokémon. We regularly update our database to ensure that calculations remain precise, even as new Pokémon are added to the game or existing stats are adjusted.
                </p>
              </CollapsibleContent>
            </Collapsible>
            
            <Collapsible className="border rounded-md overflow-hidden">
              <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left font-medium">
                <span>How can I use the CP Calculator to optimize my team?</span>
                <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-200" />
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4 pt-0 text-gray-700 border-t">
                <p>
                  Our <strong>Pokémon evolution calculator</strong> helps you make strategic decisions about which Pokémon to power up or evolve. For PvP Battle Leagues with CP limits (like Great League at 1500 CP or Ultra League at 2500 CP), you can predict the CP after powering up to determine the optimal level. For raiding and Gym battles, you can identify which Pokémon will reach the highest CP with evolution and power-ups.
                </p>
              </CollapsibleContent>
            </Collapsible>
            
            <Collapsible className="border rounded-md overflow-hidden">
              <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left font-medium">
                <span>What information do I need to use the IV calculator?</span>
                <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-200" />
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4 pt-0 text-gray-700 border-t">
                <p>
                  To use our <strong>IV calculator Pokémon GO</strong> tool effectively, you'll need to know:
                </p>
                <ul className="list-disc pl-6 mt-2 space-y-1">
                  <li>The Pokémon species</li>
                  <li>The Pokémon's Individual Values (IVs) for Attack, Defense, and Stamina</li>
                  <li>The current level of your Pokémon (or its CP and HP if you're unsure of the level)</li>
                </ul>
                <p className="mt-2">
                  You can find a Pokémon's IVs using the in-game appraisal feature or by using our calculator to reverse-engineer them from its current CP.
                </p>
              </CollapsibleContent>
            </Collapsible>
            
            <Collapsible className="border rounded-md overflow-hidden">
              <CollapsibleTrigger className="flex justify-between items-center w-full p-4 text-left font-medium">
                <span>Does evolving a Pokémon increase its CP?</span>
                <ChevronDown className="h-5 w-5 shrink-0 transition-transform duration-200" />
              </CollapsibleTrigger>
              <CollapsibleContent className="p-4 pt-0 text-gray-700 border-t">
                <p>
                  Yes, evolving a Pokémon typically increases its CP because evolution changes the Pokémon's base stats (usually making them higher). Our <strong>evolve calculator Pokémon GO</strong> tool can predict exactly how much CP will increase after evolution. The IVs and level remain the same after evolution, but the base stats change, resulting in a different CP calculation.
                </p>
              </CollapsibleContent>
            </Collapsible>
          </div>
        </section>
        
        <section className="text-center bg-gradient-to-r from-pogo-blue to-pogo-red p-8 rounded-lg shadow-md text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Optimize Your Pokémon Team?</h2>
          <p className="text-lg mb-6">
            Start using our free <strong>Pokémon GO CP calculator</strong> today and make the most of your stardust and candy!
          </p>
          <button 
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="bg-white text-pogo-blue hover:bg-gray-100 font-bold py-3 px-6 rounded-full flex items-center gap-2 mx-auto"
          >
            <ArrowUp className="h-5 w-5" />
            Use Calculator Now
          </button>
        </section>
      </div>
    </div>
  );
};

export default Index;
