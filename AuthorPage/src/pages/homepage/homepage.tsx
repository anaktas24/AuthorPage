import Hero from '../../components/Hero/Hero';
import FeaturedBooks from '../../components/FeatureBooks/FeaturedBooks';
import BlogPreview from '../../components/BlogPreview/BlogPreview';
import About from '../about/about';
import Contact from '../contact/contact';

const HomePage: React.FC = () => {
  return (
    <main className="bg-gradient-to-b bg-white text-gray-800">
      <Hero />
      <FeaturedBooks />
      <BlogPreview />
      <About />
      <Contact />
      
    </main>
  );
};

export default HomePage;
