import Navbar from '../components/NavBar';
import Footer from '../components/Footer';

const posts = [
  { id: 1, title: 'Blog Post 1', snippet: 'Thoughts on writing my latest novel and the inspiration behind it.' },
  { id: 2, title: 'Blog Post 2', snippet: 'Tips for aspiring authors to overcome writer’s block.' },
  { id: 3, title: 'Blog Post 3', snippet: 'A behind-the-scenes look_ma at my book tour.' },
];

const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">My Blog</h2>
          <div className="space-y-8">
            {posts.map((post) => (
              <div key={post.id} className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold text-gray-900">{post.title}</h3>
                <p className="text-gray-600 mt-2">{post.snippet}</p>
                <a
                  href="#"
                  className="mt-4 inline-block text-blue-500 hover:text-blue-700 font-medium"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Blog;