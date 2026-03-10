import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { HelpCircle, ChevronDown } from "lucide-react";

const faqs = [
  { q: "Do I need prior experience?", a: "No. This workshop is designed for complete beginners. We start from the basics and build up your understanding step by step." },
  { q: "Are the sessions live?", a: "Yes, all sessions are live online. You'll have the opportunity to ask questions in real-time." },
  { q: "Will I get the bonuses?", a: "Yes, all bonuses worth Rs 29,997 are included with your registration at no extra cost." },
  { q: "What language is the workshop in?", a: "The workshop is conducted in English with Hindi support where needed." }
];

const FAQItem = ({ question, answer, isOpen, onToggle, index }: { question: string; answer: string; isOpen: boolean; onToggle: () => void; index: number }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ delay: index * 0.1 }}
    className="group"
  >
    <motion.summary
      onClick={onToggle}
      className="flex items-center justify-between p-5 cursor-pointer text-base font-semibold text-foreground list-none rounded-xl bg-card/80 backdrop-blur-sm border border-border hover:border-accent/50 hover:shadow-md transition-all"
    >
      <span className="flex items-center gap-3">
        <HelpCircle className="w-5 h-5 text-accent flex-shrink-0" />
        {question}
      </span>
      <motion.span 
        className="text-accent"
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.3 }}
      >
        <ChevronDown className="w-5 h-5" />
      </motion.span>
    </motion.summary>
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ height: 0, opacity: 0 }}
          animate={{ height: "auto", opacity: 1 }}
          exit={{ height: 0, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="overflow-hidden"
        >
          <div className="px-5 pb-5 pt-2 text-muted-foreground leading-relaxed bg-card/50 rounded-b-xl -mt-2">
            {answer}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  </motion.div>
);

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="px-4 py-8 bg-card relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div 
          className="absolute top-0 left-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1, 1.2, 1],
            x: [0, 30, 0]
          }}
          transition={{ duration: 6, repeat: Infinity }}
        />
        <motion.div 
          className="absolute bottom-0 right-1/4 w-72 h-72 bg-accent/5 rounded-full blur-3xl"
          animate={{ 
            scale: [1.2, 1, 1.2],
            x: [0, -30, 0]
          }}
          transition={{ duration: 6, repeat: Infinity, delay: 3 }}
        />
      </div>

      <div className="max-w-2xl mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-foreground">
            Frequently Asked Questions
          </h2>
        </motion.div>
        
        <div className="space-y-3">
          {faqs.map((f, i) => (
            <FAQItem
              key={i}
              question={f.q}
              answer={f.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
              index={i}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQSection;

