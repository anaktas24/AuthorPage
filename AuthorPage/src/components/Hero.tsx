import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-4">Welcome to My World of Stories</h2>
        <p className="text-lg md:text-xl mb-8">
          Discover my latest books, read my blog, and connect with me!
        </p>
        <Link
          to="/books"
          className="bg-white text-blue-600 px-6 py-3 rounded-md font-semibold hover:bg-gray-100"
        >
          Explore My Books
        </Link>
      </div>
    </section>
  );
};

export default Hero;