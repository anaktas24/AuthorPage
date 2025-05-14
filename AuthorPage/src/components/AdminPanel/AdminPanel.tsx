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
    await fetch(`http://localhost:3000/api/books/${id}`, {
      method: 'DELETE'
    });
    setBooks(books.filter(b => b.id !== id));
  };

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold mb-4">Admin Panel</h2>
      <Link to="/admin/create" className="bg-teal-700 text-white px-4 py-2 rounded">+ Add New Book</Link>
      <ul className="mt-8 space-y-4">
        {books.map(book => (
          <li key={book.id} className="p-4 border rounded flex justify-between items-center">
            <div>
              <p className="font-bold">{book.title}</p>
              <p className="text-sm text-gray-500">{book.description}</p>
            </div>
            <div className="space-x-2">
              <Link to={`/admin/edit/${book.id}`} className="text-blue-600 hover:underline">Edit</Link>
              <button onClick={() => handleDelete(book.id)} className="text-red-600 hover:underline">Delete</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdminPanel;
