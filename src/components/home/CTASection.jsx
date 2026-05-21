import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

export default function CTASection() {
  return (
    <section className="py-24 lg:py-32 bg-card">
      <div className="max-w-3xl mx-auto px-6 lg:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}>
          
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">Begin Your Transformation</p>
          <h2 className="font-heading text-4xl md:text-5xl tracking-wider mb-6">Your Transformation Awaits

          </h2>
          <p className="font-accent text-xl text-muted-foreground italic leading-relaxed mb-10">
            Step into the atelier and discover the artistry of Sara.
            Book your appointment today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="font-body text-xs tracking-[0.2em] uppercase px-10 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300">
              
              Book Appointment
            </Link>
            <Link
              to="/contact"
              className="font-body text-xs tracking-[0.2em] uppercase px-10 py-4 border border-foreground/20 text-foreground hover:border-primary hover:text-primary transition-all duration-300">
              
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </div>
    </section>);

}