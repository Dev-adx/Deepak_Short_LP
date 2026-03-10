import { motion } from "framer-motion";
import { CheckCircle2, Sparkles } from "lucide-react";

const topics = [
  "Crypto Investing Basics",
  "Blockchain and Digital Asset Fundamentals",
  "NFT, DeFi and Metaverse Opportunities",
  "How Crypto Wallets Actually Work",
  "Diversification and Risk Awareness Concepts",
  "How to Create Your Digital Asset Action Plan",
];

const container: import("framer-motion").Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.9 },
  show: { 
    opacity: 1, 
    y: 0, 
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 15
    }
  }
};

const WhatYouLearnSection = () => (
  <section className="px-4 py-8 relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/3 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.1, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 6, repeat: Infinity }}
      />
    </div>

    <div className="max-w-3xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
          In This 2-Day Workshop
        </h2>
      </motion.div>
      
      <motion.div 
        className="grid gap-4 md:grid-cols-2"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {topics.map((t, i) => (
          <motion.div 
            key={i} 
            variants={item}
            whileHover={{ 
              scale: 1.02, 
              y: -4,
              boxShadow: "0 20px 40px -15px rgba(0,0,0,0.15)"
            }}
            whileTap={{ scale: 0.98 }}
            className="flex items-start gap-4 p-5 rounded-2xl bg-card/80 backdrop-blur-sm border border-border shadow-sm hover:shadow-md transition-shadow"
          >
            <motion.div
              initial={{ scale: 0, rotate: -180 }}
              whileInView={{ scale: 1, rotate: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 + 0.3, type: "spring", stiffness: 200 }}
              className="w-10 h-10 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center flex-shrink-0"
            >
              <CheckCircle2 className="w-5 h-5 text-accent" />
            </motion.div>
            <span className="text-sm font-medium text-foreground leading-relaxed pt-1">{t}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default WhatYouLearnSection;

