import React from 'react';
import { Check, Star, Globe, Palette, Smartphone } from 'lucide-react';

interface ProductFeature {
  text: string;
  included: boolean;
}

interface Product {
  title: string;
  price: string;
  originalPrice?: string;
  description: string;
  features: ProductFeature[];
  popular?: boolean;
  icon: React.ReactNode;
}

const Products: React.FC = () => {
  const products: Product[] = [
    {
      title: "Basic Website",
      price: "₹299",
      originalPrice: "₹999",
      description: "Perfect for small businesses and personal portfolios",
      icon: <Globe className="text-blue-600" size={32} />,
      popular: true,
      features: [
        { text: "5 Page Website", included: true },
        { text: "Mobile Responsive Design", included: true },
        { text: "Contact Form", included: true },
        { text: "Social Media Integration", included: true },
        { text: "1 Month Support", included: true },
        { text: "SSL Certificate", included: true },
        { text: "Free Domain and Hosting", included: true },
      ]
    },
    {
      title: "Professional Website",
      price: "₹499",
      originalPrice: "₹1599",
      description: "Advanced features for growing businesses",
      icon: <Palette className="text-emerald-600" size={32} />,
      features: [
        { text: "10 Page Website", included: true },
        { text: "Mobile Responsive Design", included: true },
        { text: "Custom Design", included: true },
        { text: "Advanced Contact Forms", included: true },
        { text: "Social Media Integration", included: true },
        { text: "3 Months Support", included: true },
        { text: "SSL Certificate", included: true },
        { text: "Free Domain and Hosting", included: true },
      ]
    },
    {
      title: "E-Commerce Website",
      price: "₹2000+",
      description: "Complete online store solution",
      icon: <Smartphone className="text-purple-600" size={32} />,
      features: [
        { text: "Unlimited Pages", included: true },
        { text: "Product Catalog", included: true },
        { text: "Shopping Cart", included: true },
        { text: "Payment Gateway", included: true },
        { text: "Inventory Management", included: true },
        { text: "6 Months Support", included: true },
        { text: "SSL Certificate", included: true },
        { text: "Custom Domain & Hosting", included: true },
      ]
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="products" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-4">
            Choose Your Perfect Website
          </h2>
          <p className="text-xl text-slate-600 max-w-3xl mx-auto">
            Professional website development packages designed to fit every budget and requirement
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 ${
                product.popular ? 'ring-2 ring-blue-600 scale-105' : ''
              }`}
            >
              {product.popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold flex items-center">
                    <Star className="mr-1" size={16} />
                    Most Popular
                  </div>
                </div>
              )}

              <div className="p-8">
                <div className="flex items-center justify-center w-16 h-16 bg-slate-100 rounded-xl mb-6 mx-auto">
                  {product.icon}
                </div>

                <h3 className="text-2xl font-bold text-slate-900 text-center mb-2">
                  {product.title}
                </h3>

                <div className="text-center mb-6">
                  <div className="flex items-center justify-center space-x-2">
                    <span className="text-4xl font-bold text-blue-600">{product.price}</span>
                    {product.originalPrice && (
                      <span className="text-xl text-slate-400 line-through">{product.originalPrice}</span>
                    )}
                  </div>
                  <p className="text-slate-600 mt-2">{product.description}</p>
                </div>

                <ul className="space-y-3 mb-8">
                  {product.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <div className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center mr-3 ${
                        feature.included ? 'bg-emerald-100' : 'bg-slate-100'
                      }`}>
                        <Check
                          size={14}
                          className={feature.included ? 'text-emerald-600' : 'text-slate-400'}
                        />
                      </div>
                      <span className={`text-sm ${
                        feature.included ? 'text-slate-700' : 'text-slate-400'
                      }`}>
                        {feature.text}
                      </span>
                    </li>
                  ))}
                </ul>

                <button
                  onClick={scrollToContact}
                  className={`w-full py-4 px-6 rounded-xl font-semibold transition-all duration-200 transform hover:scale-105 ${
                    product.popular
                      ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg hover:shadow-xl'
                      : 'bg-slate-100 text-slate-700 hover:bg-slate-200'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Products;