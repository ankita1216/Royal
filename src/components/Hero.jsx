"use client";

import React from "react";
import { ChevronDown, MapPin, MousePointer2 } from "lucide-react"; 
import { motion } from "framer-motion";

export default function HeroSection() {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  const colors = {
    blackish: "#765229",      
    vibrantOrange: "#ffdead", 
    goldenYellow: "#dfab5e",  
    deepOrange: "#dfab5e",    
    warmCream: "#FFF4E6",     
  };

  return (
    <section id="hero" className="relative w-full min-h-[90vh] bg-[#FCFAFB] flex flex-col font-sans overflow-hidden">
      
      {/* Decorative Background Element */}
      <div className="absolute top-0 right-0 w-[40%] h-[40%] bg-[#FFF4E6] rounded-bl-[200px] -z-10 opacity-40" />

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 w-full h-full items-center">
        
        {/* --- LEFT CONTENT --- */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="lg:col-span-5 flex flex-col justify-center z-20 px-6 md:px-12 lg:pl-20 py-12"
        >
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-[1px] w-10 bg-[#765229]/30" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#765229]/60">
              The Pinnacle of Living
            </span>
          </motion.div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-[#765229]">
            Experience <br /> 
            <span className="relative inline-block">
              Your Air-View
              <svg className="absolute -bottom-1 left-0 w-full h-2 text-[#dfab5e]/30" viewBox="0 0 300 12" fill="none">
                <path d="M1 10C50 3 150 3 299 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
              </svg>
            </span> 
            <br />
            <span className="italic font-light opacity-80">Living.</span>
          </h1>

          <p className="mt-6 text-stone-600 text-base md:text-lg max-w-sm leading-relaxed font-light">
            Where luxury wraps you like air and every home opens to breathtaking panoramic views.
          </p>

          <div className="mt-10 flex flex-wrap items-center gap-6">
            <button 
              onClick={scrollToAbout}
              className="relative overflow-hidden group px-8 py-4 rounded-full bg-[#765229] text-white text-[10px] font-bold uppercase tracking-[0.2em] transition-all shadow-xl hover:shadow-[#765229]/20"
            >
              <span className="relative z-10 flex items-center gap-2">
                Discover the Ascent 
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </span>
              <div className="absolute inset-0 bg-[#dfab5e] translate-y-[100%] group-hover:translate-y-0 transition-transform duration-300" />
            </button>
            
            <div className="flex items-center gap-3 text-[#765229] font-bold text-xs cursor-pointer hover:opacity-70 transition-opacity uppercase tracking-widest">
                <div className="w-10 h-10 rounded-full border border-[#765229]/20 flex items-center justify-center">
                   <MousePointer2 className="w-4 h-4" />
                </div>
                Virtual Tour
            </div>
          </div>
        </motion.div>

        {/* --- RIGHT CONTENT --- */}
        <div className="lg:col-span-7 relative h-full flex flex-col lg:flex-row items-center p-6 md:p-10 lg:p-16">
          
          {/* Main Image Container */}
          <motion.div 
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            className="relative w-full h-[50vh] lg:h-[80vh] rounded-[3rem] lg:rounded-[5rem] overflow-hidden shadow-2xl z-10"
          >
            <img 
              src="/hero22 (1) (1) (1).webp" 
              alt="Luxury Living" 
              className="absolute inset-0 w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/10 transition-opacity duration-500 hover:opacity-0" />
            
            {/* Stats Badge */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
              className="absolute top-8 right-8 hidden md:block bg-white/20 backdrop-blur-md border border-white/30 px-5 py-3 rounded-2xl"
            >
              <div className="text-white text-center">
                <p className="text-xl font-serif">180°</p>
                <p className="text-[8px] uppercase tracking-widest font-black">Views</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Floating Location Card - Adjusted mt-4 for mobile to push it down slightly */}
          <motion.div 
            initial={{ y: 40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="relative lg:absolute mt-4 lg:mt-0 left-1/2 -translate-x-1/2 lg:translate-x-0 lg:left-12 bottom-6 lg:bottom-16 bg-white py-3 px-4 rounded-[1.75rem] shadow-xl border border-stone-50 w-[85%] max-w-[210px] lg:max-w-[190px] z-30"
          >
            <div className="flex items-center gap-3">
              <div className="bg-[#dfab5e] p-2 rounded-xl text-white shadow-sm flex-shrink-0">
                <MapPin className="w-4 h-4" />
              </div>
              <div className="min-w-0">
                <h4 className="font-bold text-[#765229] text-sm truncate leading-tight">Bhubaneswar</h4>
                <p className="text-[11px] text-stone-400 font-medium truncate">Raghunathpur</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}