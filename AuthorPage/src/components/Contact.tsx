import { Link } from 'react-router-dom';

const Contact: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h3 className="text-3xl font-bold text-gray-900 mb-8">Get in Touch</h3>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
          Have questions or want to connect? Reach out to me!
        </p>
        <Link
          to="/contact"
          className="bg-blue-500 text-white px-6 py-3 rounded-md font-semibold hover:bg-blue-600"
        >
          Contact Me
        </Link>
      </div>
    </section>
  );
};

export default Contact;