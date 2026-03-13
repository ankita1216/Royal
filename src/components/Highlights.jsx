"use client";

import React, { useEffect, useRef } from "react";
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
    <section id="specifications" className="w-full bg-[#FAF9F6] py-20 lg:py-32 overflow-hidden font-sans text-[#2D241E]">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* --- HEADER SECTION --- */}
        <div className="max-w-4xl mb-20 animate-fade-in">
          <div className="flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.3em] mb-4" style={{ color: colors.vibrantOrange }}>
            <div className="w-8 h-px bg-[#dfab5e]"></div>
            Architectural Excellence
          </div>
          <h2 className="font-serif text-5xl md:text-7xl mb-8 leading-tight tracking-tight">
            Curated for the <span className="italic" style={{ color: colors.vibrantOrange }}>Extraordinary</span>.
          </h2>
          <p className="text-xl text-gray-500 max-w-2xl leading-relaxed">
            Every detail is meticulously planned to provide a seamless blend of luxury, comfort, and nature.
          </p>
        </div>

        {/* --- HERO IMAGE (CLEAN & FLOATING) --- */}
        <div className="relative mb-32 animate-slide-up">
          <div className="rounded-[2rem] overflow-hidden shadow-2xl">
            <img 
              src="/theme_1.jpg" 
              alt="Luxury Living" 
              className="w-full h-[400px] md:h-[600px] object-cover"
            />
          </div>
          {/* Subtle Accent Box */}
          <div className="absolute -bottom-10 right-10 hidden lg:block bg-[#2D241E] p-10 rounded-2xl text-white max-w-xs shadow-2xl">
            <Sparkles className="mb-4" style={{ color: colors.vibrantOrange }} />
            <p className="text-lg font-medium">Passive Design</p>
            <p className="text-sm text-gray-400 mt-2">Optimized for natural cross-ventilation and daylight harvesting.</p>
          </div>
        </div>

        {/* --- AMENITIES SECTION --- */}
        <div className="space-y-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 border-b border-gray-200 pb-8">
            <h3 className="font-serif text-4xl">Lifestyle Amenities</h3>
            <span className="text-sm font-bold uppercase tracking-widest text-gray-400">20 Unique Experiences</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12">
            {amenities.map((item, idx) => (
              <div 
                key={idx} 
                className="group flex flex-col gap-4 animate-reveal"
                style={{ animationDelay: `${idx * 100}ms` }}
              >
                <div className="relative overflow-hidden w-14 h-14 rounded-full bg-white border border-gray-100 flex items-center justify-center transition-all duration-500 group-hover:bg-[#2D241E] group-hover:scale-110 shadow-sm group-hover:shadow-xl">
                  <div className="group-hover:text-[#dfab5e] text-[#765229] transition-colors duration-300">
                    {React.cloneElement(item.icon, { size: 24, strokeWidth: 1.5 })}
                  </div>
                </div>
                <div>
                  <h5 className="text-lg font-bold mb-1 group-hover:text-[#dfab5e] transition-colors">{item.name}</h5>
                  <div className="h-0.5 w-0 bg-[#dfab5e] transition-all duration-300 group-hover:w-full"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }

        .animate-fade-in {
          animation: fadeIn 1s ease-out forwards;
        }

        .animate-slide-up {
          animation: slideUp 1.2s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        .animate-reveal {
          opacity: 0;
          transform: translateY(30px);
          animation: reveal 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
        }

        @keyframes fadeIn {
          from { opacity: 0; }
          to { opacity: 1; }
        }

        @keyframes slideUp {
          from { opacity: 0; transform: translateY(50px); }
          to { opacity: 1; transform: translateY(0); }
        }

        @keyframes reveal {
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </section>
  );
}