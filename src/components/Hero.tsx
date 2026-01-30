import { useState, useEffect } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

export const Hero = () => {
  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-emerald-950">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://raw.githubusercontent.com/Glyphor-Fuse/the-gilded-pasture/main/public/images/hero-alpaca.png" 
          alt="Royal Alpaca" 
          className="w-full h-full object-cover opacity-60 mix-blend-overlay scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-950/40 to-emerald-950" />
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl border-[12px] border-double border-gold-500/30 p-12 backdrop-blur-sm bg-emerald-900/20">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          <span className="text-gold-400 font-serif italic tracking-widest uppercase text-sm mb-4 block">Est. 1974 — The High Plains</span>
          <h1 className="text-6xl md:text-9xl font-display text-gold-500 drop-shadow-[0_2px_10px_rgba(255,215,0,0.3)] mb-6 leading-tight">
            THE GILDED <br/> PASTURE
          </h1>
          <p className="text-dust-200 text-lg md:text-2xl font-serif max-w-2xl mx-auto italic">
            Where the dust of the ranch meets the luster of the court. Experience the world's most fashionable menagerie.
          </p>
        </motion.div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
        <div className="w-[1px] h-20 bg-gradient-to-b from-gold-500 to-transparent" />
        <span className="text-gold-500 text-[10px] uppercase tracking-[0.4em] mt-4">Scroll to Groom</span>
      </div>
    </section>
  );
};

export default Hero;
