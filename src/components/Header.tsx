
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Calculator, Home, FileText, Users, Mail, AlertTriangle, HelpCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 bg-gradient-to-r from-pogo-blue to-pogo-red shadow-md backdrop-blur-sm bg-opacity-90">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <Calculator className="h-7 w-7 text-white" />
            <span className="text-xl font-bold text-white hidden sm:inline">Combat Power Calculator</span>
            <span className="text-xl font-bold text-white sm:hidden">CP Calc</span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-1">
            <NavLink to="/" icon={<Home />}>Home</NavLink>
            <NavLink to="/about-us" icon={<Users />}>About</NavLink>
            <NavLink to="/contact-us" icon={<Mail />}>Contact</NavLink>
            <NavLink to="/privacy-policy" icon={<FileText />}>Privacy</NavLink>
            <NavLink to="/terms-and-conditions" icon={<FileText />}>Terms</NavLink>
            <NavLink to="/disclaimer" icon={<AlertTriangle />}>Disclaimer</NavLink>
          </nav>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            className="md:hidden text-white hover:bg-white/20"
            onClick={toggleMenu}
            aria-label="Menu"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-gradient-to-br from-pogo-blue/95 to-pogo-red/95 backdrop-blur-sm">
          <nav className="container mx-auto px-4 py-4 flex flex-col space-y-2">
            <MobileNavLink to="/" icon={<Home size={18} />} onClick={() => setIsMenuOpen(false)}>Home</MobileNavLink>
            <MobileNavLink to="/about-us" icon={<Users size={18} />} onClick={() => setIsMenuOpen(false)}>About</MobileNavLink>
            <MobileNavLink to="/contact-us" icon={<Mail size={18} />} onClick={() => setIsMenuOpen(false)}>Contact</MobileNavLink>
            <MobileNavLink to="/privacy-policy" icon={<FileText size={18} />} onClick={() => setIsMenuOpen(false)}>Privacy Policy</MobileNavLink>
            <MobileNavLink to="/terms-and-conditions" icon={<FileText size={18} />} onClick={() => setIsMenuOpen(false)}>Terms & Conditions</MobileNavLink>
            <MobileNavLink to="/disclaimer" icon={<AlertTriangle size={18} />} onClick={() => setIsMenuOpen(false)}>Disclaimer</MobileNavLink>
          </nav>
        </div>
      )}
    </header>
  );
};

// Desktop Navigation Link Component
const NavLink = ({ to, children, icon }: { to: string; children: React.ReactNode; icon?: React.ReactNode }) => (
  <Link
    to={to}
    className="px-3 py-2 text-sm font-medium text-white hover:bg-white/20 rounded-md transition-colors flex items-center gap-1"
  >
    {icon && <span className="w-4 h-4">{icon}</span>}
    {children}
  </Link>
);

// Mobile Navigation Link Component
const MobileNavLink = ({ 
  to, 
  children, 
  icon,
  onClick 
}: { 
  to: string; 
  children: React.ReactNode; 
  icon?: React.ReactNode;
  onClick?: () => void;
}) => (
  <Link
    to={to}
    className="px-4 py-3 text-white hover:bg-white/20 rounded-md flex items-center gap-2 transition-colors"
    onClick={onClick}
  >
    {icon && <span>{icon}</span>}
    <span className="font-medium">{children}</span>
  </Link>
);

export default Header;
