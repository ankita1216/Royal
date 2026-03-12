"use client";

import React, { useState, useEffect } from "react";

export default function Intro({ onComplete }) {
  const [isDrawing, setIsDrawing] = useState(true);
  const [isExpanding, setIsExpanding] = useState(false);

  // Luxury Palette
  const colors = {
    gold: "#F2A71D",
    deepBrown: "#1a130c", // Darker, richer than before
    accent: "#dfab5e",
  };

  useEffect(() => {
    // Phase 1: Drawing duration
    const drawTimer = setTimeout(() => setIsDrawing(false), 2000);
    
    // Phase 2: Reveal duration
    const revealTimer = setTimeout(() => {
      setIsExpanding(true);
      setTimeout(() => {
        if (onComplete) onComplete();
      }, 1200);
    }, 3500);

    return () => {
      clearTimeout(drawTimer);
      clearTimeout(revealTimer);
    };
  }, [onComplete]);

  return (
    <div 
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden"
      style={{ backgroundColor: colors.deepBrown }}
    >
      {/* BACKGROUND BLUEPRINT GRID */}
      <div 
        className="absolute inset-0 opacity-10 transition-opacity duration-1000"
        style={{ 
          backgroundImage: `linear-gradient(${colors.gold} 1px, transparent 1px), linear-gradient(90deg, ${colors.gold} 1px, transparent 1px)`,
          backgroundSize: '50px 50px',
          display: isExpanding ? 'none' : 'block'
        }}
      />

      {/* CENTRAL LOGO MARK (SVG Animation) */}
      <div className="relative z-10 flex flex-col items-center">
        <svg 
          width="120" 
          height="120" 
          viewBox="0 0 100 100" 
          className={`transition-all duration-1000 ${isExpanding ? 'scale-150 opacity-0' : 'scale-100'}`}
        >
          {/* Abstract Royal Hexagon/Crown */}
          <path
            d="M50 5 L85 25 L85 75 L50 95 L15 75 L15 25 Z"
            fill="none"
            stroke={colors.gold}
            strokeWidth="1"
            className={`path-draw ${isDrawing ? 'drawing' : 'drawn'}`}
          />
          <path
            d="M30 40 L50 30 L70 40 L70 60 L50 70 L30 60 Z"
            fill="none"
            stroke={colors.accent}
            strokeWidth="0.5"
            className={`path-draw-delayed ${isDrawing ? 'drawing' : 'drawn'}`}
          />
        </svg>

        {/* TYPOGRAPHY */}
        <div className="mt-8 text-center overflow-hidden">
          <h1 
            className={`text-white text-4xl md:text-6xl font-light tracking-[1em] transition-all duration-[2000ms] ease-out
            ${isDrawing ? 'translate-y-full opacity-0' : 'translate-y-0 opacity-100'}`}
            style={{ fontFamily: 'serif', color: 'white' }}
          >
            ROYAL
          </h1>
          <p 
            className={`text-[10px] uppercase tracking-[0.8em] mt-4 transition-all duration-[1500ms] delay-500
            ${isDrawing ? 'opacity-0' : 'opacity-100'}`}
            style={{ color: colors.gold }}
          >
            Presidency
          </p>
        </div>
      </div>

      {/* LENS APERTURE EXIT */}
      <div 
        className={`absolute inset-0 transition-all duration-[1200ms] ease-[cubic-bezier(0.7,0,0.3,1)] pointer-events-none
        ${isExpanding ? 'clip-open' : 'clip-closed'}`}
        style={{ backgroundColor: colors.gold, mixBlendMode: 'overlay', opacity: isExpanding ? 0 : 0.2 }}
      />

      <style jsx>{`
        .path-draw {
          stroke-dasharray: 300;
          stroke-dashoffset: 300;
          animation: draw 2.5s ease-out forwards;
        }
        .path-draw-delayed {
          stroke-dasharray: 200;
          stroke-dashoffset: 200;
          animation: draw 2s ease-out 0.5s forwards;
        }
        @keyframes draw {
          to { stroke-dashoffset: 0; }
        }
        .clip-closed {
          clip-path: circle(0% at 50% 50%);
        }
        .clip-open {
          clip-path: circle(150% at 50% 50%);
        }
      `}</style>
    </div>
  );
}