import React, { useState } from 'react';
import { ArrowIcon } from '../utils/icons';
import { motion, AnimatePresence } from 'framer-motion';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [activePlan, setActivePlan] = useState('Auto');

  const plans = ['Life', 'Health', 'Auto', 'Travel', 'Business', 'Property'];

  const getPrice = () => {
    // Pricing in INR
    const prices: Record<string, { monthly: string; annual: string }> = {
      'Life': { monthly: '₹2,500', annual: '₹25,000' },
      'Health': { monthly: '₹1,500', annual: '₹15,000' },
      'Auto': { monthly: '₹2,000', annual: '₹20,000' },
      'Travel': { monthly: '₹800', annual: '₹8,000' },
      'Business': { monthly: '₹5,000', annual: '₹50,000' },
      'Property': { monthly: '₹3,000', annual: '₹30,000' },
    };
    return prices[activePlan][billingCycle];
  };

  const images: Record<string, string> = {
    'Life': "https://images.unsplash.com/photo-1536337005238-94b997371b40?q=75&w=800&auto=format&fit=crop", // Indian Family Life
    'Health': "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=75&w=800&auto=format&fit=crop", // Indian Health
    'Auto': "https://images.unsplash.com/photo-1568605117036-5fe5e7bab0b7?q=75&w=800&auto=format&fit=crop", // Car (Universal/Indian)
    'Travel': "https://images.unsplash.com/photo-1524492412937-b28074a5d7da?q=75&w=800&auto=format&fit=crop", // Travel (Taj Mahal)
    'Business': "https://images.unsplash.com/photo-1552664730-d307ca884978?q=75&w=800&auto=format&fit=crop", // Business (Indian Boardroom)
    'Property': "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=75&w=800&auto=format&fit=crop" // Property
  };

  return (
    <section className="py-20 bg-primary text-white">
      <div className="container mx-auto px-4 md:px-8">

        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <div className="w-12 h-[1px] bg-white/20"></div>
              <span className="uppercase tracking-[0.3em] text-[10px] font-bold text-accent">Pricing Plans</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-[73px] font-bold text-white tracking-tighter leading-[0.9] max-w-4xl">
              Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-white to-accent font-bold">Insurance Plans</span>
            </h2>
          </div>

          <div className="bg-white/10 p-1.5 rounded-full flex mt-8 md:mt-0">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-colors ${billingCycle === 'monthly' ? 'bg-white text-primary' : 'text-white hover:text-white/80'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-colors flex items-center gap-2 ${billingCycle === 'annual' ? 'bg-white text-primary' : 'text-white hover:text-white/80'}`}
            >
              Annual <span className="text-[10px] bg-accent text-primary px-1.5 py-0.5 rounded">25% Off</span>
            </button>
          </div>
        </div>

        {/* Plan Types Tabs */}
        <div className="bg-white rounded-[40px] overflow-hidden p-2 text-primary">
          <div className="flex flex-wrap gap-2 md:gap-4 p-4 border-b border-gray-100 justify-center md:justify-start">
            {plans.map(plan => (
              <button
                key={plan}
                onClick={() => setActivePlan(plan)}
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${activePlan === plan ? 'bg-primary text-white shadow-lg' : 'bg-transparent text-gray-500 hover:bg-gray-100'}`}
              >
                {plan} Insurance
              </button>
            ))}
          </div>

          <div className="p-8 md:p-12">
            <AnimatePresence mode="wait">
              <motion.div
                key={`${activePlan}-${billingCycle}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="grid lg:grid-cols-2 gap-12 items-center"
              >
                <div>
                  <div className="flex items-baseline gap-2 mb-2">
                    <span className="text-6xl font-bold text-primary">{getPrice()}</span>
                    <span className="text-gray-500 text-lg">/ {billingCycle === 'monthly' ? 'Monthly' : 'Annual'}</span>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Included Services</h3>
                  <p className="text-gray-600 mb-8">Affordable insurance plans tailored to your budget.</p>
                  <ul className="space-y-4 mb-10">
                    {['Cashless hospital access.', 'Affordable premiums.', 'Mental health support.', '24/7 Virtual doctor visits.'].map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <div className="w-4 h-px bg-primary/20"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="/services" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-accent transition-colors">
                    Get Insurance Now <ArrowIcon />
                  </a>
                </div>

                <div className="relative h-[400px] rounded-3xl overflow-hidden">
                  <motion.img
                    key={activePlan}
                    initial={{ scale: 1 }}
                    animate={{ scale: 1.1 }}
                    transition={{ duration: 20, ease: "linear" }}
                    src={images[activePlan]}
                    alt={activePlan}
                    className="absolute inset-0 w-full h-full object-cover"
                  />
                </div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Pricing;