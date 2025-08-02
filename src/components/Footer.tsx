import React from 'react';
import { Heart, Code } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">
              dheyy <span className="text-blue-400">website</span>
            </h3>
            <p className="text-slate-300 leading-relaxed">
              Professional website development that brings your business online with style and functionality.
            </p>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => document.getElementById('hero')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('products')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
                  className="text-slate-300 hover:text-blue-400 transition-colors duration-200"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Contact Info</h4>
            <ul className="space-y-2 text-slate-300">
              <li>Phone: +91 82898 48173</li>
              <li>Phone: +91 98475 12024</li>
              <li>Email: dheeywebsite@gmail.com</li>
              <li>Location: Kerala, India</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-700 pt-8 text-center">
          <p className="text-slate-400 flex items-center justify-center">
            Made with <Heart className="mx-2 text-red-500" size={16} /> and <Code className="mx-2 text-blue-400" size={16} /> by dheyy website © 2025
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;