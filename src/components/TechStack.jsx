import React from 'react';
import { motion } from 'framer-motion';
import { 
  Database, Code2, Layout, Smartphone, 
  Cloud, Lock, Cpu, Cog 
} from 'lucide-react';

const TechStack = () => {
  const categories = [
    {
      name: "Frontend Mastery",
      icon: <Layout className="text-blue-400" />,
      skills: ["React.js", "Next.js", "Tailwind CSS", "Framer Motion"],
      gradient: "group-hover:from-blue-500/10"
    },
    {
      name: "Backend Engineering",
      icon: <Database className="text-emerald-400" />,
      skills: [".NET Core", "Node.js", "Microservices", "REST APIs"],
      gradient: "group-hover:from-emerald-500/10"
    },
    {
      name: "Database & Storage",
      icon: <Lock className="text-amber-400" />,
      skills: ["MySQL", "PostgreSQL", "MongoDB", "Redis Cache"],
      gradient: "group-hover:from-amber-500/10"
    },
    {
      name: "Cloud & DevOps",
      icon: <Cloud className="text-sky-400" />,
      skills: ["AWS", "Azure", "Docker", "CI/CD Pipelines"],
      gradient: "group-hover:from-sky-500/10"
    }
  ];

  return (
    <section className="py-5 lg:py-5 bg-[#030712] px-6 relative">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row lg:justify-between lg:items-end mb-16 lg:mb-24 gap-8">
          <div className="max-w-2xl">
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4"
            >
              Powering Innovation
            </motion.p>
            <motion.h3 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter leading-[0.9]"
            >
              Our Modern <br /> 
              <span className="text-slate-600">Tech Ecosystem</span>
            </motion.h3>
          </div>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-slate-400 text-base md:text-lg max-w-sm italic border-l-2 border-blue-600 pl-6 py-2"
          >
            We don’t just use tools; we build scalable architectures that are future-proof.
          </motion.p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
          {categories.map((cat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className={`group relative bg-slate-900/30 backdrop-blur-xl p-8 rounded-[2.5rem] border border-white/5 overflow-hidden transition-all duration-500 hover:border-blue-500/30 bg-gradient-to-br from-transparent to-transparent ${cat.gradient}`}
            >
              {/* Icon */}
              <div className="w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:bg-white/10 transition-all duration-500">
                {React.cloneElement(cat.icon, { size: 28 })}
              </div>

              <h4 className="text-xl md:text-2xl font-black text-white mb-6 tracking-tight">{cat.name}</h4>
              
              <div className="flex flex-wrap gap-2 relative z-10">
                {cat.skills.map(skill => (
                  <span 
                    key={skill} 
                    className="px-3 py-1.5 bg-slate-950/50 text-slate-400 text-[10px] md:text-[11px] font-black rounded-lg border border-white/5 uppercase tracking-widest group-hover:text-white group-hover:border-blue-500/40 transition-all"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Performance Badges - Optimized Grid for Mobile */}
        <div className="mt-10 md:mt-10 grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-6 py-16 border-y border-white/5">
           {[
             { icon: <Cpu size={24}/>, label: "High Concurrency", desc: "10k+ Req/Sec" },
             { icon: <Lock size={24}/>, label: "Enterprise Security", desc: "AES-256 Bit" },
             { icon: <Cog size={24}/>, label: "Automated Ops", desc: "99.9% Uptime" },
             { icon: <Smartphone size={24}/>, label: "PWA Optimized", desc: "Native Performance" }
           ].map((item, i) => (
             <motion.div 
               key={i} 
               initial={{ opacity: 0 }}
               whileInView={{ opacity: 1 }}
               transition={{ delay: i * 0.1 }}
               className="text-center group flex flex-col items-center"
             >
               <div className="text-blue-500 mb-4 p-3 bg-blue-500/5 rounded-full group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500">
                 {item.icon}
               </div>
               <div className="text-white font-black text-[11px] md:text-xs uppercase tracking-[0.2em] mb-2">{item.label}</div>
               <div className="text-slate-500 text-[10px] md:text-sm font-medium">{item.desc}</div>
             </motion.div>
           ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;