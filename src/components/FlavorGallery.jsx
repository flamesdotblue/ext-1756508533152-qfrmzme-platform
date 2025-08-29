import React from 'react';
import { motion } from 'framer-motion';

const FLAVORS = [
  {
    name: 'Vanilla Cloud',
    color: 'from-amber-200 to-amber-300',
    stats: '90 cal • 20g protein • 0g sugar',
    img: 'https://images.unsplash.com/photo-1458642849426-cfb724f15ef7?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Midnight Cocoa',
    color: 'from-neutral-200 to-slate-100',
    stats: '110 cal • 22g protein • 0g sugar',
    img: 'https://images.unsplash.com/photo-1499636136210-6f4ee915583e?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Berry Burst',
    color: 'from-rose-200 to-pink-200',
    stats: '95 cal • 20g protein • 1g sugar',
    img: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?q=80&w=1200&auto=format&fit=crop',
  },
  {
    name: 'Mint Prism',
    color: 'from-emerald-200 to-teal-200',
    stats: '100 cal • 21g protein • 0g sugar',
    img: 'https://images.unsplash.com/photo-1532678465554-94846274c297?q=80&w=1200&auto=format&fit=crop',
  },
];

export default function FlavorGallery() {
  return (
    <section id="flavors" className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10 flex items-end justify-between gap-4">
        <div>
          <h2 className="text-3xl font-semibold sm:text-4xl">Flavor Gallery</h2>
          <p className="mt-2 max-w-xl text-white/70">Mini-sized pints with a macro-friendly profile. Tap a card to peek at the macro magic.</p>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {FLAVORS.map((f, i) => (
          <TiltCard key={f.name} flavor={f} index={i} />)
        )}
      </div>
    </section>
  );
}

function TiltCard({ flavor, index }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br p-[1px]"
      style={{ perspective: 1000 }}
    >
      <div className={`rounded-2xl bg-gradient-to-br ${flavor.color}`}>
        <div className="relative overflow-hidden rounded-2xl bg-slate-900/40 p-4">
          <div className="relative aspect-[4/5] overflow-hidden rounded-xl">
            <img src={flavor.img} alt={flavor.name} className="h-full w-full object-cover object-center transition duration-500 group-hover:scale-105" />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-transparent" />
          </div>
          <div className="mt-4 flex items-center justify-between">
            <h3 className="text-lg font-semibold">{flavor.name}</h3>
            <span className="rounded-full bg-white/10 px-2.5 py-1 text-xs text-white/80">Mini</span>
          </div>
          <p className="mt-2 text-sm text-white/70">{flavor.stats}</p>
          <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="mt-4 w-full rounded-xl bg-white/90 px-4 py-2 text-sm font-medium text-slate-900 shadow-[0_8px_30px_rgba(255,255,255,0.25)] transition hover:bg-white"
          >
            Add to Box
          </motion.button>
        </div>
      </div>
    </motion.article>
  );
}
