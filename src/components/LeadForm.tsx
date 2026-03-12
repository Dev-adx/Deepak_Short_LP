import { useState } from "react";
import { motion } from "framer-motion";
import { useEventConfig } from "@/hooks/useEventConfig";

declare global {
  interface Window {
    fbq: (...args: any[]) => void;
  }
}

const professions = ["Working Professional", "Business Owner", "Student", "Beginner in Crypto"];

const LeadForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", profession: "" });
  const { config } = useEventConfig();
    const [errors, setErrors] = useState<Partial<typeof form>>({});

    const validateField = (field: keyof typeof form, value: string) => {
      let error = "";
      if (field === "name") {
        if (!value.trim() || value.trim().length < 2) error = "Enter your full name (min 2 chars)";
      } else if (field === "email") {
        if (!value || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)) error = "Enter a valid email";
      } else if (field === "phone") {
        if (!value || !/^\d{10}$/.test(value.replace(/\s/g, ""))) error = "Enter a 10-digit phone number";
      } else if (field === "profession") {
        if (!value) error = "Select your profession";
      }
      setErrors((prev) => ({ ...prev, [field]: error }));
      return !error;
    };

    const validate = () => {
      validateField("name", form.name);
      validateField("email", form.email);
      validateField("phone", form.phone);
      validateField("profession", form.profession);
    };

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const phoneRegex = /^\d{10}$/;

    const isFormValid = form.name.trim().length >= 2 &&
      emailRegex.test(form.email) &&
      phoneRegex.test(form.phone.replace(/\s/g, '')) &&
      !!form.profession;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!isFormValid) {
      validate();
      return;
    }
    window.fbq?.('track', 'AddToCart', {
      value: parseFloat(config.price.slice(1)),
      currency: 'INR',
    });
    const payUrl =
      config.paymentLink.replace(/\/$/, "") +
      `?name=${encodeURIComponent(form.name)}` +
      `&email=${encodeURIComponent(form.email)}` +
      `&phone=${encodeURIComponent(form.phone)}`;
    window.location.href = payUrl;
  };

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
            onChange={(e) => {
              setForm({ ...form, name: e.target.value });
              validateField("name", e.target.value);
            }}
            className={`w-full px-4 py-3 rounded-lg bg-background/80 border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all ${errors.name ? 'border-destructive ring-destructive/50' : 'border-border focus:border-transparent focus:ring-accent'} `}
            whileFocus={{ scale: 1.01 }}
          />
          {errors.name && <p className="text-destructive text-xs mt-1">{errors.name}</p>}
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
            onChange={(e) => {
              setForm({ ...form, email: e.target.value });
              validateField("email", e.target.value);
            }}
            className={`w-full px-4 py-3 rounded-lg bg-background/80 border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all ${errors.email ? 'border-destructive ring-destructive/50' : 'border-border focus:border-transparent'}`}
            whileFocus={{ scale: 1.01 }}
          />
          {errors.email && <p className="text-destructive text-xs mt-1">{errors.email}</p>}
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
            onChange={(e) => {
              setForm({ ...form, phone: e.target.value });
              validateField("phone", e.target.value);
            }}
            className={`w-full px-4 py-3 rounded-lg bg-background/80 border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent transition-all ${errors.phone ? 'border-destructive ring-destructive/50' : 'border-border focus:border-transparent'}`}
            whileFocus={{ scale: 1.01 }}
          />
          {errors.phone && <p className="text-destructive text-xs mt-1">{errors.phone}</p>}
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
                  onChange={(e) => {
                    setForm({ ...form, profession: e.target.value });
                    validateField("profession", e.target.value);
                  }}
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
          {errors.profession && <p className="text-destructive text-xs mt-1">{errors.profession}</p>}
        </motion.div>
      </div>

      <motion.button
        type="submit"
        disabled={!isFormValid}
        className={`w-full mt-6 py-4 rounded-xl font-bold text-base shadow-lg flex items-center justify-center gap-2 transition-all ${
          isFormValid 
            ? 'bg-accent text-accent-foreground shadow-accent/25 hover:shadow-accent/40 cursor-pointer' 
            : 'bg-muted text-muted-foreground shadow-sm cursor-not-allowed'
        }`}
        whileHover={isFormValid ? { scale: 1.02, boxShadow: "0 10px 30px -10px rgba(var(--accent), 0.4)" } : {}}
        whileTap={isFormValid ? { scale: 0.98 } : {}}
      >
        Pay {config.price} Now
      </motion.button>

    </motion.form>
  );
};

export default LeadForm;

