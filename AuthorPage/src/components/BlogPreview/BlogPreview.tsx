import { Link } from 'react-router-dom';
import '../../index.css';

const BlogPreview: React.FC<{ isNineties?: boolean }> = ({ isNineties = false }) => {
  return (
    <section className={isNineties ? 'nineties-section' : 'bg-white py-16 seamless-bg'}>
      <div className={isNineties ? 'max-w-4xl mx-auto px-4' : 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'}>
        <h3 className={isNineties ? 'text-3xl font-pixel text-yellow-300 mb-6 text-center' : 'text-4xl font-bold text-teal-900 mb-8 text-center'}>Latest Insights</h3>
        <div className={isNineties ? 'grid grid-cols-1 gap-6' : 'grid grid-cols-1 md:grid-cols-2 gap-8'}>
          {[1, 2].map((post) => (
            <div key={post} className={isNineties ? 'bg-gray-800 p-4' : 'bg-white p-6'}>
              <h4 className={isNineties ? 'text-xl font-pixel text-yellow-300' : 'text-2xl font-semibold text-teal-900'}>Blog Post {post}</h4>
              <p className={isNineties ? 'text-gray-400 mt-2' : 'text-gray-600 mt-2'}>
                A glimpse into my writing journey. Click to dive deeper into the story.
              </p>
              <Link
                to="/blog"
                className={isNineties ? 'text-blue-400 hover:text-blue-300 mt-2 inline-block' : 'mt-4 inline-block text-amber-600 hover:text-amber-700 font-medium'}
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