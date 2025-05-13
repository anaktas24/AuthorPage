import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../../index.css';

const PostNew: React.FC = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
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
        setSuccess('Post created successfully!');
        setTitle('');
        setContent('');
        setError('');
      } else {
        setError('Failed to create post');
      }
    } catch (err) {
      setError('Error creating post');
    }
  };

  return (
    <div className="container">
      <h1>Create New Blog Post</h1>
      {success && <p className="success">{success}</p>}
      {error && <p className="error">{error}</p>}
      <form onSubmit={handleSubmit} className="contact-form">
        <input
          type="text"
          value={title}
          onChange={e => setTitle(e.target.value)}
          placeholder="Post Title"
          required
        />
        <textarea
          value={content}
          onChange={e => setContent(e.target.value)}
          placeholder="Post Content"
          required
        />
        <button type="submit" className="pixel-button">Create Post</button>
      </form>
      <Link to="/posts" className="back-link">Back to Posts</Link>
      <Link to="/" className="back-link">Back to Home</Link>
    </div>
  );
};

export default PostNew;