import { useState } from 'react';

const ADMIN_PASSWORD = '102400'; // You can change this

const AddBookForm = () => {
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');
  const [form, setForm] = useState({
    title: '',
    description: '',
    cover_url: '',
    progress: 0,
  });

  const handleAuth = () => {
    if (password === ADMIN_PASSWORD) {
      setAuthenticated(true);
    } else {
      alert("Incorrect password");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'progress' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch('http://localhost:3000/api/books', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert('Book added!');
      setForm({ title: '', description: '', cover_url: '', progress: 0 });
    } else {
      const err = await res.json();
      alert(`Failed: ${err.error || 'Unknown error'}`);
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gray-100">
        <div className="bg-white p-6 rounded shadow">
          <h2 className="text-xl font-bold mb-4">Enter Admin Password</h2>
          <input
            type="password"
            className="border p-2 w-full mb-4"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="bg-teal-600 text-white px-4 py-2 rounded"
            onClick={handleAuth}
          >
            Enter
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <h2 className="text-3xl text-center font-bold text-teal-900 mb-10">Add a New Book</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />
        <textarea
          name="description"
          placeholder="Description"
          value={form.description}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          rows={4}
          required
        />
        <input
          type="text"
          name="cover_url"
          placeholder="Cover Image URL"
          value={form.cover_url}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />
        <input
          type="number"
          name="progress"
          placeholder="Progress (%)"
          value={form.progress}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          min={0}
          max={100}
          required
        />
        <button type="submit" className="bg-teal-700 text-white px-6 py-3 rounded hover:bg-teal-800">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBookForm;
