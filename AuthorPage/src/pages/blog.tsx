


const Blog: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#FDF6E3]">
      <section className="parchment-bg py-16 seamless-bg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-4xl font-bold text-teal-900 mb-8 text-center">Blog</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3].map((post) => (
              <div key={post} className="seamless-bg p-6">
                <h3 className="text-2xl font-semibold text-teal-900">Blog Post {post}</h3>
                <p className="text-gray-600 mt-2">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <a
                  href="#"
                  className="mt-4 inline-block text-amber-600 hover:text-amber-700 font-medium"
                >
                  Read More
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;