import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Globe, Server, Database, Code2 } from 'lucide-react';

const ProjectDetail = () => {
  const { id } = useParams();

  // Mock Data (Real app mein yeh API ya central file se aayega)
  const project = {
    title: "Fintech Nexus",
    client: "Global Finance Corp",
    year: "2025",
    category: "Web Platform",
    image: "https://images.unsplash.com/photo-1551288049-bbda4865cda1?auto=format&fit=crop&q=80&w=1600",
    description: "A high-frequency trading dashboard and wallet management system built for institutional investors.",
    challenge: "The client needed a system capable of handling 50k+ transactions per second with sub-100ms latency while maintaining military-grade security.",
    solution: "We implemented a microservices architecture using .NET Core for the backend and a real-time React frontend with WebSockets for instant data streaming.",
    techStack: ["React", ".NET Core", "Redis", "AWS Lambda", "PostgreSQL"],
    results: ["99.99% Uptime", "40% Faster Transactions", "Secure KYC Integration"]
  };

  return (
    <div className="bg-[#030712] min-h-screen text-slate-300">
      
      {/* 1. STICKY BACK BUTTON */}
      <nav className="fixed top-24 left-6 md:left-12 z-50">
        <Link to="/projects" className="group flex items-center gap-2 text-white bg-white/5 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full hover:bg-blue-600 transition-all">
          <ArrowLeft size={20} className="group-hover:-translate-x-1 transition-transform" />
          <span className="text-sm font-bold uppercase tracking-widest">Back to Works</span>
        </Link>
      </nav>

      {/* 2. HERO HEADER */}
      <section className="relative h-[70vh] md:h-[90vh] flex items-end pb-20 px-6 md:px-20 overflow-hidden">
        <motion.img 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.4 }}
          transition={{ duration: 1.5 }}
          src={project.image} 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent"></div>
        
        <div className="relative z-10 max-w-7xl w-full">
          <motion.span 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="text-blue-500 font-black uppercase tracking-[0.4em] text-xs mb-4 block"
          >
            Case Study / {project.category}
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-[10rem] font-black text-white leading-[0.85] tracking-tighter"
          >
            {project.title.split(' ')[0]} <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-500 to-white">{project.title.split(' ')[1]}</span>
          </motion.h1>
        </div>
      </section>

      {/* 3. PROJECT INFO BAR */}
      <section className="py-12 border-y border-white/5 bg-slate-950/50 px-6 md:px-20">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest mb-2">Client</p>
            <p className="text-white font-bold">{project.client}</p>
          </div>
          <div>
            <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest mb-2">Year</p>
            <p className="text-white font-bold">{project.year}</p>
          </div>
          <div>
            <p className="text-slate-600 text-[10px] font-bold uppercase tracking-widest mb-2">Services</p>
            <p className="text-white font-bold">{project.category}</p>
          </div>
          <div className="flex justify-end">
             <button className="bg-blue-600 hover:bg-blue-500 text-white p-4 rounded-full transition-colors">
               <Globe size={24} />
             </button>
          </div>
        </div>
      </section>

      {/* 4. CONTENT BREAKDOWN */}
      <section className="py-32 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-24 items-start">
          
          {/* Left: Challenge & Solution */}
          <div className="space-y-16">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
              <h3 className="text-blue-500 font-bold text-sm uppercase mb-6 tracking-widest">— The Challenge</h3>
              <p className="text-2xl md:text-3xl text-white font-medium leading-relaxed">
                {project.challenge}
              </p>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
              <h3 className="text-emerald-500 font-bold text-sm uppercase mb-6 tracking-widest">— The Solution</h3>
              <p className="text-xl text-slate-400 leading-relaxed">
                {project.solution}
              </p>
            </motion.div>
          </div>

          {/* Right: Tech Stack & Impact */}
          <div className="bg-slate-900/40 border border-white/5 p-12 rounded-[3rem] sticky top-32">
            <h4 className="text-white font-black text-xl mb-8 flex items-center gap-2">
              <Code2 className="text-blue-500" /> Technology Stack
            </h4>
            <div className="flex flex-wrap gap-3 mb-12">
              {project.techStack.map(tech => (
                <span key={tech} className="px-5 py-2 bg-white/5 border border-white/10 rounded-xl text-sm font-bold text-slate-300 uppercase">
                  {tech}
                </span>
              ))}
            </div>

            <h4 className="text-white font-black text-xl mb-8 flex items-center gap-2">
              <CheckCircle2 className="text-emerald-500" /> Key Impact
            </h4>
            <ul className="space-y-4">
              {project.results.map(res => (
                <li key={res} className="flex items-center gap-3 text-slate-400 font-medium">
                  <div className="w-1.5 h-1.5 bg-blue-500 rounded-full"></div>
                  {res}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 5. VISUAL GALLERY (Entrooopy Style) */}
      <section className="pb-32 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div whileHover={{ scale: 0.98 }} className="rounded-[2rem] overflow-hidden h-[500px] border border-white/10 bg-slate-900 flex items-center justify-center p-12">
             <Server size={120} className="text-blue-500 opacity-20" />
             <p className="absolute text-white font-mono text-xs uppercase tracking-tighter">Backend Architecture Preview</p>
          </motion.div>
          <motion.div whileHover={{ scale: 0.98 }} className="rounded-[2rem] overflow-hidden h-[500px] border border-white/10 bg-slate-900 flex items-center justify-center p-12">
             <Database size={120} className="text-emerald-500 opacity-20" />
             <p className="absolute text-white font-mono text-xs uppercase tracking-tighter">Database Schema Optimization</p>
          </motion.div>
        </div>
      </section>

      {/* 6. NEXT PROJECT CTA */}
      <section className="py-24 border-t border-white/5 text-center">
         <p className="text-slate-500 uppercase font-black tracking-widest text-xs mb-8">Next Case Study</p>
         <Link to="/projects/health-ai" className="text-5xl md:text-8xl font-black text-white hover:text-blue-500 transition-colors uppercase tracking-tighter">
            NeuroScan AI <ArrowLeft className="rotate-180 inline-block ml-4" />
         </Link>
      </section>

    </div>
  );
};

export default ProjectDetail;