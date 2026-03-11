import { motion } from "framer-motion";
import { Calendar, Clock, Globe, Gift, ChevronDown } from "lucide-react";
import deepakPhoto from "@/assets/deepak-photo.png";
import LeadForm from "./LeadForm";
import { useEventConfig } from "@/hooks/useEventConfig";

const HeroSection = () => {
  const { getDateRange, formatTime } = useEventConfig();
  return (
    <section className="px-4 pt-6 pb-10 md:pt-16 md:pb-16 relative overflow-hidden">

      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-20 -right-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 4, repeat: Infinity, delay: 2 }}
        />
      </div>

      <div className="max-w-5xl mx-auto relative z-10">

        {/* Trustpilot badge */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
          className="flex justify-center mb-4"
        >
          <div className="inline-flex items-center gap-3 bg-muted rounded-full px-5 py-2 text-sm flex-wrap justify-center">
            <div className="flex items-center gap-1.5">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                <rect width="24" height="24" rx="3" fill="#00B67A"/>
                <path d="M12 4.5l2.1 6.4H20l-5.1 3.7 2 6.4L12 17l-4.9 4 2-6.4L4 10.9h5.9z" fill="white"/>
              </svg>
              <span className="font-semibold text-foreground">Trustpilot</span>
            </div>
            <div className="flex items-center gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} width="16" height="16" viewBox="0 0 24 24" fill="#00B67A">
                  <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
                </svg>
              ))}
            </div>
            <span className="font-semibold text-foreground">4.7 / 5</span>
            <span className="text-muted-foreground hidden sm:inline">· 312 reviews</span>
          </div>
        </motion.div>

        {/* Headline */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, type: "spring", stiffness: 100 }}
          className="text-3xl md:text-5xl lg:text-6xl font-bold text-center leading-tight mb-4 text-foreground"
        >
          2-Day{" "}
          <span className="text-accent relative">
            LIVE
          </span>{" "}
          Blockchain &<br className="hidden md:block" /> Digital Asset Workshop
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
          className="text-center text-muted-foreground text-sm md:text-xl max-w-2xl mx-auto mb-6"
        >
          Understand Crypto, NFTs, DeFi and Metaverse Without Confusion or Hype
        </motion.p>

        {/* Coach Strip */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3, type: "spring", stiffness: 100 }}
          whileHover={{ scale: 1.02, y: -2 }}
          whileTap={{ scale: 0.98 }}
          className="flex items-center justify-center gap-4 mb-8 p-4 rounded-2xl bg-card/80 backdrop-blur-sm border border-border max-w-md mx-auto cursor-pointer shadow-lg"
        >
          <motion.div
            whileHover={{ scale: 1.1, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="w-16 h-16 rounded-full overflow-hidden border-2 border-accent flex-shrink-0 shadow-md"
          >
            <img src={deepakPhoto} alt="Deepak Choudhary" className="w-full h-full object-cover" />
          </motion.div>
          <div className="text-left">
            <p className="font-bold text-foreground text-lg">Deepak Choudhary</p>
            <p className="text-sm text-muted-foreground">Entrepreneur and Crypto Investing Educator</p>
            <motion.p
              className="text-xs text-accent font-semibold mt-0.5"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
            >
              12,000+ learners trained
            </motion.p>
          </div>
        </motion.div>

        {/* Workshop Details */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, type: "spring", stiffness: 100 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-10 max-w-2xl mx-auto"
        >
          {[
            { Icon: Calendar, text: getDateRange() },
            { Icon: Clock, text: formatTime() },
            { Icon: Globe, text: "Live Online Session" },
            { Icon: Gift, text: "Free Bonuses Worth Rs 29,997" },
          ].map((item, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.98 }}
              className="flex flex-col items-center text-center p-3 rounded-lg bg-card border border-accent/40 shadow-[0_0_8px_1px_hsl(28_60%_48%/0.18)]"
            >
              <item.Icon className="w-5 h-5 text-accent mb-1" />
              <span className="text-xs font-bold text-foreground leading-tight">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Lead Form */}
        <motion.div
          initial={{ opacity: 0, y: 30, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5, type: "spring", stiffness: 100 }}
        >
          <LeadForm />
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="text-center text-xs text-muted-foreground mt-6"
        >
          Educational purpose only. No financial advice.
        </motion.p>

        {/* Scroll indicator */}
        <motion.div
          className="flex justify-center mt-4"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <motion.div animate={{ y: [0, 8, 0] }} transition={{ duration: 1.5, repeat: Infinity }}>
            <ChevronDown className="w-6 h-6 text-muted-foreground/50" />
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default HeroSection;
