import React from 'react';
import Spline from '@splinetool/react-spline';
import { Rocket, Timer, ShieldCheck } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Hero() {
  return (
    <section className="relative w-full min-h-[90vh] overflow-hidden">
      <div className="absolute inset-0">
        <Spline scene="https://prod.spline.design/MscgRj2doJR2RRa2/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-slate-950/30 via-slate-950/20 to-slate-950/80 pointer-events-none" />

      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center justify-center px-6 pt-28 pb-20 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 backdrop-blur-md"
        >
          <Timer className="h-4 w-4 text-emerald-300" />
          <span className="text-xs tracking-wide text-white/80">Delivered in ~30 minutes with FedEx</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.7 }}
          className="mt-6 text-5xl font-semibold leading-[1.05] text-white sm:text-6xl md:text-7xl"
        >
          FedEx Ice Cream
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="mx-auto mt-5 max-w-2xl text-base text-white/80 sm:text-lg"
        >
          Mini-sized. Sugar-free. Low-calorie. High-protein. Guilt-free indulgence, packed with power and delivered in a flash.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#order"
            className="inline-flex items-center gap-2 rounded-xl bg-emerald-400 px-6 py-3 font-medium text-slate-900 shadow-[0_8px_30px_rgb(16,185,129,0.45)] transition hover:scale-[1.02] hover:bg-emerald-300 active:scale-[0.98]"
          >
            <Rocket className="h-5 w-5" />
            Order Now
          </a>
          <a
            href="#flavors"
            className="inline-flex items-center gap-2 rounded-xl border border-white/15 bg-white/5 px-6 py-3 font-medium text-white/90 backdrop-blur-md transition hover:bg-white/10"
          >
            Explore Flavors
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-3"
        >
          <ValueChip icon={<ShieldCheck className="h-4 w-4" />} label="Guilt-Free Indulgence" />
          <ValueChip icon={<span className="font-semibold">20g</span>} label="Packed with Protein" />
          <ValueChip icon={<Timer className="h-4 w-4" />} label="Delivered in a Flash" />
        </motion.div>
      </div>
    </section>
  );
}

function ValueChip({ icon, label }) {
  return (
    <div className="inline-flex items-center justify-center gap-2 rounded-lg border border-white/15 bg-white/5 px-3 py-2 text-sm text-white/80 backdrop-blur-md">
      <span className="text-emerald-300">{icon}</span>
      <span>{label}</span>
    </div>
  );
}
