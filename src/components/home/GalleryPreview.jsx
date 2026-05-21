import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import GoldDivider from '../GoldDivider';

const images = [
  { src: 'https://media.base44.com/images/public/6a0b7be40991afaf609451f5/12ceab1d5_generated_d7feb6bb.png', alt: 'Balayage hair coloring' },
  { src: 'https://media.base44.com/images/public/6a0b7be40991afaf609451f5/7ead6869d_generated_df4e4716.png', alt: 'Luxury hair wash' },
  { src: 'https://media.base44.com/images/public/6a0b7be40991afaf609451f5/f5fd04747_generated_95f7c5e2.png', alt: 'Modern bob haircut' },
];

export default function GalleryPreview() {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">Portfolio</p>
          <h2 className="font-heading text-4xl md:text-5xl tracking-wider">The Atelier</h2>
          <GoldDivider className="mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {images.map((img, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15, duration: 0.6 }}
              className="relative group overflow-hidden aspect-[4/5]"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-full object-cover transition-all duration-700 group-hover:scale-105 group-hover:saturate-[1.1]"
              />
              <div className="absolute inset-0 border border-primary/0 group-hover:border-primary/20 transition-all duration-500 m-3" />
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/gallery"
            className="font-body text-xs tracking-[0.2em] uppercase text-primary hover:text-foreground transition-colors duration-300 border-b border-primary/30 pb-1"
          >
            View Full Gallery
          </Link>
        </div>
      </div>
    </section>
  );
}