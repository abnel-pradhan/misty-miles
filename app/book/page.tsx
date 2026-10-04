"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowLeft, Calendar, Users, User, Mail, Phone, CheckCircle, ChevronDown } from "lucide-react";
import { Playfair_Display } from 'next/font/google';

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function BookPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [phone, setPhone] = useState("");
  
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [selectedGuests, setSelectedGuests] = useState("1 Guest");
  const guestOptions = ["1 Guest", "2 Guests (Couple)", "3 Guests", "4 Guests (Family)"];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
  };

  const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const onlyNumbers = e.target.value.replace(/\D/g, "");
    if (onlyNumbers.length <= 10) {
      setPhone(onlyNumbers);
    }
  };

  return (
    <main className="bg-zinc-950 min-h-screen font-sans text-zinc-50 flex flex-col justify-center p-4 py-16 md:p-8 relative overflow-x-hidden">
      
      {/* Background ambient glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-amber-500/10 rounded-full blur-[120px] pointer-events-none" />

      {/* FIX 2: Added mx-auto to ensure it stays perfectly centered on desktop */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="w-full max-w-xl mx-auto bg-zinc-900/50 backdrop-blur-xl border border-zinc-800 p-6 md:p-12 rounded-3xl relative z-10 shadow-2xl"
      >
        <a href="/" className="inline-flex items-center gap-2 text-zinc-400 hover:text-amber-400 transition-colors mb-8 text-sm font-medium">
          <ArrowLeft size={16} /> Back to Home
        </a>

        {!isSubmitted ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
            <h1 className={`${playfair.className} text-4xl md:text-5xl font-bold mb-2`}>Reservation Request</h1>
            <p className="text-zinc-400 mb-8">Enter your details below to request a stay. Our team will review and send your confirmation.</p>

            <form className="space-y-5" onSubmit={handleSubmit}>
              
              <div className="space-y-2">
                <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                  <User size={16} className="text-amber-500" /> Full Name
                </label>
                <input required type="text" placeholder="John Doe" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                    <Mail size={16} className="text-amber-500" /> Email Address
                  </label>
                  <input required type="email" placeholder="john@example.com" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                    <Phone size={16} className="text-amber-500" /> Phone Number
                  </label>
                  <input 
                    required 
                    type="tel" 
                    value={phone}
                    onChange={handlePhoneChange}
                    pattern="[0-9]{10}"
                    title="Please enter exactly 10 digits"
                    placeholder="9876543210" 
                    className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors" 
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                    <Calendar size={16} className="text-amber-500" /> Check-in
                  </label>
                  <input required type="date" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors [color-scheme:dark]" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                    <Calendar size={16} className="text-amber-500" /> Check-out
                  </label>
                  <input required min={new Date().toISOString().split("T")[0]} type="date" className="w-full bg-zinc-950 border border-zinc-800 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-amber-500 transition-colors [color-scheme:dark]" />
                </div>
              </div>

              <div className="space-y-2 pb-4 relative">
                <label className="text-sm font-medium text-zinc-300 flex items-center gap-2">
                  <Users size={16} className="text-amber-500" /> Guests
                </label>
                
                <div 
                  onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                  className={`w-full bg-zinc-950 border rounded-xl px-4 py-3 text-white cursor-pointer flex justify-between items-center transition-colors ${isDropdownOpen ? 'border-amber-500' : 'border-zinc-800 hover:border-zinc-700'}`}
                >
                  <span>{selectedGuests}</span>
                  <motion.div animate={{ rotate: isDropdownOpen ? 180 : 0 }}>
                    <ChevronDown size={20} className="text-zinc-400" />
                  </motion.div>
                </div>

                {/* FIX 3: Removed "absolute". Now it smoothly pushes the submit button down! */}
                <AnimatePresence>
                  {isDropdownOpen && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.2 }}
                      className="w-full mt-2 bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden"
                    >
                      {guestOptions.map((option) => (
                        <div 
                          key={option}
                          onClick={() => {
                            setSelectedGuests(option);
                            setIsDropdownOpen(false);
                          }}
                          className={`px-4 py-3 cursor-pointer transition-colors ${selectedGuests === option ? 'bg-amber-500/10 text-amber-500' : 'text-zinc-300 hover:bg-zinc-800 hover:text-white'}`}
                        >
                          {option}
                        </div>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              <button 
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 to-amber-600 hover:from-amber-400 hover:to-amber-500 text-zinc-950 px-8 py-4 rounded-xl font-bold text-lg transition-all shadow-[0_0_20px_rgba(245,158,11,0.2)] mt-4"
              >
                Submit Booking Request
              </button>
            </form>
          </motion.div>
        ) : (
          <motion.div 
            initial={{ opacity: 0, scale: 0.9 }} 
            animate={{ opacity: 1, scale: 1 }} 
            className="text-center py-10"
          >
            <motion.div 
              initial={{ scale: 0 }} 
              animate={{ scale: 1 }} 
              transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
              className="w-20 h-20 bg-green-500/20 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
            >
              <CheckCircle size={40} />
            </motion.div>
            <h2 className={`${playfair.className} text-4xl font-bold mb-4`}>Request Received!</h2>
            <p className="text-zinc-400 mb-8 text-lg">
              Thank you for choosing Misty Miles. We have received your details and our team will contact you shortly to finalize your reservation.
            </p>
            <button 
              onClick={() => window.location.href = '/'}
              className="bg-white/10 hover:bg-white/20 text-white px-8 py-3 rounded-full font-medium transition-colors"
            >
              Return Home
            </button>
          </motion.div>
        )}
      </motion.div>
    </main>
  );
}