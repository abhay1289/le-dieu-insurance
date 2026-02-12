import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '../../utils/icons';

const testimonials = [
  {
    name: "Rajesh Kumar",
    role: "CEO of TechVantage",
    quote: "Choosing Le Dieu Insurance was one of the best decisions we've made. The comprehensive coverage and local expertise have given us incredible peace of mind.",
    img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=75&w=200&auto=format&fit=crop"
  },
  {
    name: "Amit Shah",
    role: "Architect",
    quote: "Working with the Le Dieu team was seamless. They understood my portfolio requirements and delivered a plan that fits perfectly.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=75&w=200&auto=format&fit=crop"
  },
  {
    name: "Sneha Reddy",
    role: "Founder, GreenIndia",
    quote: "I was impressed by the personalized service. They really took the time to understand my unique needs and found a plan that fits my budget perfectly.",
    img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=75&w=200&auto=format&fit=crop"
  },
  {
    name: "Vikram Malhotra",
    role: "Director, Malhotra Group",
    quote: "Reliable, transparent, and efficient. I've filed a claim once and the process was incredibly smooth. Highly recommend their services.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=75&w=200&auto=format&fit=crop"
  },
  {
    name: "Priya Desai",
    role: "Freelance Designer",
    quote: "The customer support is unmatched. Whenever I have a question, I get a quick and helpful response. It feels great to be in safe hands.",
    img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=75&w=200&auto=format&fit=crop"
  }
];

interface TestimonialCardProps {
  name: string;
  role: string;
  quote: string;
  img: string;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ name, role, quote, img }) => (
  <div 
    className="w-[450px] flex-shrink-0 bg-white p-12 mx-6 border-l border-gray-100 hover:border-accent transition-colors duration-500"
  >
    <div className="flex items-center gap-1 mb-6 text-accent">
       <StarIcon className="w-4 h-4" />
       <StarIcon className="w-4 h-4" />
       <StarIcon className="w-4 h-4" />
       <StarIcon className="w-4 h-4" />
       <StarIcon className="w-4 h-4" />
    </div>

    <h3 className="text-2xl font-light text-primary leading-relaxed mb-10 tracking-tight">
      "{quote}"
    </h3>

    <div className="flex items-center gap-4">
      <img src={img} alt={name} className="w-12 h-12 rounded-full object-cover grayscale" />
      <div>
        <h4 className="text-sm font-bold text-primary uppercase tracking-widest">{name}</h4>
        <p className="text-xs text-gray-400 mt-1 font-medium">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-32 bg-white overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12 mb-24">
        <div className="flex flex-col items-center justify-center text-center">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6 }}
             className="flex items-center gap-3 mb-6"
           >
              <span className="w-8 h-px bg-primary"></span>
              <span className="text-xs font-bold tracking-[0.2em] text-primary uppercase">Voices of Trust</span>
              <span className="w-8 h-px bg-primary"></span>
           </motion.div>
           
           <motion.h2 
             initial={{ opacity: 0, y: 20 }}
             whileInView={{ opacity: 1, y: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.6, delay: 0.1 }}
             className="text-5xl md:text-7xl font-bold text-primary tracking-tighter"
           >
             Client Perspectives.
           </motion.h2>
        </div>
      </div>

      <div className="relative w-full">
        <div className="absolute left-0 top-0 bottom-0 w-40 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-40 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>
        
        <div className="flex overflow-hidden">
          <motion.div 
            className="flex"
            animate={{ x: "-50%" }}
            transition={{ 
              duration: 60, 
              ease: "linear", 
              repeat: Infinity 
            }}
            style={{ width: "fit-content" }}
          >
            {[...testimonials, ...testimonials].map((item, index) => (
               <TestimonialCard 
                 key={index}
                 {...item}
               />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;