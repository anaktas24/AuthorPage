import { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';

interface NavItem {
  name: string;
  path: string;
}

const navItems: NavItem[] = [
  { name: 'Home', path: '/' },
  { name: 'Books', path: '/books' },
  { name: 'Blog', path: '/blog' },
  { name: 'About Me', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: "90's Look", path: '/nineties-look' },
];

const Navbar: React.FC = () => {
  const location = useLocation();
  const [isHidden, setIsHidden] = useState<boolean>(false);
  const prevScrollY = useRef(0);
  /*const [isOpen, setIsOpen] = useState(false);*/

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > prevScrollY.current;

      if (currentScrollY > 0 && scrollingDown) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }

      prevScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);


  return (
    <nav
      className={`fixed top-0 left-0 w-full bg-white bg-opacity-95 backdrop-blur-md  z-20 transition-transform duration-300 ${
        isHidden ? '-translate-y-full' : 'translate-y-0'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
      
        <div className="flex items-center h-20">
          <Link
            to="/"
            className="text-3xl font-bold text-gray-800 hover:text-blue-500 transition-colors duration-300"
          >
            Author Name
          </Link>
          <div className="flex items-center ml-12">
            <div className="flex space-x-20">
              {navItems.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link
                    key={item.name}
                    to={item.path}
                    className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                      isActive
                        ? 'bg-gray-200 text-gray-900 shadow-sm'
                        : 'text-gray-800 hover:bg-gray-200 hover:text-blue-500'
                    }`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;




/* FOR MOBILE

<div className="flex items-center ml-8 sm:hidden">
        <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800">
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      <div className={`sm:flex ${isOpen ? 'block' : 'hidden'} absolute top-20 left-0 w-full bg-gray-50 sm:static sm:bg-transparent sm:flex-row flex-col sm:space-x-4 space-y-2 sm:space-y-0 p-4 sm:p-0`}>
        {navItems.map((item) => (
          <Link key={item.name} to={item.path} className="..." onClick={() => setIsOpen(false)}>
            {item.name}
          </Link>
        ))}
      </div>

*/