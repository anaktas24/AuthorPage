import React from 'react';
import { Link } from 'react-router-dom';
// Ensure this path matches your project structure
import medallionImage from '/img/medallion.jpg';

const Hero: React.FC = () => {
  return (
    <>
      {/* CSS TOGGLE LOGIC:
          - By default: Modern is visible, 90s is hidden.
          - When data-theme='90s': Modern is hidden, 90s is visible.
      */}
      <style>{`
        .hero-90s { display: none; }
        .hero-modern { display: block; }

        html[data-theme='90s'] .hero-90s { display: block; }
        html[data-theme='90s'] .hero-modern { display: none; }
      `}</style>

      {/* =================================================================
          1. THE MESSY 90s HERO (Visible ONLY in 90s Mode)
          ================================================================= */}
      <div className="hero-90s w-full bg-black text-yellow-300 border-b-8 border-red-600 p-2 font-mono text-center">

        {/* FLAMING TITLE */}
        <div className="flex justify-center items-center gap-4 mb-4 mt-4">
          <img src="https://media.giphy.com/media/pUeXcg80cO8I8/giphy.gif" alt="fire" className="w-12 h-12" />
          <h1 className="text-3xl md:text-5xl font-black text-white bg-blue-800 border-4 border-outset border-gray-400 p-2 transform -rotate-2">
            WELCOME TO MY HOME PAGE
          </h1>
          <img src="https://media.giphy.com/media/pUeXcg80cO8I8/giphy.gif" alt="fire" className="w-12 h-12" />
        </div>

        {/* CHAOTIC LAYOUT (Flex mimicing a table) */}
        <div className="flex flex-wrap justify-center items-start gap-4 md:gap-12 mb-6">

          {/* Left Column: Random GIFs */}
          <div className="flex flex-col gap-4 mt-8">
            <img src="https://web.archive.org/web/20091027074334/http://geocities.com/Heartland/Plains/6703/welcome.gif" alt="Welcome Rainbow" className="w-32" />
            <img src="https://media.giphy.com/media/13HgwGsXF0aiGY/giphy.gif" alt="Dancing Baby" className="w-20" />
          </div>

          {/* Center Column: The Text Box */}
          <div className="max-w-md bg-[#c0c0c0] text-black border-4 border-inset border-white p-4 font-serif text-lg shadow-xl">
             <p className="mb-4 font-bold text-red-600 text-xl blink">
               *** WARNING: COOL CONTENT AHEAD ***
             </p>
             <p className="text-sm mb-4 font-bold">
               You are visitor number <span className="bg-black text-red-500 px-1 font-mono">1,000,000</span>!!!
             </p>
             <p className="text-sm mb-4">
               This site is dedicated to my books, my thoughts, and the World Wide Web.
               Please sign the guestbook before you leave or I will be sad :(
             </p>
             <div className="mt-4 border-t-2 border-gray-500 pt-2">
               <Link to="/books" className="text-blue-700 underline text-2xl font-bold hover:bg-yellow-300 hover:text-red-600">
                 [ENTER SITE]
               </Link>
             </div>
          </div>

          {/* Right Column: More Gifs */}
          <div className="flex flex-col gap-4 mt-8">
             <img src="https://web.archive.org/web/20090830055305/http://geocities.com/Heartland/Plains/6703/new.gif" alt="New!" />
             <img src="https://web.archive.org/web/20091027072619/http://geocities.com/Heartland/Plains/6703/email_me.gif" alt="Email Me" className="w-24" />
             <img src="https://media.giphy.com/media/dh5pNbI97E2Z2/giphy.gif" alt="Spinning Skull" className="w-16" />
          </div>
        </div>

        {/* MARQUEE FOOTER */}
        <div className="bg-blue-600 text-white border-y-4 border-white py-1">
           {/* @ts-expect-error Marquee is deprecated but essential for 90s aesthetics */}
           <marquee scrollamount="8" className="font-bold text-lg">
              +++ UPDATE: NEW BOOK COMING SOON +++ DON'T FORGET TO CHECK THE BLOG +++ BEST VIEWED IN NETSCAPE NAVIGATOR 4.0 +++

           </marquee>
        </div>
      </div>


      {/* =================================================================
          2. THE MODERN HERO (Visible ONLY in Modern Mode)
          (This is your exact code untouched)
          ================================================================= */}
      <section className="hero-modern relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

        {/* LAYOUT CONTAINER */}
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

          <div className="flex flex-col items-center text-center">

            {/* THE MEDALLION */}
            <div className="relative mb-8 group">
              <div className="absolute -inset-1 rounded-full bg-primary/20 blur-md group-hover:bg-primary/40 transition-all duration-500" />
              <img
                src={medallionImage}
                alt="Matt - The Author"
                className="relative w-32 h-32 sm:w-40 sm:h-40 object-cover rounded-full border-4 border-card bg-card shadow-xl z-10"
              />
            </div>

            {/* HEADLINE */}
            <h1 className="max-w-4xl mx-auto text-4xl sm:text-5xl md:text-7xl font-header font-bold tracking-tight text-primary leading-tight mb-6">
              Step Into a World <br className="hidden md:block" />
              <span className="text-secondary">Beyond the Page</span>
            </h1>

            {/* SUBTEXT */}
            <p className="max-w-2xl mx-auto text-lg sm:text-xl md:text-2xl font-body text-muted-foreground mb-10 leading-relaxed">
              Where imagination bends reality. Short stories, novels, and oddities
              from the mind of a traveler between worlds.
            </p>

            {/* DUAL BUTTONS */}
            <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
              <Link
                to="/books"
                className="btn-primary px-8 py-4 text-lg shadow-lg hover:-translate-y-1 transition-transform"
              >
                Start Reading
              </Link>
            </div>

          </div>
        </div>

        {/* OPTIONAL: Background Decoration */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl -z-10 opacity-30 pointer-events-none">
          {/* SVG texture or faint map illustration can go here */}
        </div>

      </section>
    </>
  );
};

export default Hero;
