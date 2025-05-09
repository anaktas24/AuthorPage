import { useState } from 'react';
import Navbar from '../components/NavBar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';


const Contact: React.FC = () => {
    const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  
    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
  
    const handleSubmit = (e: React.FormEvent) => {
      e.preventDefault();
      console.log('Form submitted:', formData);
      setFormData({ name: '', email: '', message: '' });
    };
  
    return (
      <div className="min-h-screen bg-[#FDF6E3]">
        <Navbar />
        <section className="bg-teal-50 py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-4xl font-bold text-teal-900 mb-8 text-center">Contact Me</h2>
            <div className="max-w-lg mx-auto">
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-amber-400 text-teal-900 px-4 py-2 rounded-full font-semibold hover:bg-amber-500 transition-transform duration-200 hover:scale-105"
                >
                  Send Message
                </button>
              </form>
              <div className="mt-8 text-center">
                <p className="text-gray-600">Or connect with me on social media:</p>
                <div className="mt-4 flex justify-center gap-4">
                  <a href="#" className="text-amber-600 hover:text-amber-700">
                    Twitter
                  </a>
                  <a href="#" className="text-amber-600 hover:text-amber-700">
                    Instagram
                  </a>
                  <a href="#" className="text-amber-600 hover:text-amber-700">
                    Email
                  </a>
                </div>
              </div>
              <div className="mt-8 text-center">
                <Link
                  to="/"
                  className="bg-amber-400 text-teal-900 px-6 py-3 rounded-full font-semibold hover:bg-amber-500 transition-transform duration-200 hover:scale-105"
                >
                  Back to Home
                </Link>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    );
  };
  
  export default Contact;