import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../pages/ninetieslook/ninetieslook.css'
const navItems = [
  {name: 'Home', path: '/nineties-look', icon: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExcjNkbWEweG5uNTAzZGptemhpczZ6NzR0bDh5aXo1b2x0M2Y1Zzh0MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/cNy9tdF66YtgI/giphy.gif'},
  { name: 'Books', path: '/books', icon: 'https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExeTcyend3c3dvMDE2eW1hejN5aXU3ZnhhZWE4cTNoaXlxNXl5ajFtdSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/xT8qBt3pdiCZrk3erS/giphy.gif'},
  {name: 'Blog', path: '/blog',icon: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExanl0ZGt6a2U3dXFuam05aWl4bzBvdnptc280Mm1uMnMycXFsZ2F1YyZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/dwmNhd5H7YAz6/giphy.gif' },
  {name: 'About Me',path: '/about',icon: 'https://media.giphy.com/media/xT0xeJpnrWC4XWblEk/giphy.gif' },
  {name: 'Contact', path: '/contact', icon: 'https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDZhc3BydjFxZmkyaXVpeXd1OWNoNmw0eGFqdnR5MzhmOWV6MjN4MCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3oEjI8FFuTWtkK6zJu/giphy.gif'},
  {name: 'Back to the Future',path: '/',icon: 'https://media4.giphy.com/media/v1.Y2lkPTc5MGI3NjExMmYydWhucnFhejRqOTl0NW1lMWJsNnY0bG55eTYwcG93dXkwN2NlciZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/KlTJqkQGyasiACT0Bj/giphy.gif'  },
];


const NinetiesNavbar: React.FC = () => {
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
    <nav className="nineties-navbar sticky top-0 z-50 font-['VT323'] text-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap justify-between items-center py-4 gap-4">
          <div className="flex items-center">
            <h1 className="text-3xl text-[#FFFFCC] animate-blink">Author's Rad Site</h1>
            <img
              src="https://media.giphy.com/media/3o7btPCcdNniyf0ArS/giphy.gif"
              alt="Star"
              className="w-8 h-8 ml-2 nineties-clipart"
            />
          </div>
          <div className="flex flex-wrap items-center gap-2">
            {navItems.map((item) => (
              <Link
                key={item.name}
                to={item.path}
                className="nineties-nav-link flex items-center"
              >
                <img src={item.icon} alt="Icon" className="w-5 h-5 mr-1" />
                {item.name}
              </Link>
            ))}
            <form onSubmit={handleSearch} className="flex items-center">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search the Net!"
                className="border-2 border-[#FFFFCC] bg-[#000080] text-[#00FF99] px-2 py-1 font-['VT323'] text-lg focus:outline-none"
              />
              <button
                type="submit"
                className="nineties-button ml-2"
              >
                Go!
              </button>
            </form>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default NinetiesNavbar;