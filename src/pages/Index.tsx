
import React from 'react';
import CPCalculator from "@/components/CPCalculator";
import CPCalculatorHeader from "@/components/CPCalculatorHeader";
import { CalendarClock, Calculator, Award, Zap, ArrowUpRight, Flame, Star, HelpCircle, Shield, Target, TrendingUp, Sparkles, Trophy, Lightbulb } from "lucide-react";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-900 via-indigo-800 to-purple-900 py-8 px-4">
      <div className="container mx-auto max-w-5xl">
        <CPCalculatorHeader />
        
        {/* Hero Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 mb-8 text-white shadow-xl border border-white/20">
          <h2 className="text-3xl font-bold mb-4 text-center">The Ultimate Pokémon GO CP Calculator</h2>
          <p className="text-lg text-center mb-6">
            Calculate the exact Combat Power (CP) of any Pokémon based on its IVs and level.
            Our Pokémon GO evolution calculator provides trainers with the most accurate CP predictions available online!
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
            <div className="bg-gradient-to-br from-white/5 to-white/10 p-4 rounded-lg border border-white/10 flex items-start">
              <Zap className="text-yellow-400 mr-3 h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-1">Fast & Accurate</h3>
                <p>Our Pokémon GO CP calculator uses the official formula to deliver precise results instantly.</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white/5 to-white/10 p-4 rounded-lg border border-white/10 flex items-start">
              <Award className="text-yellow-400 mr-3 h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-1">Complete Database</h3>
                <p>Access all Pokémon including the latest generations, special forms, and regional variants.</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white/5 to-white/10 p-4 rounded-lg border border-white/10 flex items-start">
              <Sparkles className="text-yellow-400 mr-3 h-6 w-6 mt-1 flex-shrink-0" />
              <div>
                <h3 className="font-bold text-xl mb-1">PvP Optimization</h3>
                <p>Ideal for trainers looking to maximize their Pokémon's potential in battles and raids.</p>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a href="#calculator" className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-pogo-red to-pogo-blue hover:from-pogo-red hover:to-purple-700 text-white font-medium rounded-lg transition-colors">
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
              Pokémon GO calculator IV tool available for both casual players and competitive trainers.
            </p>
            <p>
              The Combat Power (CP) of a Pokémon is calculated using a complex formula that takes into account the Pokémon's base stats, 
              Individual Values (IVs), and a CP Multiplier (CPM) that varies based on the Pokémon's level. Our calculator handles 
              all of this math for you, allowing you to focus on building your perfect team.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div className="bg-gradient-to-br from-white/5 to-white/10 p-4 rounded-lg border border-white/10 flex flex-col items-center text-center">
                <Calculator className="text-pogo-blue h-10 w-10 mb-3" />
                <h3 className="font-bold text-xl mb-2">CP Calculation</h3>
                <p>Accurate CP values using the official game formula for all Pokémon in the current meta</p>
              </div>
              <div className="bg-gradient-to-br from-white/5 to-white/10 p-4 rounded-lg border border-white/10 flex flex-col items-center text-center">
                <Flame className="text-pogo-red h-10 w-10 mb-3" />
                <h3 className="font-bold text-xl mb-2">Evolution Planning</h3>
                <p>Plan your Pokémon evolutions with precision and maximize your team's potential</p>
              </div>
              <div className="bg-gradient-to-br from-white/5 to-white/10 p-4 rounded-lg border border-white/10 flex flex-col items-center text-center">
                <Star className="text-yellow-400 h-10 w-10 mb-3" />
                <h3 className="font-bold text-xl mb-2">IV Optimization</h3>
                <p>Find the perfect IV combinations for PvP, raids, and gym battles</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* How It Works Section - New Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 text-white shadow-xl border border-white/20">
          <h2 className="text-3xl font-bold mb-6 text-center">How Our CP Calculator Works</h2>
          <div className="space-y-6">
            <p>
              The Pokémon GO CP calculator uses the official formula from Niantic to calculate the exact Combat Power of any Pokémon:
            </p>
            <div className="bg-white/5 p-4 rounded-lg text-center my-6">
              <p className="text-xl">
                CP = (Base Attack + IV Attack) × (Base Defense + IV Defense)^0.5 × (Base Stamina + IV Stamina)^0.5 × (CPM)^2 ÷ 10
              </p>
            </div>
            <p>
              Our tool simplifies this complex calculation process. Just follow these steps:
            </p>
            
            <ol className="list-decimal pl-6 space-y-4">
              <li>
                <span className="font-bold">Select your Pokémon</span> from our comprehensive database containing all available species in Pokémon GO.
              </li>
              <li>
                <span className="font-bold">Enter the Pokémon's level</span> (from 1 to 50, including half levels).
              </li>
              <li>
                <span className="font-bold">Input the Individual Values (IVs)</span> for Attack, Defense, and Stamina (values from 0 to 15).
              </li>
              <li>
                <span className="font-bold">Get instant results</span> showing the exact CP your Pokémon will have with those specifications.
              </li>
            </ol>
            
            <p className="mt-4">
              The calculator automatically incorporates the correct base stats for each Pokémon and applies the appropriate CP Multiplier for the selected level.
              This ensures you get the most accurate results possible for your evolution planning and battle preparation.
            </p>
          </div>
        </div>
        
        {/* Why We Created Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 text-white shadow-xl border border-white/20">
          <h2 className="text-3xl font-bold mb-6 text-center">Why We Created This Tool</h2>
          <div className="space-y-6">
            <p>
              As passionate Pokémon GO players ourselves, we were frustrated by the limitations of existing CP calculators and 
              IV calculators for Pokémon GO. Many tools were outdated, inaccurate, or difficult to use, especially for newer players.
            </p>
            <p>
              We developed this Pokémon GO calculator to provide the community with a reliable, easy-to-use tool that gives 
              trainers the precise information they need to make strategic decisions. Our evolve calculator for Pokémon GO is maintained and updated 
              regularly to ensure accuracy with the latest game data, including new Pokémon releases and game mechanics changes.
            </p>
            <p>
              Whether you're a casual player or a competitive battler, our Pokémon CP calculator helps you make informed 
              decisions about which Pokémon to power up, evolve, or use in battles. We understand the importance of optimizing your 
              resources like Stardust and Candy, which is why we've designed this tool to help you invest wisely.
            </p>
            <p>
              The Pokémon GO community deserves tools that are as accurate and polished as the game itself. That's why we've put 
              countless hours into developing and refining this CP calculator to ensure it meets the needs of trainers worldwide.
            </p>
          </div>
        </div>
        
        {/* Benefits Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 text-white shadow-xl border border-white/20">
          <h2 className="text-3xl font-bold mb-6 text-center">Benefits of Our Pokémon GO CP Calculator</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-gradient-to-br from-white/5 to-white/10 p-4 rounded-lg border border-white/10 flex items-start">
              <div className="bg-gradient-to-r from-pogo-blue to-blue-600 rounded-full p-2 mr-4 flex-shrink-0">
                <CalendarClock className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">Save Time & Resources</h3>
                <p>Avoid wasting valuable Stardust and Candy on Pokémon with sub-optimal potential. Our IV calculator for Pokémon GO helps you invest wisely and maximize your return on resources.</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white/5 to-white/10 p-4 rounded-lg border border-white/10 flex items-start">
              <div className="bg-gradient-to-r from-pogo-blue to-blue-600 rounded-full p-2 mr-4 flex-shrink-0">
                <Calculator className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">Precision Planning</h3>
                <p>Our Pokémon GO evolution calculator lets you preview exactly how powerful your Pokémon will be after evolution or powering up, helping you plan your team composition with confidence.</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white/5 to-white/10 p-4 rounded-lg border border-white/10 flex items-start">
              <div className="bg-gradient-to-r from-pogo-blue to-blue-600 rounded-full p-2 mr-4 flex-shrink-0">
                <Zap className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">Competitive Edge</h3>
                <p>Gain an advantage in battles by understanding exactly how your Pokémon's CP compares to others. Our Pokémon GO calculator IV tool is a trainer's best friend for PvP and raid optimization.</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white/5 to-white/10 p-4 rounded-lg border border-white/10 flex items-start">
              <div className="bg-gradient-to-r from-pogo-blue to-blue-600 rounded-full p-2 mr-4 flex-shrink-0">
                <Award className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">Simplicity & Accessibility</h3>
                <p>Our CP calculator for Pokémon GO is designed to be user-friendly and accessible to trainers of all levels. No complicated inputs required, just the information you need at your fingertips.</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white/5 to-white/10 p-4 rounded-lg border border-white/10 flex items-start">
              <div className="bg-gradient-to-r from-pogo-blue to-blue-600 rounded-full p-2 mr-4 flex-shrink-0">
                <TrendingUp className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">Strategic Growth</h3>
                <p>Map out your Pokémon's growth trajectory from its current level to its maximum potential, helping you set goals and track progress as you power up your favorites.</p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-white/5 to-white/10 p-4 rounded-lg border border-white/10 flex items-start">
              <div className="bg-gradient-to-r from-pogo-blue to-blue-600 rounded-full p-2 mr-4 flex-shrink-0">
                <Shield className="h-6 w-6 text-white" />
              </div>
              <div>
                <h3 className="font-bold text-xl mb-1">Battle Preparation</h3>
                <p>Prepare your team for specific battle leagues by predicting exactly how your Pokémon will perform after evolving or powering up, ensuring you stay within CP limits for different competitions.</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Key Features Section - New Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 text-white shadow-xl border border-white/20">
          <h2 className="text-3xl font-bold mb-6 text-center">Key Features of Our Combat Power Calculator</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="space-y-6">
              <div className="flex items-start">
                <Target className="text-pogo-red h-6 w-6 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-1">Accurate Base Stats</h3>
                  <p>Our database includes the exact base Attack, Defense, and Stamina values for every Pokémon in the game, updated with each new release.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Trophy className="text-pogo-red h-6 w-6 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-1">CP Multiplier Precision</h3>
                  <p>We use the exact CP Multipliers (CPM) for each level as determined by Niantic, ensuring your calculations match in-game results perfectly.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Sparkles className="text-pogo-red h-6 w-6 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-1">Special Form Support</h3>
                  <p>Calculate CP for all special forms including Shadow Pokémon, Purified Pokémon, Alolan variants, Galarian forms, and more.</p>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              <div className="flex items-start">
                <Lightbulb className="text-pogo-red h-6 w-6 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-1">Evolution Chain Insights</h3>
                  <p>See how your Pokémon's CP will change through its entire evolution chain, helping you plan the perfect time to evolve.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <HelpCircle className="text-pogo-red h-6 w-6 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-1">Beginner-Friendly Interface</h3>
                  <p>Designed to be intuitive for new players while providing the depth experienced trainers need for optimization.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <Star className="text-pogo-red h-6 w-6 mt-1 mr-3 flex-shrink-0" />
                <div>
                  <h3 className="font-bold text-xl mb-1">Perfect IV Analysis</h3>
                  <p>Quickly see how your Pokémon compares to a perfect (15/15/15) IV specimen at the same level.</p>
                </div>
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
                <span className="font-bold">Complete Accuracy:</span> We use the exact formula from the game for our Pokémon GO IV calculator, ensuring precise CP predictions that match what you'll see in-game.
              </li>
              <li>
                <span className="font-bold">Up-to-Date:</span> Our Pokémon CP calculator is regularly updated with the latest game data, including new Pokémon, form variants, and any formula changes implemented by Niantic.
              </li>
              <li>
                <span className="font-bold">User-Friendly Interface:</span> Simple, intuitive design makes our Pokémon GO calculator easy to use for everyone from beginners to veteran trainers.
              </li>
              <li>
                <span className="font-bold">No Downloads Required:</span> Access our evolution calculator Pokémon GO tool directly in your browser on any device - mobile, tablet, or desktop.
              </li>
              <li>
                <span className="font-bold">Free to Use:</span> Our IV calculator Pokémon GO tool is completely free with no hidden costs or premium features locked behind paywalls.
              </li>
              <li>
                <span className="font-bold">Privacy Respected:</span> We don't require you to create an account or share personal information to use our calculator.
              </li>
              <li>
                <span className="font-bold">Trainer Community Feedback:</span> Our tool is continuously improved based on feedback from real Pokémon GO players to ensure it meets the community's needs.
              </li>
              <li>
                <span className="font-bold">Comprehensive Coverage:</span> From the original 151 Pokémon to the latest additions, our database includes every collectible creature in the game.
              </li>
            </ul>
            
            <p className="mt-4">
              Our mission is to provide the Pokémon GO community with the most reliable and user-friendly CP calculator available, 
              helping trainers around the world make better decisions about their Pokémon collection and battle strategy.
            </p>
          </div>
        </div>
        
        {/* Usage Tips Section - New Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 text-white shadow-xl border border-white/20">
          <h2 className="text-3xl font-bold mb-6 text-center">Tips for Using Our CP Calculator</h2>
          <div className="space-y-6">
            <p>
              To get the most out of our Pokémon GO CP calculator, keep these helpful tips in mind:
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-gradient-to-br from-white/5 to-white/10 p-4 rounded-lg border border-white/10">
                <h3 className="font-bold text-xl mb-2">For PvP Optimization</h3>
                <p>
                  When preparing for Great League (1500 CP cap) or Ultra League (2500 CP cap), use our calculator to find the 
                  optimal level to power up your Pokémon without exceeding the CP limit. Sometimes, lower attack IVs and higher 
                  defense/stamina IVs provide better overall stats under CP caps.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white/5 to-white/10 p-4 rounded-lg border border-white/10">
                <h3 className="font-bold text-xl mb-2">For Raid Attackers</h3>
                <p>
                  When building raid teams, prioritize Pokémon with high attack IVs and use our calculator to determine 
                  how much CP gain you'll get from each power-up, helping you decide when to stop investing resources for diminishing returns.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white/5 to-white/10 p-4 rounded-lg border border-white/10">
                <h3 className="font-bold text-xl mb-2">For Evolution Planning</h3>
                <p>
                  Before using valuable evolution items or rare candy, check the potential CP of the evolved form to ensure 
                  it will be worth the investment. Some Pokémon see dramatic CP increases upon evolution, while others are more modest.
                </p>
              </div>
              
              <div className="bg-gradient-to-br from-white/5 to-white/10 p-4 rounded-lg border border-white/10">
                <h3 className="font-bold text-xl mb-2">For Resource Management</h3>
                <p>
                  Use our calculator to compare different Pokémon of the same species to determine which one to invest in. 
                  Sometimes the difference between good and perfect IVs is minimal and not worth the extra stardust and candy.
                </p>
              </div>
            </div>
          </div>
        </div>
        
        {/* FAQs Section */}
        <div className="bg-white/10 backdrop-blur-md rounded-xl p-8 mb-8 text-white shadow-xl border border-white/20">
          <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <Accordion type="single" collapsible className="space-y-4">
            <AccordionItem value="item-1" className="border border-white/10 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-4 py-4 hover:bg-white/5 text-xl font-medium text-left">How accurate is this Pokémon GO CP calculator?</AccordionTrigger>
              <AccordionContent className="bg-white/5 px-4 py-4">
                Our CP calculator for Pokémon GO uses the official formula from the game, making it extremely accurate. It considers base stats, IVs, and the exact CP multipliers for each level. The results you see will match what appears in-game, providing you with reliable information for making decisions about your Pokémon.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-2" className="border border-white/10 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-4 py-4 hover:bg-white/5 text-xl font-medium text-left">Can I use this as an evolution calculator for Pokémon GO?</AccordionTrigger>
              <AccordionContent className="bg-white/5 px-4 py-4">
                Yes! By selecting the evolved form of your Pokémon and entering the same IVs and level, you can see exactly what CP your Pokémon will have after evolving. Our Pokémon GO evolution calculator takes all factors into account, including changes in base stats that occur during evolution, giving you an accurate preview of your Pokémon's potential.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-3" className="border border-white/10 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-4 py-4 hover:bg-white/5 text-xl font-medium text-left">How does the IV calculator for Pokémon GO work?</AccordionTrigger>
              <AccordionContent className="bg-white/5 px-4 py-4">
                Our tool calculates CP based on IVs you input. For a reverse calculation (finding IVs from CP), you may need to try different IV combinations. The Pokémon GO calculator IV function helps you understand how different IV spreads affect your Pokémon's CP. Remember that different IV combinations can sometimes result in the same CP value, especially at lower levels.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-4" className="border border-white/10 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-4 py-4 hover:bg-white/5 text-xl font-medium text-left">Does this Pokémon GO calculator include all Pokémon?</AccordionTrigger>
              <AccordionContent className="bg-white/5 px-4 py-4">
                Yes, our evolve calculator Pokémon GO tool includes all Pokémon currently available in the game, including special forms, regional variants, Mega Evolutions, Shadow Pokémon, and limited-time special releases. Our database is regularly updated whenever new Pokémon are added to the game to ensure you always have access to the most current information.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-5" className="border border-white/10 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-4 py-4 hover:bg-white/5 text-xl font-medium text-left">Can I calculate CP for max level Pokémon?</AccordionTrigger>
              <AccordionContent className="bg-white/5 px-4 py-4">
                Absolutely! Our Pokémon GO CP calculator allows you to calculate CP for Pokémon at any level from 1 to 50, including half levels. This makes it perfect for planning your power-up strategy and seeing the maximum potential of your Pokémon at level 50 with Best Buddy boost. You can see exactly how your Pokémon will perform when fully powered up.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-6" className="border border-white/10 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-4 py-4 hover:bg-white/5 text-xl font-medium text-left">Why do some Pokémon have different CP even with the same IVs?</AccordionTrigger>
              <AccordionContent className="bg-white/5 px-4 py-4">
                The CP formula heavily depends on a Pokémon's base stats, which vary greatly between species. Some Pokémon have naturally higher Attack, Defense, or Stamina stats, which significantly impact their final CP calculation. This is why a 100% IV Weedle will have a much lower CP than a 100% IV Dragonite at the same level.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-7" className="border border-white/10 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-4 py-4 hover:bg-white/5 text-xl font-medium text-left">How often is the Pokémon GO calculator updated?</AccordionTrigger>
              <AccordionContent className="bg-white/5 px-4 py-4">
                Our IV calculator for Pokémon GO is updated promptly whenever Niantic releases new Pokémon, changes base stats, or modifies the CP formula. We typically implement updates within 24-48 hours of official game changes to ensure our tool remains accurate and reliable for all trainers.
              </AccordionContent>
            </AccordionItem>
            
            <AccordionItem value="item-8" className="border border-white/10 rounded-lg overflow-hidden">
              <AccordionTrigger className="px-4 py-4 hover:bg-white/5 text-xl font-medium text-left">Is this calculator helpful for PvP leagues?</AccordionTrigger>
              <AccordionContent className="bg-white/5 px-4 py-4">
                Yes! Our Pokémon GO CP calculator is especially useful for PvP optimization. When preparing for Great League (1500 CP cap) or Ultra League (2500 CP cap), you can use our tool to find the exact level to power up your Pokémon without exceeding the CP limit, maximizing its effectiveness within league restrictions.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
        
        <div className="mt-8 text-center text-sm text-gray-300">
          <p>
            This Pokémon GO CP Calculator uses the official formula to calculate Combat Power.
            Updated regularly to ensure accuracy with the latest game data.
          </p>
          <p className="mt-2">
            Pokémon GO is a trademark of Niantic, Inc. 
            Pokémon and Pokémon character names are trademarks of Nintendo.
            This site is not affiliated with Niantic or Nintendo.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Index;
