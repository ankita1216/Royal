"use client";

import React, { useRef } from "react";
import { ChevronDown, MapPin, MousePointer2 } from "lucide-react"; 
import { motion, useScroll, useTransform, useMouseMove, useSpring } from "framer-motion";

export default function HeroSection() {
  const containerRef = useRef(null);

  // Mouse Parallax Logic
  const x = useSpring(0, { stiffness: 100, damping: 30 });
  const y = useSpring(0, { stiffness: 100, damping: 30 });

  const handleMouseMove = (event) => {
    const { clientX, clientY } = event;
    const { innerWidth, innerHeight } = window;
    x.set((clientX - innerWidth / 2) / 50);
    y.set((clientY - innerHeight / 2) / 50);
  };

  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      const yOffset = -100;
      const y = element.getBoundingClientRect().top + window.scrollY + yOffset;
      window.scrollTo({ top: y, behavior: "smooth" });
    }
  };

  return (
    <section 
      id="hero" 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative w-full min-h-screen bg-[#FCFAFB] flex flex-col font-sans overflow-hidden"
    >
      {/* Background Decorative Blob */}
      <motion.div 
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.4, 0.3] 
        }}
        transition={{ duration: 8, repeat: Infinity }}
        className="absolute top-0 right-0 w-[40%] h-[40%] bg-[#FFF4E6] rounded-bl-[200px] -z-10" 
      />

      <div className="flex-1 grid grid-cols-1 lg:grid-cols-12 w-full items-center gap-8 lg:gap-0">
        
        {/* --- LEFT CONTENT --- */}
        <div className="lg:col-span-5 flex flex-col justify-center z-20 px-6 md:px-12 lg:pl-20 pt-20 lg:pt-0">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-[1px] w-10 bg-[#765229]/30" />
            <span className="text-[10px] uppercase tracking-[0.4em] font-bold text-[#765229]/60">
              The Pinnacle of Living
            </span>
          </motion.div>

          <h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-[#765229] overflow-hidden">
            {["Experience", "Your Air-View"].map((text, i) => (
              <motion.span
                key={i}
                initial={{ y: "100%" }}
                animate={{ y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.2, ease: [0.33, 1, 0.68, 1] }}
                className="block relative"
              >
                {text === "Your Air-View" ? (
                  <span className="relative inline-block">
                    {text}
                    <motion.svg 
                      initial={{ pathLength: 0 }}
                      animate={{ pathLength: 1 }}
                      transition={{ duration: 1, delay: 1 }}
                      className="absolute -bottom-1 left-0 w-full h-2 text-[#dfab5e]/30" 
                      viewBox="0 0 300 12" 
                      fill="none"
                    >
                      <path d="M1 10C50 3 150 3 299 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round"/>
                    </motion.svg>
                  </span>
                ) : text}
              </motion.span>
            ))}
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.8 }}
              transition={{ delay: 1 }}
              className="italic font-light block"
            >
              Living.
            </motion.span>
          </h1>

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
            className="mt-6 text-stone-600 text-base md:text-lg max-w-sm leading-relaxed font-light"
          >
            Where luxury wraps you like air and every home opens to breathtaking panoramic views.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.4 }}
            className="mt-10 flex flex-wrap items-center gap-6"
          >
            {/* Button with Shine Animation */}
            <button 
              onClick={scrollToAbout}
              className="relative overflow-hidden group px-8 py-4 rounded-full bg-[#765229] text-white text-[10px] font-bold uppercase tracking-[0.2em] transition-all shadow-xl"
            >
              <span className="relative z-10 flex items-center gap-2">
                Discover the Ascent 
                <ChevronDown className="w-4 h-4 transition-transform group-hover:translate-y-1" />
              </span>
              <motion.div 
                animate={{ x: ['-100%', '200%'] }}
                transition={{ repeat: Infinity, duration: 3, ease: "linear", repeatDelay: 1 }}
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12"
              />
            </button>
            
            <motion.div 
              whileHover={{ scale: 1.05 }}
              className="flex items-center gap-3 text-[#765229] font-bold text-xs cursor-pointer hover:opacity-70 transition-opacity uppercase tracking-widest"
            >
               <div className="w-10 h-10 rounded-full border border-[#765229]/20 flex items-center justify-center">
                  <MousePointer2 className="w-4 h-4" />
               </div>
               Virtual Tour
            </motion.div>
          </motion.div>
        </div>

        {/* --- RIGHT CONTENT (Image with Mouse Parallax) --- */}
        <div className="lg:col-span-7 relative flex items-center justify-center p-6 md:p-12 lg:p-24">
          
          <motion.div 
            style={{ x, y }} // Parallax attachment
            className="relative w-full max-w-3xl mx-auto overflow-hidden rounded-[3rem] lg:rounded-[4rem] shadow-2xl"
          >
            <div className="aspect-[4/5] md:aspect-square lg:aspect-[4/5] xl:aspect-[3/4] w-full bg-stone-100">
              <motion.img 
                initial={{ scale: 1.2 }}
                animate={{ scale: 1 }}
                transition={{ duration: 2, ease: "easeOut" }}
                src="/hero22.jpg" 
                alt="Luxury Living" 
                className="w-full h-full object-cover object-center"
              />
            </div>

            <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-60" />
          </motion.div>

          {/* Floating Location Card with continuous hover animation */}
          <motion.div 
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -left-2 md:left-6 lg:left-0 bottom-12 lg:bottom-40 bg-white p-5 rounded-[2rem] shadow-2xl border border-stone-50 max-w-[220px] z-30"
          >
            <div className="flex items-center gap-4">
              <div className="bg-[#dfab5e] p-2.5 rounded-xl text-white shadow-lg shrink-0">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h4 className="font-bold text-[#765229] text-sm">Bhubaneswar</h4>
                <p className="text-[11px] text-stone-400 font-medium">Raghunathpur</p>
              </div>
            </div>
          </motion.div>

          {/* Floating Decorative Circle */}
          <motion.div 
             animate={{ rotate: 360 }}
             transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
             className="absolute -right-4 top-1/4 w-24 h-24 border border-[#765229]/10 rounded-full -z-10 flex items-center justify-center"
          >
            <div className="w-2 h-2 bg-[#dfab5e]/40 rounded-full" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}