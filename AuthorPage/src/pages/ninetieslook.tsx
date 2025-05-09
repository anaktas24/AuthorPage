import React, { useState, useEffect } from 'react';
import './index.css';

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
    fetch('http://localhost:3000/api/guestbook')
      .then(res => res.json())
      .then(data => setEntries(data))
      .catch(err => setError(err.message));

    fetch('http://localhost:3000/api/visitor_count')
      .then(res => res.json())
      .then(data => setCount(data.count))
      .catch(err => setError(err.message));
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

  const incrementCount = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/visitor_count/increment', {
        method: 'POST'
      });
      if (res.ok) {
        const data = await res.json();
        setCount(data.count);
      }
    } catch (err) {
      setError('Error incrementing count');
    }
  };

  return (
    <div className="nineties-container">
      <WordArt text="90's Vibe Guestbook" theme="rainbow" />
      {error && <p className="error">{error}</p>}

      <div className="guestbook-form">
        <h2>Sign the Guestbook</h2>
        <form onSubmit={handleSubmit}>
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
      </div>

      <div className="guestbook-entries">
        <h2>Entries</h2>
        {entries.map(entry => (
          <div key={entry.id} className="entry">
            <strong>{entry.name}</strong>: {entry.message}
          </div>
        ))}
      </div>

      <div className="visitor-count">
        <h2>Visitors</h2>
        <WordArt text={`Count: ${count}`} theme="neon" />
        <button onClick={incrementCount} className="pixel-button">Increment</button>
      </div>
    </div>
  );
};

export default NinetiesLook;