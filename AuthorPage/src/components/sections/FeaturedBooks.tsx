import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

interface Book {
  id: number;
  title: string;
  description: string;
  cover_url: string;
  progress: number; // 0–100
}

const FeaturedBooks: React.FC<{ isNineties?: boolean }> = ({ isNineties = false }) => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch("http://localhost:3000/api/books")
      .then((res) => res.json())
      .then((data) => setBooks(data))
      .catch((err) => console.error("Error fetching books:", err));
  }, []);

  const statusFromProgress = (p: number) => {
    if (p >= 100) return { label: "Out now", classes: "bg-emerald-100 text-emerald-800 ring-emerald-200" };
    if (p >= 80) return { label: "Preorder soon", classes: "bg-amber-100 text-amber-800 ring-amber-200" };
    if (p >= 40) return { label: `Editing · ${p}%`, classes: "bg-sky-100 text-sky-800 ring-sky-200" };
    return { label: `Draft · ${p}%`, classes: "bg-neutral-100 text-neutral-700 ring-neutral-200" };
  };

  return (
    <section className={isNineties ? "nineties-section" : "bg-white/0 py-14"}>
      <div className={isNineties ? "max-w-4xl mx-auto px-4" : "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8"}>
        <h3
          className={
            isNineties
              ? "text-3xl font-bold text-yellow-300 mb-8 text-center"
              : "text-3xl font-bold text-neutral-900 mb-10 text-center tracking-tight"
          }
        >
          Featured Books
        </h3>

        <div
          className={
            isNineties
              ? "grid grid-cols-1 gap-6"
              : "grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3"
          }
        >
          {books.map((book) => {
            const s = statusFromProgress(book.progress);
            return (
              <Link
                to={`/book/${book.id}`}
                key={book.id}
                aria-label={`Open ${book.title}`}
                className="group relative block overflow-hidden rounded-xl ring-1 ring-neutral-200/70 bg-white hover:shadow-lg hover:ring-neutral-300 transition-all duration-300"
              >
                {/* Media */}
                  <div className="relative w-full aspect-[4/5] bg-neutral-100 overflow-hidden">
                    <img
                      src={book.cover_url}
                      alt={`${book.title} — book cover`}
                      loading="lazy"
                      decoding="async"
                      className="absolute inset-0 size-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.05]"
                    />
                    {/* Status pill */}
                    <span
                      className={
                        "absolute left-2 top-2 inline-flex items-center rounded-full px-2 py-0.5 text-[10px] font-medium ring-1 " +
                        s.classes
                      }
                    >
                      {s.label}
                    </span>
                    {/* Hover overlay */}
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                  </div>


                {/* Content */}
<div className="p-3 flex flex-col gap-2">
  <h4 className="line-clamp-1 text-sm font-semibold text-neutral-900 group-hover:text-neutral-700 transition-colors">
    {book.title}
  </h4>
  <p className="line-clamp-1 text-xs text-neutral-600">{book.description}</p>

            {/* Circular progress */}
            <div className="mt-auto flex items-center justify-between">
              <div className="relative w-8 h-8">
                <svg className="absolute inset-0 w-full h-full -rotate-90">
                  <circle
                    cx="16"
                    cy="16"
                    r="14"
                    stroke="currentColor"
                    strokeWidth="3"
                    className="text-neutral-200"
                    fill="none"
                  />
                  <circle
                    cx="16"
                    cy="16"
                    r="14"
                    stroke="currentColor"
                    strokeWidth="3"
                    strokeDasharray={`${2 * Math.PI * 14}`}
                    strokeDashoffset={`${
                      2 * Math.PI * 14 - (book.progress / 100) * (2 * Math.PI * 14)
                    }`}
                    className="text-neutral-900 transition-all duration-500"
                    fill="none"
                  />
                </svg>
                <span className="absolute inset-0 flex items-center justify-center text-[9px] font-medium text-neutral-700">
                  {book.progress}%
                </span>
              </div>
            <span className="text-[10px] font-medium text-neutral-500">Progress</span>
                  </div>

                  {/* CTA */}
                  <span className="inline-flex items-center text-sm font-medium text-neutral-900/80 group-hover:text-neutral-900 mt-1">
                    Explore{" "}
                    <svg className="ml-1 h-4 w-4" viewBox="0 0 24 24" fill="none" aria-hidden>
                      <path
                        d="M7 17L17 7M17 7H9M17 7v8"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      />
                    </svg>
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturedBooks;