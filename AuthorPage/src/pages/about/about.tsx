import React from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';

const About: React.FC<{ isNineties?: boolean }> = ({ isNineties = false }) => {
  return (
    <div className={isNineties ? 'max-w-4xl mx-auto px-4' : "max-w-7xl mx-auto px-10 sm:px-6 lg:px-8 py-60"}>
      <h1 className={isNineties
        ? 'text-3xl font-pixel text-red-700 mb-4'
        : 'text-4xl font-bold text-teal-900 mb-8 tracking-tight'}
      >
        About Me
      </h1>
      
      <p className={isNineties
        ? 'text-gray-400 text-lg leading-relaxed'
        : 'text-gray-600 text-lg leading-relaxed mb-4'}
      >
        I'm a passionate Greek fantasy novelist, weaving tales of mythical worlds and epic adventures.
        My debut novel, <em>Through the Starlit Portal</em>, follows Jet, Aria, and Kiyo as they uncover
        secrets in a magical realm. Inspired by Greek mythology and 90s pop culture, I aim to transport
        readers to vibrant, unforgettable universes.
      </p>

      <p className={isNineties
        ? 'text-gray-400 mt-2'
        : 'text-gray-600 mt-6 leading-relaxed'}
      >
        When I'm not writing, you can find me exploring ancient ruins, sipping coffee in Athens cafés,
        or binge-watching classic 90s TV shows. Connect with me via the contact page or follow my blog
        for writing updates!
      </p>

      <Link
        to="/"
        className={isNineties
          ? 'pixel-button bg-green-500 text-white px-4 py-2 mt-4 inline-block'
          : 'inline-block mt-6 text-amber-600 hover:text-amber-700 font-medium text-lg transition-all duration-300'}
      >
        Back to Home Yo
      </Link>
    </div>
  );
};

export default About;
