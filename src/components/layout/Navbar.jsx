import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Search } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import SearchOverlay from '@/components/SearchOverlay';

// ── Logo config ── Change LOGO_URL to your own image URL to swap the logo.
const LOGO_URL = 'https://media.base44.com/images/public/6a0b7be40991afaf609451f5/f32ecd200_e3ebdae6-1594-4c62-8eb7-0a1f21b40bc9.png';

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About', path: '/about' },
  { label: 'Services', path: '/services' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Booking', path: '/booking' },
  { label: 'Contact', path: '/contact' },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  return (
    <>
      <a href="#main-content" className="sr-only focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:z-[100] focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:font-body focus:text-xs focus:tracking-wider">
        Skip to main content
      </a>
      <nav aria-label="Main navigation" className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? 'bg-background/95 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="flex items-center justify-between h-20">
            <Link to="/" aria-label="Sara Botanical Atelier — Home" className="flex items-center gap-3">
              <img src={LOGO_URL} alt="Sara Botanical Atelier logo" className="h-30 w-auto object-contain" />
              <div className="flex items-baseline gap-2">
                <span className="font-heading text-2xl tracking-wider text-foreground">SARA</span>
                <span className="hidden sm:block text-[10px] font-body tracking-[0.3em] text-muted-foreground uppercase">
                  Botanical Atelier
                </span>
              </div>
            </Link>

            <div className="hidden md:flex items-center gap-10" role="list">
              {navLinks.map(link => (
                <Link
                  key={link.path}
                  to={link.path}
                  role="listitem"
                  aria-current={location.pathname === link.path ? 'page' : undefined}
                  className={`font-body text-xs tracking-[0.2em] uppercase transition-colors duration-300 hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 ${
                    location.pathname === link.path ? 'text-primary' : 'text-foreground/70'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setSearchOpen(true)}
                className="p-2 text-foreground/70 hover:text-primary transition-colors duration-300"
                aria-label="Search"
              >
                <Search className="w-4 h-4" />
              </button>

              <Link
                to="/booking"
                className="hidden md:block font-body text-xs tracking-[0.15em] uppercase px-6 py-2.5 bg-accent text-accent-foreground border border-primary/20 hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                Book Now
              </Link>

              <button
                onClick={() => setIsOpen(true)}
                className="md:hidden p-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
                aria-label="Open navigation menu"
                aria-expanded={isOpen}
                aria-controls="mobile-menu"
              >
                <Menu className="w-5 h-5" aria-hidden="true" />
              </button>
            </div>
          </div>
        </div>

        {/* Gold filament line */}
        <div className={`h-[0.5px] bg-primary/30 transition-opacity duration-500 ${scrolled ? 'opacity-100' : 'opacity-0'}`} />
      </nav>

      <SearchOverlay isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            aria-label="Navigation menu"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[60] bg-background/98 backdrop-blur-lg flex flex-col items-center justify-center"
          >
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-6 right-6 p-2 text-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary"
              aria-label="Close navigation menu"
            >
              <X className="w-5 h-5" aria-hidden="true" />
            </button>

            <div className="flex flex-col items-center gap-8">
              <span className="font-heading text-3xl tracking-wider text-foreground mb-8">SARA</span>
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.path}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.08, duration: 0.4 }}
                >
                  <Link
                    to={link.path}
                    className={`font-accent text-2xl tracking-[0.15em] transition-colors duration-300 hover:text-primary ${
                      location.pathname === link.path ? 'text-primary' : 'text-foreground/70'
                    }`}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}