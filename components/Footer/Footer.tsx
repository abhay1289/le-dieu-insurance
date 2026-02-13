'use client';

import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
   return (
      <footer className="bg-accent text-white pt-16 md:pt-32 pb-12 overflow-hidden relative">
         {/* Subtle dark overlay for depth */}
         <div className="absolute inset-0 bg-gradient-to-b from-black/[0.08] via-transparent to-black/[0.15] pointer-events-none" />

         <div className="container mx-auto px-6 md:px-12 relative z-10">

            {/* Grid Section */}
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-12 md:mb-32">
               {/* Brand Column */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="col-span-2 md:col-span-2 lg:col-span-1 space-y-6 sm:space-y-8"
               >
                  <a href="/" className="block group">
                     <img src="/images/ledieuinsurance_logo1 (2).png" alt="Le Dieu Insurance" className="h-8 sm:h-10 w-auto object-contain brightness-0 invert" />
                  </a>
                  <p className="text-white/70 leading-relaxed text-xs sm:text-sm font-medium max-w-xs">
                     IRDA Licensed Direct Insurance Broker since 2003. Providing specialized risk identification and claims excellence across India.
                  </p>
                  <div className="flex gap-3 sm:gap-4">
                     <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-accent active:bg-white active:text-accent active:scale-95 transition-all duration-300">
                        <svg width="14" height="14" viewBox="0 0 15 15" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M13.0515 0.957031H2.55151C1.58639 0.957031 0.801514 1.74191 0.801514 2.70703V13.207C0.801514 14.1722 1.58639 14.957 2.55151 14.957H7.80151V10.1445H6.05151V7.95703H7.80151V6.20703C7.80151 5.51084 8.07807 4.84316 8.57036 4.35088C9.06264 3.85859 9.73032 3.58203 10.4265 3.58203H12.1765V5.76953H11.3015C10.8185 5.76953 10.4265 5.72403 10.4265 6.20703V7.95703H12.614L11.739 10.1445H10.4265V14.957H13.0515C14.0166 14.957 14.8015 14.1722 14.8015 13.207V2.70703C14.8015 1.74191 14.0166 0.957031 13.0515 0.957031Z" /></svg>
                     </a>
                     <a href="#" className="w-9 h-9 sm:w-10 sm:h-10 border border-white/20 rounded-full flex items-center justify-center hover:bg-white hover:text-accent active:bg-white active:text-accent active:scale-95 transition-all duration-300">
                        <svg width="16" height="16" viewBox="0 0 17 17" fill="none" stroke="currentColor"><path d="M2.80151 14.957L7.83378 9.92476M7.83378 9.92476L2.80151 2.95703H6.13485L9.76925 7.9893M7.83378 9.92476L11.4682 14.957H14.8015L9.76925 7.9893M14.8015 2.95703L9.76925 7.9893" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                     </a>
                  </div>
               </motion.div>

               {/* Links Columns */}
               {[
                  {
                     title: "Main Pages",
                     links: [
                        { text: "Home", href: "/" },
                        { text: "About Us", href: "/about" },
                        { text: "Services", href: "/services" },
                        { text: "Solutions", href: "/solutions" },
                        { text: "Contact", href: "/contact" },
                     ]
                  },
                  {
                     title: "Specialized",
                     links: [
                        { text: "Risk Management", href: "/services" },
                        { text: "Policy Placement", href: "/services" },
                        { text: "Claims Excellence", href: "/services" },
                        { text: "Industry Expertise", href: "/solutions" },
                     ]
                  },
               ].map((column, idx) => (
                  <motion.div
                     key={idx}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: 0.1 + (idx * 0.1) }}
                  >
                     <h4 className="text-[11px] sm:text-sm font-bold uppercase tracking-widest mb-6 sm:mb-8 text-white">{column.title}</h4>
                     <ul className="space-y-3 sm:space-y-4 text-white/60 text-xs sm:text-sm font-medium">
                        {column.links.map(link => (
                           <li key={link.text}>
                              <a href={link.href} className="hover:text-white transition-colors duration-300 inline-block">
                                 {link.text}
                              </a>
                           </li>
                        ))}
                     </ul>
                  </motion.div>
               ))}

               {/* Hours Column */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.3 }}
               >
                  <h4 className="text-[11px] sm:text-sm font-bold uppercase tracking-widest mb-6 sm:mb-8 text-white">Hours</h4>
                  <ul className="space-y-2 text-white/60 text-[10px] sm:text-[11px] font-bold uppercase tracking-tight">
                     <li>Mon–Tue: 08:00 AM – 06:00 PM</li>
                     <li className="text-white">Wed: 02:00 PM – 08:00 PM</li>
                     <li>Thu: 08:00 AM – 08:00 PM</li>
                     <li>Fri: 08:00 AM – 04:00 PM</li>
                  </ul>
               </motion.div>

               {/* Headquarters Column */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
               >
                  <h4 className="text-[11px] sm:text-sm font-bold uppercase tracking-widest mb-6 sm:mb-8 text-white">Headquarters</h4>
                  <p className="text-white/60 text-[11px] sm:text-xs font-medium leading-relaxed">
                     Plot No 69 J.J. Tower First Floor,<br />
                     Zone-I, M.P. Nagar,<br />
                     Bhopal – 462011, India
                  </p>
                  <a href="tel:+917554294493" className="inline-flex items-center gap-2 mt-4 sm:mt-5 text-white text-xs sm:text-sm font-bold hover:text-white/80 transition-colors">
                     <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2"><path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>
                     +91 0755-4294493
                  </a>
               </motion.div>
            </div>

            {/* Big Footer Text */}
            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               whileHover={{ opacity: 0.15, scale: 1.02 }}
               className="absolute bottom-[5%] sm:bottom-[-2%] left-0 w-full text-center font-heading font-extrabold text-[15vw] sm:text-[18vw] leading-none select-none text-white/[0.06] tracking-tighter pointer-events-auto cursor-default transition-all duration-700"
            >
               Le Dieu
            </motion.div>


            <div className="w-full h-px bg-white/15 my-6 sm:my-8" />

            <div className="flex flex-col sm:flex-row justify-between items-center text-white/40 text-[9px] sm:text-[10px] uppercase tracking-widest gap-3 sm:gap-4 relative z-10 font-bold">
               <div>Copyright © {new Date().getFullYear()} Le Dieu Insurance</div>
               <div>All Rights Reserved</div>
               <div>IRDA Licensed Broker</div>
            </div>

         </div>
      </footer>
   );
};

export default Footer;
