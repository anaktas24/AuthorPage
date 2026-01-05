import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

interface Post {
  id: number;
  title: string;
  content: string;
  published_at: string;
}

const Posts: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch('http://localhost:3000/api/posts')
      .then(res => res.json())
      .then(data => setPosts(data))
      .catch(err => setError(err.message));
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-12 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        <div className="flex justify-between items-end mb-12">
          <h1 className="text-4xl font-header font-bold text-primary transition-colors">
            Blog Posts
          </h1>
          {/* Admin link only visible if needed */}
          <Link to="/posts/new" className="text-sm font-bold text-accent hover:underline">
            + New Post
          </Link>
        </div>

        {error && <div className="p-4 bg-red-100 text-red-700 rounded-lg mb-6">{error}</div>}

        {posts.length === 0 ? (
          <p className="text-secondary font-body">No posts yet.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {posts.map(post => (
              <Link
                to={`/posts/${post.id}`}
                key={post.id}
                className="group block p-8 rounded-2xl transition-all duration-300
                           bg-card shadow-card hover:-translate-y-1 hover:shadow-lg border-2 border-transparent"
              >
                <span className="text-xs font-bold text-accent uppercase tracking-wider">
                  {new Date(post.published_at).toLocaleDateString()}
                </span>

                <h2 className="mt-2 text-2xl font-header font-bold text-primary group-hover:text-accent transition-colors">
                  {post.title}
                </h2>

                <p className="mt-4 text-secondary font-body line-clamp-3">
                  {post.content}
                </p>

                <span className="mt-6 inline-block text-sm font-bold text-primary group-hover:underline">
                  Read Article &rarr;
                </span>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Posts;
