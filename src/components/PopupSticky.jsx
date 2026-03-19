"use client";
import React, { useState, useEffect } from "react";
import { 
  X, Send, Phone, ShieldCheck, 
  Sparkles, CheckCircle2, 
  ChevronDown, User, Mail 
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useNavigate } from "react-router-dom";

export default function PopupSticky({ isOpen, setIsOpen }) {
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const colors = {
    blackish: "#765229",      
    vibrantOrange: "#ffdead", 
    goldenYellow: "#dfab5e",  
    deepOrange: "#dfab5e",    
    warmCream: "#FFF4E6",     
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    interest: "3 BHK",
    callTime: "Morning",
    utm_source: "direct",
    utm_medium: "",
    utm_campaign: "",
    utm_term: "",
    utm_content: ""
  });

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setFormData(prev => ({
      ...prev,
      utm_source: params.get("utm_source") || "direct_popup",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_term: params.get("utm_term") || "",
      utm_content: params.get("utm_content") || ""
    }));
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => payload.append(key, value));

      // Direct Webhook Submission
      await fetch("https://connect.pabbly.com/workflow/senddydybkfdyfuajsbabvwebhookdata/IjU3NjcwNTZjMDYzMTA0MzA1MjZkNTUzMjUxMzMi_pc", {
        method: "POST",
        mode: "no-cors",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: payload.toString(),
      });

      // Close and Redirect immediately
      setIsOpen(false);
      navigate("/Info/Thankyou");
    } catch (error) {
      console.error("Submission Error:", error);
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full bg-gray-50/50 border border-gray-200 rounded-2xl px-4 py-3.5 outline-none focus:border-[#E97323] focus:ring-4 focus:ring-[#E97323]/5 transition-all text-sm font-medium";

  return (
    <>
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[10000] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-[#041a14]/80 backdrop-blur-md"
            />
            
            <motion.div 
              initial={{ y: 100, opacity: 0, scale: 0.9 }} 
              animate={{ y: 0, opacity: 1, scale: 1 }} 
              exit={{ y: 100, opacity: 0, scale: 0.9 }}
              className="relative w-full max-w-lg bg-white rounded-[3rem] overflow-hidden shadow-3xl"
            >
               {/* Header Section */}
               <div className="p-8 pb-10 text-white relative overflow-hidden" style={{ backgroundColor: colors.blackish }}>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-[#F2A71D] opacity-10 blur-[80px] -mr-20 -mt-20" />
                  
                  <button 
                    onClick={() => setIsOpen(false)}
                    className="absolute top-6 right-6 p-2 bg-white/5 hover:bg-white/10 rounded-full transition-colors z-20"
                  >
                    <X className="w-5 h-5 text-white" />
                  </button>

                  <div className="relative z-10">
                    <div className="flex items-center gap-2 text-[9px] font-black uppercase tracking-[0.4em] mb-4 text-[#F2A71D]">
                      <Sparkles className="w-4 h-4" /> Quick Connect
                    </div>
                    <h3 className="font-serif text-3xl md:text-4xl leading-tight">
                      Experience <br /> <span className="italic font-light text-[#F2A71D]">Royal Presidency.</span>
                    </h3>
                  </div>
               </div>

               {/* Form Section */}
               <form onSubmit={handleSubmit} className="p-8 md:p-10 space-y-5 -mt-6 bg-white rounded-t-[3rem] relative z-10">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="relative">
                      <User className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                      <input 
                        placeholder="Full Name" 
                        required
                        className={`${inputClass} pl-11`} 
                        onChange={(e) => setFormData({...formData, name: e.target.value})}
                      />
                    </div>
                    <div className="relative">
                      <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                      <input 
                        type="email"
                        placeholder="Email" 
                        required
                        className={`${inputClass} pl-11`} 
                        onChange={(e) => setFormData({...formData, email: e.target.value})}
                      />
                    </div>
                  </div>

                  <div className="relative">
                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-300" />
                    <input 
                      placeholder="10-digit Phone" 
                      maxLength={10}
                      required
                      type="tel"
                      className={`${inputClass} pl-11`} 
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="relative">
                      <select 
                        className={`${inputClass} appearance-none cursor-pointer`}
                        value={formData.interest}
                        onChange={(e) => setFormData({...formData, interest: e.target.value})}
                      >
                        <option>3 BHK</option>
                        <option>4 BHK</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                    <div className="relative">
                      <select 
                        className={`${inputClass} appearance-none cursor-pointer`}
                        value={formData.callTime}
                        onChange={(e) => setFormData({...formData, callTime: e.target.value})}
                      >
                        <option>Morning</option>
                        <option>Afternoon</option>
                        <option>Evening</option>
                      </select>
                      <ChevronDown className="absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>

                  <button 
                    type="submit" 
                    disabled={loading}
                    className={`w-full py-5 rounded-2xl text-white font-bold text-lg tracking-wide shadow-2xl transition-all flex items-center justify-center gap-3 ${
                      loading ? "bg-gray-200 cursor-not-allowed" : "bg-[#E97323] hover:bg-[#D64B27] hover:-translate-y-1"
                    }`}
                  >
                    {loading ? "Processing..." : <>Confirm Inquiry <Send className="w-5 h-5" /></>}
                  </button>

                  <div className="pt-2 text-center">
                    <p className="text-[10px] text-gray-400 font-bold uppercase tracking-[0.2em] flex items-center justify-center gap-2">
                      <ShieldCheck className="w-4 h-4 text-green-500" /> Secure RERA Verified Inquiry
                    </p>
                  </div>
               </form>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}