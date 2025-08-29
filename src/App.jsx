import React from 'react';
import Hero from './components/Hero';
import FlavorGallery from './components/FlavorGallery';
import ShippingTimeline from './components/ShippingTimeline';
import Testimonials from './components/Testimonials';
import OrderCTA from './components/OrderCTA';

export default function App() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950 text-white antialiased">
      <Hero />
      <main className="relative z-10">
        <FlavorGallery />
        <ShippingTimeline />
        <Testimonials />
        <OrderCTA />
      </main>
      <footer className="relative z-10 border-t border-white/10 py-10 text-center text-sm text-white/60">
        © {new Date().getFullYear()} FedEx Ice Cream — Guilt-free scoops delivered in a flash.
      </footer>
    </div>
  );
}
