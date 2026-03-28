import React from 'react';
import Navbar from '../../components/ui/NavBar';
import Footer from '../../components/ui/Footer';
import { Outlet, useLocation } from 'react-router-dom';

const Layout: React.FC = () => {
  const location = useLocation();
  const hideNavbar = location.pathname === '/nineties-look';

  return (
    <>
      {!hideNavbar && <Navbar />}
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;