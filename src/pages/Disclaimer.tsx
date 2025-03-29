
import React from 'react';
import { Helmet } from 'react-helmet';
import { Card } from '@/components/ui/card';

const Disclaimer = () => {
  return (
    <>
      <Helmet>
        <title>Disclaimer | Combat Power Calculator</title>
        <meta name="description" content="Disclaimer for Combat Power Calculator - Important information regarding the use of our Pokémon GO CP Calculator tool." />
        <meta name="keywords" content="Combat Power Calculator, Pokémon GO CP Calculator, disclaimer, legal notice, Pokémon GO" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-12">
        <Card className="p-8 shadow-lg bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm border-white/20">
          <h1 className="text-3xl font-bold mb-6 text-center text-pogo-blue">Disclaimer</h1>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3 text-pogo-blue">No Official Affiliation</h2>
              <p>Combat Power Calculator is an independent fansite and is not affiliated with, endorsed by, or associated with Niantic, Inc., The Pokémon Company, Nintendo, or any other company related to Pokémon GO. All Pokémon names and related terms are trademarks of their respective owners.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-pogo-blue">Accuracy of Information</h2>
              <p>While we strive to provide accurate calculations and information, our Pokémon GO CP Calculator, IV Calculator, and Evolution Calculator tools are based on research and formulas derived from public sources and community contributions. The actual in-game values may vary.</p>
              <p className="mt-2">We make no guarantees regarding the accuracy, completeness, or reliability of any calculations, information, or content provided through this website.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-pogo-blue">Use at Your Own Risk</h2>
              <p>The use of our Combat Power Calculator and related tools is at your own risk. We are not responsible for any damages, losses, or consequences that may arise from using or relying on our services.</p>
              <p className="mt-2">Our tools are designed to assist Pokémon GO players and should not be used for any unauthorized modification of game data or violation of the Pokémon GO Terms of Service.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-pogo-blue">External Links</h2>
              <p>Our website may contain links to external websites or resources. We are not responsible for the content, accuracy, or practices of these third-party sites and resources.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-pogo-blue">Changes to Content</h2>
              <p>We reserve the right to modify, update, or remove any content on our website at any time without prior notice. We are not obligated to update any information on our website.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-pogo-blue">Limitation of Liability</h2>
              <p>To the fullest extent permitted by applicable law, we disclaim all warranties, express or implied, and will not be liable for any direct, indirect, incidental, consequential, special, exemplary, or punitive damages arising out of or in connection with your use of this website or its content.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-pogo-blue">Compliance with Game Rules</h2>
              <p>Users are responsible for ensuring that their use of our calculators complies with Pokémon GO's terms of service and community guidelines. Our tools are designed for educational and informational purposes only.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-pogo-blue">Contact Information</h2>
              <p>If you have any questions about this Disclaimer, please contact us at contact@combat-power-calculator.online</p>
            </section>
          </div>
        </Card>
      </div>
    </>
  );
};

export default Disclaimer;
