import { useState } from "react";

const professions = ["Working Professional", "Business Owner", "Student", "Beginner in Crypto"];

const LeadForm = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", profession: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for registering! You'll receive details shortly.");
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-6 rounded-2xl bg-card border border-border space-y-4">
      <h3 className="text-lg font-semibold text-center text-foreground font-display">Register Now</h3>

      <input
        type="text"
        placeholder="Full Name"
        required
        value={form.name}
        onChange={(e) => setForm({ ...form, name: e.target.value })}
        className="w-full px-4 py-3 rounded-lg bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <input
        type="email"
        placeholder="Email"
        required
        value={form.email}
        onChange={(e) => setForm({ ...form, email: e.target.value })}
        className="w-full px-4 py-3 rounded-lg bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
      />
      <input
        type="tel"
        placeholder="Phone Number"
        required
        value={form.phone}
        onChange={(e) => setForm({ ...form, phone: e.target.value })}
        className="w-full px-4 py-3 rounded-lg bg-background border border-border text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-accent"
      />

      <div className="space-y-2">
        <p className="text-sm font-medium text-foreground">Your Profession</p>
        <div className="grid grid-cols-2 gap-2">
          {professions.map((p) => (
            <label
              key={p}
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
              <span className={`w-3 h-3 rounded-full border-2 flex-shrink-0 ${
                form.profession === p ? "border-accent bg-accent" : "border-muted-foreground"
              }`} />
              {p}
            </label>
          ))}
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-3.5 rounded-lg bg-accent text-accent-foreground font-semibold text-base hover:opacity-90 transition-opacity"
      >
        Join The Workshop For ₹99
      </button>
    </form>
  );
};

export default LeadForm;
