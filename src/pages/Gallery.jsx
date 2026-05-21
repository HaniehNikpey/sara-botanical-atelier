import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import GoldDivider from '../components/GoldDivider';

const galleryImages = [
  { src: 'https://media.base44.com/images/public/6a0b7be40991afaf609451f5/12ceab1d5_generated_d7feb6bb.png', title: 'Honey Balayage', category: 'colour', services: 'Balayage, Toner' },
  { src: 'https://media.base44.com/images/public/6a0b7be40991afaf609451f5/7ead6869d_generated_df4e4716.png', title: 'Luxury Experience', category: 'treatments', services: 'Wash & Treatment' },
  { src: 'https://media.base44.com/images/public/6a0b7be40991afaf609451f5/f5fd04747_generated_95f7c5e2.png', title: 'Modern Bob', category: 'cuts', services: 'Ladies Cut & Finish' },
  { src: 'https://media.base44.com/images/public/6a0b7be40991afaf609451f5/2e02d0952_generated_38298434.png', title: 'Romantic Waves', category: 'styling', services: 'Curls & Waves, Occasion Styling' },
  { src: 'https://media.base44.com/images/public/6a0b7be40991afaf609451f5/edae5da24_generated_d40e1a4e.png', title: 'Copper Transformation', category: 'colour', services: 'Full Head Colour, Toner' },
  { src: 'https://media.base44.com/images/public/6a0b7be40991afaf609451f5/a79e3b1f7_generated_f0ba4d70.png', title: 'Classic Gentleman', category: 'cuts', services: 'Gents Cut & Style' },
];

const filters = ['all', 'cuts', 'colour', 'styling', 'treatments'];

export default function Gallery() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filtered = activeFilter === 'all'
    ? galleryImages
    : galleryImages.filter(img => img.category === activeFilter);

  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 lg:py-28 bg-card text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4"
          >
            Portfolio
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-heading text-5xl md:text-6xl tracking-wider"
          >
            The Atelier Gallery
          </motion.h1>
          <GoldDivider className="mt-6" />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-accent text-xl text-muted-foreground italic mt-6"
          >
            A curated collection of transformations
          </motion.p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-background border-b border-border/50">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 flex justify-center gap-6 flex-wrap">
          {filters.map(filter => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`font-body text-xs tracking-[0.2em] uppercase pb-1 transition-all duration-300 ${
                activeFilter === filter
                  ? 'text-primary border-b border-primary'
                  : 'text-muted-foreground hover:text-foreground'
              }`}
            >
              {filter === 'all' ? 'All' : filter}
            </button>
          ))}
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <AnimatePresence mode="popLayout">
              {filtered.map((img, i) => (
                <motion.div
                  key={img.title}
                  layout
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, delay: i * 0.05 }}
                  className="relative group cursor-pointer overflow-hidden aspect-[4/5]"
                  onClick={() => setSelectedImage(img)}
                >
                  <img
                    src={img.src}
                    alt={img.title}
                    className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:saturate-[1.1]"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500" />
                  <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <h3 className="font-heading text-lg tracking-wider text-white">{img.title}</h3>
                    <p className="font-body text-xs text-white/70 mt-1">{img.services}</p>
                  </div>
                  {/* Decorative frame */}
                  <div className="absolute inset-3 border border-primary/0 group-hover:border-primary/20 transition-all duration-500" />
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-foreground/90 backdrop-blur-sm flex items-center justify-center p-6"
            onClick={() => setSelectedImage(null)}
          >
            <button
              className="absolute top-6 right-6 text-white/70 hover:text-white transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-6 h-6" />
            </button>
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="max-w-3xl w-full"
              onClick={e => e.stopPropagation()}
            >
              <img
                src={selectedImage.src}
                alt={selectedImage.title}
                className="w-full max-h-[75vh] object-contain"
              />
              <div className="mt-6 text-center">
                <h3 className="font-heading text-2xl tracking-wider text-white">{selectedImage.title}</h3>
                <p className="font-body text-sm text-white/60 mt-2">Services: {selectedImage.services}</p>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}