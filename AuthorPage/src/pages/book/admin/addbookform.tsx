import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const ADMIN_PASSWORD = '102400';

const AddBookForm = () => {
  const navigate = useNavigate();
  const [authenticated, setAuthenticated] = useState(false);
  const [password, setPassword] = useState('');

  // 1. Separate state for the file
  const [coverFile, setCoverFile] = useState<File | null>(null);

  const [form, setForm] = useState({
    title: '',
    description: '',
    // Removed cover_url from here, as it is now a file
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

  // 2. New handler specifically for file selection
  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setCoverFile(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // 3. Use FormData instead of JSON
    const formData = new FormData();
    formData.append('title', form.title);
    formData.append('description', form.description);
    formData.append('progress', String(form.progress));

    if (coverFile) {
      // 'cover' is the key your backend will look for
      formData.append('cover', coverFile);
    } else {
        alert("Please select a cover image");
        return;
    }

    try {
      const res = await fetch('http://localhost:3000/api/books', {
        method: 'POST',
        // IMPORTANT: Do NOT set Content-Type to application/json.
        // The browser automatically sets the correct multipart/form-data boundary.
        body: formData,
      });

      if (res.ok) {
        alert('Book added!');
        navigate('/admin');
      } else {
        const err = await res.json();
        alert(`Failed: ${err.error || 'Unknown error'}`);
      }
    } catch (error) {
      console.error(error);
      alert('Network error occurred');
    }
  };

  if (!authenticated) {
    return (
      <div className="min-h-screen flex items-center justify-center p-4">
        <div className="bg-card shadow-card p-8 rounded-2xl w-full max-w-md">
          <h2 className="text-xl font-bold font-header text-primary mb-4 text-center">Admin Access</h2>
          <input
            type="password"
            className="w-full p-3 rounded border border-gray-300 mb-4 font-body"
            placeholder="Enter Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button
            className="w-full bg-accent text-white font-bold py-3 rounded-full hover:opacity-90"
            onClick={handleAuth}
          >
            Enter
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-12 px-4 w-full">
      <div className="max-w-2xl mx-auto bg-card shadow-card p-8 rounded-2xl">
        <h2 className="text-3xl text-center font-bold font-header text-primary mb-8">Add a New Book</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <input
            type="text"
            name="title"
            placeholder="Title"
            value={form.title}
            onChange={handleChange}
            className="w-full p-3 rounded border border-gray-300 font-body"
            required
          />
          <textarea
            name="description"
            placeholder="Description"
            value={form.description}
            onChange={handleChange}
            className="w-full p-3 rounded border border-gray-300 font-body"
            rows={4}
            required
          />

          {/* File Input Changed Here */}
          <div className="space-y-2">
            <label className="block text-sm font-medium text-gray-700">Cover Image</label>
            <input
                type="file"
                accept="image/*" // Only allow images
                onChange={handleFileChange}
                className="w-full p-3 rounded border border-gray-300 font-body bg-white"
                required
            />
          </div>

          <input
            type="number"
            name="progress"
            placeholder="Progress (%)"
            value={form.progress}
            onChange={handleChange}
            className="w-full p-3 rounded border border-gray-300 font-body"
            min={0}
            max={100}
            required
          />
          <button type="submit" className="btn-primary w-full">
            Add Book
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBookForm;
