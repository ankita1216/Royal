"use client";

import React from "react";
import { ArrowUpRight, Leaf, MapPin, Building2 } from "lucide-react";

// ✅ Receive onOpenPopup from App.js
export default function ActiveLivingHero({ onOpenPopup }) {

  const colors = {
    blackish: "#765229",      
    vibrantOrange: "#ffdead", 
    goldenYellow: "#dfab5e",  
    deepOrange: "#dfab5e",    // Used in "Contact Now"
    warmCream: "#FFF4E6",     
  };

  return (
    <div id="about" className="bg-[#fafaf8] font-sans text-[#041a14] overflow-x-hidden relative">
      
      {/* --- TICKER --- */}
      <div className="w-full py-4 overflow-hidden border-b" style={{ backgroundColor: colors.blackish, borderBottomColor: `${colors.brightOrange}20` }}>
        <div className="flex whitespace-nowrap animate-marquee">
          {[1, 2, 3].map((i) => (
            <div key={i} className="flex items-center text-xs font-bold uppercase tracking-[0.3em] px-4 text-white">
              <span className="mx-8">Air View Living</span>
              <Leaf className="w-4 h-4 text-white " />
              <span className="mx-8">Luxury Wrapped in Nature</span>
              <Leaf className="w-4 h-4 text-white " />
              <span className="mx-8">Where Lifestyle Meets Wellness</span>
              <Leaf className="w-4 h-4 text-white" />
            </div>
          ))}
        </div>
      </div>

      <main className="relative max-w-7xl mx-auto px-6 py-12 lg:py-20 flex flex-col items-center">
        
        {/* --- LEFT IMAGE --- */}
        <div className="absolute left-0 xl:left-[2%] top-[25%] w-40 h-56 rounded-[3rem] overflow-hidden shadow-2xl hidden xl:block hover:scale-105 transition-transform duration-500 z-0">
          <img 
            src="/ROYAL PRESEDENSY-GATE.png" 
            alt="Modern Architecture" 
            className="w-full h-full object-cover opacity-100" 
          />
          <div className="absolute bottom-4 left-4 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-tighter text-black">LB+UB+G+27</div>
        </div>
        
        {/* --- RIGHT IMAGE --- */}
        <div className="absolute right-0 xl:right-[2%] top-[20%] w-44 h-44 rounded-full overflow-hidden shadow-2xl hidden xl:block border-6 border-white hover:rotate-3 transition-transform duration-500 z-0">
          <img 
            src="/ROYAL PRESEDENSY-PORCH.png" 
            alt="Wellness Lifestyle" 
            className="w-full h-full object-cover object-[50%_30%]" 
          />
        </div>

        {/* --- MAIN CONTENT --- */}
        <div className="flex flex-col items-center text-center relative z-10 w-full max-w-4xl">
          
          <div className="flex items-center gap-3 text-xs font-bold uppercase tracking-[0.4em] mb-4" style={{ color: colors.darkOrange }}>
            <MapPin className="w-3 h-3" />
            Raghunathpur, Bhubaneswar

          </div>

          <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1] mb-6" style={{ color: colors.blackish }}>
           Royal <br />
            <span className="italic font-light" style={{ color: colors.deepOrange }}>Presidency</span>
          </h1>

          <div className="max-w-2xl mb-12">
            <p className="text-lg md:text-xl font-medium leading-relaxed" style={{ color: colors.blackish }}>
              The Royal Presidency is a landmark of refined living, nestled in one
of Bhubaneswar’s most sought-after neighborhoods. Designed to
elevate every moment, it offers spacious, airy residences that open
up to panoramic views from multiple balconies.
            </p>
          </div>

          {/* --- GRID --- */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12 w-full">
            <div className="p-6 rounded-[2rem] border border-orange-100 flex flex-col items-center justify-center shadow-sm bg-white hover:bg-orange-50 transition-colors" >
               <span className="block text-3xl font-serif font-bold italic" style={{ color: colors.deepOrange }}>180°</span>
               <span className="text-[10px] uppercase font-bold tracking-widest opacity-60 text-center">View from Each
Apartments
</span>
            </div>
            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col items-center justify-center" style={{ backgroundColor: colors.blackish }}>
               <span className="block text-3xl font-serif font-bold italic text-white" >30+</span>
               <span className="text-[10px] uppercase font-bold tracking-widest opacity-60 text-center text-white">World-Class
Amenities</span>
            </div>
            <div className="p-6 rounded-[2rem] flex flex-col items-center justify-center shadow-xl bg-white" >
               <span className="block text-xl font-serif font-bold italic " style={{ color: colors.deepOrange }}>4/5</span>
               <span className=" text-[10px] uppercase font-bold tracking-widest opacity-60 text-center">Balconies in
Every Apartment</span>
            </div>
            <div className="bg-white p-6 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col items-center justify-center" style={{ backgroundColor: colors.blackish }}>
               <span className="block text-xl font-serif font-bold italic text-white" >LB+UB+G+27</span>
               <span className="text-[10px] uppercase font-bold tracking-widest opacity-60 text-center text-white">

</span>
            </div>
          </div>

          {/* --- ACTION BUTTON --- */}
          <div className="flex flex-col items-center gap-8">
            <button 
              /* ✅ UPDATED: Trigger Popup */
              onClick={onOpenPopup}
              className="group flex items-center gap-3 px-10 py-5 rounded-full text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:scale-105 shadow-[0_20px_40px_rgba(216,67,21,0.2)] text-white"
              style={{ backgroundColor: colors.deepOrange }}
            >
              Start Your Journey 
              <ArrowUpRight className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>

        <div className="w-full max-w-xs h-[1px] bg-black/10 mt-16"></div>
      </main>

      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-33.33%); }
        }
        .animate-marquee {
          animation: marquee 40s linear infinite;
        }
        .font-serif {
          font-family: 'Playfair Display', serif;
        }
      `}</style>
    </div>
  );
}