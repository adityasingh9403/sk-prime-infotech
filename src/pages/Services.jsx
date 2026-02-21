import React from 'react';
import { motion } from 'framer-motion';
import { 
  Laptop, Smartphone, ShieldCheck, Cloud, BarChart, 
  ArrowRight, BrainCircuit, Rocket, CheckCircle, Database, 
  Cpu, Globe, Zap
} from 'lucide-react';
import { Link } from 'react-router-dom';

// Components import
import Process from '../components/Process';

const Services = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0, 
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const services = [
    {
      title: "AI & Machine Learning",
      desc: "Integrating smart image recognition and predictive models into business workflows for automated decision making.",
      icon: <BrainCircuit className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-600",
      tag: "Innovation",
      tech: ["TensorFlow", "Python", "OpenCV"]
    },
    {
      title: "Full-Stack Web Systems",
      desc: "Building scalable React & .NET Core applications with robust MySQL architectures for high-traffic environments.",
      icon: <Laptop className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      tag: "Scalability",
      tech: ["React.js", ".NET Core", "SQL Server"]
    },
    {
      title: "Mobile Architecture",
      desc: "Native-feel cross-platform apps designed for high-retention user experiences and seamless performance.",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-600",
      tag: "UX Focus",
      tech: ["React Native", "Flutter", "Firebase"]
    },
    {
      title: "Enterprise Cloud",
      desc: "Seamless AWS/Azure migration and management ensuring 99.9% uptime and global data availability.",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-sky-500 to-blue-700",
      tag: "Infrastructure",
      tech: ["AWS", "Azure", "Docker"]
    },
    {
      title: "Cyber Resilience",
      desc: "End-to-end encryption and security audits to safeguard proprietary company data and prevent breaches.",
      icon: <ShieldCheck className="w-8 h-8" />,
      color: "from-red-500 to-orange-600",
      tag: "Security",
      tech: ["OAuth 2.0", "SSL", "Pen-Testing"]
    },
    {
      title: "Strategic Analytics",
      desc: "Turning big data into visual dashboards for automated daily business reporting and data-driven growth.",
      icon: <BarChart className="w-8 h-8" />,
      color: "from-amber-500 to-yellow-600",
      tag: "Big Data",
      tech: ["PowerBI", "Tableau", "Node.js"]
    }
  ];

  return (
    <div className="bg-[#030712] min-h-screen text-slate-300">
      
      {/* 1. HERO SECTION */}
      <section className="relative pt-40 pb-20 px-6 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-blue-600/10 blur-[120px] rounded-full -z-0"></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 px-4 py-2 mb-8 border border-blue-500/30 rounded-full bg-blue-500/10 text-blue-400 font-bold text-xs uppercase tracking-[0.2em]"
          >
            <Zap size={14} /> Elite Technical Solutions
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-white mb-8 leading-none"
          >
            Digital <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 italic font-serif">Excellence.</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed font-medium"
          >
            We don't just provide services—we build the high-performance infrastructure that allows your business to scale globally.
          </motion.p>
        </div>
      </section>

      {/* 2. SERVICES GRID */}
      <section className="py-20 px-6 max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              variants={cardVariants}
              whileHover={{ y: -10 }}
              className="group relative p-10 bg-slate-900/40 border border-slate-800 rounded-[3rem] hover:border-blue-500/50 transition-all overflow-hidden"
            >
              {/* Background Glow */}
              <div className={`absolute -right-10 -top-10 w-32 h-32 bg-gradient-to-br ${s.color} opacity-0 group-hover:opacity-10 blur-3xl transition-opacity`}></div>

              {/* Icon Container */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-8 shadow-xl text-white transform group-hover:scale-110 transition-transform duration-500`}>
                {s.icon}
              </div>

              <span className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-3 block">{s.tag}</span>
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">{s.title}</h3>
              <p className="text-slate-400 leading-relaxed mb-8 text-sm md:text-base">
                {s.desc}
              </p>

              {/* Tech Badges */}
              <div className="flex flex-wrap gap-2 mb-10">
                {s.tech.map(t => (
                  <span key={t} className="text-[9px] font-bold text-slate-500 border border-slate-700 px-2 py-1 rounded-md uppercase">
                    {t}
                  </span>
                ))}
              </div>

              <Link to="/contact" className="flex items-center gap-2 text-white font-bold text-xs uppercase tracking-widest group/link">
                Consult Now <ArrowRight size={14} className="group-hover/link:translate-x-2 transition-transform text-blue-500" />
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* 3. TECHNICAL ARCHITECTURE SECTION */}
      <section className="py-24 bg-[#050810] px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl md:text-6xl font-black text-white mb-10 leading-tight">
              Built for <span className="text-blue-500 italic">Resilience.</span>
            </h2>
            <div className="space-y-8">
              {[
                { t: "High Concurrency", d: "Optimized for handling 100k+ simultaneous requests without latency.", icon: <Zap className="text-yellow-500" /> },
                { t: "Global Scalability", d: "Microservices architecture designed for horizontal growth across regions.", icon: <Globe className="text-blue-500" /> },
                { t: "Micro-Processor Speed", d: "Codebases tuned for sub-second execution and high performance.", icon: <Cpu className="text-emerald-500" /> }
              ].map((item, idx) => (
                <div key={idx} className="flex gap-6 group">
                  <div className="mt-1 w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center group-hover:border-blue-500 transition-colors">
                    {item.icon}
                  </div>
                  <div>
                    <h4 className="text-white text-xl font-bold mb-1">{item.t}</h4>
                    <p className="text-slate-400 text-sm leading-relaxed">{item.d}</p>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-slate-900/50 border border-slate-800 p-4 rounded-[3.5rem] relative"
          >
             <div className="bg-[#030712] rounded-[3rem] p-12 h-[450px] flex items-center justify-center relative overflow-hidden">
                <Database className="text-blue-500 opacity-10" size={200} />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent"></div>
                <div className="absolute text-center">
                   <div className="w-20 h-20 rounded-full bg-blue-500/10 flex items-center justify-center mx-auto mb-6 border border-blue-500/20">
                      <ShieldCheck size={40} className="text-blue-500 animate-pulse" />
                   </div>
                   <p className="text-white font-mono text-sm tracking-widest mb-2 uppercase">Infrastructure Secured</p>
                   <p className="text-slate-500 font-mono text-xs">Ready for Enterprise Launch _</p>
                </div>
             </div>
          </motion.div>
        </div>
      </section>

      {/* 4. THE PROCESS INTEGRATION */}
      <div className="border-t border-slate-800/50">
        <Process />
      </div>

      {/* 5. FINAL CTA SECTION */}
      <section className="py-32 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-6xl mx-auto relative overflow-hidden rounded-[4rem] bg-gradient-to-br from-blue-700 via-indigo-900 to-black p-12 md:p-24 text-center border border-white/10"
        >
          {/* Grid Pattern Overlay */}
          <div className="absolute inset-0 opacity-20 bg-[url('https://www.transparenttextures.com/patterns/grid-me.png')]"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl md:text-7xl font-black text-white mb-10 tracking-tighter">
              READY TO SCALE?
            </h2>
            <p className="text-blue-100 text-lg md:text-2xl mb-12 max-w-2xl mx-auto font-medium opacity-80 leading-relaxed">
              Our engineering team is ready to solve your unique business bottlenecks with AI and cloud-integrated solutions.
            </p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center">
              <Link to="/contact" className="bg-white text-blue-900 px-12 py-6 rounded-2xl font-black text-xl hover:scale-105 transition-transform shadow-2xl">
                Get Custom Quote
              </Link>
              <Link to="/projects" className="bg-slate-900/50 backdrop-blur-md border border-slate-700 text-white px-12 py-6 rounded-2xl font-black text-xl hover:bg-slate-800 transition-all">
                View Portfolio
              </Link>
            </div>
          </div>
        </motion.div>
      </section>

    </div>
  );
};

export default Services;