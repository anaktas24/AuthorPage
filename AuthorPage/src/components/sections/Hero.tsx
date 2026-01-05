import { Link } from 'react-router-dom';
import medallionImage from '/img/medallion.jpg';

interface HeroProps {
  isNineties?: boolean;
}

const Hero: React.FC<HeroProps> = ({ isNineties = false }) => {
  return (
    <section
      className={`hero-section ${
        isNineties ? 'bg-gray-100' : 'bg-white'
      } relative overflow-visible pt-24 pb-16 sm:pt-32 sm:pb-20 rounded-xl z-10`}
      style={{ clipPath: 'url(#hero-clip)' }}
    >
      {/* Medallion Image */}
      <img
        src={medallionImage}
        alt="Author illustration"
        className="medallion mx-auto -mt-8 sm:-mt-4 w-40 sm:w-48 md:w-56 h-40 sm:h-48 md:h-56 object-contain rounded-full z-30"
      />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
        <h1
          className={`${
            isNineties
              ? 'text-2xl sm:text-3xl font-mono tracking-tight'
              : 'text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight'
          } mt-12 sm:mt-16 mb-4`}
        >
          Step Into a World Beyond the Page
        </h1>
        <p
          className={`${
            isNineties ? 'text-sm sm:text-base' : 'text-lg sm:text-xl'
          } text-gray-600 max-w-xl mx-auto mb-6`}
        >
          Where imagination bends reality. Explore tales that blur the line between worlds.
        </p>
        <Link
          to="/books"
          className={`${
            isNineties
              ? 'border border-gray-800 text-gray-800 px-4 py-2 font-mono text-sm'
              : 'bg-gray-900 text-white px-6 py-3 rounded-full text-sm sm:text-base font-medium hover:bg-blue-600 transition-all duration-200'
          } inline-block`}
        >
          Explore the Books
        </Link>
      </div>
    </section>
  );
};

export default Hero;