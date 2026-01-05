import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

const PostNew: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [status, setStatus] = useState<{ type: 'success' | 'error', msg: string } | null>(null);
  const navigate = useNavigate();

  // SECURITY NOTE: In a real app, never hardcode credentials in the frontend.
  // This is visible to anyone who inspects your code.
  const username = 'admin';
  const password = 'secret';

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await fetch('http://localhost:3000/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Basic ${btoa(`${username}:${password}`)}`
        },
        body: JSON.stringify({ post: { title, content } })
      });
      if (res.ok) {
        setStatus({ type: 'success', msg: 'Post created! Redirecting...' });
        setTimeout(() => navigate('/posts'), 1500);
      } else {
        setStatus({ type: 'error', msg: 'Failed to create post' });
      }
    } catch (err) {
      setStatus({ type: 'error', msg: 'Error creating post' });
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-12 w-full flex justify-center">
      <div className="w-full max-w-2xl px-4">

        <div className="bg-card shadow-card rounded-2xl p-8 transition-colors duration-300">
          <h1 className="text-3xl font-header font-bold text-primary mb-8 text-center">Create New Post</h1>

          {status && (
            <div className={`p-4 rounded-lg mb-6 ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
              {status.msg}
            </div>
          )}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-sm font-bold text-secondary mb-2">Title</label>
              <input
                type="text"
                value={title}
                onChange={e => setTitle(e.target.value)}
                placeholder="Enter post title..."
                required
                className="w-full p-4 rounded-lg bg-background text-primary border-2 border-transparent focus:border-accent outline-none transition-all shadow-inner"
              />
            </div>

            <div>
              <label className="block text-sm font-bold text-secondary mb-2">Content</label>
              <textarea
                value={content}
                onChange={e => setContent(e.target.value)}
                placeholder="Write your masterpiece..."
                rows={10}
                required
                className="w-full p-4 rounded-lg bg-background text-primary border-2 border-transparent focus:border-accent outline-none transition-all shadow-inner"
              />
            </div>

            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 py-3 px-6 rounded-full font-bold text-white bg-accent hover:opacity-90 transition-opacity"
              >
                Publish Post
              </button>

              <Link
                to="/posts"
                className="px-6 py-3 rounded-full font-bold text-primary border-2 border-gray-300 hover:bg-gray-100 transition-colors"
              >
                Cancel
              </Link>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default PostNew;
