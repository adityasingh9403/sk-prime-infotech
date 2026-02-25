import React from 'react';
import { motion } from 'framer-motion';
import { Search, PenTool, Code2, ShieldCheck, Rocket, ChevronRight, ChevronDown } from 'lucide-react';

const Process = () => {
  const steps = [
    {
      icon: <Search size={28} />,
      title: "Discovery & Strategy",
      desc: "We understand your business goals and prepare a comprehensive technical blueprint.",
      color: "from-blue-500 to-cyan-500",
      shadow: "shadow-blue-500/20"
    },
    {
      icon: <PenTool size={28} />,
      title: "Architecture & Design",
      desc: "Along with UI/UX design, we architect a scalable and secure backend framework.",
      color: "from-purple-500 to-indigo-500",
      shadow: "shadow-purple-500/20"
    },
    {
      icon: <Code2 size={28} />,
      title: "Agile Development",
      desc: "Development is carried out in sprints, with weekly progress updates shared with you.",
      color: "from-emerald-500 to-teal-500",
      shadow: "shadow-emerald-500/20"
    },
    {
      icon: <ShieldCheck size={28} />,
      title: "Quality Assurance",
      desc: "Rigorous testing and security audits to ensure a bug-free and secure launch.",
      color: "from-orange-500 to-red-500",
      shadow: "shadow-orange-500/20"
    },
    {
      icon: <Rocket size={28} />,
      title: "Deployment & Support",
      desc: "Launch on global servers followed by 24/7 technical maintenance and support.",
      color: "from-pink-500 to-rose-500",
      shadow: "shadow-pink-500/20"
    }
  ];
  return (
    <section className="bg-[#030712] px-6 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full bg-blue-600/5 blur-[120px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16 lg:mb-24">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-blue-500 font-black uppercase tracking-[0.3em] text-[10px] md:text-xs mb-4"
          >
            How We Work
          </motion.p>
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter"
          >
            Our Engineering <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400 italic">Lifecycle</span>
          </motion.h3>
        </div>

        <div className="relative">
          {/* Connector Line (Desktop Only) */}
          <div className="hidden lg:block absolute top-[40px] left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-slate-800 to-transparent z-0"></div>

          {/* Steps Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 lg:gap-6 relative z-10">
            {steps.map((step, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="group flex flex-col items-center lg:items-start text-center lg:text-left"
              >
                {/* Icon Circle */}
                <div className="relative mb-8">
                  <div className={`w-20 h-20 rounded-[2rem] bg-gradient-to-br ${step.color} p-[1px] shadow-2xl ${step.shadow} group-hover:rotate-6 transition-transform duration-500`}>
                    <div className="w-full h-full bg-[#030712] rounded-[1.9rem] flex items-center justify-center text-white">
                      {step.icon}
                    </div>
                  </div>
                  {/* Step Number Badge */}
                  <div className="absolute -top-2 -right-2 bg-white text-black text-[10px] font-black px-2 py-1 rounded-md shadow-xl">
                    0{idx + 1}
                  </div>

                  {/* Mobile Arrow Connector */}
                  {idx !== steps.length - 1 && (
                    <div className="lg:hidden absolute -bottom-10 left-1/2 -translate-x-1/2 text-slate-700 animate-bounce">
                      <ChevronDown size={24} />
                    </div>
                  )}
                </div>

                {/* Content Card */}
                <div className="lg:pr-4">
                  <h4 className="text-xl md:text-2xl font-black text-white mb-4 group-hover:text-blue-400 transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-slate-500 text-sm md:text-base leading-relaxed font-medium">
                    {step.desc}
                  </p>
                </div>

                {/* Desktop Arrow Connector */}
                {idx !== steps.length - 1 && (
                  <div className="hidden lg:block absolute top-[28px] -right-3 text-slate-800">
                    <ChevronRight size={24} />
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Process;