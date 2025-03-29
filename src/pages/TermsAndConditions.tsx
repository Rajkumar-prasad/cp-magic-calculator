
import React from 'react';
import { Helmet } from 'react-helmet';
import { Card } from '@/components/ui/card';

const TermsAndConditions = () => {
  return (
    <>
      <Helmet>
        <title>Terms and Conditions | Combat Power Calculator</title>
        <meta name="description" content="Terms and Conditions for Combat Power Calculator - Understand the rules and guidelines while using our Pokémon GO CP Calculator tool." />
        <meta name="keywords" content="Combat Power Calculator, Pokémon GO CP Calculator, terms and conditions, usage terms, Pokémon GO" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-12">
        <Card className="p-8 shadow-lg bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm border-white/20">
          <h1 className="text-3xl font-bold mb-6 text-center text-pogo-blue">Terms and Conditions</h1>
          
          <div className="space-y-6">
            <section>
              <h2 className="text-xl font-semibold mb-3 text-pogo-blue">Introduction</h2>
              <p>Welcome to Combat Power Calculator. These Terms and Conditions govern your use of our website and the Pokémon GO CP Calculator tool. By accessing or using our service, you agree to be bound by these Terms.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-pogo-blue">Use of Our Services</h2>
              <p>The Combat Power Calculator is designed to help Pokémon GO players calculate the Combat Power (CP) of their Pokémon. You may use our services only as permitted by these terms and in compliance with all applicable laws and regulations.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-pogo-blue">Intellectual Property</h2>
              <p>The content, features, and functionality of the Pokémon GO CP Calculator including but not limited to text, graphics, logos, and software, are owned by us or our licensors and are protected by copyright, trademark, and other intellectual property laws.</p>
              <p className="mt-2">Pokémon GO is a registered trademark of Niantic, Inc. and The Pokémon Company. This website is not affiliated with, endorsed by, or associated with Niantic, Inc. or The Pokémon Company.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-pogo-blue">User Responsibilities</h2>
              <p>When using our Combat Power Calculator, you agree to:</p>
              <ul className="list-disc pl-6 mt-2 space-y-1">
                <li>Use the tool responsibly and for its intended purpose</li>
                <li>Not attempt to disrupt, damage, or gain unauthorized access to our services</li>
                <li>Not use our services for any illegal or unauthorized purposes</li>
                <li>Not violate any applicable laws or regulations</li>
              </ul>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-pogo-blue">Disclaimers and Limitations</h2>
              <p>Our IV Calculator and CP Calculator services are provided "as is" without warranties of any kind. We do not guarantee the accuracy, completeness, or reliability of any calculations or information provided through our website.</p>
              <p className="mt-2">We shall not be liable for any indirect, incidental, special, or consequential damages resulting from the use or inability to use our services.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-pogo-blue">Modification of Terms</h2>
              <p>We reserve the right to modify these Terms and Conditions at any time. Your continued use of the Pokémon GO Evolution Calculator after any changes indicates your acceptance of the modified terms.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-pogo-blue">Governing Law</h2>
              <p>These Terms shall be governed by and construed in accordance with applicable laws, without regard to its conflict of law principles.</p>
            </section>
            
            <section>
              <h2 className="text-xl font-semibold mb-3 text-pogo-blue">Contact Information</h2>
              <p>For questions about these Terms and Conditions, please contact us at contact@combat-power-calculator.online</p>
            </section>
          </div>
        </Card>
      </div>
    </>
  );
};

export default TermsAndConditions;
