"use client";
import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom"; 
import { 
  MapPin, ShieldCheck, Sparkles,
  CheckCircle2, ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const colors = {
    blackish: "#765229",
    brightOrange: "#F2A71D",
    deepOrange: "#E97323",
    warmCream: "#fdfdfc",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "", 
    phone: "",
    interest: "3 BHK",
    callTime: "Morning (9 AM - 12 PM)",
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
      utm_source: params.get("utm_source") || "direct",
      utm_medium: params.get("utm_medium") || "",
      utm_campaign: params.get("utm_campaign") || "",
      utm_term: params.get("utm_term") || "",
      utm_content: params.get("utm_content") || ""
    }));
  }, []);

  // Updated handler: Direct submission and redirect
  const handleFinalSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const payload = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => payload.append(key, value));

      // Sending data to Pabbly Webhook
      await fetch("https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjcwNTZjMDYzMTA0MzA1MjZkNTUzMjUxMzMi_pc", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString(),
      });

      // Update UI state and redirect immediately
      setSubmitted(true);
      navigate("/Info/Thankyou");
      
    } catch (error) {
      alert("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = "w-full bg-gray-50 border border-gray-100 rounded-xl px-5 py-3.5 outline-none focus:border-[#765229] focus:ring-2 focus:ring-[#765229]/5 transition-all duration-300 placeholder:text-gray-300 text-[#041a14] text-sm font-medium";
  const labelStyle = "text-[9px] font-black uppercase tracking-[0.15em] text-gray-400 mb-1.5 block ml-1";

  return (
    <section id="contact" className="relative w-full bg-[#fdfdfc] py-16 lg:py-24 overflow-hidden font-sans">
      <div className="absolute top-0 right-0 w-[40%] h-full bg-[#765229]/[0.02] -skew-x-12 translate-x-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-stretch bg-white rounded-[2.5rem] shadow-[0_30px_80px_-20px_rgba(118,82,41,0.12)] overflow-hidden border border-black/5"
        >
          
          {/* LEFT SIDE: Brand Identity */}
          <div className="lg:w-[40%] p-10 lg:p-14 text-white flex flex-col justify-between relative" style={{ backgroundColor: colors.blackish }}>
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-8">
                <div className="h-[1px] w-8 bg-orange-400/50" />
                <span className="text-xs font-black uppercase tracking-[0.4em] text-orange-400">
                  Contact Us
                </span>
              </div>

              <h2 className="font-serif text-5xl md:text-7xl lg:text-6xl leading-tight mb-6 tracking-tighter">
                Request <br />
                <span className="italic font-light opacity-80 text-3xl md:text-4xl">A Private View.</span>
              </h2>
              
              <p className="text-white/60 text-lg leading-relaxed max-w-xs mb-10">
                Begin your journey to Royal Presidency. Leave your details for a tailored walkthrough.
              </p>

              <div className="space-y-3">
                <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl">
                  <MapPin className="w-4 h-4 text-orange-400" />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/40">Location</p>
                    <p className="text-xs font-bold">Raghunathpur, Bhubaneswar</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/5 border border-white/10 p-4 rounded-2xl">
                  <ShieldCheck className="w-4 h-4 text-orange-400" />
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/40">Privacy</p>
                    <p className="text-xs font-bold">Secure Communication</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-12 pt-6 border-t border-white/10 flex items-center justify-between opacity-30">
               <span className="text-[8px] font-bold uppercase tracking-widest">© 2026 Royal Presidency</span>
               <Sparkles className="w-3.3 h-3.3" />
            </div>
          </div>

          {/* RIGHT SIDE: Form */}
          <div className="lg:w-[60%] p-8 lg:p-16 flex flex-col justify-center bg-white">
            <AnimatePresence mode="wait">
              {!submitted ? (
                <motion.form 
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleFinalSubmit} 
                  className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-5"
                >
                  <div className="md:col-span-1">
                    <label className={labelStyle}>Full Name</label>
                    <input 
                      type="text" required placeholder="Rahul Sharma" className={inputStyle}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </div>

                  <div className="md:col-span-1">
                    <label className={labelStyle}>Phone Number</label>
                    <input 
                      type="tel" required placeholder="10-digit number" className={inputStyle}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    />
                  </div>

                  <div className="md:col-span-1">
                    <label className={labelStyle}>Preferred Configuration</label>
                    <select
                      className={inputStyle}
                      value={formData.interest}
                      onChange={(e) => setFormData({...formData, interest: e.target.value})}
                    >
                      <option>3 BHK</option>
                      <option>4 BHK</option>
                    </select>
                  </div>

                  <div className="md:col-span-1">
                    <label className={labelStyle}>Callback Window</label>
                    <select 
                      className={inputStyle}
                      value={formData.callTime}
                      onChange={(e) => setFormData({...formData, callTime: e.target.value})}
                    >
                      <option>Morning (9 AM - 12 PM)</option>
                      <option>Afternoon (12 PM - 4 PM)</option>
                      <option>Evening (4 PM - 8 PM)</option>
                      <option>Anytime</option>
                    </select>
                  </div>

                  <div className="md:col-span-2 mt-4">
                    <button 
                      type="submit"
                      disabled={loading}
                      className="group w-full py-5 rounded-2xl font-black text-[10px] uppercase tracking-[0.25em] transition-all duration-500 bg-[#765229] text-white hover:bg-[#5d4121] shadow-[0_15px_30px_-10px_rgba(118,82,41,0.25)] flex items-center justify-center gap-3 disabled:opacity-70"
                    >
                      {loading ? "Processing..." : (
                        <>
                          Confirm Inquiry 
                          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-10 flex flex-col items-center justify-center"
                >
                  <div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center mb-6">
                    <CheckCircle2 className="w-8 h-8 text-green-500"/>
                  </div>
                  <h3 className="text-3xl font-serif italic mb-2">Inquiry Received.</h3>
                  <p className="text-gray-400 text-sm font-medium tracking-wide">Redirecting...</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

        </motion.div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;1,400&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </section>
  );
}