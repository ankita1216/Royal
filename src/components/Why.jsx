"use client";

import React from "react";
import { Building2, Activity } from "lucide-react";
import { motion } from "framer-motion";

const ActiveLivingShowcase = () => {

  const colors = {
    accent: "#dfab5e",
  };

  return (
    <section
      id="highlights"
      className="w-full bg-[#fafaf8] py-16 px-4 md:px-12 flex justify-center font-sans text-[#041a14]"
    >
      {/* MAIN CARD */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="group relative w-full max-w-[1400px] rounded-[2rem] md:rounded-[3rem] overflow-hidden h-[450px] md:h-[560px] shadow-[0_40px_120px_rgba(0,0,0,0.25)]"
      >
        {/* Background Image */}
        <img
          src="/outside_view_2.jpg"
          alt="Architecture in Harmony"
          className="w-full h-full object-cover transition-transform duration-[4000ms] group-hover:scale-105"
        />

        {/* LIGHT OVERLAY (Reduced darkness) */}
        <div className="absolute inset-0 bg-black/20"></div>

        {/* Gradient Light */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-transparent to-black/10"></div>

        {/* Soft Golden Glow */}
        <div
          className="absolute top-0 left-0 w-full h-full opacity-30"
          style={{
            background:
              "radial-gradient(circle at 20% 40%, rgba(223,171,94,0.35), transparent 60%)",
          }}
        ></div>

        {/* CONTENT */}
        <div className="absolute inset-0 p-8 md:p-16 flex flex-col justify-center">

          <div className="max-w-xl">

            {/* Accent Line */}
            <div
              className="w-14 h-[2px] mb-6"
              style={{ backgroundColor: colors.accent }}
            ></div>

            {/* Title */}
            <h3 className="font-serif text-4xl md:text-6xl text-white leading-tight mb-4">
              Architecture
              <br />
              <span className="italic font-light text-[#dfab5e]">
                in Air
              </span>
            </h3>

            {/* Description */}
            <p className="text-white/80 text-sm md:text-base leading-relaxed font-light max-w-md">
              The architecture
blends elegance with functionality, while lush, Balinese-inspired
landscapes bring nature right to your doorstep. From a grand
arrival lobby to serene wellness zones and lifestyle amenities, every
corner reflects sophistication.
            </p>
          </div>
        </div>

        {/* BADGES */}
        <div className="absolute bottom-8 right-8 md:bottom-12 md:right-16 flex gap-4">

          {/* Structure */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 md:p-6 rounded-[1.5rem] text-center min-w-[110px] shadow-lg">
            <Building2
              className="w-5 h-5 mx-auto mb-2"
              style={{ color: colors.accent }}
            />
            <p className="text-[8px] font-bold tracking-[0.2em] uppercase text-white/50 mb-1">
              Structure
            </p>
            <p className="text-lg md:text-xl font-serif text-white">
              LB+UB+G+27
            </p>
          </div>

          {/* Elevation */}
          <div className="bg-white/10 backdrop-blur-xl border border-white/20 p-5 md:p-6 rounded-[1.5rem] text-center min-w-[110px] shadow-lg">
            <Activity
              className="w-5 h-5 mx-auto mb-2"
              style={{ color: colors.accent }}
            />
            <p className="text-[8px] font-bold tracking-[0.2em] uppercase text-white/50 mb-1">
              Space
            </p>
            <p className="text-lg md:text-xl font-serif text-white">
              1.3 Acres of Space
            </p>
          </div>

        </div>
      </motion.div>
    </section>
  );
};

export default ActiveLivingShowcase;