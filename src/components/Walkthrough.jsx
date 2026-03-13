"use client";

import React, { useState, useRef, useEffect } from "react";
import { 
  Play, Pause, Volume2, VolumeX, 
  Building2, Trees, ShieldCheck 
} from "lucide-react";

export default function Walkthrough() {
  const [isActive, setIsActive] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [isMobile, setIsMobile] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const colors = {
    blackish: "#765229",
    goldenYellow: "#dfab5e",
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
      className="w-full py-20 font-sans"
      style={{ backgroundColor: colors.blackish }}
    >

      {/* HEADING ABOVE VIDEO */}
      <div className="text-center mb-14 px-4">
        <span
          className="text-[10px] font-black uppercase tracking-[0.5em]"
          style={{ color: colors.goldenYellow }}
        >
          Experience
        </span>

        <h2 className="text-3xl md:text-5xl font-serif italic text-white mt-3">
          Walkthrough
        </h2>
      </div>

      {/* VIDEO SECTION */}
      <div className="relative w-full h-[60vh] md:h-[80vh] overflow-hidden flex items-center justify-center">

        {/* STAGE 1 OVERLAY */}
        <div
          className={`absolute inset-0 z-20 flex items-center justify-center transition-all duration-1000 ease-in-out
          ${isActive ? "opacity-0 pointer-events-none scale-110" : "opacity-100"}`}
        >
          <div className="absolute inset-0 bg-black/50 backdrop-blur-[4px]" />

          <div className="relative z-30 text-center flex flex-col items-center px-4">
            <button
              onClick={handleStart}
              className="group relative w-28 h-28 md:w-40 md:h-40 flex items-center justify-center mb-8"
            >
              <div
                className="absolute inset-0 rounded-full border animate-ping"
                style={{ borderColor: `${colors.goldenYellow}40` }}
              />
              <div
                className="w-full h-full rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110 shadow-2xl"
                style={{
                  backgroundColor: colors.goldenYellow,
                  color: colors.blackish,
                }}
              >
                <Play className="w-10 h-10 md:w-14 md:h-14 fill-current ml-2" />
              </div>
            </button>

            <h2 className="font-serif text-5xl md:text-8xl text-white italic leading-none mb-6">
              Witness the <br />
              <span
                className="not-italic font-bold uppercase tracking-tighter"
                style={{ color: colors.goldenYellow }}
              >
                Air.
              </span>
            </h2>

            <div className="flex items-center gap-4">
              <div className="h-[1px] w-8 bg-white/30" />
              <p className="text-[10px] font-black uppercase tracking-[0.6em] text-white/60">
                Start Immersive Tour
              </p>
              <div className="h-[1px] w-8 bg-white/30" />
            </div>
          </div>
        </div>

        {/* VIDEO */}
        <video
          key={isMobile ? "mobile" : "desktop"}
          ref={videoRef}
          loop
          muted={isMuted}
          playsInline
          className="w-full h-full object-cover"
        >
          <source
            src="/Royal Presidency walkthrough.mp4"
            type="video/mp4"
          />
        </video>

        {/* CONTROLS */}
        <div
          className={`absolute bottom-6 md:bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 md:gap-6 transition-all duration-1000 delay-300 ${
            isActive
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="flex items-center bg-black/40 backdrop-blur-xl border border-white/10 rounded-full p-2 gap-2">

            <button
              onClick={togglePlay}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:bg-white/10 text-white"
            >
              {isPlaying ? (
                <Pause className="w-5 h-5" />
              ) : (
                <Play className="w-5 h-5 ml-1" />
              )}
            </button>

            <button
              onClick={() => setIsMuted(!isMuted)}
              className="w-12 h-12 rounded-full flex items-center justify-center transition-all hover:bg-white/10 text-white"
            >
              {isMuted ? (
                <VolumeX className="w-5 h-5" />
              ) : (
                <Volume2 className="w-5 h-5" />
              )}
            </button>

          </div>
        </div>

        {/* INFO OVERLAY DESKTOP */}
        {!isMobile && (
          <div
            className={`absolute right-12 top-1/2 -translate-y-1/2 flex flex-col gap-8 transition-all duration-1000 delay-500 ${
              isActive
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {[
              { Icon: Building2, label: "Scale", val: "LB+UB+G+27" },
              { Icon: Trees, label: "Open Space", val: "1.3 Acres of Space" },
              { Icon: ShieldCheck, label: "Safety", val: "Signature Tower" },
            ].map((item, idx) => (
              <div
                key={idx}
                className="flex flex-col items-end text-right group"
              >
                <item.Icon
                  className="w-5 h-5 mb-2 opacity-50 group-hover:opacity-100 transition-opacity"
                  style={{ color: colors.goldenYellow }}
                />
                <p className="text-[9px] font-black uppercase tracking-widest text-white/40">
                  {item.label}
                </p>
                <p className="text-xs font-bold text-white">{item.val}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}