"use client";

import React from "react";
import { 
  Award, Waves, Dumbbell, Trees, Heart, Users, Car, Lock, Coffee, Plus, 
  Gamepad2, Bike, Flower2, Layout, Landmark, Utensils, Sparkles, Zap
} from "lucide-react";

export default function Specifications() {
  const colors = {
    blackish: "#2D241E",      
    vibrantOrange: "#dfab5e",  
    darkOrange: "#765229",    
    warmCream: "#FAF9F6",     
  };

  const amenities = [
    { name: "AC Grand Lobby", icon: <Landmark /> },
    { name: "Balinese Landscaping", icon: <Trees /> },
    { name: "Roof-top Swimming Pool", icon: <Waves /> },
    { name: "Kids’ Splash Pool", icon: <Waves /> },
    { name: "AC Gym", icon: <Dumbbell /> },
    { name: "Indoor Games Room", icon: <Gamepad2 /> },
    { name: "Sports Court", icon: <Zap /> },
    { name: "Jogging Track", icon: <Bike /> },
    { name: "Yoga Lawn", icon: <Heart /> },
    { name: "Stepped Sit-Out", icon: <Layout /> },
    { name: "Temple", icon: <Landmark /> },
    { name: "Social Garden", icon: <Flower2 /> },
    { name: "Multipurpose Lawn", icon: <Trees /> },
    { name: "Clubhouse Lounge", icon: <Coffee /> },
    { name: "Banquet Walkway", icon: <Utensils /> },
    { name: "Kids’ Play Area", icon: <Users /> },
    { name: "Visitor Parking", icon: <Car /> },
    { name: "24x7 Security", icon: <Lock /> },
    { name: "Cabanas", icon: <Flower2 /> },
    { name: "Drop-Off Zone", icon: <Car /> },
  ];

  return (
    <section id="specifications" className="w-full bg-[#FAF9F6] py-16 lg:py-24 overflow-hidden font-sans text-[#2D241E]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-8 mb-16">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 text-[10px] font-black uppercase tracking-[0.4em] mb-6" style={{ color: colors.darkOrange }}>
              <Award className="w-5 h-5 animate-pulse" />
              Two Decades of Architectural Excellence
            </div>
            <h2 className="font-serif text-5xl md:text-7xl lg:text-[85px] leading-[0.9] tracking-tighter">
              A Life of <span className="italic font-light" style={{ color: colors.vibrantOrange }}>Unmatched</span> <br />
              Privilege.
            </h2>
          </div>
          <div className="max-w-sm">
             <p className="text-[#2D241E]/70 text-lg font-medium leading-relaxed border-l-2 pl-6" style={{ borderColor: colors.vibrantOrange }}>
                Curated experiences designed for those who settle for nothing less than the extraordinary.
             </p>
          </div>
        </div>

        {/* --- FULL WIDTH HERO IMAGE (NATURAL PROPORTIONS) --- */}
        <div className="relative w-full mb-24 group">
          <div className="overflow-hidden rounded-[2rem] lg:rounded-[3rem] shadow-2xl bg-white">
            <img 
              src="/theme_1.jpg" 
              alt="Project Masterpiece" 
              className="w-full h-auto block transition-transform duration-[6000ms] group-hover:scale-105"
            />
          </div>
          
          {/* Floating Feature Card */}
          <div className="absolute -bottom-8 left-6 right-6 md:left-auto md:right-12 bg-white p-6 md:p-8 rounded-3xl shadow-2xl flex items-center gap-6 z-10 border border-gray-100 max-w-md">
             <div className="w-16 h-16 rounded-2xl flex items-center justify-center shrink-0 animate-pulse-slow" style={{ backgroundColor: colors.blackish }}>
                <Sparkles className="w-8 h-8" style={{ color: colors.vibrantOrange }} />
             </div>
             <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-1">Architecture</p>
                <p className="text-base md:text-lg font-bold leading-tight">Designed for maximum natural light and ventilation.</p>
             </div>
          </div>
        </div>

        {/* --- AMENITIES GRID WITH CARD ANIMATIONS --- */}
        <div className="pt-10">
          <div className="flex items-center gap-4 mb-16">
            <h4 className="font-serif text-3xl md:text-4xl italic whitespace-nowrap">The Amenities</h4>
            <div className="h-px w-full bg-gray-200" />
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {amenities.map((item, idx) => (
              <div 
                key={idx} 
                className="amenity-card group flex items-center gap-5 p-6 rounded-2xl bg-white border border-gray-100 transition-all duration-500 hover:border-[#dfab5e] hover:shadow-[0_20px_40px_rgba(223,171,94,0.1)] hover:-translate-y-2"
                style={{ animationDelay: `${idx * 70}ms` }}
              >
                <div 
                  className="w-12 h-12 shrink-0 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:bg-[#dfab5e] group-hover:text-white"
                  style={{ backgroundColor: `${colors.vibrantOrange}15`, color: colors.darkOrange }}
                >
                  {React.cloneElement(item.icon, { size: 20, strokeWidth: 2, className: "transition-transform duration-500 group-hover:scale-110" })}
                </div>
                <div className="flex flex-col">
                  <span className="text-sm md:text-base font-bold text-[#2D241E]/80 group-hover:text-black transition-colors">
                    {item.name}
                  </span>
                </div>
                <div className="ml-auto opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-2 group-hover:translate-x-0">
                  <Plus size={16} className="text-[#dfab5e]" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }

        /* Animation for cards entering the screen */
        .amenity-card {
          opacity: 0;
          transform: translateY(20px);
          animation: revealCard 0.6s ease forwards;
        }

        @keyframes revealCard {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes pulse-slow {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(0.95); }
        }

        .animate-pulse-slow {
          animation: pulse-slow 3s infinite ease-in-out;
        }
      `}</style>
    </section>
  );
}