import { Button } from "@/components/ui/button";

const CTABanner = () => {
  const scrollToForm = () => {
    document.getElementById("register-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="py-5 px-4">
      <div className="max-w-3xl mx-auto gradient-primary rounded-2xl p-6 md:p-8 text-center space-y-4">
        <h2 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">
          Register to Reserve Your Spot
        </h2>
        <div className="flex items-center justify-center gap-3 text-primary-foreground">
          <span className="text-3xl font-display font-bold">₹99</span>
          <span className="text-lg line-through opacity-60">₹499</span>
        </div>
        <p className="text-primary-foreground/80 text-sm">
          Hurry up — the offer ends on 9 March 2026 • Limited seats
        </p>
        <Button
          onClick={scrollToForm}
          className="bg-card text-foreground hover:bg-card/90 hover:scale-105 font-semibold px-8 py-6 text-base transition-all duration-300"
        >
          Register Now →
        </Button>
      </div>
    </section>
  );
};

export default CTABanner;
