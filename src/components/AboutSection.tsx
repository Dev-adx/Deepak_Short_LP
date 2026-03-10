import { motion } from "framer-motion";
import { Check, Award, Users, BookOpen } from "lucide-react";
import deepakPhoto from "@/assets/deepak-photo.png";

const stats = [
  { icon: Users, value: "12,000+", label: "Learners Trained" },
  { icon: Award, value: "4.6", label: "Rating" },
  { icon: BookOpen, value: "50+", label: "Workshops" },
];

const AboutSection = () => {
  return (
    <section className="px-4 py-8 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 right-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 left-0 w-80 h-80 bg-accent/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -20, 0]
          }}
          transition={{ duration: 8, repeat: Infinity, delay: 4 }}
        />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-6"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Meet Your Mentor
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Profile Image */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, type: "spring", stiffness: 100 }}
            className="flex justify-center"
          >
            <motion.div 
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="relative"
            >
              <motion.div 
                className="w-48 h-48 md:w-56 md:h-56 rounded-2xl overflow-hidden border-4 border-accent shadow-2xl"
                whileHover={{ boxShadow: "0 30px 60px -20px rgba(var(--accent), 0.4)" }}
              >
                <img src={deepakPhoto} alt="Deepak Choudhary" className="w-full h-full object-cover" />
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2, type: "spring", stiffness: 100 }}
          >
            <h3 className="text-2xl font-bold text-foreground mb-2 text-center">
              Deepak Choudhary
            </h3>
            <p className="text-accent font-medium mb-4 text-center">
              Entrepreneur and Blockchain Educator
            </p>
            <p className="text-muted-foreground mb-6 leading-relaxed text-center">
              With over 12,000 learners trained globally, Deepak brings practical 
              frameworks for understanding digital assets. His focus on education 
              over hype has helped thousands navigate the crypto space confidently.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 + i * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="text-center p-3 rounded-xl bg-background/50 border border-border"
                >
                  <stat.icon className="w-5 h-5 text-accent mx-auto mb-1" />
                  <p className="text-lg font-bold text-foreground">{stat.value}</p>
                  <p className="text-xs text-muted-foreground">{stat.label}</p>
                </motion.div>
              ))}
            </div>

            {/* Bullet points */}
            <ul className="space-y-3 flex flex-col items-center">
              {[
                "12,000+ learners guided globally",
                "Practical frameworks for digital assets",
                "Focus on education, not hype",
              ].map((item, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.5 + i * 0.1 }}
                  className="flex items-center gap-2 text-sm text-foreground"
                >
                  <span className="w-5 h-5 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <Check className="w-3 h-3 text-accent" />
                  </span>
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;

