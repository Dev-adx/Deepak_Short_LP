const day1 = ["Blockchain basics", "Wallet setup & security", "Understanding digital assets", "Scam awareness"];
const day2 = ["NFTs, DeFi & Metaverse", "Diversification concepts", "Risk awareness frameworks", "Personal action roadmap"];

const WorkshopDaysSection = () => (
  <section className="px-4 py-12 bg-card">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">When You Join The Workshop</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {[
          { title: "Day 1 — Blockchain Foundations", items: day1 },
          { title: "Day 2 — Applied Crypto Concepts", items: day2 },
        ].map((day, i) => (
          <div key={i} className="p-5 rounded-xl bg-background border border-border">
            <h3 className="font-semibold text-foreground mb-3 text-base">{day.title}</h3>
            <ul className="space-y-2">
              {day.items.map((item, j) => (
                <li key={j} className="flex items-start gap-2 text-sm text-muted-foreground">
                  <span className="text-accent">•</span>{item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WorkshopDaysSection;
