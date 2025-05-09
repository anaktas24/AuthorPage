import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './index.css';

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
    <div className="container">
      <h1>Blog Posts</h1>
      {error && <p className="error">{error}</p>}
      {posts.length === 0 ? (
        <p>No posts yet.</p>
      ) : (
        <ul className="post-list">
          {posts.map(post => (
            <li key={post.id}>
              <Link to={`/posts/${post.id}`} className="post-link">
                <h2>{post.title}</h2>
                <p>{new Date(post.published_at).toLocaleDateString()}</p>
              </Link>
            </li>
          ))}
        </ul>
      )}
      <Link to="/" className="back-link">Back to Home</Link>
    </div>
  );
};

export default Posts;