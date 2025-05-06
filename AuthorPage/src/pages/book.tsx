import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

const Books: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDF6E3]">
      <Navbar />
      <section className="parchment-bg py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-teal-900 mb-8 text-center">My Books</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((book) => (
              <div key={book} className="bg-white rounded-xl shadow-lg overflow-hidden">
                <img
                  src="https://via.placeholder.com/300x450"
                  alt="Book Cover"
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-teal-900">Book Title {book}</h3>
                  <p className="text-gray-600 mt-2">
                    A thrilling adventure awaits in this captivating novel. Discover the secrets hidden within its pages.
                  </p>
                  <a
                    href="#"
                    className="mt-4 inline-block text-amber-600 hover:text-amber-700 font-medium"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Books;