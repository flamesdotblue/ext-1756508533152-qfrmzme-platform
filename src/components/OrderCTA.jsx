import React, { useMemo, useState } from 'react';
import { motion } from 'framer-motion';
import { Timer, Truck, Check } from 'lucide-react';

export default function OrderCTA() {
  const [zip, setZip] = useState('');
  const [qty, setQty] = useState(4);
  const [placing, setPlacing] = useState(false);
  const [placed, setPlaced] = useState(false);

  const eta = useMemo(() => {
    // Simple pseudo ETA logic (keeps ~30min, small variation for UX)
    const base = 30;
    const delta = zip && /\d{5}/.test(zip) ? (parseInt(zip.slice(-1), 10) % 5) - 2 : 0; // -2..+2
    return Math.max(18, base + delta);
  }, [zip]);

  const handleOrder = async (e) => {
    e.preventDefault();
    setPlacing(true);
    await new Promise((r) => setTimeout(r, 900));
    setPlacing(false);
    setPlaced(true);
    setTimeout(() => setPlaced(false), 2600);
  };

  return (
    <section id="order" className="relative z-10 mx-auto max-w-7xl px-6 pb-24 pt-10">
      <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6 sm:p-8">
        <div className="pointer-events-none absolute -right-20 -top-20 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-16 -left-16 h-60 w-60 rounded-full bg-sky-400/10 blur-3xl" />

        <div className="relative z-10 grid grid-cols-1 items-center gap-10 md:grid-cols-2">
          <div>
            <h3 className="text-2xl font-semibold sm:text-3xl">Ready for Guilt‑Free Indulgence?</h3>
            <p className="mt-2 max-w-md text-white/70">Build your mini box and we’ll have it at your door while your playlist is still on track two.</p>

            <div className="mt-6 flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 p-3 text-white/80 backdrop-blur-md">
              <Timer className="h-5 w-5 text-emerald-300" />
              <p className="text-sm">Estimated arrival: <span className="font-semibold text-white">~{eta} minutes</span></p>
            </div>
          </div>

          <form onSubmit={handleOrder} className="relative z-10 rounded-xl border border-white/10 bg-white/5 p-4 backdrop-blur-md sm:p-6">
            <div className="grid grid-cols-2 gap-3">
              <label className="col-span-2 text-sm text-white/70">Delivery ZIP</label>
              <input
                type="text"
                inputMode="numeric"
                pattern="\\d{5}"
                placeholder="e.g. 94107"
                value={zip}
                onChange={(e) => setZip(e.target.value)}
                className="col-span-2 rounded-lg border border-white/10 bg-slate-900/60 px-3 py-2 text-white placeholder-white/40 outline-none focus:border-emerald-400/50"
                required
              />

              <label className="col-span-2 mt-3 text-sm text-white/70">Mini Pints</label>
              <div className="col-span-2 flex items-center gap-3">
                <input
                  type="range"
                  min="2"
                  max="12"
                  step="2"
                  value={qty}
                  onChange={(e) => setQty(parseInt(e.target.value, 10))}
                  className="w-full accent-emerald-400"
                />
                <div className="w-14 rounded-lg border border-white/10 bg-slate-900/60 py-1 text-center text-sm">{qty}</div>
              </div>

              <motion.button
                type="submit"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                disabled={placing}
                className="col-span-2 mt-4 inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-400 px-5 py-3 font-medium text-slate-900 disabled:cursor-not-allowed disabled:opacity-70"
              >
                {placed ? <Check className="h-5 w-5" /> : <Truck className="h-5 w-5" />}
                {placed ? 'Order Placed!' : placing ? 'Placing…' : 'Place Order'}
              </motion.button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
