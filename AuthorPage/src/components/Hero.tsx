import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="hero-bg text-amber-100 py-32">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-5xl md:text-6xl font-bold mb-6 drop-shadow-lg">Unveil Epic Tales</h2>
        <p className="text-xl md:text-2xl mb-10 max-w-2xl mx-auto">
          Dive into a world of magic and mystery. Explore my upcoming book and join the adventure!
        </p>
        <Link
          to="/books"
          className="bg-amber-400 text-teal-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-500 transition-transform duration-200 hover:scale-105 shadow-lg"
        >
          Discover My Books
        </Link>
      </div>
    </section>
  );
};

export default Hero;