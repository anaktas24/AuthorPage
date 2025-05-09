import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

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

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <nav className="bg-[#FDF6E3] bg-opacity-90 backdrop-blur-md sticky top-0 z-50 parchment-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <h1 className="text-2xl font-['Playfair_Display'] text-teal-900">Author Name</h1>
          </div>
          <div className="flex items-center gap-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="text-teal-900 hover:bg-amber-200 hover:text-teal-800 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-200"
              >
                {item.name}
              </Link>
            ))}
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search..."
                className="border-none bg-amber-100 text-teal-900 placeholder-teal-600 rounded-md px-3 py-1 focus:outline-none focus:ring-2 focus:ring-amber-400"
              />
              <button
                type="submit"
                className="ml-2 bg-amber-400 text-teal-900 px-3 py-1 rounded-md hover:bg-amber-500 transition-transform duration-200 hover:scale-105"
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