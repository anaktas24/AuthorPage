import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/homepage/homepage';
import NinetiesLook from './pages/ninetieslook/ninetieslook';
import Books from './pages/book/book';
import BookDetail from './pages/book/bookdetail';
import Posts from './pages/blog/posts';
import PostDetail from './pages/blog/postdetail';
import PostNew from './pages/blog/postnew';
import Contact from './pages/contact/contact';
import About from './pages/about/about';
import Layout from './assets/style/Layout';
import AddBookForm from './pages/book/admin/addbookform';
import EditBookForm from './pages/book/admin/editbookform';
import AdminPanel from './components/AdminPanel/AdminPanel';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/books" element={<Books />} />
          <Route path="/book/:id" element={<BookDetail />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/posts/new" element={<PostNew />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/admin/create" element={<AddBookForm />} />
          <Route path="/admin/edit/:id" element={<EditBookForm />} />
          <Route path="/admin" element={<AdminPanel />} />

        </Route>
        <Route path="/nineties-look" element={<NinetiesLook />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
