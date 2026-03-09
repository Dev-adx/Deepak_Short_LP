import { CheckCircle } from "lucide-react";

const items = [
  "How Professionals Use Structured, Rule-Based Methods With Charts & Data",
  "Ways To Reduce Emotional Decisions By Applying Systematic Frameworks",
  "How To Explore Automation Setups That Save Time Without Coding",
  "Study & Practice 3 Popular Backtested Patterns & Systems",
  "Step-By-Step Demo On Setting Up Your Own Simplified Workflow",
];

const WhatYouLearn = () => (
  <section className="py-16 px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="font-display text-3xl md:text-4xl font-bold text-center mb-3 text-foreground">
        What You'll <span className="text-gradient">Learn Inside</span>
      </h2>
      <p className="text-center text-muted-foreground mb-10 max-w-xl mx-auto">
        Clear, practical systems you can apply immediately — without complex setups.
      </p>
      <div className="space-y-4">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3 bg-card rounded-xl border p-4 hover:shadow-md transition-shadow"
          >
            <CheckCircle className="w-5 h-5 text-primary mt-0.5 shrink-0" />
            <span className="text-foreground font-medium">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatYouLearn;
