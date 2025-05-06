import Navbar from './NavBar';
import Hero from './Hero';
import FeaturedBooks from './FeaturedBooks';
import BlogPreview from './BlogPreview';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

const HomePage: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Hero />
      <FeaturedBooks />
      <BlogPreview />
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default HomePage;