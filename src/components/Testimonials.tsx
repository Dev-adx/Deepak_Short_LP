import { useState, useRef, useEffect } from "react";

const testimonials = [
  { name: "Rahul M.", role: "Working Professional", text: "The structured approach changed how I look at charts. Finally a system I can follow daily!", date: "2 weeks ago" },
  { name: "Priya S.", role: "Beginner Trader", text: "I was lost before this workshop. Now I have a clear roadmap and confidence to practice.", date: "1 month ago" },
  { name: "Amit K.", role: "Business Owner", text: "As a busy professional, the no-code automation tips were gold. Saved me hours of screen time.", date: "3 weeks ago" },
  { name: "Sanjay T.", role: "Software Engineer", text: "Best investment I've made in my trading journey. The rule-based system is exactly what I needed.", date: "1 week ago" },
  { name: "Riya Patel", role: "Finance Analyst", text: "Finally understood how to read markets without getting overwhelmed. Highly recommend for beginners!", date: "5 days ago" },
  { name: "Vikram S.", role: "Trader", text: "Been trading for 3 years but lacked discipline. This workshop helped me build a systematic approach.", date: "2 weeks ago" },
  { name: "Anjali M.", role: "Homemaker", text: "As someone with no trading background, I found this incredibly easy to follow. Thank you Siddharth!", date: "1 month ago" },
  { name: "Deepak R.", role: "Marketing Manager", text: "The automation setups are game-changing. I now spend 30 mins instead of 3 hours on market analysis.", date: "4 days ago" },
  { name: "Kavya N.", role: "Student", text: "Perfect for students like me who want to learn trading without prior experience. Very clear explanations!", date: "2 weeks ago" },
  { name: "Arjun P.", role: "Entrepreneur", text: "Worth every penny. The patterns and systems taught here are practical and implementable.", date: "1 week ago" },
];

type Testimonial = { name: string; role: string; text: string; date: string };

const ReviewCard = ({ t, getInitials, className = "" }: { t: Testimonial; getInitials: (n: string) => string; className?: string }) => (
  <div className={`bg-card rounded-2xl border shadow-lg p-4 flex flex-col items-center text-center gap-1.5 ${className}`}>
    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold text-sm">
      {getInitials(t.name)}
    </div>
    <p className="font-bold text-foreground text-lg leading-tight">{t.name}</p>
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-3.5 h-3.5 fill-amber-500" viewBox="0 0 24 24">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
    <p className="text-foreground text-sm leading-snug line-clamp-3">"{t.text}"</p>
    <div className="pt-1.5 border-t border-border/50 w-full flex justify-center mt-auto">
      <span className="bg-muted text-muted-foreground text-[11px] px-2.5 py-0.5 rounded-full">{t.role}</span>
    </div>
  </div>
);

const Testimonials = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const mobileScrollRef = useRef<HTMLDivElement>(null);
  const desktopTrackRef = useRef<HTMLDivElement>(null);
  const animFrameRef = useRef<number | null>(null);
  const pausedRef = useRef(false);

  const getInitials = (name: string) => {
    return name.split(" ").map((n) => n[0]).join("");
  };

  // Mobile: auto-scroll carousel
  useEffect(() => {
    const el = mobileScrollRef.current;
    if (!el) return;
    const interval = setInterval(() => {
      if (pausedRef.current) return;
      const next = (activeIndex + 1) % testimonials.length;
      el.scrollTo({ left: next * el.clientWidth, behavior: "smooth" });
      setActiveIndex(next);
    }, 3000);
    return () => clearInterval(interval);
  }, [activeIndex]);

  // Desktop: continuous marquee via requestAnimationFrame
  useEffect(() => {
    const track = desktopTrackRef.current;
    if (!track) return;
    let pos = 0;
    const speed = 0.5; // px per frame

    const tick = () => {
      if (!pausedRef.current) {
        pos += speed;
        const half = track.scrollWidth / 2;
        if (pos >= half) pos = 0;
        track.style.transform = `translateX(-${pos}px)`;
      }
      animFrameRef.current = requestAnimationFrame(tick);
    };
    animFrameRef.current = requestAnimationFrame(tick);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  const doubled = [...testimonials, ...testimonials];

  return (
    <section className="py-7 px-4 bg-muted/50">
      <div className="max-w-5xl mx-auto">
        <h2 className="font-display text-3xl sm:text-5xl font-bold text-center mb-5 sm:mb-8 text-foreground">
          What Learners <span className="text-gradient">Say</span>
        </h2>

        {/* Mobile: auto-scroll snap carousel */}
        <div className="relative sm:hidden overflow-hidden">
          <div
            ref={mobileScrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-3"
            onScroll={(e) => {
              const el = e.currentTarget;
              setActiveIndex(Math.round(el.scrollLeft / el.clientWidth));
            }}
            onMouseEnter={() => { pausedRef.current = true; }}
            onMouseLeave={() => { pausedRef.current = false; }}
          >
            {testimonials.map((t, i) => (
              <div key={i} className="w-full flex-shrink-0 snap-start px-1">
                <ReviewCard t={t} getInitials={getInitials} className="w-full" />
              </div>
            ))}
          </div>
          <div className="flex justify-center gap-2 mt-3">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => {
                  const el = mobileScrollRef.current;
                  if (!el) return;
                  el.scrollTo({ left: i * el.clientWidth, behavior: "smooth" });
                  setActiveIndex(i);
                }}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeIndex === i ? "bg-primary w-6" : "bg-muted-foreground/30 w-2"
                }`}
                aria-label={`Go to review ${i + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: infinite auto-scrolling marquee */}
        <div
          className="hidden sm:block overflow-hidden"
          onMouseEnter={() => { pausedRef.current = true; }}
          onMouseLeave={() => { pausedRef.current = false; }}
        >
          <div ref={desktopTrackRef} className="flex gap-3 will-change-transform">
            {doubled.map((t, i) => (
              <ReviewCard key={i} t={t} getInitials={getInitials} className="w-64 flex-shrink-0" />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
