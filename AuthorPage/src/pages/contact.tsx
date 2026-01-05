import React, { useState } from 'react';

const Contact: React.FC = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<{type: 'success' | 'error', msg: string} | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
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
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={4}
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
  );
};

export default Contact;
