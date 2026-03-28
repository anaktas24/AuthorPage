import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

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

  if (loading) return <div className="pt-40 text-center font-header text-primary">Loading...</div>;
  if (error) return <div className="pt-40 text-center text-red-500">Error: {error}</div>;
  if (!post) return <div className="pt-40 text-center font-header text-primary">Post not found</div>;

  return (
    <div className="min-h-screen pt-32 pb-12 w-full">
      <article className="max-w-3xl mx-auto px-4 sm:px-6">

        {/* Post Header */}
        <header className="mb-8 text-center">
          <div className="text-sm font-bold text-accent mb-2">
            {new Date(post.published_at).toLocaleDateString()}
          </div>
          <h1 className="text-4xl md:text-5xl font-header font-bold text-primary mb-6 leading-tight transition-colors">
            {post.title}
          </h1>
        </header>

        {/* Post Content (Card style) */}
        <div className="p-8 md:p-12 rounded-2xl bg-card shadow-card transition-colors duration-300">
          <div className="prose prose-lg max-w-none font-body text-secondary whitespace-pre-wrap">
            {post.content}
          </div>
        </div>

        {/* Navigation */}
        <div className="mt-12 flex justify-between">
          <Link
            to="/posts"
            className="font-bold text-primary hover:text-accent transition-colors"
          >
            &larr; Back to Posts
          </Link>
          <Link
            to="/"
            className="font-bold text-primary hover:text-accent transition-colors"
          >
            Home
          </Link>
        </div>

      </article>
    </div>
  );
};

export default PostDetail;
