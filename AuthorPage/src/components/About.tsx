import React from 'react';
import { Link } from 'react-router-dom';
import '../index.css';

const About: React.FC = () => {
  return (
    <div className="bg-teal-50 py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto">
        <h1 className="text-4xl font-bold text-teal-900 mb-6">About Me</h1>
        <p className="text-gray-700 text-lg leading-relaxed">
          I'm a passionate Greek fantasy novelist, weaving tales of mythical worlds and epic adventures...
        </p>
        <p className="text-gray-700 text-lg leading-relaxed mt-6">
          When I'm not writing, you can find me exploring ancient ruins, sipping coffee in Athens cafés...
        </p>
        <Link
          to="/"
          className="inline-block mt-8 text-amber-600 hover:text-amber-800 font-semibold transition-colors duration-300"
        >
          ← Back to Home
        </Link>
      </div>
    </div>

  );
};

export default About;