import { Hero } from "@/components/Hero";
import { AnimalGallery } from "@/components/AnimalGallery";
import { GroomerSection } from "@/components/GroomerSection";
import { motion } from "framer-motion";

const Index = () => {
  return (
    <main className="min-h-screen">
      <Hero />
      
      {/* Intro Text Section */}
      <section className="py-32 bg-emerald-950 px-6 border-y border-gold-500/20">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <img src="/images/victorian-divider.png" alt="" className="mx-auto w-48 mb-12 opacity-50" />
            <h2 className="text-4xl md:text-5xl font-display text-gold-500 mb-8 italic">
              "A pastoral symphony in emerald and gold."
            </h2>
            <p className="text-xl md:text-2xl text-dust-200 leading-relaxed font-serif">
              The Gilded Pasture is not merely a ranch; it is a testament to the beauty of the beast. 
              Founded in 1974 by rhinestone pioneer Earl 'Glitters' Greyson, we specialize in the 
              care and presentation of heritage breeds adorned for the highest of society.
            </p>
          </motion.div>
        </div>
      </section>

      <AnimalGallery />
      
      <GroomerSection />

      {/* Booking / CTA Section */}
      <section className="py-40 bg-emerald-900 relative">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
           <div className="w-full h-full bg-[url('https://www.transparenttextures.com/patterns/leather.png')]" />
        </div>
        
        <div className="max-w-3xl mx-auto text-center relative z-10 px-6">
          <div className="border-[1px] border-gold-500/50 p-16">
            <h2 className="text-5xl font-display text-gold-500 mb-6">SECURE YOUR AUDIENCE</h2>
            <p className="text-gold-200 mb-10 text-lg italic">Private viewings by appointment only. Formal attire encouraged.</p>
            <button className="bg-gold-500 text-emerald-950 px-12 py-4 font-display text-xl uppercase tracking-widest hover:bg-gold-400 transition-colors shadow-[0_0_20px_rgba(191,155,48,0.4)]">
              Inquire Within
            </button>
          </div>
        </div>
      </section>

      <footer className="py-12 bg-emerald-950 border-t border-gold-900/50 text-center">
        <p className="text-gold-600 font-serif italic text-sm tracking-widest uppercase">
          © 1974 The Gilded Pasture — Rhinestones & Radiance
        </p>
      </footer>
    </main>
  );
};

export default Index;
