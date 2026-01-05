import { Link } from 'react-router-dom';
import { useEffect, useState } from 'react';

interface Book {
  id: number;
  title: string;
  description: string;
  cover_url: string;
  progress: number;
}

const FeaturedBooks: React.FC = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/books')
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error('Error fetching books:', err));
  }, []);

  return (
    <section className="py-16 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADLINE: Automatically switches fonts and colors */}
        <h3 className="text-3xl sm:text-4xl font-header font-bold text-primary mb-12 text-center tracking-tight transition-colors">
          Featured Books
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {books.map((book) => (
            <Link
              to={`/book/${book.id}`}
              key={book.id}
              className="group block rounded-2xl overflow-hidden transition-all duration-300
                         bg-card shadow-card hover:-translate-y-1 hover:shadow-lg border-2 border-transparent"
              aria-label={`Enter portal for ${book.title}`}
            >
              {/* IMAGE CONTAINER */}
              <div className="w-full h-64 bg-gray-200 flex items-center justify-center overflow-hidden">
                <img
                  src={book.cover_url}
                  alt={book.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h4 className="text-xl font-bold font-header text-primary group-hover:text-accent transition-colors">
                  {book.title}
                </h4>
                {/* Optional description preview */}
                <p className="mt-2 text-sm text-secondary font-body line-clamp-2">
                  {book.description}
                </p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;
