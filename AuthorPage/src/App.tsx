import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
<<<<<<< HEAD

// Page Imports
import HomePage from './pages/homepage';
=======
import HomePage from './pages/homepage';
import NinetiesLook from './pages/ninetieslook';
>>>>>>> 1fbd22205101e41261e3b5e597528fa038b8fd40
import Books from './pages/book/book';
import BookDetail from './pages/book/bookdetail';
import Posts from './pages/blog/posts';
import PostDetail from './pages/blog/postdetail';
import PostNew from './pages/blog/postnew';
import Contact from './pages/contact';
import About from './pages/about';
<<<<<<< HEAD
=======
import Layout from './assets/style/Layout';
>>>>>>> 1fbd22205101e41261e3b5e597528fa038b8fd40
import AddBookForm from './pages/book/admin/addbookform';
import EditBookForm from './pages/book/admin/editbookform';

// Component Imports
// We don't use Layout anymore, we build it manually here
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import RetroCursor from './components/RetroCursor';
import AdminPanel from './components/AdminPanel/AdminPanel';

function App() {
  // 1. Theme State
  const [isRetro, setIsRetro] = useState(false);

  // 2. Toggle Function
  const toggleTheme = () => {
    setIsRetro(!isRetro);
  };

  // 3. Sync Theme with CSS
  useEffect(() => {
    const html = document.documentElement;
    if (isRetro) {
      html.setAttribute('data-theme', '90s');
    } else {
      html.removeAttribute('data-theme');
    }
  }, [isRetro]);

  return (
    <BrowserRouter>
      {/* Outer Container (Min Height ensures Footer stays at bottom) */}
      <div className="min-h-screen flex flex-col">

        {/* GLOBAL NAVBAR (Passes theme state) */}
        <Navbar isRetro={isRetro} toggleTheme={toggleTheme} />

        {/* RETRO CURSOR (Only visible in 90s mode) */}
        {isRetro && <RetroCursor />}

        {/* MAIN CONTENT AREA */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/books" element={<Books />} />
            <Route path="/book/:id" element={<BookDetail />} />
            <Route path="/posts" element={<Posts />} />
            <Route path="/posts/:id" element={<PostDetail />} />
            <Route path="/posts/new" element={<PostNew />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />

            {/* Admin Routes */}
            <Route path="/admin" element={<AdminPanel />} />
            <Route path="/admin/create" element={<AddBookForm />} />
            <Route path="/admin/edit/:id" element={<EditBookForm />} />
          </Routes>
        </main>

        {/* GLOBAL FOOTER */}
        <Footer />

      </div>
    </BrowserRouter>
  );
}

export default App;
