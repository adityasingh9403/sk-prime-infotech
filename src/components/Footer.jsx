import React from 'react';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Linkedin, Instagram, Mail, Phone, MapPin, Send, Cpu } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#020617] text-slate-300 pt-16 pb-8 px-6 md:px-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        
        {/* Company Info */}
        <div className="space-y-6">
          <div className="flex items-center gap-2">
             <Cpu className="text-[var(--color-blue-500)]" size={28} />
             <h2 className="text-white text-2xl font-black tracking-tight">
               SK PRIME <span className="text-[var(--color-blue-500)]">INFOTECH</span>
             </h2>
          </div>
          <p className="text-sm leading-relaxed text-slate-400 font-light">
            Architecting the future through AI-driven POS systems, custom ERPs like <b>Hisaab Kitaab</b>, and scalable cloud-native solutions.
          </p>
          <div className="flex space-x-5 pt-2">
            <a href="https://facebook.com/skprimegroup" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF5722] transition-colors"><Facebook size={20} /></a>
            <a href="https://x.com/skprimegroup" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF5722] transition-colors"><Twitter size={20} /></a>
            <a href="https://www.linkedin.com/company/sk-prime-group-private-limited" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF5722] transition-colors"><Linkedin size={20} /></a>
            <a href="https://instagram.com/skprimegroup" target="_blank" rel="noopener noreferrer" className="hover:text-[#FF5722] transition-colors"><Instagram size={20} /></a>
          </div>
        </div>

        {/* Core Verticals / Services */}
        <div>
          <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-[0.2em] border-l-2 border-[var(--color-blue-500)] pl-3">Expertise</h3>
          <ul className="space-y-3 text-sm">
            <li><Link to="/services" className="hover:text-[#FF5722] transition-colors">Custom Software Development</Link></li>
            <li><Link to="/services" className="hover:text-[#FF5722] transition-colors">POS & Inventory Systems</Link></li>
            <li><Link to="/services" className="hover:text-[#FF5722] transition-colors">Mobile App (React Native)</Link></li>
            <li><Link to="/services" className="hover:text-[#FF5722] transition-colors">Cloud Infrastructure (AWS)</Link></li>
            <li><Link to="/ventures" className="hover:text-[#FF5722] transition-colors">Hisaab Kitaab Ecosystem</Link></li>
          </ul>
        </div>

        {/* Contact Info (Updated with your address) */}
        <div>
          <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-[0.2em] border-l-2 border-[var(--color-blue-500)] pl-3">Get In Touch</h3>
          <ul className="space-y-5 text-sm">
            <li className="flex items-start space-x-3 text-slate-400">
              <MapPin size={18} className="text-[var(--color-blue-500)] shrink-0" />
              <span className="leading-relaxed">G1, SR Empire, Silver Star City, <br />Rau, Indore, MP - 452012</span>
            </li>
            <li className="flex items-center space-x-3 text-slate-400">
              <Phone size={18} className="text-[var(--color-blue-500)] shrink-0" />
              <a href="tel:+918878740101" className="hover:text-white transition-colors">+91 88787 40101</a>
            </li>
            <li className="flex items-center space-x-3 text-slate-400">
              <Mail size={18} className="text-[var(--color-blue-500)] shrink-0" />
              <a href="mailto:contact@skprimegroup.in" className="hover:text-white transition-colors">contact@skprimegroup.in</a>
            </li>
          </ul>
        </div>

        {/* Newsletter */}
        <div>
          <h3 className="text-white font-bold mb-6 text-sm uppercase tracking-[0.2em] border-l-2 border-[var(--color-blue-500)] pl-3">Stay Updated</h3>
          <p className="text-xs text-slate-400 mb-4 leading-relaxed">Subscribe to receive tech insights and product updates from the SK Prime ecosystem.</p>
          <div className="flex group">
            <input 
              type="email" 
              placeholder="Email address" 
              className="bg-slate-900 border border-slate-800 rounded-l-lg px-4 py-2.5 w-full focus:outline-none focus:border-[#FF5722] text-sm transition-all"
            />
            <button className="bg-[var(--color-blue-500)] hover:bg-[#e64a19] text-white px-4 py-2.5 rounded-r-lg transition-all flex items-center justify-center">
              <Send size={18} />
            </button>
          </div>
        </div>

      </div>

      {/* Copyright Bar */}
      <div className="max-w-7xl mx-auto pt-8 border-t border-slate-900 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500">
        <p>© 2026 SK PRIME GROUP. ALL RIGHTS RESERVED.</p>
        <div className="flex space-x-8">
          <Link to="/privacy" className="hover:text-[#FF5722] transition-colors">Privacy Policy</Link>
          <Link to="/terms" className="hover:text-[#FF5722] transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;