import React, { useEffect, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';
import { Package, Rocket, Timer, MapPin } from 'lucide-react';

export default function ShippingTimeline() {
  const controls = useAnimation();
  const [cycle, setCycle] = useState(0);

  useEffect(() => {
    const animate = async () => {
      await controls.start({ width: '0%', transition: { duration: 0 } });
      await controls.start({ width: '100%', transition: { duration: 4, ease: 'easeInOut' } });
      setCycle((c) => c + 1);
    };
    animate();
  }, [cycle, controls]);

  const steps = [
    { icon: <Package className="h-5 w-5" />, title: 'Packed Fresh', desc: 'Your minis are sealed at peak chill.' },
    { icon: <Rocket className="h-5 w-5" />, title: 'Fast Dispatch', desc: 'Handover to FedEx within minutes.' },
    { icon: <Timer className="h-5 w-5" />, title: 'On the Move', desc: 'Live-tracked, ice-cold transit.' },
    { icon: <MapPin className="h-5 w-5" />, title: 'At Your Door', desc: 'Delivered in ~30 minutes.' },
  ];

  return (
    <section className="relative z-10 mx-auto max-w-7xl px-6 py-20">
      <div className="mb-10">
        <h2 className="text-3xl font-semibold sm:text-4xl">Fast Shipping, Visualized</h2>
        <p className="mt-2 max-w-2xl text-white/70">Our chilled chain runs on precision. Watch the handoff-to-door timeline animate—then repeat.</p>
      </div>

      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
        <div className="relative mb-8 h-1.5 w-full overflow-hidden rounded-full bg-white/10">
          <motion.div animate={controls} className="h-full rounded-full bg-emerald-400" />
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.4 }}
              transition={{ delay: i * 0.08, duration: 0.5 }}
              className="rounded-xl border border-white/10 bg-slate-950/40 p-4"
            >
              <div className="mb-2 inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-400/10 px-3 py-2 text-emerald-300">
                {s.icon}
                <span className="text-sm font-medium">{s.title}</span>
              </div>
              <p className="text-sm text-white/70">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
