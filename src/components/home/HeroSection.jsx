import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src="https://media.base44.com/images/public/6a0b7be40991afaf609451f5/12c12e732_generated_7a604a64.png"
          alt="Elegant bridal updo hairstyle with golden hour lighting"
          className="w-full h-full object-cover object-center" />
        
        <div className="absolute inset-0 bg-gradient-to-r from-background/90 via-background/60 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 w-full">
        <div className="max-w-xl">
          






          

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="font-heading text-6xl md:text-8xl lg:text-9xl tracking-wider text-foreground leading-none">
            
            SARA
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, scaleX: 0 }}
            animate={{ opacity: 1, scaleX: 1 }}
            transition={{ delay: 0.7, duration: 0.6 }}
            className="h-[0.5px] w-24 bg-primary/60 my-8 origin-left" />
          

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="font-accent text-xl md:text-2xl text-muted-foreground italic leading-relaxed">
            
            Where Victorian elegance meets modern artistry.
            <br />
            Every visit is a transformation.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="mt-10 flex flex-wrap gap-4">
            
            <Link
              to="/booking"
              className="font-body text-xs tracking-[0.2em] uppercase px-8 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300">
              
              Book Appointment
            </Link>
            <Link
              to="/services"
              className="font-body text-xs tracking-[0.2em] uppercase px-8 py-4 border border-foreground/20 text-foreground hover:border-primary hover:text-primary transition-all duration-300">
              
              View Services
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Decorative scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        
        <span className="font-body text-[10px] tracking-[0.3em] uppercase text-muted-foreground">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="w-[1px] h-8 bg-primary/40" />
        
      </motion.div>
    </section>);

}