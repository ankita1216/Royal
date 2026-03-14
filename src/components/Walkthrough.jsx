"use client";

import React, { useState, useRef, useEffect } from "react";
import { 
  Play, Pause, Volume2, VolumeX, 
  Building2, Trees, ShieldCheck, Maximize2
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Walkthrough() {
  const [isActive, setIsActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [progress, setProgress] = useState(0);
  const videoRef = useRef(null);

  const colors = {
    blackish: "#765229",
    goldenYellow: "#dfab5e",
    warmCream: "#FFF4E6",
  };

  // Handle video progress for the progress bar
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      const currentProgress = (videoRef.current.currentTime / videoRef.current.duration) * 100;
      setProgress(currentProgress);
    }
  };

  const handleStart = () => {
    setIsActive(true);
    setIsMuted(false);
    setIsPlaying(true);
    videoRef.current?.play();
  };

  const togglePlay = () => {
    if (videoRef.current?.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current?.pause();
      setIsPlaying(false);
    }
  };

  return (
    <section
      id="walkthrough"
      className="w-full py-24 relative overflow-hidden"
      style={{ backgroundColor: colors.blackish }}
    >
      {/* --- BACKGROUND AMBIANCE --- */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-full opacity-10 pointer-events-none">
        <div className="w-full h-full rounded-[100%] blur-[120px]" style={{ background: `radial-gradient(circle, ${colors.goldenYellow} 0%, transparent 70%)` }} />
      </div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* --- HEADER --- */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-xl">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="flex items-center gap-3 text-xs font-black uppercase tracking-[0.5em] mb-4"
              style={{ color: colors.goldenYellow }}
            >
              <div className="w-8 h-px" style={{ backgroundColor: colors.goldenYellow }} />
              Cinematic Tour
            </motion.div>
            <h2 className="text-5xl lg:text-8xl md:text-7xl font-serif italic text-white leading-[1.1]">
              The <span style={{ color: colors.goldenYellow }}>Grand </span> <br /> Walkthrough
            </h2>
          </div>
          <p className="text-white/40 text-lg max-w-xs font-medium leading-relaxed border-l border-white/10 pl-6 hidden md:block">
            Take a virtual flight through the architectural masterpiece that is the Royal Residency.
          </p>
        </div>

        {/* --- CINEMATIC VIDEO CONTAINER --- */}
        <div className="relative aspect-video w-full rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-[0_50px_100px_-20px_rgba(0,0,0,0.5)] bg-black group">
          
          {/* STAGE 1: THE INITIAL COVER */}
          <AnimatePresence>
            {!isActive && (
              <motion.div 
                exit={{ opacity: 0, scale: 1.1 }}
                transition={{ duration: 0.8 }}
                className="absolute inset-0 z-30 flex items-center justify-center"
              >
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-all group-hover:bg-black/40" />
                
                <div className="relative z-40 text-center">
                  <button
                    onClick={handleStart}
                    className="group/play relative w-32 h-32 md:w-44 md:h-44 flex items-center justify-center mb-8"
                  >
                    <div className="absolute inset-0 rounded-full border border-white/20 animate-pulse" />
                    <div className="absolute inset-2 rounded-full border border-white/10" />
                    <div
                      className="w-20 h-20 md:w-28 md:h-28 rounded-full flex items-center justify-center transition-all duration-500 group-hover/play:scale-110 shadow-2xl"
                      style={{ backgroundColor: colors.goldenYellow, color: colors.blackish }}
                    >
                      <Play size={40} className="fill-current ml-2" />
                    </div>
                  </button>
                  <motion.p 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    className="text-xs font-black uppercase tracking-[0.8em] text-white/70"
                  >
                    Enter the Air
                  </motion.p>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* THE VIDEO ELEMENT */}
          <video
            ref={videoRef}
            onTimeUpdate={handleTimeUpdate}
            loop
            muted={isMuted}
            playsInline
            className="w-full h-full object-cover"
          >
            <source src="/Royal Presidency walkthrough.mp4" type="video/mp4" />
          </video>

          {/* CINEMATIC CONTROLS (Only visible after play) */}
          <div className={`absolute inset-0 z-20 transition-opacity duration-700 pointer-events-none ${isActive ? 'opacity-100' : 'opacity-0'}`}>
            
            {/* Top Stats Overlay */}
            <div className="absolute top-8 left-8 right-8 flex justify-between items-start">
              <div className="bg-black/20 backdrop-blur-md rounded-2xl p-4 border border-white/10 hidden md:block">
                <div className="flex items-center gap-6">
                   <div className="flex flex-col">
                      <span className="text-[8px] font-bold uppercase tracking-widest text-white/40">Status</span>
                      <span className="text-xs font-bold text-white flex items-center gap-2">
                         <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" /> LIVE VIEW
                      </span>
                   </div>
                   <div className="w-px h-6 bg-white/10" />
                   <div className="flex flex-col">
                      <span className="text-[8px] font-bold uppercase tracking-widest text-white/40">Resolution</span>
                      <span className="text-xs font-bold text-white">4K ULTRA HD</span>
                   </div>
                </div>
              </div>

              <div className="flex gap-4">
                 <div className="w-10 h-10 rounded-full bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center text-white cursor-pointer hover:bg-white/20 transition-all pointer-events-auto">
                    <Maximize2 size={16} />
                 </div>
              </div>
            </div>

            {/* Bottom Interaction Bar */}
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 bg-gradient-to-t from-black/80 via-black/20 to-transparent">
              <div className="flex items-center justify-between pointer-events-auto">
                
                {/* Play/Pause & Mute */}
                <div className="flex items-center gap-4 bg-black/40 backdrop-blur-md border border-white/10 p-2 rounded-full">
                  <button onClick={togglePlay} className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/10 text-white transition-all">
                    {isPlaying ? <Pause size={20} /> : <Play size={20} className="ml-1" />}
                  </button>
                  <button onClick={() => setIsMuted(!isMuted)} className="w-12 h-12 rounded-full flex items-center justify-center hover:bg-white/10 text-white transition-all">
                    {isMuted ? <VolumeX size={20} /> : <Volume2 size={20} />}
                  </button>
                </div>

                {/* Progress Bar */}
                <div className="flex-grow mx-8 h-1 bg-white/10 rounded-full relative overflow-hidden hidden sm:block">
                  <motion.div 
                    className="absolute top-0 left-0 h-full"
                    style={{ backgroundColor: colors.goldenYellow, width: `${progress}%` }}
                  />
                </div>

                {/* Desktop Features */}
                <div className="hidden lg:flex gap-8">
                  <div className="flex items-center gap-3 text-right">
                    <div>
                       <p className="text-[9px] font-black uppercase text-white/40 tracking-widest">Open Space</p>
                       <p className="text-xs font-bold text-white uppercase">1.3 Acres</p>
                    </div>
                    <Trees size={18} style={{ color: colors.goldenYellow }} />
                  </div>
                  <div className="flex items-center gap-3 text-right">
                    <div>
                       <p className="text-[9px] font-black uppercase text-white/40 tracking-widest">Elevation</p>
                       <p className="text-xs font-bold text-white uppercase">G + 27</p>
                    </div>
                    <Building2 size={18} style={{ color: colors.goldenYellow }} />
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;1,400&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </section>
  );
}