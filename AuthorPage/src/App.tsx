import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// Page Imports
import HomePage from './pages/homepage';

import Books from './pages/book/book';
import BookDetail from './pages/book/bookdetail';
import Posts from './pages/blog/posts';
import PostDetail from './pages/blog/postdetail';
import PostNew from './pages/blog/postnew';
import Contact from './pages/contact';
import About from './pages/about';

import AddBookForm from './pages/book/admin/addbookform';
import EditBookForm from './pages/book/admin/editbookform';
import AdminLogin from './pages/admin/AdminLogin';

// Component Imports
import Navbar from './components/NavBar';
import Footer from './components/Footer';
import RetroCursor from './components/RetroCursor';
import AdminPanel from './components/AdminPanel/AdminPanel';
import ProtectedRoute from './components/ProtectedRoute';
import { AdminAuthProvider } from './contexts/AdminAuthContext';

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
      <AdminAuthProvider>
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

              {/* Admin Login */}
              <Route path="/admin/login" element={<AdminLogin />} />

              {/* Protected Admin Routes */}
              <Route path="/admin" element={<ProtectedRoute><AdminPanel /></ProtectedRoute>} />
              <Route path="/admin/create" element={<ProtectedRoute><AddBookForm /></ProtectedRoute>} />
              <Route path="/admin/edit/:id" element={<ProtectedRoute><EditBookForm /></ProtectedRoute>} />
            </Routes>
          </main>

          {/* GLOBAL FOOTER */}
          <Footer />

        </div>
      </AdminAuthProvider>
    </BrowserRouter>
  );
}

export default App;
