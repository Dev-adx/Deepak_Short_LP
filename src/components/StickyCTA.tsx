const StickyCTA = () => (
  <div className="fixed bottom-0 left-0 right-0 z-50 bg-warm-brown/95 backdrop-blur-sm border-t border-border px-4 py-3 safe-bottom">
    <div className="max-w-md mx-auto flex items-center justify-between gap-3">
      <div>
        <p className="text-primary-foreground text-sm font-semibold">2-Day Blockchain Workshop</p>
        <p className="text-primary-foreground/70 text-xs">Join For ₹99</p>
      </div>
      <a
        href="#register"
        className="px-5 py-2.5 rounded-lg bg-accent text-accent-foreground text-sm font-bold animate-blink whitespace-nowrap"
      >
        Bookings Close Today
      </a>
    </div>
  </div>
);

export default StickyCTA;