import React, { useState, useEffect } from 'react';
import NinetiesNavbar from '../components/NinetiesNavbar';
import Hero from '../components/Hero';
import FeaturedBooks from '../components/FeaturedBooks';
import BlogPreview from '../components/BlogPreview';
import About from '../components/About'; // Note: Rename AboutMe to About for consistency
import Contact from '../pages/contact';
import Footer from '../components/Footer';
import '../ninetiescss.css';

interface GuestbookEntry {
  id: number;
  name: string;
  message: string;
}

interface VisitorCount {
  count: number;
}

const NinetiesLook: React.FC = () => {
  const [entries, setEntries] = useState<GuestbookEntry[]>([]);
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState('');
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/guestbook', { cache: 'no-store' })
      .then(res => res.json())
      .then(data => setEntries(data))
      .catch(err => setError(err.message));

    fetch('http://localhost:3000/api/visitor_count', { cache: 'no-store' })
      .then(res => res.json())
      .then(data => setCount(data.count))
      .catch(err => setError(err.message));

    fetch('http://localhost:3000/api/visitor_count/increment', { method: 'POST' })
      .then(res => res.json())
      .then(data => setCount(data.count))
      .catch(err => setError('Error incrementing count'));
  }, []);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/api/guestbook', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ guestbook_entry: { name, message } })
      });
      if (res.ok) {
        const newEntry = await res.json();
        setEntries([newEntry, ...entries]);
        setName('');
        setMessage('');
      } else {
        setError('Failed to submit entry');
      }
    } catch (err) {
      setError('Error submitting entry');
    }
  };

  return (
    <div className="min-h-screen nineties-container">
      <NinetiesNavbar />
      <section className="nineties-section">
        <Hero isNineties={true} />
      </section>
      <section className="nineties-section">
        <FeaturedBooks isNineties={true} />
      </section>
      <section className="nineties-section">
        <BlogPreview isNineties={true} />
      </section>
      <section className="nineties-section">
        <About isNineties={true} />
      </section>
     
      <section className="nineties-section">
        <h2 style={{ color: '#ff0' }}>Sign the Guestbook</h2>
        {error && <p className="error">{error}</p>}
        <form onSubmit={handleSubmit} className="guestbook-form">
          <input
            type="text"
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder="Your Name"
            required
            className="pixel-input"
          />
          <textarea
            value={message}
            onChange={e => setMessage(e.target.value)}
            placeholder="Your Message"
            required
            className="pixel-input"
          />
          <button type="submit" className="pixel-button">Submit</button>
        </form>
      </section>
      <section className="nineties-section">
        <h2 style={{ color: '#ff0' }}>Entries</h2>
        {entries.map(entry => (
          <div key={entry.id} className="entry">
            <strong>{entry.name}</strong>: {entry.message}
          </div>
        ))}
      </section>
      <section className="nineties-section">
        <h2 style={{ color: '#ff0' }}>Visitors</h2>
        <p>Count: {count}</p>
      </section> 
      <section className="nineties-section">
        <Contact isNineties={true} />
      </section>
      
    </div>
  );
};

export default NinetiesLook;