import { Link } from 'react-router-dom';

const About: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-8">About Me</h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          I'm an author passionate about crafting stories that inspire and captivate. Learn more about my journey and what drives me to write.
        </p>
        <Link
          to="/about"
          className="mt-6 inline-block bg-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600"
        >
          More About Me
        </Link>
      </div>
    </section>
  );
};

export default About;