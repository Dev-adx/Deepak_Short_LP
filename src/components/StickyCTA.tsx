import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const WORKSHOP_DATE = new Date("2026-03-09T20:00:00+05:30");

const getTimeLeft = () => {
  const diff = WORKSHOP_DATE.getTime() - Date.now();
  if (diff <= 0) return { h: 0, m: 0, s: 0 };
  return {
    h: Math.floor((diff % 86400000) / 3600000),
    m: Math.floor((diff % 3600000) / 60000),
    s: Math.floor((diff % 60000) / 1000),
  };
};

const Pad = (n: number) => String(n).padStart(2, "0");

const StickyCTA = () => {
  const [time, setTime] = useState(getTimeLeft());

  useEffect(() => {
    const t = setInterval(() => setTime(getTimeLeft()), 1000);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-warm-brown/95 backdrop-blur-sm border-t border-border px-4 py-3">
      <div className="max-w-md mx-auto flex flex-col gap-2">

        {/* Row 1: title + timer */}
        <div className="flex items-center justify-between gap-3">
          {/* Title */}
          <p className="text-primary-foreground text-sm font-bold leading-snug shrink-0">
            2-Day Blockchain<br />Workshop
          </p>

          {/* Timer */}
          <div className="flex items-center gap-1">
            {[
              { val: time.h, label: "H" },
              { val: time.m, label: "M" },
              { val: time.s, label: "S" },
            ].map(({ val, label }, i) => (
              <div key={label} className="flex items-center gap-1">
                <div className="flex flex-col items-center">
                  <motion.span
                    key={val}
                    initial={{ y: -4, opacity: 0 }}
                    animate={{ y: 0, opacity: 1 }}
                    transition={{ duration: 0.15 }}
                    className="bg-black/40 text-white text-sm font-bold rounded px-2 py-0.5 min-w-[30px] text-center tabular-nums"
                  >
                    {Pad(val)}
                  </motion.span>
                  <span className="text-primary-foreground/50 text-[9px] mt-0.5">{label}</span>
                </div>
                {i < 2 && <span className="text-primary-foreground/50 font-bold text-sm mb-3">:</span>}
              </div>
            ))}
          </div>
        </div>

        {/* Row 2: CTA centered */}
        <motion.a
          href="#register"
          className="w-full text-center py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-bold animate-blink shadow-[0_4px_18px_hsl(28_60%_48%/0.5)] touch-manipulation"
          whileTap={{ scale: 0.93, y: 2 }}
          transition={{ type: "spring", stiffness: 400, damping: 15 }}
        >
          Bookings Close Today
        </motion.a>
      </div>
    </div>
  );
};

export default StickyCTA;
