import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const searchData = [
  // Services - Cuts
  { title: 'Ladies Cut & Finish', description: 'Precision cut with professional blow-dry finish', page: '/services', category: 'Service' },
  { title: 'Restyle Cut', description: 'Complete restyle for a fresh new look', page: '/services', category: 'Service' },
  { title: 'Gents Cut & Style', description: 'Classic gents haircut and styling', page: '/services', category: 'Service' },
  { title: "Children's Haircut", description: 'Haircut for children', page: '/services', category: 'Service' },
  { title: 'Wash & Blow-Dry', description: 'Wash and professional blow-dry', page: '/services', category: 'Service' },
  // Services - Styling
  { title: 'Hair-Up / Occasion Styling', description: 'Elegant up-dos and occasion styling', page: '/services', category: 'Service' },
  { title: 'Curls & Waves', description: 'Bouncy curls and romantic waves', page: '/services', category: 'Service' },
  { title: 'Bridal Hair', description: 'Bridal styling for your special day', page: '/services', category: 'Service' },
  // Services - Colour
  { title: 'Full Head Colour', description: 'All-over colour transformation', page: '/services', category: 'Service' },
  { title: 'Root Regrowth / Root Tint', description: 'Touch up your root colour', page: '/services', category: 'Service' },
  { title: 'Highlights', description: 'T-section, half head or full head highlights', page: '/services', category: 'Service' },
  { title: 'Balayage', description: 'Freehand painted colour for a natural sun-kissed look', page: '/services', category: 'Service' },
  { title: 'Colour Correction', description: 'Expert colour correction service', page: '/services', category: 'Service' },
  { title: 'Semi-Permanent / Glossing', description: 'Shine-enhancing semi-permanent colour', page: '/services', category: 'Service' },
  { title: 'Toner', description: 'Toning treatment for colour refinement', page: '/services', category: 'Service' },
  // Treatments
  { title: 'Olaplex Bond Repair', description: 'Strengthening treatment for damaged hair', page: '/services', category: 'Treatment' },
  // Pages
  { title: 'Gallery', description: 'Browse our portfolio of hair transformations', page: '/gallery', category: 'Page' },
  { title: 'Book an Appointment', description: 'Schedule your next visit with us', page: '/booking', category: 'Page' },
  { title: 'Contact Us', description: 'Get in touch with the salon', page: '/contact', category: 'Page' },
  { title: 'Our Services & Prices', description: 'Full price list for all services', page: '/services', category: 'Page' },
  { title: 'Opening Hours', description: 'Find out when we\'re open', page: '/contact', category: 'Info' },
  { title: 'Location', description: 'Find us and get directions', page: '/contact', category: 'Info' },
];

export default function SearchOverlay({ isOpen, onClose }) {
  const [query, setQuery] = useState('');
  const inputRef = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      setQuery('');
    }
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const results = query.trim().length > 1
    ? searchData.filter(item =>
        item.title.toLowerCase().includes(query.toLowerCase()) ||
        item.description.toLowerCase().includes(query.toLowerCase()) ||
        item.category.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 8)
    : [];

  const handleSelect = (item) => {
    navigate(item.page);
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          role="dialog"
          aria-modal="true"
          aria-label="Site search"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-[70] bg-background/97 backdrop-blur-lg flex flex-col items-center pt-24 px-6"
          onClick={(e) => e.target === e.currentTarget && onClose()}
        >
          <button
            onClick={onClose}
            className="absolute top-6 right-6 p-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
            aria-label="Close search"
          >
            <X className="w-5 h-5" aria-hidden="true" />
          </button>

          <div className="w-full max-w-xl">
            <div role="search" className="flex items-center gap-4 border-b border-primary/30 pb-4">
              <Search className="w-4 h-4 text-muted-foreground flex-shrink-0" aria-hidden="true" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Search services, gallery, contact…"
                aria-label="Search the site"
                aria-autocomplete="list"
                aria-controls="search-results"
                className="flex-1 bg-transparent font-body text-lg tracking-wide outline-none placeholder:text-muted-foreground/50"
              />
            </div>

            {results.length > 0 && (
              <motion.div
                id="search-results"
                role="listbox"
                aria-label="Search results"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-6 space-y-1"
              >
                {results.map((item, i) => (
                  <button
                    key={i}
                    role="option"
                    aria-selected="false"
                    onClick={() => handleSelect(item)}
                    className="w-full text-left px-4 py-3 hover:bg-accent transition-colors duration-200 flex items-center justify-between group focus-visible:outline-none focus-visible:bg-accent"
                  >
                    <div>
                      <p className="font-heading text-sm tracking-wider">{item.title}</p>
                      <p className="font-body text-xs text-muted-foreground mt-0.5">{item.description}</p>
                    </div>
                    <span className="font-body text-[10px] tracking-[0.15em] uppercase text-primary/60 ml-4">
                      {item.category}
                    </span>
                  </button>
                ))}
              </motion.div>
            )}

            {query.trim().length > 1 && results.length === 0 && (
              <p className="mt-8 text-center font-body text-sm text-muted-foreground">
                No results found for "{query}"
              </p>
            )}

            {query.trim().length <= 1 && (
              <p className="mt-8 text-center font-body text-xs tracking-[0.15em] uppercase text-muted-foreground/50">
                Start typing to search
              </p>
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}