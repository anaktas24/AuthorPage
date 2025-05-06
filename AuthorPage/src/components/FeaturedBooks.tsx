import { Link } from 'react-router-dom';

const FeaturedBooks: React.FC = () => {
  return (
    <section className="parchment-bg py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-4xl font-bold text-teal-900 mb-8 text-center">Featured Stories</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((book) => (
            <div key={book} className="bg-white rounded-xl shadow-lg tilt-card overflow-hidden">
              <img
                src="https://via.placeholder.com/300x450"
                alt="Book Cover"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-2xl font-semibold text-teal-900">Book Title {book}</h4>
                <p className="text-gray-600 mt-2">
                  A captivating tale awaits. Discover the secrets hidden within these pages.
                </p>
                <Link
                  to="/books"
                  className="mt-4 inline-block text-amber-600 hover:text-amber-700 font-medium transition-colors duration-200"
                >
                  Learn More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;