import React, { useRef } from 'react';
import { ArrowIcon } from '../../utils/icons';
import { motion, useScroll, useTransform } from 'framer-motion';

const StatItem = ({ number, text }: { number: string; text: string }) => (
  <div className="flex flex-col gap-2">
    <div className="overflow-hidden">
      <motion.span
        initial={{ y: "100%" }}
        whileInView={{ y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] as any }}
        className="block text-4xl sm:text-5xl md:text-6xl font-medium text-primary tracking-tight"
      >
        {number}
      </motion.span>
    </div>
    <span className="text-xs font-bold uppercase tracking-widest text-gray-400">{text}</span>
  </div>
);

const WhoWeAre = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageScale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);
  const yOffset = useTransform(scrollYProgress, [0, 1], [50, -50]);

  return (
    <section id="about" ref={containerRef} className="py-16 md:py-32 bg-white overflow-hidden relative">
      <div className="container mx-auto px-6 md:px-12 relative z-10">

        <div className="grid lg:grid-cols-12 gap-8 lg:gap-20">

          {/* Left Column: Heading & Image */}
          <div className="lg:col-span-7 relative flex flex-col">
            <div className="mb-6 md:mb-10">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] as any }}
                className="flex items-center gap-4 mb-4 md:mb-8"
              >

                <span className="text-sm font-extrabold tracking-[0.3em] text-accent uppercase">Who We Are</span>
              </motion.div>

              <div className="overflow-hidden">
                <motion.h2
                  initial={{ y: "100%" }}
                  whileInView={{ y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] as any }}
                  className="text-4xl sm:text-5xl md:text-[64px] font-heading font-extrabold text-primary tracking-tight leading-[1.15]"
                >
                  About Le Dieu <br />
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent font-bold relative z-10 block">
                    Insurance Brokers
                  </span>
                </motion.h2>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, scale: 1.1, y: 30 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] as any }}
              className="relative rounded-2xl md:rounded-[3rem] overflow-hidden aspect-[16/10] shadow-2xl group"
            >
              <motion.div style={{ scale: imageScale }} className="w-full h-full">
                <img
                  src="/images/portrait-of-family-mom-dad-and-their-children-en-2026-01-11-09-08-26-utc.jpg"
                  alt="Multi-generational family portrait - Le Dieu Insurance Protection"
                  className="w-full h-full object-cover"
                />
              </motion.div>

              {/* Floating Badge */}

            </motion.div>
          </div>

          {/* Right Column: Content & Stats */}
          <div className="lg:col-span-5 flex flex-col justify-between h-full pt-0">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-10%" }}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: { staggerChildren: 0.1, delayChildren: 0.3 }
                }
              }}
            >
              <div className="overflow-hidden mb-6 md:mb-8">
                <motion.p
                  variants={{ hidden: { y: 30, opacity: 0 }, visible: { y: 0, opacity: 1 } }}
                  transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
                  className="text-xl md:text-2xl text-primary font-light leading-snug"
                >
                  &ldquo;Since 2003, <strong className="font-bold">Le Dieu Insurance Brokers</strong> has been a leading Indian general insurance broker, providing end-to-end risk solutions for mid to large corporates and SMEs.&rdquo;
                </motion.p>
              </div>

              <motion.p
                variants={{ hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0 } }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] as any }}
                className="text-gray-500 leading-relaxed text-sm font-medium mb-8 md:mb-12"
              >
                Licensed by the IRDA, we combine deep market knowledge with a client-centric approach. Our team of skilled surveyors and insurance professionals ensures your coverage is optimized for protection, ensuring you get the indemnification you deserve—not just what suits the insurers.
              </motion.p>

              <motion.div variants={{ hidden: { opacity: 0, x: -10 }, visible: { opacity: 1, x: 0 } }}>
                <a href="#about" className="group inline-flex items-center gap-4 text-primary font-semibold text-lg">
                  <span className="border-b border-accent group-hover:border-primary transition-all pb-0.5">Explore Our Expertise</span>
                  <div className="w-10 h-10 rounded-full bg-accent flex items-center justify-center text-white group-hover:bg-primary transition-colors">
                    <ArrowIcon className="w-3 h-3 group-hover:-rotate-45 transition-transform duration-300" />
                  </div>
                </a>
              </motion.div>

              <motion.div
                variants={{
                  visible: { transition: { staggerChildren: 0.08 } }
                }}
                className="grid grid-cols-2 gap-x-8 gap-y-8 md:gap-y-12 mt-8 md:mt-12 border-t border-gray-100 pt-8 md:pt-10"
              >
                <StatItem number="20+" text="Years in Business" />
                <StatItem number="21+" text="Insurance Partners" />
                <StatItem number="500+" text="Corporate Clients" />
                <StatItem number="99%" text="Claims Resolved" />
              </motion.div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhoWeAre;