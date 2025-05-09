import React from 'react';
import { Link } from 'react-router-dom';
import './index.css';

const AboutMe: React.FC = () => {
  return (
    <div className="container">
      <h1>About Me</h1>
      <p>
        I'm a passionate Greek fantasy novelist, weaving tales of mythical worlds and epic adventures.
        My debut novel, <em>Through the Starlit Portal</em>, follows Jet, Aria, and Kiyo as they uncover
        secrets in a magical realm. Inspired by Greek mythology and 90s pop culture, I aim to transport
        readers to vibrant, unforgettable universes.
      </p>
      <p>
        When I'm not writing, you can find me exploring ancient ruins, sipping coffee in Athens cafés,
        or binge-watching classic 90s TV shows. Connect with me via the contact page or follow my blog
        for writing updates!
      </p>
      <Link to="/" className="back-link">Back to Home</Link>
    </div>
  );
};

export default AboutMe;