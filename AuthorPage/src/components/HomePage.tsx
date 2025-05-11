import Hero from './Hero';
import FeaturedBooks from './FeaturedBooks';
import BlogPreview from './BlogPreview';
import About from './About';
import Contact from '../pages/contact';

const HomePage: React.FC = () => {
  return (
    <main className="bg-gradient-to-b from-sky-100 to-gray-100 text-gray-800">
      <div className="container space-y-16 py-8">
        <Hero />
        <FeaturedBooks />
        <BlogPreview />
        <About />
        <Contact />
      </div>
    </main>
  );
};


export default HomePage;