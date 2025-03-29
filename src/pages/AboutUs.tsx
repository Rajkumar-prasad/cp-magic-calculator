
import React from 'react';
import { Helmet } from 'react-helmet';
import { Card } from '@/components/ui/card';
import { Gamepad, Award, Users, BarChart3, Zap } from 'lucide-react';

const AboutUs = () => {
  return (
    <>
      <Helmet>
        <title>About Us | Combat Power Calculator</title>
        <meta name="description" content="Learn about the team behind Combat Power Calculator, the most accurate Pokémon GO CP Calculator tool for trainers worldwide." />
        <meta name="keywords" content="Combat Power Calculator, Pokémon GO CP Calculator, about us, Pokémon GO tools, IV calculator" />
      </Helmet>
      
      <div className="container mx-auto px-4 py-12">
        <Card className="p-8 shadow-lg bg-gradient-to-br from-white/80 to-white/40 backdrop-blur-sm border-white/20">
          <h1 className="text-3xl font-bold mb-6 text-center text-pogo-blue">About Combat Power Calculator</h1>
          
          <div className="space-y-8">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Gamepad className="w-8 h-8 text-pogo-red" />
                <h2 className="text-2xl font-semibold text-pogo-blue">Our Story</h2>
              </div>
              <p className="text-lg">
                Combat Power Calculator was born from a passion for Pokémon GO and a desire to help fellow trainers optimize their gameplay experience. As dedicated players ourselves, we understood the importance of precise CP calculations and the impact they have on battle strategies, evolution decisions, and team building.
              </p>
              <p className="text-lg mt-3">
                What started as a personal project to calculate the potential Combat Power of our own Pokémon evolved into a comprehensive tool that now helps thousands of trainers worldwide make informed decisions about their Pokémon collections.
              </p>
            </section>
            
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Award className="w-8 h-8 text-pogo-red" />
                <h2 className="text-2xl font-semibold text-pogo-blue">Our Mission</h2>
              </div>
              <p className="text-lg">
                Our mission is to provide the Pokémon GO community with the most accurate, user-friendly, and comprehensive Combat Power calculation tools available. We strive to demystify the complex formulas behind CP calculations and empower trainers to make strategic decisions based on precise data.
              </p>
              <p className="text-lg mt-3">
                We believe that accessible tools lead to better gameplay, more competitive battles, and ultimately a more enjoyable Pokémon GO experience for everyone from casual players to dedicated competitive trainers.
              </p>
            </section>
            
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Users className="w-8 h-8 text-pogo-red" />
                <h2 className="text-2xl font-semibold text-pogo-blue">Our Team</h2>
              </div>
              <p className="text-lg">
                Behind Combat Power Calculator is a small team of passionate Pokémon GO players, developers, and data analysts who combine their expertise to create and maintain our suite of tools. We're united by our love for the game and our commitment to helping the community.
              </p>
              <p className="text-lg mt-3">
                Our team continuously researches game mechanics, updates formulas, and refines our calculators to ensure they remain accurate through every game update and balance change.
              </p>
            </section>
            
            <section>
              <div className="flex items-center gap-3 mb-4">
                <BarChart3 className="w-8 h-8 text-pogo-red" />
                <h2 className="text-2xl font-semibold text-pogo-blue">Data Accuracy</h2>
              </div>
              <p className="text-lg">
                We take pride in the accuracy of our CP Calculator. Our calculations are based on extensively researched formulas and verified against in-game results. We regularly update our database with the latest Pokémon stats, CP multipliers, and game mechanics.
              </p>
              <p className="text-lg mt-3">
                When game mechanics change or new Pokémon are introduced, we work quickly to ensure our calculators remain reliable and precise for all trainers who depend on our tools.
              </p>
            </section>
            
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Zap className="w-8 h-8 text-pogo-red" />
                <h2 className="text-2xl font-semibold text-pogo-blue">Future Development</h2>
              </div>
              <p className="text-lg">
                We're committed to continuously improving the Combat Power Calculator and expanding our suite of Pokémon GO tools. We listen to user feedback and community needs to develop new features that enhance the trainer experience.
              </p>
              <p className="text-lg mt-3">
                Our roadmap includes enhanced visualization of CP potential, expanded evolution calculators, integration with IV calculators, and more tools to help trainers build their optimal teams.
              </p>
            </section>
            
            <section className="text-center pt-6">
              <p className="text-lg font-medium">
                Thank you for choosing Combat Power Calculator as your trusted Pokémon GO companion. 
                <br />Happy hunting and battling!
              </p>
            </section>
          </div>
        </Card>
      </div>
    </>
  );
};

export default AboutUs;
