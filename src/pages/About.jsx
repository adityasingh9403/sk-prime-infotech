import React from 'react';
import { motion } from 'framer-motion';
import { 
  Target, Eye, Award, Users, Rocket, 
  ShieldCheck, Heart, ChevronRight, Fingerprint, Lightbulb 
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
    <div className="bg-[#050810] text-slate-300 overflow-hidden">
      
      {/* 1. BRAND HERO - Impactful & Research-Driven */}
      <section className="relative pt-32 pb-48 px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[120px] -mr-40 -mt-40 animate-pulse"></div>
        
        <motion.div 
          initial="hidden" animate="visible" variants={staggerContainer}
          className="max-w-7xl mx-auto text-center relative z-10"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/30 text-blue-400 text-sm font-bold mb-8 uppercase tracking-widest">
            <Lightbulb size={16} /> The Intersection of Innovation & Strategy
          </motion.div>
          <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.95]">
            Engineering the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400">
              Future of Enterprise
            </span>
          </motion.h1>
          <motion.p variants={fadeInUp} className="text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed">
            SK Prime Infotech is not just a software agency; we are an innovation lab. 
            Rooted in research with patents in AI and IoT, we build high-performance 
            digital ecosystems for forward-thinking businesses.
          </motion.p>
        </motion.div>
      </section>

      {/* 2. MISSION & VISION - High Contrast Glassmorphism */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 gap-10 -mt-40 relative z-20">
          <motion.div 
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-slate-900/80 backdrop-blur-2xl p-12 rounded-[3rem] border border-slate-800 shadow-2xl group"
          >
            <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500 mb-8 group-hover:bg-blue-600 group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(37,99,235,0.3)]">
              <Target size={32} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6 italic tracking-tight">Our Mission</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              To architect and deploy specialized software modules that solve real-world 
              complexities. We focus on bridging the gap between raw data and 
              actionable intelligence using Full-Stack excellence.
            </p>
          </motion.div>

          <motion.div 
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-slate-900/80 backdrop-blur-2xl p-12 rounded-[3rem] border border-slate-800 shadow-2xl group"
          >
            <div className="w-16 h-16 bg-emerald-600/20 rounded-2xl flex items-center justify-center text-emerald-500 mb-8 group-hover:bg-emerald-600 group-hover:text-white transition-all duration-500 shadow-[0_0_20px_rgba(16,185,129,0.3)]">
              <Eye size={32} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-6 italic tracking-tight">Our Vision</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              To be the premier architect of global digital transformation. We envision a world 
              where AI-powered systems and seamless React interfaces redefine how 
              industries operate on a daily basis.
            </p>
          </motion.div>
        </div>
      </section>

      {/* 3. CORE DNA - Animated Feature Grid */}
      <section className="py-32 bg-[#080c14] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-blue-500 font-bold uppercase tracking-[0.4em] text-xs mb-4">Innovation DNA</h2>
            <h3 className="text-4xl md:text-6xl font-black text-white">Principles of Excellence</h3>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {[
              { icon: <Award className="text-amber-500" />, title: "Patent-Ready Code", desc: "Our solutions are built on original innovation and high-grade architecture." },
              { icon: <Fingerprint className="text-blue-500" />, title: "Secure Architecture", desc: "Using .NET Core and encrypted MySQL protocols for ironclad security." },
              { icon: <Rocket className="text-purple-500" />, title: "Agile Momentum", desc: "Fast-tracked development without sacrificing code integrity." },
              { icon: <ShieldCheck className="text-emerald-500" />, title: "Strategic Trust", desc: "Radical transparency in every API call and business logic." }
            ].map((value, idx) => (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-900/40 p-10 rounded-[2.5rem] border border-slate-800 hover:border-blue-500/50 transition-all group"
              >
                <div className="w-14 h-14 bg-slate-800 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform shadow-lg">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold text-white mb-4">{value.title}</h4>
                <p className="text-slate-500 leading-relaxed text-sm">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. THE SK PRIME EDGE - Interactive Layout */}
      <section className="py-32 px-6 max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-20">
        <motion.div 
          initial={{ opacity: 0, x: -100 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="lg:w-1/2"
        >
          <h2 className="text-4xl md:text-7xl font-black text-white mb-10 leading-tight">
            Built by <span className="text-blue-500 underline decoration-indigo-500/30">Inventors.</span> <br /> 
            Run by Experts.
          </h2>
          <p className="text-slate-400 text-xl mb-12 leading-relaxed italic">
            "We don't just follow industry trends; we contribute to the global patent landscape 
            to ensure our clients always stay ahead of the curve."
          </p>
          <div className="space-y-6">
            {['Al-Powered Predictive Modules', 'Full-Stack Performance Tuning', 'IoT Integration Specialists'].map((item, i) => (
              <motion.div 
                whileHover={{ x: 10 }}
                key={i} 
                className="flex items-center text-white text-lg font-semibold bg-slate-900/50 p-4 rounded-2xl border border-slate-800 w-fit"
              >
                <ChevronRight className="text-blue-500 mr-3" size={20} />
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Animated Stats Visual */}
        <div className="lg:w-1/2 relative grid grid-cols-2 gap-6">
            <div className="absolute inset-0 bg-blue-500/10 blur-[100px] -z-10"></div>
            <motion.div animate={{ y: [0, -15, 0] }} transition={{ duration: 4, repeat: Infinity }} className="bg-gradient-to-br from-blue-600 to-indigo-700 h-64 rounded-[3rem] flex flex-col items-center justify-center shadow-2xl">
                <span className="text-5xl font-black text-white">4+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-blue-100 mt-2">Patents Filed</span>
            </motion.div>
            <motion.div animate={{ y: [0, 15, 0] }} transition={{ duration: 5, repeat: Infinity }} className="bg-slate-800 h-64 rounded-[3rem] mt-12 flex flex-col items-center justify-center shadow-2xl border border-slate-700">
                <Users size={48} className="text-blue-400 mb-4" />
                <span className="font-black text-white">Team Synergy</span>
            </motion.div>
        </div>
      </section>

      {/* 5. THE FINAL PROOF - Ultra Dark Stats */}
      <section className="bg-slate-950 py-32 px-6 border-t border-slate-900">
        <div className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-16 text-center">
            {[
              { label: "Lines of Clean Code", val: "1M+" },
              { label: "AI Modules Deployed", val: "50+" },
              { label: "Research Patents", val: "4" },
              { label: "System Uptime", val: "100%" }
            ].map((stat, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ scale: 1.1 }}
                className="cursor-default"
              >
                <div className="text-5xl md:text-7xl font-black text-white mb-4 bg-clip-text text-transparent bg-gradient-to-b from-white to-slate-600">
                  {stat.val}
                </div>
                <div className="text-blue-500 font-bold uppercase tracking-widest text-xs">
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