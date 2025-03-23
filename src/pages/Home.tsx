import React from 'react';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/FeaturesSection';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import Navbar from '../components/NavBar';

const Home: React.FC = () => {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <FeaturesSection />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Home;
