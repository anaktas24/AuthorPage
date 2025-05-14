import { Link } from 'react-router-dom';

const FeaturedBooks: React.FC<{ isNineties?: boolean }> = ({ isNineties = false }) => {
  return (
    <section className={isNineties ? 'nineties-section' : 'bg-white py-16 seamless-bg'}>
      <div className={isNineties ? 'max-w-4xl mx-auto px-4' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}>
        <h3 className={isNineties
          ? 'text-3xl font-pixel text-yellow-300 mb-6 text-center'
          : 'text-4xl font-bold text-teal-900 mb-12 text-center tracking-tight'}
        >
          Featured Stories
        </h3>

        <div className={isNineties
          ? 'grid grid-cols-1 gap-6'
          : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'}
        >
          {[1].map((book) => (
            <Link
              to="/book/1"
              key={book}
              className={isNineties
                ? 'block bg-gray-800 p-4 rounded'
                : 'bg-white shadow-md rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl'}
            >
              <div className={isNineties
                ? 'bg-gray-700 h-40 flex items-center justify-center'
                : 'bg-gray-100 w-full h-64 flex items-center justify-center'}
              >
                <span className={isNineties ? 'text-yellow-300' : 'text-gray-500 text-sm'}>
                  Book Cover Placeholder
                </span>
              </div>

              <div className={isNineties ? '' : 'p-6'}>
                <h4 className={isNineties
                  ? 'text-xl font-pixel text-yellow-300 mt-2'
                  : 'text-xl font-semibold text-teal-900'}
                >
                  Through the Starlit Portal
                </h4>
                <p className={isNineties
                  ? 'text-gray-400 mt-1'
                  : 'text-gray-600 text-sm mt-2 leading-relaxed'}
                >
                  A captivating tale awaits. Discover the secrets hidden within these pages.
                </p>
                <span className={isNineties
                  ? 'text-blue-400 hover:text-blue-300 mt-2 inline-block'
                  : 'mt-4 inline-block text-amber-600 hover:text-amber-700 font-medium text-sm transition-colors duration-300'}
                >
                  Learn More →
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
