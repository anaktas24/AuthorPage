import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';


interface Book {
  id: number;
  title: string;
  description: string;
  cover_url: string;
  progress: number;
}

const FeaturedBooks: React.FC<{ isNineties?: boolean }> = ({ isNineties = false }) => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/books')
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error('Error fetching books:', err));
  }, []);



  return (
    <section className={isNineties ? 'nineties-section' : 'bg-white py-16 seamless-bg'}>
      <div className={isNineties ? 'max-w-4xl mx-auto px-4' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}>
        <h3 className={isNineties
          ? 'text-3xl font-pixel text-yellow-300 mb-6 text-center'
          : 'text-4xl font-bold text-teal-900 mb-12 text-center tracking-tight'}
        >
          Featured Books
        </h3>

        <div className={isNineties
          ? 'grid grid-cols-1 gap-6'
          : 'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10'}
        >
        {books.map((book) => (
          <Link
              to={`/book/${book.id}`}
              key={book.id}
              className="block rounded-2xl overflow-hidden transition-transform duration-300 hover:-translate-y-1 hover:shadow-xl"
              aria-label={`Enter portal for ${book.title}`}
            >
              <div className="w-full h-64 bg-gray-100 flex items-center justify-center">
                <img
                  src={book.cover_url}
                  alt={book.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
              <div className="p-4">
                <h4 className="text-xl font-semibold text-teal-900">{book.title}</h4>
              </div>
            </Link>

            ))}

        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
