import React from 'react';
import HeroSection from '../components/home/HeroSection';
import ServicesPreview from '../components/home/ServicesPreview';
import GalleryPreview from '../components/home/GalleryPreview';
import ReviewsSection from '../components/home/ReviewsSection';
import CTASection from '../components/home/CTASection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ServicesPreview />
      <GalleryPreview />
      <ReviewsSection />
      <CTASection />
    </div>
  );
}