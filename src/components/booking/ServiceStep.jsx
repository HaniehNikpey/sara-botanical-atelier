import React from 'react';
import { motion } from 'framer-motion';

const serviceOptions = [
  { category: 'Cuts', items: [
    { name: 'Ladies Cut & Finish', price: 45, duration: 60 },
    { name: 'Restyle Cut', price: 55, duration: 75 },
    { name: 'Gents Cut & Style', price: 25, duration: 30 },
    { name: "Children's Haircut", price: 18, duration: 30 },
    { name: 'Wash & Blow-Dry (Short)', price: 25, duration: 30 },
    { name: 'Wash & Blow-Dry (Medium)', price: 30, duration: 40 },
    { name: 'Wash & Blow-Dry (Long)', price: 35, duration: 50 },
  ]},
  { category: 'Styling', items: [
    { name: 'Hair-Up / Occasion Styling', price: 55, duration: 60 },
    { name: 'Curls & Waves', price: 45, duration: 50 },
    { name: 'Bridal Hair', price: 120, duration: 90 },
  ]},
  { category: 'Colour', items: [
    { name: 'Full Head Colour', price: 75, duration: 120 },
    { name: 'Root Regrowth / Root Tint', price: 55, duration: 90 },
    { name: 'Semi-Permanent / Glossing', price: 50, duration: 75 },
    { name: 'T-Section Highlights', price: 65, duration: 90 },
    { name: 'Half Head Highlights', price: 85, duration: 120 },
    { name: 'Full Head Highlights', price: 110, duration: 150 },
    { name: 'Balayage', price: 120, duration: 180 },
    { name: 'Colour Correction', price: 100, duration: 180 },
    { name: 'Toner', price: 25, duration: 30 },
  ]},
  { category: 'Treatments', items: [
    { name: 'Olaplex Bond Repair', price: 35, duration: 30 },
  ]},
];

export default function ServiceStep({ selected, onSelect }) {
  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <h2 className="font-heading text-2xl tracking-wider">Select Your Service</h2>
        <p className="font-body text-sm text-muted-foreground mt-2">Choose the service you'd like to book</p>
      </div>

      {serviceOptions.map((category) => (
        <div key={category.category}>
          <h3 className="font-heading text-lg tracking-wider mb-4 text-primary">{category.category}</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {category.items.map((service) => (
              <motion.button
                key={service.name}
                whileTap={{ scale: 0.98 }}
                onClick={() => onSelect(service)}
                className={`text-left p-4 border transition-all duration-300 ${
                  selected?.name === service.name
                    ? 'border-primary bg-accent'
                    : 'border-border/50 hover:border-primary/30'
                }`}
              >
                <div className="flex justify-between items-start">
                  <div>
                    <p className="font-heading text-sm tracking-wider">{service.name}</p>
                    <p className="font-body text-xs text-muted-foreground mt-1">{service.duration} min</p>
                  </div>
                  <p className="font-heading text-base tracking-wider text-primary">£{service.price}</p>
                </div>
              </motion.button>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}