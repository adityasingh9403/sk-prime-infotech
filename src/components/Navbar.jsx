import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, ChevronRight, Cpu, Globe, Layout, Send } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const location = useLocation();

    // Change background on scroll
    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Updated Navigation Links
    const navLinks = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: 'Projects', path: '/projects' }, // New Projects Link
        { name: 'About Us', path: '/about' },
        { name: 'Contact', path: '/contact' }, // Added to list for mobile consistency
    ];

    const isActive = (path) => location.pathname === path;

    return (
        <nav className={`fixed top-0 w-full z-[100] transition-all duration-500 ${
            scrolled 
            ? 'bg-slate-900/90 backdrop-blur-xl py-3 shadow-2xl border-b border-white/10' 
            : 'bg-transparent py-5'
        }`}>
            <div className="max-w-7xl mx-auto px-6 md:px-12">
                <div className="flex justify-between items-center h-16">

                    {/* Branding with Tech Glow */}
                    <Link to="/" className="relative flex items-center space-x-3 group">
                        <div className="relative">
                            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-400 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000"></div>
                            <div className="relative bg-slate-900 p-2 rounded-lg border border-white/10 group-hover:scale-110 transition-transform">
                                <Cpu className="w-6 h-6 text-blue-500" />
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <span className="text-xl md:text-2xl font-black tracking-tighter text-white">
                                SK PRIME <span className="text-blue-500">INFOTECH</span>
                            </span>
                            <span className="text-[10px] uppercase tracking-[0.2em] text-blue-400 font-bold leading-none">Solutions Architect</span>
                        </div>
                    </Link>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-1">
                        {navLinks.slice(0, 4).map((link) => ( // Show first 4 links on desktop
                            <Link
                                key={link.name}
                                to={link.path}
                                className={`px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 relative group overflow-hidden ${
                                    isActive(link.path) ? 'text-blue-400' : 'text-slate-300 hover:text-white'
                                }`}
                            >
                                <span className="relative z-10">{link.name}</span>
                                {isActive(link.path) && (
                                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-blue-500 shadow-[0_0_10px_#3b82f6]"></span>
                                )}
                                <span className="absolute inset-0 bg-white/5 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></span>
                            </Link>
                        ))}
                        
                        <div className="h-6 w-[1px] bg-white/10 mx-4"></div>

                        {/* Highlighted Contact Button */}
                        <Link
                            to="/contact"
                            className="relative inline-flex items-center justify-center px-7 py-3 overflow-hidden font-bold text-white transition-all duration-300 bg-blue-600 rounded-xl group hover:bg-blue-500 shadow-lg shadow-blue-900/40"
                        >
                            <span className="relative flex items-center">
                                Start a Project <ChevronRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                            </span>
                        </Link>
                    </div>

                    {/* Mobile Toggle */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="p-2 text-slate-300 bg-white/5 rounded-lg border border-white/10"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Advanced Mobile Sidebar */}
            <div className={`fixed inset-0 z-[110] md:hidden transition-all duration-500 ${
                isOpen ? 'visible opacity-100' : 'invisible opacity-0'
            }`}>
                <div 
                    className="absolute inset-0 bg-slate-950/90 backdrop-blur-md transition-opacity"
                    onClick={() => setIsOpen(false)}
                ></div>
                
                <div className={`absolute right-0 w-[85%] h-full bg-slate-900 border-l border-white/10 p-8 flex flex-col transform transition-transform duration-500 ease-out ${
                    isOpen ? 'translate-x-0' : 'translate-x-full'
                }`}>
                    <div className="flex justify-between items-center mb-12">
                        <span className="font-black text-blue-500 italic uppercase tracking-widest text-sm underline decoration-blue-500/30">Menu</span>
                        <button onClick={() => setIsOpen(false)} className="p-2 bg-white/10 rounded-full text-white hover:rotate-90 transition-transform">
                            <X size={20} />
                        </button>
                    </div>

                    <div className="flex flex-col space-y-6">
                        {navLinks.map((link, i) => (
                            <Link
                                key={link.name}
                                to={link.path}
                                onClick={() => setIsOpen(false)}
                                className={`text-4xl font-black flex items-center justify-between group transition-all ${
                                    isActive(link.path) ? 'text-blue-500 pl-4' : 'text-slate-400 hover:text-white'
                                }`}
                                style={{ transitionDelay: `${i * 50}ms` }}
                            >
                                <span className="flex items-center">
                                    {link.name === 'Projects' && <Layout size={24} className="mr-3 text-blue-500/50" />}
                                    {link.name === 'Contact' && <Send size={24} className="mr-3 text-blue-500/50" />}
                                    {link.name}
                                </span>
                                <ChevronRight className={`transition-transform group-hover:translate-x-2 ${isActive(link.path) ? 'opacity-100 text-blue-500' : 'opacity-0'}`} />
                            </Link>
                        ))}
                    </div>

                    {/* Bottom Info Section */}
                    <div className="mt-auto pt-10 border-t border-white/5">
                        <div className="flex items-center space-x-4 text-slate-500 text-xs font-bold uppercase tracking-[0.3em] mb-6">
                            <span className="w-12 h-[1px] bg-blue-500"></span>
                            <span>Innovation Hub</span>
                        </div>
                        
                        <div className="grid grid-cols-1 gap-3 mb-10">
                            <div className="bg-white/5 p-4 rounded-2xl border border-white/5 flex items-center space-x-4 group hover:bg-white/10 transition-colors">
                                <div className="p-2 bg-blue-600/20 rounded-lg text-blue-500">
                                    <Globe size={18} />
                                </div>
                                <span className="text-slate-300 text-sm font-medium">skprimeinfotech.com</span>
                            </div>
                        </div>

                        <Link
                            to="/contact"
                            onClick={() => setIsOpen(false)}
                            className="block w-full bg-blue-600 hover:bg-blue-700 text-white text-center py-5 rounded-2xl font-black text-xl shadow-2xl shadow-blue-600/30 transition-all active:scale-95"
                        >
                            GET A FREE QUOTE
                        </Link>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;