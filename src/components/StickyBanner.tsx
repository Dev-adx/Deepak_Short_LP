import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

const StickyBanner = () => {
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date("2026-03-09T23:59:59");
    const update = () => {
      const now = new Date();
      const diff = Math.max(0, targetDate.getTime() - now.getTime());
      setTimeLeft({
        hours: Math.floor(diff / (1000 * 60 * 60)),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    };
    update();
    const interval = setInterval(update, 1000);
    return () => clearInterval(interval);
  }, []);

  const scrollToForm = () => {
    document.getElementById("register-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 gradient-primary py-2 px-4 shadow-lg">
      <div className="max-w-5xl mx-auto flex items-center justify-between gap-4">
        <div className="flex items-center gap-3 text-primary-foreground">
          <span className="hidden sm:inline text-sm font-medium">Limited Seats</span>
          <div className="flex gap-1 font-display font-bold text-sm">
            <span className="bg-foreground/20 rounded px-2 py-1">{String(timeLeft.hours).padStart(2, "0")}h</span>
            <span className="bg-foreground/20 rounded px-2 py-1">{String(timeLeft.minutes).padStart(2, "0")}m</span>
            <span className="bg-foreground/20 rounded px-2 py-1">{String(timeLeft.seconds).padStart(2, "0")}s</span>
          </div>
        </div>
        <Button
          onClick={scrollToForm}
          className="bg-card text-foreground hover:bg-card/90 hover:scale-105 font-semibold text-sm px-6 transition-all duration-300"
        >
          Register ₹99
        </Button>
      </div>
    </div>
  );
};

export default StickyBanner;
