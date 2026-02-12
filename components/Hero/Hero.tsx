import React, { useState, useEffect } from 'react';
import { ArrowIcon } from '../../utils/icons';
import { motion, AnimatePresence } from 'framer-motion';

const heroImages = [
  "/images/cheerful-family-2026-01-07-07-06-23-utc.jpg",
  "/images/coffee-date-bench-or-old-couple-in-park-or-nature-2026-01-09-11-19-50-utc.jpg",
  "/images/phone-call-busy-dad-and-stress-from-kids-childre-2026-01-09-09-37-29-utc.jpg"
];

const Hero = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImage((prev) => (prev + 1) % heroImages.length);
    }, 5000); // Change image every 5 seconds
    return () => clearInterval(timer);
  }, []);

  const textRevealVariants = {
    hidden: { y: "100%" },
    visible: {
      y: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1] as any
      }
    }
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
        ease: [0.16, 1, 0.3, 1] as any
      }
    }
  };

  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden font-sans bg-black">

      {/* Premium Background Slider */}
      <div className="absolute inset-0 z-0">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentImage}
            initial={{ opacity: 0, scale: 1 }}
            animate={{ opacity: 1, scale: 1.15 }}
            exit={{ opacity: 0, scale: 1.2 }}
            transition={{
              opacity: { duration: 1.5, ease: [0.16, 1, 0.3, 1] as any },
              scale: { duration: 10, ease: "linear" }
            }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={heroImages[currentImage]}
              alt="Background"
              className="w-full h-full object-cover"
            />
          </motion.div>
        </AnimatePresence>

        {/* Premium Overlays - Subtle dark gradient for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90 md:from-black/65 md:via-black/45 md:to-black/85 z-10" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20 h-full flex flex-col justify-center">
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center h-full pt-32 md:pt-20 pb-16 md:pb-0">


          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-3xl"
          >
            <div className="overflow-hidden mb-4 md:mb-8">
              <motion.div
                variants={textRevealVariants}
                className="inline-flex items-center gap-3 px-4 py-2 bg-white/[0.03] backdrop-blur-md border border-white/10 rounded-full"
              >

                <span className="text-white/90 text-[10px] md:text-xs font-bold tracking-[0.3em] uppercase">
                  Premium Insurance
                </span>
              </motion.div>
            </div>

            {/* Masked Text Reveal Animation */}
            <div className="mb-4 md:mb-8">
              <div className="overflow-hidden">
                <motion.h1
                  variants={textRevealVariants}
                  className="text-white tracking-tight drop-shadow-lg block font-bold leading-[1.1] md:leading-[1.1]"
                  style={{ fontSize: 'clamp(2.5rem, 9vw, 5rem)' }}
                >
                  Protecting Your
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  variants={textRevealVariants}
                  className="font-bold text-white block leading-[1.1] md:leading-[1.1]"
                  style={{ fontSize: 'clamp(2.5rem, 9vw, 5rem)' }}
                >
                  Future & Legacy
                </motion.h1>
              </div>
            </div>

            <div className="overflow-hidden mb-6 md:mb-12">
              <motion.p
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as any } } }}
                className="text-white/90 text-lg md:text-xl leading-relaxed max-w-xl font-light drop-shadow-md"
              >
                Expert Insurance Broking & Financial Services, Customized to Suit Your Unique Needs — Because Your Peace of Mind is Our Priority.
              </motion.p>
            </div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.7 } } }}
              className="flex flex-wrap items-center gap-4 md:gap-6"
            >
              <a href="/get-started" className="h-14 px-8 bg-accent text-white rounded-full font-semibold text-lg hover:bg-accent-hover active:scale-95 active:shadow-none transition-all flex items-center gap-2 hover:scale-105 transform duration-300 shadow-[0_0_20px_rgba(134,239,172,0.3)]">

                Get Protected <ArrowIcon className="w-4 h-4" />
              </a>

              <a href="/services" className="group flex items-center gap-2 text-white text-lg font-medium hover:text-accent active:text-accent-green transition-colors px-4">

                <span className="border-b border-white/30 pb-1 group-hover:border-accent transition-colors">Our Services</span>
                <ArrowIcon className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </motion.div>
          </motion.div>

          {/* Right Content - Floating Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "easeOut" }}
            className="hidden lg:flex flex-col items-end justify-center h-full pr-4 relative"
          >
            {/* Main Glass Card */}
            <div className="relative bg-white/5 backdrop-blur-2xl border border-white/10 p-10 rounded-[2.5rem] w-[380px] overflow-hidden shadow-2xl">
              {/* Internal Glow */}
              <div className="absolute top-0 right-0 w-32 h-32 bg-accent/20 rounded-full blur-[60px]"></div>

              <div className="relative z-10">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-6xl font-medium text-white tracking-tighter">10k+</h3>
                  <div className="w-12 h-12 rounded-full bg-white/10 flex items-center justify-center border border-white/10">
                    <ArrowIcon className="w-4 h-4 text-white -rotate-45" />
                  </div>
                </div>
                <p className="text-white/70 text-lg mb-8 font-light leading-snug">Indian families secured with comprehensive protection.</p>

                <div className="flex items-center justify-between">
                  <div className="flex -space-x-4">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="w-12 h-12 rounded-full border-[3px] border-black bg-gray-300 overflow-hidden relative z-0 hover:z-10 hover:-translate-y-1 transition-all duration-300">
                        <img src={`https://i.pravatar.cc/150?img=${i + 20}`} alt="User" className="w-full h-full object-cover" />
                      </div>
                    ))}
                  </div>
                  <div className="text-right">
                    <div className="text-accent font-bold text-sm">Top Rated</div>
                    <div className="flex gap-1 text-accent text-xs">
                      {'★★★★★'}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

        </div>
      </div>

      {/* Slider Indicators */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3">
        {heroImages.map((_, i) => (
          <button
            key={i}
            onClick={() => setCurrentImage(i)}
            className={`h-1.5 rounded-full transition-all duration-500 ease-out ${i === currentImage
              ? 'w-12 bg-accent shadow-[0_0_10px_rgba(134,239,172,0.5)]'
              : 'w-2 bg-white/20 hover:bg-white/40'
              }`}
            aria-label={`Go to slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;