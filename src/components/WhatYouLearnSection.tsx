const topics = [
  "Crypto Investing Basics",
  "Blockchain & Digital Asset Fundamentals",
  "NFT, DeFi & Metaverse Opportunities",
  "How Crypto Wallets Actually Work",
  "Diversification & Risk Awareness Concepts",
  "How to Create Your Digital Asset Action Plan",
];

const WhatYouLearnSection = () => (
  <section className="px-4 py-12">
    <div className="max-w-3xl mx-auto">
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-8 text-foreground">
        What You'll Learn In This 2-Day Workshop
      </h2>
      <div className="grid gap-3 md:grid-cols-2">
        {topics.map((t, i) => (
          <div key={i} className="flex items-start gap-3 p-4 rounded-xl bg-card border border-border">
            <span className="w-7 h-7 rounded-full bg-accent/15 text-accent flex items-center justify-center text-sm font-bold flex-shrink-0">
              {i + 1}
            </span>
            <span className="text-sm font-medium text-foreground">{t}</span>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatYouLearnSection;
