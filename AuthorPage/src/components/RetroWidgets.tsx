import React, { useState, useEffect } from 'react';

// ✅ Ensure this matches your Rails port (usually 3000)
const API_URL = "http://localhost:3000/api";

const RetroWidgets: React.FC = () => {
  const [hits, setHits] = useState<number>(0);
  const [entries, setEntries] = useState<any[]>([]);

  // 1. Fetch Data on Load
  useEffect(() => {
    // A. VISITOR COUNT (POST to increment)
    // Matches route: post 'visitor_count/increment', to: 'visitor_counts#increment'
    fetch(`${API_URL}/visitor_count/increment`, { method: 'POST' })
      .then(res => res.json())
      .then(data => setHits(data.count))
      .catch(err => console.error("Counter Error:", err));

    // B. GUESTBOOK (GET index)
    // Matches route: resources :guestbook (Rails pluralizes this to /guestbooks)
    fetch(`${API_URL}/guestbooks`)
      .then(res => res.json())
      .then(data => setEntries(data))
      .catch(err => console.error("Guestbook Error:", err));
  }, []);

  // 2. Handle Signing
  const handleSignGuestbook = async () => {
    const name = prompt("✍️ Enter your Cyber-Name:");
    if (!name) return;

    const message = prompt("Say something cool:");
    if (!message) return;

    // Optimistic UI Update (Shows immediately)
    const newEntry = { name, message };
    setEntries(prev => [newEntry, ...prev]);

    try {
      // Matches route: POST /api/guestbooks
      await fetch(`${API_URL}/guestbooks`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        // Wraps data in "guestbook_entry" to match your Rails params.require(:guestbook_entry)
        body: JSON.stringify({ guestbook_entry: newEntry })
      });
    } catch (error) {
      console.error("Save failed:", error);
      alert("Error saving to server!");
    }
  };

  return (
    <div className="retro-widgets-container w-full py-8 text-center border-y-4 border-red-500 bg-yellow-200 font-mono">
      <style>{`
        html:not([data-theme='90s']) .retro-widgets-container { display: none !important; }
        html[data-theme='90s'] .retro-widgets-container { display: block !important; }
      `}</style>

      <div className="max-w-4xl mx-auto flex flex-col items-center gap-6">

        {/* HEADER */}
        <h2 className="text-4xl font-black text-red-600 animate-pulse bg-black px-4 py-2 rotate-2 shadow-[4px_4px_0px_white]">
          ★ WELCOME TO MY CYBERSPACE ★
        </h2>

        {/* GUESTBOOK */}
        <div className="border-4 border-outset border-blue-800 bg-[#c0c0c0] p-4 w-full max-w-md shadow-xl">
          <h3 className="text-blue-900 font-bold underline mb-2 text-xl">MY GUESTBOOK</h3>

          <ul className="text-left text-xs font-mono bg-white p-2 border-2 border-inset border-gray-500 h-40 overflow-y-auto">
            {/* SAFETY CHECK: Only map if entries is actually an array */}
            {Array.isArray(entries) && entries.length === 0 && <li className="text-gray-500">No entries yet...</li>}

            {Array.isArray(entries) ? (
              entries.map((entry, i) => (
                <li key={i} className="mb-2 border-b border-dashed border-gray-400 pb-1">
                  <span className="text-blue-700 font-bold">[{entry.name}]:</span> {entry.message}
                </li>
              ))
            ) : (
              <li className="text-red-500">Error loading guestbook (Check API)</li>
            )}
          </ul>

          <div className="mt-3 text-center">
            <button
              onClick={handleSignGuestbook}
              className="bg-gray-200 border-2 border-outset border-white text-black px-4 py-1 text-sm font-bold active:border-inset active:bg-gray-300 hover:bg-yellow-200 cursor-pointer"
            >
              ✍️ Sign Guestbook
            </button>
          </div>
        </div>

        {/* HIT COUNTER */}
        <div className="mt-4 bg-black text-red-500 font-mono text-2xl px-6 py-2 border-4 border-double border-gray-500 shadow-lg tracking-[0.2em]">
          VISITORS: <span className="text-red-500">{hits.toString().padStart(6, '0')}</span>
        </div>

      </div>
    </div>
  );
};

export default RetroWidgets;
