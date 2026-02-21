import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Eye, Award, Users, Rocket, 
  ShieldCheck, Heart, ChevronRight, Fingerprint, Lightbulb,
  Code2, Briefcase, Globe2
} from 'lucide-react';

const About = () => {
  // Animation Variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
  };

  const staggerContainer = {
    visible: { transition: { staggerChildren: 0.2 } }
  };

  return (
    <div className="bg-[#030712] text-slate-300 overflow-hidden">
      
      {/* 1. BRAND HERO - Impactful & Research-Driven */}
      <section className="relative pt-32 pb-40 lg:pb-56 px-6 overflow-hidden">
        {/* Animated Background Orbs */}
        <div className="absolute top-0 right-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/10 rounded-full blur-[120px] -mr-20 -mt-20"></div>
        <div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-emerald-600/5 rounded-full blur-[120px] -ml-20 -mb-20"></div>
        
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="max-w-7xl mx-auto text-center relative z-10"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-[10px] md:text-xs font-black uppercase tracking-[0.3em] mb-10">
            <Lightbulb size={14} /> The Intersection of Innovation & Strategy
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-4xl sm:text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[1.1] md:leading-[0.95]">
            Engineering the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">
              Future of Enterprise
            </span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-base md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed font-medium">
            SK Prime Infotech is an elite technology lab dedicated to architecting high-concurrency systems, 
            AI-driven architectures, and scalable enterprise solutions. We don't just build apps; we engineer 
            digital legacies.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. MISSION & VISION - High Contrast Cards */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 -mt-24 md:-mt-40 relative z-20">
          <motion.div 
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/60 backdrop-blur-3xl p-8 md:p-12 rounded-[2.5rem] border border-slate-800 shadow-2xl group"
          >
            <div className="w-14 h-14 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-lg">
              <Target size={28} />
            </div>
            <h2 className="text-3xl font-black text-white mb-6 tracking-tight">Our Mission</h2>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              To deploy specialized software modules that solve real-world industrial complexities. 
              We bridge the gap between raw data and actionable intelligence using full-stack 
              engineering excellence and cloud-native strategies.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/60 backdrop-blur-3xl p-8 md:p-12 rounded-[2.5rem] border border-slate-800 shadow-2xl group"
          >
            <div className="w-14 h-14 bg-emerald-600/20 rounded-2xl flex items-center justify-center text-emerald-500 mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-lg">
              <Eye size={28} />
            </div>
            <h2 className="text-3xl font-black text-white mb-6 tracking-tight">Our Vision</h2>
            <p className="text-slate-400 text-base md:text-lg leading-relaxed">
              To become the global blueprint for digital transformation. We envision a world 
              where AI-powered systems and seamless user interfaces redefine how 
              traditional industries operate on a daily basis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. CORE DNA - Principles */}
      <section className="py-24 bg-[#050810] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-blue-500 font-black uppercase tracking-[0.4em] text-[10px] md:text-xs mb-4">Innovation DNA</h2>
            <h3 className="text-3xl md:text-6xl font-black text-white tracking-tighter leading-tight">Principles of Excellence</h3>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: <Code2 className="text-amber-500" />, title: "Clean Architecture", desc: "We write code that is modular, maintainable, and built to scale with your growth." },
              { icon: <Fingerprint className="text-blue-500" />, title: "Ironclad Security", desc: "Encryption and data protection are integrated into the core of every system." },
              { icon: <Rocket className="text-purple-500" />, title: "Agile Execution", desc: "Fast-tracked development sprints without compromising on technical integrity." },
              { icon: <ShieldCheck className="text-emerald-500" />, title: "Radical Trust", desc: "Complete transparency in our development process and architectural choices." }
            ].map((value, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-900/40 p-8 rounded-[2rem] border border-slate-800 hover:border-blue-500/50 transition-all group"
              >
                <div className="w-12 h-12 bg-slate-800 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform shadow-lg">
                  {value.icon}
                </div>
                <h4 className="text-lg font-bold text-white mb-4 tracking-tight">{value.title}</h4>
                <p className="text-slate-500 leading-relaxed text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE SK PRIME EDGE - Inventors & Experts */}
      <section className="py-32 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
          <motion.div 
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/2 text-center lg:text-left"
          >
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8 tracking-tighter leading-none">
              Built by <span className="text-blue-500">Engineers.</span> <br /> 
              Run by Experts.
            </h2>
            <p className="text-slate-400 text-lg md:text-xl mb-10 leading-relaxed italic font-medium">
              "We don't just follow industry trends; we create them. Our focus is on solving 
              complex business bottlenecks through superior software engineering."
            </p>
            <div className="flex flex-wrap justify-center lg:justify-start gap-4">
              {['AI Integration', 'Cloud Scalability', 'High-Performance UI'].map((item, i) => (
                <div key={i} className="flex items-center text-white text-sm font-black bg-slate-900/80 px-5 py-3 rounded-xl border border-slate-800">
                  <ChevronRight className="text-blue-500 mr-2" size={16} />
                  {item}
                </div>
              ))}
            </div>
          </motion.div>
          
          <div className="lg:w-1/2 relative w-full max-w-md lg:max-w-none">
              <div className="grid grid-cols-2 gap-6 relative z-10">
                  <motion.div animate={{ y: [0, -20, 0] }} transition={{ duration: 5, repeat: Infinity }} className="bg-gradient-to-br from-blue-600 to-indigo-800 aspect-square rounded-[2.5rem] flex flex-col items-center justify-center shadow-2xl p-6 text-center">
                      <Briefcase className="text-white mb-4" size={32} />
                      <span className="text-4xl font-black text-white">50+</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-blue-100 mt-2">Projects Delivered</span>
                  </motion.div>
                  <motion.div animate={{ y: [0, 20, 0] }} transition={{ duration: 6, repeat: Infinity }} className="bg-slate-800 aspect-square rounded-[2.5rem] mt-10 flex flex-col items-center justify-center shadow-2xl border border-slate-700 p-6 text-center">
                      <Globe2 size={32} className="text-blue-400 mb-4" />
                      <span className="text-4xl font-black text-white">100%</span>
                      <span className="text-[10px] font-bold uppercase tracking-widest text-slate-400 mt-2">Global Connectivity</span>
                  </motion.div>
              </div>
              <div className="absolute inset-0 bg-blue-500/10 blur-[100px] rounded-full -z-10"></div>
          </div>
        </div>
      </section>

      {/* 5. THE FINAL PROOF - Ultra Dark Stats */}
      <section className="bg-slate-950 py-32 px-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-12 text-center">
            {[
              { label: "Lines of Clean Code", val: "1M+" },
              { label: "AI Modules Deployed", val: "25+" },
              { label: "Satisfied Partners", val: "40+" },
              { label: "System Uptime", val: "99.9%" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <div className="text-4xl md:text-7xl font-black text-white mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-600 group-hover:from-blue-400 group-hover:to-white transition-all">
                  {stat.val}
                </div>
                <div className="text-blue-500 font-black uppercase tracking-widest text-[10px] md:text-xs">
                  {stat.label}
                </div>
              </motion.div>
            ))}
        </div>
      </section>
    </div>
  );
};

export default About;