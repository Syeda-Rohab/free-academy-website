import Link from 'next/link';
import { Github, Linkedin, Twitter, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', href: '/' },
    { name: 'Courses', href: '/courses' },
    { name: 'Progress', href: '/progress' },
    { name: 'About', href: '/about' },
  ];

  return (
    <footer className="bg-gradient-to-r from-slate-900 via-blue-900/20 to-slate-900 border-t border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="text-xl sm:text-2xl font-black bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent break-words">
              💻 CODEACADEMY
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Free programming education for everyone, everywhere. Learn to code and change the world.
            </p>
            <div className="flex space-x-3">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-lg hover:bg-blue-500/20 transition-all duration-300 hover:scale-110">
                <Github className="h-5 w-5 text-blue-400" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-lg hover:bg-blue-500/20 transition-all duration-300 hover:scale-110">
                <Linkedin className="h-5 w-5 text-blue-400" />
              </a>
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="p-2 bg-white/10 rounded-lg hover:bg-blue-500/20 transition-all duration-300 hover:scale-110">
                <Twitter className="h-5 w-5 text-blue-400" />
              </a>
              <a href="mailto:contact@codeacademy.com" className="p-2 bg-white/10 rounded-lg hover:bg-blue-500/20 transition-all duration-300 hover:scale-110">
                <Mail className="h-5 w-5 text-blue-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="text-gray-400 hover:text-blue-400 transition-colors duration-300 hover:translate-x-2 inline-block">
                    → {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Owner Info */}
          <div>
            <h3 className="text-lg font-bold text-white mb-4">Creator</h3>
            <div className="space-y-3">
              <div className="p-4 bg-gradient-to-br from-blue-500/20 to-cyan-500/20 rounded-lg border border-blue-500/30">
                <p className="text-white font-bold text-sm sm:text-lg break-words">SYEDA ROHAB ALI</p>
                <p className="text-blue-400 text-sm">Founder & Creator</p>
              </div>
              <p className="text-gray-400 text-sm">
                Passionate educator making programming education accessible to all.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-white/10">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0 text-center md:text-left">
            <p className="text-gray-500 text-sm">
              © {currentYear} Free CodeAcademy. All rights reserved.
            </p>
            <p className="text-gray-500 text-sm flex items-center space-x-2 flex-wrap justify-center">
              <span>Made with</span>
              <span className="text-red-500 animate-pulse">❤️</span>
              <span>for the learning community</span>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
