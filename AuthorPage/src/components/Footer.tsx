import { Link } from 'react-router-dom';

const Footer: React.FC<{ isNineties?: boolean }> = ({ isNineties = false }) => {
  return (
    <footer className={isNineties ? "nineties-footer text-lg font-['VT323'] py-8" : "parchment-bg text-teal-900 py-8 seamless-bg"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className={isNineties ? "text-[#00FF00]" : "text-gray-600"}>© {new Date().getFullYear()} Author Name. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="#" className={isNineties ? "nineties-footer-link" : "text-amber-600 hover:text-amber-700 transition-colors duration-200"}>
            Twitter
          </a>
          <a href="#" className={isNineties ? "nineties-footer-link" : "text-amber-600 hover:text-amber-700 transition-colors duration-200"}>
            Instagram
          </a>
          <a href="#" className={isNineties ? "nineties-footer-link" : "text-amber-600 hover:text-amber-700 transition-colors duration-200"}>
            Email
          </a>
        </div>
        {isNineties && (
          <div className="mt-4">
            <Link to="/" className="nineties-button inline-block">
              Back to Home
            </Link>
          </div>
        )}
      </div>
    </footer>
  );
};

export default Footer;