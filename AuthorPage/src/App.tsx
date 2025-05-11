import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import NinetiesLook from './pages/ninetieslook';
import Books from './pages/book';
import BookDetail from './pages/bookdetail';
import Posts from './pages/posts';
import PostDetail from './pages/postdetail';
import PostNew from './pages/postnew';
import Contact from './pages/contact';
import About from './components/About';
import Navbar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  return (
    <BrowserRouter>
    <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/nineties-look" element={<NinetiesLook />} />
        <Route path="/books" element={<Books />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/posts/new" element={<PostNew />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
}

export default App;