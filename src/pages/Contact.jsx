import React from 'react';
import { motion } from 'framer-motion';
import { Phone, MapPin, Clock, Star } from 'lucide-react';
import GoldDivider from '../components/GoldDivider';
import ContactForm from '../components/contact/ContactForm';

const reviews = [
  {
    name: 'Emily R.',
    text: 'Sara transformed my hair completely. The balayage was exactly what I had envisioned — natural, sun-kissed, and absolutely gorgeous. A true artist.',
    rating: 5,
    service: 'Balayage',
  },
  {
    name: 'Charlotte M.',
    text: "The most relaxing salon experience I've ever had. Sara truly listens to what you want and delivers beyond expectations. My wedding updo was perfection.",
    rating: 5,
    service: 'Occasion Styling',
  },
  {
    name: 'James T.',
    text: "Finally found someone who understands what a proper gent's cut should look like. Clean, precise, and stylish. Will not go anywhere else.",
    rating: 5,
    service: 'Gents Cut & Style',
  },
];

export default function Contact() {
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
            The Correspondence Room
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-heading text-5xl md:text-6xl tracking-wider"
          >
            Get in Touch
          </motion.h1>
          <GoldDivider className="mt-6" />
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="font-heading text-2xl tracking-wider mb-2">Send a Message</h2>
              <p className="font-body text-sm text-muted-foreground mb-8">
                We'd love to hear from you. Fill in the form and we'll get back to you shortly.
              </p>
              <ContactForm />
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="space-y-10"
            >
              {/* Contact Details */}
              <div>
                <h3 className="font-heading text-lg tracking-wider mb-6">Contact Details</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <Phone className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-body text-sm font-medium">Phone</p>
                      <p className="font-body text-sm text-muted-foreground">07XXX XXXXXX</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <svg className="w-4 h-4 text-primary mt-1 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                    </svg>
                    <div>
                      <p className="font-body text-sm font-medium">Instagram</p>
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-body text-sm text-primary hover:text-foreground transition-colors"
                      >
                        @sara.atelier
                      </a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <MapPin className="w-4 h-4 text-primary mt-1 flex-shrink-0" />
                    <div>
                      <p className="font-body text-sm font-medium">Location</p>
                      <p className="font-body text-sm text-muted-foreground">Coming Soon</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div>
                <h3 className="font-heading text-lg tracking-wider mb-6 flex items-center gap-2">
                  <Clock className="w-4 h-4 text-primary" />
                  Opening Hours
                </h3>
                <div className="space-y-3 font-body text-sm">
                  {[
                    { day: 'Monday – Friday', time: '9:00 AM – 7:00 PM' },
                    { day: 'Saturday', time: '9:00 AM – 5:00 PM' },
                    { day: 'Sunday', time: 'Closed' },
                  ].map(({ day, time }) => (
                    <div key={day} className="flex justify-between py-2 border-b border-border/30">
                      <span className="text-muted-foreground">{day}</span>
                      <span>{time}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16 lg:py-24 bg-card">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-12">
            <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">Testimonials</p>
            <h2 className="font-heading text-3xl tracking-wider">What Our Clients Say</h2>
            <GoldDivider className="mt-6" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.5 }}
                className="p-8 bg-background border border-border/50 relative"
              >
                <span className="font-heading text-6xl text-primary/15 absolute top-4 left-6 leading-none">"</span>
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="font-accent text-lg text-foreground/80 italic leading-relaxed mb-6">
                  {review.text}
                </p>
                <div>
                  <p className="font-heading text-sm tracking-wider">{review.name}</p>
                  <p className="font-body text-xs text-muted-foreground mt-1">{review.service}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}