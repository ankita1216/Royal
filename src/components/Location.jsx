"use client";

import React from "react";
import { ArrowUp, MapPin, Navigation } from "lucide-react";

export default function Location() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Official Brand Palette
 const colors = {
    blackish: "#765229",      
    vibrantOrange: "#ffdead", 
    goldenYellow: "#dfab5e",  
    deepOrange: "#dfab5e",    // Used in "Contact Now"
    warmCream: "#FFF4E6",     
  };

  return (
    <footer id="location" className="w-full py-24 px-6 md:px-12 lg:px-24 font-sans" style={{ backgroundColor: colors.blackish }}>
      <div className="max-w-7xl mx-auto">
        
        {/* --- PART 1: PROJECT IDENTITY --- */}
        <div className="border-b border-white/10 pb-12 mb-12">
          <p className="text-xs font-black uppercase tracking-[0.5em]  mb-4 text-white" >
            Strategically Positioned
          </p>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl tracking-tighter uppercase leading-none text-white">
            Project <br />
            <span className="italic font-light" style={{ color: colors.darkOrange }}>Location.</span>
          </h2>
        </div>

        {/* --- PART 2 & 3: ADDRESS & MAP --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 mb-20">
          
          {/* ADDRESS & SPECS COLUMN */}
          <div className="flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-2 mb-6">
                <MapPin className="w-4 h-4 text-white"  />
                <p className="text-[10px] font-black uppercase tracking-widest  text-white">The Address</p>
              </div>
              <p className="text-xl md:text-2xl font-medium leading-relaxed mb-8 text-white">
                Royal Presidency, <br />
                Raghunathpur, Bhubaneswar,  <br />
               Odisha 751024
              </p>
            </div>
            
            <div className="pt-8 border-t border-white/5">
              <p className="text-[10px] font-black uppercase tracking-widest  mb-4 text-white">Home Types</p>
              <div className="flex gap-6 text-xl font-serif italic text-white" >
                <span>3 BHK</span>
                <span>4 BHK</span>
                
              </div>
              <p className="mt-4 text-[10px] font-black uppercase tracking-[0.3em]  text-white">
                LB+UB+G+27 · High Resident-to-open Space Ratio
              </p>
            </div>
          </div>

          {/* GOOGLE MAPS COLUMN */}
          <div className="lg:col-span-2">
            <div className="relative w-full h-[350px] md:h-[450px] rounded-[3rem] overflow-hidden border border-white/10 group grayscale transition-all duration-700 hover:grayscale-0 shadow-2xl">
              <iframe 
                src="https://www.google.com/maps?q=Royal+Presidency+Nandankanan+Road+Bhubaneswar&output=embed" 
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen="" 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
                title="Subham Kishori Heights Location"
              />
              
              {/* Directions Button Overlay */}
              <a 
                href="https://www.google.com/maps?q=20.3649,85.8339" 
                target="_blank" 
                rel="noopener noreferrer"
                className="absolute bottom-8 right-8 px-6 py-4 rounded-full shadow-2xl flex items-center gap-3 font-bold text-[10px] uppercase tracking-widest hover:scale-105 transition-transform"
                style={{ backgroundColor: colors.mediumOrange, color: "white" }}
              >
                <Navigation className="w-4 h-4" />
                Open in Maps
              </a>
            </div>
          </div>
        </div>

        {/* --- FOOTER ACTION --- */}
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/10 gap-8">
          <div className="flex flex-col gap-1">
            <p className="text-[10px] font-black uppercase tracking-widest  text-white">
               20 Years of Glorious Journey
            </p>
            <p className="text-[10px] font-black uppercase tracking-widest  text-white">
              108 Curated Air-Conditioned Apartments · Signature Tower
            </p>
          </div>

          <button 
            onClick={scrollToTop}
            className="group flex items-center gap-4 bg-white/5 px-8 py-4 rounded-full transition-all duration-500 border border-white/10"
            onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.brightOrange;
                e.currentTarget.style.borderColor = colors.brightOrange;
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)";
                e.currentTarget.style.borderColor = "rgba(255, 255, 255, 0.1)";
            }}
          >
            
            <ArrowUp className="w-4 h-4 text-white group-hover:text-black group-hover:-translate-y-1 transition-transform" />
          </button>
        </div>
        
      </div>

      <style>{`
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </footer>
  );
}