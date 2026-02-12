import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
   return (
      <footer className="bg-primary text-white pt-32 pb-12 overflow-hidden relative">
         <div className="container mx-auto px-6 md:px-12 relative z-10">



            {/* Middle Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 md:gap-12 mb-16 md:mb-32">
               {/* Brand Column */}

               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="space-y-8"
               >
                  <a href="/" className="block group">
                     <img src="/images/ledieuinsurance_logo1 (2).png" alt="Le Dieu Insurance" className="h-10 w-auto object-contain" />
                  </a>
                  <p className="text-white/60 leading-relaxed text-sm font-medium max-w-xs">
                     IRDA Licensed Direct Insurance Broker since 2003. Providing specialized risk identification and claims excellence across India.
                  </p>
                  <div className="flex gap-4">
                     <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-primary active:bg-white active:text-primary active:scale-95 transition-all duration-300">
                        <svg width="14" height="14" viewBox="0 0 15 15" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M13.0515 0.957031H2.55151C1.58639 0.957031 0.801514 1.74191 0.801514 2.70703V13.207C0.801514 14.1722 1.58639 14.957 2.55151 14.957H7.80151V10.1445H6.05151V7.95703H7.80151V6.20703C7.80151 5.51084 8.07807 4.84316 8.57036 4.35088C9.06264 3.85859 9.73032 3.58203 10.4265 3.58203H12.1765V5.76953H11.3015C10.8185 5.76953 10.4265 5.72403 10.4265 6.20703V7.95703H12.614L11.739 10.1445H10.4265V14.957H13.0515C14.0166 14.957 14.8015 14.1722 14.8015 13.207V2.70703C14.8015 1.74191 14.0166 0.957031 13.0515 0.957031Z" /></svg>
                     </a>
                     <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-primary active:bg-white active:text-primary active:scale-95 transition-all duration-300">
                        <svg width="16" height="16" viewBox="0 0 17 17" fill="none" stroke="currentColor"><path d="M2.80151 14.957L7.83378 9.92476M7.83378 9.92476L2.80151 2.95703H6.13485L9.76925 7.9893M7.83378 9.92476L11.4682 14.957H14.8015L9.76925 7.9893M14.8015 2.95703L9.76925 7.9893" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" /></svg>
                     </a>
                  </div>
               </motion.div>

               {/* Links Columns */}
               {[
                  { title: "Main Pages", links: ["Home", "About Us", "Services", "Contact", "Blog"] },
                  { title: "Specialized", links: ["Risk Management", "Policy Placement", "Claims Excellence", "Industry Expertise"] },
               ].map((column, idx) => (
                  <motion.div
                     key={idx}
                     initial={{ opacity: 0, y: 20 }}
                     whileInView={{ opacity: 1, y: 0 }}
                     viewport={{ once: true }}
                     transition={{ duration: 0.5, delay: 0.1 + (idx * 0.1) }}
                  >
                     <h4 className="text-sm font-bold uppercase tracking-widest mb-8">{column.title}</h4>
                     <ul className="space-y-4 text-white/60 text-sm font-medium">
                        {column.links.map(link => (
                           <li key={link}><a href="#" className="hover:text-white transition-colors">{link}</a></li>
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
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Hours</h4>
                  <ul className="space-y-2 text-white/60 text-[11px] font-bold uppercase tracking-tighter">
                     <li>Mon-Tue: 08:00AM - 06:00PM</li>
                     <li className="text-accent">Wed: 02:00PM - 08:00PM</li>
                     <li>Thu: 08:00AM - 08:00PM</li>
                     <li>Fri: 08:00AM - 04:00PM</li>
                  </ul>
               </motion.div>

               {/* Headquarters Column */}
               <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.4 }}
               >
                  <h4 className="text-sm font-bold uppercase tracking-widest mb-8">Headquarters</h4>
                  <p className="text-white/60 text-xs font-medium leading-relaxed">
                     Plot No 69 J.J. Tower First Floor,<br />
                     Zone-I, M.P. Nagar,<br />
                     Bhopal - 462011, India
                  </p>
               </motion.div>
            </div>

            {/* Big Footer Text */}
            <motion.div
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 0.1 }}
               whileHover={{ opacity: 0.3, scale: 1.02 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="absolute bottom-[-5%] left-0 w-full text-center font-bold text-[18vw] leading-none select-none text-white tracking-tighter cursor-pointer transition-all duration-500"
            >
               <span className="opacity-10 lg:opacity-30">Le Dieu</span>
            </motion.div>


            <div className="w-full h-px bg-white/10 my-8"></div>

            <div className="flex flex-col md:flex-row justify-between items-center text-white/40 text-[10px] uppercase tracking-widest gap-4 relative z-10 font-bold">
               <div>Copyright © by Le Dieu Insurance</div>
               <div>All Rights Reserved</div>
               <div>Powered by React</div>
            </div>

         </div>
      </footer>
   );
};

export default Footer;