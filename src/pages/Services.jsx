import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import GoldDivider from '../components/GoldDivider';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const serviceCategories = [
  {
    key: 'cuts',
    title: 'Cuts & Styling',
    services: [
      { name: 'Ladies Cut & Finish', desc: 'Wash, precision cut & blow-dry', price: '45', duration: '60 min' },
      { name: 'Restyle Cut', desc: 'Complete new look with wash & finish', price: '55', duration: '75 min' },
      { name: 'Gents Cut & Style', desc: 'Classic or modern cut with styling', price: '25', duration: '30 min' },
      { name: 'Children\'s Haircut', desc: 'For children under 12', price: '18', duration: '30 min' },
      { name: 'Wash & Blow-Dry (Short)', desc: 'Shampoo, condition & styled finish', price: '25', duration: '30 min' },
      { name: 'Wash & Blow-Dry (Medium)', desc: 'Shampoo, condition & styled finish', price: '30', duration: '40 min' },
      { name: 'Wash & Blow-Dry (Long)', desc: 'Shampoo, condition & styled finish', price: '35', duration: '50 min' },
    ],
  },
  {
    key: 'styling',
    title: 'Occasion Styling',
    services: [
      { name: 'Hair-Up', desc: 'Elegant updo for events & occasions', price: '55', duration: '60 min' },
      { name: 'Curls & Waves', desc: 'Beautiful loose curls or waves', price: '45', duration: '50 min' },
      { name: 'Bridal Hair', desc: 'Bespoke bridal styling with trial', price: '120', duration: '90 min' },
    ],
  },
  {
    key: 'colour',
    title: 'Colour',
    services: [
      { name: 'Full Head Colour', desc: 'Complete single-process colour', price: '75', duration: '120 min' },
      { name: 'Root Regrowth / Root Tint', desc: 'Root touch-up to refresh your colour', price: '55', duration: '90 min' },
      { name: 'Semi-Permanent Colour / Glossing', desc: 'Temporary colour with brilliant shine', price: '50', duration: '75 min' },
      { name: 'T-Section Highlights', desc: 'Highlights around the parting & crown', price: '65', duration: '90 min' },
      { name: 'Half Head Highlights', desc: 'Highlights from the crown upwards', price: '85', duration: '120 min' },
      { name: 'Full Head Highlights', desc: 'Highlights throughout entire head', price: '110', duration: '150 min' },
      { name: 'Balayage', desc: 'Hand-painted, natural sun-kissed colour', price: '120', duration: '180 min' },
      { name: 'Colour Correction', desc: 'Expert correction for previous colour', price: 'From £100', duration: 'Consultation' },
      { name: 'Toner', desc: 'Colour toning to neutralise brassiness', price: '25', duration: '30 min' },
    ],
  },
  {
    key: 'treatments',
    title: 'Treatments',
    services: [
      { name: 'Olaplex Bond Repair', desc: 'Intensive bond repair treatment for damaged hair', price: '35', duration: '30 min' },
    ],
  },
];

export default function Services() {
  return (
    <div className="pt-20">
      {/* Header */}
      <section className="py-20 lg:py-28 bg-card text-center">
        <div className="max-w-3xl mx-auto px-6">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="font-body text-xs tracking-[0.4em] uppercase text-primary mb-4"
          >
            The Compendium
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            className="font-heading text-5xl md:text-6xl tracking-wider"
          >
            Services & Pricing
          </motion.h1>
          <GoldDivider className="mt-6" />
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="font-accent text-xl text-muted-foreground italic mt-6"
          >
            Every service is a carefully crafted experience
          </motion.p>
        </div>
      </section>

      {/* Service List */}
      <section className="py-16 lg:py-24 bg-background">
        <div className="max-w-4xl mx-auto px-6 lg:px-12">
          <Accordion type="multiple" defaultValue={['cuts', 'colour', 'styling', 'treatments']} className="space-y-4">
            {serviceCategories.map((category, catIdx) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: catIdx * 0.1, duration: 0.5 }}
              >
                <AccordionItem value={category.key} className="border border-border/50 px-6">
                  <AccordionTrigger className="hover:no-underline py-6">
                    <h2 className="font-heading text-xl md:text-2xl tracking-wider text-left">
                      {category.title}
                    </h2>
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="divide-y divide-border/30 pb-4">
                      {category.services.map((service) => (
                        <div key={service.name} className="py-5 flex flex-col sm:flex-row sm:items-center justify-between gap-2 group">
                          <div className="flex-1">
                            <h3 className="font-heading text-base tracking-wider group-hover:text-primary transition-colors duration-300">
                              {service.name}
                            </h3>
                            <p className="font-body text-sm text-muted-foreground mt-1">{service.desc}</p>
                          </div>
                          <div className="flex items-center gap-6 sm:text-right">
                            <span className="font-body text-xs text-muted-foreground">{service.duration}</span>
                            <span className="font-heading text-lg tracking-wider text-primary min-w-[80px] text-right">
                              {typeof service.price === 'string' && service.price.startsWith('From') ? service.price : `£${service.price}`}
                            </span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>

          <div className="text-center mt-16">
            <p className="font-accent text-lg text-muted-foreground italic mb-6">
              Ready to book your appointment?
            </p>
            <Link
              to="/booking"
              className="font-body text-xs tracking-[0.2em] uppercase px-10 py-4 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300 inline-block"
            >
              Book Now
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}