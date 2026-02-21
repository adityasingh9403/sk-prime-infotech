import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowUpRight, Globe, Layers, Cpu } from 'lucide-react';
import { Link } from 'react-router-dom';

const Projects = () => {
  const [filter, setFilter] = useState('All');

  const categories = ['All', 'Web Platform', 'Mobile App', 'AI Solution'];

  const projectData = [
    {
      id: "fintech-pro",
      title: "Fintech Nexus",
      category: "Web Platform",
      image: "https://images.unsplash.com/photo-1551288049-bbda4865cda1?auto=format&fit=crop&q=80&w=1600",
      color: "#3b82f6",
      tags: ["React", "Node.js", "AWS"]
    },
    {
      id: "health-ai",
      title: "NeuroScan AI",
      category: "AI Solution",
      image: "https://images.unsplash.com/photo-1576091160550-2173dad99901?auto=format&fit=crop&q=80&w=1600",
      color: "#10b981",
      tags: ["Python", "TensorFlow", "Azure"]
    },
    {
      id: "ecommerce-mobile",
      title: "Swift Cart",
      category: "Mobile App",
      image: "https://images.unsplash.com/photo-1512428559087-560fa5ceab42?auto=format&fit=crop&q=80&w=1600",
      color: "#8b5cf6",
      tags: ["React Native", "Firebase"]
    }
  ];

  const filteredProjects = filter === 'All' 
    ? projectData 
    : projectData.filter(p => p.category === filter);

  return (
    <div className="bg-[#030712] min-h-screen pt-32 pb-20 px-6">
      <div className="max-w-[1400px] mx-auto">
        
        {/* --- HEADER --- */}
        <header className="mb-20">
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-9xl font-black text-white tracking-tighter mb-10"
          >
            SELECTED <br /> <span className="text-slate-700 italic">WORKS.</span>
          </motion.h1>

          {/* FILTER TABS */}
          <div className="flex flex-wrap gap-4 border-b border-slate-800 pb-8">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-6 py-2 rounded-full text-sm font-bold transition-all ${
                  filter === cat 
                  ? 'bg-blue-600 text-white' 
                  : 'bg-slate-900 text-slate-400 hover:text-white border border-slate-800'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </header>

        {/* --- PROJECT GRID (Immersive Layout) --- */}
        <div className="grid grid-cols-1 gap-24">
          <AnimatePresence mode='wait'>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6 }}
                className="group relative"
              >
                <Link to={`/projects/${project.id}`} className="block overflow-hidden rounded-[2rem] lg:rounded-[4rem] bg-slate-900 border border-white/5">
                  <div className="relative aspect-[16/10] lg:aspect-[21/9] overflow-hidden">
                    {/* Background Image with Hover Scale */}
                    <motion.img 
                      whileHover={{ scale: 1.05 }}
                      transition={{ duration: 0.8 }}
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-700"
                    />
                    
                    {/* Overlay Info */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 lg:p-20">
                      <div className="flex flex-wrap gap-3 mb-6">
                        {project.tags.map(tag => (
                          <span key={tag} className="px-4 py-1 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-xs font-bold text-white uppercase tracking-widest">
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h2 className="text-4xl md:text-7xl font-black text-white mb-4 tracking-tighter uppercase">
                        {project.title}
                      </h2>
                      <div className="flex items-center gap-2 text-blue-400 font-bold uppercase tracking-[0.2em] text-sm">
                        View Case Study <ArrowUpRight size={20} />
                      </div>
                    </div>

                    {/* Desktop Hover Visuals (Entrooopy style floating icon) */}
                    <div className="absolute top-10 right-10 opacity-0 group-hover:opacity-100 transition-all transform translate-x-10 group-hover:translate-x-0">
                      <div className="w-20 h-20 rounded-full bg-blue-600 flex items-center justify-center text-white shadow-2xl shadow-blue-600/50">
                        <ArrowUpRight size={32} />
                      </div>
                    </div>
                  </div>
                </Link>

                {/* Subtitle Info (Below Image) */}
                <div className="mt-8 flex flex-col md:flex-row justify-between items-start md:items-center px-4">
                  <div>
                    <span className="text-blue-500 font-bold text-xs uppercase tracking-widest block mb-2">{project.category}</span>
                    <p className="text-slate-500 max-w-md text-sm md:text-base leading-relaxed">
                      Engineering high-performance solutions for {project.title}. Designed for scale and built for the future.
                    </p>
                  </div>
                  <div className="mt-6 md:mt-0 flex gap-4">
                    <div className="flex -space-x-2">
                       {/* Mock avatars or tech icons */}
                       <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center"><Globe size={16}/></div>
                       <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center"><Layers size={16}/></div>
                       <div className="w-10 h-10 rounded-full bg-slate-800 border border-slate-700 flex items-center justify-center"><Cpu size={16}/></div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default Projects;