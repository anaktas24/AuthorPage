import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <section className="gradient-bg text-white py-40 px-4 sm:px-8">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-5xl md:text-7xl font-extrabold mb-6 drop-shadow-lg">Unveil Epic Tales</h2>
        <p className="text-xl md:text-2xl mb-10 leading-relaxed">
          Dive into a world of magic and mystery. Explore my upcoming book and join the adventure!
        </p>
        <Link
          to="/books"
          className="bg-white text-teal-900 px-10 py-4 rounded-full font-semibold text-lg hover:bg-amber-400 hover:text-white transition-all duration-300 shadow-lg"
        >
          Discover My Books
        </Link>
      </div>
    </section>

  );
};

export default Hero;