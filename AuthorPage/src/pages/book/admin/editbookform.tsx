import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const EditBookForm = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [form, setForm] = useState({
    title: '',
    description: '',
    cover_url: '',
    progress: 0,
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:3000/api/books/${id}`)
      .then((res) => res.json())
      .then((data) => {
        setForm({
          title: data.title,
          description: data.description,
          cover_url: data.cover_url,
          progress: data.progress,
        });
        setLoading(false);
      })
      .catch(() => alert("Book not found"));
  }, [id]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'progress' ? Number(value) : value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const res = await fetch(`http://localhost:3000/api/books/${id}`, {
      method: 'PATCH',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(form),
    });

    if (res.ok) {
      alert('Book updated!');
      navigate('/admin');
    } else {
      const err = await res.json();
      alert(`Error: ${err.error}`);
    }
  };

  if (loading) return <div className="text-center mt-20 text-gray-500">Loading book...</div>;

  return (
    <div className="min-h-screen bg-white py-20 px-4">
      <h2 className="text-3xl text-center font-bold text-teal-900 mb-10">Edit Book</h2>
      <form onSubmit={handleSubmit} className="max-w-xl mx-auto space-y-6">
        <input
          type="text"
          name="title"
          value={form.title}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />
        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          rows={4}
          required
        />
        <input
          type="text"
          name="cover_url"
          value={form.cover_url}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          required
        />
        <input
          type="number"
          name="progress"
          value={form.progress}
          onChange={handleChange}
          className="w-full border p-3 rounded"
          min={0}
          max={100}
          required
        />
        <button type="submit" className="bg-teal-700 text-white px-6 py-3 rounded hover:bg-teal-800">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditBookForm;
