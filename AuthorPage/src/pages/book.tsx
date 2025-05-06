import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

const books = [
  { id: 1, title: 'Book Title 1', description: 'An epic tale of adventure and discovery.', cover: 'https://via.placeholder.com/300x450' },
  { id: 2, title: 'Book Title 2', description: 'A heartwarming story of love and redemption.', cover: 'https://via.placeholder.com/300x450' },
  { id: 3, title: 'Book Title 3', description: 'A thrilling mystery that keeps you guessing.', cover: 'https://via.placeholder.com/300x450' },
];

const Books: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">My Books</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
              <div key={book.id} className="bg-white shadow-md rounded-lg overflow-hidden">
                <img
                  src={book.cover}
                  alt={book.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900">{book.title}</h3>
                  <p className="text-gray-600 mt-2">{book.description}</p>
                  <div className="mt-4 flex gap-4">
                    <a
                      href="#"
                      className="text-blue-500 hover:text-blue-700 font-medium"
                    >
                      Learn More
                    </a>
                    <a
                      href="#"
                      className="text-blue-500 hover:text-blue-700 font-medium"
                    >
                      Buy Now
                    </a>
                  </div>
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