import React from 'react';
import { motion } from 'framer-motion';
import { StarIcon } from '../../utils/icons';

const testimonials = [
  {
    name: "James Nolan",
    role: "Architect Designer",
    quote: "Working with Le Dieu was seamless from start to finish. The team was professional, knowledgeable, and answered all our questions. Our coverage is performing better than expected, and we're thrilled with the service. Highly recommend!",
    img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=75&w=200&auto=format&fit=crop"
  },
  {
    name: "Daniel Reyes",
    role: "Project Manager",
    quote: "We were initially nervous about switching, but Le Dieu made the entire process incredibly easy and stress-free. The team was fast, efficient, and very courteous. We're loving the peace of mind.",
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=75&w=200&auto=format&fit=crop"
  },
  {
    name: "Liam Turner",
    role: "Architect Designer",
    quote: "Le Dieu made getting insured simple, affordable, and truly hassle-free. The process was quick, and their friendly support team guided us through every step. We're already seeing value and love knowing we're confidently protected.",
    img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=75&w=200&auto=format&fit=crop"
  },
  {
    name: "Sophia Bennett",
    role: "CEO of ACD Solution",
    quote: "I did a lot of thorough research before choosing Le Dieu, and I'm very glad I did. Their service was consistently outstanding, and the results truly speak for themselves. Our business is secure, and we feel good about our decision every day.",
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
    className="w-[85vw] md:w-[500px] flex-shrink-0 bg-white p-6 md:p-8 mx-4 border border-gray-200 rounded-xl hover:shadow-lg transition-all duration-300"
  >
    <div className="flex items-center gap-4 mb-6">
      <img src={img} alt={name} className="w-14 h-14 rounded-full object-cover" />
      <div>
        <h4 className="text-xl font-bold text-gray-900 leading-tight">{name}</h4>
        <p className="text-sm text-gray-500 font-medium">{role}</p>
      </div>
    </div>

    <p className="text-gray-700 leading-relaxed font-normal text-[17px]">
      {quote}
    </p>
  </div>
);

const Testimonials = () => {
  return (
    <section className="py-16 md:py-32 bg-white overflow-hidden border-t border-gray-100">
      <div className="container mx-auto px-6 md:px-12 mb-6 md:mb-10">
        <div className="flex flex-col items-center justify-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
            className="flex items-center gap-4 mb-4 md:mb-8"
          >

            <span className="text-xs font-bold tracking-[0.3em] text-accent uppercase">Voices of Trust</span>
          </motion.div>

          <div className="overflow-hidden py-2">
            <motion.h2
              initial={{ y: "100%" }}
              whileInView={{ y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
              className="text-4xl sm:text-5xl md:text-[73px] font-bold text-primary tracking-tighter leading-[1.1]"
            >
              <span className="text-primary tracking-tighter">Client</span> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent">Perspectives</span>
            </motion.h2>
          </div>
        </div>
      </div>

      <div className="relative w-full">
        {/* Soft Gradient Masks for Premium Feel */}
        <div className="absolute left-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-r from-white via-white/80 to-transparent z-20 pointer-events-none"></div>
        <div className="absolute right-0 top-0 bottom-0 w-32 md:w-64 bg-gradient-to-l from-white via-white/80 to-transparent z-20 pointer-events-none"></div>

        <div className="flex overflow-hidden py-10">
          <motion.div
            className="flex gap-8 md:gap-12"
            animate={{ x: "-50%" }}
            transition={{
              duration: 80,
              ease: "linear",
              repeat: Infinity
            }}
            style={{ width: "max-content" }}
          >
            {[...testimonials, ...testimonials, ...testimonials].map((item, index) => (
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