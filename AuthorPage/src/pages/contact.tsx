<<<<<<< HEAD
import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<{type: 'success' | 'error', msg: string} | null>(null);
=======
import { useState } from 'react';
import { Link } from 'react-router-dom';


const Contact: React.FC<{ isNineties?: boolean }> = ({ isNineties = false }) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [success, setSuccess] = useState('');
  const [error, setError] = useState('');
>>>>>>> 1fbd22205101e41261e3b5e597528fa038b8fd40

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
<<<<<<< HEAD
    // Simulate API call
    setTimeout(() => {
        setStatus({ type: 'success', msg: 'Message teleported successfully!' });
        setFormData({ name: '', email: '', message: '' });
    }, 1000);
  };

  return (
    <div className="w-full py-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-5xl">

        <div className="bg-card shadow-card rounded-3xl overflow-hidden flex flex-col md:flex-row min-h-[600px] border border-gray-100">

          {/* LEFT SIDEBAR: Contact Info */}
          {/* In Modern: Dark Gray background. In 90s: Black background (via bg-primary variable) */}
          <div className="md:w-2/5 bg-zinc-900 text-white p-10 flex flex-col justify-between relative overflow-hidden">

            {/* Background Texture for Modern Mode */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-40 h-40 bg-accent rounded-full blur-3xl opacity-20 pointer-events-none"></div>

            <div>
              <h2 className="text-3xl font-header font-bold mb-6">Get in Touch</h2>
              <p className="text-gray-400 font-body mb-8 leading-relaxed">
                Have a theory about the ending? Want to discuss 90s cartoons?
                Or just want to say hi? Send a transmission across the void.
              </p>

              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <span className="text-accent text-xl">✉</span>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500">Email</h4>
                    <p className="font-medium">author@fantasy.net</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="text-accent text-xl">📍</span>
                  <div>
                    <h4 className="font-bold text-sm uppercase tracking-wider text-gray-500">Base</h4>
                    <p className="font-medium">Athens, Greece</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12">
               <p className="text-sm text-gray-500 mb-4">Connect on Socials</p>
               <div className="flex gap-4">
                 {['Twitter', 'Instagram', 'Discord'].map(social => (
                   <a key={social} href="#" className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-accent transition-colors">
                     {/* You can put icons here */}
                     <span className="text-xs font-bold">{social[0]}</span>
                   </a>
                 ))}
               </div>
            </div>
          </div>

          {/* RIGHT SIDE: Form */}
          <div className="md:w-3/5 p-10 md:p-14 bg-card">
            <h3 className="text-2xl font-bold text-primary mb-8">Send a Message</h3>

            {status && (
              <div className={`p-4 rounded-lg mb-6 text-sm font-bold ${status.type === 'success' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {status.msg}
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-2 gap-6">
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-xs font-bold text-secondary uppercase mb-2">Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full bg-gray-50 p-3 rounded-lg border-2 border-transparent focus:bg-white focus:border-accent outline-none transition-all font-body text-primary"
                    placeholder="Jane Doe"
                    required
                  />
                </div>
                <div className="col-span-2 sm:col-span-1">
                  <label className="block text-xs font-bold text-secondary uppercase mb-2">Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full bg-gray-50 p-3 rounded-lg border-2 border-transparent focus:bg-white focus:border-accent outline-none transition-all font-body text-primary"
                    placeholder="jane@example.com"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-secondary uppercase mb-2">Message</label>
                <textarea
=======
    try {
      const res = await fetch('http://localhost:3000/api/contacts', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ contact: formData })
      });
      if (res.ok) {
        setSuccess('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' });
        setError('');
      } else {
        setError('Failed to send message');
      }
    } catch (err) {
      setError('Error sending message');
    }
  };

  return (
        <section className={isNineties ? 'nineties-section' : 'bg-white py-16'}>
          <div className={isNineties ? 'max-w-4xl mx-auto px-4' : "max-w-7xl mx-auto px-10 sm:px-6 lg:px-8 py-20"}>
          <h2 className={isNineties ? 'text-3xl font-pixel text-yellow-300 mb-4' : "text-4xl font-bold text-teal-900 mb-8 text-center"}>Contact Me</h2>
          {success && <p className="text-green-600 text-center">{success}</p>}
          {error && <p className="text-red-600 text-center">{error}</p>}
          <div className="max-w-lg mx-auto">
            <form onSubmit={handleSubmit} className="space-y-10">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-md border border-gray-300 shadow-sm focus:ring-amber-400 focus:border-amber-400"
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
>>>>>>> 1fbd22205101e41261e3b5e597528fa038b8fd40
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
<<<<<<< HEAD
                  className="w-full bg-gray-50 p-3 rounded-lg border-2 border-transparent focus:bg-white focus:border-accent outline-none transition-all font-body text-primary"
                  placeholder="Tell me your story..."
                  required
                ></textarea>
              </div>

              <button type="submit" className="btn-primary w-full">
                Transmit Signal
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>
=======
                  className="mt-1 block w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-gray-600 hover:bg-amber-600 text-white px-6 py-3 rounded-md font-semibold transition-all duration-300 shadow-lg"
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
                className="bg-gray-600 text-teal-900 px-6 py-3 rounded-full font-semibold hover:bg-grey-200 transition-transform duration-200 hover:scale-105"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </section>

>>>>>>> 1fbd22205101e41261e3b5e597528fa038b8fd40
  );
};

export default Contact;
