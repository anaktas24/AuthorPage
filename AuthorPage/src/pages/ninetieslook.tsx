import React, { useEffect, useState } from 'react';
import NinetiesNavbar from '../components/ui/NinetiesNavbar';
import Hero from '../components/sections/Hero';
import FeaturedBooks from '../components/sections/FeaturedBooks';
import BlogPreview from '../components/sections/BlogPreview';
import About from './about';
import Contact from './contact';

interface GuestbookEntry {
  id: number;
  name: string;
  message: string;
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
      .catch(() => setError('Error incrementing count'));
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
    } catch {
      setError('Error submitting entry');
    }
  };

  return (
    <div className="nineties nineties-container">
      {/* Top marquee + hit counter */}
      <div className="nineties-topbar">
        <marquee>
          <span className="marquee-text">★ Welcome to Bookworm HQ — established 1996! ★</span>
          <span className="marquee-text">Be kind, rewind… your thoughts into the guestbook!</span>
          <span className="marquee-text">Visitor #{String(count).padStart(6, '0')}</span>
        </marquee>
      </div>

      <NinetiesNavbar />

      <section className="nineties-section nineties-hero">
        <Hero />
      </section>

      <section className="nineties-section nineties-featured">
        <FeaturedBooks />
      </section>

      <section className="nineties-section nineties-blog">
        <BlogPreview />
      </section>

      <section className="nineties-section nineties-about">
        <About />
      </section>

      {/* Guestbook */}
      <section id="guestbook" className="nineties-section">
        <div className="section-header">
          <img
            alt="Under Construction"
            className="badge"
            width={88}
            height={31}
            src="data:image/gif;base64,R0lGODlhWAAfAPcAABkZGd3d3X9/f5mZmWxsbM3Nzdvb27i4uLCwsOjo6NLS0u/v77+/v5+fn8/Pz6+vr7+/vj4+P///8zMzMXFxe/v71hYWG9vb4qKip2dnZmZmcmJiYWFhYREREb29vaSkpJOTk6mpqYqKiq+vr6ioqK2tra6urrCwsKenp4+Pj4ODg8PDw5eXl9fX1+fn5+Li4tra2tTU1NDQ0NnZ2cbGxt7e3sTExObm5qWlpaioqH5+fmNjY7Ozs8bGxvv7+7i4uKmpqaamprq6up+fn729vUdHR+Pj4/Pz88DAwNPT0+jo6CYmJq+vr0pKSlVVVXNzc3x8fI6OjvX19e/v7zU1NVlZWYCAgJ+fn4CAgF5eXmhoaNra2nV1dZycnEFBQbq6ui4uLmZmZmZmZjExMTk5OV1dXYSEhJiYmH9/f2tra2dnZ7S0tLKysqCgoJWVlZqamqOjoxAQEHBwcAYGBm5ubnFxcbCwsPz8/Ozs7O/v78PDw6ioqMDAwJ6enpSUlLa2tnNzc7m5uQAAAP///yH5BAEAAP8ALAAAAABYAB8AAAj/AP8JHEiwoMGDCBMqXMiwocOHECNKnEixosWLGDNq3MiwoMGTP8QJH0p4psmTIUOPOkZ9jJ9IXGhxY8aQGvOqQ3e1b9q0acmTJ0+eRG9a4cOnTp06fQo0qdSo06dQoVapc2fOn0KNKvdq1a9i/d/8hSxlCjQk2rNixY8eOIa7a9fv379/Djy59OvYsx4+fPny5cuoefPo06dPnz59/MrXq1+/fwIMLFixYsWLFCtW7FizZs2bN3/iw4cPHyB4kULFihUrVqzYsWPHjh07fvy48ePHjyBDhy9fvnz5gw8fQkCABw8hAAAgQwYGDRw8ePAgYcKBAwcSJBAAAIIGDAgQAPkQAAQIECDgQIECBw4cSLCgwYMGCBAgQIAAAOw=="
          />
          <h2>✍️ Sign the Guestbook</h2>
        </div>

        {error && <p className="error">{error}</p>}

        <form onSubmit={handleSubmit} className="guestbook-form">
          <label className="label">
            <span>Name</span>
            <input
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              placeholder="Your Name"
              required
              className="pixel-input"
            />
          </label>

        <label className="label">
            <span>Message</span>
            <textarea
              value={message}
              onChange={e => setMessage(e.target.value)}
              placeholder="Your Message"
              required
              className="pixel-input"
              rows={4}
            />
          </label>

          <button type="submit" className="pixel-button">Submit</button>
        </form>
      </section>

      {/* Entries */}
      <section className="nineties-section">
        <h2 className="section-title">📔 Guestbook Entries</h2>
        {entries.map(entry => (
          <div key={entry.id} className="entry">
            <div className="entry-head">
              <strong>{entry.name}</strong>
              <span className="dot" />
              <time suppressHydrationWarning>{new Date().toLocaleDateString()}</time>
            </div>
            <p>{entry.message}</p>
          </div>
        ))}
      </section>

      {/* Visitors */}
      <section className="nineties-section">
        <h2 className="section-title">Visitors</h2>
        <div className="hit-counter">Count: {count}</div>
      </section>

      <section className="nineties-section">
        <Contact isNineties={true} />
      </section>

      <footer className="nineties-footer">
        <div className="blink">Best viewed in Netscape Navigator 3.0 at 800×600</div>
        <p className="nineties-footer-links">
          <a className="nineties-footer-link" href="#top">Back to top</a>
          <span> • </span>
          <a className="nineties-footer-link" href="#guestbook">Guestbook</a>
        </p>
      </footer>
    </div>
  );
};

export default NinetiesLook;