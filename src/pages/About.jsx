import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import GoldDivider from '@/components/GoldDivider';

const values = [
{
  title: 'Craftsmanship',
  description: "Every cut, colour, and treatment is executed with precise technique and an artist's eye for detail."
},
{
  title: 'Botanical Ethos',
  description: 'We use only the finest plant-derived products, chosen for their gentleness and efficacy.'
},
{
  title: 'Unhurried Care',
  description: 'Your appointment is a sanctuary. We take the time to listen, consult, and create with intention.'
},
{
  title: 'Timeless Style',
  description: 'Trends inspire, but enduring elegance defines us. We create looks that feel right for years to come.'
}];


const team = [
{
  name: 'Sara',
  role: 'Founder & Creative Director',
  bio: 'With over fifteen years of experience across London and Edinburgh, Sara founded the atelier to offer a more considered, personal approach to hair. Her passion lies in colour artistry and transformative styling.',
  image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?w=600&q=80'
},
{
  name: 'Elise',
  role: 'Senior Colourist',
  bio: 'Elise specialises in lived-in colour, balayage, and corrective work. Her botanical sensibility and trained eye ensure every colour feels natural and luminous.',
  image: 'https://images.unsplash.com/photo-1595959183082-7b570b7e08e2?w=600&q=80'
},
{
  name: 'Margot',
  role: 'Stylist & Treatment Specialist',
  bio: 'Margot brings a background in trichology to the atelier, offering deeply restorative treatments alongside precision cuts and bridal styling.',
  image: 'https://images.unsplash.com/photo-1560087637-bf797bc7796a?w=600&q=80'
}];


export default function About() {
  return (
    <div className="pt-20">

      {/* Hero */}
      <section className="relative h-[55vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1521590832167-7bcbfaa6381f?w=1600&q=80')` }} />
        
        <div className="absolute inset-0 bg-foreground/50" />
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6">
          
          <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary-foreground/70 mb-4">Our Story</p>
          <h1 className="font-heading text-5xl md:text-6xl text-primary-foreground tracking-wider">About the Atelier</h1>
        </motion.div>
      </section>

      {/* Story */}
      <section className="py-24 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}>
            
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary mb-6">Est. 2014</p>
            <h2 className="font-heading text-3xl md:text-4xl tracking-wider mb-8">A Haven of Quiet Luxury</h2>
            <GoldDivider className="mb-8" />
            <p className="font-accent text-lg leading-relaxed text-muted-foreground mb-6">
              Sara — Botanical Atelier was born from a simple belief: that a visit to the salon should feel like a restoration. Tucked away from the noise of the high street, our atelier is a space where time slows, and the ritual of caring for your hair becomes something to savour.
            </p>
            <p className="font-accent text-lg leading-relaxed text-muted-foreground">
              We draw inspiration from the botanical world — its textures, its quiet rhythms, its inherent elegance. Each service is approached as a craft, each client welcomed as an individual with their own story to tell through their hair.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      



























      

      {/* Team */}
      <section className="py-24 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16">
            
            <p className="font-body text-[10px] tracking-[0.4em] uppercase text-primary mb-4">The People</p>
            <h2 className="font-heading text-3xl md:text-4xl tracking-wider">Meet Our Team</h2>
          </motion.div>
          <div className="grid md:grid-cols-3 gap-10">
            {team.map((member, i) =>
            <motion.div
              key={member.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.12, duration: 0.6 }}
              className="text-center">
              
                <div className="relative overflow-hidden mb-6 aspect-[3/4]">
                  <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" />
                
                  <div className="absolute inset-0 border border-primary/10 pointer-events-none" />
                </div>
                <h3 className="font-heading text-xl tracking-wider mb-1">{member.name}</h3>
                <p className="font-body text-[10px] tracking-[0.25em] uppercase text-primary mb-4">{member.role}</p>
                <p className="font-accent text-sm text-muted-foreground leading-relaxed">{member.bio}</p>
              </motion.div>
            )}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 bg-card text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}>
          
          <h2 className="font-heading text-3xl tracking-wider mb-4">Ready to visit us?</h2>
          <GoldDivider className="mb-8" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/booking"
              className="font-body text-xs tracking-[0.15em] uppercase px-8 py-3 bg-primary text-primary-foreground hover:bg-primary/90 transition-all duration-300">
              
              Book an Appointment
            </Link>
            <Link
              to="/contact"
              className="font-body text-xs tracking-[0.15em] uppercase px-8 py-3 border border-primary/30 hover:bg-accent transition-all duration-300">
              
              Get in Touch
            </Link>
          </div>
        </motion.div>
      </section>

    </div>);

}