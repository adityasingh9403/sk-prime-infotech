import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Send } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-slate-950 text-slate-300 pt-16 pb-8 px-6 md:px-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* Company Info */}
        <div className="space-y-4">
          <h2 className="text-white text-2xl font-bold tracking-tight">
            SK PRIME <span className="text-blue-500">INFOTECH</span>
          </h2>
          <p className="text-sm leading-relaxed text-slate-400">
            Harnessing the power of technology to deliver innovative software solutions. We specialize in digital transformation and business growth.
          </p>
          <div className="flex space-x-4 pt-2">
            <a href="#" className="hover:text-blue-500 transition-colors"><Facebook size={20} /></a>
            <a href="#" className="hover:text-blue-400 transition-colors"><Twitter size={20} /></a>
            <a href="#" className="hover:text-blue-600 transition-colors"><Linkedin size={20} /></a>
            <a href="#" className="hover:text-pink-500 transition-colors"><Instagram size={20} /></a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-white font-bold mb-6 text-lg uppercase tracking-wider">Useful Links</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/" className="hover:text-blue-500 transition-colors">Home</Link></li>
            <li><Link to="/about" className="hover:text-blue-500 transition-colors">About Company</Link></li>
            <li><Link to="/services" className="hover:text-blue-500 transition-colors">Our Services</Link></li>
            <li><Link to="/contact" className="hover:text-blue-500 transition-colors">Contact Us</Link></li>
            <li><Link to="#" className="hover:text-blue-500 transition-colors">Privacy Policy</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-white font-bold mb-6 text-lg uppercase tracking-wider">Contact Info</h3>
          <ul className="space-y-4 text-sm">
            <li className="flex items-start space-x-3 text-slate-400">
              <MapPin size={18} className="text-blue-500 shrink-0" />
              <span>123 IT Park, Tech Hub, <br />Indore, MP, India</span>
            </li>
            <li className="flex items-center space-x-3 text-slate-400">
              <Phone size={18} className="text-blue-500 shrink-0" />
              <span>+91 98765 43210</span>
            </li>
            <li className="flex items-center space-x-3 text-slate-400">
              <Mail size={18} className="text-blue-500 shrink-0" />
              <span>info@skprimeinfotech.com</span>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-bold mb-6 text-lg uppercase tracking-wider">Newsletter</h3>
          <p className="text-sm text-slate-400 mb-4">Subscribe to get latest tech updates.</p>
          <div className="flex">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-slate-900 border border-slate-700 rounded-l-lg px-4 py-2 w-full focus:outline-none focus:border-blue-500 text-sm"
            />
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-r-lg transition-colors">
              <Send size={18} />
            </button>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium uppercase tracking-widest text-slate-500">
        <p>© 2026 SK PRIME INFOTECH. MADE WITH ❤️ FOR TECH.</p>
        <div className="flex space-x-6">
          <Link to="#" className="hover:text-white transition-colors">Terms</Link>
          <Link to="#" className="hover:text-white transition-colors">Sitemap</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;