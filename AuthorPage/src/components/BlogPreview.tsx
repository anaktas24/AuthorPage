import { Link } from 'react-router-dom';

const BlogPreview: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-3xl font-bold text-gray-900 mb-8 text-center">Latest Blog Posts</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((post) => (
            <div key={post} className="bg-white shadow-md rounded-lg p-6">
              <h4 className="text-xl font-semibold text-gray-900">Blog Post {post}</h4>
              <p className="text-gray-600 mt-2">
                A snippet of the blog post goes here to entice readers to click and read more.
              </p>
              <Link
                to="/blog"
                className="mt-4 inline-block text-blue-500 hover:text-blue-700 font-medium"
              >
                Read More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;