// BookDetailAppleBento.tsx
import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import type { Variants } from "framer-motion";

// Variant with custom delay support
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (custom: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { delay: custom, duration: 0.6, ease: "easeOut" },
  }),
};

const BookDetailAppleBento: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<any>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data))
      .catch(console.error);
  }, [id]);

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center text-gray-500">
        Loading…
      </div>
    );
  }

  return (
  <div className="bg-white text-gray-900">
    {/* Hero */}
    <motion.section
      className="grid grid-cols-12 gap-6 max-w-7xl mx-auto px-6 py-20"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
    >
      <motion.div
        className="col-span-12 lg:col-span-7 flex flex-col justify-center"
        variants={fadeInUp}
        custom={0.1}
      >
        <h1 className="text-5xl font-bold mb-6">{book.title}</h1>
        <p className="text-lg text-gray-600 max-w-xl">{book.description}</p>
      </motion.div>
      <motion.div
        className="col-span-12 lg:col-span-5"
        variants={fadeInUp}
        custom={0.3}
      >
        {book.cover_url && (
          <img
            src={book.cover_url}
            alt={book.title}
            className="rounded-3xl w-full object-cover shadow-xl"
          />
        )}
      </motion.div>
    </motion.section>

    {/* Bento Grid */}
    <section className="grid grid-cols-12 auto-rows-[250px] gap-6 max-w-7xl mx-auto px-6 pb-20">
      {/* Characters — tall vertical */}
      <motion.div
        className="col-span-12 lg:col-span-3 lg:row-span-3 bg-gray-50 rounded-3xl p-8 overflow-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={0.1}
      >
        <h2 className="text-2xl font-semibold mb-6">Characters</h2>
        <div className="space-y-6">
          {book.characters?.map((char: any, i: number) => (
            <motion.div
              key={char.name}
              className="flex flex-col items-center text-center"
              variants={fadeInUp}
              custom={0.2 + i * 0.05}
            >
              {char.image && (
                <img
                  src={char.image}
                  alt={char.name}
                  className="w-24 h-24 object-cover rounded-full mb-3 shadow-md"
                />
              )}
              <h3 className="font-semibold">{char.name}</h3>
              {char.bio && (
                <p className="text-gray-600 text-sm">{char.bio}</p>
              )}
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Synopsis — wide horizontal */}
      <motion.div
        className="col-span-12 lg:col-span-9 lg:row-span-1 bg-gray-50 rounded-3xl p-10 flex flex-col justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={0.15}
      >
        <h2 className="text-3xl font-semibold mb-4">Synopsis</h2>
        <p className="text-gray-700 leading-relaxed">{book.description}</p>
      </motion.div>

      {/* World — square */}
      <motion.div
        className="col-span-12 lg:col-span-6 lg:row-span-2 bg-gray-50 rounded-3xl p-10 flex flex-col justify-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={0.2}
      >
        <h2 className="text-3xl font-semibold mb-4">World</h2>
        {book.worldbuilding ? (
          <>
            {book.worldbuilding.magic && (
              <p><strong>Magic:</strong> {book.worldbuilding.magic}</p>
            )}
            {book.worldbuilding.history && (
              <p><strong>History:</strong> {book.worldbuilding.history}</p>
            )}
            {book.worldbuilding.culture && (
              <p><strong>Culture:</strong> {book.worldbuilding.culture}</p>
            )}
          </>
        ) : (
          <p className="text-gray-500">No world details available.</p>
        )}
      </motion.div>

      {/* Extras — smaller */}
      <motion.div
        className="col-span-12 lg:col-span-3 lg:row-span-2 bg-gray-50 rounded-3xl p-8 overflow-auto"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true }}
        variants={fadeInUp}
        custom={0.25}
      >
        <h2 className="text-2xl font-semibold mb-4">Extras</h2>
        {book.extras && book.extras.length > 0 ? (
          <div className="grid grid-cols-1 gap-4">
            {book.extras.map((extra: any, i: number) => (
              <motion.div
                key={i}
                className="rounded-xl overflow-hidden"
                variants={fadeInUp}
                custom={0.3 + i * 0.05}
              >
                {extra.type === "image" && (
                  <img
                    src={extra.url}
                    alt={`Extra ${i}`}
                    className="w-full h-40 object-cover"
                  />
                )}
                {extra.type === "video" && (
                  <video controls className="w-full h-40 object-cover">
                    <source src={extra.url} type="video/mp4" />
                  </video>
                )}
              </motion.div>
            ))}
          </div>
        ) : (
          <p className="text-gray-500">No extra media available.</p>
        )}
      </motion.div>

      
    </section>

    {/* Back */}
    <div className="max-w-7xl mx-auto px-6 pb-10">
      <Link
        to="/books"
        className="inline-block mt-4 text-blue-600 hover:underline"
      >
        ← Back to Books
      </Link>
    </div>
  </div>
);
};

export default BookDetailAppleBento;