import React from 'react';
import { motion } from 'framer-motion';

const Footer = () => {
  return (
    <footer className="bg-primary text-white pt-28 pb-10 overflow-hidden relative">
      <div className="container mx-auto px-4 md:px-8 relative z-10">
        
        {/* Top Section */}
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="flex flex-col lg:flex-row justify-between items-start gap-12 mb-24"
        >
           <h2 className="text-4xl md:text-6xl font-medium max-w-2xl tracking-tight leading-[1.1]">
             We’ll Find the Right <span className="text-accent italic">Insurance</span> for You
           </h2>
           
           <div className="flex flex-col md:flex-row gap-12 lg:items-center">
              <div>
                 <p className="text-white/40 mb-2 text-xs uppercase tracking-widest">Phone</p>
                 <a href="tel:+919876543210" className="text-xl font-medium hover:text-accent transition-colors">+91 98765 43210</a>
              </div>
              <div>
                 <p className="text-white/40 mb-2 text-xs uppercase tracking-widest">Email</p>
                 <a href="mailto:info@ledieu.com" className="text-xl font-medium hover:text-accent transition-colors">info@ledieu.com</a>
              </div>
           </div>
        </motion.div>

        <div className="w-full h-px bg-white/5 mb-20"></div>

        {/* Middle Section */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          transition={{ staggerChildren: 0.1 }}
          variants={{
             hidden: { opacity: 0 },
             visible: { opacity: 1 }
          }}
          className="grid md:grid-cols-4 gap-12 mb-32"
        >
           <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }} className="space-y-8">
              <a href="/" className="block">
                 {/* Replace src with your uploaded logo file */}
                 <img 
                   src="https://cdn.prod.website-files.com/68eb347fff39988d379df7a3/68eb484b4b2db8555260bf49_footer-logo.svg" 
                   alt="Le Dieu Insurance" 
                   className="h-10 w-auto opacity-90" 
                 />
              </a>
              <p className="text-white/60 leading-relaxed text-sm font-light">
                 Transforming insurance into simplicity and certainty, so your life remains full of the possibility.
              </p>
              <div className="flex gap-4">
                 <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300">
                    <svg width="14" height="14" viewBox="0 0 15 15" fill="currentColor"><path fillRule="evenodd" clipRule="evenodd" d="M13.0515 0.957031H2.55151C1.58639 0.957031 0.801514 1.74191 0.801514 2.70703V13.207C0.801514 14.1722 1.58639 14.957 2.55151 14.957H7.80151V10.1445H6.05151V7.95703H7.80151V6.20703C7.80151 5.51084 8.07807 4.84316 8.57036 4.35088C9.06264 3.85859 9.73032 3.58203 10.4265 3.58203H12.1765V5.76953H11.3015C10.8185 5.76953 10.4265 5.72403 10.4265 6.20703V7.95703H12.614L11.739 10.1445H10.4265V14.957H13.0515C14.0166 14.957 14.8015 14.1722 14.8015 13.207V2.70703C14.8015 1.74191 14.0166 0.957031 13.0515 0.957031Z"/></svg>
                 </a>
                 <a href="#" className="w-10 h-10 border border-white/10 rounded-full flex items-center justify-center hover:bg-white hover:text-primary transition-all duration-300">
                    <svg width="16" height="16" viewBox="0 0 17 17" fill="none" stroke="currentColor"><path d="M2.80151 14.957L7.83378 9.92476M7.83378 9.92476L2.80151 2.95703H6.13485L9.76925 7.9893M7.83378 9.92476L11.4682 14.957H14.8015L9.76925 7.9893M14.8015 2.95703L9.76925 7.9893" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/></svg>
                 </a>
              </div>
           </motion.div>

           <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <h4 className="text-lg font-bold mb-6">Main Pages</h4>
              <ul className="space-y-4 text-white/60 text-sm">
                 <li><a href="/" className="hover:text-white transition-colors">Home</a></li>
                 <li><a href="/about-us" className="hover:text-white transition-colors">About Us</a></li>
                 <li><a href="/services" className="hover:text-white transition-colors">Services</a></li>
                 <li><a href="/contact-us" className="hover:text-white transition-colors">Contact</a></li>
                 <li><a href="/blog" className="hover:text-white transition-colors">Blog</a></li>
              </ul>
           </motion.div>

           <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <h4 className="text-lg font-bold mb-6">CMS Pages</h4>
              <ul className="space-y-4 text-white/60 text-sm">
                 <li><a href="#" className="hover:text-white transition-colors">Service Details</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Agent Details</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Blog Details</a></li>
              </ul>
           </motion.div>

           <motion.div variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}>
              <h4 className="text-lg font-bold mb-6">Information</h4>
              <ul className="space-y-4 text-white/60 text-sm">
                 <li><a href="#" className="hover:text-white transition-colors">Style Guide</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Changelog</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Page Not Found</a></li>
                 <li><a href="#" className="hover:text-white transition-colors">Password Protected</a></li>
              </ul>
           </motion.div>
        </motion.div>

        {/* Big Footer Text */}
        <motion.div 
           initial={{ opacity: 0 }}
           whileInView={{ opacity: 0.05 }}
           viewport={{ once: true }}
           transition={{ duration: 1.5, delay: 0.2 }}
           className="absolute bottom-10 left-0 w-full text-center font-bold text-[16vw] leading-none select-none pointer-events-none"
        >
           <span>Le Dieu</span>
        </motion.div>

        <div className="w-full h-px bg-white/5 my-8"></div>

        <div className="flex flex-col md:flex-row justify-between items-center text-white/40 text-xs gap-4 relative z-10">
           <div>Copyright © by Le Dieu Insurance</div>
           <div>All Rights Reserved</div>
           <div>Powered by React</div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;