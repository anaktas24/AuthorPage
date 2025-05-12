import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const About: React.FC<{ isNineties?: boolean }> = ({ isNineties = false }) => {
  return (
    <div className={isNineties ? 'nineties-section' : 'container bg-teal-50 py-16'}>
      <h1 className={isNineties ? 'text-3xl font-pixel text-yellow-300 mb-4' : 'text-4xl font-bold text-teal-900 mb-8'}>About Me</h1>
      <p className={isNineties ? 'text-gray-400' : 'text-gray-600'}>
        I'm a passionate Greek fantasy novelist, weaving tales of mythical worlds and epic adventures.
        My debut novel, <em>Through the Starlit Portal</em>, follows Jet, Aria, and Kiyo as they uncover
        secrets in a magical realm. Inspired by Greek mythology and 90s pop culture, I aim to transport
        readers to vibrant, unforgettable universes.
      </p>
      <p className={isNineties ? 'text-gray-400 mt-2' : 'text-gray-600 mt-4'}>
        When I'm not writing, you can find me exploring ancient ruins, sipping coffee in Athens cafés,
        or binge-watching classic 90s TV shows. Connect with me via the contact page or follow my blog
        for writing updates!
      </p>
      <Link to="/" className={isNineties ? 'pixel-button bg-green-500 text-white px-4 py-2 mt-4 inline-block' : 'back-link'}>Back to Home</Link>
    </div>
  );
};

export default About;