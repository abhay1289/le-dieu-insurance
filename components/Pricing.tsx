import React, { useState } from 'react';
import { ArrowIcon } from '../utils/icons';
import { motion, AnimatePresence } from 'framer-motion';

const Pricing = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'annual'>('monthly');
  const [activePlan, setActivePlan] = useState('Auto');

  const plans = ['Life', 'Health', 'Auto', 'Travel', 'Business', 'Property'];

  const prices: Record<string, { monthly: string; annual: string }> = {
    'Life': { monthly: '₹2,500', annual: '₹25,000' },
    'Health': { monthly: '₹1,500', annual: '₹15,000' },
    'Auto': { monthly: '₹2,000', annual: '₹20,000' },
    'Travel': { monthly: '₹800', annual: '₹8,000' },
    'Business': { monthly: '₹5,000', annual: '₹50,000' },
    'Property': { monthly: '₹3,000', annual: '₹30,000' },
  };

  const getPrice = () => {
    return prices[activePlan][billingCycle];
  };

  const images: Record<string, string> = {
    'Life': "/images/pricing-life.png",
    'Health': "/images/pricing-health.png",
    'Auto': "/images/pricing-auto.png",
    'Travel': "/images/pricing-travel.png",
    'Business': "/images/pricing-business.png",
    'Property': "/images/pricing-property.png"
  };

  const planDetails: Record<string, { description: string; services: string[] }> = {
    'Life': {
      description: "Secure your family's future with our comprehensive life insurance offering high sum assured and flexible payouts.",
      services: ['Comprehensive terminal illness cover.', 'High sum insured options.', 'Flexible payout modes.', 'Tax benefits under Section 80C.']
    },
    'Health': {
      description: "Premium healthcare protection with access to top-tier network hospitals and specialized care.",
      services: ['10,000+ Network hospitals.', 'No claim bonus up to 50%.', 'Pre & post hospitalization cover.', 'Daycare procedure coverage.']
    },
    'Auto': {
      description: "Comprehensive vehicle protection including zero depreciation and global standard roadside assistance.",
      services: ['Zero depreciation cover.', '24/7 Roadside assistance.', 'Personal accident cover for passengers.', 'Instant digital policy issuance.']
    },
    'Travel': {
      description: "Worry-free global travel with extensive medical emergency and trip cancellation protection.",
      services: ['International medical emergency cover.', 'Trip cancellation protection.', 'Passport & baggage loss help.', 'Adventure sports coverage.']
    },
    'Business': {
      description: "Institutional grade risk management for your corporate assets and operational continuity.",
      services: ['Asset & machinery protection.', 'Employee liability cover.', 'Cyber risk & data breach shield.', 'Business interruption indemnity.']
    },
    'Property': {
      description: "Robust protection for your residential and commercial assets against natural and man-made disasters.",
      services: ['Fire & natural disaster protection.', 'Burglary & theft coverage.', 'Structure & contents insurance.', 'Public liability for visitors.']
    }
  };

  return (
    <section className="py-20 bg-white text-primary">
      <div className="container mx-auto px-4 md:px-8">

        <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16">
          <div>
            <div className="flex items-center gap-4 mb-8">
              <span className="uppercase tracking-[0.3em] text-xs font-bold text-accent">Pricing Plans</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-[64px] font-bold text-primary tracking-tight leading-[0.9] max-w-4xl">
              Explore Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-primary/80 to-accent font-bold">Insurance Plans</span>
            </h2>
          </div>

          <div className="bg-gray-100 p-1.5 rounded-full flex mt-8 md:mt-0 border border-gray-200">
            <button
              onClick={() => setBillingCycle('monthly')}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-colors ${billingCycle === 'monthly' ? 'bg-accent text-white shadow-lg' : 'text-primary hover:text-primary/80'}`}
            >
              Monthly
            </button>
            <button
              onClick={() => setBillingCycle('annual')}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-colors flex items-center gap-2 ${billingCycle === 'annual' ? 'bg-accent text-white shadow-lg' : 'text-primary hover:text-primary/80'}`}
            >
              Annual <span className="text-[10px] bg-primary text-white px-1.5 py-0.5 rounded">25% Off</span>
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
                className={`px-6 py-3 rounded-full text-sm font-semibold transition-all ${activePlan === plan ? 'bg-accent text-white shadow-lg' : 'bg-transparent text-gray-500 hover:bg-gray-100'}`}
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
                  <h3 className="text-2xl font-bold mb-4">Included Services</h3>
                  <p className="text-gray-600 mb-8">{planDetails[activePlan].description}</p>
                  <ul className="space-y-4 mb-10">
                    {planDetails[activePlan].services.map((item, i) => (
                      <li key={i} className="flex items-center gap-3 text-gray-700">
                        <div className="w-1 h-px bg-primary/20"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <a href="/services" className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-full font-semibold hover:bg-accent transition-colors">
                    Get Insurance Now <ArrowIcon />
                  </a>
                </div>

                <div className="relative h-[400px] rounded-3xl overflow-hidden shadow-2xl">
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