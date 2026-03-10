import deepakPhoto from "@/assets/deepak-photo.png";
import LeadForm from "./LeadForm";

const HeroSection = () => {
  return (
    <section className="px-4 pt-8 pb-10 md:pt-16 md:pb-16">
      <div className="max-w-5xl mx-auto">
        {/* Badge */}
        <div className="text-center mb-6">
          <span className="inline-block px-4 py-1.5 rounded-full bg-secondary text-sm font-medium text-foreground border border-border">
            ⭐ Rated 4.6/5 on Trustpilot
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-3xl md:text-5xl font-bold text-center leading-tight mb-3 text-foreground">
          2-Day <span className="text-accent">LIVE</span> Blockchain &<br className="hidden md:block" /> Digital Asset Workshop
        </h1>
        <p className="text-center text-muted-foreground text-base md:text-lg max-w-2xl mx-auto mb-8">
          Understand Crypto, NFTs, DeFi & Metaverse — Without Confusion or Hype
        </p>

        {/* Coach Strip */}
        <div className="flex items-center justify-center gap-3 mb-8 p-3 rounded-xl bg-card border border-border max-w-md mx-auto">
          <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-accent flex-shrink-0">
            <img src={deepakPhoto} alt="Deepak Choudhary" className="w-full h-full object-cover" />
          </div>
          <div>
            <p className="font-semibold text-foreground">Deepak Choudhary</p>
            <p className="text-sm text-muted-foreground">Entrepreneur & Crypto Investing Educator</p>
            <p className="text-xs text-accent font-medium">12,000+ learners trained</p>
          </div>
        </div>

        {/* Workshop Details */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8 max-w-2xl mx-auto">
          {[
            { icon: "📅", text: "9th & 10th March 2026" },
            { icon: "⏰", text: "8:00 PM – 10:30 PM" },
            { icon: "🌐", text: "Live Online Session" },
            { icon: "🎁", text: "Free Bonuses Worth ₹29,997" },
          ].map((item, i) => (
            <div key={i} className="flex flex-col items-center text-center p-3 rounded-lg bg-card border border-border">
              <span className="text-xl mb-1">{item.icon}</span>
              <span className="text-xs font-medium text-foreground">{item.text}</span>
            </div>
          ))}
        </div>

        {/* Lead Form */}
        <LeadForm />

        <p className="text-center text-xs text-muted-foreground mt-4">
          Educational purpose only. No financial advice.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
