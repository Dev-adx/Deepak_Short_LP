import coachImg from "@/assets/coach.jpg";

const AboutCoach = () => (
  <section className="py-7 px-4 bg-muted/50">
    <div className="max-w-4xl mx-auto">
      <h2 className="font-display text-3xl sm:text-5xl font-bold text-center mb-6 sm:mb-10 text-foreground">
        Meet Your Trainer – <span className="text-gradient">Siddharth Kapoor</span>
      </h2>
      <div className="flex flex-col md:flex-row items-center gap-5 sm:gap-8 bg-card rounded-2xl border p-5 sm:p-8 hover:shadow-lg transition-all duration-300">
        <img
          src={coachImg}
          alt="Siddharth Kapoor - SEBI Registered Analyst"
          className="w-28 h-28 sm:w-36 sm:h-36 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/20 shrink-0"
        />
        <div className="space-y-3 text-center md:text-left">
          <div className="inline-block bg-secondary text-secondary-foreground text-xs font-semibold px-3 py-1 rounded-full">
            SEBI Registered Analyst • INH000022297
          </div>
          <p className="text-muted-foreground leading-relaxed">
            Trusted coach with <strong className="text-foreground">5+ years analyzing financial markets</strong> and experience
            decoding financial data, patterns, and systems. Known for simplifying charts into practical,
            rule-based methods and training <strong className="text-foreground">2,300+ learners</strong> with clear, no-code workflows
            built for busy professionals.
          </p>
        </div>
      </div>
    </div>
  </section>
);

export default AboutCoach;
