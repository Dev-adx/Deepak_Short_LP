const faqs = [
  { q: "Do I need prior experience?", a: "No. This workshop is designed for complete beginners." },
  { q: "Are the sessions live?", a: "Yes, live online sessions." },
  { q: "Will I get the bonuses?", a: "Yes, included with registration." },
  { q: "What language is the workshop in?", a: "English." },
];

const FAQSection = () => (
  <section className="px-4 py-12 bg-card">
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">Frequently Asked Questions</h2>
      <div className="space-y-3">
        {faqs.map((f, i) => (
          <details key={i} className="group rounded-xl bg-background border border-border overflow-hidden">
            <summary className="flex items-center justify-between p-4 cursor-pointer text-sm font-medium text-foreground">
              {f.q}
              <span className="text-accent transition-transform group-open:rotate-45 text-lg">+</span>
            </summary>
            <div className="px-4 pb-4 text-sm text-muted-foreground">{f.a}</div>
          </details>
        ))}
      </div>
    </div>
  </section>
);

export default FAQSection;
