import React from 'react';
import { FiLayers, FiMenu, FiX, FiArrowRight } from 'react-icons/fi';

interface NavbarProps {
  onLaunchDemo: () => void;
  onNavigate: (page: string) => void;
  currentView: string;
}

const Navbar: React.FC<NavbarProps> = ({ onLaunchDemo, onNavigate, currentView }) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleScroll = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    setIsOpen(false);
    
    // If not on home, go to home first, then scroll
    if (currentView !== 'home') {
      onNavigate('home');
      // Small timeout to allow the home page to render before scrolling
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const handleLogoClick = () => {
    onNavigate('home');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-panel border-b-0 border-b-slate-700/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2 cursor-pointer" onClick={handleLogoClick}>
            <div className="bg-gradient-to-br from-primary to-secondary p-2 rounded-lg">
              <FiLayers className="h-6 w-6 text-white" />
            </div>
            <span className="font-bold text-xl tracking-tight text-white">ClipCaddy</span>
          </div>
          
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-8">
              <a 
                href="#features" 
                onClick={(e) => handleScroll(e, 'features')}
                className="hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium text-slate-300"
              >
                Features
              </a>
              <a 
                href="#testimonials" 
                onClick={(e) => handleScroll(e, 'testimonials')}
                className="hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium text-slate-300"
              >
                Testimonials
              </a>
              <a 
                href="#pricing" 
                onClick={(e) => handleScroll(e, 'pricing')}
                className="hover:text-primary transition-colors px-3 py-2 rounded-md text-sm font-medium text-slate-300"
              >
                Pricing
              </a>
            </div>
          </div>

          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={onLaunchDemo}
              className="bg-white text-slate-900 hover:bg-slate-100 px-4 py-2 rounded-full text-sm font-semibold transition-all flex items-center gap-2 group"
            >
              Launch App
              <FiArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-white hover:bg-slate-700 focus:outline-none"
            >
              {isOpen ? <FiX className="h-6 w-6" /> : <FiMenu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden glass-panel border-t border-slate-700/50">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a 
              href="#features" 
              onClick={(e) => handleScroll(e, 'features')}
              className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Features
            </a>
            <a 
              href="#testimonials" 
              onClick={(e) => handleScroll(e, 'testimonials')}
              className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Testimonials
            </a>
            <a 
              href="#pricing" 
              onClick={(e) => handleScroll(e, 'pricing')}
              className="text-slate-300 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            >
              Pricing
            </a>
            <button 
              onClick={() => {
                setIsOpen(false);
                onLaunchDemo();
              }}
              className="w-full text-left bg-primary/20 text-primary hover:bg-primary/30 block px-3 py-2 rounded-md text-base font-medium mt-4"
            >
              Launch App
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;