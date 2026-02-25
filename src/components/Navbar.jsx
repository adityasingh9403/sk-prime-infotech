import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
    Menu, X, ChevronRight, Cpu, Globe, Layout,
    Send, Mail, Phone, ArrowUpRight
} from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Menu close on route change
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    const navLinks = [
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' },
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' },
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${scrolled
                ? 'bg-slate-900/80 backdrop-blur-2xl py-3 border-b border-white/5 shadow-2xl'
                : 'bg-transparent py-6'
            }`}>
            <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex justify-between items-center">

                {/* BRANDING */}
                <Link to="/" className="flex items-center group relative z-[120]">
                    <img
                        src="/SK Prime Infotech.png"
                        alt="SK Prime Infotech Logo"
                        className="h-20 md:h-22 w-auto object-contain transition-transform duration-500 group-hover:scale-105"
                    />
                </Link>

                {/* DESKTOP NAV */}
                <div className="hidden lg:flex items-center bg-white/5 border border-white/10 px-2 py-1.5 rounded-full backdrop-blur-md">
                    {navLinks.slice(0, 5).map((link) => (
                        <Link
                            key={link.name}
                            to={link.path}
                            className={`px-6 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all ${isActive(link.path) ? 'bg-blue-600 text-white shadow-lg shadow-blue-600/20' : 'text-slate-400 hover:text-white'
                                }`}
                        >
                            {link.name}
                        </Link>
                    ))}
                </div>

                {/* DESKTOP CTA */}
                <div className="hidden lg:block">
                    <Link to="/contact" className="flex items-center gap-2 bg-white text-black px-6 py-3 rounded-xl font-black text-xs uppercase tracking-widest hover:bg-blue-600 hover:text-white transition-all shadow-xl">
                        Let's Talk <ArrowUpRight size={16} />
                    </Link>
                </div>

                {/* MOBILE TOGGLE */}
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="lg:hidden relative z-[120] p-3 bg-white/5 border border-white/10 rounded-xl text-white outline-none"
                >
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            {/* MOBILE OVERLAY MENU */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ x: '100%' }}
                        animate={{ x: 0 }}
                        exit={{ x: '100%' }}
                        transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                        className="fixed inset-0 h-screen w-full bg-slate-950 z-[110] flex flex-col lg:hidden"
                    >
                        {/* Background Decoration */}
                        <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[120px] -z-10"></div>

                        <div className="flex flex-col h-full pt-32 px-8 pb-12 overflow-y-auto">
                            {/* NAVIGATION LINKS */}
                            <div className="flex flex-col space-y-4 mb-16">
                                <p className="text-blue-500 font-black text-[10px] uppercase tracking-[0.4em] mb-4">Navigation</p>
                                {navLinks.map((link, i) => (
                                    <motion.div
                                        key={link.name}
                                        initial={{ opacity: 0, x: 20 }}
                                        animate={{ opacity: 1, x: 0 }}
                                        transition={{ delay: i * 0.1 }}
                                    >
                                        <Link
                                            to={link.path}
                                            className={`text-5xl font-black tracking-tighter flex items-center justify-between group ${isActive(link.path) ? 'text-white pl-4 border-l-4 border-blue-600' : 'text-slate-700 hover:text-white'
                                                }`}
                                        >
                                            {link.name}
                                            <ChevronRight className={`transition-all ${isActive(link.path) ? 'opacity-100 text-blue-600' : 'opacity-0'}`} size={32} />
                                        </Link>
                                    </motion.div>
                                ))}
                            </div>

                            {/* CONTACT INFO SECTION (The missing part) */}
                            <div className="mt-auto space-y-8">
                                <div className="grid grid-cols-1 gap-6">
                                    <div className="space-y-2">
                                        <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest flex items-center gap-2">
                                            <Mail size={12} className="text-blue-500" /> Drop a Message
                                        </p>
                                        <a href="mailto:aditya942003@gmail.com" className="text-white font-bold text-lg hover:text-blue-500 transition-colors">
                                            aditya942003@gmail.com
                                        </a>
                                    </div>
                                    <div className="space-y-2">
                                        <p className="text-slate-500 font-bold text-[10px] uppercase tracking-widest flex items-center gap-2">
                                            <Phone size={12} className="text-blue-500" /> Technical Query
                                        </p>
                                        <a href="tel:+917999588460" className="text-white font-bold text-lg hover:text-blue-500 transition-colors">
                                            +91 7999588460
                                        </a>
                                    </div>
                                </div>

                                {/* SOCIAL BUTTONS */}
                                <div className="flex gap-4 pt-6">
                                    <a href="#" className="p-4 bg-white/5 rounded-2xl text-white border border-white/10 hover:bg-blue-600 transition-all">
                                        <Globe size={20} />
                                    </a>
                                    <a href="https://linkedin.com/in/aditya-singh-a59b24236" className="p-4 bg-white/5 rounded-2xl text-white border border-white/10 hover:bg-blue-600 transition-all">
                                        <Send size={20} />
                                    </a>
                                </div>

                                <Link
                                    to="/contact"
                                    className="block w-full bg-blue-600 text-white text-center py-6 rounded-[2rem] font-black text-xl shadow-2xl shadow-blue-600/30"
                                >
                                    START A PROJECT
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;