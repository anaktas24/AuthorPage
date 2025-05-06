import { useState, useEffect } from 'react';
import NinetiesNavbar from '../components/NinetiesNavbar';
import Footer from '../components/Footer';

const NinetiesLook: React.FC = () => {
  const [guestbookEntry, setGuestbookEntry] = useState({ name: '', message: '' });
  const [isMidiPlaying, setIsMidiPlaying] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setGuestbookEntry({ ...guestbookEntry, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Guestbook entry:', guestbookEntry);
    setGuestbookEntry({ name: '', message: '' });
  };

  const toggleMidi = () => {
    setIsMidiPlaying(!isMidiPlaying);
  };

  // Cursor trail effect
  useEffect(() => {
    const trail = (e: MouseEvent) => {
      const trailElement = document.createElement('img');
      trailElement.src = 'https://media.giphy.com/media/26ufnwz3wDUli7GU0/giphy.gif';
      trailElement.className = 'cursor-trail';
      trailElement.style.left = `${e.pageX - 8}px`;
      trailElement.style.top = `${e.pageY - 8}px`;
      document.body.appendChild(trailElement);
      setTimeout(() => trailElement.remove(), 500);
    };
    document.addEventListener('mousemove', trail);
    return () => document.removeEventListener('mousemove', trail);
  }, []);

  return (
    <div className="nineties-bg min-h-screen font-['VT323'] text-lg">
      <NinetiesNavbar />
      <div className="max-w-4xl mx-auto px-4 py-8 text-center">
        {/* Loading Bar */}
        <div className="loading-bar h-2 w-full mb-6"></div>

        <h1 className="text-4xl text-[#FFFF00] mb-4 animate-blink">Welcome to My Rad Book Site!</h1>
        <marquee className="nineties-marquee mb-6">
          *** Coming Soon: An Epic Fantasy Adventure! ***
        </marquee>
        <img
          src="https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif"
          alt="Under Construction"
          className="mx-auto mb-6 w-32"
        />

        {/* Book Teaser with Modal */}
        <div
          className="teaser-card bg-[#FF00FF] border-4 border-[#00FFFF] p-6 mb-6 rounded-none shadow-[8px_8px_0_#00FF00] cursor-pointer"
          onClick={() => setShowModal(true)}
        >
          <h2 className="text-3xl text-[#FFFF00] mb-4 flex items-center">
            About My Book
            <img
              src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"
              alt="New"
              className="w-8 h-8 ml-2"
            />
          </h2>
          <p className="text-[#00FF00]">
            Yo, check it! My upcoming book is a totally tubular fantasy trip! Picture portals to a world with dragons, magic, and a village lit by lanterns. Follow Jet, Aria, and Kiyo as they battle gnarly forces. It’s gonna be the bomb!
          </p>
          <a
            href="#"
            className="nineties-button mt-4 inline-block"
            onClick={(e) => e.stopPropagation()}
          >
            Stay Tuned!
          </a>
        </div>

        {/* Modal */}
        {showModal && (
          <div className="fixed inset-0 bg-[#000080] bg-opacity-80 flex items-center justify-center z-50">
            <div className="bg-[#FF00FF] border-4 border-[#00FFFF] p-6 max-w-lg rounded-none">
              <h3 className="text-2xl text-[#FFFF00] mb-4">Enter the Portal!</h3>
              <p className="text-[#00FF00] mb-4">
                A world of dragons and glowing lanterns awaits! Jet, Aria, and Kiyo uncover secrets in a village guarded by a massive dragon statue. Click below to close this rad preview!
              </p>
              <button
                className="nineties-button"
                onClick={() => setShowModal(false)}
              >
                Close
              </button>
            </div>
          </div>
        )}

        {/* Guestbook */}
        <div className="bg-[#0000FF] border-4 border-[#FFFF00] p-6 mb-6 rounded-none shadow-[8px_8px_0_#FF00FF]">
          <h2 className="text-3xl text-[#FFFF00] mb-4">Sign My Guestbook!</h2>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-[#00FF00] mb-1">Your Name:</label>
              <input
                type="text"
                name="name"
                value={guestbookEntry.name}
                onChange={handleChange}
                className="w-full bg-[#FFFFFF] text-[#000000] border-2 border-[#FF00FF] px-2 py-1 font-['VT323'] text-lg"
                required
              />
            </div>
            <div>
              <label className="block text-[#00FF00] mb-1">Your Message:</label>
              <textarea
                name="message"
                value={guestbookEntry.message}
                onChange={handleChange}
                className="w-full bg-[#FFFFFF] text-[#000000] border-2 border-[#FF00FF] px-2 py-1 font-['VT323'] text-lg"
                rows={4}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="nineties-button"
            >
              Submit!
            </button>
          </form>
        </div>

        {/* MIDI Toggle */}
        <div className="mb-6">
          <button
            className="nineties-button mb-4"
            onClick={toggleMidi}
          >
            {isMidiPlaying ? 'Stop MIDI Jams!' : 'Play MIDI Jams!'}
          </button>
          {isMidiPlaying && (
            <div className="loading-bar h-4 w-64 mx-auto animate-pulse"></div>
          )}
        </div>

        {/* Hit Counter */}
        <div className="mb-6">
          <img
            src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"
            alt="Hit Counter"
            className="mx-auto w-24"
          />
          <p className="text-[#00FF00]">Visitors since 1995!</p>
        </div>

        {/* Extra Clipart */}
        <div className="flex justify-center gap-4">
          <img
            src="https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif"
            alt="Clipart"
            className="w-16"
          />
          <img
            src="https://media.giphy.com/media/26ufnwz3wDUli7GU0/giphy.gif"
            alt="Clipart"
            className="w-16"
          />
          <img
            src="https://media.giphy.com/media/l0MYt5jPR6QX5pnqM/giphy.gif"
            alt="Clipart"
            className="w-16"
          />
        </div>
      </div>
      <Footer isNineties={true} />
    </div>
  );
};

export default NinetiesLook;