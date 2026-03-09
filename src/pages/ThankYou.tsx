import { memo, useEffect } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { CalendarDays, Clock, Video } from "lucide-react";
import { useEventConfig } from "@/hooks/useEventConfig";

/* ── Background ───────────────────────────────────────────────────── */
const STARS = Array.from({ length: 50 }, (_, i) => ({
  id: i,
  top: `${Math.round((i * 137.5) % 100)}%`,
  left: `${Math.round((i * 97.3) % 100)}%`,
  delay: `${(i * 0.23) % 5}s`,
  duration: `${2.5 + (i * 0.17) % 3}s`,
  size: i % 3 === 0 ? 3 : i % 3 === 1 ? 2 : 1,
}));

const BgAnimations = memo(() => (
  <div className="pointer-events-none fixed inset-0 overflow-hidden z-0" aria-hidden>
    <div
      className="absolute inset-0 animate-gradient-shift"
      style={{
        background: "linear-gradient(135deg,hsl(222 47% 4%),hsl(224 44% 6%),hsl(226 42% 8%),hsl(222 47% 4%))",
        backgroundSize: "300% 300%",
      }}
    />
    <div className="bg-orb animate-float-orb-1"
      style={{ width: "min(600px,75vw)", height: "min(600px,75vw)", top: "-15%", left: "-10%", background: "hsl(262 72% 50%)", opacity: 0.2 }} />
    <div className="bg-orb animate-float-orb-2"
      style={{ width: "min(500px,65vw)", height: "min(500px,65vw)", bottom: "-10%", right: "-8%", background: "hsl(330 82% 62%)", opacity: 0.15 }} />
    {STARS.map((s) => (
      <span key={s.id} className="bg-star animate-twinkle"
        style={{ top: s.top, left: s.left, width: s.size, height: s.size, animationDelay: s.delay, animationDuration: s.duration, "--tw-duration": s.duration } as React.CSSProperties}
      />
    ))}
    <div className="absolute inset-0"
      style={{ backgroundImage: "linear-gradient(rgba(255,255,255,0.02) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,0.02) 1px,transparent 1px)", backgroundSize: "50px 50px" }} />
  </div>
));

/* ── Animated checkmark ring ──────────────────────────────────────── */
const CheckRing = () => (
  <div className="relative flex items-center justify-center w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 mx-auto mb-2 sm:mb-3">
    <div className="absolute inset-0 rounded-full border border-primary/30 animate-expand-ring" />
    <div className="absolute inset-0 rounded-full border border-primary/20 animate-expand-ring" style={{ animationDelay: "1.1s" }} />
    <div className="w-14 h-14 sm:w-16 sm:h-16 md:w-20 md:h-20 rounded-full bg-primary/10 border-2 border-primary flex items-center justify-center glow-box">
      <svg viewBox="0 0 24 24" fill="none" className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 text-primary" stroke="currentColor" strokeWidth={2}>
        <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  </div>
);

/* ── WhatsApp SVG ─────────────────────────────────────────────────── */
const WaPath = "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z";

/* ── Main Component ───────────────────────────────────────────────── */
const ThankYou = () => {
  const { config, getDateRange, formatTime } = useEventConfig();

  useEffect(() => { window.scrollTo({ top: 0, behavior: "instant" }); }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground overflow-hidden">
      <BgAnimations />

      <div className="relative z-10 w-full mx-auto max-w-2xl px-4 sm:px-6 py-8 sm:py-10 md:py-12">

        {/* ── Success Header ──────────────────────────────────────── */}
        <motion.div
          className="text-center mb-8"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <CheckRing />

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs sm:text-sm font-semibold tracking-wider uppercase">
              Registration Confirmed
            </span>
          </motion.div>

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-bold mt-6 mb-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            You're In!
          </motion.h1>

          <motion.p
            className="text-base sm:text-lg text-muted-foreground max-w-lg mx-auto leading-relaxed"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            Congratulations on reserving your spot for the{" "}
            <span className="text-foreground font-semibold text-primary">AI Workforce Masterclass</span>.
            Your transformation starts now!
          </motion.p>
        </motion.div>

        {/* ── Session Details Card ────────────────────────────────── */}
        <motion.div
          className="mb-6 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.5 }}
        >
          <div className="relative p-[1px] rounded-2xl" style={{ background: "linear-gradient(135deg, hsl(262 72% 50%), hsl(280 70% 60%))" }}>
            <div className="rounded-xl bg-card/95 backdrop-blur p-5 sm:p-6">
              <div className="text-center mb-5">
                <p className="text-sm font-bold text-foreground uppercase tracking-widest flex items-center justify-center gap-2">
                  <Video className="w-4 h-4 text-primary" />
                  Your Session Details
                </p>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div className="rounded-xl p-4 bg-secondary/50 border border-border text-center">
                  <CalendarDays className="w-5 h-5 mx-auto mb-2 text-primary" />
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Dates</p>
                  <p className="font-bold text-sm text-foreground">
                    {getDateRange()}
                  </p>
                </div>
                <div className="rounded-xl p-4 bg-secondary/50 border border-border text-center">
                  <Clock className="w-5 h-5 mx-auto mb-2 text-primary" />
                  <p className="text-[10px] text-muted-foreground uppercase tracking-wider mb-1">Time</p>
                  <p className="font-bold text-sm text-foreground">
                    {formatTime()}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* ── WhatsApp CTA ───────────────────────────────────────── */}
        <motion.div
          className="mb-6 rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.5 }}
        >
          <div className="relative p-[1px] rounded-2xl" style={{ background: "linear-gradient(135deg, hsl(142 71% 45%), hsl(160 100% 50%))" }}>
            <div className="rounded-xl bg-card/95 backdrop-blur p-5 sm:p-6 flex flex-col items-center text-center gap-4">
              <div className="w-14 h-14 rounded-full bg-secondary border border-primary/30 flex items-center justify-center">
                <svg viewBox="0 0 24 24" className="w-7 h-7 text-primary" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                  <path d={WaPath} />
                </svg>
              </div>
              <div>
                <h3 className="text-xl sm:text-2xl font-bold text-foreground mb-2">Join the WhatsApp Group</h3>
                <p className="text-sm text-muted-foreground max-w-sm mx-auto">
                  Get pre-session materials, live reminders, and connect with 2000+ founders before we go live!
                </p>
              </div>
              <a
                href={config.whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-bold text-sm sm:text-base px-6 sm:px-8 py-3 rounded-xl hover:brightness-110 transition-all"
                style={{ background: "hsl(142 71% 45%)", color: "#fff", boxShadow: "0 4px 20px hsl(142 71% 45%/0.3)" }}
              >
                <svg viewBox="0 0 24 24" className="w-4 h-4 sm:w-5 sm:h-5 fill-current" xmlns="http://www.w3.org/2000/svg">
                  <path d={WaPath} />
                </svg>
                Join WhatsApp Group
              </a>
            </div>
          </div>
        </motion.div>

        {/* ── Footer nav ────────────────────────────────────────── */}
        <motion.div
          className="text-center space-y-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.9, duration: 0.5 }}
        >
          <p className="text-xs sm:text-sm text-muted-foreground">
            Questions? Reach out at{" "}
            <a href="mailto:support@akshatdani.com" className="text-primary hover:underline">
              support@akshatdani.com
            </a>
          </p>
          <Link
            to="/"
            className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors py-1"
          >
            ← Back to Home
          </Link>
        </motion.div>

      </div>
    </div>
  );
};

export default ThankYou;
