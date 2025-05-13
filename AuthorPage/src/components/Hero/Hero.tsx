import { Link } from 'react-router-dom';

interface HeroProps {
  isNineties?: boolean;
}

const Hero: React.FC<HeroProps> = ({ isNineties = false }) => {
  return (
    <section
      className={`${
        isNineties ? 'bg-gray-100' : 'bg-gray-50'
      } pt-16 pb-10 sm:pt-20 sm:pb-12 relative overflow-visible shadow-md rounded-xl`}
      style={{
        clipPath: `url(#hero-clip)`,
      }}
    >
      {/* SVG for Clip Path */}
      <svg width="0" height="0">
        <defs>
          <clipPath id="hero-clip" clipPathUnits="objectBoundingBox">
            <path d="M0,1 L0,0.2 C0.2,0.2 0.4,0 0.5,0 C0.6,0 0.8,0.2 1,0.2 L1,1 Z" />
          </clipPath>
        </defs>
      </svg>

      {/* Image in Bump */}
      <img
        src="/img/jet.PNG"
        alt="Logo"
        className="absolute left-1/2 transform -translate-x-1/2 -top-20 sm:-top-16 w-36 sm:w-44 md:w-56 h-36 sm:h-44 md:h-56 rounded-full object-contain z-10 shadow-lg"
      />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-left relative z-10">
        <h2
          className={`${
            isNineties ? 'text-xl sm:text-2xl font-mono' : 'text-2xl sm:text-3xl md:text-4xl font-bold'
          } mt-12 sm:mt-16 mb-3 max-w-md`}
        >
          Forge Your Tale
        </h2>
        <p
          className={`${
            isNineties ? 'text-sm sm:text-base' : 'text-sm sm:text-base md:text-lg'
          } mb-5 max-w-md text-gray-600`}
        >
          Seek the Adventure
        </p>
        <Link
          to="/books"
          className={`${
            isNineties
              ? 'border border-gray-800 text-gray-800 px-3 py-1 font-mono text-sm'
              : 'bg-transparent border border-gray-800 text-gray-800 px-3 py-1 sm:px-4 sm:py-2 rounded-full font-semibold text-sm hover:bg-blue-100 hover:text-blue-500 hover:border-blue-500 transition-all duration-200'
          } inline-block`}
        >
          Dive In
        </Link>
      </div>
    </section>
  );
};

export default Hero;
