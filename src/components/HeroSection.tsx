import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import coachImg from "@/assets/coach.jpg";

const HeroSection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", profession: "" });
  const [submitted, setSubmitted] = useState(false);
  const [seats, setSeats] = useState(127);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeats((prev) => (prev <= 1 ? 127 : prev - 1));
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone || !form.profession) return;
    setSubmitted(true);
  };

  return (
    <>
      {/* Trustpilot bar — static, inside hero */}
      <div className="bg-background/95 backdrop-blur-md border-b border-border/40 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 py-2.5 flex items-center justify-center gap-3 sm:gap-6 flex-wrap">
          {/* Trustpilot */}
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5">
              <svg className="h-6 w-6 flex-shrink-0" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="40" height="40" rx="5" fill="#00B67A"/>
                <path d="M20 7l3.6 11H35l-9.3 6.8 3.6 11L20 29l-9.3 6.8 3.6-11L5 18h11.4L20 7z" fill="white"/>
              </svg>
              <span className="font-bold text-sm tracking-tight text-[#191919] dark:text-white leading-none">Trustpilot</span>
            </div>
            <div className="flex gap-[2px]">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="40" height="40" fill="#00B67A"/>
                  <path d="M20 7l3.6 11H35l-9.3 6.8 3.6 11L20 29l-9.3 6.8 3.6-11L5 18h11.4L20 7z" fill="white"/>
                </svg>
              ))}
            </div>
            <span className="text-sm font-bold text-foreground">4.7 / 5</span>
            <span className="text-xs text-muted-foreground hidden sm:inline">· 312 reviews</span>
          </div>

          <div className="hidden sm:block w-px h-5 bg-border" />

          {/* SEBI */}
          <div className="flex items-center gap-1.5">
            <svg className="w-4 h-4 text-blue-500 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
              <path d="M9 12l2 2 4-4"/>
            </svg>
            <span className="text-xs text-muted-foreground">
              SEBI Registered:&nbsp;<span className="font-semibold text-foreground">INH000022297</span>
            </span>
          </div>
        </div>
      </div>

      {/* Hero section */}
      <section className="py-6 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-5 items-center">
            {/* Left: Content */}
            <div className="space-y-4">
              <h1 className="font-display text-3xl md:text-5xl font-bold leading-tight text-foreground">
                A Structured,{" "}
                <span className="text-gradient">Rule-Based Approach to Reading Markets</span>
              </h1>
              <p className="text-lg text-muted-foreground max-w-lg">
                Discover a structured, proven approach to identify high-probability setups faster without complex tools or coding.
              </p>

              {/* Coach card */}
              <div className="flex items-center gap-4 bg-card rounded-2xl p-4 border shadow-sm hover:shadow-md transition-all duration-300 hover:scale-[1.02]">
                <img
                  src={coachImg}
                  alt="Siddharth Kapoor - Trading Instructor"
                  className="w-32 h-32 rounded-full object-cover border-2 border-primary/30"
                />
                <div>
                  <h3 className="font-display font-bold text-foreground mb-1">Siddharth Kapoor</h3>
                  <ul className="mt-1 space-y-1 text-sm text-muted-foreground">
                    {["Trading Instructor", "5+ yrs in markets", "Deep exposure to diverse trade setups"].map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="inline-block w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Workshop info pills */}
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "16-17 March 2026" },
                  { label: "8:00 – 10:30 PM" },
                  { label: "Live on Zoom" },
                  { label: `Only ${seats} seats left` },
                ].map((item) => (
                  <span
                    key={item.label}
                    className="bg-muted/80 border-2 border-orange-500/60 rounded-lg px-4 py-2.5 text-xs font-bold text-orange-600 shadow-[0_0_20px_rgba(249,115,22,0.5),0_0_40px_rgba(249,115,22,0.2)] animate-pulse"
                  >
                    {item.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Form */}
            <div id="register-form" className="bg-card rounded-2xl border shadow-lg p-6 lg:p-8">
              {submitted ? (
                <div className="text-center py-10 space-y-3">
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
                    <Button type="submit" variant="default" size="lg" className="w-full text-base py-6">
                      Register For Just ₹99 →
                    </Button>
                    <p className="text-xs text-center text-muted-foreground flex items-center justify-center gap-1">
                      <svg className="w-3 h-3 flex-shrink-0" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                        <path d="M7 11V7a5 5 0 0 1 10 0v4"/>
                      </svg>
                      Your information is safe. We respect your privacy.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
