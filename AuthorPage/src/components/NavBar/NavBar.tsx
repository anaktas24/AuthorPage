import { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';

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
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState<string>('');

  const handleSearch = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      navigate(`/search?q=${encodeURIComponent(searchQuery)}`);
      setSearchQuery('');
    }
  };

  return (
    <nav className="bg-gray-50 bg-opacity-95 backdrop-blur-md z-10 shadow-md sticky top-0">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="flex items-center h-20">
          {/* Logo */}
          <Link
            to="/"
            className="text-3xl font-bold text-gray-800 hover:text-blue-500 transition-colors duration-300"
          >
            Author Name
          </Link>

          {/* Nav Items Container */}
          <div className="flex flex-1 justify-between items-center ml-8">
            {/* Left-aligned Nav Items */}
            <div className="flex space-x-4">
              {navItems.slice(0, Math.ceil(navItems.length / 2)).map((item) => {
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

            {/* Right-aligned Nav Items with Search */}
            <div className="flex items-center space-x-4">
              {navItems.slice(Math.ceil(navItems.length / 2)).map((item) => {
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
              {/* Search Bar */}
              <form onSubmit={handleSearch} className="flex items-center">
                <input
                  type="text"
                  value={searchQuery}
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setSearchQuery(e.target.value)
                  }
                  placeholder="Search..."
                  className="px-3 py-1 rounded-l-lg bg-white text-gray-800 text-sm focus:outline-none focus:ring-2 focus:ring-blue-300 w-24 sm:w-32"
                />
                <button
                  type="submit"
                  className="px-2 py-1 bg-gray-200 rounded-r-lg text-gray-800 hover:bg-blue-100 transition-colors duration-300"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </button>
              </form>
            </div>
          </div>
        </div>
        {/* Circle Placeholder to Prevent Content Overlap */}
        <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 w-56 sm:w-64 md:w-72 h-12 sm:h-16 bg-transparent"></div>
      </div>
    </nav>
  );
};

export default Navbar;