import { Link } from 'react-router-dom';
import '../index.css';

const BlogPreview: React.FC = () => {
  return (
    <section className="bg-teal-50 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h3 className="text-4xl font-bold text-teal-900 mb-8 text-center">Latest Insights</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[1, 2].map((post) => (
            <div key={post} className="bg-white rounded-xl shadow hover:shadow-lg transition duration-300 p-6">
            <h4 className="text-2xl font-bold text-teal-900">Blog Post {post}</h4>
            <p className="text-gray-700 mt-2">
              A glimpse into my writing journey. Click to dive deeper into the story.
            </p>
            <Link
              to="/blog"
              className="mt-4 inline-block text-amber-600 hover:text-amber-800 font-semibold transition-colors duration-300"
            >
              Read More →
            </Link>
          </div>
          
          ))}
        </div>
      </div>
    </section>
  );
};

export default BlogPreview;