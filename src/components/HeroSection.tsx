import { useState } from "react";
import { Button } from "@/components/ui/button";
import coachImg from "@/assets/coach.jpg";

const HeroSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", profession: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.profession) return;
    setSubmitted(true);
  };

  return (
    <section className="relative overflow-hidden pb-16 pt-8">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary/5 blur-3xl -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-accent/5 blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-6xl mx-auto px-4">
        {/* Top badge */}
        <div className="text-center mb-6">
          <span className="inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground">
            ⭐ 4.7/5 on Trustpilot • SEBI Registered: INH000022297
          </span>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 items-start">
          {/* Left: Content */}
          <div className="space-y-6">
            <h1 className="font-display text-4xl md:text-5xl font-bold leading-tight text-foreground">
              Let AI Guide Your{" "}
              <span className="text-gradient">Trading Decisions</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-lg">
              Discover a structured, proven approach to identify winning setups faster — without complex tools or coding.
            </p>

            {/* Coach card */}
            <div className="flex items-center gap-4 bg-card rounded-2xl p-4 border shadow-sm">
              <img
                src={coachImg}
                alt="Siddharth Kapoor - Trading Instructor"
                className="w-32 h-32 rounded-full object-cover border-2 border-primary/30"
              />
              <div>
                <h3 className="font-display font-bold text-foreground">Siddharth Kapoor</h3>
                <p className="text-sm text-muted-foreground">Trading Instructor • 5+ yrs in markets</p>
                <p className="text-sm text-muted-foreground">Deep exposure to diverse trade setups</p>
              </div>
            </div>

            {/* Workshop info pills */}
            <div className="flex flex-wrap gap-3">
              {[
                { icon: "📅", label: "16-17 March 2026" },
                { icon: "🕗", label: "8:00 – 10:30 PM" },
                { icon: "🌐", label: "Live on Zoom" },
                { icon: "🔥", label: "Only 127 seats left" },
              ].map((item) => (
                <span
                  key={item.label}
                  className="inline-flex items-center gap-1.5 bg-muted rounded-lg px-3 py-2 text-sm font-medium text-foreground"
                >
                  {item.icon} {item.label}
                </span>
              ))}
            </div>
          </div>

          {/* Right: Form */}
          <div id="register-form" className="bg-card rounded-2xl border shadow-lg p-6 lg:p-8">
            {submitted ? (
              <div className="text-center py-10 space-y-3">
                <div className="text-5xl">🎉</div>
                <h3 className="font-display text-2xl font-bold text-foreground">You're Registered!</h3>
                <p className="text-muted-foreground">Check your email for workshop details.</p>
              </div>
            ) : (
              <>
                <h2 className="font-display text-xl font-bold text-foreground mb-1">Register For Just <span className="text-gradient">₹99</span></h2>
                <p className="text-sm text-muted-foreground mb-5">
                  <span className="line-through">₹499</span> — Offer ends 9 March 2026
                </p>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <input
                    type="text"
                    placeholder="Full Name *"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    required
                    className="w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <input
                    type="email"
                    placeholder="Email Address *"
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    required
                    className="w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <input
                    type="tel"
                    placeholder="Phone Number *"
                    value={form.phone}
                    onChange={(e) => setForm({ ...form, phone: e.target.value })}
                    required
                    className="w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  />
                  <select
                    value={form.profession}
                    onChange={(e) => setForm({ ...form, profession: e.target.value })}
                    required
                    className="w-full rounded-lg border bg-background px-4 py-3 text-sm text-foreground focus:outline-none focus:ring-2 focus:ring-ring"
                  >
                    <option value="">Select Profession *</option>
                    <option value="working-professional">Working Professional</option>
                    <option value="business-owner">Business Owner</option>
                    <option value="student">Student</option>
                    <option value="trader">Trader</option>
                    <option value="other">Other</option>
                  </select>
                  <Button type="submit" variant="cta" size="lg" className="w-full text-base py-6">
                    Register For Just ₹99 →
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    🔒 Your information is safe. We respect your privacy.
                  </p>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
