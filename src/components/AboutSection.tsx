import { motion } from "framer-motion";
import deepakPhoto from "@/assets/deepak-photo.png";

const AboutSection = () => {
  return (
    <section className="px-4 py-12 bg-card">
      <div className="max-w-3xl mx-auto text-center">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-2xl md:text-3xl font-bold mb-6 text-foreground"
        >
          Meet Your Mentor
        </motion.h2>
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          whileHover={{ scale: 1.05 }}
          className="w-28 h-28 rounded-full overflow-hidden border-3 border-accent mx-auto mb-4"
        >
          <img src={deepakPhoto} alt="Deepak Choudhary" className="w-full h-full object-cover" />
        </motion.div>
        <motion.h3 
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-xl font-semibold text-foreground mb-1"
        >
          Deepak Choudhary
        </motion.h3>
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="text-sm text-accent font-medium mb-4"
        >
          Entrepreneur • Blockchain Educator
        </motion.p>
        <ul className="space-y-2 text-sm text-muted-foreground max-w-sm mx-auto text-left">
          {[
            "12,000+ learners guided globally",
            "Practical frameworks for digital assets",
            "Focus on education, not hype",
          ].map((item, i) => (
            <motion.li 
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: 0.1 * i + 0.4 }}
              className="flex items-start gap-2"
            >
              <span className="text-accent mt-0.5">✓</span>
              {item}
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default AboutSection;

