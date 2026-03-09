import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { useEventConfig } from "@/hooks/useEventConfig";

const StickyBanner = () => {
  const { config } = useEventConfig();
  const [timeLeft, setTimeLeft] = useState({ hours: 0, minutes: 0, seconds: 0 });

  useEffect(() => {
    const targetDate = new Date(config.offerEndDatetime);
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
  }, [config.offerEndDatetime]);

  const scrollToForm = () => {
    document.getElementById("register-form")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 gradient-primary py-2 px-4 shadow-lg">
      <div className="max-w-5xl mx-auto flex flex-col items-center gap-1">
        {/* Headline */}
        <p className="text-primary-foreground text-xs sm:text-sm font-medium text-center">
          Seats Are Filling Fast –{" "}
          <span className="font-bold animate-pulse bg-white text-red-600 rounded px-1.5 py-0.5 ml-0.5">Bookings Close Today</span>
        </p>
        {/* Countdown + Button row */}
        <div className="flex items-center justify-between w-full gap-4">
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
    </div>
  );
};

export default StickyBanner;
