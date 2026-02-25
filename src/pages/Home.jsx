import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, ShieldCheck, Globe, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

// Import custom components
import TechStack from '../components/TechStack';
import Process from '../components/Process';

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: "easeOut" }
};

const Home = () => {
  return (
    <div className="flex flex-col bg-[#030712] overflow-x-hidden w-full">

      {/* 1. HERO SECTION - Adjusted for Navbar height */}
      <section className="relative min-h-[110dvh] flex items-center pt-[120px] pb-12 md:pt-[140px] lg:pt-20 lg:pb-0">
        {/* Animated Background Gradients */}
        <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
          <div className="absolute top-[10%] left-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-blue-600/10 rounded-full blur-[120px]"></div>
          <div className="absolute bottom-[10%] right-[-10%] w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-emerald-600/5 rounded-full blur-[120px]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">

            <motion.div initial="initial" animate="animate" className="text-center lg:text-left order-2 lg:order-1">
              <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 border border-blue-500/20 rounded-full bg-blue-500/5 text-blue-400 font-black text-[10px] uppercase tracking-[0.2em]">
                <Sparkles size={14} className="animate-pulse" /> Next-Gen Software Engineering
              </motion.div>

              <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl lg:text-[7rem] font-black text-white leading-[0.9] tracking-tighter mb-8">
                Building <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-emerald-400">Digital</span> <br />
                Powerhouses.
              </motion.h1>

              <motion.p variants={fadeInUp} className="text-slate-400 text-lg md:text-xl mb-10 max-w-xl mx-auto lg:mx-0 leading-relaxed font-medium opacity-80">
                SK Prime Infotech is a global technology lab specializing in high-concurrency architectures, AI systems, and enterprise ecosystems.
              </motion.p>

              <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
                <Link to="/contact" className="group bg-blue-600 hover:bg-blue-500 text-white px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest flex items-center justify-center transition-all shadow-2xl shadow-blue-900/40">
                  Start Engineering <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" />
                </Link>
                <Link to="/projects" className="bg-white/5 backdrop-blur-md border border-white/10 text-white hover:bg-white/10 px-10 py-5 rounded-2xl font-black text-sm uppercase tracking-widest transition-all flex items-center justify-center">
                  Our Works
                </Link>
              </motion.div>
            </motion.div>

            {/* Visual Element: Terminal (Optimized for Mobile) */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              className="relative order-1 lg:order-2 w-full max-w-[550px] mx-auto"
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-emerald-500 rounded-[2.5rem] blur opacity-20"></div>
              <div className="relative bg-[#0b1120] rounded-[2rem] border border-white/10 p-2 shadow-2xl backdrop-blur-3xl overflow-hidden">
                <div className="flex gap-1.5 p-4 border-b border-white/5">
                  <div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/40"></div>
                  <div className="w-3 h-3 rounded-full bg-amber-500/20 border border-amber-500/40"></div>
                  <div className="w-3 h-3 rounded-full bg-emerald-500/20 border border-emerald-500/40"></div>
                </div>
                <div className="p-6 md:p-10 font-mono text-[12px] md:text-sm leading-relaxed text-left">
                  <p className="text-blue-400">const skPrime = {'{'}</p>
                  <p className="pl-6 text-slate-500 italic">// Engineering sustainable growth</p>
                  <p className="pl-6 text-emerald-400">expertise: ["AI", "Cloud", "Scale"],</p>
                  <p className="pl-6 text-emerald-400">mission: "Build Legacies",</p>
                  <p className="pl-6 text-emerald-400">readyToLaunch: true</p>
                  <p className="text-blue-400">{'}'};</p>
                  <br />
                  <p className="text-slate-600 font-bold">{'>'} npm run accelerate_business</p>
                  <p className="text-blue-500 font-black mt-2 flex items-center gap-2">
                    <span className="w-2 h-2 bg-blue-500 rounded-full animate-ping"></span>
                    System Status: Optimized _
                  </p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. TECH STACK - No extra space */}
      <div className="py-10">
        <TechStack />
      </div>

      {/* 3. PROCESS - Transition space reduced */}
      <Process />

      {/* 4. WHY US - Clean Grid */}
      <section className="py-24 bg-[#050810] px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {[
              { icon: <Zap className="text-blue-400" />, title: "Rapid Sprints", desc: "Convert ideas to scalable MVPs in record time with our high-velocity agile engineering approach." },
              { icon: <ShieldCheck className="text-emerald-400" />, title: "Secure Core", desc: "Military-grade encryption and data protection are baked into our architectural DNA." },
              { icon: <Globe className="text-indigo-400" />, title: "Global Scaling", desc: "Our systems are stress-tested to handle millions of requests with zero performance degradation." }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                whileHover={{ y: -5 }}
                className="p-10 rounded-[2.5rem] bg-slate-900/30 border border-white/5 hover:border-blue-500/20 transition-all flex flex-col items-center text-center lg:items-start lg:text-left group"
              >
                <div className="mb-6 p-4 bg-blue-500/5 rounded-2xl border border-blue-500/10 group-hover:bg-blue-600 transition-colors group-hover:text-white text-blue-400">
                  {item.icon}
                </div>
                <h4 className="text-2xl font-black text-white mb-4 tracking-tight">{item.title}</h4>
                <p className="text-slate-500 leading-relaxed font-medium">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. FINAL CTA - Highly Responsive */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto rounded-[3.5rem] bg-gradient-to-br from-blue-600 to-indigo-900 p-10 md:p-20 text-center relative overflow-hidden shadow-3xl shadow-blue-900/20">
          <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
          <div className="relative z-10 flex flex-col items-center">
            <h2 className="text-4xl md:text-7xl lg:text-8xl font-black text-white mb-8 tracking-tighter leading-[0.9]">
              LET'S CODE <br /> THE FUTURE.
            </h2>
            <p className="text-blue-100 text-lg md:text-xl mb-12 max-w-2xl mx-auto font-medium opacity-90">
              Turn your complex challenges into elegant software solutions. Join hands with India's emerging IT powerhouse.
            </p>
            <Link to="/contact" className="bg-white text-blue-950 px-10 py-5 rounded-2xl font-black text-lg uppercase tracking-widest hover:scale-105 transition-transform shadow-2xl flex items-center gap-3">
              Start a Consultation <ArrowUpRight size={20} />
            </Link>
          </div>
        </div>
      </section>

    </div>
  );
};

export default Home;