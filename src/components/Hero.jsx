"use client";

import React from "react";
import { ChevronDown, MapPin } from "lucide-react"; 
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      const yOffset = -80;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const colors = {
    primary: "#765229",      // Deep Earthy Brown
    accent: "#dfab5e",       // Muted Gold
    cream: "#FFF4E6",        // Soft Background
    lightGold: "#ffdead",    // Highlight
  };

  return (
    <section 
      id="hero" 
      className="w-full min-h-screen bg-white p-3 md:p-6 flex flex-col font-sans overflow-x-hidden"
    >
      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 gap-4 md:gap-6">
        
        {/* --- LEFT CONTENT: TEXT & CTA --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="order-2 lg:order-1 lg:col-span-5 rounded-[2rem] md:rounded-[2.5rem] p-8 md:p-16 flex flex-col justify-center relative overflow-hidden"
          style={{ backgroundColor: colors.primary }}
        >
          {/* Decorative radial gradient */}
          <div className="absolute -top-24 -left-24 w-96 h-96 bg-white/5 rounded-full blur-[100px]" />

          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="relative z-10"
          >
            <span className="inline-block text-[10px] uppercase tracking-[0.3em] text-white/50 mb-4 md:mb-6 font-bold">
              Premium Residential Living
            </span>
            <h1 className="font-serif text-4xl md:text-7xl leading-[1.1] text-white tracking-tight">
              Experience <br />
              <span className="italic font-light" style={{ color: colors.lightGold }}>Air-View</span> <br />
              Living.
            </h1>
            <p className="mt-6 md:mt-8 text-white/70 text-base md:text-lg max-w-sm leading-relaxed font-light">
              Where luxury wraps you like air and every home opens to breathtaking panoramas.
            </p>
          </motion.div>

          <div className="mt-8 md:mt-12 flex flex-col items-start gap-8 relative z-10">
            <button 
              onClick={scrollToAbout}
              className="group relative flex items-center gap-4 px-8 py-4 rounded-full overflow-hidden transition-all duration-500 shadow-xl border border-white/10 w-full sm:w-auto justify-center sm:justify-start"
              style={{ backgroundColor: colors.accent }}
            >
              <span className="relative z-10 text-[12px] font-bold uppercase tracking-widest text-white">
                Explore the Ascent
              </span>
              <ChevronDown className="w-4 h-4 text-white transition-transform duration-300 group-hover:translate-y-1 relative z-10" />
              <div className="absolute inset-0 bg-black/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            
            <motion.div
              animate={{ y: [0, 5, 0] }}
              transition={{ repeat: Infinity, duration: 2.5 }}
              className="hidden lg:flex items-center gap-3 cursor-pointer"
              onClick={scrollToAbout}
            >
              <div className="w-[1px] h-12 bg-gradient-to-b from-white/40 to-transparent" />
              <span className="text-[10px] text-white/40 uppercase tracking-widest [writing-mode:vertical-lr]">Scroll</span>
            </motion.div>
          </div>
        </motion.div>

        {/* --- RIGHT CONTENT: VISUAL --- */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="order-1 lg:order-2 lg:col-span-7 relative rounded-[2rem] md:rounded-[2.5rem] overflow-hidden group shadow-2xl min-h-[45vh] lg:min-h-full"
        >
          <motion.img 
            initial={{ scale: 1.2 }}
            animate={{ scale: 1 }}
            transition={{ duration: 2, ease: "easeOut" }}
            src="/hero22.jpg" 
            alt="Subham Kishori Heights" 
            className="absolute inset-0 w-full h-full object-cover object-center"
          />
          
          {/* Subtle gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 lg:opacity-60" />
          
          {/* Floating Location Badge */}
          <div className="absolute bottom-6 left-6 right-6 md:bottom-10 md:left-10 md:right-10 flex justify-between items-end">
            <div className="bg-white/10 backdrop-blur-md border border-white/20 p-4 md:p-6 rounded-[1.5rem] md:rounded-[2rem] text-white max-w-[240px] md:max-w-xs">
              <div className="flex items-center gap-2 mb-1 md:mb-2">
                <MapPin className="w-3 h-3 md:w-4 md:h-4" style={{ color: colors.accent }} />
                <span className="text-[9px] md:text-[10px] uppercase tracking-widest font-bold">Location</span>
              </div>
              <p className="text-xs md:text-sm font-light opacity-90 leading-snug">
                Raghunathpur, Bhubaneswar. <br className="hidden md:block" /> A prime sanctuary.
              </p>
            </div>
            
            {/* Experience Badge - Hidden on small mobile to avoid clutter */}
            <div className="hidden sm:flex w-20 h-20 md:w-24 md:h-24 rounded-full bg-white flex-col items-center justify-center text-center shadow-2xl scale-90 group-hover:scale-100 transition-transform duration-500">
               <span className="text-[14px] md:text-[18px] font-serif" style={{ color: colors.primary }}>Luxury</span>
               <span className="text-[7px] md:text-[8px] uppercase tracking-tighter font-bold">Standard</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}