import Navbar from './NavBar';
import Footer from './Footer';
import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDF6E3]">
      <Navbar />
      <section className="parchment-bg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-teal-900 mb-8 text-center">About Me</h2>
          <div className="flex flex-col md:flex-row gap-8">
            <div className="md:w-1/3">
              <img
                src="https://via.placeholder.com/300"
                alt="Author"
                className="w-full rounded-lg shadow-md"
              />
            </div>
            <div className="md:w-2/3">
              <p className="text-lg text-gray-600 mb-4">
                Hello! I’m [Your Name], an author passionate about crafting stories that resonate with readers. My journey began with a love for storytelling at a young age, and over the years, I’ve published several novels that explore themes of adventure, love, and mystery.
              </p>
              <p className="text-lg text-gray-600 mb-4">
                When I’m not writing, you can find me exploring new places, reading, or connecting with my readers. My goal is to inspire and entertain through the power of words.
              </p>
              <p className="text-lg text-gray-600">
                Thank you for visiting my website! I’d love to hear from you—feel free to reach out via the contact page.
              </p>
            </div>
          </div>
          <div className="mt-8 text-center">
            <Link
              to="/"
              className="bg-amber-400 text-teal-900 px-6 py-3 rounded-full font-semibold hover:bg-amber-500 transition-transform duration-200 hover:scale-105"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;