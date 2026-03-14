import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle, ArrowLeft, MessageCircle } from "lucide-react";
import { useEventConfig } from "@/hooks/useEventConfig";
import { trackPageView, trackPurchase } from "@/lib/pixel";

/* ── Main Component ───────────────────────────────────────────────── */
const ThankYou = () => {
  const { config } = useEventConfig();

  useEffect(() => { 
    trackPageView();
    window.scrollTo({ top: 0, behavior: "instant" }); 
    trackPurchase();
  }, []);

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4 py-10 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute -top-20 -right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div 
          className="absolute -bottom-20 -left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            opacity: [0.3, 0.5, 0.3]
          }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="w-full max-w-xl relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
        >
          {/* Main Card */}
          <div className="bg-card rounded-2xl border border-border shadow-xl overflow-hidden">

            {/* Card Header */}
            <div className="bg-gradient-to-br from-accent/5 to-accent/10 border-b border-border px-6 py-8 flex flex-col items-center text-center gap-4">
              <motion.div 
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
                className="w-16 h-16 rounded-full bg-accent/15 flex items-center justify-center"
              >
                <CheckCircle className="w-8 h-8 text-accent" />
              </motion.div>
              <div>
                <motion.span 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-accent/15 text-accent text-xs font-semibold tracking-wider uppercase mb-2"
                >
                  Registration Confirmed
                </motion.span>
                <motion.h1 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.35 }}
                  className="font-display text-3xl sm:text-4xl font-bold text-foreground mt-2"
                >
                  Thank You For Registering!
                </motion.h1>
              </div>
            </div>

            {/* Card Body */}
            <div className="px-8 py-8 flex flex-col items-center text-center gap-6">

              {/* Subtitle */}
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="text-lg sm:text-xl text-muted-foreground max-w-lg leading-relaxed"
              >
                <span className="text-accent font-semibold">Wait, your registration is incomplete…</span>{" "}
                Join the WhatsApp group below to receive updates, reminders, and access details for the{" "}
                <span className="text-foreground font-semibold">Blockchain Workshop.</span>
              </motion.p>

              {/* WhatsApp Button */}
              {config.whatsappLink && (
                <motion.a
                  href={config.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.5 }}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="inline-flex items-center justify-center gap-2.5 font-bold text-sm sm:text-base px-8 py-3.5 rounded-xl w-full transition-all"
                  style={{
                    background: "hsl(28 60% 48%)",
                    color: "#fff",
                    boxShadow: "0 4px 20px hsl(28 60% 48% / 0.3)"
                  }}
                >
                  <MessageCircle className="w-5 h-5 flex-shrink-0" />
                  Join WhatsApp Group
                </motion.a>
              )}
            </div>

            {/* Footer */}
            <div className="border-t border-border px-6 py-4 flex flex-col sm:flex-row items-center justify-between gap-2 bg-muted/30">
              <motion.p 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                className="text-xs text-muted-foreground"
              >
                Questions?{" "}
                <a href="mailto:support@deepakchoudhary.com" className="text-accent hover:underline font-medium">
                  support@deepakchoudhary.com
                </a>
              </motion.p>
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.65 }}
              >
                <Link 
                  to="/" 
                  className="inline-flex items-center gap-1 text-xs text-muted-foreground hover:text-foreground transition-colors"
                >
                  <ArrowLeft className="w-3 h-3" />
                  Back to Home
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ThankYou;

