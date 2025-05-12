import { Link } from 'react-router-dom';

const Hero: React.FC<{ isNineties?: boolean }> = ({ isNineties = false }) => {
  return (
    <section className={isNineties ? 'nineties-hero-bg text-yellow-300 py-20' : 'bg-teal-900 text-amber-100 py-32 seamless-bg'}>
      <div className={isNineties ? 'max-w-4xl mx-auto px-4 text-center' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center'}>
        <h2 className={isNineties ? 'text-4xl font-pixel mb-6' : 'text-5xl md:text-6xl font-bold mb-6'}>Unveil Epic Tales</h2>
        <p className={isNineties ? 'text-lg mb-8' : 'text-xl md:text-2xl mb-10 max-w-2xl mx-auto'}>
          Dive into a world of magic and mystery. Explore my upcoming book and join the adventure!
        </p>
        <Link
          to="/books"
          className={
            isNineties
              ? 'pixel-button bg-blue-500 text-white px-6 py-3'
              : 'bg-amber-400 text-teal-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-amber-500 transition-transform duration-200 hover:scale-105'
          }
        >
          Discover My Books
        </Link>
      </div>
    </section>
  );
};

export default Hero;