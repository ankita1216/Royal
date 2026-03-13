"use client";
import { useEffect, useState } from "react";
import React from "react";
import { useNavigate } from "react-router-dom"; 
import { 
  Send, MapPin, ShieldCheck, Sparkles, Lock,
  Clock, ChevronDown, CheckCircle2, PhoneIncoming, ArrowRight
} from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { auth, RecaptchaVerifier, signInWithPhoneNumber } from "../lib/firebase";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const [isOtpSent, setIsOtpSent] = useState(false);
  const [otp, setOtp] = useState("");
  const [confirmationResult, setConfirmationResult] = useState(null);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const colors = {
    blackish: "#765229",      // Rich Brown
    brightOrange: "#F2A71D",   // Accent
    deepOrange: "#E97323",     // Primary CTA
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

  const setupRecaptcha = () => {
    if (!window.recaptchaVerifier) {
      window.recaptchaVerifier = new RecaptchaVerifier(
        auth,
        "recaptcha-container",
        {
          size: "invisible",
          callback: () => console.log("reCAPTCHA verified")
        }
      );
    }
  };

  const handleSendOtp = async () => {
    if (!formData.phone) return alert("Enter phone number");
    setLoading(true);

    try {
      setupRecaptcha();
      let cleaned = formData.phone.replace(/\D/g, "");
      if (cleaned.startsWith("0")) cleaned = cleaned.substring(1);

      if (cleaned.length !== 10) {
        alert("Enter valid 10 digit phone number");
        setLoading(false);
        return;
      }

      const phoneNumber = `+91${cleaned}`;
      const appVerifier = window.recaptchaVerifier;

      const result = await signInWithPhoneNumber(auth, phoneNumber, appVerifier);
      setConfirmationResult(result);
      setIsOtpSent(true);
    } catch (error) {
      console.error(error);
      alert(error.message || "Error sending OTP");
      if (window.recaptchaVerifier) {
        window.recaptchaVerifier.clear();
        window.recaptchaVerifier = null;
      }
    } finally {
      setLoading(false);
    }
  };

  const handleFinalSubmit = async (e) => {
    e.preventDefault();
    if (!isOtpSent) return alert("Please verify phone first");
    if (!otp || otp.length < 6) return alert("Please enter the 6-digit OTP");
    setLoading(true);

    try {
      await confirmationResult.confirm(otp);
      
      const payload = new URLSearchParams();
      Object.entries(formData).forEach(([key, value]) => payload.append(key, value));

      await fetch("https://connect.pabbly.com/workflow/sendwebhookdata/IjU3NjcwNTZjMDYzMTA0MzA1MjZkNTUzMjUxMzMi_pc", {
        method: "POST",
        mode: "no-cors",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: payload.toString(),
      });

      setSubmitted(true);
      setTimeout(() => navigate("/Info/Thankyou"), 2000);
    } catch (error) {
      alert("Invalid OTP or session expired.");
    } finally {
      setLoading(false);
    }
  };

  const inputStyle = "w-full bg-gray-50/50 border border-gray-200 rounded-2xl px-6 py-4 outline-none focus:border-[#765229] focus:ring-4 focus:ring-[#765229]/5 transition-all duration-300 placeholder:text-gray-300 text-[#041a14] font-medium";

  return (
    <section id="contact" className="relative w-full bg-[#fdfdfc] py-24 lg:py-40 overflow-hidden font-sans">
      <div id="recaptcha-container"></div>
      
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[50%] h-full bg-[#765229]/[0.02] -skew-x-12 translate-x-20 z-0" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col lg:flex-row items-stretch bg-white rounded-[4rem] shadow-[0_40px_100px_-20px_rgba(118,82,41,0.15)] overflow-hidden border border-black/5"
        >
          
          {/* LEFT SIDE: Brand & Info */}
          <div className="lg:w-5/12 p-12 lg:p-20 text-white flex flex-col justify-between relative overflow-hidden" style={{ backgroundColor: colors.blackish }}>
            <div className="absolute -top-20 -left-20 w-80 h-80 bg-[#F2A71D] opacity-10 blur-[100px] rounded-full"></div>
            
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-10">
                <div className="h-[1px] w-10 bg-orange-400/50" />
                <span className="text-[10px] font-black uppercase tracking-[0.5em] text-orange-400">
                  Concierge
                </span>
              </div>

              <h2 className="font-serif text-5xl lg:text-7xl leading-[0.9] mb-8 tracking-tighter">
                Request <br />
                <span className="italic font-light opacity-80">A Private View.</span>
              </h2>
              
              <p className="text-white/60 text-lg leading-relaxed max-w-sm mb-12">
                Begin your journey to Royal Presidency. Leave your details, and our specialist will curate a tailored walkthrough for you.
              </p>

              <div className="space-y-4">
                <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-3xl group hover:bg-white/10 transition-colors">
                  <div className="p-3 bg-orange-500/20 rounded-2xl">
                    <MapPin className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Location</p>
                    <p className="text-sm font-bold">Raghunathpur, Bhubaneswar</p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/5 backdrop-blur-md border border-white/10 p-5 rounded-3xl group hover:bg-white/10 transition-colors">
                  <div className="p-3 bg-orange-500/20 rounded-2xl">
                    <ShieldCheck className="w-5 h-5 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-[10px] uppercase tracking-widest text-white/40 mb-1">Privacy</p>
                    <p className="text-sm font-bold">100% Encrypted Communication</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-16 pt-8 border-t border-white/5 flex items-center justify-between opacity-40">
               <span className="text-[9px] font-black uppercase tracking-widest">© 2026 Royal Presidency</span>
               <Sparkles className="w-4 h-4" />
            </div>
          </div>

          {/* RIGHT SIDE: Interactive Form */}
          <div className="lg:w-7/12 p-8 lg:p-20 flex flex-col justify-center bg-white relative">
            {!submitted ? (
              <form onSubmit={handleFinalSubmit} className="space-y-8">
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {/* Name Field */}
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }}>
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3 block ml-1">Full Name</label>
                    <input 
                      type="text"
                      required
                      placeholder="Rahul Sharma"
                      className={inputStyle}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                    />
                  </motion.div>

                  {/* Phone Field */}
                  <motion.div initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3 block ml-1">Mobile Access</label>
                    <div className="relative group">
                      <input 
                        type="tel"
                        required
                        placeholder="10-digit number"
                        disabled={isOtpSent}
                        className={`${inputStyle} ${isOtpSent ? 'border-green-100 bg-green-50/30' : ''}`} 
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      />

                      <AnimatePresence>
                        {formData.phone.length === 10 && !isOtpSent && (
                          <motion.button 
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0 }}
                            type="button"
                            onClick={handleSendOtp}
                            disabled={loading}
                            className="absolute right-2 top-1/2 -translate-y-1/2 bg-[#765229] hover:bg-[#5d4121] text-white px-5 py-2.5 rounded-xl text-[10px] font-black uppercase tracking-wider transition-all shadow-lg active:scale-95"
                          >
                            {loading ? "..." : "Verify"}
                          </motion.button>
                        )}
                      </AnimatePresence>
                      
                      {isOtpSent && (
                         <div className="absolute right-5 top-1/2 -translate-y-1/2 text-green-600 flex items-center gap-2">
                            <span className="text-[9px] font-bold">Verified</span>
                            <CheckCircle2 className="w-5 h-5" />
                         </div>
                      )}
                    </div>
                  </motion.div>
                </div>

                {/* OTP Section */}
                <AnimatePresence>
                  {isOtpSent && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }} 
                      animate={{ height: "auto", opacity: 1 }}
                      className="overflow-hidden"
                    >
                      <div className="bg-[#765229]/5 p-6 rounded-3xl border border-[#765229]/10">
                        <label className="text-[10px] font-black uppercase tracking-[0.2em] text-[#765229] mb-3 block ml-1">Secret Code Sent to Phone</label>
                        <div className="relative">
                          <Lock className="absolute left-5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#765229]/40" />
                          <input 
                            type="text"
                            required
                            placeholder="Enter 6-digit OTP"
                            className="w-full bg-white border border-[#765229]/20 rounded-2xl px-12 py-4 outline-none focus:border-[#765229] transition-all text-lg tracking-[0.5em] font-bold"
                            onChange={(e) => setOtp(e.target.value)}
                          />
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Selection Fields */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                   <div>
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3 block ml-1">Preferred Configuration</label>
                    <div className="flex p-1.5 bg-gray-50 rounded-[1.5rem] border border-gray-100">
                      {["3 BHK", "4 BHK"].map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setFormData({...formData, interest: type})}
                          className={`flex-1 py-3 rounded-2xl text-[11px] font-black tracking-widest transition-all duration-300 ${
                            formData.interest === type 
                            ? "bg-white text-[#765229] shadow-sm scale-[1.02]" 
                            : "text-gray-400 hover:text-gray-600"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <label className="text-[10px] font-black uppercase tracking-[0.2em] text-gray-400 mb-3 block ml-1">Callback Window</label>
                    <div className="relative">
                      <select 
                        className={`${inputStyle} appearance-none cursor-pointer bg-gray-50/50`}
                        value={formData.callTime}
                        onChange={(e) => setFormData({...formData, callTime: e.target.value})}
                      >
                        <option>Morning (9 AM - 12 PM)</option>
                        <option>Afternoon (12 PM - 4 PM)</option>
                        <option>Evening (4 PM - 8 PM)</option>
                        <option>Anytime</option>
                      </select>
                      <ChevronDown className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none" />
                    </div>
                  </div>
                </div>

                {/* Submit Button */}
                <button 
                  type="submit"
                  disabled={!isOtpSent || loading}
                  className={`group w-full py-6 rounded-3xl font-black text-xs uppercase tracking-[0.3em] transition-all duration-500 flex items-center justify-center gap-4 ${
                    !isOtpSent || loading
                    ? "bg-gray-100 text-gray-300 cursor-not-allowed"
                    : "bg-[#765229] text-white hover:bg-[#5d4121] shadow-[0_20px_40px_-10px_rgba(118,82,41,0.3)] hover:-translate-y-1"
                  }`}
                >
                  {loading ? "Processing Securely..." : (
                    <>
                      Confirm Inquiry <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                <p className="text-[10px] text-center text-gray-400 font-medium tracking-wide">
                  By clicking confirm, you agree to our <span className="underline cursor-pointer">Privacy Policy</span> and Terms.
                </p>

              </form>
            ) : (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center h-full flex flex-col items-center justify-center py-20"
              >
                <div className="relative mb-10">
                  <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full scale-150" />
                  <div className="relative w-28 h-28 bg-green-50 rounded-full flex items-center justify-center text-green-600 border border-green-100">
                    <CheckCircle2 className="w-14 h-14" />
                  </div>
                </div>
                <h3 className="text-4xl font-serif italic mb-4">Inquiry Received.</h3>
                <p className="text-gray-400 font-medium tracking-wide">Preparing your concierge experience...</p>
              </motion.div>
            )}
          </div>

        </motion.div>
      </div>

      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,400;0,700;0,900;1,400&display=swap');
        .font-serif { font-family: 'Playfair Display', serif; }
      `}</style>
    </section>
  );
}