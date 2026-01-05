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
    <section className="py-24 w-full relative">

      {/* Modern Background decoration (Subtle gradient blob) */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-accent/5 rounded-full blur-3xl -z-10 pointer-events-none"></div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADER */}
        <div className="text-center mb-16">
          <span className="text-accent font-bold tracking-[0.2em] uppercase text-sm animate-pulse">
            The Library
          </span>
          <h3 className="text-4xl md:text-6xl font-header font-bold text-primary mt-3 transition-colors">
            Featured Worlds
          </h3>
          <p className="text-secondary mt-4 max-w-2xl mx-auto font-body">
            Step through the portal. Each book is a universe waiting to be explored.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {books.map((book) => (
            <Link
              to={`/book/${book.id}`}
              key={book.id}
              className="group relative block h-[550px] transition-all duration-500 hover:-translate-y-4"
            >
              {/* CARD CONTAINER */}
              <div className="absolute inset-0 bg-card rounded-3xl overflow-hidden shadow-card border border-gray-100 flex flex-col transition-all duration-300">

                {/* 90s Decoration: Rainbow Strip at top (Only visible in 90s mode) */}
                <div className="hidden retro-strip h-2 w-full bg-gradient-to-r from-blue-600 via-yellow-400 to-red-600"></div>
                <style>{`html[data-theme='90s'] .retro-strip { display: block; }`}</style>

                {/* IMAGE AREA (Tall & Immersive) */}
                <div className="h-[60%] relative overflow-hidden bg-gray-200">
                  <img
                    src={book.cover_url}
                    alt={book.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />

                  {/* Modern Gradient Overlay (Fade text readability) */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity"></div>

                  {/* Floating Badge */}
                  <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm text-primary text-xs font-bold px-3 py-1 rounded-full shadow-lg">
                    {book.progress === 100 ? 'COMPLETE' : `${book.progress}% DONE`}
                  </div>
                </div>

                {/* CONTENT AREA */}
                <div className="h-[40%] p-8 flex flex-col justify-between relative z-10">
                  <div>
                    {/* Title */}
                    <h4 className="text-2xl font-header font-bold text-primary leading-tight mb-3 group-hover:text-accent transition-colors">
                      {book.title}
                    </h4>

                    {/* Description */}
                    <p className="text-secondary text-sm font-body line-clamp-3 leading-relaxed">
                      {book.description}
                    </p>
                  </div>

                  {/* BOTTOM ACTION BAR */}
                  <div className="flex items-center justify-between mt-4 pt-4 border-t border-gray-100/50">
                    <span className="text-xs font-bold text-secondary uppercase tracking-wider">
                      Enter Portal
                    </span>

                    {/* Animated Arrow Button */}
                    <div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-primary transition-all duration-300 group-hover:bg-accent group-hover:text-white group-hover:border-accent group-hover:rotate-45">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>

              {/* 90s: "New!" Flashing Sticker (Only visible in 90s mode via CSS) */}
              <div className="hidden retro-sticker absolute -top-4 -left-4 bg-yellow-400 text-red-600 font-bold border-2 border-black px-2 py-1 rotate-[-10deg] shadow-lg z-20">
                 NEW!
              </div>
              <style>{`html[data-theme='90s'] .retro-sticker { display: block; }`}</style>

            </Link>
          ))}
        </div>

        {/* "View All" Link below */}
        <div className="text-center mt-16">
          <Link to="/books" className="btn-primary">
            View Full Library
          </Link>
        </div>

      </div>
    </section>
  );
};

export default FeaturedBooks;
