import React, { useState, useEffect } from 'react';
import { ArrowIcon } from '../../utils/icons';
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from 'framer-motion';

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
  const { scrollY } = useScroll();

  // Handle scroll state
  useMotionValueEvent(scrollY, "change", (latest) => {
    setScrolled(latest > 20);
  });

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-[9999] transition-[background-color,padding,box-shadow,border-color] duration-700 ease-[0.16,1,0.3,1] ${scrolled
        ? 'bg-white backdrop-blur-xl py-4 shadow-sm border-b border-gray-100'
        : 'bg-white py-6 border-b border-gray-50'
        }`}
    >
      <div className="container mx-auto px-6 md:px-12 flex items-center justify-between">

        {/* Logo */}
        <motion.a
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          href="/"
          className="flex items-center relative z-[10001]"
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
              { text: "About Us", href: "/about" },
              { text: "Services", href: "/services" },
              { text: "Solutions", href: "/solutions" },
              { text: "Contact", href: "/contact" }
            ].map((link, i) => (
              <motion.div
                key={i}
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 }
                }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
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
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1], delay: 0.4 }}
          className="hidden lg:flex items-center gap-8"
        >
          <a
            href="/get-started"
            className="bg-accent text-white px-8 py-3.5 rounded-full text-[11px] font-bold uppercase tracking-[0.15em] hover:bg-accent-hover hover:text-white transition-all duration-300 shadow-lg shadow-primary/5 active:bg-accent active:text-white active:scale-95 active:shadow-none"
          >
            Connect With Us
          </a>
        </motion.div>

        {/* Mobile Toggle */}
        <button
          className="lg:hidden text-primary relative z-[10001] w-10 h-10 flex items-center justify-center -mr-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle Menu"
        >
          <div className="w-6 h-5 flex flex-col justify-between items-end">
            <span className={`block h-[1.5px] bg-current transition-all duration-300 ${isMobileMenuOpen ? 'w-6 rotate-45 translate-y-2.5' : 'w-6'}`}></span>
            <span className={`block h-[1.5px] bg-current transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : 'w-6'}`}></span>
            <span className={`block h-[1.5px] bg-current transition-all duration-300 ${isMobileMenuOpen ? 'w-6 -rotate-45 -translate-y-2' : 'w-4'}`}></span>
          </div>
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: '-100%' }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: '-100%' }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="fixed inset-0 bg-white z-[10000] flex flex-col lg:hidden h-[100dvh]"
          >
            {/* Mobile Menu Header - Spacer to account for the fixed header height */}
            <div className="flex items-center justify-between px-6 py-6 border-b border-gray-50 opacity-0 pointer-events-none">
              <div className="h-8 md:h-9"></div> {/* Placeholder for logic */}
            </div>

            <div className="flex-1 overflow-y-auto px-6 py-8 mt-20">
              <div className="flex flex-col gap-2">
                {[
                  { text: 'Home', href: '/' },
                  { text: 'About Us', href: '/about' },
                  { text: 'Services', href: '/services' },
                  { text: 'Solutions', href: '/solutions' },
                  { text: 'Contact', href: '/contact' }
                ].map((item, index) => (
                  <motion.a
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 + (index * 0.1), duration: 0.5 }}
                    key={item.text}
                    href={item.href}
                    className="text-4xl font-bold text-primary tracking-tight py-5 border-b border-gray-50 flex justify-between items-center group active:text-accent transition-colors"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    {item.text}
                    <ArrowIcon className="w-5 h-5 -rotate-45 opacity-20 group-active:opacity-100 group-active:text-accent transition-all" />
                  </motion.a>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="mt-12"
              >
                <a
                  href="/get-started"
                  className="block w-full py-5 bg-primary text-white rounded-2xl font-bold text-center text-sm uppercase tracking-widest shadow-xl shadow-primary/10 active:scale-95 transition-transform"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Request a Consultation
                </a>

                <div className="mt-10 pt-10 border-t border-gray-50">
                  <span className="text-[10px] font-bold text-gray-400 uppercase tracking-[0.2em] block mb-4">Get in touch</span>
                  <p className="text-primary font-medium">info@ledieuinsurance.com</p>
                  <p className="text-primary font-medium mt-1">+91 0755 425 2111</p>
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default NavBar;