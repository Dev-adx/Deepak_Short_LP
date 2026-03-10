import deepakPhoto from "@/assets/deepak-photo.png";

const AboutSection = () => (
  <section className="px-4 py-12 bg-card">
    <div className="max-w-3xl mx-auto text-center">
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-foreground">Meet Your Mentor</h2>
      <div className="w-28 h-28 rounded-full overflow-hidden border-3 border-accent mx-auto mb-4">
        <img src={deepakPhoto} alt="Deepak Choudhary" className="w-full h-full object-cover" />
      </div>
      <h3 className="text-xl font-semibold text-foreground mb-1">Deepak Choudhary</h3>
      <p className="text-sm text-accent font-medium mb-4">Entrepreneur • Blockchain Educator</p>
      <ul className="space-y-2 text-sm text-muted-foreground max-w-sm mx-auto text-left">
        {[
          "12,000+ learners guided globally",
          "Practical frameworks for digital assets",
          "Focus on education, not hype",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-2">
            <span className="text-accent mt-0.5">✓</span>
            {item}
          </li>
        ))}
      </ul>
    </div>
  </section>
);

export default AboutSection;
