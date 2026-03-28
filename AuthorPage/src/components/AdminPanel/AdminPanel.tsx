import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

interface Book {
  id: number;
  title: string;
  description: string;
  cover_url: string;
  progress: number;
}

const AdminPanel = () => {
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(() => {
    fetch('http://localhost:3000/api/books')
      .then(res => res.json())
      .then(data => setBooks(data));
  }, []);

  const handleDelete = async (id: number) => {
    if(!confirm("Are you sure you want to delete this book?")) return;

    await fetch(`http://localhost:3000/api/books/${id}`, {
      method: 'DELETE'
    });
    setBooks(books.filter(b => b.id !== id));
  };

  return (
    <div className="min-h-screen pt-32 pb-12 w-full">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-header font-bold text-primary">Admin Panel</h2>
          <Link
            to="/admin/create"
            className="bg-accent text-white px-6 py-2 rounded-full font-bold hover:opacity-90 transition-opacity"
          >
            + Add New Book
          </Link>
        </div>

        <ul className="space-y-4">
          {books.map(book => (
            <li key={book.id} className="p-6 rounded-xl flex justify-between items-center transition-all
                                       bg-card shadow-card border-2 border-transparent">
              <div>
                <p className="font-bold text-primary font-header text-xl">{book.title}</p>
                <p className="text-sm text-secondary font-body line-clamp-1">{book.description}</p>
              </div>
              <div className="flex gap-4 ml-4">
                <Link to={`/admin/edit/${book.id}`} className="font-bold text-accent hover:underline">
                  Edit
                </Link>
                <button onClick={() => handleDelete(book.id)} className="font-bold text-red-600 hover:underline">
                  Delete
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AdminPanel;
