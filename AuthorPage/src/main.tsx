import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NinetiesLook from './pages/ninetieslook';
import Books from './pages/book';
import BookDetail from './pages/bookdetail';
import AdminDashboard from './AdminDashboard';
import Posts from './pages/posts';
import PostDetail from './pages/postdetail';
import Contact from './components/Contact';
import About from './components/About';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/nineties-look" element={<NinetiesLook />} />
        <Route path="/books" element={<Books />} />
        <Route path="/book/:id" element={<BookDetail />} />
        <Route path="/admin" element={<AdminDashboard />} />
        <Route path="/posts" element={<Posts />} />
        <Route path="/posts/:id" element={<PostDetail />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;