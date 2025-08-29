import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';

const REVIEWS = [
  {
    name: 'Ava R.',
    quote: 'Finally an ice cream that fits my macros. The texture is unreal and it ships insanely fast.',
    rating: 5,
  },
  {
    name: 'Noah M.',
    quote: 'Mini pints are genius. Zero sugar, high protein, and legit flavor. I’m hooked.',
    rating: 5,
  },
  {
    name: 'Liam K.',
    quote: 'Ordered during a study session—arrived in under 30 minutes still frosty. Wild.',
    rating: 5,
  },
];

export default function Testimonials() {
  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mb-8">
        <h2 className="text-3xl font-semibold sm:text-4xl">Loved by Speedy Snackers</h2>
        <p className="mt-2 max-w-xl text-white/70">Real reviews from people who crave smart treats without the wait.</p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
        {REVIEWS.map((r, i) => (
          <motion.figure
            key={r.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ delay: i * 0.08, duration: 0.5 }}
            className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md"
          >
            <div className="mb-3 flex items-center gap-1 text-amber-300">
              {Array.from({ length: r.rating }).map((_, idx) => (
                <Star key={idx} className="h-4 w-4 fill-current" />
              ))}
            </div>
            <blockquote className="text-white/90">“{r.quote}”</blockquote>
            <figcaption className="mt-4 text-sm text-white/60">— {r.name}</figcaption>
          </motion.figure>
        ))}
      </div>
    </section>
  );
}
