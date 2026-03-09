import { CheckCircle } from "lucide-react";

const items = [
  "How Professionals Use Structured, Rule-Based Methods With Charts & Data",
  "Ways To Reduce Emotional Decisions By Applying Systematic Frameworks",
  "How To Explore Automation Setups That Save Time Without Coding",
  "Study & Practice 3 Popular Rule-Based Patterns & Systems",
  "Step-By-Step Demo On Setting Up Your Own Simplified Workflow",
];

const WhatYouLearn = () => (
  <section className="gradient-primary py-10 px-4">
    <div className="max-w-4xl mx-auto">
      <h2 className="font-display text-3xl sm:text-4xl md:text-6xl font-bold text-center mb-2 sm:mb-3 text-white">
        What You'll Learn Inside
      </h2>
      <p className="text-center text-white/90 mb-5 sm:mb-8 max-w-xl mx-auto text-sm sm:text-base">
        Clear, practical systems you can apply immediately — without complex setups.
      </p>
      <div className="space-y-3">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3 bg-white/20 backdrop-blur-sm rounded-xl border border-white/30 p-4 hover:bg-white/25 transition-all duration-300 cursor-default"
          >
            <CheckCircle className="w-5 h-5 text-white mt-0.5 shrink-0" />
            <span className="text-white font-semibold">{item}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatYouLearn;
