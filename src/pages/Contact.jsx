import React from 'react';
import { motion } from 'framer-motion';
import { 
  Mail, Phone, MapPin, Send, Clock, 
  Linkedin, Twitter, Github, Sparkles, ShieldCheck,
  ChevronRight, ArrowUpRight
} from 'lucide-react';

const Contact = () => {
  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1, 
      transition: { staggerChildren: 0.15, delayChildren: 0.2 } 
    }
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.7, ease: "easeOut" } }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Strategic consultation initialized! Our technical team will reach out within 24 hours.");
  };

  return (
    <div className="bg-[#030712] min-h-screen text-slate-300 overflow-hidden font-sans">
      
      {/* 1. CINEMATIC HEADER */}
      <section className="relative pt-40 pb-24 px-6 text-center overflow-hidden">
        {/* Deep Glow Effect */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] bg-blue-600/5 blur-[120px] pointer-events-none opacity-50"></div>
        
        <div className="relative z-10 max-w-5xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/5 border border-blue-500/20 text-blue-400 text-[10px] font-black mb-8 tracking-[0.3em] uppercase"
          >
            <Sparkles size={14} className="animate-pulse" /> Let's Architect the Future
          </motion.div>
          
          <motion.h1 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            className="text-5xl md:text-9xl font-black text-white mb-10 tracking-tighter leading-none"
          >
            READY TO <br /> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-400 to-emerald-400 italic font-serif">Scale?</span>
          </motion.h1>
          
          <motion.p 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-slate-400 text-lg md:text-2xl max-w-3xl mx-auto leading-relaxed font-medium opacity-80"
          >
            Whether it's an AI-integrated module or an enterprise-grade web ecosystem, 
            our engineering team is ready to solve your technical bottlenecks.
          </motion.p>
        </div>
      </section>

      {/* 2. INTERACTIVE CONTACT SECTION */}
      <section className="max-w-7xl mx-auto py-20 px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-20 items-start">
          
          {/* LEFT: Branding & Connectivity */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-16"
          >
            <motion.div variants={itemVariants}>
              <h3 className="text-4xl font-black text-white mb-6 tracking-tight">Technical <br/>Headquarters</h3>
              <p className="text-slate-500 mb-12 text-lg leading-relaxed max-w-md font-medium">
                Operating from the IT hub of Indore, we deliver high-concurrency 
                systems across global timezones with zero-latency communication.
              </p>
              
              <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  { icon: <Mail />, label: "Direct Access", val: "aditya942003@gmail.com", link: "mailto:aditya942003@gmail.com" },
                  { icon: <Phone />, label: "Quick Consultation", val: "+91 7999588460", link: "tel:+917999588460" },
                  { icon: <MapPin />, label: "Innovation Lab", val: "Indore, Madhya Pradesh", link: "#" },
                  { icon: <ShieldCheck />, label: "Global Availability", val: "24/7 Tech Support", link: "#" }
                ].map((item, i) => (
                  <motion.a 
                    key={i}
                    href={item.link}
                    whileHover={{ x: 10, backgroundColor: "rgba(30, 41, 59, 0.4)" }}
                    className="flex items-center space-x-5 p-6 bg-slate-900/30 rounded-[2rem] border border-white/5 transition-all group"
                  >
                    <div className="p-3 bg-blue-600/10 rounded-xl text-blue-500 group-hover:bg-blue-600 group-hover:text-white transition-all shadow-lg">
                      {item.icon}
                    </div>
                    <div className="overflow-hidden">
                      <h4 className="font-black text-white text-[10px] uppercase tracking-widest opacity-60 mb-1">{item.label}</h4>
                      <p className="text-slate-300 text-sm font-bold truncate">{item.val}</p>
                    </div>
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Social Connection Hub */}
            <motion.div variants={itemVariants} className="p-10 rounded-[3rem] bg-gradient-to-br from-blue-600/5 to-transparent border border-white/5 backdrop-blur-3xl">
              <h4 className="text-xl font-black text-white mb-8 tracking-tight">Strategic Networks</h4>
              <div className="flex flex-wrap gap-4">
                {[
                  { icon: <Linkedin />, label: "LinkedIn", color: "hover:bg-blue-600", url: "https://linkedin.com/in/aditya-singh-a59b24236" },
                  { icon: <Github />, label: "GitHub", color: "hover:bg-slate-700", url: "#" },
                  { icon: <Twitter />, label: "Twitter/X", color: "hover:bg-slate-800", url: "#" }
                ].map((soc, i) => (
                  <motion.a 
                    key={i}
                    href={soc.url}
                    whileHover={{ y: -5 }}
                    className={`flex items-center gap-3 px-6 py-4 bg-slate-800/50 rounded-2xl text-white transition-all ${soc.color} border border-white/5 shadow-xl`}
                  >
                    {soc.icon}
                    <span className="font-bold text-xs uppercase tracking-widest">{soc.label}</span>
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* RIGHT: High-Conversion Form (Entrooopy Styled) */}
          <motion.div 
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 rounded-[4rem] blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
            
            <div className="relative bg-[#0b1120] p-8 md:p-16 rounded-[4rem] border border-white/10 shadow-2xl">
              <div className="mb-12">
                <h3 className="text-3xl font-black text-white mb-4 tracking-tighter">Request Consultation</h3>
                <p className="text-slate-500 font-medium">Fill in the technical requirements for your project blueprint.</p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-500 ml-2">Client Name</label>
                    <input required type="text" className="w-full px-8 py-5 bg-slate-950/50 border border-white/5 rounded-2xl focus:border-blue-500/50 transition-all outline-none text-white font-medium shadow-inner placeholder:text-slate-700" placeholder="e.g. Aditya Singh" />
                  </div>
                  <div className="space-y-3">
                    <label className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-500 ml-2">Organization</label>
                    <input type="text" className="w-full px-8 py-5 bg-slate-950/50 border border-white/5 rounded-2xl focus:border-blue-500/50 transition-all outline-none text-white font-medium shadow-inner placeholder:text-slate-700" placeholder="Company Name" />
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-500 ml-2">Professional Email</label>
                  <input required type="email" className="w-full px-8 py-5 bg-slate-950/50 border border-white/5 rounded-2xl focus:border-blue-500/50 transition-all outline-none text-white font-medium shadow-inner placeholder:text-slate-700" placeholder="aditya@example.com" />
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-500 ml-2">Blueprint Type</label>
                  <div className="relative">
                    <select className="w-full px-8 py-5 bg-slate-950/50 border border-white/5 rounded-2xl focus:border-blue-500/50 transition-all outline-none text-slate-400 cursor-pointer appearance-none font-bold text-sm">
                      <option>Full-Stack Web (React + .NET)</option>
                      <option>AI & Predictive Models</option>
                      <option>IoT Cloud Integration</option>
                      <option>Enterprise MySQL Architecture</option>
                    </select>
                    <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none opacity-40">
                      <ChevronRight className="rotate-90" size={18} />
                    </div>
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-[10px] font-black uppercase tracking-[0.25em] text-blue-500 ml-2">Project Brief</label>
                  <textarea required rows="4" className="w-full px-8 py-5 bg-slate-950/50 border border-white/5 rounded-2xl focus:border-blue-500/50 transition-all outline-none text-white font-medium shadow-inner resize-none placeholder:text-slate-700" placeholder="Tell us about the problem we are solving..."></textarea>
                </div>

                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit" 
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white py-6 rounded-2xl font-black text-xs uppercase tracking-[0.4em] transition-all flex items-center justify-center shadow-2xl shadow-blue-900/40 group"
                >
                  Initiate Strategic Call <ArrowUpRight size={18} className="ml-3 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </motion.button>
              </form>
            </div>
          </motion.div>
        </div>
      </section>

      {/* 3. THE GEOLOCATION LAB - DARK MODE MAP */}
      <section className="py-32 px-6">
        <motion.div 
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-7xl mx-auto h-[600px] bg-slate-900 rounded-[5rem] overflow-hidden relative border border-white/5 shadow-2xl group"
        >
          {/* Use a placeholder image or real Mapbox integration */}
          <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&w=2074&auto=format&fit=crop')] bg-cover bg-center grayscale contrast-150 opacity-40 group-hover:scale-105 transition-transform duration-[3s]"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent"></div>
          
          <div className="absolute bottom-12 left-6 md:left-12 p-10 bg-slate-950/80 backdrop-blur-3xl border border-white/10 rounded-[3rem] flex items-center gap-8 shadow-3xl">
            <div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center animate-bounce shadow-2xl shadow-blue-500/50">
              <MapPin className="text-white" size={40} />
            </div>
            <div>
              <h4 className="text-3xl font-black text-white italic tracking-tighter mb-1">SK Prime Lab</h4>
              <p className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px]">Indore, India // Central HQ</p>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
};

export default Contact;