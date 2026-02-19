import React, { useState, useEffect } from 'react';
import { ArrowIcon } from '../../utils/icons';
import { motion, AnimatePresence } from 'framer-motion';

const heroImages = [
  "/images/high-voltage-power-line-across-dnieper-river-khortytsia-island-zaporizhia-ukraine.jpg",
  "/images/WhatsApp Image 2026-02-17 at 18.04.11 (1).jpeg",
  "/images/WhatsApp Image 2026-02-17 at 18.04.11.jpeg"
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
    <section className="relative h-[80vh] min-h-[600px] md:h-screen md:min-h-[700px] w-full overflow-hidden font-sans bg-primary">

      {/* Premium Background Slider */}
      <div className="absolute inset-0 z-0">
        {/* Static base layer — always shows current image to prevent any flash */}
        <div className="absolute inset-0 w-full h-full">
          <img
            src={heroImages[currentImage]}
            alt=""
            className="w-full h-full object-cover object-center"
          />
        </div>

        {/* Crossfade layer — new image fades in on top */}
        <AnimatePresence>
          <motion.div
            key={currentImage}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, scale: 1.08 }}
            transition={{
              opacity: { duration: 1.8, ease: [0.16, 1, 0.3, 1] as any },
              scale: { duration: 10, ease: "linear" }
            }}
            className="absolute inset-0 w-full h-full"
          >
            <img
              src={heroImages[currentImage]}
              alt="Background"
              className="w-full h-full object-cover object-center"
            />
          </motion.div>
        </AnimatePresence>

        {/* Premium Overlays - Stronger dark gradients for text readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/45 to-black/90 z-10" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent z-10" />
      </div>

      <div className="container mx-auto px-6 md:px-12 relative z-20 h-full flex items-center">
        <div className="w-full pt-32 md:pt-20 pb-16 md:pb-0">


          {/* Left Content */}
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="max-w-3xl"
          >

            {/* Masked Text Reveal Animation */}
            <div className="mb-3 md:mb-5">
              <div className="overflow-hidden">
                <motion.h1
                  variants={textRevealVariants}
                  className="text-white tracking-tight drop-shadow-lg block font-heading font-extrabold leading-[1.1] md:leading-[1.1]"
                  style={{ fontSize: 'clamp(2.5rem, 8vw, 4.2rem)' }}
                >
                  Helping Protect
                </motion.h1>
              </div>
              <div className="overflow-hidden">
                <motion.h1
                  variants={textRevealVariants}
                  className="font-heading font-extrabold text-white block leading-[1.1] md:leading-[1.1]"
                  style={{ fontSize: 'clamp(2.5rem, 8vw, 4.2rem)' }}
                >
                  What Matters Most.
                </motion.h1>
              </div>
            </div>

            <div className="overflow-hidden mb-5 md:mb-8">
              <motion.p
                variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0, transition: { duration: 1, ease: [0.16, 1, 0.3, 1] as any } } }}
                className="text-white/80 text-lg md:text-xl leading-relaxed max-w-xl font-medium"
              >
                Your Trusted Partner for finding the right insurance solutions.
              </motion.p>
            </div>

            <motion.div
              variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.8, delay: 0.7 } } }}
              className="flex flex-wrap items-center gap-4 md:gap-6"
            >
              <a href="/about" className="h-14 px-8 bg-accent text-white rounded-full font-semibold text-lg hover:bg-accent-hover active:scale-95 transition-all flex items-center gap-2 hover:scale-105 transform duration-300">
                Learn More <ArrowIcon className="w-4 h-4" />
              </a>
            </motion.div>
          </motion.div>


        </div>
      </div>

    </section>
  );
};

export default Hero;