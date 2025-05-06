import { Link } from 'react-router-dom';

const Footer: React.FC<{ isNineties?: boolean }> = ({ isNineties = false }) => {
  return (
    <footer className={isNineties ? "nineties-footer text-lg font-['VT323'] py-8" : "bg-teal-900 text-amber-100 py-8"}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <p className={isNineties ? "text-[#00FF00]" : ""}>© {new Date().getFullYear()} Author Name. All rights reserved.</p>
        <div className="mt-4 flex justify-center gap-4">
          <a href="#" className={isNineties ? "nineties-footer-link" : "hover:text-amber-300 transition-colors duration-200"}>
            Twitter
          </a>
          <a href="#" className={isNineties ? "nineties-footer-link" : "hover:text-amber-300 transition-colors duration-200"}>
            Instagram
          </a>
          <a href="#" className={isNineties ? "nineties-footer-link" : "hover:text-amber-300 transition-colors duration-200"}>
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