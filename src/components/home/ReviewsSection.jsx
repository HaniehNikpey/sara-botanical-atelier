import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import GoldDivider from '../GoldDivider';

const reviews = [
{
  name: 'Emily R.',
  text: 'Sara transformed my hair completely. The balayage was exactly what I had envisioned — natural, sun-kissed, and absolutely gorgeous. A true artist.',
  rating: 5,
  service: 'Balayage'
},
{
  name: 'Charlotte M.',
  text: 'The most relaxing salon experience I\'ve ever had. Sara truly listens to what you want and delivers beyond expectations. My wedding updo was perfection.',
  rating: 5,
  service: 'Occasion Styling'
},
{
  name: 'James T.',
  text: 'Finally found someone who understands what a proper gent\'s cut should look like. Clean, precise, and stylish. Will not go anywhere else.',
  rating: 5,
  service: 'Gents Cut & Style'
}];


export default function ReviewsSection() {
  return (
    <section className="py-24 lg:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="text-center mb-16">
          <p className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4">Reviews</p>
          <h2 className="font-heading text-4xl md:text-5xl tracking-wider"></h2>
          <GoldDivider className="mt-6" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, i) =>
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
            className="p-8 bg-card border border-border/50 relative">
            
              {/* Decorative quote */}
              <span className="font-heading text-6xl text-primary/15 absolute top-4 left-6 leading-none">"</span>
              
              <div className="flex gap-1 mb-4">
                {Array.from({ length: review.rating }).map((_, j) =>
              <Star key={j} className="w-3.5 h-3.5 fill-primary text-primary" />
              )}
              </div>
              
              <p className="font-accent text-lg text-foreground/80 italic leading-relaxed mb-6">
                {review.text}
              </p>
              
              <div>
                <p className="font-heading text-sm tracking-wider">{review.name}</p>
                <p className="font-body text-xs text-muted-foreground mt-1">{review.service}</p>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </section>);

}