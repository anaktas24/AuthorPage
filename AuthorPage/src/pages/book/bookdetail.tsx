// BookDetail.tsx (optional simplified version)
import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

interface Character {
  name: string;
  image: string;
  bio: string;
}

interface Setting {
  name: string;
  description: string;
}

interface Worldbuilding {
  magic: string;
  history: string;
  culture: string;
}

interface Book {
  id: number;
  title: string;
  description: string;
  cover_url: string;
  progress: number;
  characters: Character[];
  settings: Setting[];
  worldbuilding: Worldbuilding;
}

const BookDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [book, setBook] = useState<Book | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data))
      .catch((err) => console.error('Error fetching book:', err));
  }, [id]);

  if (!book) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#FDF6E3] text-teal-900">
        Loading...
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#FDF6E3] pt-40 pb-12 px-4 sm:px-6 lg:px-8">

      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6 flex flex-col sm:flex-row gap-6 transform hover:scale-[1.02] transition-transform duration-300">
            <img
              src={book.cover_url}
              alt={book.title}
              className="w-full sm:w-1/3 rounded-lg object-cover"
            />
            <div className="flex-1">
              <h2 className="text-3xl font-bold text-teal-900 mb-3">{book.title}</h2>
              <p className="text-gray-600 mb-4">{book.description}</p>
              <div className="mb-4">
                <span className="text-sm text-gray-600">Progress: {book.progress}%</span>
                <div className="w-full bg-gray-200 rounded-full h-2.5 mt-1">
                  <div
                    className="bg-amber-400 h-2.5 rounded-full"
                    style={{ width: `${book.progress}%` }}
                  ></div>
                </div>
              </div>
              <Link
                to="/books"
                className="inline-block bg-amber-400 text-teal-900 px-5 py-2 rounded-full font-semibold hover:bg-amber-500 transition-colors duration-200"
              >
                Back to Books
              </Link>
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 md:row-span-2 transform hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-2xl font-bold text-teal-900 mb-4 text-center">World Map</h3>
            <div className="relative">
              <img
                src="https://via.placeholder.com/800x400?text=World+Map"
                alt="World Map"
                className="w-full rounded-lg"
              />
              {book.settings.map((setting, index) => (
                <div
                  key={setting.name}
                  className={`map-hotspot absolute w-6 h-6 bg-amber-400 rounded-full cursor-pointer ${
                    index === 0 ? 'top-1/4 left-1/4' : 'top-3/4 right-1/4'
                  }`}
                  title={setting.name}
                >
                  <span className="absolute hidden hover:block bg-teal-900 text-amber-100 p-2 rounded text-sm -top-10 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                    {setting.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-6 col-span-1 lg:col-span-2 transform hover:scale-[1.02] transition-transform duration-300">
          <h3 className="text-2xl font-bold text-teal-900 mb-4 text-center">Characters</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {book.characters.map((character) => (
              <div key={character.name} className="bg-[#FDF6E3] rounded-lg p-3 shadow-sm">
                <img
                  src={character.image}
                  alt={character.name}
                  className="w-full h-40 object-cover rounded-md mb-2"
                />
                <h4 className="text-lg font-semibold text-teal-900">{character.name}</h4>
                <p className="text-gray-600 text-sm">{character.bio}</p>
              </div>
            ))}
          </div>
        </div>

          <div className="bg-white rounded-2xl shadow-lg p-6 transform hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-2xl font-bold text-teal-900 mb-4 text-center">Settings</h3>
            <div className="space-y-4">
              {book.settings.map((setting) => (
                <div key={setting.name}>
                  <h4 className="text-lg font-semibold text-teal-900">{setting.name}</h4>
                  <p className="text-gray-600 text-sm">{setting.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="lg:col-span-2 bg-white rounded-2xl shadow-lg p-6 transform hover:scale-[1.02] transition-transform duration-300">
            <h3 className="text-2xl font-bold text-teal-900 mb-4 text-center">Worldbuilding</h3>
            <div className="space-y-4">
              <div>
                <h4 className="text-lg font-semibold text-teal-900">Magic System</h4>
                <p className="text-gray-600 text-sm">{book.worldbuilding.magic}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-teal-900">History</h4>
                <p className="text-gray-600 text-sm">{book.worldbuilding.history}</p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-teal-900">Culture</h4>
                <p className="text-gray-600 text-sm">{book.worldbuilding.culture}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookDetail;
