import React from 'react';
import { motion } from 'framer-motion';

const animals = [
  {
    name: "Sir Lancelot",
    species: "Miniature Highland Cow",
    image: "https://raw.githubusercontent.com/Glyphor-Fuse/the-gilded-pasture/main/public/images/cow-portrait.png",
    detail: "Loves classical opera and gold-dusted hay."
  },
  {
    name: "Baroness Fluff",
    species: "Silkie Chicken",
    image: "https://raw.githubusercontent.com/Glyphor-Fuse/the-gilded-pasture/main/public/images/chicken-portrait.png",
    detail: "Refuses to walk on anything but velvet."
  },
  {
    name: "Duke of Dust",
    species: "Pygmy Goat",
    image: "https://raw.githubusercontent.com/Glyphor-Fuse/the-gilded-pasture/main/public/images/goat-portrait.png",
    detail: "Distinguished by his rhinestone-encrusted horns."
  }
];

export const AnimalGallery = () => {
  return (
    <section className="py-24 bg-emerald-900 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-6xl font-display text-gold-400 mb-4 uppercase tracking-tighter">Our Resident Icons</h2>
          <div className="h-1 w-24 bg-gold-500 mx-auto" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {animals.map((animal, idx) => (
            <motion.div 
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.2 }}
              className="group relative"
            >
              <div className="aspect-[3/4] overflow-hidden border-8 border-emerald-800 shadow-2xl relative">
                <div className="absolute inset-0 border-[1px] border-gold-500/50 z-10 m-2" />
                <img 
                  src={animal.image} 
                  alt={animal.name} 
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700"
                />
                <div className="absolute inset-0 bg-emerald-950/40 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8 text-white">
                   <p className="font-serif italic text-gold-200">{animal.detail}</p>
                </div>
              </div>
              <div className="mt-6 text-center">
                <h3 className="text-gold-500 font-display text-2xl uppercase">{animal.name}</h3>
                <p className="text-emerald-200 font-serif italic">{animal.species}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AnimalGallery;
