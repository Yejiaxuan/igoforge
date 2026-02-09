import React, { useState, useEffect } from 'react';
import Button from './ui/Button';
import { Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'glass-nav h-14' : 'bg-transparent h-16'}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
        <div className="flex justify-between items-center h-full">
          <div className="flex items-center gap-8">
            <a href="#" className="flex-shrink-0 flex items-center gap-2 group">
              <span className="font-semibold text-lg tracking-tight text-primary group-hover:opacity-70 transition-opacity">igoforge</span>
            </a>
            <div className="hidden md:flex items-center space-x-6">
              <NavLink href="#infrastructure">Infrastructure</NavLink>
              <NavLink href="#features">Features</NavLink>
              <NavLink href="#pricing">Pricing</NavLink>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <a href="#" className="text-xs text-secondary hover:text-primary transition-colors">Log in</a>
            <Button variant="primary" size="sm">Sign Up</Button>
          </div>
          
          <div className="flex items-center md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-primary p-2"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass-nav absolute top-full left-0 right-0 border-t border-gray-100 h-screen bg-white">
          <div className="px-6 py-8 space-y-4 flex flex-col">
            <MobileNavLink href="#infrastructure" onClick={() => setIsOpen(false)}>Infrastructure</MobileNavLink>
            <MobileNavLink href="#features" onClick={() => setIsOpen(false)}>Features</MobileNavLink>
            <MobileNavLink href="#pricing" onClick={() => setIsOpen(false)}>Pricing</MobileNavLink>
            <div className="pt-8 flex flex-col space-y-4">
              <a href="#" className="text-lg font-medium text-secondary hover:text-primary">Log in</a>
              <Button variant="primary" size="lg" fullWidth>Sign Up</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

const NavLink: React.FC<{ href: string; children: React.ReactNode }> = ({ href, children }) => (
  <a href={href} className="text-xs text-primary/80 hover:text-primary transition-colors tracking-wide">
    {children}
  </a>
);

const MobileNavLink: React.FC<{ href: string; children: React.ReactNode; onClick: () => void }> = ({ href, children, onClick }) => (
  <a 
    href={href} 
    onClick={onClick}
    className="block text-2xl font-semibold text-primary hover:text-primary/70"
  >
    {children}
  </a>
);

export default Navbar;