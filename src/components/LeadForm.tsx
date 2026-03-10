import { useState } from "react";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

const professions = ["Working Professional", "Business Owner", "Student", "Beginner in Crypto"];

const LeadForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", profession: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-md mx-auto p-8 rounded-2xl bg-card border border-border text-center"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 200, delay: 0.2 }}
          className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-4"
        >
          <CheckCircle className="w-10 h-10 text-accent" />
        </motion.div>
        <h3 className="text-xl font-bold text-foreground mb-2">Registration Complete!</h3>
        <p className="text-muted-foreground">
          Thank you for registering. You'll receive a confirmation email shortly with all the workshop details.
        </p>
      </motion.div>
    );
  }

  return (
    <motion.form 
      onSubmit={handleSubmit} 
      className="max-w-md mx-auto p-6 md:p-8 rounded-2xl bg-card/90 backdrop-blur-sm border border-border shadow-xl"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <motion.h3 
        className="text-xl font-bold text-center text-foreground mb-2"
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
      >
        Register Now
      </motion.h3>
      <motion.p 
        className="text-center text-muted-foreground text-sm mb-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.15 }}
      >
        Limited spots available. Reserve yours today!
      </motion.p>

      <div className="space-y-4">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
        >
          <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name</label>
          <motion.input
            type="text"
            placeholder="Enter your full name"
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-background/80 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            whileFocus={{ scale: 1.01, borderColor: "rgb(var(--accent))" }}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.25 }}
        >
          <label className="text-sm font-medium text-foreground mb-1.5 block">Email Address</label>
          <motion.input
            type="email"
            placeholder="Enter your email"
            required
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-background/80 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            whileFocus={{ scale: 1.01, borderColor: "rgb(var(--accent))" }}
          />
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
        >
          <label className="text-sm font-medium text-foreground mb-1.5 block">Phone Number</label>
          <motion.input
            type="tel"
            placeholder="Enter your phone number"
            required
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="w-full px-4 py-3 rounded-lg bg-background/80 border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent focus:border-transparent transition-all"
            whileFocus={{ scale: 1.01, borderColor: "rgb(var(--accent))" }}
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.35 }}
        >
          <label className="text-sm font-medium text-foreground mb-2 block">Your Profession</label>
          <div className="grid grid-cols-2 gap-2">
            {professions.map((p, i) => (
              <motion.label
                key={p}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 * i + 0.4 }}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center gap-2 px-3 py-3 rounded-lg border text-sm cursor-pointer transition-all ${
                  form.profession === p
                    ? "border-accent bg-accent/10 text-foreground shadow-sm"
                    : "border-border bg-background/80 text-muted-foreground hover:border-accent/50"
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
                  className={`w-4 h-4 rounded-full border-2 flex-shrink-0 flex items-center justify-center ${
                    form.profession === p ? "border-accent" : "border-muted-foreground/30"
                  }`}
                >
                  {form.profession === p && (
                    <motion.span 
                      className="w-2 h-2 rounded-full bg-accent"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                    />
                  )}
                </motion.span>
                <span className="text-xs">{p}</span>
              </motion.label>
            ))}
          </div>
        </motion.div>
      </div>

      <motion.button
        type="submit"
        className="w-full mt-6 py-4 rounded-xl bg-accent text-accent-foreground font-bold text-base shadow-lg shadow-accent/25 flex items-center justify-center gap-2"
        whileHover={{ scale: 1.02, boxShadow: "0 10px 30px -10px rgba(var(--accent), 0.4)" }}
        whileTap={{ scale: 0.98 }}
      >
        Join The Workshop For Rs 99
      </motion.button>

    </motion.form>
  );
};

export default LeadForm;

