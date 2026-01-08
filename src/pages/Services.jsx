import React from 'react';
import { motion } from 'framer-motion';
import { 
  Laptop, Smartphone, ShieldCheck, Cloud, Search, 
  BarChart, ArrowRight, BrainCircuit, Rocket 
} from 'lucide-react';

const Services = () => {
  // Stagger animation container
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.3 }
    }
  };

  // Card reveal animation
  const cardVariants = {
    hidden: { opacity: 0, y: 30, scale: 0.95 },
    visible: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  const services = [
    {
      title: "AI & Machine Learning",
      desc: "Integrating smart image recognition and predictive models into business workflows.",
      icon: <BrainCircuit className="w-8 h-8" />,
      color: "from-purple-500 to-indigo-600",
      tag: "Innovation"
    },
    {
      title: "Full-Stack Web Systems",
      desc: "Building scalable React & .NET Core applications with robust MySQL architectures.",
      icon: <Laptop className="w-8 h-8" />,
      color: "from-blue-500 to-cyan-600",
      tag: "Scalability"
    },
    {
      title: "Mobile Architecture",
      desc: "Native-feel cross-platform apps designed for high-retention user experiences.",
      icon: <Smartphone className="w-8 h-8" />,
      color: "from-emerald-500 to-teal-600",
      tag: "UX Focus"
    },
    {
      title: "Enterprise Cloud",
      desc: "Seamless AWS/Azure migration and management for 99.9% uptime reliability.",
      icon: <Cloud className="w-8 h-8" />,
      color: "from-sky-500 to-blue-700",
      tag: "Infrastructure"
    },
    {
      title: "Cyber Resilience",
      desc: "End-to-end encryption and security audits to safeguard proprietary company data.",
      icon: <ShieldCheck className="w-8 h-8" />,
      color: "from-red-500 to-orange-600",
      tag: "Security"
    },
    {
      title: "Strategic Analytics",
      desc: "Turning big data into visual dashboards for automated daily business reporting.",
      icon: <BarChart className="w-8 h-8" />,
      color: "from-amber-500 to-yellow-600",
      tag: "Big Data"
    }
  ];

  return (
    <div className="bg-[#0a0f1a] min-h-screen text-slate-200 overflow-hidden">
      
      {/* --- HERO SECTION --- */}
      <section className="relative py-32 px-6 overflow-hidden border-b border-slate-800/50">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-900/20 via-transparent to-transparent"></div>
        
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto text-center relative z-10"
        >
          <motion.span 
            initial={{ letterSpacing: "0.1em", opacity: 0 }}
            animate={{ letterSpacing: "0.3em", opacity: 1 }}
            className="text-blue-500 font-bold uppercase text-sm mb-4 block"
          >
            Elite Technical Solutions
          </motion.span>
          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Core Expertise</span>
          </h1>
          <p className="text-slate-400 max-w-3xl mx-auto text-xl leading-relaxed">
            As tech partners, we don't just provide services—we build the infrastructure that allows your business to scale globally. [cite: 7]
          </p>
        </motion.div>
      </section>

      {/* --- SERVICES GRID --- */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
        >
          {services.map((s, i) => (
            <motion.div 
              key={i} 
              variants={cardVariants}
              whileHover={{ y: -12, transition: { duration: 0.2 } }}
              className="group relative p-1 bg-gradient-to-b from-slate-700/50 to-slate-900/50 rounded-[2.5rem] overflow-hidden"
            >
              <div className="bg-[#0f172a] p-10 rounded-[2.4rem] h-full transition-colors group-hover:bg-[#131c31]">
                {/* Icon with Glowing Effect */}
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${s.color} flex items-center justify-center mb-8 shadow-[0_0_20px_rgba(59,130,246,0.3)] group-hover:shadow-[0_0_30px_rgba(59,130,246,0.5)] transition-all`}>
                  <div className="text-white">{s.icon}</div>
                </div>

                <span className="text-xs font-bold text-blue-400 uppercase tracking-widest mb-2 block">{s.tag}</span>
                <h3 className="text-2xl font-bold mb-4 text-white group-hover:text-blue-400 transition-colors">{s.title}</h3>
                <p className="text-slate-400 leading-relaxed mb-8 text-lg">
                  {s.desc}
                </p>

                <motion.div 
                  className="flex items-center text-blue-500 font-bold text-sm uppercase tracking-wider cursor-pointer group-hover:text-blue-300"
                  whileHover={{ x: 5 }}
                >
                  Consult Expert <ArrowRight size={16} className="ml-2" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- CUSTOM SOLUTION CTA (Full Width Animated) --- */}
      <section className="py-24 px-6">
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          className="max-w-6xl mx-auto relative overflow-hidden rounded-[3rem] bg-gradient-to-r from-blue-600 to-indigo-800 p-12 md:p-20 text-center md:text-left flex flex-col md:flex-row items-center justify-between shadow-2xl shadow-blue-500/20"
        >
          {/* Decorative Circle */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -translate-y-1/2 translate-x-1/2 blur-3xl"></div>
          
          <div className="relative z-10 max-w-xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 text-white text-sm font-bold mb-6">
              <Rocket size={16} /> Ready to Scale?
            </div>
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">Need a custom technical roadmap?</h2>
            <p className="text-blue-100 text-lg opacity-90">
              Our engineering team specializes in solving unique business bottlenecks with AI and IoT-integrated solutions. [cite: 7, 41]
            </p>
          </div>

          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative z-10 mt-10 md:mt-0 bg-white text-blue-700 px-10 py-5 rounded-2xl font-black text-xl shadow-xl hover:bg-slate-50 transition-colors"
          >
            Get Custom Quote
          </motion.button>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;