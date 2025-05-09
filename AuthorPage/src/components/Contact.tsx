import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <section className="parchment-bg py-16 seamless-bg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-4xl font-bold text-teal-900 mb-8">Join the Journey</h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Want to stay updated on my book’s release? Reach out or follow along!
        </p>
        <Link
          to="/contact"
          className="bg-amber-400 text-teal-900 px-6 py-3 rounded-full font-semibold hover:bg-amber-500 transition-transform duration-200 hover:scale-105"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  );
};

export default Contact;