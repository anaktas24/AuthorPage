import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';



interface Book {
  id: number;
  title: string;
  description: string;
  cover_url: string;
  progress: number;
}

const Books: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/books')
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error('Error fetching books:', err));
  }, []);

  return (
    <div className='min-h-screen bg-white py-40'>
      <section className="parchment-bg py-16 seamless-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-teal-900 mb-8 text-center">My Books</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {books.map((book) => (
              <Link
                to={`/book/${book.id}`}
                key={book.id}
                className="seamless-bg tilt-card"
              >
                <img
                  src={book.cover_url}
                  alt={book.title}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-2xl font-semibold text-teal-900">{book.title}</h3>
                  <p className="text-gray-600 mt-2">{book.description}</p>
                  <div className="mt-4">
                    <span className="text-sm text-gray-600">Progress: {book.progress}%</span>
                    <div className="progress-bar">
                      <div
                        className="progress-fill"
                        style={{ width: `${book.progress}%` }}
                      ></div>
                    </div>
                  </div>
                  <span className="mt-4 inline-block text-amber-600 hover:text-amber-700 font-medium">
                    Learn More
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Books;
