
import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator } from 'lucide-react';

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-pogo-red to-pogo-blue text-white shadow-md">
      <div className="container mx-auto px-4 py-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <Link to="/" className="flex items-center gap-2 text-2xl font-bold mb-4 md:mb-0">
            <Calculator className="h-6 w-6" />
            <span>Combat Power Calculator</span>
          </Link>
          
          <nav className="flex flex-wrap justify-center gap-x-6 gap-y-2">
            <Link to="/" className="hover:text-white/80 transition-colors">
              Home
            </Link>
            <Link to="/about-us" className="hover:text-white/80 transition-colors">
              About Us
            </Link>
            <Link to="/contact-us" className="hover:text-white/80 transition-colors">
              Contact
            </Link>
            <Link to="/privacy-policy" className="hover:text-white/80 transition-colors">
              Privacy
            </Link>
            <Link to="/terms-and-conditions" className="hover:text-white/80 transition-colors">
              Terms
            </Link>
            <Link to="/disclaimer" className="hover:text-white/80 transition-colors">
              Disclaimer
            </Link>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
