import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  { q: "How can I join the workshop?", a: "After registration, you'll receive a Zoom link on your email. Just click and join at the scheduled time." },
  { q: "Will I get the recording?", a: "Yes, a recording will be shared with all registered participants within 24 hours." },
  { q: "Do I need prior trading knowledge?", a: "No! This workshop is beginner-friendly and uses simple, step-by-step explanations." },
  { q: "Can I ask questions during the workshop?", a: "Absolutely. There will be a dedicated Q&A session at the end of each day." },
];

const FAQ = () => {
  const [open, setOpen] = useState<number | null>(null);

  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h2 className="font-display text-3xl font-bold text-center mb-10 text-foreground">
          Frequently Asked <span className="text-gradient">Questions</span>
        </h2>
        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-card rounded-xl border overflow-hidden"
            >
              <button
                onClick={() => setOpen(open === i ? null : i)}
                className="w-full flex items-center justify-between p-4 text-left font-medium text-foreground hover:bg-muted/50 transition-colors"
              >
                {faq.q}
                <ChevronDown className={`w-5 h-5 text-muted-foreground transition-transform ${open === i ? "rotate-180" : ""}`} />
              </button>
              {open === i && (
                <div className="px-4 pb-4 text-sm text-muted-foreground">{faq.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
