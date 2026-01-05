import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-auto transition-colors duration-300">

      {/* CSS For 90s Footer Logic */}
      <style>{`
        .footer-90s { display: none; }

        html[data-theme='90s'] .footer-90s { display: block; }
        html[data-theme='90s'] .footer-modern { display: none; }
      `}</style>

      {/* ================= 1. 90s FOOTER (Compact Version) ================= */}
      <div className="footer-90s bg-[#c0c0c0] border-t-2 border-white p-2 text-center font-sans text-black text-sm">

        {/* WEBRING STRIP (Squashed) */}
        <div className="bg-gray-700 text-yellow-300 border-2 border-inset border-white p-1 mb-2 max-w-2xl mx-auto flex items-center justify-between px-4">
           <span className="font-bold">★ SPOOKY RING ★</span>
           <div className="flex gap-4 underline text-xs">
              <a href="#" className="hover:text-white">[Prev]</a>
              <a href="#" className="hover:text-white">[Random]</a>
              <a href="#" className="hover:text-white">[Next]</a>
           </div>
        </div>

        {/* 88x31 BADGES (Row) */}
        <div className="flex flex-wrap justify-center items-center gap-2 mb-2">
           <img src="https://web.archive.org/web/20090105213619/http://www.geocities.com/SunsetStrip/Alley/5836/emailme.gif" alt="Email Me" className="h-8" />
           <img src="https://www.w3.org/Icons/valid-html40" alt="Valid HTML 4.0" className="border border-black h-[31px]" />
           <img src="https://gifcities.com/assets/img/netscape_now.gif" alt="Netscape Now" className="border border-black h-[31px]" />
           <img src="https://cyber.dabamos.com/88x31/notepad.gif" alt="Made with Notepad" className="border border-black h-[31px]" />
        </div>

        <p className="font-mono text-[10px] leading-tight">
           (c) 1999-{new Date().getFullYear()} Author Name.
           <Link to="/admin" className="ml-1 no-underline text-black hover:text-red-500">π</Link>
        </p>
      </div>

      {/* ================= 2. MODERN FOOTER ================= */}
      <div className="footer-modern bg-card border-t border-gray-200 py-10">
        <div className="container mx-auto px-6 text-center">

          <p className="font-body text-sm text-secondary">
            <Link to="/admin" className="opacity-50 hover:opacity-100 hover:text-red-500 cursor-default">©</Link>
            {' '}{new Date().getFullYear()} Author Name. All rights reserved.
          </p>

          <div className="mt-6 flex justify-center space-x-6">
            {['Twitter', 'Instagram', 'Email'].map((link) => (
              <a key={link} href="#" className="text-sm font-bold font-header text-accent hover:underline hover:text-primary transition-colors">
                {link}
              </a>
            ))}
          </div>
        </div>
      </div>

    </footer>
  );
};

export default Footer;
