import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ExternalLink, Layout, Smartphone, Globe } from 'lucide-react';

const Projects = () => {
    const [filter, setFilter] = useState('All');

    // Project Data based on your resume and industry standards
    const projectsData = [
        {
            id: 1,
            title: "Super King Cricket Team Portal",
            category: "Web App",
            image: "/superking.png", // Sports themed image
            desc: "A high-performance sports platform featuring real-time match analytics, player statistics, and dynamic fan engagement modules.",
            link: "https://superking.blog"
        },
        {
            id: 2,
            title: "Enterprise Employee Portal",
            category: "Web App",
            image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=1000&auto=format&fit=crop",
            desc: "Full CRUD system with .NET Core Web API and MySQL for organizational management. [cite: 36, 38]",
            link: "https://your-project-link.com"
        },
        {
            id: 3,
            title: "FinTech Mobile Wallet",
            category: "Mobile App",
            image: "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1000&auto=format&fit=crop",
            desc: "Secure mobile payment gateway with biometric authentication and real-time tracking.",
            link: "https://your-project-link.com"
        },
        {
            id: 4,
            title: "E-Commerce Ecosystem",
            category: "Web App",
            image: "https://images.unsplash.com/photo-1557821552-17105176677c?q=80&w=1000&auto=format&fit=crop",
            desc: "Scalable online marketplace with integrated payment gateways and inventory AI.",
            link: "https://your-project-link.com"
        },
        {
            id: 5,
            title: "HealthTrack Pro",
            category: "Mobile App",
            image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?q=80&w=1000&auto=format&fit=crop",
            desc: "Cross-platform fitness app for tracking vitals and personalized workout plans.",
            link: "https://your-project-link.com"
        }
    ];

    const filteredProjects = filter === 'All'
        ? projectsData
        : projectsData.filter(p => p.category === filter);

    return (
        <div className="bg-[#030712] min-h-screen pt-32 pb-20 px-6">
            <div className="max-w-7xl mx-auto">

                {/* HEADER SECTION */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-left mb-16"
                >
                    <h1 className="text-5xl md:text-7xl font-black text-white mb-6">
                        Our <span className="italic text-slate-500">Pioneering</span> Projects
                    </h1>
                    <p className="text-slate-400 text-xl max-w-2xl">
                        From Al-powered platforms to scalable web ecosystems, we craft solutions that redefine industries.
                    </p>
                </motion.div>

                {/* FILTER BUTTONS */}
                <div className="flex flex-wrap gap-4 mb-16">
                    {['All', 'Web App', 'Mobile App'].map((cat) => (
                        <button
                            key={cat}
                            onClick={() => setFilter(cat)}
                            className={`px-8 py-3 rounded-full font-bold transition-all border-2 ${filter === cat
                                    ? 'bg-blue-600 border-blue-600 text-white shadow-lg shadow-blue-600/30'
                                    : 'bg-transparent border-slate-800 text-slate-400 hover:border-slate-600'
                                }`}
                        >
                            {cat === 'Web App' && <Layout className="inline-block mr-2 w-4 h-4" />}
                            {cat === 'Mobile App' && <Smartphone className="inline-block mr-2 w-4 h-4" />}
                            {cat === 'All' && <Globe className="inline-block mr-2 w-4 h-4" />}
                            {cat}
                        </button>
                    ))}
                </div>

                {/* PROJECTS GRID */}
                <motion.div
                    layout
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    <AnimatePresence>
                        {filteredProjects.map((project) => (
                            <motion.div
                                layout
                                key={project.id}
                                initial={{ opacity: 0, scale: 0.9 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.3 }}
                                whileHover={{ y: -10 }}
                                className="group relative bg-white rounded-[2.5rem] overflow-hidden shadow-2xl h-full flex flex-col"
                            >
                                {/* Image & Overlay Link */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                                    />
                                    <a
                                        href={project.link}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="absolute inset-0 bg-blue-900/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm"
                                    >
                                        <div className="bg-white p-4 rounded-full text-blue-600 transform translate-y-10 group-hover:translate-y-0 transition-transform">
                                            <ExternalLink size={28} />
                                        </div>
                                    </a>
                                </div>

                                {/* Content */}
                                <div className="p-8 flex-grow">
                                    <span className="text-blue-600 font-bold text-xs uppercase tracking-widest mb-2 block">
                                        {project.category}
                                    </span>
                                    <h3 className="text-2xl font-black text-slate-900 mb-4 group-hover:text-blue-600 transition-colors">
                                        {project.title}
                                    </h3>
                                    <p className="text-slate-500 mb-6 line-clamp-3">
                                        {project.desc}
                                    </p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>
                </motion.div>
            </div>
        </div>
    );
};

export default Projects;