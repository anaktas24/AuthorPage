import { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const navItems = [
  { name: 'Home', path: '/' },
  { name: 'Books', path: '/books' },
  { name: 'Blog', path: '/blog' },
  { name: 'About Me', path: '/about' },
  { name: 'Contact', path: '/contact' },
  { name: "90's Look", path: '/nineties-look' },
];

const Navbar: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState<string>('');
  const navigate = useNavigate();
  const location = useLocation();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <nav className="bg-gradient-to-r from-teal-900 to-amber-600 bg-opacity-90 backdrop-blur-md sticky top-0 z-50 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo / Name */}
          <Link to="/" className="text-3xl font-bold text-white drop-shadow-md hover:text-amber-200 transition">
            Author Name
          </Link>

          {/* Links and Search */}
          <div className="flex items-center space-x-4">
            {/* Navigation Links */}
            {navItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.name}
                  to={item.path}
                  className={`px-4 py-2 rounded-lg font-semibold transition-all duration-300 ${
                    isActive
                      ? 'bg-white text-teal-900 shadow-sm'
                      : 'text-white hover:bg-white hover:text-teal-900'
                  }`}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Search Form */}
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="bg-white text-teal-900 placeholder-gray-400 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button
                type="submit"
                className="ml-2 bg-white text-teal-900 px-4 py-2 rounded-lg hover:bg-amber-300 transition-transform duration-300 hover:scale-105"
              >
                Search
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
