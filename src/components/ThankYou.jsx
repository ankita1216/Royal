"use client";

import React from "react";
import { ArrowUp, MapPin, Award, Sparkles, Building, MoveUpRight } from "lucide-react";
import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";

export default function AboutSubham() {
  const [selectedProject, setSelectedProject] = React.useState("Royal Residency");
  const containerRef = React.useRef(null);
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax and Scale effects
  const yScroll = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const imageScale = useTransform(scrollYProgress, [0, 0.5], [1.1, 1]);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const colors = {
    earth: "#765229",      
    gold: "#dfab5e",  
    cream: "#fdfdfc", 
  };

  const bhubaneswarProjects = [
    { name: "Royal Lagoon", year: "2022" },
    { name: "Royal Heritage", year: "2024" },
    { name: "Royal Residency", year: "2026" },
    { name: "Royal Habitat", year: "Upcoming" },
  ];

  const fadeInUp = {
    initial: { opacity: 0, y: 60 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 1.2, ease: [0.19, 1, 0.22, 1] }
  };

  return (
    <footer ref={containerRef} className="w-full bg-[#fdfdfc] py-24 lg:py-48 font-sans text-[#765229] overflow-hidden relative">
      
      {/* --- BACKGROUND: VERTICAL KINETIC TEXT --- */}
      <div className="absolute left-4 top-0 h-full pointer-events-none overflow-hidden select-none">
        <motion.h2 
          style={{ 
            y: yScroll,
            WebkitTextStroke: "1px #765229" 
          }}
          className="text-[18vw] font-serif font-black text-transparent opacity-[0.05] leading-none whitespace-nowrap rotate-90 origin-top-left"
        >
          BHUBANESWAR • ROYAL • BHUBANESWAR • ROYAL
        </motion.h2>
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- SECTION 1: ASYMMETRIC HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start mb-40 gap-12">
          <motion.div {...fadeInUp} className="max-w-3xl">
            <div className="flex items-center gap-4 mb-8">
               <div className="w-12 h-[1px] bg-earth/20" />
               <span className="text-[9px] font-black uppercase tracking-[1em] text-earth/50">Architectural Narrative</span>
            </div>
            <h2 className="font-serif text-6xl md:text-[10rem] tracking-tighter leading-[0.8] mb-12">
              Sculpting <br />
              <span className="italic font-light text-gold ml-[0.5em]">Eternity.</span>
            </h2>
          </motion.div>
          
          <motion.div {...fadeInUp} className="lg:max-w-xs pt-12">
            <p className="text-sm font-medium leading-relaxed opacity-70 border-l border-earth/10 pl-8">
              In the heart of Bhubaneswar, we don't just build residences; we compose landmarks. Every line is intentional, every space is a sanctuary for the refined soul.
            </p>
          </motion.div>
        </div>

        {/* --- SECTION 2: THE LAYERED GALLERY --- */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-24 mb-48 items-center">
          
          {/* Main Visual */}
          <motion.div 
            className="md:col-span-7 relative"
            {...fadeInUp}
          >
            {/* Coordinate Tag */}
            <div className="absolute -top-10 -right-10 z-20 hidden lg:block">
              <div className="p-8 bg-white shadow-2xl rounded-2xl border border-earth/5">
                <p className="text-[10px] font-black uppercase tracking-widest text-gold mb-2">Coordinates</p>
                <p className="text-sm font-serif italic">20.2961° N, 85.8245° E</p>
              </div>
            </div>

            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] lg:rounded-tr-[12rem] shadow-2xl group relative">
              <motion.img 
                style={{ scale: imageScale }}
                src="/final2.jpg" 
                alt="Architecture" 
                className="w-full h-full object-cover transition-transform duration-1000" 
              />
              <div className="absolute inset-0 bg-earth/10 group-hover:bg-transparent transition-colors duration-700" />
            </div>
            
            {/* Floating Title Card */}
            <div className="absolute -bottom-12 -left-8 lg:left-[-15%] z-20">
              <motion.div 
                whileHover={{ y: -10 }}
                className="bg-[#765229] p-12 lg:p-16 rounded-[3rem] shadow-2xl text-[#fdfdfc] max-w-sm"
              >
                <Sparkles className="w-8 h-8 text-[#dfab5e] mb-8" />
                <h4 className="text-4xl font-serif italic mb-4 leading-none">Royal Presidency</h4>
                <p className="text-[10px] font-black uppercase tracking-[0.4em] opacity-40">The New Zenith of Bhubaneswar</p>
              </motion.div>
            </div>
          </motion.div>

          {/* Minimalist Portfolio List */}
          <motion.div 
            className="md:col-span-5 pt-24 md:pt-0"
            {...fadeInUp}
          >
            <div className="flex flex-col">
               <div className="mb-12">
                  <span className="inline-block px-4 py-1 border border-earth/20 rounded-full text-[9px] font-black uppercase tracking-widest mb-4">Portfolio</span>
                  <h3 className="text-4xl font-serif">Bhubaneswar <br/>Series</h3>
               </div>
               
               {bhubaneswarProjects.map((project, idx) => (
                  <motion.div 
                    key={idx}
                    onMouseEnter={() => setSelectedProject(project.name)}
                    className="group py-8 border-b border-earth/10 flex items-center justify-between cursor-pointer"
                  >
                    <div className="flex flex-col gap-2">
                       <span className={`text-[9px] font-black text-gold transition-opacity duration-500 uppercase tracking-widest ${selectedProject === project.name ? 'opacity-100' : 'opacity-0'}`}>
                          {project.year}
                       </span>
                       <h5 className={`text-2xl font-serif transition-all duration-500 ${selectedProject === project.name ? 'translate-x-4 text-earth opacity-100' : 'opacity-40'}`}>
                          {project.name}
                       </h5>
                    </div>
                    <div className={`w-10 h-10 rounded-full border border-earth/10 flex items-center justify-center transition-all duration-500 ${selectedProject === project.name ? 'bg-earth text-white rotate-45 scale-110 opacity-100' : 'opacity-0'}`}>
                       <MoveUpRight className="w-4 h-4" />
                    </div>
                  </motion.div>
               ))}
            </div>
          </motion.div>
        </div>

        {/* --- SECTION 3: REFINED SIGNATURE FOOTER --- */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-20 border-t border-earth/10 gap-12">
          <div className="flex items-center gap-12 text-[10px] font-black uppercase tracking-[0.4em] text-earth/40">
            <div className="flex items-center gap-3">
               <Building className="w-3 h-3" />
               <span>EST. 2026</span>
            </div>
            <span className="hidden md:block">/</span>
            <span className="hover:text-gold transition-colors cursor-pointer">Royal Presidency Bhubaneswar</span>
          </div>

          <motion.button 
            onClick={scrollToTop}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center gap-4 group"
          >
            <div className="w-16 h-16 rounded-full border border-earth/20 flex items-center justify-center relative overflow-hidden transition-colors group-hover:border-earth">
               <ArrowUp className="w-5 h-5 group-hover:-translate-y-8 transition-transform duration-500" />
               <ArrowUp className="w-5 h-5 absolute translate-y-8 group-hover:translate-y-0 transition-transform duration-500" />
            </div>
            <span className="text-[9px] font-black uppercase tracking-[0.3em] opacity-40 group-hover:opacity-100 transition-opacity">Back to Zenith</span>
          </motion.button>
        </div>
        
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,900;1,400&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </footer>
  );
}