import { useRef, useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export const GroomerSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);
  
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springX = useSpring(mouseX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 100, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left);
    mouseY.set(e.clientY - rect.top);
  };

  return (
    <section className="relative py-32 bg-emerald-950 overflow-hidden cursor-none"
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovering(true)}
      onMouseLeave={() => setIsHovering(false)}
    >
      <div className="max-w-5xl mx-auto px-6 relative z-10 pointer-events-none">
        <h2 className="text-5xl md:text-7xl font-display text-emerald-800 opacity-30 select-none mb-8">
          BRUSH TO REVEAL SECRETS
        </h2>
        
        <div className="relative h-[400px] w-full bg-emerald-900 border-2 border-gold-900/30 overflow-hidden">
          {/* Base Layer: Golden Secrets */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-center bg-gradient-to-br from-gold-600 to-gold-400">
            <h4 className="text-emerald-950 font-display text-4xl mb-4 uppercase italic">The Golden Temperament</h4>
            <p className="text-emerald-900 font-serif text-xl max-w-xl">
              "Every creature at The Gilded Pasture is hand-brushed thrice daily with 24k gold-tipped bristles. They prefer vintage jazz and organic strawberries."
            </p>
          </div>

          {/* Top Layer: Fur Texture (Revealed via mask) */}
          <motion.div 
            className="absolute inset-0 bg-emerald-950 z-20 mix-blend-multiply"
            style={{
              WebkitMaskImage: `radial-gradient(150px circle at ${springX}px ${springY}px, transparent 10%, black 70%)`,
              maskImage: `radial-gradient(150px circle at ${springX}px ${springY}px, transparent 10%, black 70%)`,
            }}
          >
             <img 
               src="https://raw.githubusercontent.com/Glyphor-Fuse/the-gilded-pasture/main/public/images/fur-texture.png" 
               alt="Fur Texture" 
               className="w-full h-full object-cover opacity-80"
             />
          </motion.div>
        </div>
      </div>

      {/* Custom Cursor: The Brush */}
      <motion.div 
        className="fixed pointer-events-none z-50 w-24 h-24 flex items-center justify-center"
        style={{
          left: springX,
          top: springY,
          x: '-50%',
          y: '-50%',
          display: isHovering ? 'flex' : 'none'
        }}
      >
        <div className="w-full h-full border-2 border-gold-500 rounded-full animate-pulse flex items-center justify-center">
            <div className="text-gold-500 font-serif italic text-[10px] uppercase">Groom</div>
        </div>
      </motion.div>
    </section>
  );
};

export default GroomerSection;
