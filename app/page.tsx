'use client';

import React from 'react';
import NavBar from '@/components/NavBar/NavBar';
import Hero from '@/components/Hero/Hero';
import BrandLogos from '@/components/BrandLogos/BrandLogos';
import WhoWeAre from '@/components/WhoWeAre/WhoWeAre';
import Services from '@/components/Services/Services';
import WhyChooseUs from '@/components/WhyChooseUs/WhyChooseUs';
import Team from '@/components/Team/Team';
import FAQ from '@/components/FAQ/FAQ';
import Testimonials from '@/components/Testimonials/Testimonials';
import CTA from '@/components/CTA/CTA';
import Footer from '@/components/Footer/Footer';
import ScrollProgress from '@/components/ScrollProgress/ScrollProgress';
import SmoothScroll from '@/components/SmoothScroll';

export default function Home() {
  return (
    <SmoothScroll>
      <div className="min-h-screen bg-white">
        <ScrollProgress />
        <NavBar />
        <main>
          <Hero />
          <BrandLogos />
          <WhoWeAre />
          <WhyChooseUs />
          <Services />
          <Team />
          <Testimonials />
          <FAQ /> {/* Add FAQ Section */}
          <CTA />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
