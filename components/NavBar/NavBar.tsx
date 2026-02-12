import React, { useState, useEffect } from 'react';
import { ArrowIcon } from '../../utils/icons';
import { motion, AnimatePresence } from 'framer-motion';

const NavLink = ({ text, href = "#", hasDropdown = false }: { text: string; href?: string; hasDropdown?: boolean }) => {
  return (
    <a
      href={href}
      className="text-primary/70 hover:text-primary transition-colors text-[13px] font-bold uppercase tracking-widest flex items-center gap-1.5"
    >
      {text}
      {hasDropdown && <ArrowIcon className="w-2 h-2 rotate-90 opacity-40" />}
    </a>
  );
};

const NavBar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-700 ease-[0.16,1,0.3,1] ${scrolled ? 'bg-white/90 backdrop-blur-xl py-4 shadow-sm border-b border-gray-100' : 'bg-white py-6 border-b border-gray-50'
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* Logo */}
        <motion.a
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
          href="/"
          className="flex items-center"
        >
          <img
            src="/images/ledieuinsurance_logo1 (2).png"
            alt="Le Dieu Insurance"
            className={`transition-all duration-500 ${scrolled ? 'h-8 md:h-9' : 'h-10 md:h-11'} w-auto object-contain`}
          />
        </motion.a>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-10">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={{
              visible: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } }
            }}
            className="flex items-center gap-10"
          >
            {[
              { text: "Home", href: "/" },
              { text: "About Us", href: "#about" },
              { text: "Services", href: "#services" },
              { text: "Team", href: "#team" },
              { text: "Contact", href: "#contact" }
            ].map((link, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
              >
                <NavLink {...link} />
              </motion.div>
            ))}
          </motion.div>
        </nav>

        {/* Actions */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any, delay: 0.4 }}
          className="hidden lg:flex items-center gap-8"
        >
          <a
            href="/get-started"
            className="bg-primary text-white px-8 py-3.5 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-accent hover:text-primary transition-all duration-300 shadow-lg shadow-primary/5"
          >
            Get Started
          </a>
        </motion.div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between items-end">
            <span className={`block h-[1.5px] bg-current transition-all ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-2' : 'w-6'}`}></span>
            <span className={`block h-[1.5px] bg-current transition-all ${isMobileMenuOpen ? 'opacity-0' : 'w-6'}`}></span>
            <span className={`block h-[1.5px] bg-current transition-all ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-4'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] as any }}
            className="fixed inset-0 top-0 pt-24 bg-white z-[40] flex flex-col lg:hidden border-t border-gray-100"
          >
            <div className="flex flex-col p-8 gap-6">
              {['Home', 'About Us', 'Services', 'Team', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase().replace(' ', '-')}`}
                  className="text-3xl font-bold text-primary tracking-tight py-4 border-b border-gray-50 flex justify-between items-center"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {item}
                  <ArrowIcon className="w-4 h-4 -rotate-45 opacity-20" />
                </a>
              ))}
              <div className="mt-12 space-y-4">
                <a href="/get-started" className="block w-full py-5 bg-primary text-white rounded-xl font-bold text-center text-sm uppercase tracking-widest shadow-xl shadow-primary/10">
                  Request a Consultation
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;