import React, { useState, useEffect } from 'react';
import { LeafIcon, ArrowIcon } from '../utils/icons';
import { motion, AnimatePresence } from 'framer-motion';

const NavLink = ({ text, href = "#", hasDropdown = false }: { text: string; href?: string; hasDropdown?: boolean }) => {
  return (
    <a href={href} className="text-white/90 hover:text-white transition-colors text-sm font-medium flex items-center gap-1">
      {text}
      {hasDropdown && <ArrowIcon className="w-2 h-2 rotate-90 opacity-70" />}
    </a>
  );
};

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <>
      <motion.nav 
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-primary/90 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}
      >
        <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">
          
          {/* Logo */}
          <a href="/" className="flex items-center gap-2 group">
             <div className="text-white">
                <LeafIcon className="w-8 h-8" />
             </div>
             <span className="font-sans text-2xl font-bold text-white tracking-tight">
               Le Dieu
             </span>
          </a>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-10">
            <NavLink text="Home" href="/" hasDropdown />
            <NavLink text="About Us" href="/about-us" />
            <NavLink text="Services" href="/services" />
            <NavLink text="Blog" href="/blog" />
            <NavLink text="Pages" href="#" hasDropdown />
          </div>

          {/* Right Side Actions */}
          <div className="hidden lg:flex items-center gap-4">
             <a href="/get-started" className="relative px-6 py-3 bg-[#bbf7d0] text-[#0B1C15] rounded-full font-semibold text-sm hover:bg-[#86EFAC] transition-colors flex items-center gap-2">
                Get Started 
                <ArrowIcon className="w-3 h-3" />
             </a>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden text-white p-2"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-1.5 items-end">
              <span className={`block h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-2 w-6' : 'w-6'}`}></span>
              <span className={`block h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-6'}`}></span>
              <span className={`block h-0.5 bg-current transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-2 w-6' : 'w-4'}`}></span>
            </div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="fixed inset-0 bg-primary z-40 pt-24 px-8 flex flex-col gap-6 lg:hidden text-white"
          >
              {['Home', 'About Us', 'Services', 'Blog', 'Pages'].map((item, i) => (
                <a 
                  key={item}
                  href="#"
                  className="text-2xl font-bold border-b border-white/10 pb-4"
                >
                  {item}
                </a>
              ))}
              
              <div className="mt-8">
                <a href="/get-started" className="block w-full py-4 bg-[#bbf7d0] text-primary rounded-xl font-bold text-center">Get Started</a>
              </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBar;