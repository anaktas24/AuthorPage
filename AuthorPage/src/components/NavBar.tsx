import { useState, useEffect, useRef } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

interface NavbarProps {
  isRetro: boolean;
  toggleTheme: () => void;
}

type NavItem =
  | { name: string; type: 'link'; path: string; id?: never }
  | { name: string; type: 'scroll'; id: string; path?: never };

const Navbar: React.FC<NavbarProps> = ({ isRetro, toggleTheme }) => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isHidden, setIsHidden] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const prevScrollY = useRef(0);

  // Scroll detection logic
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // In 90s mode, we make it static (relative), so we don't need to hide it on scroll
      if (!isRetro && currentScrollY > 10 && currentScrollY > prevScrollY.current) {
        setIsHidden(true);
        setIsMobileOpen(false);
      } else {
        setIsHidden(false);
      }
      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [isRetro]);

  const handleScrollTo = (id: string) => {
    setIsMobileOpen(false);
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(id);
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(id);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const navLinks: NavItem[] = [
    { name: 'Books', path: '/books', type: 'link' },
    { name: 'Blog', path: '/posts', type: 'link' },
    { name: 'About', id: 'about', type: 'scroll' },
    { name: 'Contact', id: 'contact', type: 'scroll' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-transform duration-300
      ${isHidden ? '-translate-y-full' : 'translate-y-0'}
      ${isRetro
        ? 'relative top-auto border-b-4 border-double border-white' // 90s: Static position, Double border
        : 'bg-white/80 backdrop-blur-md border-b border-gray-100 font-sans'
      }`}
      style={isRetro ? { backgroundColor: '#000033' } : {}} // Deep Navy/Black background for 90s
    >
      {isRetro ? (
        /* ================= 90s SPACE NAVBAR ================= */
        <div className="flex flex-col items-center justify-center py-2 text-center font-mono">

          {/* Top Row: Marquee or Welcome */}
          <div className="w-full bg-blue-900 border-y border-blue-400 mb-2">
             {/* @ts-expect-error */}
             <marquee scrollamount="5" className="text-yellow-300 text-sm font-bold tracking-widest">
                +++ WELCOME TO THE PORTAL +++ SIGN THE GUESTBOOK +++ MIND THE GAP +++

             </marquee>
          </div>

          {/* Middle Row: The Links */}
          <div className="flex flex-wrap justify-center items-center gap-2 md:gap-6 px-4">

            {/* Home Icon */}
            <Link to="/" className="text-green-400 hover:text-white hover:bg-green-900 px-2 text-lg font-bold uppercase tracking-wider">
               <span className="text-yellow-500">★</span> HOME
            </Link>

            <span className="text-gray-500">|</span>

            {navLinks.map((link) => (
              <div key={link.name} className="flex items-center gap-2 md:gap-6">
                {link.type === 'link' ? (
                  <Link to={link.path} className="text-cyan-400 hover:text-white hover:bg-blue-900 px-2 text-lg font-bold uppercase tracking-wider underline decoration-wavy decoration-blue-500">
                    {link.name}
                  </Link>
                ) : (
                  <button onClick={() => handleScrollTo(link.id)} className="text-cyan-400 hover:text-white hover:bg-blue-900 px-2 text-lg font-bold uppercase tracking-wider underline decoration-wavy decoration-blue-500">
                    {link.name}
                  </button>
                )}
                <span className="text-gray-500 last:hidden">|</span>
              </div>
            ))}

            <span className="text-gray-500">|</span>

            {/* Theme Toggle (The Red Button) */}
            <button
              onClick={toggleTheme}
              className="ml-4 border-2 border-red-500 text-red-500 px-2 font-bold hover:bg-red-500 hover:text-white transition-colors text-sm"
            >
              [ DISABLE 90s ]
            </button>
          </div>

          {/* Bottom Decoration line */}
          <div className="w-full h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mt-2 opacity-50"></div>
        </div>
      ) : (
        /* ================= MODERN NAVBAR ================= */
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">

            <Link to="/" className="text-3xl font-bold font-header text-primary tracking-tighter">
              Author Name
            </Link>

            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                link.type === 'link' ? (
                  <Link key={link.name} to={link.path} className="text-primary font-bold hover:text-accent transition-colors">
                    {link.name}
                  </Link>
                ) : (
                  <button key={link.name} onClick={() => handleScrollTo(link.id)} className="text-primary font-bold hover:text-accent transition-colors">
                    {link.name}
                  </button>
                )
              ))}

              <button
                onClick={toggleTheme}
                className="ml-4 px-5 py-2 font-bold bg-black text-white rounded-full hover:bg-gray-800 hover:scale-105 active:scale-95 transition-all cursor-pointer"
              >
                ⚡ 90s MODE
              </button>
            </div>

            {/* Mobile Hamburger */}
            <div className="md:hidden flex items-center">
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="text-primary p-2 focus:outline-none"
              >
                {isMobileOpen ? (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
                ) : (
                  <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>
                )}
              </button>
            </div>
          </div>

          {isMobileOpen && (
            <div className="md:hidden bg-white border-t border-gray-100 pb-4 shadow-xl absolute w-full left-0 top-20">
              <div className="flex flex-col space-y-2 p-4">
                {navLinks.map((link) => (
                  link.type === 'link' ? (
                    <Link key={link.name} to={link.path} onClick={() => setIsMobileOpen(false)} className="block px-4 py-2 text-lg font-medium text-secondary hover:bg-gray-100 rounded-md">
                      {link.name}
                    </Link>
                  ) : (
                    <button key={link.name} onClick={() => handleScrollTo(link.id)} className="block w-full text-left px-4 py-2 text-lg font-medium text-secondary hover:bg-gray-100 rounded-md">
                      {link.name}
                    </button>
                  )
                ))}
                <button
                  onClick={() => { toggleTheme(); setIsMobileOpen(false); }}
                  className="mt-4 w-full py-3 font-bold bg-black text-white rounded-lg active:scale-95"
                >
                  ⚡ SWITCH TO 90s
                </button>
              </div>
            </div>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
