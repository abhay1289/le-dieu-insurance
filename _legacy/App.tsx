import React from 'react';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import BrandLogos from './components/BrandLogos/BrandLogos';
import WhoWeAre from './components/WhoWeAre/WhoWeAre';
import Services from './components/Services/Services';
import WhyChooseUs from './components/WhyChooseUs/WhyChooseUs';
import Team from './components/Team/Team';
import Testimonials from './components/Testimonials/Testimonials';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import ScrollProgress from './components/ScrollProgress/ScrollProgress';

function App() {
  return (
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
        <CTA />
      </main>
      <Footer />
    </div>
  );
}

export default App;