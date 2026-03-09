import { Users, TrendingUp, Briefcase } from "lucide-react";

const personas = [
  { icon: Briefcase, title: "Working Professional / Business Owner", desc: "Don't have hours for screens? This system-based approach fits your schedule." },
  { icon: Users, title: "Beginner Trader", desc: "Confused by data? Get a clear, step-by-step roadmap to start with confidence." },
  { icon: TrendingUp, title: "Experienced Trader", desc: "Want more structure and discipline? Add systematic frameworks to your approach." },
];

const PerfectFor = () => (
  <section className="py-7 px-4">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-display text-3xl sm:text-5xl font-bold text-center mb-6 sm:mb-10 text-foreground">
        This Workshop Is <span className="text-gradient">Perfect For You</span> If…
      </h2>
      <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6">
        {personas.map((p) => (
          <div key={p.title} className="bg-card rounded-2xl border p-6 text-center space-y-3 hover:shadow-md hover:-translate-y-1 transition-all duration-300">
            <div className="w-12 h-12 rounded-xl gradient-primary flex items-center justify-center mx-auto">
              <p.icon className="w-6 h-6 text-primary-foreground" />
            </div>
            <h3 className="font-display font-bold text-foreground">{p.title}</h3>
            <p className="text-sm text-muted-foreground">{p.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default PerfectFor;
