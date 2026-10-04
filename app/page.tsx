"use client";
import { useState } from "react";
import { Playfair_Display } from "next/font/google";
import { motion, AnimatePresence, type Variants } from "framer-motion";
import { MapPin, MessageCircle, ShieldCheck, Heart, Home, IndianRupee, Menu, X, ArrowRight, Phone } from "lucide-react";

const playfair = Playfair_Display({ subsets: ['latin'] });

export default function Page() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Animation variants
  const fadeUpVariant: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" as const } },
  };

  const staggerContainer: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <main className="bg-zinc-950 min-h-screen font-sans selection:bg-amber-500/30 text-zinc-50 overflow-x-hidden relative">
      
      {/* --- TOP NAVIGATION BAR --- */}
      <motion.nav 
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between px-4 md:px-6 py-4 bg-zinc-950/70 backdrop-blur-lg border-b border-white/5"
      >
        {/* Logo Section */}
        <div className="flex items-center gap-2 md:gap-3 cursor-pointer z-50" onClick={() => window.scrollTo(0,0)}>
          <img src="/logo.png" alt="Misty Miles Logo" className="h-8 md:h-10 w-auto object-contain" />
          <span className={`${playfair.className} text-xl md:text-2xl font-semibold text-white tracking-widest`}>
            Misty Miles
          </span>
        </div>

        {/* Center Navigation Links (Desktop only) */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-300">
          <a href="#features" className="hover:text-amber-400 transition-colors">Amenities</a>
          <a href="#gallery" className="hover:text-amber-400 transition-colors">The Space</a>
        </div>

        {/* Right Side: Book Now + Mobile Toggle */}
        <div className="flex items-center gap-3 z-50">
          <a 
            href="/book"
            className="bg-amber-500 hover:bg-amber-400 text-zinc-950 px-4 md:px-6 py-2 rounded-full font-bold text-xs md:text-sm transition-all shadow-[0_0_15px_rgba(245,158,11,0.3)] hover:shadow-[0_0_25px_rgba(245,158,11,0.5)]"
          >
            Book Now
          </a>
          
          {/* Mobile Hamburger Button */}
          <button 
            className="md:hidden text-zinc-200 p-1"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </motion.nav>

      {/* --- MOBILE DROPDOWN MENU --- */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-0 left-0 right-0 pt-24 pb-8 px-6 bg-zinc-950/95 backdrop-blur-2xl border-b border-zinc-800 z-40 md:hidden flex flex-col gap-6 text-lg font-medium shadow-2xl"
          >
            <a href="#features" onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-300 hover:text-amber-400 transition-colors border-b border-zinc-900 pb-4">
              Amenities
            </a>
            <a href="#gallery" onClick={() => setIsMobileMenuOpen(false)} className="text-zinc-300 hover:text-amber-400 transition-colors border-b border-zinc-900 pb-4">
              The Space
            </a>
            <a 
              href="/book" 
              className="text-amber-500 hover:text-amber-400 transition-colors pt-2 font-bold flex items-center gap-2"
            >
              Go to Booking Page <ArrowRight size={18} />
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- HERO SECTION --- */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden">
        <motion.div
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 10, ease: "easeOut" }}
          className="absolute inset-0 z-0"
        >
          <img
            src="/hero.jpg"
            alt="Cozy Bedroom"
            className="w-full h-full object-cover opacity-40"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent" />
        </motion.div>

        <div className="relative z-10 text-center px-6 max-w-2xl mx-auto mt-20">
          <motion.div initial="hidden" animate="visible" variants={fadeUpVariant} className="flex items-center justify-center gap-2 mb-6">
            <span className="bg-white/5 backdrop-blur-md border border-white/10 text-amber-50 px-4 py-1.5 rounded-full text-sm font-medium flex items-center gap-2">
              <MapPin size={16} className="text-amber-400" />
              Darjeeling More, Siliguri
            </span>
          </motion.div>

          <motion.div initial="hidden" animate="visible" variants={fadeUpVariant} transition={{ delay: 0.2 }}>
            <h1 className={`${playfair.className} text-5xl md:text-7xl font-bold text-white tracking-tight leading-tight mb-4 drop-shadow-lg`}>
              Your Private, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-200 to-amber-500 italic">
                Cozy Escape.
              </span>
            </h1>
          </motion.div>

          <motion.p initial="hidden" animate="visible" variants={fadeUpVariant} transition={{ delay: 0.4 }} className="text-lg md:text-xl text-zinc-300 mb-10 font-light drop-shadow-md">
            Experience a peaceful, couple-friendly 1BHK stay. 100% private, fully equipped, and budget-friendly.
          </motion.p>

          <motion.div initial="hidden" animate="visible" variants={fadeUpVariant} transition={{ delay: 0.6 }} className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="https://wa.me/918370958288?text=Hi!%20I%20would%20like%20to%20book%20a%20stay%20at%20Misty%20Miles."
              target="_blank"
              className="flex items-center gap-2 bg-gradient-to-r from-green-500 to-emerald-600 text-white px-8 py-4 rounded-full font-semibold text-lg shadow-lg shadow-green-500/30 hover:shadow-green-500/50 transition-all w-full sm:w-auto justify-center"
            >
              <MessageCircle size={24} />
              Book via WhatsApp
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#gallery"
              className="flex items-center gap-2 bg-white/5 backdrop-blur-md border border-white/10 text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white/10 transition-all w-full sm:w-auto justify-center"
            >
              Explore the Room
            </motion.a>
          </motion.div>
        </div>
      </section>

      {/* --- FEATURES SECTION (ID added here!) --- */}
      <section id="features" className="py-24 px-6 max-w-6xl mx-auto">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeUpVariant}
          className="text-center mb-16"
        >
          <h2 className={`${playfair.className} text-3xl md:text-5xl font-bold mb-4`}>Everything You Need.</h2>
          <p className="text-zinc-400 max-w-xl mx-auto">Skip the generic hotels. Enjoy a fully private space designed for comfort and peace of mind.</p>
        </motion.div>

        <motion.div 
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {[
            { icon: <ShieldCheck size={32} className="text-amber-400" />, title: "Couples Welcome", desc: "A safe, 100% private, and discreet stay for couples." },
            { icon: <Heart size={32} className="text-pink-500" />, title: "15% Off For Couples", desc: "Special discount applied for couple bookings." },
            { icon: <Home size={32} className="text-blue-400" />, title: "Kitchen Access", desc: "Fully equipped kitchen for a true 'Home Away From Home' feel." },
            { icon: <IndianRupee size={32} className="text-green-400" />, title: "Budget Friendly", desc: "Premium homestay experience at an affordable price." },
          ].map((feature, index) => (
            <motion.div key={index} variants={fadeUpVariant} className="bg-zinc-900/50 border border-zinc-800 p-8 rounded-3xl hover:bg-zinc-900 transition-colors">
              <div className="bg-zinc-950 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 shadow-inner border border-zinc-800">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-zinc-400">{feature.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* --- GALLERY SECTION (ID added here!) --- */}
      <section id="gallery" className="py-24 px-6 max-w-7xl mx-auto">
        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }}
          variants={fadeUpVariant}
          className="flex flex-col md:flex-row md:items-end justify-between mb-12"
        >
          <div>
            <h2 className={`${playfair.className} text-3xl md:text-5xl font-bold mb-4`}>The Space.</h2>
            <p className="text-zinc-400 max-w-md">Take a look inside your next getaway. Warm lighting, fresh sheets, and total tranquility.</p>
          </div>
        </motion.div>

        {/* Masonry Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, ease: "easeOut" }} 
            viewport={{ once: true, margin: "-40px" }} 
            className="lg:col-span-2 h-72 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden relative group shadow-2xl shadow-black/40"
          >
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              src="/room1.jpg" 
              alt="Cozy Bedroom" 
              className="w-full h-full object-cover object-center" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 lg:p-8 pointer-events-none">
              <motion.span 
                initial={{ y: 10, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className={`${playfair.className} text-2xl md:text-3xl font-bold text-white drop-shadow-lg`}
              >
                Pristine Bathroom
              </motion.span>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 40 }} 
            whileInView={{ opacity: 1, y: 0 }} 
            transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }} 
            viewport={{ once: true, margin: "-40px" }} 
            className="h-72 md:h-96 lg:h-[500px] rounded-3xl overflow-hidden relative group shadow-2xl shadow-black/40"
          >
            <motion.img 
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              src="/room2.jpg" 
              alt="Modern Bathroom" 
              className="w-full h-full object-cover object-center" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-zinc-950/90 via-zinc-950/20 to-transparent opacity-100 lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-500 flex items-end p-6 lg:p-8 pointer-events-none">
              <motion.span 
                 initial={{ y: 10, opacity: 0 }}
                 whileInView={{ y: 0, opacity: 1 }}
                 transition={{ delay: 0.4 }}
                className={`${playfair.className} text-2xl md:text-3xl font-bold text-white drop-shadow-lg`}
              >
                Cozy Bedroom Setup
              </motion.span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* --- REVIEWS SECTION --- */}
      <section className="py-24 px-6 bg-zinc-900/30 border-t border-zinc-800/50 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUpVariant} className="max-w-3xl mx-auto">
          <h2 className={`${playfair.className} text-3xl md:text-5xl font-bold mb-8`}>What Our Guests Say.</h2>
          <div className="bg-zinc-950 border border-zinc-800 p-8 md:p-12 rounded-3xl relative shadow-xl">
            <span className="text-6xl text-amber-500/20 absolute top-4 left-6">"</span>
            <p className="text-lg md:text-xl text-zinc-300 italic relative z-10 mb-6">
              "An absolutely perfect stay! The room was spotless, the lighting was magical, and we felt completely safe and private. Highly recommend for couples looking for a peaceful getaway."
            </p>
            <div className="flex items-center justify-center gap-2 text-amber-400 mb-2 text-xl">
              ★★★★★
            </div>
            <p className="font-semibold text-white">- Verified Guest</p>
          </div>
        </motion.div>
      </section>

      {/* --- FOOTER --- */}
      <footer className="bg-zinc-950 border-t border-zinc-900 pt-16 pb-32 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 text-center md:text-left">
          
          {/* Brand Info */}
          <div className="flex flex-col items-center md:items-start">
            <div className="flex items-center gap-3 mb-4">
              <img src="/logo.png" alt="Misty Miles" className="h-8 w-auto grayscale opacity-50" />
              <span className={`${playfair.className} text-xl font-semibold text-zinc-300`}>Misty Miles</span>
            </div>
            <p className="text-zinc-500 text-sm max-w-xs">
              Your private, cozy escape at Darjeeling More, Siliguri. The perfect couple-friendly homestay experience.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h4 className="text-zinc-100 font-semibold mb-2">Explore</h4>
            <a href="#features" className="text-zinc-500 hover:text-amber-400 text-sm transition-colors">Amenities</a>
            <a href="#gallery" className="text-zinc-500 hover:text-amber-400 text-sm transition-colors">The Space</a>
            <a href="/book" className="text-zinc-500 hover:text-amber-400 text-sm transition-colors">Book Your Stay</a>
          </div>

          {/* Contact & Socials */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <h4 className="text-zinc-100 font-semibold mb-2">Connect</h4>
            <a href="tel:+918370958288" className="text-zinc-500 hover:text-amber-400 text-sm transition-colors flex items-center gap-2">
              <Phone size={14} /> +91 83709 58288
            </a>
            <a href="https://instagram.com/mistymiles_slg" target="_blank" className="text-zinc-500 hover:text-amber-400 text-sm transition-colors flex items-center gap-2">
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
              </svg>
              @mistymiles_slg
            </a>
          </div>
        </div>

        {/* Copyright & Agency Credit */}
        <div className="max-w-6xl mx-auto mt-16 pt-8 border-t border-zinc-900/50 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-600">
          <p>© 2026 Misty Miles Homestay. All rights reserved.</p>
          <p>
            Designed & Developed by <a href="https://abnel-portfolio.netlify.app/" target="_blank" className="text-zinc-400 hover:text-amber-400 font-medium transition-colors">Mr. Abnel</a>
          </p>
        </div>
      </footer>

      {/* --- STICKY FLOATING WHATSAPP BUTTON (With continuous bounce & glow) --- */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ 
          scale: 1,
          y: [0, -10, 0] 
        }}
        transition={{ 
          scale: { delay: 1, type: "spring", stiffness: 150 },
          y: { repeat: Infinity, duration: 2.5, ease: "easeInOut" } 
        }}
        className="fixed bottom-6 right-6 z-50 flex items-center justify-center"
      >
        <a
          href="https://wa.me/918370958288?text=Hi!%20I%20saw%20the%20website%20and%20would%20like%20to%20book%20a%20stay."
          target="_blank"
          className="relative bg-green-500 text-white p-4 rounded-full shadow-[0_0_20px_rgba(34,197,94,0.5)] hover:bg-green-400 transition-colors flex items-center justify-center group"
        >
          <span className="absolute inset-0 rounded-full bg-green-400 animate-ping opacity-75"></span>
          <MessageCircle size={32} className="relative z-10 group-hover:scale-110 transition-transform" />
        </a>
      </motion.div>
      
    </main>
  );
}