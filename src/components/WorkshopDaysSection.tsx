import { motion } from "framer-motion";
import { BookOpen, Trophy } from "lucide-react";

const day1 = ["Blockchain basics", "Wallet setup and security", "Understanding digital assets", "Scam awareness"];
const day2 = ["NFTs, DeFi and Metaverse", "Diversification concepts", "Risk awareness frameworks", "Personal action roadmap"];

const container: import("framer-motion").Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

const item: import("framer-motion").Variants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
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

const WorkshopDaysSection = () => (
  <section className="px-4 py-8 bg-card relative overflow-hidden">
    {/* Background decoration */}
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      <motion.div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-accent/3 rounded-full blur-3xl"
        animate={{ 
          scale: [1, 1.15, 1],
        }}
        transition={{ duration: 5, repeat: Infinity }}
      />
    </div>

    <div className="max-w-4xl mx-auto relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-10"
      >
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
          When You Join The Workshop
        </h2>
      </motion.div>
      
      <motion.div 
        className="grid md:grid-cols-2 gap-6"
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-50px" }}
      >
        {[
          { title: "Day 1 - Blockchain Foundations", items: day1, icon: BookOpen },
          { title: "Day 2 - Applied Crypto Concepts", items: day2, icon: Trophy },
        ].map((day, i) => (
          <motion.div 
            key={i} 
            variants={item}
            whileHover={{ scale: 1.02, y: -4 }}
            className="p-6 rounded-2xl bg-background/80 backdrop-blur-sm border border-border shadow-lg"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent/20 to-accent/5 flex items-center justify-center">
                <day.icon className="w-6 h-6 text-accent" />
              </div>
              <h3 className="font-bold text-foreground text-lg">{day.title}</h3>
            </div>
            <ul className="space-y-3">
              {day.items.map((item, j) => (
                <motion.li 
                  key={j}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: j * 0.1 + 0.2 }}
                  whileHover={{ x: 4 }}
                  className="flex items-center gap-3 text-sm text-muted-foreground"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-accent flex-shrink-0" />
                  {item}
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

