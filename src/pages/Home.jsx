import React from 'react';
import HeroSlider from '../components/HeroSlider';
import FeaturesSection from '../components/FeaturesSection';
import BreedsGallery from '../components/BreedsGallery';
import TestimonialsAndStats from '../components/TestimonialsAndStats';

const Home = () => {
  return (
    <div className="mt-28"> {/* ← SE AGREGA ESPACIO PARA BAJAR TODO */}
      <HeroSlider />
      <FeaturesSection />
      <BreedsGallery />
      <TestimonialsAndStats />
    </div>
  );
};

export default Home;
