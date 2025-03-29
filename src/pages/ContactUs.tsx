
import React from 'react';
import { Helmet } from 'react-helmet';
import { Card } from '@/components/ui/card';
import { Mail, MapPin, Clock, AlertCircle } from 'lucide-react';

const ContactUs = () => {
  return (
    <>
      <Helmet>
        <title>Contact Us | Combat Power Calculator</title>
        <meta name="description" content="Contact the Combat Power Calculator team for questions, feedback, or support regarding our Pokémon GO CP Calculator tool." />
        <meta name="keywords" content="Combat Power Calculator, Pokémon GO CP Calculator, contact us, support, feedback" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-12">
        <Card className="p-8 shadow-lg bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm border-white/20">
          <h1 className="text-3xl font-bold mb-6 text-center text-pogo-blue">Contact Us</h1>
          
          <div className="max-w-3xl mx-auto space-y-8">
            <section className="text-center mb-8">
              <p className="text-lg">
                Have questions about our Combat Power Calculator? Want to provide feedback or report an issue? We'd love to hear from you! Our team is dedicated to improving your experience with our Pokémon GO tools.
              </p>
            </section>
            
            <section className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30 shadow-md">
              <div className="flex items-center gap-4 mb-5">
                <Mail className="w-10 h-10 text-pogo-red" />
                <div>
                  <h2 className="text-xl font-semibold text-pogo-blue">Email Us</h2>
                  <p className="text-lg mt-1">
                    The quickest way to reach us is through email:
                  </p>
                </div>
              </div>
              <a 
                href="mailto:contact@combat-power-calculator.online" 
                className="block text-center p-4 bg-gradient-to-r from-pogo-blue to-pogo-red text-white rounded-lg font-medium text-lg transition-transform hover:scale-105"
              >
                contact@combat-power-calculator.online
              </a>
            </section>
            
            <section className="grid md:grid-cols-3 gap-6">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 shadow-md flex flex-col items-center text-center">
                <AlertCircle className="w-10 h-10 text-pogo-red mb-3" />
                <h3 className="text-lg font-semibold text-pogo-blue mb-2">Report Issues</h3>
                <p>Found a bug or calculation error? Let us know via email and we'll address it as soon as possible.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 shadow-md flex flex-col items-center text-center">
                <Clock className="w-10 h-10 text-pogo-red mb-3" />
                <h3 className="text-lg font-semibold text-pogo-blue mb-2">Response Time</h3>
                <p>We strive to respond to all inquiries within 48 hours during regular business days.</p>
              </div>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-5 border border-white/20 shadow-md flex flex-col items-center text-center">
                <MapPin className="w-10 h-10 text-pogo-red mb-3" />
                <h3 className="text-lg font-semibold text-pogo-blue mb-2">Community</h3>
                <p>Join our community of Pokémon GO trainers to share tips and strategies for maximizing your Pokémon's potential.</p>
              </div>
            </section>
            
            <section className="text-center mt-10">
              <h2 className="text-xl font-semibold text-pogo-blue mb-4">We Value Your Feedback</h2>
              <p className="text-lg">
                Your feedback helps us improve the Combat Power Calculator and create better tools for the Pokémon GO community. Whether you have suggestions for new features, ideas for improvement, or just want to say hello, we'd love to hear from you!
              </p>
            </section>
          </div>
        </Card>
      </div>
    </>
  );
};

export default ContactUs;
