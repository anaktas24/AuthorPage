
import Hero from '../../components/Hero/Hero';
import FeaturedBooks from '../../components/FeatureBook/FeaturedBooks';
import BlogPreview from '../../components/BlogPreview/BlogPreview';
import About from '../about/about';
import Contact from '../contact/contact';

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
