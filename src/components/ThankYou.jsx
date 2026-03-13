"use client";

import React, { useState, useRef } from "react";
import { ArrowUp, Building, MoveUpRight, Sparkles, Instagram, Linkedin, Globe, Mail, Phone, MapPin } from "lucide-react";
import { motion } from "framer-motion";

export default function AboutSubham() {
  const [hoveredProject, setHoveredProject] = useState("Royal Residency");
  const containerRef = useRef(null);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const colors = {
    blackish: "#765229",      
    vibrantOrange: "#ffdead", 
    goldenYellow: "#dfab5e",  
    deepOrange: "#dfab5e",    
    warmCream: "#FFF4E6",     
  };

  const bhubaneswarProjects = [
    { name: "Royal Lagoon", year: "2022", type: "Luxury Living" },
    { name: "Royal Heritage", year: "2024", type: "Classic Suites" },
    { name: "Royal Residency", year: "2026", type: "Signature High-rise" },
    { name: "Royal Habitat", year: "Upcoming", type: "Modern Eco-Homes" },
  ];

  return (
    <footer ref={containerRef} className="w-full py-24 pb-12 font-sans overflow-hidden relative border-t" style={{ backgroundColor: colors.warmCream, color: colors.blackish, borderColor: `${colors.blackish}20` }}>
      
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mb-32 items-end">
          <div className="lg:col-span-8">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="flex items-center gap-4 mb-6"
            >
               <div className="w-12 h-[1px]" style={{ backgroundColor: colors.goldenYellow }} />
               <span className="text-[10px] font-black uppercase tracking-[0.5em]" style={{ color: colors.goldenYellow }}>The Visionary Legacy</span>
            </motion.div>
            <motion.h2 
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="font-serif text-6xl md:text-8xl lg:text-[110px] leading-[0.85] tracking-tighter"
            >
              Beyond <br /> 
              <span className="italic font-light" style={{ color: colors.goldenYellow }}>Boundaries.</span>
            </motion.h2>
          </div>
          
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-4"
          >
            <p className="text-lg font-medium leading-relaxed opacity-70 border-l-2 pl-6" style={{ borderColor: colors.goldenYellow }}>
              Over 20 years of crafting the Bhubaneswar skyline. We don't just build homes; we build the future of urban living.
            </p>
          </motion.div>
        </div>

        {/* --- CONTENT GRID --- */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 mb-40">
          
          {/* Projects & Contact Info */}
          <div className="lg:col-span-7 space-y-20">
            {/* Projects Section */}
            <div>
              <h4 className="text-xs font-black uppercase tracking-widest opacity-40 mb-10">Curated Landmarks</h4>
              <div className="space-y-2">
                {bhubaneswarProjects.map((project, idx) => (
                  <div 
                    key={idx}
                    onMouseEnter={() => setHoveredProject(project.name)}
                    className="group py-6 border-b flex items-center justify-between cursor-pointer transition-all"
                    style={{ borderColor: `${colors.blackish}15` }}
                  >
                    <div className="flex flex-col gap-1">
                      <span className="text-[10px] font-bold opacity-0 group-hover:opacity-100 transition-opacity tracking-widest" style={{ color: colors.goldenYellow }}>
                        {project.year} — {project.type}
                      </span>
                      <h3 className={`text-3xl md:text-4xl font-serif transition-all duration-500 ${hoveredProject === project.name ? 'translate-x-2' : 'opacity-30'}`}>
                        {project.name}
                      </h3>
                    </div>
                    <MoveUpRight className={`w-6 h-6 transition-all duration-500 ${hoveredProject === project.name ? 'opacity-100' : 'opacity-0'}`} style={{ color: colors.goldenYellow }} />
                  </div>
                ))}
              </div>
            </div>

            {/* Contact Info Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 pt-10 border-t" style={{ borderColor: `${colors.blackish}10` }}>
               <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <MapPin size={18} style={{ color: colors.goldenYellow }} className="shrink-0 mt-1" />
                    <p className="text-sm font-medium opacity-80">Plot No. 755, 755/4117
Nandankanan Road, Opposite HP Petrol Pump
<br />Raghunathpur, Bhubaneswar, Odisha - 751024</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Phone size={18} style={{ color: colors.goldenYellow }} className="shrink-0" />
                    <p className="text-sm font-medium opacity-80">+91 9668496111</p>
                  </div>
               </div>
               <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <Mail size={18} style={{ color: colors.goldenYellow }} className="shrink-0" />
                    <p className="text-sm font-medium opacity-80">info@royalpresidency.com</p>
                  </div>
                  <div className="flex items-center gap-4">
                    <Globe size={18} style={{ color: colors.goldenYellow }} className="shrink-0" />
                    <p className="text-sm font-medium opacity-80">www.royalpresidency.com</p>
                  </div>
               </div>
            </div>
          </div>

          {/* Restored Image Section */}
          <div className="lg:col-span-5 hidden lg:block">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="sticky top-10 aspect-[4/5] rounded-[2.5rem] overflow-hidden shadow-2xl" 
              style={{ backgroundColor: colors.blackish }}
            >
              <img 
                src="/final2.jpg" 
                alt="Architecture" 
                className="w-full h-full object-cover grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-1000"
              />
              <div className="absolute bottom-10 left-10 z-20 text-white">
                <Sparkles className="w-8 h-8 mb-4 animate-pulse" style={{ color: colors.goldenYellow }} />
                <p className="text-[10px] font-black uppercase tracking-widest opacity-60">Currently Viewing</p>
                <h5 className="text-4xl font-serif italic">{hoveredProject}</h5>
              </div>
            </motion.div>
          </div>
        </div>

        {/* --- FOOTER BOTTOM --- */}
        <div className="pt-12 border-t" style={{ borderColor: `${colors.blackish}15` }}>
          <div className="flex flex-col md:flex-row justify-between items-center gap-8">
            <div className="flex flex-col items-center md:items-start gap-4">
              <div className="flex items-center gap-2 font-serif text-2xl font-bold italic">
                Royal Presidency <span className="font-sans not-italic text-xs tracking-tighter uppercase font-black" style={{ color: colors.goldenYellow }}>Developers</span>
              </div>
              <div className="flex gap-6 opacity-40">
                <Instagram className="w-4 h-4 hover:opacity-100 cursor-pointer transition-opacity" />
                <Linkedin className="w-4 h-4 hover:opacity-100 cursor-pointer transition-opacity" />
              </div>
            </div>

            <motion.button 
              onClick={scrollToTop}
              whileHover={{ y: -5 }}
              className="flex flex-col items-center gap-3 group"
            >
              <div className="w-12 h-12 rounded-full border flex items-center justify-center transition-colors" style={{ borderColor: `${colors.blackish}30` }}>
                <ArrowUp className="w-4 h-4 group-hover:translate-y-[-2px] transition-transform" />
              </div>
              <span className="text-[9px] font-black uppercase tracking-widest opacity-40">Back to Top</span>
            </motion.button>

            <div className="text-[10px] font-bold uppercase tracking-widest opacity-40 text-center md:text-right">
              <div className="flex items-center gap-2 justify-center md:justify-end mb-1">
                <Building className="w-3 h-3" />
                <span>Bhubaneswar HQ</span>
              </div>
              © 2026 Royal Presidency.
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,900;1,400&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </footer>
  );
}