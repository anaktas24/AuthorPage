import { Link } from 'react-router-dom';

const FeaturedBooks: React.FC = () => {
  return (
    <section className="py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Featured Books</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((book) => (
            <div key={book} className="bg-white shadow-md rounded-lg overflow-hidden">
              <img
                src="https://via.placeholder.com/300x450"
                alt="Book Cover"
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h4 className="text-xl font-semibold text-gray-900">Book Title {book}</h4>
                <p className="text-gray-600 mt-2">
                  A brief description of the book goes here. Engage your readers with a captivating summary.
                </p>
                <Link
                  to="/books"
                  className="mt-4 inline-block text-blue-500 hover:text-blue-700 font-medium"
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