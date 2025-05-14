import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';


interface Book {
  id: number;
  title: string;
  description: string;
  cover_url: string;
  progress: number;
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

  const characters = [
    {
      name: 'Jet',
      image: 'https://via.placeholder.com/200',
      bio: 'A quick-witted leader with a knack for solving puzzles. Jet’s mysterious green sparks hint at a deeper connection to the portals.',
    },
    {
      name: 'Aria',
      image: 'https://via.placeholder.com/200',
      bio: 'A skilled mage who weaves light into spells. Aria’s calm demeanor hides a fierce determination to protect her friends.',
    },
    {
      name: 'Kiyo',
      image: 'https://via.placeholder.com/200',
      bio: 'A stealthy scout with a love for adventure. Kiyo’s knowledge of the Starlit Plains is unmatched.',
    },
  ];

  const settings = [
    {
      name: 'Lantern Village',
      description:
        'A quaint village illuminated by enchanted lanterns that never fade. Its cobbled streets hide ancient portal ruins.',
    },
    {
      name: 'Starlit Plains',
      description:
        'Vast grasslands under a sky of endless stars. Portals shimmer in hidden groves, guarded by ancient spirits.',
    },
  ];

  const worldbuilding = {
    magic: 'Portals are powered by starlight, channeled through rare crystals. Only the gifted can activate them.',
    history:
      'The world was once united by portals, but a great schism sealed most gateways, leaving only myths.',
    culture: 'Villagers celebrate the Starlit Festival, honoring the portals with dances and glowing offerings.',
  };

  if (!book) return <div>Loading...</div>;

  return (
    <div className="min-h-screen bg-[#FDF6E3] book-detail">
      <section className="parchment-bg py-16 seamless-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-8 mb-16">
            <img
              src={book.cover_url}
              alt={book.title}
              className="w-full md:w-1/3"
            />
            <div className="md:w-2/3">
              <h2 className="text-4xl font-bold text-teal-900 mb-4">{book.title}</h2>
              <p className="text-lg text-gray-600 mb-4">{book.description}</p>
              <div className="mb-4">
                <span className="text-sm text-gray-600">Progress: {book.progress}%</span>
                <div className="progress-bar">
                  <div
                    className="progress-fill"
                    style={{ width: `${book.progress}%` }}
                  ></div>
                </div>
              </div>
              <Link
                to="/books"
                className="bg-amber-400 text-teal-900 px-6 py-3 rounded-full font-semibold hover:bg-amber-500 transition-transform duration-200 hover:scale-105"
              >
                Back to Books yall
              </Link>
            </div>
          </div>
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-teal-900 mb-6 text-center">World Map</h3>
            <div className="relative">
              <img
                src="https://via.placeholder.com/800x400?text=World+Map"
                alt="World Map"
                className="w-full"
              />
              <div
                className="map-hotspot absolute top-1/4 left-1/4 w-8 h-8 bg-amber-400 rounded-full cursor-pointer"
                title="Lantern Village"
              >
                <span className="hidden hover:block bg-teal-900 text-amber-100 p-2 rounded text-sm">
                  Lantern Village: A glowing haven of magic.
                </span>
              </div>
              <div
                className="map-hotspot absolute top-3/4 right-1/4 w-8 h-8 bg-amber-400 rounded-full cursor-pointer"
                title="Starlit Plains"
              >
                <span className="hidden hover:block bg-teal-900 text-amber-100 p-2 rounded text-sm">
                  Starlit Plains: Home to hidden portals.
                </span>
              </div>
            </div>
          </div>
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-teal-900 mb-6 text-center">Characters</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {characters.map((character) => (
                <div
                  key={character.name}
                  className="character-card seamless-bg p-6"
                >
                  <img
                    src={character.image}
                    alt={character.name}
                    className="w-full h-48 object-cover mb-4"
                  />
                  <h4 className="text-2xl font-semibold text-teal-900">{character.name}</h4>
                  <p className="text-gray-600">{character.bio}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-teal-900 mb-6 text-center">Settings</h3>
            <div className="space-y-8">
              {settings.map((setting) => (
                <div key={setting.name} className="seamless-bg p-6">
                  <h4 className="text-2xl font-semibold text-teal-900">{setting.name}</h4>
                  <p className="text-gray-600">{setting.description}</p>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-3xl font-bold text-teal-900 mb-6 text-center">Worldbuilding</h3>
            <div className="seamless-bg p-6">
              <h4 className="text-2xl font-semibold text-teal-900 mb-2">Magic System</h4>
              <p className="text-gray-600 mb-4">{worldbuilding.magic}</p>
              <h4 className="text-2xl font-semibold text-teal-900 mb-2">History</h4>
              <p className="text-gray-600 mb-4">{worldbuilding.history}</p>
              <h4 className="text-2xl font-semibold text-teal-900 mb-2">Culture</h4>
              <p className="text-gray-600">{worldbuilding.culture}</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default BookDetail;
