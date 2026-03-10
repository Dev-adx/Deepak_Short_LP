import { motion } from "framer-motion";

const day1 = ["Blockchain basics", "Wallet setup & security", "Understanding digital assets", "Scam awareness"];
const day2 = ["NFTs, DeFi & Metaverse", "Diversification concepts", "Risk awareness frameworks", "Personal action roadmap"];

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 }
};

const WorkshopDaysSection = () => (
  <section className="px-4 py-12 bg-card">
    <div className="max-w-3xl mx-auto">
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground"
      >
        When You Join The Workshop
      </motion.h2>
      <motion.div 
        className="grid md:grid-cols-2 gap-4"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {[
          { title: "Day 1 — Blockchain Foundations", items: day1 },
          { title: "Day 2 — Applied Crypto Concepts", items: day2 },
        ].map((day, i) => (
          <motion.div 
            key={i} 
            variants={item}
            whileHover={{ scale: 1.02 }}
            className="p-5 rounded-xl bg-background border border-border"
          >
            <h3 className="font-semibold text-foreground mb-3 text-base">{day.title}</h3>
            <ul className="space-y-2">
              {day.items.map((item, j) => (
                <motion.li 
                  key={j}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: j * 0.1 }}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="text-accent">•</span>{item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </div>
  </section>
);

export default WorkshopDaysSection;

