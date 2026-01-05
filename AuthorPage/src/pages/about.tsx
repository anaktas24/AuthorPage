import React from 'react';
import { Link } from 'react-router-dom';


const About: React.FC = () => {
  return (
    <div className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">

        {/* Main Content Card */}
        <div className="bg-card shadow-card rounded-3xl overflow-hidden transition-all duration-300">

          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

            {/* LEFT COLUMN: Text Content */}
            <div className="p-10 md:p-16 flex flex-col justify-center order-2 lg:order-1">
              <span className="text-accent font-bold tracking-widest uppercase mb-4 text-sm">
                The Storyteller
              </span>

              <h1 className="text-4xl md:text-5xl font-header font-bold text-primary mb-8 leading-tight">
                Weaving myths into modern realities.
              </h1>

              <div className="prose prose-lg text-secondary font-body leading-relaxed space-y-6">
                <p>
                  I am a novelist obsessed with the "what if." What if the Greek gods walked among us in
                  sneakers? What if magic was just forgotten science?
                </p>
                <p>
                  My debut novel, <em className="text-primary font-bold">Through the Starlit Portal</em>,
                  is the result of too much coffee and late nights in Athens. It follows Jet, Aria, and Kiyo
                  as they crack the code of a universe that doesn't want to be found.
                </p>
                <p>
                  When I'm not writing, I'm usually hunting for vintage 90s tech or getting lost in ancient ruins.
                </p>
              </div>

              <div className="mt-10">
                 <Link to="/books" className="btn-primary">
                    Read My Work
                 </Link>
              </div>
            </div>

            {/* RIGHT COLUMN: Image Area */}
            <div className="relative h-96 lg:h-auto bg-gray-100 order-1 lg:order-2 overflow-hidden">
               {/* Placeholder for Author Image */}
               <img
                 src="https://images.unsplash.com/photo-1455390582262-044cdead277a?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
                 alt="Author working"
                 className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 hover:scale-105"
               />

               {/* Modern Overlay Gradient (Hidden in 90s mode via CSS if desired, or keeps image moody) */}
               <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex items-end p-10">
                 <div className="text-white">
                   <p className="font-bold text-xl">Athens, Greece</p>
                   <p className="opacity-80 text-sm">Current Base of Operations</p>
                 </div>
               </div>
            </div>

          </div>
        </div>

        {/* Bottom "Fun Facts" or Stats (Optional visual flair) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
           {[
             { label: "Books Written", value: "3" },
             { label: "Coffee Consumed", value: "∞" },
             { label: "Realms Created", value: "7" },
             { label: "Years Active", value: "5" }
           ].map((stat) => (
             <div key={stat.label} className="bg-card shadow-card p-6 rounded-2xl text-center">
               <div className="text-3xl font-bold text-accent mb-1">{stat.value}</div>
               <div className="text-xs font-bold text-secondary uppercase tracking-wider">{stat.label}</div>
             </div>
           ))}
        </div>

      </div>

    </div>
  );
};

export default About;
