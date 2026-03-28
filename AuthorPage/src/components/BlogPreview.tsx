import { Link } from 'react-router-dom';

const BlogPreview: React.FC = () => {
  return (
    <section className="py-16 w-full">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">

        {/* HEADLINE */}
        <h3 className="text-3xl sm:text-4xl font-header font-bold text-primary mb-12 text-center tracking-tight transition-colors">
          Latest Insights
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {[1, 2].map((post) => (
            <div
              key={post}
              // bg-card will be White (Modern) or Silver (90s)
              className="p-6 rounded-2xl transition-transform duration-300
                         bg-card shadow-card hover:-translate-y-1 hover:shadow-lg"
            >
              <h4 className="text-xl font-bold font-header text-primary mb-2 transition-colors">
                Blog Post {post}
              </h4>

              <p className="text-secondary font-body text-sm leading-relaxed mb-4 transition-colors">
                A glimpse into my writing journey. Click to dive deeper into the story.
              </p>

              <Link
                to="/posts" // Changed to /posts to match your routes
                className="inline-block font-medium text-sm transition-colors duration-300
                           text-accent hover:underline hover:opacity-80"
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
