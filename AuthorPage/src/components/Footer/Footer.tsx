import { Link } from 'react-router-dom';

const Footer: React.FC<{ isNineties?: boolean }> = ({ isNineties = false }) => {
  return (
    <footer className={isNineties ? 'nineties-footer text-green-300 py-4' : 'bg-teal-50 text-teal-900 py-8 seamless-bg'}>
      <div className={isNineties ? 'max-w-4xl mx-auto text-center' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'}>
        <p className={isNineties ? 'text-[#00FF00]' : 'text-gray-600'}>© {new Date().getFullYear()} Author Name. All rights reserved.</p>
        <div className={isNineties ? 'mt-2 flex justify-center gap-4' : 'mt-4 flex justify-center gap-4'}>
          <a href="#" className={isNineties ? 'nineties-footer-link' : 'text-amber-600 hover:text-amber-700 transition-colors duration-200'}>
            Twitter
          </a>
          <a href="#" className={isNineties ? 'nineties-footer-link' : 'text-amber-600 hover:text-amber-700 transition-colors duration-200'}>
            Instagram
          </a>
          <a href="#" className={isNineties ? 'nineties-footer-link' : 'text-amber-600 hover:text-amber-700 transition-colors duration-200'}>
            Email
          </a>
        </div>
        {isNineties && (
          <div className="mt-2">
            <Link to="/" className="nineties-button bg-blue-500 text-white px-4 py-2 inline-block">
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;