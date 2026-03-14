"use client";

import React, { useState, useEffect } from "react";
import { Sparkles, ArrowUpRight, X } from "lucide-react";

export default function Gallery() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeImage, setActiveImage] = useState(0);

 const colors = {
    blackish: "#765229",      
    vibrantOrange: "#ffdead", 
    goldenYellow: "#dfab5e",  
    deepOrange: "#dfab5e",    // Used in "Contact Now"
    warmCream: "#FFF4E6",     
  };

  const galleryImages = [
    { title: "Gate View", tag: "Gate", src: "/ROYAL PRESEDENSY-GATE (1).webp" },
    { title: "Road View", tag: "Road", src: "/ROYAL PRESEDENSY-ROAD.webp" },
    { title: "Kid's  Area", tag: "Family & Kids", src: "/ROYAL PRESEDENSY-KIDS (1).webp" },
    { title: "Airial Sport View", tag: "Sport View", src: "/ROYAL PRESEDENSY-AIRIAL-SPORT-UP-SECOND (1).webp" },
    { title: " Porch Area", tag: "Porch", src: "/ROYAL PRESEDENSY-PORCH (1).webp" },
    { title: " Porch Entrance", tag: "Porch Entrance", src: "/ROYAL PRESEDENSY-PORCH-ENT (1) (1).webp" },
    { title: "Gymnasium", tag: "Health & Fitness", src: "/Gym-High (1).webp" },
    { title: "Indoor Games Room", tag: "Games Area", src: "/Games Area (1).webp" },
    { title: "Garden Area", tag: "Green", src: "/ROYAL PRESEDENSY-GREEN-B (1).webp" },
    { title: "Presidency Corridor", tag: "Corridor", src: "/Presidency-Corridor (1).jpg" },
    { title: "Living Area", tag: "Living", src: "/Living (1).jpg" },
    { title: "Entrance Lobby", tag: "Lobby", src: "/Entrance Lobby_02 (1).webp" },
    { title: "Kitchen Area", tag: "Kitchen", src: "/Kitchen (1).webp" },
    { title: "Dining Area", tag: "Dining", src: "/Dinning (1).webp" },
    { title: "Bedroom Area", tag: "Bedroom", src: "/Bedroom_02 (1).webp" },
    { title: "Balcony Area", tag: "Balcony", src: "/ROYAL PRESEDENSY-Balcony (1).jpg" },
    { title: "Bathroom ", tag: "Bathrom", src: "/Bathroom (1).jpg" },
  
    
    
    { title: "Master Bedroom", tag: "Bedroom", src: "/Master Bedroom (1).webp" }
  ];

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "unset";
  }, [isOpen]);

  return (
    // ✅ CHANGED: Reduced vertical padding for mobile (py-16)
    <section id="gallery" className="relative w-full bg-[#fafaf8] py-20 lg:py-32 font-sans text-[#041a14]">
      
      {/* --- HEADER --- */}
      <div className="max-w-7xl mx-auto px-6 mb-12 lg:mb-20">
        <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 md:gap-8">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 text-xs lg:text-[11px] font-black uppercase tracking-[0.3em] lg:tracking-[0.5em] mb-4 lg:mb-8" style={{ color: colors.deepOrange }}>
              <Sparkles className="w-4 h-4" style={{ color: colors.goldenYellow
               }} />
              The Visual Journey
            </div>
            {/* ✅ CHANGED: Responsive font size (text-5xl mobile vs text-100px desktop) */}
            <h2 className="font-serif text-5xl md:text-8xl lg:text-8xl leading-[0.9] lg:leading-[0.85] text-[#041a14] mb-4 lg:mb-2">
              The <span className="italic font-light" style={{ color: colors.darkOrange }}>Library.</span>
            </h2>
          </div>
          <p className="text-[#041a14]/60 max-w-sm text-base text-lg font-medium border-l-4 pl-6 lg:pl-8 py-2" style={{ borderLeftColor: colors.goldenYellow}}>
            A glimpse into the refined architecture of Royal Presidency.
          </p>
        </div>
      </div>

      {/* --- GRID --- */}
      <div className="max-w-7xl mx-auto px-4 lg:px-6">
        {/* ✅ CHANGED: Single column mobile, adjusted gaps */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {galleryImages.slice(0, 6).map((image, idx) => (
            <div 
              key={idx} 
              // ✅ CHANGED: Rounded corners adjusted for mobile
              className="group relative rounded-[2rem] lg:rounded-[2.5rem] overflow-hidden bg-white aspect-[4/3] cursor-pointer shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl"
              onClick={() => { setActiveImage(idx); setIsOpen(true); }}
            >
              <img 
                src={image.src} 
                alt={image.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" 
              />
              <div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" style={{ backgroundColor: colors.blackish }}></div>
              <div className="absolute inset-0 p-6 lg:p-10 flex flex-col justify-end">
                <span className="text-[10px] lg:text-[10px] font-black uppercase tracking-[0.2em] mb-2" style={{ color: colors.goldenYellow }}>{image.tag}</span>
                <h3 className="text-white font-serif text-2xl lg:text-3xl italic">{image.title}</h3>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 lg:mt-20 flex justify-center">
          <button 
            onClick={() => setIsOpen(true)}
            className="group flex items-center gap-4 border-2 px-8 lg:px-12 py-4 lg:py-5 rounded-full text-[10px] lg:text-xs font-bold uppercase tracking-widest transition-all duration-300"
            style={{ borderColor: colors.blackish, color: colors.blackish }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = colors.blackish;
              e.currentTarget.style.color = colors.goldenYellow;
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "transparent";
              e.currentTarget.style.color = colors.blackish;
            }}
          >
            Open Full Gallery <ArrowUpRight className="w-4 h-4 lg:w-5 lg:h-5 group-hover:rotate-45 transition-transform" />
          </button>
        </div>
      </div>

      {/* --- SIDEBAR OVERLAY --- */}
      <div 
        className={`fixed inset-0 z-[100] ${isOpen ? "visible" : "invisible"}`}
        style={{ transition: 'visibility 0s linear 0s' }}
      >
        {/* Backdrop */}
        <div 
          className={`absolute inset-0 backdrop-blur-md transition-opacity duration-300 ease-out ${isOpen ? "opacity-100" : "opacity-0"}`}
          style={{ backgroundColor: `${colors.blackish}E6` }} 
          onClick={() => setIsOpen(false)}
        ></div>

        {/* Sidebar Container */}
        <div className={`absolute right-0 top-0 h-full w-full lg:w-[450px] bg-white shadow-2xl transform transition-transform duration-400 cubic-bezier(0.2, 0, 0, 1) flex flex-col z-[110] ${isOpen ? "translate-x-0" : "translate-x-full"}`}>
          
          {/* Sidebar Header */}
          <div className="p-6 lg:p-8 flex justify-between items-center border-b border-gray-100 shrink-0">
            <div className="font-serif" style={{ color: colors.blackish }}>
              <p className="font-bold text-lg lg:text-xl uppercase tracking-tighter">Library View</p>
              <p className="text-[10px] tracking-widest opacity-60">Royal Presidency</p>
            </div>
            <button 
              onClick={() => setIsOpen(false)} 
              className="w-10 h-10 lg:w-12 lg:h-12 rounded-full bg-gray-100 flex items-center justify-center transition-colors active:scale-90 hover:text-white"
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = colors.mediumOrange}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#f3f4f6"}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Sidebar Scrollable Content */}
          <div className="flex-1 overflow-y-auto p-4 lg:p-6 space-y-4 scroll-smooth">
            
            {activeImage !== 0 && (
            <div className="lg:hidden w-full aspect-[4/3] rounded-2xl overflow-hidden shadow-lg relative mb-6 border-2" style={{ borderColor: colors.goldenYellow}}>
               <img src={galleryImages[activeImage].src} alt="Active" className="w-full h-full object-cover" />
               <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <p className="text-[9px] text-[#F2A71D] font-bold uppercase tracking-widest mb-1">{galleryImages[activeImage].tag}</p>
                  <p className="text-white font-serif text-xl italic">{galleryImages[activeImage].title}</p>
               </div>
            </div>
            )}
            {/* Image List */}
            {/* Image List */}
{galleryImages.map((image, idx) => {
  

  return (
    <div 
      key={idx}
      className={`group relative rounded-xl lg:rounded-2xl overflow-hidden cursor-pointer border-4 transition-all duration-200 ${
        activeImage === idx
          ? "border-[#F2A71D] opacity-100 scale-[1.03]"
          : "border-transparent opacity-60 hover:opacity-100"
      }`}
      onClick={() => setActiveImage(idx)}
    >
      <img src={image.src} alt="" className="w-full aspect-video object-cover" />
     <div className="absolute bottom-3 left-3 text-white">
  <p className="text-[10px] text-[#F2A71D]">{image.tag}</p>
  <p className="italic">{image.title}</p>
</div>
    </div>
  );
})}
</div>
                
          {/* Sidebar Footer */}
          <div className="p-6 lg:p-8 shrink-0" style={{ backgroundColor: colors.blackish, color: colors.goldenYellow }}>
            <p className="text-[9px] lg:text-[10px] font-black uppercase tracking-widest mb-2 lg:mb-4 opacity-50">Currently Exploring</p>
            <h4 className="font-serif text-2xl lg:text-3xl italic mb-4 lg:mb-6 leading-none text-white">{galleryImages[activeImage].title}</h4>
            <button 
              className="w-full py-4 lg:py-5 rounded-xl lg:rounded-2xl font-bold text-[10px] lg:text-xs uppercase tracking-[0.2em] hover:scale-[1.02] transition-transform"
              style={{ backgroundColor: colors.mediumOrange, color: "white" }}
            >
              Download Brochure
            </button>
          </div>
        </div>

        {/* Center Preview - Desktop Only */}
        <div className={`hidden lg:flex absolute left-0 top-0 h-full w-[calc(100%-450px)] items-center justify-center p-20 pointer-events-none transition-all duration-300 ${isOpen ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}>
           <div className="relative w-full max-w-5xl shadow-2xl rounded-[4rem] overflow-hidden aspect-[16/9]">
              <img 
                src={galleryImages[activeImage].src} 
                alt="Selected View" 
                className="w-full h-full object-cover"
              />
              <div className="absolute bottom-12 left-12 text-white drop-shadow-lg">
                <p className="text-[10px] uppercase tracking-[0.4em] mb-2" style={{ color: colors.goldenYellow }}>{galleryImages[activeImage].tag}</p>
                <h3 className="text-5xl font-serif italic leading-none">{galleryImages[activeImage].title}</h3>
              </div>
           </div>
        </div>
      </div>

      <style>{`
        .font-serif { font-family: 'Playfair Display', serif; }
        .cubic-bezier { transition-timing-function: cubic-bezier(0.2, 0, 0, 1); }
      `}</style>
    </section>
  );
}