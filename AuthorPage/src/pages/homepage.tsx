import React from 'react';
import Hero from '../components/Hero';
import FeaturedBooks from '../components/FeaturedBooks';
import BlogPreview from '../components/BlogPreview';
import About from './about';
import Contact from './contact';

import RetroWidgets from '../components/RetroWidgets';

const HomePage: React.FC = () => {
  return (
    <div className="w-full">
      <Hero />


      <FeaturedBooks />
      <BlogPreview />

      {/* ID needed for scroll navigation */}
      <div id="about">
        <About />
      </div>

      <div id="contact">
        <Contact />
      </div>
      {/* 90s Decoration Bar (Only visible in 90s mode via CSS) */}
      <RetroWidgets />

    </div>
  );
};

export default HomePage;
