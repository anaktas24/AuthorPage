import { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

// -- INTERFACES --
interface Character { name: string; image: string; bio: string; }
interface Setting { name: string; description: string; }
interface Worldbuilding { magic: string; history: string; culture: string; }
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

  // State to track which "Box" is open. null = Bento Grid View.
  const [activeView, setActiveView] = useState<'synopsis' | 'characters' | 'world' | null>(null);

  useEffect(() => {
    fetch(`http://localhost:3000/api/books/${id}`)
      .then((res) => res.json())
      .then((data) => setBook(data))
      .catch((err) => console.error('Error fetching book:', err));
  }, [id]);

  if (!book) return <div className="min-h-screen flex items-center justify-center font-bold text-primary">Loading Archives...</div>;

  // =========================================================
  // VIEW 1: THE CINEMATIC DETAIL VIEW (Drill Down)
  // =========================================================
  if (activeView) {
    return (
      <div className="min-h-screen w-full relative animate-fade-in">

        {/* Hero Backdrop */}
        <div className="fixed inset-0 w-full h-full -z-10 overflow-hidden">
          <div
             className="absolute inset-0 bg-cover bg-center opacity-20 blur-3xl scale-110"
             style={{ backgroundImage: `url(${book.cover_url})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--bg-background)]"></div>
        </div>

        <div className="container mx-auto px-4 pt-32 pb-20 max-w-6xl">

          {/* Navigation Header */}
          <div className="flex items-center justify-between mb-8">
            <button
              onClick={() => setActiveView(null)}
              className="btn-primary flex items-center gap-2 px-6"
            >
              &larr; Back to Dashboard
            </button>
            <h2 className="text-3xl font-header font-bold text-primary uppercase tracking-widest hidden md:block">
              {activeView}
            </h2>
          </div>

          {/* CONTENT: SYNOPSIS */}
          {activeView === 'synopsis' && (
            <div className="bg-card shadow-card rounded-3xl p-8 md:p-12 border border-gray-100 flex flex-col md:flex-row gap-10">
              <img src={book.cover_url} alt="Cover" className="w-full md:w-1/3 rounded-xl shadow-lg object-cover" />
              <div className="flex-1">
                <h1 className="text-4xl md:text-6xl font-header font-bold text-primary mb-6">{book.title}</h1>
                <div className="prose prose-lg text-secondary font-body leading-relaxed mb-6">
                  {book.description}
                </div>
                <div className="flex gap-4">
                  <div className="bg-accent/10 text-accent px-4 py-2 rounded-lg font-bold">
                    Progress: {book.progress}%
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* CONTENT: CHARACTERS */}
          {activeView === 'characters' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {book.characters.map((char) => (
                <div key={char.name} className="bg-card shadow-card p-6 rounded-3xl flex flex-col items-center text-center border-t-4 border-accent transition-transform hover:-translate-y-2">
                   <img src={char.image} alt={char.name} className="w-32 h-32 rounded-full object-cover shadow-lg mb-4 border-4 border-white" />
                   <h3 className="text-2xl font-header font-bold text-primary">{char.name}</h3>
                   <p className="text-secondary font-body mt-2">{char.bio}</p>
                </div>
              ))}
            </div>
          )}

          {/* CONTENT: WORLD */}
          {activeView === 'world' && (
             <div className="bg-card shadow-card rounded-3xl overflow-hidden">
                <div className="h-64 md:h-96 bg-gray-200 relative">
                  <img src="https://via.placeholder.com/1200x600?text=Interactive+World+Map" className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-8">
                    <h2 className="text-white text-4xl font-header font-bold">The World Map</h2>
                  </div>
                </div>
                <div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-3 gap-12">
                   <div className="space-y-4">
                      <h4 className="font-bold text-accent uppercase tracking-wider">Locations</h4>
                      {book.settings.map(s => (
                        <div key={s.name} className="p-3 bg-gray-50 rounded-lg">
                          <div className="font-bold text-primary">{s.name}</div>
                          <div className="text-xs text-secondary">{s.description}</div>
                        </div>
                      ))}
                   </div>
                   <div className="md:col-span-2 space-y-6">
                      <div>
                        <h4 className="font-bold text-primary text-xl mb-2">Magic System</h4>
                        <p className="text-secondary leading-relaxed">{book.worldbuilding.magic}</p>
                      </div>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                         <div>
                            <h4 className="font-bold text-primary text-xl mb-2">History</h4>
                            <p className="text-sm text-secondary leading-relaxed">{book.worldbuilding.history}</p>
                         </div>
                         <div>
                            <h4 className="font-bold text-primary text-xl mb-2">Culture</h4>
                            <p className="text-sm text-secondary leading-relaxed">{book.worldbuilding.culture}</p>
                         </div>
                      </div>
                   </div>
                </div>
             </div>
          )}
        </div>
      </div>
    );
  }

  // =========================================================
  // VIEW 2: THE BENTO DASHBOARD (Overview)
  // =========================================================
  return (
    <div className="min-h-screen pt-32 pb-20 w-full px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-7xl">

        {/* HEADER */}
        <div className="flex justify-between items-end mb-8">
           <div>
             <Link to="/books" className="text-sm font-bold text-secondary hover:text-primary mb-2 block">&larr; Library</Link>
             <h1 className="text-4xl md:text-5xl font-header font-bold text-primary">{book.title}</h1>
           </div>
           <div className="hidden md:block text-right">
              <span className="text-accent font-bold text-lg">{book.progress}% Complete</span>
              <div className="w-32 h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
                <div className="h-full bg-accent" style={{ width: `${book.progress}%` }}></div>
              </div>
           </div>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 auto-rows-[200px]">

          {/* TILE 1: SYNOPSIS (Big) */}
          <div
            onClick={() => setActiveView('synopsis')}
            className="md:col-span-2 md:row-span-2 bg-card rounded-3xl p-8 shadow-card flex flex-col justify-between cursor-pointer group hover:ring-4 ring-accent/20 transition-all"
          >
             <div className="flex gap-6">
                <img src={book.cover_url} className="w-24 h-36 rounded-lg object-cover shadow-md rotate-[-2deg] group-hover:rotate-0 transition-transform" />
                <div>
                   <h3 className="text-2xl font-header font-bold text-primary mb-2">Synopsis</h3>
                   <p className="text-secondary line-clamp-4 font-body">{book.description}</p>
                </div>
             </div>
             <div className="flex justify-between items-center mt-4">
                <span className="text-xs font-bold text-gray-400 uppercase">Click to Read Full Story</span>
                <div className="w-10 h-10 rounded-full bg-gray-100 flex items-center justify-center group-hover:bg-accent group-hover:text-white transition-colors">
                  &rarr;
                </div>
             </div>
          </div>

          {/* TILE 2: CHARACTERS (Tall) */}
          <div
            onClick={() => setActiveView('characters')}
            className="md:col-span-1 md:row-span-2 bg-zinc-900 text-white rounded-3xl p-6 shadow-card cursor-pointer group hover:scale-[1.02] transition-transform relative overflow-hidden"
          >
             <div className="absolute top-0 right-0 p-32 bg-accent/20 blur-3xl rounded-full pointer-events-none"></div>
             <h3 className="text-xl font-header font-bold mb-4 relative z-10">Cast & Crew</h3>
             <div className="space-y-4 relative z-10">
                {book.characters.slice(0, 3).map(char => (
                   <div key={char.name} className="flex items-center gap-3">
                      <img src={char.image} className="w-10 h-10 rounded-full border border-white/20" />
                      <span className="font-bold text-sm">{char.name}</span>
                   </div>
                ))}
                {book.characters.length > 3 && (
                   <div className="text-xs text-gray-400 pl-2">+ {book.characters.length - 3} more...</div>
                )}
             </div>
             <div className="absolute bottom-6 right-6 font-bold text-accent group-hover:translate-x-1 transition-transform">View All &rarr;</div>
          </div>

          {/* TILE 3: WORLD MAP (Square) */}
          <div
             onClick={() => setActiveView('world')}
             className="md:col-span-1 bg-gray-200 rounded-3xl overflow-hidden relative cursor-pointer group"
          >
             <img src="https://via.placeholder.com/400x400?text=Map" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
             <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                <span className="text-white font-bold text-lg backdrop-blur-md px-4 py-2 rounded-xl border border-white/30">
                  Open Map
                </span>
             </div>
          </div>

          {/* TILE 4: MAGIC/LORE (Square) */}
          <div
             onClick={() => setActiveView('world')}
             className="md:col-span-1 bg-accent/10 rounded-3xl p-6 flex flex-col justify-center items-center text-center cursor-pointer border-2 border-accent/20 hover:bg-accent/20 transition-colors"
          >
             <span className="text-4xl mb-2">🔮</span>
             <h3 className="font-bold text-accent">Magic System</h3>
             <p className="text-xs text-secondary mt-1">Click to reveal the secrets</p>
          </div>

        </div>
      </div>
    </div>
  );
};

export default BookDetail;
