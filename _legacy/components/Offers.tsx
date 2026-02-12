import React from 'react';
import { OfferIcon1, OfferIcon2, OfferIcon3, ArrowIcon } from '../utils/icons';
import { motion } from 'framer-motion';

const OfferCard = ({ icon, title, desc, img, reverse = false, index }: { icon: React.ReactNode, title: string, desc: string, img: string, reverse?: boolean, index: number }) => (
  <motion.div 
    initial={{ opacity: 0, y: 50 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, margin: "-100px" }}
    transition={{ duration: 0.8, delay: index * 0.1 }}
    className={`flex flex-col lg:flex-row ${reverse ? 'lg:flex-row-reverse' : ''} bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-shadow duration-300`}
  >
     <div className="lg:w-1/2 relative h-64 lg:h-auto">
        <img src={img} alt={title} className="w-full h-full object-cover absolute inset-0" />
     </div>
     <div className="lg:w-1/2 p-10 lg:p-12 flex flex-col justify-center">
        <div className="mb-6">{icon}</div>
        <h3 className="text-2xl font-bold text-primary mb-4">{title}</h3>
        <p className="text-gray-600 mb-8 leading-relaxed">{desc}</p>
        <a href="/contact-us" className="inline-flex items-center gap-2 text-primary font-semibold border-b border-primary pb-1 hover:text-accent hover:border-accent transition-colors">
            Contact Us <ArrowIcon />
        </a>
     </div>
  </motion.div>
);

const Offers = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 md:px-8">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-3 mb-4">
             <span className="uppercase tracking-widest text-sm font-medium text-gray-500">Our Offers</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-primary">
            We Provide Trustworthy Coverage <br /><span className="text-accent italic">for Every Need</span>
          </h2>
        </motion.div>

        <div className="space-y-8">
          <OfferCard 
             index={0}
             icon={<OfferIcon1 />}
             title="Free Policy Termination"
             desc="We believe in a complete flexibility for our clients. That’s why we offer free policy termination with no hidden charges or penalties."
             img="https://images.unsplash.com/photo-1596395811776-69d80d22c953?q=75&w=1200&auto=format&fit=crop"
          />
          <OfferCard 
             index={1}
             reverse
             icon={<OfferIcon2 />}
             title="Money Back Guarantee"
             desc="Your trust is paramount. If you are not satisfied with our services within the first 30 days, we ensure a hassle-free money back guarantee."
             img="https://images.unsplash.com/photo-1629452818968-3c401347045e?q=75&w=1200&auto=format&fit=crop"
          />
          <OfferCard 
             index={2}
             icon={<OfferIcon3 />}
             title="Quick Help Support"
             desc="Our dedicated support team is available round the clock to assist you with claims and queries instantly."
             img="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=75&w=1200&auto=format&fit=crop"
          />
        </div>
      </div>
    </section>
  );
};

export default Offers;