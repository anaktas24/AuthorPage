import Hero from '../components/sections/Hero';
import FeaturedBooks from '../components/sections/FeaturedBooks';
import BlogPreview from '../components/sections/BlogPreview';
import About from './about';
import Contact from './contact';

const HomePage: React.FC = () => {
  return (
    <main>
      <Hero />
      <FeaturedBooks />
      <BlogPreview />
      <About />
      <Contact />
      
    </main>
  );
};

export default HomePage;
