import React from 'react';
import { ArrowRight, Code, Smartphone, Zap } from 'lucide-react';

const Hero: React.FC = () => {
  const scrollToProducts = () => {
    const element = document.getElementById('products');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        {/* Headline & CTA */}
        <div className="text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-slate-900 leading-tight tracking-tight">
            Beautiful Websites
            <br />
            <span className="text-blue-600">Made Simple</span>
          </h1>

          <p className="mt-6 text-lg sm:text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
            Professional websites that won’t break the bank. <br className="hidden sm:block" />
            Start your online journey from just <span className="font-semibold text-blue-600">₹299</span>.
          </p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={scrollToProducts}
              className="px-8 py-4 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-all duration-300 shadow-md hover:shadow-xl text-base font-medium flex items-center"
            >
              View Our Services
              <ArrowRight className="ml-2" size={20} />
            </button>

            <button
              onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="px-8 py-4 border border-slate-300 text-slate-700 rounded-full hover:border-blue-600 hover:text-blue-600 transition-all duration-300 text-base font-medium"
            >
              Get Started
            </button>
          </div>
        </div>

        {/* Features Section */}
        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {/* Card 1 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Code className="text-blue-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-center text-slate-900 mb-2">Modern Design</h3>
            <p className="text-slate-600 text-center text-sm">
              Clean, modern websites built using the latest trends and technologies.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 bg-emerald-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Smartphone className="text-emerald-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-center text-slate-900 mb-2">Mobile First</h3>
            <p className="text-slate-600 text-center text-sm">
              Fully responsive designs for a seamless experience on all devices.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300">
            <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center mb-6 mx-auto">
              <Zap className="text-amber-600" size={28} />
            </div>
            <h3 className="text-xl font-semibold text-center text-slate-900 mb-2">Lightning Fast</h3>
            <p className="text-slate-600 text-center text-sm">
              Optimized for speed and performance to keep users engaged.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;