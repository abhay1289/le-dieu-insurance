import React from 'react';
import { ArrowIcon } from '../utils/icons';
import { motion } from 'framer-motion';

const BlogCard = ({ category, title, summary, author, date, img, authorImg }: any) => (
  <motion.div 
    variants={{
      hidden: { opacity: 0, y: 30 },
      visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
    }}
    className="group cursor-pointer"
  >
    <div className="rounded-3xl overflow-hidden mb-6 relative">
      <img src={img} alt={title} className="w-full h-64 object-cover transform group-hover:scale-105 transition-transform duration-700" />
      <div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-primary px-4 py-1.5 rounded-full text-sm font-semibold">
        {category}
      </div>
    </div>
    
    <h3 className="text-xl font-bold text-primary mb-3 group-hover:text-accent transition-colors">
      {title}
    </h3>
    <p className="text-gray-600 mb-6 line-clamp-2">
      {summary}
    </p>
    
    <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
      <img src={authorImg} alt={author} className="w-10 h-10 rounded-full object-cover" />
      <div>
        <h4 className="font-semibold text-sm text-primary">{author}</h4>
        <p className="text-xs text-gray-500">{date}</p>
      </div>
    </div>
  </motion.div>
);

const Blog = () => {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 md:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
           <motion.div 
             initial={{ opacity: 0, x: -30 }}
             whileInView={{ opacity: 1, x: 0 }}
             viewport={{ once: true }}
             transition={{ duration: 0.8 }}
           >
              <div className="flex items-center gap-3 mb-4">
                <span className="uppercase tracking-widest text-sm font-medium text-gray-500">Our Blog</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold text-primary">
                Latest News & <span className="text-accent italic">Articles</span>
              </h2>
           </motion.div>
           <motion.a 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              href="/blog" 
              className="inline-flex items-center gap-2 text-primary font-semibold border-b border-primary pb-1 hover:text-accent hover:border-accent transition-colors"
           >
              View All Articles <ArrowIcon />
           </motion.a>
        </div>

        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          transition={{ staggerChildren: 0.2 }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
           <BlogCard 
             category="Family"
             title="Secure Your Family’s Future With Intelligent Insurance"
             summary="Secure your family's health finances by insurance plan for your needs."
             author="Arjun Mehta"
             date="Oct 15, 2025"
             img="https://images.unsplash.com/photo-1609139003551-ee40494ec63e?q=75&w=800&auto=format&fit=crop"
             authorImg="https://images.unsplash.com/photo-1595514690906-8d6263544971?q=75&w=150&auto=format&fit=crop"
           />
           <BlogCard 
             category="Health"
             title="Choose the Right Health Insurance for Your Family"
             summary="Your family's health is your most of the precious asset."
             author="Kavita Sharma"
             date="Oct 15, 2025"
             img="https://images.unsplash.com/photo-1605664041952-4a2855d92631?q=75&w=800&auto=format&fit=crop"
             authorImg="https://images.unsplash.com/photo-1554151228-14d9def656ec?q=75&w=150&auto=format&fit=crop"
           />
           <BlogCard 
             category="Business"
             title="Insurance for Your Business the Essential Protection"
             summary="Insurance for your business essential foundation of your resilience."
             author="Ravi Verma"
             date="Oct 15, 2025"
             img="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=75&w=800&auto=format&fit=crop"
             authorImg="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=75&w=150&auto=format&fit=crop"
           />
        </motion.div>

      </div>
    </section>
  );
};

export default Blog;