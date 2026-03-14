"use client";

import React from "react";
import { 
  Train, Hospital, School, 
  ShoppingBag, GraduationCap, Compass, 
  Sparkles, MapPin, Building2, 
  Wind, Navigation, ArrowUpRight, Zap
} from "lucide-react";

const Amenities = () => {
  const colors = {
    blackish: "#765229",      
    vibrantOrange: "#ffdead", 
    goldenYellow: "#dfab5e",  
    deepOrange: "#dfab5e",    // Used in "Contact Now"
    warmCream: "#FFF4E6",     
  };

  const connectivityData = [
    {
      category: "Transport",
      icon: <Train className="w-5 h-5" />,
      items: [
        { name: "New Bhubaneswar Railway Station", dist: "2.5 kms" },
        { name: "Patia Chowk Bus Stop", dist: "5.5 kms" },
        { name: "Upcoming Metro Railway Station", dist: "5.5 kms" },
        { name: "Bhubaneswar Station (Master Canteen)", dist: "15.7 kms" },
        { name: "Biju Patnaik International Airport", dist: "17.1 kms" },
      ],
    },
    {
      category: "Healthcare",
      icon: <Hospital className="w-5 h-5" />,
      items: [
        { name: "Kalinga Institute of Medical Sciences", dist: "6.5 kms" },
        { name: "Apollo Hospital", dist: "9.3 kms" },
      ],
    },
    {
      category: "Schools",
      icon: <School className="w-5 h-5" />,
      items: [
        { name: "St. Xavier's International School", dist: "5.1 kms" },
        { name: "ODM Public School", dist: "6.6 kms" },
        { name: "Sai International School", dist: "7.0 kms" },
        { name: "Loyola High School", dist: "10.9 kms" },
      ],
    },
    {
      category: "University",
      icon: <GraduationCap className="w-5 h-5" />,
      items: [
        { name: "DHSK College", dist: "850 m" },
        { name: "St. Fernando Nursing", dist: "3.1 km" },
        { name: "Dibrugarh University", dist: "7.2 km" },
      ],
    },
    {
      category: "Shopping",
      icon: <ShoppingBag className="w-5 h-5" />,
      items: [
        { name: "Royal Arcade", dist: "2.0 kms" },
        { name: "Galaxy Mall", dist: "3.1 kms" },
        { name: "Reliance Fresh", dist: "3.1 kms" },
        { name: "V-Mart", dist: "4.0 kms" },
        { name: "Maruti Mall", dist: "4.7 kms" },
      ],
    },
    {
      category: "Colleges",
      icon: <Compass className="w-5 h-5" />,
      items: [
        { name: "KIIT University", dist: "3.1 kms" },
        { name: "NIFT Bhubaneswar", dist: "5.7 kms" },
        { name: "College of Engineering Bhubaneswar", dist: "6.3 kms" },
        { name: "Utkal University", dist: "13.4 kms" },
      ],
    },
  ];

  return (
    <section id="location" className="relative w-full bg-[#fdfdfb] py-16 lg:py-20 overflow-hidden font-sans text-[#041a14]">
      
      {/* BACKGROUND DECOR */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-[#F2A71D]/5 -skew-x-12 translate-x-1/2 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* TOP SPECIFICATION BAR */}
        <div className="flex flex-wrap items-center justify-between gap-6 mb-16 p-8 bg-white rounded-3xl shadow-sm border border-gray-100">
           <div className="flex items-center gap-4">
             <div className="p-3 bg-orange-100 rounded-xl text-[#D64B27]"><Building2 size={24}/></div>
             <div>
               <p className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Structure</p>
               <p className="font-bold text-sm text-[#041a14]">2B + Stilt + 27 Floors</p>
             </div>
           </div>
           <div className="h-10 w-px bg-gray-100 hidden md:block" />
           <div className="flex items-center gap-4">
             <div className="p-3 bg-orange-100 rounded-xl text-[#D64B27]"><Zap size={24}/></div>
             <div>
               <p className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Luxury Units</p>
               <p className="font-bold text-sm text-[#041a14]">108 AC Apartments</p>
             </div>
           </div>
           <div className="h-10 w-px bg-gray-100 hidden md:block" />
           <div className="flex items-center gap-4">
             <div className="p-3 bg-orange-100 rounded-xl text-[#D64B27]"><Navigation size={24}/></div>
             <div>
               <p className="text-[10px] uppercase font-black text-gray-400 tracking-widest">Location</p>
               <p className="font-bold text-sm text-[#041a14]">Nandankanan Road, Raghunathpur</p>
             </div>
           </div>
        </div>

        {/* HEADER SECTION */}
        <div className="mb-20">
          <div className="flex items-center gap-3 text-[#D64B27] mb-4">
            <Sparkles size={18} className="animate-pulse" />
            <span className="text-xs font-black uppercase tracking-[0.4em]">Prime Residential Zone</span>
          </div>
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] text-[#041a14] mb-8">
            The World at <br />
            <span className="italic font-light text-[#dfab5e]">Your Doorstep.</span>
          </h2>
          <p className="max-w-2xl text-lg text-gray-500 font-medium">
            3 BHK & 4 BHK residences in the heart of Bhubaneswar's ultra-luxurious high-rise district. 
            Designed for those who demand effortless connectivity.
          </p>
        </div>

        {/* FULL CONTENT GRID */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {connectivityData.map((section, idx) => (
            <div key={idx} className="group bg-white p-8 rounded-[2rem] border border-gray-100 hover:border-[#F2A71D] shadow-sm hover:shadow-xl transition-all duration-500">
              <div className="flex items-center justify-between mb-8 border-b border-gray-50 pb-6">
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-[#041a14] text-[#F2A71D] rounded-xl flex items-center justify-center">
                    {section.icon}
                  </div>
                  <h3 className="font-serif text-xl font-bold">{section.category}</h3>
                </div>
                <span className="text-xs font-black text-gray-200 uppercase tracking-widest">0{idx + 1}</span>
              </div>

              <ul className="space-y-5">
                {section.items.map((item, i) => (
                  <li key={i} className="flex flex-col gap-1 group/item">
                    <div className="flex justify-between items-start gap-4">
                      <span className="text-sm font-semibold text-gray-600 group-hover/item:text-[#041a14] transition-colors">
                        {item.name}
                      </span>
                      <span className="text-[10px] font-black text-[#D64B27] bg-[#F2A71D10] px-2 py-1 rounded whitespace-nowrap">
                        {item.dist}
                      </span>
                    </div>
                    <div className="w-full h-[1px] bg-gray-50 overflow-hidden">
                      <div className="h-full w-0 group-hover/item:w-full transition-all duration-700 bg-[#F2A71D]" />
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* T&C FOOTNOTE */}
        <div className="mt-12 text-center text-[10px] font-bold text-gray-400 uppercase tracking-widest">
          *T&C Apply. High-Rise Ultra-Luxurious Living in Bhubaneswar.
        </div>
      </div>
    </section>
  );
};

export default Amenities;