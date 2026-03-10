import { motion } from "framer-motion";
import deepakPhoto from "@/assets/deepak-photo.png";
import LeadForm from "./LeadForm";

const HeroSection = () => {
  return (
    <section className="px-4 pt-8 pb-10 md:pt-16 md:pb-16">
      <div className="max-w-5xl mx-auto">
        {/* Badge */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium text-foreground border border-border animate-pulse">
            ⭐ Rated 4.6/5 on Trustpilot
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl md:text-5xl font-bold text-center leading-tight mb-3 text-foreground"
        >
          2-Day <span className="text-accent">LIVE</span> Blockchain &<br className="hidden md:block" /> Digital Asset Workshop
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-center text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8"
        >
          Understand Crypto, NFTs, DeFi & Metaverse — Without Confusion or Hype
        </motion.p>

        {/* Coach Strip */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          whileHover={{ scale: 1.02 }}
          className="flex items-center justify-center gap-3 mb-8 p-3 rounded-xl bg-card border border-border max-w-md mx-auto cursor-pointer"
        >
          <motion.div 
            whileHover={{ scale: 1.1 }}
            className="w-14 h-14 rounded-full overflow-hidden border-2 border-accent flex-shrink-0"
          >
            <img src={deepakPhoto} alt="Deepak Choudhary" className="w-full h-full object-cover" />
          </motion.div>
          <div>
            <p className="font-semibold text-foreground">Deepak Choudhary</p>
            <p className="text-sm text-muted-foreground">Entrepreneur & Crypto Investing Educator</p>
            <p className="text-xs text-accent font-medium">12,000+ learners trained</p>
          </div>
        </motion.div>

        {/* Workshop Details */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 max-w-2xl mx-auto"
        >
          {[
            { icon: "📅", text: "9th & 10th March 2026" },
            { icon: "⏰", text: "8:00 PM – 10:30 PM" },
            { icon: "🌐", text: "Live Online Session" },
            { icon: "🎁", text: "Free Bonuses Worth ₹29,997" },
          ].map((item, i) => (
            <motion.div 
              key={i}
              whileHover={{ scale: 1.05, y: -2 }}
              className="flex flex-col items-center text-center p-3 rounded-lg bg-card border border-border"
            >
              <span className="text-xl mb-1">{item.icon}</span>
              <span className="text-xs font-medium text-foreground">{item.text}</span>
            </motion.div>
          ))}
        </motion.div>

        {/* Lead Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <LeadForm />
        </motion.div>

        <p className="text-center text-xs text-muted-foreground mt-4">
          Educational purpose only. No financial advice.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;

