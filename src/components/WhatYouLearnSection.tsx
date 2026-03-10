import { motion } from "framer-motion";

const topics = [
  "Crypto Investing Basics",
  "Blockchain & Digital Asset Fundamentals",
  "NFT, DeFi & Metaverse Opportunities",
  "How Crypto Wallets Actually Work",
  "Diversification & Risk Awareness Concepts",
  "How to Create Your Digital Asset Action Plan",
];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const WhatYouLearnSection = () => (
  <section className="px-4 py-12">
    <div className="max-w-3xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground"
      >
        What You'll Learn In This 2-Day Workshop
      </motion.h2>
      <motion.div 
        className="grid gap-3 md:grid-cols-2"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {topics.map((t, i) => (
          <motion.div 
            key={i} 
            variants={item}
            whileHover={{ scale: 1.02, y: -2 }}
            className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border"
          >
            <motion.span 
              className="w-7 h-7 rounded-full bg-accent/15 text-accent flex items-center justify-center text-sm font-bold flex-shrink-0"
              whileHover={{ scale: 1.1 }}
            >
              {i + 1}
            </motion.span>
            <span className="text-sm font-medium text-foreground">{t}</span>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default WhatYouLearnSection;

