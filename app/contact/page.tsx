import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: 'Contact Us - Free CodeAcademy',
  description: 'Get in touch with our team',
};

export default function ContactPage() {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl font-bold text-white mb-6">Contact Us</h1>
        <p className="text-xl text-gray-400 mb-12">
          Have questions? We&apos;d love to hear from you!
        </p>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Contact Form */}
          <div className="glass-card p-8">
            <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="your@email.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-800 border border-slate-700 rounded-lg text-white focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  placeholder="Your message..."
                />
              </div>
              <button
                type="submit"
                className="w-full btn-primary font-bold"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold text-white mb-6">Contact Information</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Email</h3>
                  <p className="text-gray-300">support@codeacademy.com</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Location</h3>
                  <p className="text-gray-300">Online Platform</p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-blue-400 mb-2">Community</h3>
                  <p className="text-gray-300">Join our Discord server</p>
                </div>
              </div>
            </div>

            <div className="glass-card p-8">
              <h2 className="text-2xl font-bold text-white mb-4">Quick Links</h2>
              <div className="space-y-3">
                <Link href="/about" className="block text-gray-300 hover:text-blue-400 transition-colors">
                  → About Us
                </Link>
                <Link href="/courses" className="block text-gray-300 hover:text-blue-400 transition-colors">
                  → Browse Courses
                </Link>
                <Link href="/progress" className="block text-gray-300 hover:text-blue-400 transition-colors">
                  → Track Progress
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
