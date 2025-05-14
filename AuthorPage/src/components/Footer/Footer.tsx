
const Footer: React.FC<{ isNineties?: boolean }> = ({ isNineties = false }) => {
  return (
    <footer className={isNineties ? 'nineties-footer text-green-300 py-4' : 'bg-white text-teal-900 py-10'}>
      <div className={isNineties ? 'max-w-4xl mx-auto text-center' : 'max-w-7xl mx-auto px-6 text-center'}>
        <p className={isNineties ? 'text-[#00FF00]' : 'text-sm text-gray-500'}>
          © {new Date().getFullYear()} Author Name. All rights reserved.
        </p>

        <div className={isNineties ? 'mt-2 flex justify-center gap-4' : 'mt-6 flex justify-center space-x-6'}>
          <a
            href="#"
            className={isNineties
              ? 'nineties-footer-link'
              : 'text-amber-600 hover:text-amber-800 transition-colors duration-300 text-sm font-medium'}
          >
            Twitter
          </a>
          <a
            href="#"
            className={isNineties
              ? 'nineties-footer-link'
              : 'text-amber-600 hover:text-amber-800 transition-colors duration-300 text-sm font-medium'}
          >
            Instagram
          </a>
          <a
            href="#"
            className={isNineties
              ? 'nineties-footer-link'
              : 'text-amber-600 hover:text-amber-800 transition-colors duration-300 text-sm font-medium'}
          >
            Email
          </a>
        </div>

        
      </div>
    </footer>
  );
};

export default Footer;
