import { useState } from "react";
import { motion } from "framer-motion";

const professions = ["Working Professional", "Business Owner", "Student", "Beginner in Crypto"];

const LeadForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", profession: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for registering! You'll receive details shortly.");
  };

  const inputVariants = {
    focus: { scale: 1.02, borderColor: "rgb(var(--accent))" }
  };

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="max-w-md mx-auto p-6 rounded-2xl bg-card border border-border space-y-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h3 
        className="text-lg font-semibold text-center text-foreground font-display"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        Register Now
      </motion.h3>

      <motion.input
        type="text"
        placeholder="Full Name"
        required
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full px-4 py-3 rounded-lg bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
        variants={inputVariants}
        whileFocus="focus"
      />
      <motion.input
        type="email"
        placeholder="Email"
        required
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full px-4 py-3 rounded-lg bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
        variants={inputVariants}
        whileFocus="focus"
      />
      <motion.input
        type="tel"
        placeholder="Phone Number"
        required
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className="w-full px-4 py-3 rounded-lg bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all"
        variants={inputVariants}
        whileFocus="focus"
      />

      <div className="space-y-2">
        <motion.p 
          className="text-sm font-medium text-foreground"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          Your Profession
        </motion.p>
        <div className="grid grid-cols-2 gap-2">
          {professions.map((p, i) => (
            <motion.label
              key={p}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 * i + 0.3 }}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className={`flex items-center gap-2 px-3 py-2 rounded-lg border text-sm cursor-pointer transition-colors ${
                form.profession === p
                  ? "border-accent bg-accent/10 text-foreground"
                  : "border-border bg-background text-muted-foreground hover:border-accent/50"
              }`}
            >
              <input
                type="radio"
                name="profession"
                value={p}
                checked={form.profession === p}
                onChange={(e) => setForm({ ...form, profession: e.target.value })}
                className="sr-only"
              />
              <motion.span 
                className={`w-3 h-3 rounded-full border-2 flex-shrink-0 ${
                  form.profession === p ? "border-accent bg-accent" : "border-muted-foreground"
                }`}
                animate={{ 
                  scale: form.profession === p ? 1.2 : 1 
                }}
              />
              {p}
            </motion.label>
          ))}
        </div>
      </div>

      <motion.button
        type="submit"
        className="w-full py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold text-base"
        whileHover={{ scale: 1.02, opacity: 0.9 }}
        whileTap={{ scale: 0.98 }}
      >
        Join The Workshop For ₹99
      </motion.button>
    </motion.form>
  );
};

export default LeadForm;

