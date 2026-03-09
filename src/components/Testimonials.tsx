const testimonials = [
  { name: "Rahul M.", role: "Working Professional", text: "The structured approach changed how I look at charts. Finally a system I can follow daily!" },
  { name: "Priya S.", role: "Beginner Trader", text: "I was lost before this workshop. Now I have a clear roadmap and confidence to practice." },
  { name: "Amit K.", role: "Business Owner", text: "As a busy professional, the no-code automation tips were gold. Saved me hours of screen time." },
];

const Testimonials = () => (
  <section className="py-16 px-4 bg-muted/50">
    <div className="max-w-5xl mx-auto">
      <h2 className="font-display text-3xl font-bold text-center mb-10 text-foreground">
        What Learners <span className="text-gradient">Say</span>
      </h2>
      <div className="grid md:grid-cols-3 gap-6">
        {testimonials.map((t) => (
          <div key={t.name} className="bg-card rounded-2xl border p-6 space-y-3">
            <div className="flex gap-1 text-primary">{"★★★★★"}</div>
            <p className="text-foreground text-sm leading-relaxed">"{t.text}"</p>
            <div>
              <p className="font-display font-bold text-foreground text-sm">{t.name}</p>
              <p className="text-xs text-muted-foreground">{t.role}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
