'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface FAQ {
    question: string;
    answer: string;
}

const faqs: FAQ[] = [
    {
        question: "If I ever had to make a claim, whom would I talk to?",
        answer: "One of the benefits of having a broker is that if you have an incident, the broker can make all the arrangements on your behalf. Brokers file the reports and act as your advocate in the event of any dispute."
    },
    {
        question: "I am a first-time buyer; how do I choose a broker?",
        answer: "Ask a relative, a friend or a co-worker to recommend a broker. One of the advantages of using a broker is that you will often find one conveniently located right in your community. While location doesn’t affect a broker’s ability to help you, the fact that they live in the same community will help them understand your particular circumstances."
    },
    {
        question: "Does consolidating my insurance with one company save me money?",
        answer: "While it’s true that there are economies from combining coverage, a broker is in the best position to shop this “package” around for you to get the best deals. Knowing your full needs, your broker may also recommend very cost-efficient ways of covering certain risks, eliminating possible duplications."
    },
    {
        question: "Why is insurance needed?",
        answer: "Insurance is one way of protecting yourself against the risk of unexpected financial losses. It does not remove the risk, but it can partially compensate for losses incurred. Through the payment of premiums, you transfer the cost of a major loss from you to an insurance company. Insurance operates on the principle of shared risk."
    },
    {
        question: "What does an insurance broker actually do?",
        answer: "The broker’s task is to help identify the risks that a person or business may be exposed to. They advise on what risks should be insured against, canvass the insurance market to obtain the best protection at a competitive price, arrange the policy and documentation, and assist with any claims or renewals."
    },
    {
        question: "Will my broker provide ongoing services?",
        answer: "Yes. Insurance brokers undertake all detailed discussions and negotiations on insurance matters for you. As your circumstances change, the broker will review your policies ensuring that the policy is appropriate, suggesting amendments in light of market changes or changes in your business situation."
    },
    {
        question: "What is risk management?",
        answer: "Brokers suggest risk management procedures to reduce risks and save on premiums. This might include fitting smoke alarms, sprinkler systems, enhancing security, safer working practices, or staff safety training. These techniques are designed to lower insurance risk exposures and costs."
    },
    {
        question: "Which broker should I deal with?",
        answer: "It is always important to deal with an insurance broker who is a member of the Insurance Brokers Association of India. This ensures that broker members operate with accuracy, efficiency, and professionalism, as set down in the Code of Conduct to protect you as their client."
    },
    {
        question: "Can I change my broker at any time?",
        answer: "Yes, you can change brokers without any risk to your insurance programme. While policies are normally for twelve months, a simple letter of appointment is all that a new broker needs to begin acting on your behalf. However, changing mid-term might incur cancellation charges from the insurer."
    },
    {
        question: "How are insurance brokers paid for their services?",
        answer: "Commission is the most common form of payment by the insurance company to the broker. This commission covers work including documentation. Sometimes a broker administration charge may apply, which will be noted on the invoice. Some brokers may arrange a fee-for-service model instead."
    },
    {
        question: "Isn’t it cheaper to go directly to the insurance company?",
        answer: "Not necessarily. Insurers have to pay for their own administration and advertising costs. Brokers often get more competitive prices because they handle much of the administration for the insurer and place a volume of business, earning cheaper rates which they pass on to you."
    },
    {
        question: "How can I be sure they are not just selling me a product off the shelf?",
        answer: "Everyone’s insurance needs are different. Brokers negotiate with insurers to adapt policies to your advantage. They want to develop long-term relationships and are ethically bound to find the product best suited to your needs, not necessarily the easiest or highest commission one."
    },
];

const FAQ = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);

    const toggleFAQ = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <section className="py-24 md:py-32 bg-white relative overflow-hidden text-primary border-t border-gray-100">
            {/* Ambient Background */}
            <div className="absolute top-0 left-0 w-[50vw] h-[50vw] bg-gray-100/50 rounded-full blur-[120px] pointer-events-none" />
            <div className="absolute bottom-0 right-0 w-[40vw] h-[40vw] bg-gray-100/50 rounded-full blur-[100px] pointer-events-none" />

            <div className="container mx-auto px-6 md:px-12 relative z-10">
                <div className="flex flex-col lg:flex-row gap-16 lg:gap-24">
                    {/* Sticky Sidebar */}
                    <div className="lg:w-1/3">
                        <div className="lg:sticky lg:top-32">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6 }}
                            >
                                <span className="text-primary text-xs font-bold uppercase tracking-[0.3em] mb-4 block">
                                    Knowledge Center
                                </span>
                                <h2 className="text-4xl md:text-5xl font-bold tracking-tighter mb-6 leading-tight">
                                    Frequently Asked <br />
                                    <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary via-accent to-primary">
                                        Questions
                                    </span>
                                </h2>
                                <p className="text-gray-500 text-lg leading-relaxed mb-8 max-w-sm">
                                    Everything you need to know about insurance broking, claims, and risk management. Can't find the answer you're looking for?
                                </p>
                                <a
                                    href="/contact"
                                    className="inline-flex items-center gap-3 text-sm font-bold uppercase tracking-widest text-primary hover:text-gray-600 transition-colors group"
                                >
                                    Contact Support
                                    <svg
                                        className="w-4 h-4 transform group-hover:translate-x-1 transition-transform"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                                    </svg>
                                </a>
                            </motion.div>
                        </div>
                    </div>

                    {/* FAQ List */}
                    <div className="lg:w-2/3">
                        <div className="space-y-4">
                            {faqs.map((faq, index) => (
                                <motion.div
                                    key={index}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.05 }}
                                    className="border-b border-gray-100 last:border-0"
                                >
                                    <button
                                        onClick={() => toggleFAQ(index)}
                                        className="w-full py-6 flex items-start justify-between gap-6 text-left group focus:outline-none"
                                    >
                                        <span className={`text-xl md:text-2xl font-medium transition-colors duration-300 ${activeIndex === index ? 'text-primary' : 'text-gray-900 group-hover:text-primary'}`}>
                                            {faq.question}
                                        </span>
                                        <div className={`relative flex-shrink-0 w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center transition-all duration-300 ${activeIndex === index ? 'bg-accent border-accent rotate-45' : 'group-hover:border-accent'}`}>
                                            <svg
                                                className={`w-4 h-4 transition-colors duration-300 ${activeIndex === index ? 'text-white' : 'text-primary'}`}
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                                            </svg>
                                        </div>
                                    </button>
                                    <AnimatePresence>
                                        {activeIndex === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <div className="pb-8 pr-12">
                                                    <p className="text-gray-600 leading-relaxed text-lg font-light">
                                                        {faq.answer}
                                                    </p>
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FAQ;
