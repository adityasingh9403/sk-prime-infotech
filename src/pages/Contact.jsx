import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, Clock, 
  Linkedin, Twitter, Github, Sparkles, ShieldCheck 
} from 'lucide-react';

const Contact = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.1, delayChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Strategic consultation initialized! Our technical team will reach out within 24 hours.");
  };

  return (
    <div className="bg-[#030712] min-h-screen text-slate-300 overflow-hidden">
      
      {/* 1. ULTRA-MODERN HEADER */}
      <section className="relative py-32 px-6 text-center overflow-hidden">
        {/* Animated Background Orbs */}
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.2, 0.3, 0.2] }}
          transition={{ duration: 8, repeat: Infinity }}
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 rounded-full blur-[120px] pointer-events-none"
        ></motion.div>

        <div className="relative z-10 max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm font-bold mb-8 tracking-widest uppercase"
          >
            <Sparkles size={16} /> Let's Architect the Future
          </motion.div>
          
          <motion.h1 
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-8xl font-black text-white mb-8 tracking-tighter"
          >
            Ready to <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">Scale?</span>
          </motion.h1>
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-slate-400 text-xl max-w-2xl mx-auto leading-relaxed"
          >
            Whether it's an AI-integrated module or an enterprise-grade web ecosystem, our engineering team is ready for the challenge.
          </motion.p>
        </div>
      </section>

      {/* 2. INTERACTIVE CONTACT ECOSYSTEM */}
      <section className="max-w-7xl mx-auto py-12 px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-start">
          
          {/* LEFT: Trust Indicators & Connectivity */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-12"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-3xl font-bold text-white mb-6 tracking-tight">Technical Headquarters</h3>
              <p className="text-slate-400 mb-10 text-lg leading-relaxed">
                Operating from the IT hub of Central India, we deliver high-performance 
                code across global timezones.
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                {[
                  { icon: <Mail />, label: "Direct Access", val: "aditya942003@gmail.com", link: "mailto:aditya942003@gmail.com" }, // 
                  { icon: <Phone />, label: "Consultation Call", val: "+91 7999588460", link: "tel:+917999588460" }, // 
                  { icon: <MapPin />, label: "Innovation Lab", val: "Indore, Madhya Pradesh", link: "#" }, // [cite: 5, 27]
                  { icon: <ShieldCheck />, label: "Service Uptime", val: "24/7 Technical Support", link: "#" }
                ].map((item, i) => (
                  <motion.a 
                    key={i}
                    href={item.link}
                    whileHover={{ scale: 1.05, backgroundColor: "rgba(30, 41, 59, 0.8)" }}
                    className="flex items-start space-x-4 p-6 bg-slate-900/50 rounded-[2rem] border border-slate-800 transition-all group"
                  >
                    <div className="p-3 bg-blue-600/20 rounded-xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all">
                      {item.icon}
                    </div>
                    <div>
                      <h4 className="font-bold text-white text-sm uppercase tracking-wider">{item.label}</h4>
                      <p className="text-slate-400 text-sm mt-1 break-all">{item.val}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Social Connection Hub */}
            <motion.div variants={itemVariants} className="p-10 rounded-[3rem] bg-gradient-to-br from-blue-600/10 to-transparent border border-blue-500/20 backdrop-blur-xl">
              <h4 className="text-xl font-bold text-white mb-6">Join Our Tech Network</h4>
              <div className="flex space-x-6">
                {[
                  { icon: <Linkedin />, color: "hover:bg-blue-600", url: "https://linkedin.com/in/aditya-singh-a59b24236" }, // 
                  { icon: <Twitter />, color: "hover:bg-sky-500", url: "#" },
                  { icon: <Github />, color: "hover:bg-slate-700", url: "#" }
                ].map((soc, i) => (
                  <motion.a 
                    key={i}
                    href={soc.url}
                    whileHover={{ y: -5 }}
                    className={`p-4 bg-slate-800 rounded-2xl text-white transition-all ${soc.color} shadow-lg`}
                  >
                    {soc.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: High-Conversion Form */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            className="bg-slate-900/40 p-1 md:p-1.5 rounded-[3rem] border border-slate-800 backdrop-blur-sm shadow-2xl"
          >
            <div className="bg-[#0f172a] p-10 md:p-14 rounded-[2.8rem]">
              <div className="mb-10">
                <h3 className="text-3xl font-bold text-white mb-4">Request Consultation</h3>
                <p className="text-slate-500">Share your project vision, and our architects will handle the rest.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-[0.2em] text-blue-500">Client Name</label>
                    <input required type="text" className="w-full px-6 py-5 bg-slate-950/50 border border-slate-800 rounded-2xl focus:border-blue-500 transition-all outline-none text-white shadow-inner" placeholder="John Wick" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-xs font-black uppercase tracking-[0.2em] text-blue-500">Organization</label>
                    <input type="text" className="w-full px-6 py-5 bg-slate-950/50 border border-slate-800 rounded-2xl focus:border-blue-500 transition-all outline-none text-white shadow-inner" placeholder="Continental Ltd." />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-blue-500">Professional Email</label>
                  <input required type="email" className="w-full px-6 py-5 bg-slate-950/50 border border-slate-800 rounded-2xl focus:border-blue-500 transition-all outline-none text-white shadow-inner" placeholder="john@continental.com" />
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-blue-500">Architecture Preference</label>
                  <select className="w-full px-6 py-5 bg-slate-950/50 border border-slate-800 rounded-2xl focus:border-blue-500 transition-all outline-none text-slate-400 cursor-pointer appearance-none">
                    <option>Full-Stack Web (React + .NET)</option>
                    <option>AI & Machine Learning Integration</option>
                    <option>IoT & Hardware Prototyping</option>
                    <option>Database Optimization (MySQL)</option>
                  </select>
                </div>

                <div className="space-y-3">
                  <label className="text-xs font-black uppercase tracking-[0.2em] text-blue-500">Project Blueprint</label>
                  <textarea required rows="4" className="w-full px-6 py-5 bg-slate-950/50 border border-slate-800 rounded-2xl focus:border-blue-500 transition-all outline-none text-white shadow-inner resize-none" placeholder="Describe the problem you want us to solve..."></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white py-6 rounded-2xl font-black text-sm uppercase tracking-[0.3em] transition-all flex items-center justify-center shadow-lg shadow-blue-900/20 group"
                >
                  Initiate Blueprint Consultation <Send size={20} className="ml-4 group-hover:translate-x-2 transition-transform" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. THE GEOLOCATION LAB - DARK MODE MAP */}
      <section className="py-24 px-6 relative">
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="max-w-7xl mx-auto h-[500px] bg-slate-900 rounded-[4rem] overflow-hidden relative border border-slate-800 group"
        >
          {/* Static Map with Overlay */}
          <div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/dark-v10/static/75.8577,22.7196,12,0/1200x500?access_token=YOUR_TOKEN')] bg-cover bg-center grayscale contrast-125"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent"></div>
          
          <div className="absolute bottom-12 left-12 p-8 bg-slate-950/90 backdrop-blur-xl border border-slate-800 rounded-3xl flex items-center gap-6 shadow-2xl">
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center animate-bounce shadow-lg shadow-blue-500/50">
              <MapPin className="text-white" size={32} />
            </div>
            <div>
              <h4 className="text-2xl font-black text-white italic">SK Prime Lab</h4>
              <p className="text-blue-500 font-bold uppercase tracking-widest text-xs">Indore, India [cite: 5, 27]</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;