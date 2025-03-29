
import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, Heart, ExternalLink } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-pogo-blue to-pogo-red text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Logo & Info */}
          <div className="flex flex-col items-center md:items-start">
            <Link to="/" className="flex items-center space-x-2 mb-4">
              <Calculator className="h-6 w-6" />
              <span className="text-lg font-bold">Combat Power Calculator</span>
            </Link>
            <p className="text-sm text-white/80 text-center md:text-left">
              The most accurate calculator for Pokémon GO trainers to determine the Combat Power (CP) of their Pokémon based on level, IVs, and base stats.
            </p>
            <div className="mt-4 flex items-center">
              <span className="text-sm text-white/80">Made with</span>
              <Heart className="h-4 w-4 mx-1 text-red-300" />
              <span className="text-sm text-white/80">for Pokémon trainers</span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <FooterLink to="/">Home</FooterLink>
              <FooterLink to="/about-us">About Us</FooterLink>
              <FooterLink to="/contact-us">Contact Us</FooterLink>
            </ul>
          </div>

          {/* Legal */}
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <FooterLink to="/privacy-policy">Privacy Policy</FooterLink>
              <FooterLink to="/terms-and-conditions">Terms & Conditions</FooterLink>
              <FooterLink to="/disclaimer">Disclaimer</FooterLink>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-sm text-white/80">
            Combat Power Calculator is not affiliated with, endorsed by, or associated with Niantic, Inc. or The Pokémon Company.
            <br />
            All Pokémon names and images are trademarks of their respective owners.
          </p>
          <p className="text-sm mt-4 text-white/60">
            &copy; Combat Power Calculator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const FooterLink = ({ to, children, external = false }: { to: string; children: React.ReactNode; external?: boolean }) => {
  if (external) {
    return (
      <li>
        <a href={to} className="text-white/80 hover:text-white transition-colors inline-flex items-center" target="_blank" rel="noopener noreferrer">
          {children}
          <ExternalLink className="ml-1 h-3 w-3" />
        </a>
      </li>
    );
  }
  
  return (
    <li>
      <Link to={to} className="text-white/80 hover:text-white transition-colors">
        {children}
      </Link>
    </li>
  );
};

export default Footer;
