"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import BrandLogo from "@/components/BrandLogo";
import { 
  ArrowRight, 
  Brain, 
  Trophy, 
  Target, 
  Sparkles, 
  Clock, 
  BookOpen,
  CheckCircle2
} from "lucide-react";

const NavBar = () => {
  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 p-4 pointer-events-none"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center bg-[#f4efe6]/90 backdrop-blur-md border-2 border-[#0f0e0e] rounded-2xl px-6 py-4 brutal-shadow-sm pointer-events-auto">
        <BrandLogo
          priority
          size={32}
          labelClassName="text-xl"
          iconClassName="w-8 h-8"
        />
        <div className="hidden md:flex gap-6 font-medium text-sm">
          <Link href="#features" className="hover:underline decoration-2 underline-offset-4">Features</Link>
          <Link href="#vocab" className="hover:underline decoration-2 underline-offset-4">Vocab Builder</Link>
        </div>
        <div className="flex gap-4 items-center">
          <Link href="https://learn.ronansat.com/auth" className="font-bold text-sm hover:opacity-70 transition-opacity">Log in</Link>
          <Link 
            href="https://learn.ronansat.com/auth" 
            className="bg-[#0f0e0e] text-[#f4efe6] px-5 py-2.5 rounded-full font-bold text-sm hover:scale-105 transition-transform brutal-shadow-sm border-2 border-[#0f0e0e]"
          >
            Start Free
          </Link>
        </div>
      </div>
    </motion.nav>
  );
};

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center pt-24 pb-12 overflow-hidden bg-grid-pattern">
      <motion.div 
        animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }} 
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-32 left-10 md:left-20 w-32 h-32 bg-[#FF82A9] rounded-full border-4 border-[#0f0e0e] brutal-shadow mix-blend-multiply flex items-center justify-center -z-10"
      >
        <Sparkles className="w-12 h-12 text-[#0f0e0e]" />
      </motion.div>

      <motion.div 
        animate={{ y: [0, 30, 0], rotate: [0, -10, 0] }} 
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute bottom-40 right-10 md:right-20 w-40 h-40 bg-[#D9FF42] border-4 border-[#0f0e0e] rounded-3xl brutal-shadow mix-blend-multiply flex items-center justify-center -z-10"
      >
         <Target className="w-16 h-16 text-[#0f0e0e]" />
      </motion.div>

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        <div className="flex flex-col items-center text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ type: "spring", bounce: 0.5 }}
            className="inline-flex items-center gap-2 bg-white border-2 border-[#0f0e0e] px-4 py-2 rounded-full mb-8 brutal-shadow-sm rotate-[-2deg]"
          >
             <span className="w-3 h-3 rounded-full bg-[#FF6B35] animate-pulse"></span>
             <span className="font-bold text-sm uppercase tracking-wider">Not your average prep course</span>
          </motion.div>

          <motion.h1 
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-[4rem] md:text-[7rem] leading-[0.9] font-display font-black tracking-tighter text-balance uppercase"
          >
            Hate Studying?<br/>
            <span className="text-outline">We Made It</span><br/>
            <span className="relative inline-block mt-2">
              <span className="relative z-10 bg-[#4287FF] text-white px-6 py-2 border-4 border-[#0f0e0e] rounded-2xl brutal-shadow-lg inline-block transform rotate-2">
                Addicting.
              </span>
            </span>
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-10 text-xl md:text-2xl max-w-2xl font-medium text-[#0f0e0e]/80 text-balance"
          >
            Full test simulations, aggressive analytics, and a vocabulary builder that feels like a game. Crush the SAT without losing your mind.
          </motion.p>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-12 flex flex-col sm:flex-row gap-4 w-full sm:w-auto"
          >
            <Link href="https://learn.ronansat.com/auth" className="group relative w-full sm:w-auto">
              <div className="absolute inset-0 bg-[#0f0e0e] rounded-2xl translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
              <div className="relative flex items-center justify-center gap-2 bg-[#D9FF42] border-4 border-[#0f0e0e] px-8 py-5 rounded-2xl text-xl font-bold font-display uppercase tracking-wide transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
                Start Practicing
                <ArrowRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
            <Link href="#features" className="group relative w-full sm:w-auto">
              <div className="absolute inset-0 bg-[#0f0e0e] rounded-2xl translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
              <div className="relative flex items-center justify-center bg-white border-4 border-[#0f0e0e] px-8 py-5 rounded-2xl text-xl font-bold font-display uppercase tracking-wide transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
                See Features
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const StarIcon = () => (
  <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12 0L14.59 9.41L24 12L14.59 14.59L12 24L9.41 14.59L0 12L9.41 9.41L12 0Z" />
  </svg>
);

const MarqueeSection = () => {
  return (
    <div className="bg-[#0f0e0e] text-[#D9FF42] py-6 border-y-4 border-[#0f0e0e] flex overflow-hidden whitespace-nowrap -rotate-2 scale-105 origin-center relative z-20">
      <div className="marquee-content font-display font-black text-4xl uppercase tracking-widest flex items-center">
        {Array.from({ length: 10 }).map((_, i) => (
          <span key={i} className="flex items-center">
            <span className="mx-8">Score Higher</span>
            <StarIcon />
            <span className="mx-8">Study Smarter</span>
            <StarIcon />
            <span className="mx-8">Beat The Test</span>
            <StarIcon />
          </span>
        ))}
      </div>
    </div>
  );
};

const BentoFeatures = () => {
  return (
    <section id="features" className="py-32 px-6 max-w-7xl mx-auto">
      <div className="mb-16">
        <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tight text-balance">
          We rebuilt prep <br/> <span className="text-[#4287FF] text-outline" style={{ WebkitTextStroke: "2px #0f0e0e" }}>from the ground up.</span>
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:auto-rows-[300px]">
        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-2 bg-[#FF6B35] rounded-3xl border-4 border-[#0f0e0e] brutal-shadow p-8 flex flex-col justify-between overflow-hidden relative group min-h-[300px]"
        >
          <div className="relative z-10">
            <div className="bg-white border-2 border-[#0f0e0e] p-3 rounded-full inline-flex brutal-shadow-sm mb-6">
              <Clock className="w-6 h-6 text-[#0f0e0e]" />
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-black text-[#0f0e0e] uppercase">Test-Day Simulation</h3>
            <p className="mt-4 text-lg text-[#0f0e0e]/90 font-medium max-w-md">
              Sit down to a full Digital SAT flow that feels calm, focused, and exactly like the real thing. No surprises on test day.
            </p>
          </div>
          <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white/20 rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500"></div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-white rounded-3xl border-4 border-[#0f0e0e] brutal-shadow p-8 flex flex-col justify-between min-h-[300px]"
        >
          <div>
             <div className="bg-[#4287FF] border-2 border-[#0f0e0e] p-3 rounded-full inline-flex brutal-shadow-sm mb-6">
              <Trophy className="w-6 h-6 text-white" />
            </div>
            <h3 className="text-3xl font-display font-black text-[#0f0e0e] uppercase">Leaderboards</h3>
            <p className="mt-4 text-base font-medium text-gray-700">
              Friendly competition. Climb the ranks as you master new concepts.
            </p>
          </div>
          <div className="mt-6 flex items-end gap-2 h-20">
            <div className="w-1/3 bg-[#f4efe6] h-[40%] rounded-xl border-2 border-[#0f0e0e]"></div>
            <div className="w-1/3 bg-[#FF82A9] h-[80%] rounded-xl border-2 border-[#0f0e0e]"></div>
            <div className="w-1/3 bg-[#D9FF42] h-[100%] rounded-xl border-2 border-[#0f0e0e]"></div>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="bg-[#D9FF42] rounded-3xl border-4 border-[#0f0e0e] brutal-shadow p-8 flex flex-col justify-between min-h-[300px]"
        >
          <div>
            <div className="bg-white border-2 border-[#0f0e0e] p-3 rounded-full inline-flex brutal-shadow-sm mb-6">
              <Brain className="w-6 h-6 text-[#0f0e0e]" />
            </div>
            <h3 className="text-3xl font-display font-black text-[#0f0e0e] uppercase">Precision Analytics</h3>
            <p className="mt-4 text-base font-medium text-gray-800">
              See pacing, topic mastery, and exact miss patterns instantly.
            </p>
          </div>
        </motion.div>

        <motion.div 
          whileHover={{ y: -5 }}
          className="md:col-span-2 bg-[#0f0e0e] rounded-3xl border-4 border-[#0f0e0e] brutal-shadow p-8 flex flex-col md:flex-row justify-between items-center text-[#f4efe6] overflow-hidden relative min-h-[300px]"
        >
           <div className="relative z-10 md:w-1/2">
            <div className="bg-[#FF82A9] border-2 border-[#FF82A9] p-3 rounded-full inline-flex mb-6">
              <BookOpen className="w-6 h-6 text-[#0f0e0e]" />
            </div>
            <h3 className="text-3xl md:text-4xl font-display font-black uppercase text-white">Smart Vocab Builder</h3>
            <p className="mt-4 text-lg text-gray-300 font-medium">
              Turn weak words into repeat wins with fast review loops and memory cues that actually stick.
            </p>
          </div>
          <div className="mt-8 md:mt-0 relative z-10 w-full md:w-auto flex justify-center perspective-1000">
            <motion.div 
              animate={{ rotateY: [0, 360] }}
              transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
              className="w-48 h-64 bg-white border-4 border-[#f4efe6] rounded-2xl brutal-shadow flex items-center justify-center p-6 text-center transform-style-3d text-[#0f0e0e]"
            >
              <div>
                <span className="font-display font-bold text-2xl border-b-2 border-black/10 pb-2">Obfuscate</span>
                <p className="mt-4 text-sm font-medium text-gray-600 italic">(verb) to render obscure, unclear, or unintelligible.</p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

const FlashcardDemo = () => {
  const [isFlipped, setIsFlipped] = useState(false);

  return (
    <section id="vocab" className="py-24 px-6 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
        <div className="md:w-1/2">
          <div className="inline-block bg-[#D9FF42] text-[#0f0e0e] px-4 py-1 border-2 border-[#0f0e0e] rounded-full font-bold text-sm uppercase tracking-wider brutal-shadow-sm mb-6 rotate-2">
            Interactive Demo
          </div>
          <h2 className="text-5xl md:text-6xl font-display font-black uppercase tracking-tight text-[#0f0e0e] mb-6">
            Words that stick.
          </h2>
          <p className="text-xl text-gray-700 font-medium mb-8">
            Stop staring at boring lists. Our vocabulary builder uses spaced repetition and visceral design to sear definitions into your brain.
          </p>
          <ul className="space-y-4 mb-10">
            {["Curated high-frequency SAT words", "Spaced repetition algorithms", "Contextual example sentences"].map((item, i) => (
              <li key={i} className="flex items-center gap-3 font-medium text-lg">
                <CheckCircle2 className="w-6 h-6 text-[#FF6B35]" />
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="md:w-1/2 flex justify-center w-full">
          <div 
            className="w-full max-w-sm h-96 cursor-pointer perspective-1000"
            onClick={() => setIsFlipped(!isFlipped)}
          >
            <motion.div
              className="w-full h-full relative preserve-3d transition-transform duration-700"
              animate={{ rotateY: isFlipped ? 180 : 0 }}
            >
              {/* Front */}
              <div className="absolute inset-0 backface-hidden bg-white border-4 border-[#0f0e0e] rounded-3xl brutal-shadow-lg flex flex-col items-center justify-center p-8">
                <div className="text-6xl font-display font-black text-[#0f0e0e] tracking-tight">
                  Ephemeral
                </div>
                <div className="mt-10 animate-bounce flex items-center gap-2 text-gray-500 font-bold uppercase tracking-widest text-sm">
                  Click to Flip
                </div>
              </div>
              
              {/* Back */}
              <div 
                className="absolute inset-0 backface-hidden bg-[#FF82A9] border-4 border-[#0f0e0e] rounded-3xl brutal-shadow-lg flex flex-col items-center justify-center p-8 text-center"
                style={{ transform: "rotateY(180deg)" }}
              >
                <div className="text-2xl font-display font-black text-[#0f0e0e] mb-4">
                  (adjective)
                </div>
                <div className="text-3xl font-bold text-white mb-6">
                  Lasting for a very short time.
                </div>
                <div className="text-lg font-medium text-[#0f0e0e]/80 italic bg-white/20 p-4 rounded-xl border-2 border-[#0f0e0e]">
                  &ldquo;The viral meme&apos;s fame was ephemeral, forgotten within a week.&rdquo;
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

const CTASection = () => {
  return (
    <section className="py-32 px-6">
      <div className="max-w-5xl mx-auto bg-[#4287FF] border-4 border-[#0f0e0e] rounded-[3rem] brutal-shadow-lg p-12 md:p-24 text-center relative overflow-hidden">
        <div className="absolute -top-10 -left-10 w-40 h-40 bg-[#D9FF42] rounded-full border-4 border-[#0f0e0e] mix-blend-overlay"></div>
        <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-[#FF6B35] rotate-45 border-4 border-[#0f0e0e] mix-blend-overlay"></div>
        
        <div className="relative z-10">
          <h2 className="text-5xl md:text-7xl font-display font-black uppercase tracking-tighter text-white mb-8">
            Ready to <br/><span className="text-[#D9FF42] text-outline" style={{ WebkitTextStroke: "2px #0f0e0e" }}>Destroy</span> the SAT?
          </h2>
          <p className="text-xl md:text-2xl font-medium text-white/90 mb-12 max-w-2xl mx-auto">
            Join thousands of students who traded boring textbooks for a study platform they actually want to use.
          </p>
          <Link href="https://learn.ronansat.com/auth" className="group relative inline-block">
            <div className="absolute inset-0 bg-[#0f0e0e] rounded-2xl translate-x-2 translate-y-2 transition-transform group-hover:translate-x-3 group-hover:translate-y-3"></div>
            <div className="relative flex items-center justify-center gap-2 bg-[#D9FF42] border-4 border-[#0f0e0e] px-10 py-6 rounded-2xl text-2xl font-bold font-display uppercase tracking-wide transition-transform group-hover:-translate-y-1 group-hover:-translate-x-1">
              Start Your Free Trial
              <BrandLogo
                withWordmark={false}
                size={32}
                iconClassName="w-8 h-8 group-hover:rotate-12 transition-transform"
              />
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-[#0f0e0e] text-[#f4efe6] pt-24 pb-12 px-6 border-t-8 border-[#D9FF42]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-12 border-b border-white/20 pb-12">
        <div className="max-w-sm">
          <BrandLogo
            size={40}
            labelClassName="text-3xl"
            iconClassName="w-10 h-10"
            className="mb-6"
          />
          <p className="text-gray-400 font-medium text-lg">
            Score growth, but fun. The SAT study suite for the next generation.
          </p>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-12 w-full md:w-auto">
          <div>
            <h4 className="font-bold uppercase tracking-wider text-gray-500 mb-4">Product</h4>
            <ul className="space-y-3 font-medium text-lg">
              <li><Link href="#features" className="hover:text-[#D9FF42] transition-colors">Features</Link></li>
              <li><Link href="#" className="hover:text-[#D9FF42] transition-colors">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h4 className="font-bold uppercase tracking-wider text-gray-500 mb-4">Resources</h4>
            <ul className="space-y-3 font-medium text-lg">
              <li><Link href="#" className="hover:text-[#FF82A9] transition-colors">Blog</Link></li>
              <li><Link href="#" className="hover:text-[#FF82A9] transition-colors">Support</Link></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-12 flex flex-col md:flex-row justify-between items-center gap-6 font-medium text-gray-500">
        <p>© {new Date().getFullYear()} Ronan SAT. All rights reserved.</p>
        <div className="flex gap-6">
          <Link href="#" className="hover:text-white transition-colors">Twitter</Link>
          <Link href="#" className="hover:text-white transition-colors">Instagram</Link>
        </div>
      </div>
    </footer>
  );
};

export default function Home() {
  return (
    <div className="min-h-screen bg-[#f4efe6] selection:bg-[#D9FF42] selection:text-[#0f0e0e] overflow-x-hidden">
      <NavBar />
      <main>
        <HeroSection />
        <MarqueeSection />
        <BentoFeatures />
        <FlashcardDemo />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
