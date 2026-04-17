/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import confetti from 'canvas-confetti';
import { 
  GraduationCap, 
  Heart, 
  Sparkles, 
  Flower2, 
  Star, 
  Music, 
  Camera, 
  Award,
  ChevronRight,
  PartyPopper
} from 'lucide-react';

export default function App() {
  useEffect(() => {
    // Spectacular Celebration - Starts immediately and lasts 60 seconds
    const duration = 60 * 1000;
    const animationEnd = Date.now() + duration;
    
    // Rose petal colors
    const petalColors = ['#ff4d6d', '#ff758f', '#ff8fa3', '#ffb3c1', '#c9184a', '#800f2f'];
    
    const randomInRange = (min: number, max: number) => Math.random() * (max - min) + min;

    const interval: any = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 40 * (timeLeft / duration);
      
      // Fireworks from corners
      confetti({
        particleCount: Math.floor(particleCount),
        angle: 60,
        spread: 55,
        origin: { x: 0, y: 0.8 },
        colors: petalColors,
        ticks: 200
      });
      confetti({
        particleCount: Math.floor(particleCount),
        angle: 120,
        spread: 55,
        origin: { x: 1, y: 0.8 },
        colors: petalColors,
        ticks: 200
      });

      // Rose petals falling from top
      if (Math.random() > 0.7) {
        confetti({
          particleCount: 5,
          angle: randomInRange(250, 290),
          spread: 40,
          origin: { x: Math.random(), y: -0.1 },
          colors: petalColors,
          gravity: 0.5,
          scalar: randomInRange(0.8, 1.5),
          drift: randomInRange(-0.5, 0.5),
          ticks: 300
        });
      }
    }, 300);

    return () => clearInterval(interval);
  }, []);

  const handleCelebrate = () => {
    confetti({
      particleCount: 150,
      spread: 100,
      origin: { y: 0.6 },
      colors: ['#ff4d6d', '#ff758f', '#c9184a', '#ffd700'],
      ticks: 200
    });
  };

  return (
    <div className="min-h-screen bg-editorial-bg overflow-x-hidden selection:bg-editorial-pink-primary selection:text-editorial-pink-dark relative">
      {/* Sophisticated Background Elements */}
      <div className="fixed inset-0 bg-[radial-gradient(circle_at_top_right,_var(--color-editorial-pink-primary)_0%,_transparent_40%)] pointer-events-none z-0" />
      <div className="fixed -top-[150px] -left-[150px] w-[400px] h-[400px] border border-editorial-gold/10 rounded-full pointer-events-none z-0" />
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] h-[80vh] border border-editorial-gold/5 rounded-full pointer-events-none z-0" />
      
      {/* Hidden Large Heart Background */}
      <div className="fixed inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden">
        <Heart 
          size={800} 
          fill="#fce4ec" 
          stroke="none" 
          className="opacity-[0.03] rotate-12"
        />
      </div>
      
      <div className="fixed bottom-[40px] left-[60px] font-decorative text-[140px] text-editorial-gold/5 pointer-events-none z-0 select-none">
        Khánh Chi
      </div>

      {/* Falling Rose Petals Background (Motion) */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ 
              x: Math.random() * 100 + '%', 
              y: '-10%', 
              rotate: 0,
              opacity: 0
            }}
            animate={{ 
              y: '110%', 
              rotate: 720,
              opacity: [0, 0.6, 0.6, 0]
            }}
            transition={{ 
              duration: Math.random() * 10 + 10, 
              repeat: Infinity, 
              ease: "linear",
              delay: Math.random() * 20
            }}
            className="absolute"
          >
            <Heart size={Math.random() * 20 + 10} fill="#ff758f" className="opacity-40" />
          </motion.div>
        ))}
      </div>

      {/* Main Editorial Container */}
      <main className="relative z-10 max-w-[1300px] mx-auto min-h-screen p-8 md:p-16 lg:p-24 grid grid-cols-1 lg:grid-cols-[1.1fr_1fr] gap-12 lg:gap-24 items-center">
        
        {/* Left Section: The Message */}
        <div className="flex flex-col">
          <motion.div
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
            <div className="editorial-label flex items-center gap-3">
              <span className="w-8 h-[1px] bg-editorial-gold"></span>
              Special Milestone • 2026
            </div>
            <h1 className="editorial-h1">
              <span className="block text-editorial-gold italic font-decorative text-5xl mb-2">Chúc Mừng</span>
              <span className="block tracking-tighter">Tốt Nghiệp</span>
            </h1>
            
            <div className="mt-6 max-w-[550px] p-10 glass rounded-[2rem] gold-border shadow-2xl relative">
              <div className="absolute top-0 right-0 p-6 text-editorial-gold/20">
                <Sparkles size={120} className="rotate-12" />
              </div>
              
              <div className="relative z-10">
                <h3 className="font-decorative text-5xl text-editorial-pink-dark mb-8">Gửi Khánh Chi,</h3>
                <div className="font-serif text-2xl text-editorial-text/90 space-y-6 leading-relaxed italic">
                  <p>
                    Chúc mừng Khánh Chi đã tốt nghiệp! 
                  </p>
                  <p>
                    Hãy cứ làm thật tốt ở hiện tại và không ngừng cố gắng cho những mục tiêu rực rỡ ở tương lai nhé.
                  </p>
                  <p>
                    Anh luôn ở đây ủng hộ và đồng hành cùng Khánh Chi.
                  </p>
                  <div className="pt-6 flex items-center gap-4">
                    <span className="w-12 h-[1px] bg-editorial-pink-dark/30"></span>
                    <p className="font-handwritten text-4xl text-editorial-pink-dark not-italic">Mãi yêu em!</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Right Section: The Honoree */}
        <div className="flex flex-col lg:items-end lg:text-right">
          <motion.div
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
            className="space-y-6"
          >
            <div className="editorial-label">Honoring the Graduate</div>
            <div className="relative">
              <div className="text-8xl md:text-9xl text-editorial-pink-dark font-decorative leading-none">
                Trần Khánh Chi
              </div>
              <motion.div 
                initial={{ width: 0 }}
                animate={{ width: "100%" }}
                transition={{ duration: 1.5, delay: 1 }}
                className="h-[1px] bg-editorial-gold/40 mt-4 ml-auto"
              />
            </div>
            <div className="editorial-badge">Tốt Nghiệp Học viện Tư Pháp</div>
          </motion.div>

          {/* Decorative Flower Display */}
          <div className="mt-20 w-full lg:max-w-[450px] relative">
            <div className="editorial-label">A Bouquet for You</div>
            <div className="relative h-64 flex items-center justify-center lg:justify-end">
              <div className="absolute inset-0 bg-editorial-pink-primary/20 rounded-full blur-3xl -z-10" />
              {[...Array(16)].map((_, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    x: (Math.random() - 0.5) * 180, 
                    y: (Math.random() - 0.5) * 120,
                    rotate: Math.random() * 360
                  }}
                  transition={{ 
                    type: "spring",
                    stiffness: 50,
                    delay: 1.5 + i * 0.08 
                  }}
                  className="absolute text-editorial-pink-accent"
                >
                  <Flower2 size={42} fill={i % 3 === 0 ? "#fce4ec" : "none"} className="drop-shadow-md" />
                </motion.div>
              ))}
            </div>
          </div>

          <div className="mt-16 flex flex-col items-center lg:items-end">
            <motion.div 
              animate={{ scale: [1, 1.2, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="text-editorial-gold text-5xl mb-4"
            >
              ♥
            </motion.div>
            <div className="font-handwritten text-3xl text-editorial-pink-accent">
              Gửi ngàn lời chúc tốt đẹp nhất đến em Khánh Chi của anh.
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="py-16 px-4 text-center border-t border-editorial-gold/10 bg-white/80 backdrop-blur-md relative z-10">
        <div className="flex items-center justify-center gap-4 text-editorial-gold mb-6">
          <Star size={18} fill="currentColor" />
          <span className="font-editorial text-[11px] uppercase tracking-[5px] opacity-80">Special Milestone • 2026</span>
          <Star size={18} fill="currentColor" />
        </div>
        <p className="text-editorial-pink-dark/50 text-[10px] font-editorial tracking-[3px] uppercase">
          © 2026 Graduation Celebration • Happy Graduation Khánh Chi!
        </p>
      </footer>
    </div>
  );
}
