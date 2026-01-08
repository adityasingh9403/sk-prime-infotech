import React from 'react';
import { motion } from 'framer-motion'; // For "tagde" animations
import { ArrowRight, Code, Cpu, Globe, ShieldCheck, Zap, Database, Cloud, Smartphone } from 'lucide-react';
import { Link } from 'react-router-dom';

// Animation Variants
const fadeInUp = {
  initial: { opacity: 0, y: 60 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const staggerContainer = {
  animate: { transition: { staggerChildren: 0.1 } }
};

const Home = () => {
  return (
    <div className="flex flex-col overflow-hidden bg-slate-900">
      
      {/* 1. HERO SECTION - High Impact */}
      <section className="relative min-h-screen flex items-center pt-20 pb-32">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-blue-600/30 rounded-full blur-[120px] animate-pulse"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-indigo-600/20 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10 grid lg:grid-cols-2 gap-16 items-center">
          <motion.div 
            initial="initial" animate="animate" variants={staggerContainer}
            className="text-center lg:text-left"
          >
            <motion.div variants={fadeInUp} className="inline-block px-4 py-1.5 mb-6 border border-blue-500/30 rounded-full bg-blue-500/10 text-blue-400 font-medium text-sm">
              🚀 Next-Gen Software Solutions
            </motion.div>
            <motion.h1 variants={fadeInUp} className="text-5xl md:text-8xl font-black text-white leading-[1.1] mb-8">
              We Code <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Future</span> Realities.
            </motion.h1>
            <motion.p variants={fadeInUp} className="text-xl text-slate-400 mb-10 max-w-xl leading-relaxed">
              SK Prime Infotech is where architectural excellence meets cutting-edge innovation. We don't just build apps; we engineer digital legacies[cite: 7].
            </motion.p>
            <motion.div variants={fadeInUp} className="flex flex-wrap gap-5 justify-center lg:justify-start">
              <Link to="/contact" className="group bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-full font-bold text-lg flex items-center transition-all">
                Launch Project <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
              </Link>
              <Link to="/portfolio" className="bg-slate-800/50 backdrop-blur-md border border-slate-700 text-white hover:bg-slate-800 px-8 py-4 rounded-full font-bold text-lg transition-all">
                Our Work
              </Link>
            </motion.div>
          </motion.div>

          {/* Interactive Tech Sphere */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1 }}
            className="relative hidden lg:block"
          >
            <div className="relative w-full aspect-square flex items-center justify-center">
              <div className="absolute w-[400px] h-[400px] border border-blue-500/20 rounded-full animate-[spin_20s_linear_infinite]"></div>
              <div className="absolute w-[300px] h-[300px] border border-indigo-500/40 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              <motion.div 
                animate={{ y: [0, -20, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="z-20 bg-slate-800/80 backdrop-blur-xl p-12 rounded-[2rem] border border-slate-700 shadow-2xl"
              >
                <Code size={120} className="text-blue-500" />
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 2. TECH STACK SECTION (New - Important for Head of IT) */}
      <section className="py-20 bg-slate-950 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <p className="text-center text-slate-500 font-bold uppercase tracking-[0.3em] mb-12">Our Technology Powerhouse</p>
          <div className="grid grid-cols-2 md:grid-cols-6 gap-12 grayscale opacity-50 hover:grayscale-0 transition-all duration-500">
             {/* Replace with real logos like React, Python, .NET Core  */}
             <div className="flex flex-col items-center gap-2 text-white font-bold"><Code /> React</div>
             <div className="flex flex-col items-center gap-2 text-white font-bold"><Cpu /> Python</div>
             <div className="flex flex-col items-center gap-2 text-white font-bold"><Database /> MySQL</div>
             <div className="flex flex-col items-center gap-2 text-white font-bold"><Cloud /> .NET Core</div>
             <div className="flex flex-col items-center gap-2 text-white font-bold"><Smartphone /> Mobile</div>
             <div className="flex flex-col items-center gap-2 text-white font-bold"><ShieldCheck /> Security</div>
          </div>
        </div>
      </section>

      {/* 3. EXPERTISE SECTION (Scroll-Triggered) */}
      <section className="py-32 bg-slate-900">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-blue-500 font-bold tracking-widest mb-4">OUR EXPERTISE</h2>
              <h3 className="text-4xl md:text-6xl font-bold text-white">Solving Complex Challenges Through Code.</h3>
            </div>
            <p className="text-slate-400 max-w-sm">From Al-integrated solutions [cite: 7] to robust backend APIs[cite: 12], we deliver excellence at scale.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: <Zap />, title: "Rapid Deployment", desc: "Scaling from idea to MVP in record time using agile frameworks." },
              { icon: <ShieldCheck />, title: "Enterprise Security", desc: "Implementing bank-grade security for your digital assets." },
              { icon: <Globe />, title: "Global Scale", desc: "Applications designed to handle millions of concurrent users worldwide." }
            ].map((item, index) => (
              <motion.div 
                key={index}
                whileHover={{ y: -10 }}
                className="p-10 rounded-3xl bg-slate-800/40 border border-slate-700 hover:border-blue-500/50 transition-all"
              >
                <div className="w-16 h-16 bg-blue-600/20 rounded-2xl flex items-center justify-center text-blue-500 mb-8">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-bold text-white mb-4">{item.title}</h4>
                <p className="text-slate-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. CTA SECTION - Gradient Impact */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto rounded-[3rem] bg-gradient-to-br from-blue-600 to-indigo-900 p-12 md:p-24 text-center relative overflow-hidden">
          <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black text-white mb-8">Ready to Build the Future?</h2>
            <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto">
              Join hands with SK Prime Infotech. Our team of expert engineers [cite: 1] is ready to transform your vision.
            </p>
            <Link to="/contact" className="bg-white text-blue-900 px-12 py-5 rounded-full font-black text-xl hover:scale-105 transition-transform shadow-2xl">
               Get a Free Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;