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

  // 1. FETCH EXISTING DATA
  useEffect(() => {
    fetch(`http://localhost:3000/api/books/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Book not found");
        return res.json();
      })
      .then((data) => {
        setForm({
          title: data.title,
          description: data.description,
          cover_url: data.cover_url,
          progress: data.progress,
        });
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        alert("Book not found or API error");
        navigate('/admin');
      });
  }, [id, navigate]);

  // 2. HANDLE INPUT CHANGES
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({
      ...prev,
      [name]: name === 'progress' ? Number(value) : value,
    }));
  };

  // 3. HANDLE SUBMIT (THE FIX IS HERE)
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch(`http://localhost:3000/api/books/${id}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        // ✅ CRITICAL FIX: Wrap 'form' inside a 'book' object for Rails strong params
        body: JSON.stringify({ book: form }),
      });

      if (res.ok) {
        alert('Book updated successfully!');
        navigate('/admin');
      } else {
        // Try to read the error message from Rails
        const errData = await res.json();
        const errorMessage = errData.errors
           ? JSON.stringify(errData.errors)
           : "Unknown error occurred";

        alert(`Failed to save: ${errorMessage}`);
      }
    } catch (error) {
      console.error("Save Error:", error);
      alert("Network error: Is the Rails server running?");
    }
  };

  if (loading) return <div className="text-center mt-32 font-bold text-primary animate-pulse">Loading book details...</div>;

  return (
    <div className="min-h-screen pt-32 pb-12 px-4 w-full">
      <div className="max-w-xl mx-auto bg-card shadow-card p-8 rounded-2xl transition-all duration-300 border border-gray-100">

        <h2 className="text-3xl text-center font-bold font-header text-primary mb-8">
          Edit Book
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* TITLE */}
          <div>
            <label className="block text-sm font-bold text-secondary mb-2">Title</label>
            <input
              type="text"
              name="title"
              value={form.title}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 font-body focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
              required
            />
          </div>

          {/* DESCRIPTION */}
          <div>
            <label className="block text-sm font-bold text-secondary mb-2">Description</label>
            <textarea
              name="description"
              value={form.description}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 font-body focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
              rows={4}
              required
            />
          </div>

          {/* COVER URL */}
          <div>
            <label className="block text-sm font-bold text-secondary mb-2">Cover URL</label>
            <input
              type="text"
              name="cover_url"
              value={form.cover_url}
              onChange={handleChange}
              className="w-full p-3 rounded-lg border border-gray-300 font-body focus:border-accent focus:ring-2 focus:ring-accent/20 outline-none transition-all"
              required
            />
          </div>

          {/* PROGRESS */}
          <div>
            <label className="block text-sm font-bold text-secondary mb-2">
              Progress: <span className="text-accent">{form.progress}%</span>
            </label>
            <input
              type="range"
              name="progress"
              value={form.progress}
              onChange={handleChange}
              className="w-full accent-accent cursor-pointer"
              min={0}
              max={100}
            />
          </div>

          {/* BUTTONS */}
          <div className="pt-6 flex gap-4">
            <button
              type="submit"
              className="flex-1 bg-gray-900 text-white font-bold py-3 rounded-full hover:bg-accent hover:scale-105 transition-all shadow-lg"
            >
              Save Changes
            </button>
            <button
              type="button"
              onClick={() => navigate('/admin')}
              className="px-6 py-3 rounded-full font-bold text-primary border-2 border-gray-200 hover:bg-gray-100 hover:border-gray-300 transition-all"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBookForm;
