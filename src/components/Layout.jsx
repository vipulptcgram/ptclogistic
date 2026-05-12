import React, { useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />

      <button
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
        className="fixed bottom-4 left-4 md:bottom-6 md:left-6 px-3 h-10 w-10 bg-primary hover:bg-accent text-white rounded-full flex items-center justify-center text-xs font-semibold shadow-lg transition-all z-50"
        title="Back to top"
      >
        ⇧
      </button>
    </div>
  );
};

export default Layout;
