import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import '../index.css'

interface Post {
  id: number;
  title: string;
  content: string;
  published_at: string;
}

const PostDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [post, setPost] = useState<Post | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    fetch(`http://localhost:3000/api/posts/${id}`)
      .then(res => res.json())
      .then(data => {
        setPost(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err.message);
        setLoading(false);
      });
  }, [id]);

  if (loading) return <div className="container">Loading...</div>;
  if (error) return <div className="container">Error: {error}</div>;
  if (!post) return <div className="container">Post not found</div>;

  return (
    <div className="container">
      <h1>{post.title}</h1>
      <p>{new Date(post.published_at).toLocaleDateString()}</p>
      <p>{post.content}</p>
      <Link to="/posts" className="back-link">Back to Posts</Link>
      <Link to="/" className="back-link">Back to Home</Link>
    </div>
  );
};

export default PostDetail;